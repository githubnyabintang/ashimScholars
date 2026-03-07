const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PORT = 9002;
const BASE_URL = `http://localhost:${PORT}`;
const TARGET_DIR = 'D:\\.IMAS\\html dashboard';

// All actual dashboard routes based on page.tsx files found
const routes = [
    { path: '/dashboard', filename: 'dashboard.html' },
    // Santri
    { path: '/dashboard/santri/data', filename: 'santri-data.html' },
    { path: '/dashboard/santri/catatan', filename: 'santri-catatan.html' },
    { path: '/dashboard/santri/presensi', filename: 'santri-presensi.html' },
    // Pegawai
    { path: '/dashboard/pegawai/master', filename: 'pegawai-master.html' },
    { path: '/dashboard/pegawai/data', filename: 'pegawai-data.html' },
    { path: '/dashboard/pegawai/absensi', filename: 'pegawai-absensi.html' },
    { path: '/dashboard/pegawai/data-absensi', filename: 'pegawai-data-absensi.html' },
    { path: '/dashboard/pegawai/absensi-badal', filename: 'pegawai-absensi-badal.html' },
    // Akademik
    { path: '/dashboard/akademik/jadwal-badal', filename: 'akademik-jadwal-badal.html' },
    // Keuangan
    { path: '/dashboard/keuangan/pegawai/master', filename: 'keuangan-pegawai-master.html' },
    { path: '/dashboard/keuangan/pegawai/rekap-gaji', filename: 'keuangan-pegawai-rekap-gaji.html' },
    { path: '/dashboard/keuangan/santri/master', filename: 'keuangan-santri-master.html' },
    { path: '/dashboard/keuangan/santri/pembayaran', filename: 'keuangan-santri-pembayaran.html' },
    // Lembaga
    { path: '/dashboard/lembaga/profil', filename: 'lembaga-profil.html' },
    { path: '/dashboard/lembaga/struktur', filename: 'lembaga-struktur.html' },
    { path: '/dashboard/lembaga/hak-akses', filename: 'lembaga-hak-akses.html' },
    { path: '/dashboard/lembaga/artikel', filename: 'lembaga-artikel.html' },
    { path: '/dashboard/lembaga/galeri', filename: 'lembaga-galeri.html' },
    // Program
    { path: '/dashboard/program/master-program', filename: 'program-master-program.html' },
    { path: '/dashboard/program/tahfidz', filename: 'program-tahfidz.html' },
    // Market
    { path: '/dashboard/market/produk', filename: 'market-produk.html' },
    { path: '/dashboard/market/pegawai-market', filename: 'market-pegawai-market.html' },
    { path: '/dashboard/market/kasir-market', filename: 'market-kasir-market.html' },
    { path: '/dashboard/market/kasir-laundry', filename: 'market-kasir-laundry.html' },
    // SPSB
    { path: '/dashboard/spsb/panduan', filename: 'spsb-panduan.html' },
];

// Build a mapping from route path to filename for link rewriting
const routeToFile = {};
routes.forEach(r => { routeToFile[r.path] = r.filename; });

async function extractHtml() {
    if (!fs.existsSync(TARGET_DIR)) {
        fs.mkdirSync(TARGET_DIR, { recursive: true });
        console.log(`Created directory: ${TARGET_DIR}`);
    }

    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    console.log(`Extracting ${routes.length} dashboard routes...`);

    for (const route of routes) {
        const url = `${BASE_URL}${route.path}`;
        const filePath = path.join(TARGET_DIR, route.filename);

        console.log(`Navigating to ${url}...`);
        try {
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
            // Wait for client-side rendering and animations
            await new Promise(r => setTimeout(r, 3000));

            // Extract all CSS from the page
            const allCss = await page.evaluate(() => {
                let css = '';
                document.querySelectorAll('style').forEach(s => { css += s.textContent + '\n'; });
                for (const sheet of document.styleSheets) {
                    try {
                        for (const rule of sheet.cssRules) {
                            css += rule.cssText + '\n';
                        }
                    } catch (e) { /* cross-origin stylesheet, skip */ }
                }
                return css;
            });

            // Get the body HTML after cleaning up Next.js artifacts
            let bodyHtml = await page.evaluate((routeMap) => {
                // Remove all script tags
                document.querySelectorAll('script').forEach(s => s.remove());
                // Remove Next.js dev overlay
                document.querySelectorAll('[data-nextjs-dev-overlay]').forEach(el => el.remove());
                document.querySelectorAll('nextjs-portal').forEach(el => el.remove());
                document.querySelectorAll('next-route-announcer').forEach(el => el.remove());
                // Remove hidden divs (RSC payload containers)
                document.querySelectorAll('div[hidden]').forEach(el => el.remove());
                // Remove link tags pointing to /_next (we inline CSS)
                document.querySelectorAll('link[href^="/_next"]').forEach(el => el.remove());
                // Remove preload links
                document.querySelectorAll('link[rel="preload"][href^="/_next"]').forEach(el => el.remove());

                // Fix image src: /logo.png -> logo.png (relative)
                document.querySelectorAll('img').forEach(img => {
                    const src = img.getAttribute('src');
                    if (src && src.startsWith('/') && !src.startsWith('//') && !src.startsWith('/http')) {
                        // Convert absolute path to relative, e.g. /logo.png -> logo.png
                        img.setAttribute('src', src.substring(1));
                    }
                });

                // Rewrite navigation links from Next.js routes to local .html files
                document.querySelectorAll('a[href]').forEach(a => {
                    const href = a.getAttribute('href');
                    if (href && routeMap[href]) {
                        a.setAttribute('href', routeMap[href]);
                    } else if (href === '/') {
                        // Logout / home link
                        a.setAttribute('href', 'dashboard.html');
                    } else if (href && href.startsWith('/dashboard')) {
                        // Try to find partial match — for routes not in our map, link to dashboard
                        a.setAttribute('href', 'dashboard.html');
                    }
                });

                return document.body.outerHTML;
            }, routeToFile);

            // Build a clean standalone HTML
            const cleanHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dashboard - Al-Imam Ashim | ${route.filename.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
  <link rel="icon" href="logo.png" type="image/png">
  <style>
${allCss}
  </style>
</head>
${bodyHtml}
</html>`;

            fs.writeFileSync(filePath, cleanHtml);
            console.log(`  ✓ Saved ${route.filename} (${(cleanHtml.length / 1024).toFixed(1)} KB)`);
        } catch (err) {
            console.error(`  ✗ Failed ${url}: ${err.message}`);
        }
    }

    await browser.close();
    console.log(`\nFinished! ${routes.length} files saved to ${TARGET_DIR}`);
}

extractHtml().catch(console.error);

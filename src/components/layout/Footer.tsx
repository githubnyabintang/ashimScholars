
import React from "react";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/40 pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="relative w-9 h-9 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[8px] font-bold text-white/80 leading-[0.8]">
                  Pondok Pesantren Tahfizhul Qur&apos;an
                </span>
                <span className="text-[16px] font-extrabold tracking-[-0.02em] text-white headline leading-[1.1]">
                  Al-Imam <span className="text-accent">Ashim</span>
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Pondok Pesantren Tahfizhul Qur&apos;an Al-Imam Ashim Makassar — membina generasi penghafal Al-Qur&apos;an yang berakhlak mulia dan berwawasan luas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-background transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-background transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Daftar Kampus</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#contact" className="hover:text-accent transition-colors">KAMPUS I PUTRA</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">KAMPUS II PUTRA</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">KAMPUS PUTRI</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">HMQ TELKOM</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-accent transition-colors">Tentang Kami</Link></li>
              <li><Link href="#programs" className="hover:text-accent transition-colors">Program</Link></li>
              <li><Link href="#news" className="hover:text-accent transition-colors">Berita Terbaru</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Kontak</Link></li>
              <li><Link href="/login" className="hover:text-accent transition-colors">Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Kontak</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">A:</span>
                <span>Jl. Inspeksi Kanal Tamangapa Utara, Kel. Tidung, Kec. Manggala, Kota Makassar, Sulawesi Selatan 90233</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent font-bold">P:</span>
                <span>0821 7776 9363</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent font-bold">P:</span>
                <span>0821 9379 0602</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© Copyright PPTQ Al-Imam Ashim Makassar @2024</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

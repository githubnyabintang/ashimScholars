
import type { Metadata } from 'next';
import './globals.css';
import MobileNav from '@/components/layout/MobileNav';

export const metadata: Metadata = {
  title: 'Pondok Tahfizhul Qur\'an Al-Imam Ashim Makassar | Excellence in Islamic Education',
  description: 'Pondok Tahfizhul Qur\'an Al-Imam Ashim Makassar is a premier Islamic institution dedicated to academic rigor, spiritual growth, and the mastery of sacred sciences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground pb-20 md:pb-0">
        {children}
        <MobileNav />
      </body>
    </html>
  );
}

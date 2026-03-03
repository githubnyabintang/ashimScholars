
import React from "react";
import Link from "next/link";
import { BookOpen, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/40 pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold headline text-white">
                Ashim<span className="text-accent">Scholars</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Ashim Scholars is a global leader in Islamic education, blending classical scholarship with modern academic excellence to nurture the leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-background transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-background transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-background transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Academic Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#programs" className="hover:text-accent transition-colors">Course Catalog</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Academic Calendar</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Faculty Directory</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Library & Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#apply" className="hover:text-accent transition-colors">Admissions</Link></li>
              <li><Link href="#news" className="hover:text-accent transition-colors">Latest News</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">A:</span>
                <span>KM 12, Ashim Way, Zaria, Kaduna State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent font-bold">P:</span>
                <span>+234 (0) 803 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent font-bold">E:</span>
                <span>info@ashimscholars.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Ashim Scholars Institution. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

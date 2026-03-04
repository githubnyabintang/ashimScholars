"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, User } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "About", href: "#about" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
    { name: "Login", href: "/login" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/90 backdrop-blur-md border-b border-border py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 md:w-11 md:h-11 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center mt-1">
            <span className="text-[8px] md:text-[9.5px] font-bold text-white/90 leading-[0.8]">
              Pondok Pesantren Tahfizhul Qur'an
            </span>
            <span className="text-[17px] md:text-[21px] font-extrabold tracking-[-0.02em] text-white headline leading-[1.1]">
              Al-Imam Ashim Makassar
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" className="bg-accent text-background hover:bg-accent/90 font-bold shadow-md">
            Daftar Sekarang
          </Button>
        </div>

        {/* Mobile Header Action */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/login">
            <Button size="icon" variant="ghost" className="text-accent hover:bg-accent/10 rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
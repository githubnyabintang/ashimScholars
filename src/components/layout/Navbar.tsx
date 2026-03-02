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
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 md:p-2 rounded-lg group-hover:bg-accent transition-colors shadow-lg">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-background" />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight text-white headline">
            Al-Imam<span className="text-accent">Ashim</span>
          </span>
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
          <Button size="icon" variant="ghost" className="text-accent hover:bg-accent/10 rounded-full">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
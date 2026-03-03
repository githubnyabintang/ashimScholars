"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Home, GraduationCap, Newspaper, MessageSquare, Send } from "lucide-react";

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "Programs", href: "#programs", icon: GraduationCap },
  { name: "News", href: "#news", icon: Newspaper },
  { name: "Apply", href: "#apply", icon: Send },
  { name: "Contact", href: "#contact", icon: MessageSquare },
];

export default function MobileNav() {
  const [activeTab, setActiveTab] = useState("#");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(window.location.hash || "#");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 pointer-events-none">
      <nav className="bg-background/95 backdrop-blur-md rounded-[2.5rem] flex items-center justify-around py-3 px-4 shadow-2xl pointer-events-auto border border-white/10">
        {navItems.map((item) => {
          const isActive = activeTab === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.href)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive ? "text-accent scale-110" : "text-muted-foreground"
              }`}
            >
              <div className={`p-2.5 rounded-2xl transition-colors ${isActive ? "bg-accent/10" : ""}`}>
                <item.icon className={`w-5 h-5 ${isActive ? "text-accent fill-accent/20" : ""}`} />
              </div>
              <span className={`text-[10px] font-black uppercase tracking-tighter ${isActive ? "opacity-100" : "opacity-50"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
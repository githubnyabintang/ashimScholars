"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Home, GraduationCap, Newspaper, MessageSquare, Send } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "News", href: "#news", icon: Newspaper },
  { name: "Programs", href: "#programs", icon: GraduationCap },
  { name: "Home", href: "#", icon: Home },
  { name: "Apply", href: "#apply", icon: Send },
  { name: "Contact", href: "#contact", icon: MessageSquare },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("#");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(window.location.hash || "#");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (pathname === "/login" || pathname?.startsWith("/dashboard")) {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <nav className="bg-white dark:bg-zinc-950 grid grid-cols-5 items-center justify-items-center h-[72px] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pointer-events-auto rounded-t-3xl border-t border-gray-100 dark:border-zinc-800 relative px-2">
        {navItems.map((item, index) => {
          const isActive = activeTab === item.href;
          const isCenter = index === 2;

          if (isCenter) {
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.href)}
                className="relative -top-6 flex flex-col items-center justify-center w-full h-full pointer-events-auto"
                aria-label={item.name}
              >
                <div className="w-[56px] h-[56px] bg-[#FBBF24] rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(251,191,36,0.4)] transition-transform hover:scale-105 active:scale-95">
                  <item.icon className="w-7 h-7 text-[#166534]" strokeWidth={2.5} />
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.href)}
              className={`flex flex-col items-center justify-center gap-1.5 transition-all w-full h-full pointer-events-auto ${isActive ? "text-[#166534]" : "text-slate-500 hover:text-slate-700 dark:text-slate-400"
                }`}
            >
              <item.icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[11px] font-medium leading-none capitalize">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
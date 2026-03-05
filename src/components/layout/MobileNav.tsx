"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Home, GraduationCap, Newspaper, MessageSquare, Images } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Berita", href: "#news", sectionId: "news", icon: Newspaper },
  { name: "Program", href: "#programs", sectionId: "programs", icon: GraduationCap },
  { name: "Beranda", href: "#", sectionId: "hero", icon: Home },
  { name: "Galeri", href: "#galeri", sectionId: "galeri", icon: Images },
  { name: "Kontak", href: "#contact", sectionId: "contact", icon: MessageSquare },
];

// All section IDs we want to observe (order matters for priority)
const allSectionIds = ["hero", "programs", "about", "galeri", "news", "struktur", "contact"];

export default function MobileNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll spy using IntersectionObserver
  useEffect(() => {
    const sectionElements = allSectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Pick the first visible section in DOM order as active
        for (const id of allSectionIds) {
          if (visibleSections.has(id)) {
            setActiveSection(id);
            break;
          }
        }

        // If nothing visible and at top of page, default to hero
        if (visibleSections.size === 0 && window.scrollY < 200) {
          setActiveSection("hero");
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px", // trigger when section is roughly in the middle of viewport
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Also detect top of page for "Beranda"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, []);

  if (pathname === "/login" || pathname?.startsWith("/dashboard")) {
    return null;
  }

  // Map active section to the closest nav item
  const getNavActiveSection = (sectionId: string) => {
    // "about" and "hero" both map to "Beranda"
    if (sectionId === "about" || sectionId === "hero") return "hero";
    // "struktur" maps to closest — could be galeri or contact
    if (sectionId === "struktur") return "contact";
    return sectionId;
  };

  const mappedActive = getNavActiveSection(activeSection);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <nav className="bg-white dark:bg-zinc-950 grid grid-cols-5 items-center justify-items-center h-[72px] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pointer-events-auto rounded-t-3xl border-t border-gray-100 dark:border-zinc-800 relative px-2">
        {navItems.map((item, index) => {
          const isActive = mappedActive === item.sectionId;
          const isCenter = index === 2;

          if (isCenter) {
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleClick(item.sectionId)}
                className="relative -top-6 flex flex-col items-center justify-center w-full h-full pointer-events-auto"
                aria-label={item.name}
              >
                <div
                  className={`w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(251,191,36,0.4)] transition-all duration-300 ${isActive
                      ? "bg-[#FBBF24] scale-110"
                      : "bg-[#FBBF24]/80 hover:scale-105"
                    }`}
                >
                  <item.icon className="w-7 h-7 text-[#166534]" strokeWidth={2.5} />
                </div>
                <span className={`text-[10px] font-bold mt-1 transition-colors ${isActive ? "text-[#166534]" : "text-slate-400"}`}>
                  {item.name}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item.sectionId)}
              className={`flex flex-col items-center justify-center gap-1.5 transition-all duration-300 w-full h-full pointer-events-auto ${isActive ? "text-[#166534]" : "text-slate-500 hover:text-slate-700 dark:text-slate-400"
                }`}
            >
              <item.icon className={`w-6 h-6 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[11px] leading-none capitalize transition-all ${isActive ? "font-bold" : "font-medium"}`}>
                {item.name}
              </span>
              {isActive && (
                <div className="absolute bottom-1 w-6 h-1 bg-[#166534] rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
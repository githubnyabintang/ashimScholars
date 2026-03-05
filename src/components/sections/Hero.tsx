"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing/hero-bg.jpeg"
          alt="PPTQ Al-Imam Ashim Makassar"
          fill
          className="object-cover opacity-30 grayscale-[0.1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Basmalah */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/landing/basmalah.webp"
              alt="Bismillahirrahmanirrahim"
              width={280}
              height={60}
              className="opacity-90"
              style={{ filter: 'brightness(0) saturate(100%) invert(83%) sepia(60%) saturate(1000%) hue-rotate(5deg) brightness(105%) contrast(101%)' }}
            />
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-4 headline leading-[1] tracking-tight text-white">
            AL-<span className="text-accent">QUR&apos;AN</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white/90 headline leading-tight">
            Sahabat Kami dan <span className="text-gradient">Penyemangat Hidup Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Pondok Pesantren Tahfizhul Qur&apos;an Al-Imam Ashim Makassar — membina generasi penghafal Al-Qur&apos;an yang berakhlak mulia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href="/login">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-black px-10 h-14 rounded-[1.5rem] shadow-2xl transition-all">
                Login Santri
              </Button>
            </Link>
            <Link href="https://al-imamashim.my.id/" target="_blank">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg font-bold px-10 h-14 rounded-[1.5rem] backdrop-blur-sm">
                Pendaftaran PSB <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://al-imamashim.my.id/" target="_blank">
              <Button size="lg" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 text-lg font-bold px-10 h-14 rounded-[1.5rem] backdrop-blur-sm">
                Panduan PSB
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
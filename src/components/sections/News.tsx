"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const newsItems = [
  {
    title: "Pelatihan Konten Kreator",
    image: "/images/landing/news-1.jpg",
    excerpt:
      "Kegiatan pelatihan konten kreator untuk meningkatkan kemampuan digital santri dan pegawai pesantren.",
  },
  {
    title:
      "80 Hafizh Qur'an Ponpes Al Imam Ashim Kumpul di Bantaeng",
    image: "/images/landing/news-2.png",
    excerpt:
      "80 penghafal Al-Qur'an dari Ponpes Al Imam Ashim berkumpul di Bantaeng dalam acara silaturahim dan pembinaan.",
  },
  {
    title:
      "Kepala Sekolah MTs INOVATIF Bidang Pengembangan Lembaga Pendidikan",
    image: "/images/landing/news-3.jpg",
    excerpt:
      "Penghargaan kepada Kepala Sekolah MTs yang inovatif dalam bidang pengembangan lembaga pendidikan Islam.",
  },
  {
    title:
      "Kini PPTQ Al Imam Ashim Punya Media Digital, KH Syam Amir Apresiasi MUI Sulsel",
    image: "/images/landing/news-4.jpg",
    excerpt:
      "PPTQ Al Imam Ashim meluncurkan media digital, mendapat apresiasi dari KH Syam Amir dan MUI Sulsel.",
  },
];

export default function News() {
  return (
    <section id="news" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 headline text-white">
            Berita <span className="text-accent">Terbaru</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Berbagai kabar terbaru dari aktivitas dan program kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-none overflow-hidden group cursor-pointer shadow-xl rounded-[2rem] hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold mb-3 headline text-card-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-1 text-primary font-black group-hover:gap-2 transition-all text-sm uppercase tracking-tighter">
                  Baca Selengkapnya{" "}
                  <ChevronRight className="w-4 h-4 text-accent" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
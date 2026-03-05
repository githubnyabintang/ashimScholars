"use client";

import React from "react";
import Image from "next/image";

const galeriItems = [
    {
        title: "Kunjungan Sosialisasi Dosen dan Mahasiswa UIN Alauddin Makassar kepada Madrasah Aliyah",
        image: "/images/landing/galeri-1.jpg",
    },
    {
        title: "Bimbingan Ilmu Tajwid Oleh Dr. H. Hizbullah Huda",
        image: "/images/landing/galeri-2.jpg",
    },
    {
        title: "Pengajian rutin malam kamis Oleh ustadz jamaluddin kulau lc.",
        image: "/images/landing/galeri-3.jpg",
    },
    {
        title: "Kultum Sebelum Buka Puasa di hari Kamis",
        image: "/images/landing/galeri-4.jpg",
    },
    {
        title: "PELATIHAN MHQ Oleh Ust Alimuddin Syukur di Kantor Halal KAMPUS 2",
        image: "/images/landing/galeri-5.jpg",
    },
];

export default function Galeri() {
    return (
        <section id="galeri" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 headline text-white">
                        <span className="text-accent">Galeri</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Dokumentasi kegiatan, aktivitas, dan momen terbaik santri di lingkungan pesantren.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {galeriItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-xs font-bold leading-tight line-clamp-3">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import Image from "next/image";

const strukturData = [
    {
        nama: "Al Hafizh KH. Syam Amir Yunus",
        jabatan: "Pimpinan Pengasuh",
        foto: "/images/landing/struktur-1.jpg",
    },
    {
        nama: "Jamalullaili, S.Pd.I",
        jabatan: "Kepala Bidang Taklim dan Pembinaan",
        foto: "/images/landing/struktur-2.png",
    },
];

export default function Struktur() {
    return (
        <section id="struktur" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 headline text-white">
                        <span className="text-accent">Struktur</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Struktur lengkap para pembina, tenaga pendidik, dan pegawai yang menjalankan operasional pesantren.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {strukturData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-[2rem] overflow-hidden shadow-2xl border-none w-64 group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={item.foto}
                                    alt={item.nama}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="text-base font-bold text-card-foreground headline leading-tight mb-1">
                                    {item.nama}
                                </h3>
                                <p className="text-sm text-primary font-semibold">{item.jabatan}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

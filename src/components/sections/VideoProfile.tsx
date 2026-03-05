import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function VideoProfile() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="p-10 md:p-16 text-center">
            {/* Basmalah */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/landing/basmalah.webp"
                alt="Bismillahirrahmanirrahim"
                width={220}
                height={50}
                className="opacity-90"
                style={{ filter: 'brightness(0) saturate(100%) invert(83%) sepia(60%) saturate(1000%) hue-rotate(5deg) brightness(105%) contrast(101%)' }}
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold headline mb-6 text-white">
              Kenali Kami <span className="text-accent">Lebih Dekat</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-white">PPTQ Al-Imam Ashim</strong> adalah lembaga Pendidikan Islam berbasis Pesantren di Makassar yang dinaungi oleh Yayasan al-Imam Ashim. Pondok pesantren ini ikut menjembatani terwujudnya jawaban akan kekhawatiran semakin langkanya penghafal Al-Qur&apos;an.
              </p>
              <p>
                Alhamdulillah, senantiasa kita panjatkan kehadirat Allah SWT yang telah melimpahkan rahmat dan karunia-Nya, sehingga kami dapat terus berkontribusi dalam mencetak generasi Qur&apos;ani yang berakhlak mulia dan berwawasan luas.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://al-imamashim.my.id/Umum/Profil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-colors shadow-md"
              >
                Selengkapnya
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}

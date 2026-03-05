"use client";

import React, { useState } from "react";
import { Phone, MapPin } from "lucide-react";

const kampusList = [
  {
    id: 1,
    name: "KAMPUS I PUTRA",
    fullName: "PPTQ. Al-Imam Ashim Makassar I",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.6229211035607!2d119.44065787416869!3d-5.164210252159518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2ec9c012ce5%3A0xc8733e299c730533!2sPondok%20Pesantren%20Tahfizul%20Qur%27an%20Al%20Imam%20Ashim%20Kampus%20I!5e0!3m2!1sen!2sid!4v1747203646199!5m2!1sen!2sid",
  },
  {
    id: 2,
    name: "KAMPUS II PUTRA",
    fullName: "PPTQ. Al-Imam Ashim Makassar II",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5340208378443!2d119.46918707416877!3d-5.178374252264956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3a995cee0e7%3A0x222322d180e47cf1!2sPondok%20Pesantren%20Tahfizhul%20Qur%27an%20Al-Imam%20Ashim%20Kampus%20II!5e0!3m2!1sen!2sid!4v1747203588857!5m2!1sen!2sid",
  },
  {
    id: 3,
    name: "KAMPUS PUTRI",
    fullName: "PPTQ. Al-Imam Ashim Makassar IV",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15893.229743206184!2d119.47055495541993!3d-5.214301299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee15fd3d24e0f%3A0xd1b7a42b50e19a86!2sPondok%20Pesantren%20Tahfizhul%20Qur%27an%20Putri%20Al%20Imam%20Ashim%20Kampus%20IV!5e0!3m2!1sen!2sid!4v1747203700259!5m2!1sen!2sid",
  },
  {
    id: 4,
    name: "HMQ TELKOM",
    fullName: "HMQ Telkom",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8245498423025!2d119.49795197416823!3d-5.131941351920474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefcae378ff215%3A0xe72b45ed3b902964!2sPPTQ%20AL%20IMAM%20ASHIM!5e0!3m2!1sen!2sid!4v1747203533362!5m2!1sen!2sid",
  },
];

export default function Contact() {
  const [activeKampus, setActiveKampus] = useState(0);

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 headline text-white">
            Kampus & <span className="text-accent">Alamat</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Informasi lokasi dan alamat setiap kampus.
          </p>
        </div>

        {/* Campus Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {kampusList.map((kampus, index) => (
            <button
              key={kampus.id}
              onClick={() => setActiveKampus(index)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeKampus === index
                  ? "bg-accent text-background shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
                }`}
            >
              <div className="text-xs opacity-70">{kampus.fullName}</div>
              <div>{kampus.name}</div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden glass-card min-h-[400px] relative">
            <iframe
              src={kampusList[activeKampus].mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Peta ${kampusList[activeKampus].name}`}
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <h3 className="text-xl font-bold text-white headline">Narahubung</h3>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Admin Pendaftaran & Humas</p>
                  <a href="https://wa.me/6282177769363" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-accent transition-colors">
                    0821 7776 9363
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Admin Keuangan Kampus 4 & 1</p>
                  <a href="https://wa.me/6282193790602" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-accent transition-colors">
                    0821 9379 0602
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Admin Keuangan Kampus 2</p>
                  <a href="https://wa.me/6282193790601" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-accent transition-colors">
                    0821 9379 0601
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-accent shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Alamat</p>
                  <p className="font-bold text-white text-sm leading-relaxed">
                    Jl. Inspeksi Kanal Tamangapa Utara, Kelurahan Tidung, Kecamatan Manggala, Kota Makassar, Sulawesi Selatan 90233
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

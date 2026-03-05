import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Settings } from "lucide-react";

const programs = [
  {
    title: "Program Hafidz",
    icon: BookOpen,
    description:
      "Pembinaan intensif hafalan Al-Qur'an dengan program Morajaah, Ziyadah, Binnadzhor, Tahsin, dan lainnya.",
  },
  {
    title: "Santri & Asatidz",
    icon: Users,
    description:
      "Didampingi oleh para asatidz berpengalaman untuk mencetak generasi Qur'ani yang berakhlak mulia.",
  },
  {
    title: "Manajemen Terpadu",
    icon: Settings,
    description:
      "Sistem manajemen pesantren terintegrasi: administrasi, keuangan, dan kegiatan harian santri.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 headline text-white">
            Program <span className="text-accent">Unggulan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Berbagai program pendidikan dan pembinaan untuk mencetak generasi penghafal Al-Qur&apos;an yang unggul.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="bg-card border-none group overflow-hidden shadow-2xl rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-300"
              >
                <CardHeader className="pb-4 pt-10 px-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="headline text-2xl text-card-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <p className="text-card-foreground/70 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
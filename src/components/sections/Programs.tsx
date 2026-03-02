
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Clock, Book, User } from "lucide-react";

const programs = [
  {
    title: "Tahfizul Quran",
    category: "Sacred Sciences",
    duration: "3-4 Years",
    level: "Advanced",
    instructor: "Shaykh Ahmad Al-Faruq",
    description: "A comprehensive program focused on the memorization, recitation, and understanding of the Holy Quran with proper Tajweed.",
    image: "program-quran"
  },
  {
    title: "Arabic Linguistics",
    category: "Languages",
    duration: "2 Years",
    level: "Intermediate",
    instructor: "Dr. Laila Mansour",
    description: "Master the nuances of classical and modern Arabic grammar, literature, and conversation for academic and professional use.",
    image: "program-arabic"
  },
  {
    title: "Islamic Jurisprudence (Fiqh)",
    category: "Academic",
    duration: "4 Years",
    level: "Undergraduate",
    instructor: "Prof. Yusuf Al-Amin",
    description: "In-depth study of Islamic law across various schools of thought, addressing modern legal and ethical challenges.",
    image: "hero-campus"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 headline">Academic <span className="text-accent">Catalog</span></h2>
            <p className="text-muted-foreground">Discover our diverse range of educational programs designed to provide a holistic and rigorous learning experience.</p>
          </div>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
            View All Programs
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const placeholder = PlaceHolderImages.find(p => p.id === program.image);
            return (
              <Card key={index} className="glass-card border-none group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={placeholder?.imageUrl || ""}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={placeholder?.imageHint}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-background border-none">{program.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="headline text-2xl group-hover:text-accent transition-colors">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground line-clamp-3">
                    {program.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Book className="w-4 h-4 text-accent" />
                      <span>{program.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                      <User className="w-4 h-4 text-accent" />
                      <span>{program.instructor}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/80">Learn More</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

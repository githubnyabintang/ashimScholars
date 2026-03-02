import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Calendar, ChevronRight } from "lucide-react";

const newsItems = [
  {
    title: "Annual Convocation 2024: Celebrating Our Scholars",
    date: "May 15, 2024",
    image: "news-graduation",
    excerpt: "Ashim Scholars recently held its 15th annual convocation, honoring the achievements of our graduates in sacred sciences."
  },
  {
    title: "New Research Grant for Islamic Digital Archives",
    date: "April 28, 2024",
    image: "hero-campus",
    excerpt: "We are proud to announce a significant grant to digitize ancient manuscripts from the West African Islamic tradition."
  },
  {
    title: "Community Outreach: Weekend Madrasah Program",
    date: "April 10, 2024",
    image: "news-community",
    excerpt: "Join our newly launched community program designed for professionals to deepen their understanding of Deen."
  }
];

export default function News() {
  return (
    <section id="news" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 headline text-white">Latest <span className="text-accent">News & Insights</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Stay updated with happenings, academic research, and community events at Ashim Scholars.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => {
            const placeholder = PlaceHolderImages.find(p => p.id === item.image);
            return (
              <Card key={index} className="bg-card border-none overflow-hidden group cursor-pointer shadow-xl rounded-[2rem]">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={placeholder?.imageUrl || ""}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint={placeholder?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 headline text-card-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-primary font-black group-hover:gap-2 transition-all text-sm uppercase tracking-tighter">
                    Read Full Article <ChevronRight className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
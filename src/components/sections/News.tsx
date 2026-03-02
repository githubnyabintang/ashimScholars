
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
    excerpt: "Join our newly launched community program designed for working professionals to deepen their understanding of Deen."
  }
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 headline">Latest <span className="text-accent">News & Insights</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Stay updated with the latest happenings, academic research, and community events at Ashim Scholars.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => {
            const placeholder = PlaceHolderImages.find(p => p.id === item.image);
            return (
              <Card key={index} className="bg-transparent border-none overflow-hidden group cursor-pointer">
                <div className="relative h-64 mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={placeholder?.imageUrl || ""}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={placeholder?.imageHint}
                  />
                </div>
                <div className="flex items-center gap-2 text-accent text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 headline group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-1 text-white font-medium group-hover:gap-2 transition-all">
                  Read Article <ChevronRight className="w-4 h-4 text-accent" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

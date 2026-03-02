
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function VideoProfile() {
  const videoThumb = PlaceHolderImages.find(p => p.id === "video-thumbnail");

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden relative group cursor-pointer shadow-2xl">
          <div className="aspect-video relative">
            <Image
              src={videoThumb?.imageUrl || ""}
              alt="Ashim Scholars Profile"
              fill
              className="object-cover transition-opacity duration-700 opacity-60 group-hover:opacity-40"
              data-ai-hint={videoThumb?.imageHint}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-background fill-current" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-background to-transparent">
              <h2 className="text-3xl md:text-4xl font-bold headline mb-2">Our Visionary Journey</h2>
              <p className="text-muted-foreground text-lg">Watch our institutional profile and discover the soul of Ashim Scholars.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}

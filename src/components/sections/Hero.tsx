import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-campus");

  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Ashim Scholars Campus"
          fill
          className="object-cover opacity-40 grayscale-[0.2]"
          priority
          data-ai-hint={heroImage?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-accent text-xs font-black uppercase tracking-widest mb-10">
            <GraduationCap className="w-4 h-4" />
            <span>Islamic Excellence since 1998</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 headline leading-[1] tracking-tight text-white">
            Elevate Your <span className="text-accent">Iman</span> <br />
            & Master Your <span className="text-gradient">Future</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Join Ashim Scholars, a premier Islamic institution dedicated to academic rigor and spiritual growth in a modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-black px-12 h-16 rounded-[1.5rem] shadow-2xl">
              Apply Today <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg font-bold px-12 h-16 rounded-[1.5rem] backdrop-blur-sm">
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
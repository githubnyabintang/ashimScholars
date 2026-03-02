
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-campus");

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Ashim Scholars Campus"
          fill
          className="object-cover opacity-30"
          priority
          data-ai-hint={heroImage?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-accent text-sm font-medium mb-8">
            <GraduationCap className="w-4 h-4" />
            <span>Nurturing Excellence, Preserving Heritage</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 headline leading-[1.1] tracking-tight">
            Elevate Your <span className="text-accent">Knowledge</span> <br />
            Empower Your <span className="text-accent text-gradient">Future</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join Ashim Scholars, a premier Islamic institution dedicated to academic rigor, spiritual growth, and the mastery of sacred sciences in a modern context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-background hover:bg-accent/90 text-lg px-10 h-14 rounded-2xl">
              Explore Programs <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-white hover:bg-primary/10 text-lg px-10 h-14 rounded-2xl backdrop-blur-sm">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}

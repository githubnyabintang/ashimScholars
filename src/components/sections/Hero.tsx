
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
          className="object-cover opacity-40"
          priority
          data-ai-hint={heroImage?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-accent text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Nurturing Excellence, Preserving Heritage</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 headline leading-tight">
            Elevate Your <span className="text-accent">Knowledge</span>, <br />
            Empower Your <span className="text-accent">Future</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
            Join Ashim Scholars, a premier Islamic institution dedicated to academic rigor, spiritual growth, and the mastery of sacred sciences in a modern context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-background hover:bg-accent/90 text-lg px-8">
              Explore Programs <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary-foreground hover:bg-primary/10 text-lg px-8">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-accent/5 blur-[120px] rounded-full" />
    </section>
  );
}


import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Programs from "@/components/sections/Programs";
import VideoProfile from "@/components/sections/VideoProfile";
import Galeri from "@/components/sections/Galeri";
import News from "@/components/sections/News";
import Struktur from "@/components/sections/Struktur";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <section id="about" className="scroll-mt-20">
          <VideoProfile />
        </section>
        <Programs />
        <Galeri />
        <News />
        <Struktur />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

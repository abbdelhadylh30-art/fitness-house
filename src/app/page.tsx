import { Navbar } from "@/components/fitness-house/navbar";
import { Hero } from "@/components/fitness-house/hero";
import { Marquee } from "@/components/fitness-house/marquee";
import { Programs } from "@/components/fitness-house/programs";
import { About } from "@/components/fitness-house/about";
import { Trainers } from "@/components/fitness-house/trainers";
import { Schedule } from "@/components/fitness-house/schedule";
import { Pricing } from "@/components/fitness-house/pricing";
import { Testimonials } from "@/components/fitness-house/testimonials";
import { CTA } from "@/components/fitness-house/cta";
import { Footer } from "@/components/fitness-house/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Programs />
        <About />
        <Trainers />
        <Schedule />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

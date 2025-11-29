import { Features } from "@/components/home/Features";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { Testimonials } from "@/components/home/Testimonials";
import { Navbar } from "@/components/home/Navbar";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SocialGrowth } from "@/components/home/SocialGrowth";
import { Pricing } from "@/components/home/pricing";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <SocialGrowth />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

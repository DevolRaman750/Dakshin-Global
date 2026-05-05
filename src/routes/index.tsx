import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { WhoWeServe } from "@/components/site/WhoWeServe";

import { CargoMatters } from "@/components/site/CargoMatters";
import { Crossing } from "@/components/site/Crossing";
import { TrustUs } from "@/components/site/TrustUs";
import { WhyDakshin } from "@/components/site/WhyDakshin";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { ScrollProgressShip } from "@/components/site/ScrollProgressShip";
import { useScrollMotion } from "@/hooks/useScrollMotion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useScrollMotion();
  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />
      <ScrollProgressShip />
      <Hero />
      <TrustBar />
      <WhoWeServe />

      <CargoMatters />
      <Crossing />
      <TrustUs />
      <WhyDakshin />
      <QuoteForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

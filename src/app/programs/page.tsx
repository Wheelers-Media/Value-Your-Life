import type { Metadata } from "next";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FAQ from "@/components/sections/FAQ";
import GHLBookingWrapper from "@/components/ghl/GHLBookingWrapper";

export const metadata: Metadata = {
  title: "Programs & Services | Value Your Life Wellness",
  description:
    "Explore our holistic wellness and nutrition coaching programs designed to help you transform your life and build sustainable habits.",
};

export default function ProgramsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="container-brand text-center max-w-3xl mx-auto px-6 mb-8">
        <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-800 mb-6">
          Our Programs
        </h1>
        <p className="text-earth-600 text-lg leading-relaxed">
          Whether you need a quick reset or a deep transformation, our tailored coaching 
          and nutrition programs are designed around your unique journey. 
        </p>
      </div>

      <ServicesOverview />
      <FAQ />
      <GHLBookingWrapper />
    </div>
  );
}

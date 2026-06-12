import Hero from "@/components/sections/Hero";
import EmpathyBlock from "@/components/sections/EmpathyBlock";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Testimonials from "@/components/sections/Testimonials";
import GHLBookingWrapper from "@/components/ghl/GHLBookingWrapper";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmpathyBlock />
      <ServicesOverview />
      <Testimonials />
      <GHLBookingWrapper />
    </>
  );
}

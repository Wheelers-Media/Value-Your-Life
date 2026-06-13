// Trigger redeployment
import Hero from "@/components/sections/Hero";
import EmpathyBlock from "@/components/sections/EmpathyBlock";
import ServicesOverview from "@/components/sections/ServicesOverview";
import GHLBookingWrapper from "@/components/ghl/GHLBookingWrapper";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmpathyBlock />
      <ServicesOverview />
      <GHLBookingWrapper />
    </>
  );
}

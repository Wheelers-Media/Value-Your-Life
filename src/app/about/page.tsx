import type { Metadata } from "next";
import Image from "next/image";
import EmpathyBlock from "@/components/sections/EmpathyBlock";
import BookingSection from "@/components/booking/BookingSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Danielle Mayer | Certified Holistic Nutritional Consultant",
  description:
    "Meet Danielle Mayer, C.H.N.C., your compassionate partner in mental wellness, nutrition, and life coaching in Kamloops, BC. Learn about her holistic, bio-individual approach to wellness.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Danielle Mayer | Certified Holistic Nutritional Consultant",
    description:
      "Meet Danielle Mayer, C.H.N.C., your compassionate partner in mental wellness, nutrition, and life coaching in Kamloops, BC. Learn about her holistic, bio-individual approach to wellness.",
    url: "https://valueyourlifewellness.ca/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 bg-sand-50">
      <div className="container-brand px-6 mb-12">
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-800 mb-6">
              Meet Danielle
            </h1>
            <p className="text-earth-600 text-lg leading-relaxed">
              I believe that true wellness goes beyond what&apos;s on your plate. It&apos;s about 
              how you feel in your mind, body, and spirit. As a Certified Holistic Nutritional 
              Consultant™ and Life Coach, my passion is helping you find that balance.
            </p>
            <p className="text-earth-600 text-lg leading-relaxed mt-6">
              My journey began in 2002, driven by curiosity and a desire to understand how food 
              and mindset impact how we feel. Over the years, I committed to studying, researching, 
              and applying strategies that support not only physical health, but also emotional 
              balance and overall well-being. In 2020, I became a Certified Holistic Nutritional 
              Consultant through the Canadian School of Natural Nutrition. With time, I realized 
              nutrition alone wasn&apos;t enough. Lasting change also requires mindset, support, 
              and practical tools. That realization led me to expand into life coaching, integrating 
              nutrition, mental wellness, and lifestyle support to help people create meaningful, 
              sustainable change and live lives they truly value.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <EmpathyBlock />
      
      <section className="py-24 bg-white">
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="container-brand max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif font-bold text-3xl text-earth-800 mb-8">
              My Philosophy
            </h2>
            <div className="text-earth-600 space-y-6 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                My approach to wellness is rooted in empathy, bio-individuality, and practical, 
                sustainable change. There is no &quot;one-size-fits-all&quot; when it comes to your health.
                You have a unique body, a unique lifestyle, and unique challenges, which means 
                your wellness plan needs to be built around <em>you</em>.
              </p>
              <p>
                I focus on the intersection of nutrition and mental well-being because they are 
                inseparably linked. What we feed our bodies directly impacts our minds, and our 
                mental state influences how we nourish ourselves.
              </p>
              <p>
                Together, we don&apos;t just look at symptoms; we look at the whole picture. We 
                build a supportive environment for your body to thrive and for your mind to 
                find peace and clarity.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <BookingSection />
    </div>
  );
}

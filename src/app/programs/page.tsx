import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Clock, Coins, ShieldCheck, HelpCircle } from "lucide-react";
import { PROGRAMS, ADD_ON_SERVICES, CONTACT } from "@/lib/constants";
import BookingSection from "@/components/booking/BookingSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Holistic Wellness Programs & Nutrition Packages | Kamloops",
  description:
    "Browse tailored wellness coaching and holistic nutrition packages by Danielle Mayer, C.H.N.C. in Kamloops, BC. Packages include the 3-week Refresh and 12-week Transformation.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "Holistic Wellness Programs & Nutrition Packages | Kamloops",
    description:
      "Browse tailored wellness coaching and holistic nutrition packages by Danielle Mayer, C.H.N.C. in Kamloops, BC. Packages include the 3-week Refresh and 12-week Transformation.",
    url: "https://valueyourlifewellness.ca/programs",
  },
};

export default function ProgramsPage() {
  return (
    <div className="pt-24 md:pt-32 bg-sand-50">
      {/* ── Page Header ── */}
      <ScrollReveal variant="fade-up" duration={800}>
        <div className="container-brand text-center max-w-3xl mx-auto px-6 mb-16">
          <span className="inline-flex items-center gap-2 text-sage-600 text-sm font-medium tracking-wide uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            Choose Your Path to Wellness
          </span>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-800 mb-6">
            Tailored Programs & Services
          </h1>
          <p className="text-earth-600 text-lg leading-relaxed text-center mx-auto max-w-2xl">
            Nourishing your body and mind requires a personalized approach. Explore our main coaching containers and add-on services below to find the perfect level of support for your schedule, lifestyle, and goals.
          </p>
        </div>
      </ScrollReveal>

      {/* ── Main Programs (Deep-Dive) ── */}
      <div className="container-brand px-6 mb-24">
        <div className="space-y-16 lg:space-y-24">
          {PROGRAMS.map((program) => {
            // We want to skip the "discovery" session here since it's featured at the bottom booking block or has its own highlight
            if (program.id === "discovery") return null;

            return (
              <ScrollReveal
                key={program.id}
                variant="fade-up"
                duration={800}
              >
                <div
                  id={`program-detail-${program.id}`}
                  className={`relative bg-white rounded-3xl border border-sand-200 p-8 md:p-12 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                    program.featured
                      ? "ring-2 ring-terracotta-400/50 shadow-lg shadow-terracotta-500/5"
                      : ""
                  }`}
                >
                {/* Decorative side accent for featured program */}
                {program.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-terracotta-500 to-caramel-400 text-white font-bold text-xs uppercase px-5 py-2 rounded-bl-2xl tracking-wider">
                    Signature Program
                  </div>
                )}

                {/* Left Side: Program Metadata & Summary (5 Cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-2 text-sage-600 font-semibold text-xs uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      {program.duration}
                    </span>
                    <h2 className="font-serif font-bold text-2xl md:text-3xl text-earth-800 leading-tight">
                      {program.name}
                    </h2>
                  </div>

                  <p className="text-earth-600 text-base leading-relaxed">
                    {program.description}
                  </p>

                  <div className="pt-4 border-t border-sand-100 space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-terracotta-500">
                        {program.price}
                      </span>
                      {"paymentPlan" in program && program.paymentPlan && (
                        <span className="text-sm text-earth-400 font-medium">
                          ({program.paymentPlan})
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-earth-500">
                      <strong>Best for:</strong> {program.bestFor}
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href={CONTACT.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2.5 font-bold px-7 py-3.5 rounded-full transition-all duration-300 text-sm w-full sm:w-auto shadow-sm hover:shadow-md ${
                        program.featured
                          ? "bg-terracotta-500 text-white hover:bg-terracotta-600"
                          : "bg-sage-600 text-white hover:bg-sage-700"
                      }`}
                    >
                      {program.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Side: What's Included & Value Points (7 Cols) */}
                <div className="lg:col-span-7 bg-sand-50/50 rounded-2xl border border-sand-100 p-6 md:p-8 space-y-6">
                  <h3 className="font-serif font-bold text-lg text-earth-800 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-sage-600" />
                    What is Included in Your Container:
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.includes.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-terracotta-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-earth-700 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {program.id === "clarity" && (
                    <div className="pt-4 border-t border-sand-200">
                      <p className="text-xs text-earth-500 italic">
                        * All sessions are conducted via our HIPPA/PIPEDA-secure client portal. You will receive custom dashboard access details upon booking.
                      </p>
                    </div>
                  )}

                  {program.id === "foundations" && (
                    <div className="pt-4 border-t border-sand-200 space-y-2">
                      <h4 className="font-semibold text-earth-800 text-xs uppercase tracking-wider">Focus Areas:</h4>
                      <p className="text-sm text-earth-600 leading-relaxed">
                        Stabilizing high-yield habits, digestive comfort fundamentals, basic nervous system grounding, and consistent sleep/energy support.
                      </p>
                    </div>
                  )}

                  {program.id === "growth" && (
                    <div className="pt-4 border-t border-sand-200 space-y-2">
                      <h4 className="font-semibold text-earth-800 text-xs uppercase tracking-wider">Focus Areas:</h4>
                      <p className="text-sm text-earth-600 leading-relaxed">
                        Sustainable routine design, custom biochemical feedback loops, mindset work, building healthy relationships with food, and accountability setups.
                      </p>
                    </div>
                  )}

                  {program.id === "transformation" && (
                    <div className="pt-4 border-t border-sand-200 space-y-2">
                      <h4 className="font-semibold text-earth-800 text-xs uppercase tracking-wider">Full Integration Support:</h4>
                      <p className="text-sm text-earth-600 leading-relaxed">
                        Comprehensive behavioral alignment, optimization of nutrition for hormone and mood support, custom longevity maps, alignment of career/family life with personal values, and priority direct support.
                      </p>
                    </div>
                  )}
                </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* ── Optional Add-On Services ── */}
      <section className="py-24 bg-white border-y border-sand-200">
        <div className="container-brand px-6">
          <ScrollReveal variant="fade-up" duration={800}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-caramel-500 text-sm font-medium tracking-wide uppercase mb-3">
                <Coins className="w-4 h-4" />
                Targeted Support
              </span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-earth-800 mb-4">
                Optional Add-On Services
              </h2>
              <p className="text-earth-500 text-lg leading-relaxed">
                Have specific questions or need localized guidance? These single sessions and reviews are designed to complement our core containers or give a quick boost to your routine.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADD_ON_SERVICES.map((service, index) => (
              <ScrollReveal
                key={service.id}
                variant="fade-up"
                delay={index * 100}
                className="h-full"
              >
                <div
                  id={`add-on-card-${service.id}`}
                  className="bg-sand-50/70 border border-sand-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group h-full"
                >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="font-serif font-bold text-lg text-earth-800 group-hover:text-terracotta-500 transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-xl font-extrabold text-terracotta-500 shrink-0">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-earth-500 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-2 border-t border-sand-200 pt-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-sage-600 mt-1 shrink-0" />
                        <span className="text-xs text-earth-600">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={CONTACT.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full bg-white text-earth-700 border border-sand-300 font-semibold py-2.5 rounded-full text-xs hover:bg-terracotta-500 hover:text-white hover:border-terracotta-500 transition-all duration-300"
                  >
                    Request Session
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </section>

      {/* ── Booking Portal block ── */}
      <BookingSection />
    </div>
  );
}

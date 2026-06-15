"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROGRAMS, CONTACT } from "@/lib/constants";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  // Show main 3 tiers (skip discovery for the overview)
  const displayPrograms = PROGRAMS.filter((p) => p.id !== "discovery");

  return (
    <section
      id="services-overview"
      className="relative py-24 md:py-32 bg-sand-100"
    >
      <div className="container-brand">
        {/* ── Section Header ── */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-teal-500 text-sm font-medium tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            Tailored to Your Journey
          </span>
          <h2
            id="services-headline"
            className="font-serif font-bold text-earth-800 mb-5"
          >
            Programs designed around{" "}
            <span className="text-gradient-warm">your life</span>
          </h2>
          <p className="text-earth-500 text-lg leading-relaxed mx-auto">
            Every program is personalized to your needs — because no two
            journeys to wellness are the same. Choose the level of support
            that&apos;s right for you.
          </p>
        </div>

        {/* ── Program Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {displayPrograms.map((program) => (
            <Card
              key={program.id}
              id={`program-card-${program.id}`}
              className={`relative group border transition-all duration-500 hover:-translate-y-2 ${
                program.featured
                  ? "bg-gradient-to-b from-terracotta-500 to-terracotta-600 text-sand-50 border-terracotta-600 shadow-xl shadow-terracotta-500/20 scale-[1.02] md:scale-105"
                  : "bg-white/80 backdrop-blur-sm border-sand-200 hover:border-terracotta-300/50 hover:shadow-xl hover:shadow-earth-800/5"
              } rounded-3xl overflow-hidden`}
            >
              {/* Featured badge */}
              {program.featured && (
                <div className="absolute top-0 right-0 bg-caramel-400 text-earth-900 text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
                  SIGNATURE PROGRAM
                </div>
              )}

              <CardHeader className="pb-2 pt-8 px-7">
                <CardDescription
                  className={`text-sm font-medium uppercase tracking-wider mb-2 ${
                    program.featured ? "text-sand-200" : "text-sage-500"
                  }`}
                >
                  {program.duration}
                </CardDescription>

                <CardTitle
                  className={`font-serif text-2xl font-bold leading-tight ${
                    program.featured ? "!text-sand-50" : "!text-earth-800"
                  }`}
                >
                  {program.name}
                </CardTitle>

                {/* Price */}
                <div className="mt-4">
                  <span
                    className={`text-4xl font-bold ${
                      program.featured ? "text-sand-50" : "text-terracotta-500"
                    }`}
                  >
                    {program.price}
                  </span>
                  {"paymentPlan" in program && program.paymentPlan && (
                    <p
                      className={`text-sm mt-1 ${
                        program.featured ? "text-sand-200" : "text-earth-400"
                      }`}
                    >
                      {program.paymentPlan}
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="px-7 pb-4">
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    program.featured
                      ? "text-sand-200 max-w-none"
                      : "text-earth-500 max-w-none"
                  }`}
                >
                  {program.description}
                </p>

                {/* Includes list */}
                <ul className="space-y-2.5">
                  {program.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          program.featured
                            ? "text-caramel-300"
                            : "text-sage-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          program.featured ? "text-sand-100" : "text-earth-600"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-7 pb-8 pt-4">
                <a
                  href={CONTACT.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`cta-${program.id}`}
                  className={`flex items-center justify-center gap-2 w-full font-semibold py-3 rounded-full transition-all duration-300 group/btn ${
                    program.featured
                      ? "bg-sand-50 text-terracotta-600 hover:bg-sand-100 shadow-lg"
                      : "bg-terracotta-500 text-sand-50 hover:bg-terracotta-600 shadow-md hover:shadow-lg"
                  }`}
                >
                  {program.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* ── Discovery Session CTA ── */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-sand-200 shadow-sm">
            <div className="text-center sm:text-left">
              <p className="font-serif font-semibold text-earth-800 text-lg">
                Not sure where to start?
              </p>
              <p className="text-earth-500 text-sm mt-1">
                Book a free 30-minute discovery session — no commitment
                required.
              </p>
            </div>
            <a
              href={CONTACT.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="services-discovery-cta"
              className="inline-flex items-center justify-center bg-sage-500 text-sand-50 hover:bg-sage-600 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Book a Free Discovery Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

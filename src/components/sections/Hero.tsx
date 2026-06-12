"use client";

import Link from "next/link";
import { HERO_COPY, PRIMARY_CTA } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Gradient Background ── */}
      <div className="absolute inset-0 z-0">
        {/* Main warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-sand-50 to-sand-200" />

        {/* Organic blob accents */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-terracotta-400/8 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-sage-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-caramel-300/6 blur-3xl" />

        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-earth-600) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container-brand text-center px-6 py-32 md:py-40">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-400/10 border border-sage-400/20 text-sage-600 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            Mental Wellness · Nutrition · Life Coaching
          </span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="animate-fade-in-up font-serif font-bold max-w-4xl mx-auto mb-6"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="block text-earth-800">Value Yourself.</span>
          <span className="block text-gradient-warm mt-1">
            Nourish Your Mind.
          </span>
          <span className="block text-earth-800 mt-1">
            Transform Your Life.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-in-up text-earth-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          {HERO_COPY.subheadline}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.45s" }}
        >
          {/* Hard CTA */}
          <Link
            href={PRIMARY_CTA.href}
            id="hero-primary-cta"
            className="inline-flex items-center justify-center bg-terracotta-500 text-sand-50 hover:bg-terracotta-600 font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 glow-terracotta"
          >
            {HERO_COPY.primaryCta}
          </Link>

          {/* Soft CTA */}
          <Link
            href="/programs"
            id="hero-soft-cta"
            className="inline-flex items-center justify-center border border-earth-300 text-earth-700 hover:bg-sand-200/60 hover:text-terracotta-600 hover:border-terracotta-300 font-medium text-base px-8 py-3.5 rounded-full transition-all duration-300"
          >
            {HERO_COPY.softCta}
          </Link>
        </div>

        {/* Trust indicator */}
        <p
          className="animate-fade-in-up text-earth-400 text-sm mt-8"
          style={{ animationDelay: "0.6s" }}
        >
          Free 30-minute discovery session · No commitment required
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-earth-400 text-xs tracking-wider uppercase">
          Discover More
        </span>
        <ChevronDown className="w-5 h-5 text-terracotta-400 animate-scroll-bounce" />
      </div>

      {/* ── Bottom curve ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 10 480 0 720 20C960 40 1200 60 1440 30V80H0V40Z"
            fill="var(--color-sand-50)"
          />
        </svg>
      </div>
    </section>
  );
}

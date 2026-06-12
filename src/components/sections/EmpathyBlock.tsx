"use client";

import Link from "next/link";
import Image from "next/image";
import { EMPATHY_COPY, PRACTITIONER } from "@/lib/constants";
import { Heart } from "lucide-react";

export default function EmpathyBlock() {
  return (
    <section id="empathy-block" className="relative py-24 md:py-32 bg-sand-50">
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* ── Left: Empathy Copy ── */}
          <div className="order-2 lg:order-1">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-4 h-4 text-terracotta-400" />
              <span className="text-terracotta-500 text-sm font-medium tracking-wide uppercase">
                You&apos;re Not Alone
              </span>
            </div>

            {/* Headline */}
            <h2
              id="empathy-headline"
              className="font-serif font-bold text-earth-800 mb-8"
            >
              {EMPATHY_COPY.headline}
            </h2>

            {/* VoC-driven paragraphs */}
            <div className="space-y-5">
              {EMPATHY_COPY.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-earth-600 leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author attribution */}
            <div className="mt-10 flex items-center gap-4 p-5 rounded-2xl bg-sand-100 border border-sand-200">
              <Image
                src="/images/profile-images.jpg"
                alt={PRACTITIONER.fullTitle}
                width={56}
                height={56}
                className="rounded-full ring-2 ring-terracotta-400/30"
                style={{ height: "auto" }}
              />
              <div>
                <p className="font-serif font-semibold text-earth-800 text-base">
                  {PRACTITIONER.name}
                </p>
                <p className="text-earth-500 text-sm">
                  {PRACTITIONER.title} ({PRACTITIONER.designation}) &{" "}
                  {PRACTITIONER.additionalRole}
                </p>
              </div>
            </div>

            {/* Soft CTA */}
            <div className="mt-8">
              <Link
                href="/about"
                id="empathy-cta"
                className="inline-flex items-center justify-center border border-sage-400 text-sage-600 hover:bg-sage-400/10 hover:text-sage-700 hover:border-sage-500 font-medium px-6 py-3 rounded-full transition-all duration-300"
              >
                {EMPATHY_COPY.cta}
              </Link>
            </div>
          </div>

          {/* ── Right: Visual element ── */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Profile Image */}
              <Image
                src="/images/profile-images.jpg"
                alt={PRACTITIONER.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/40 via-transparent to-transparent" />

              {/* Organic decorative elements overlay */}
              <div className="absolute inset-0 flex items-end justify-center pb-12">
                <div className="relative w-full px-8 text-center">
                  {/* Floating badges */}
                  <div className="absolute -top-16 -right-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-xl border border-sand-200">
                    <span className="text-sage-600 text-xs font-semibold uppercase tracking-wider">
                      ✓ Personalized Plans
                    </span>
                  </div>
                  <div className="absolute -bottom-6 -left-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-xl border border-sand-200">
                    <span className="text-terracotta-500 text-xs font-semibold uppercase tracking-wider">
                      ✓ Compassionate Support
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent behind card */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-sage-400/10 blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-terracotta-400/10 blur-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* ── Bottom organic divider ── */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C360 50 720 10 1080 30C1260 40 1380 45 1440 40V60H0V30Z"
            fill="var(--color-sand-100)"
          />
        </svg>
      </div>
    </section>
  );
}

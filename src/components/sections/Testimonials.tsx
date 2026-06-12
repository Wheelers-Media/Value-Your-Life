"use client";

import { useState, useEffect, useCallback } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % TESTIMONIALS.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [current, goTo]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-sand-50">
      <div className="container-brand">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <span className="text-terracotta-500 text-sm font-medium tracking-wide uppercase mb-4 block">
            Client Stories
          </span>
          <h2
            id="testimonials-headline"
            className="font-serif font-bold text-earth-800 max-w-xl mx-auto"
          >
            Real transformations from{" "}
            <span className="text-gradient-warm">real people</span>
          </h2>
        </div>

        {/* ── Testimonial Carousel ── */}
        <div className="max-w-3xl mx-auto relative">
          {/* Quote card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-sand-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="w-10 h-10 text-terracotta-300/40 mb-6" />

            {/* Animated quote */}
            <div
              className={`transition-all duration-500 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <blockquote className="font-serif text-earth-700 text-xl md:text-2xl leading-relaxed mb-8 italic">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-terracotta-300 to-sage-300 flex items-center justify-center text-white font-semibold text-sm">
                  {TESTIMONIALS[current].author[0]}
                </div>
                <div>
                  <p className="font-semibold text-earth-800 text-sm">
                    {TESTIMONIALS[current].author}
                  </p>
                  <p className="text-earth-400 text-xs">
                    {TESTIMONIALS[current].program}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-terracotta-400/5 blur-2xl" />
          </div>

          {/* ── Controls ── */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              id="testimonial-prev"
              className="p-2.5 rounded-full border border-sand-300 text-earth-500 hover:bg-sand-200 hover:text-terracotta-500 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-terracotta-500"
                      : "w-2.5 h-2.5 bg-sand-300 hover:bg-terracotta-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              id="testimonial-next"
              className="p-2.5 rounded-full border border-sand-300 text-earth-500 hover:bg-sand-200 hover:text-terracotta-500 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

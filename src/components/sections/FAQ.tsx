"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-sand-50">
      <div className="container-brand max-w-3xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-terracotta-500 text-sm font-medium tracking-wide uppercase mb-4">
            Got Questions?
          </span>
          <h2 className="font-serif font-bold text-earth-800 text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ── FAQ Accordion ── */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-earth-800 pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-terracotta-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-earth-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

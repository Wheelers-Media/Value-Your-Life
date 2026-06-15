"use client";

import { Calendar, ExternalLink, ShieldCheck, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface BookingSectionProps {
  title?: string;
  subtitle?: string;
}

export default function BookingSection({
  title = "Schedule Your Discovery Session",
  subtitle = "Select a time that works for you from our calendar. This 30-minute session is completely free and holds no obligation.",
}: BookingSectionProps) {
  return (
    <section id="booking" className="relative py-24 md:py-32 bg-sand-100">
      <div className="container-brand px-6">
        {/* ── Section Header ── */}
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-terracotta-500 text-sm font-medium tracking-wide uppercase mb-4">
              <Calendar className="w-4 h-4" />
              Booking Portal
            </span>
            <h2
              id="booking-headline"
              className="font-serif font-bold text-earth-800 text-3xl md:text-4xl mb-4"
            >
              {title}
            </h2>
            <p className="text-earth-500 text-lg leading-relaxed mx-auto">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* ── Booking Portal Card ── */}
        <ScrollReveal variant="scale-up" duration={800} delay={150}>
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-sand-200 shadow-xl shadow-earth-800/5 overflow-hidden p-8 md:p-12 text-center">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-terracotta-400 via-caramel-400 to-sage-400" />

            <div className="w-20 h-20 rounded-full bg-sage-400/10 flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Calendar className="w-10 h-10 text-sage-600" />
            </div>

            <h3 className="font-serif font-bold text-earth-800 text-2xl mb-4">
              Book Securely via Practice Better
            </h3>
            
            <p className="text-earth-600 max-w-lg mx-auto mb-8 text-base md:text-lg leading-relaxed">
              We use Practice Better to ensure your medical history, intake forms, and personal details are encrypted and kept strictly confidential. 
            </p>

            {/* Steps Guide */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10 text-left">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-terracotta-50 flex items-center justify-center text-terracotta-600 font-bold shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-earth-800 text-sm mb-1">Select Service</h4>
                  <p className="text-earth-500 text-xs leading-relaxed">
                    Choose the Free Discovery Session or one of our programs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-caramel-50 flex items-center justify-center text-caramel-600 font-bold shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-earth-800 text-sm mb-1">Pick a Date</h4>
                  <p className="text-earth-500 text-xs leading-relaxed">
                    Find a time slot on the calendar that fits your schedule.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center text-sage-600 font-bold shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-earth-800 text-sm mb-1">Confirm Info</h4>
                  <p className="text-earth-500 text-xs leading-relaxed">
                    Fill in your contact details to lock in your session.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center justify-center gap-4">
              <a
                href={CONTACT.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-terracotta-500 text-sand-50 px-8 py-4 rounded-full font-bold hover:bg-terracotta-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group text-base md:text-lg"
              >
                Open Booking Calendar
                <ExternalLink className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-earth-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sage-500" />
                  HIPAA & PIPEDA Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-caramel-500" />
                  Instant Confirmation
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
}

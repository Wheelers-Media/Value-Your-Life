"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

interface GHLBookingWrapperProps {
  /** The GoHighLevel calendar embed URL. Leave empty for placeholder. */
  embedUrl?: string;
  /** Title displayed above the embed */
  title?: string;
  /** Subtitle/description below the title */
  subtitle?: string;
}

export default function GHLBookingWrapper({
  embedUrl,
  title = "Book Your Free Discovery Session",
  subtitle = "Choose a time that works for your schedule. This 30-minute call is completely free and no-obligation.",
}: GHLBookingWrapperProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-sand-100">
      <div className="container-brand">
        {/* ── Section Header ── */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-terracotta-500 text-sm font-medium tracking-wide uppercase mb-4">
            <Calendar className="w-4 h-4" />
            Let&apos;s Connect
          </span>
          <h2
            id="booking-headline"
            className="font-serif font-bold text-earth-800 mb-4"
          >
            {title}
          </h2>
          <p className="text-earth-500 text-lg leading-relaxed mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── GHL Iframe Container ── */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-sand-200 shadow-lg shadow-earth-800/5 overflow-hidden">
            {/* Decorative top bar */}
            <div className="h-1.5 bg-gradient-to-r from-terracotta-400 via-caramel-400 to-sage-400" />

            {embedUrl ? (
              <>
                {/* Loading skeleton */}
                {!iframeLoaded && (
                  <div className="p-12 flex flex-col items-center justify-center gap-4 min-h-[400px]">
                    <div className="w-12 h-12 rounded-full border-3 border-sand-200 border-t-terracotta-400 animate-spin" />
                    <p className="text-earth-400 text-sm">
                      Loading booking calendar...
                    </p>
                  </div>
                )}

                {/* GHL Iframe */}
                <iframe
                  src={embedUrl}
                  title="Book a Discovery Session"
                  className={`w-full border-0 transition-opacity duration-500 ${
                    iframeLoaded ? "opacity-100" : "opacity-0 h-0"
                  }`}
                  style={{ minHeight: iframeLoaded ? "650px" : "0" }}
                  onLoad={() => setIframeLoaded(true)}
                  allow="payment"
                  loading="lazy"
                />
              </>
            ) : (
              /* Placeholder when no GHL URL is configured */
              <div className="p-12 md:p-16 text-center">
                <div className="w-20 h-20 rounded-full bg-sage-400/10 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-sage-500" />
                </div>
                <h3 className="font-serif font-semibold text-earth-800 text-xl mb-3">
                  Booking Calendar Coming Soon
                </h3>
                <p className="text-earth-500 max-w-md mx-auto mb-8">
                  Our online booking system is being set up. In the meantime,
                  please reach out directly to schedule your free discovery
                  session.
                </p>
                <a
                  href="mailto:danielle@valueyourlife.ca"
                  className="inline-flex items-center gap-2 bg-terracotta-500 text-sand-50 px-6 py-3 rounded-full font-semibold hover:bg-terracotta-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Email to Book
                </a>
                <p className="text-earth-400 text-xs mt-4">
                  GoHighLevel integration placeholder — embed URL will be
                  configured here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

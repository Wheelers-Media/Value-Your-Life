import type { Metadata } from "next";
import GHLBookingWrapper from "@/components/ghl/GHLBookingWrapper";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Booking | Value Your Life Wellness",
  description:
    "Book your free discovery session or get in touch with Danielle Mayer for personalized mental wellness and nutrition coaching.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 bg-sand-50">
      <div className="container-brand px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-800 mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-earth-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Ready to take the first step toward a more balanced life? Schedule your 
              free discovery session below, or reach out directly with any questions.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-sand-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-terracotta-400/10 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-terracotta-500" />
              </div>
              <h3 className="font-serif font-bold text-xl text-earth-800 mb-2">Email Me</h3>
              <p className="text-earth-600 mb-6">
                Have a question before booking? Feel free to send an email.
              </p>
              <a 
                href="mailto:danielle@valueyourlife.ca" 
                className="text-terracotta-600 font-semibold hover:text-terracotta-700 underline underline-offset-4"
              >
                danielle@valueyourlife.ca
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-sand-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-sage-400/10 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="font-serif font-bold text-xl text-earth-800 mb-2">Location</h3>
              <p className="text-earth-600 mb-6">
                Based in Alberta, Canada. Sessions are conducted virtually for your convenience.
              </p>
              <span className="text-sage-700 font-semibold">
                Online / Virtual Consultations
              </span>
            </div>
          </div>
        </div>
      </div>

      <GHLBookingWrapper 
        title="Schedule Your Discovery Session" 
        subtitle="Select a time that works for you from the calendar below. This 30-minute session is completely free."
      />
    </div>
  );
}

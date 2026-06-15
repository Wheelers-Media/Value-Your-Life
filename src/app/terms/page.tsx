import type { Metadata } from "next";
import { FileText, ShieldAlert, Calendar, RefreshCw, Scale } from "lucide-react";
import { CONTACT, BRAND, DISCLAIMER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Value Your Life Wellness. Read our service agreements, client responsibilities, cancellation policies, and medical disclaimers.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-32 bg-sand-50 min-h-screen">
      <div className="container-brand px-6 py-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-terracotta-400/10 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-terracotta-500" />
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-earth-800 mb-4">
            Terms of Service
          </h1>
          <p className="text-earth-500 text-sm">
            Last Updated: June 15, 2026 · Effective Date: June 15, 2026
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-sand-200 p-8 md:p-12 shadow-sm space-y-8 text-earth-700 leading-relaxed text-sm md:text-base">
          {/* Section 1: Agreement to Terms */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <Scale className="w-5 h-5 text-sage-600 shrink-0" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website of {BRAND.name} (available at {BRAND.domain}) or booking any coaching services, programs, or intensive sessions, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our site or booking our programs.
            </p>
          </section>

          {/* Section 2: Important Disclaimer */}
          <section className="space-y-4 bg-terracotta-50/40 border border-terracotta-100 rounded-2xl p-6 md:p-8">
            <h2 className="font-serif font-bold text-xl text-terracotta-800 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-terracotta-600 shrink-0" />
              2. Important Disclaimer & Scope of Practice
            </h2>
            <p className="font-medium text-earth-800">
              Please read the following disclaimer carefully before using this website or booking a session:
            </p>
            <div className="text-earth-700 text-sm italic leading-relaxed border-l-4 border-terracotta-400 pl-4 py-1">
              {DISCLAIMER}
            </div>
            <p className="text-xs text-earth-500 pt-2">
              Danielle Mayer provides services solely within her scope of training as a Certified Holistic Nutritional Consultant™ (C.H.N.C.) and Life Coach. Holistic nutritional recommendations focus on supporting normal physiological processes and optimization of wellness, rather than treatment of diseases.
            </p>
          </section>

          {/* Section 3: Booking & Payments */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sage-600 shrink-0" />
              3. Booking, Payment, & Portal Integration
            </h2>
            <p>
              All program client operations, including intake questionnaires, session scheduling, consent forms, invoicing, and messaging, are conducted securely via our Practice Better Electronic Health Record (EHR) client portal. 
            </p>
            <ul className="list-disc pl-6 space-y-2 text-earth-600">
              <li><strong>Secure Payments:</strong> Payments are processed securely via Practice Better using third-party payment gateways. {BRAND.name} does not directly see or store credit card details.</li>
              <li><strong>Fees:</strong> Pricing for each container (Clarity Session, Foundations Reset, Wellness Growth Program, and Value Your Life Transformation) is transparently displayed and agreed upon at booking.</li>
              <li><strong>Payment Plans:</strong> Payment plans (such as 3 payments of $450 for the Transformation program) must be completed in full as agreed.</li>
            </ul>
          </section>

          {/* Section 4: Cancellation Policy */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-sage-600 shrink-0" />
              4. Rescheduling & Cancellation Policy
            </h2>
            <p>
              Your coaching containers represent dedicated time set aside specifically for you.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-earth-600">
              <li><strong>24-Hour Notice:</strong> We require at least 24 hours notice for rescheduling or cancelling any appointment.</li>
              <li><strong>Missed Sessions:</strong> Cancellations made with less than 24 hours notice, or missed appointments without prior contact, will be subject to forfeiture of the session or a late cancellation fee.</li>
              <li><strong>Late Arrivals:</strong> If you are late for a session, the session will still end at the scheduled time to respect the calendars of other clients.</li>
            </ul>
          </section>

          {/* Section 5: Client Responsibility */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <Scale className="w-5 h-5 text-sage-600 shrink-0" />
              5. Client Responsibilities
            </h2>
            <p>
              By participating in our coaching containers, you commit to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-earth-600">
              <li>Providing honest and complete information on health histories, symptoms, and dietary habits on your Practice Better intake forms.</li>
              <li>Consulting with your primary healthcare provider before changing your diet, supplement intake, or health regimen, especially if you have diagnosed conditions or are taking prescription medications.</li>
              <li>Taking active accountability for your wellness journey and daily lifestyle choices.</li>
            </ul>
          </section>

          {/* Section 6: Intellectual Property */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-sage-600 shrink-0" />
              6. Intellectual Property & Program Materials
            </h2>
            <p>
              All custom meal guides, checklists, recipes, roadmaps, and coaching resources shared with you during your program remain the intellectual property of {BRAND.name}. Materials are provided exclusively for your personal, non-commercial use. Redistribution, replication, or resale of any program materials is strictly prohibited.
            </p>
          </section>

          {/* Section 7: Governing Law */}
          <section className="space-y-4 border-t border-sand-200 pt-6">
            <h2 className="font-serif font-bold text-xl text-earth-800">
              7. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the province of British Columbia and the federal laws of Canada. Any disputes arising from these terms or your coaching relationships will be subject to the exclusive jurisdiction of the courts located in British Columbia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

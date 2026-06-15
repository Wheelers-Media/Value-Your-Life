import type { Metadata } from "next";
import { Shield, Lock, Eye, Mail, MapPin } from "lucide-react";
import { CONTACT, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Value Your Life Wellness. Learn how we collect, protect, and handle your personal health and nutrition coaching data in compliance with PIPEDA and CASL.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-24 md:pt-32 bg-sand-50 min-h-screen">
      <div className="container-brand px-6 py-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-sage-400/10 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-sage-600" />
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-earth-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-earth-500 text-sm">
            Last Updated: June 15, 2026 · Effective Date: June 15, 2026
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-sand-200 p-8 md:p-12 shadow-sm space-y-8 text-earth-700 leading-relaxed text-sm md:text-base">
          {/* Section 1: Intro */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-terracotta-500 shrink-0" />
              1. Introduction & Compliance Statement
            </h2>
            <p>
              At {BRAND.name}, we are committed to maintaining the trust and confidentiality of our clients. This Privacy Policy governs the collection, use, and disclosure of personal information in accordance with the Canadian <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong>, substantially similar provincial private-sector privacy regulations, and <strong>Canada’s Anti-Spam Legislation (CASL)</strong>.
            </p>
            <p>
              As a health wellness and holistic nutrition practice, we collect highly sensitive personal health information. We handle all personal records with the highest levels of security and compliance.
            </p>
          </section>

          {/* Section 2: Info We Collect */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <Eye className="w-5 h-5 text-terracotta-500 shrink-0" />
              2. Personal Information We Collect
            </h2>
            <p>
              To provide personalized holistic nutrition and mental wellness coaching, we collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-earth-600">
              <li><strong>Contact Details:</strong> Your name, email address, mailing address, and phone number.</li>
              <li><strong>Health and Nutrition Metrics:</strong> Detailed medical histories, dietary logs, lifestyle questionnaires, stress assessments, sleep patterns, and physical health goals.</li>
              <li><strong>Coaching Notes:</strong> Intake forms, logs, and summaries of our sessions.</li>
              <li><strong>Financial Information:</strong> Credit card or billing details for payment processing.</li>
              <li><strong>Technical Data:</strong> IP addresses and cookie data used to improve website navigation and usability.</li>
            </ul>
          </section>

          {/* Section 3: Purpose of Collection */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <Shield className="w-5 h-5 text-terracotta-500 shrink-0" />
              3. Why We Collect This Information
            </h2>
            <p>
              Your personal details are collected and used strictly for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-earth-600">
              <li>To develop tailored holistic nutrition guides and mental wellness roadmaps.</li>
              <li>To schedule coaching calls, track progress, and coordinate ongoing sessions.</li>
              <li>To securely process payments for bookings and programs.</li>
              <li>To communicate important updates about your programs or services.</li>
              <li>To distribute educational newsletters and updates, in compliance with CASL rules requiring express consent.</li>
            </ul>
          </section>

          {/* Section 4: Practice Better Storage */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-terracotta-500 shrink-0" />
              4. Safe Safeguards & Secure Practice Better EHR Storage
            </h2>
            <p>
              We prioritize data security. We do not store sensitive medical history, questionnaires, or payment cards on our local systems or this web server. Instead, we utilize <strong>Practice Better</strong>, a leading Electronic Health Record (EHR) and practice management software designed for holistic health practitioners.
            </p>
            <p>
              Practice Better is fully audited and aligned with **PIPEDA**, **HIPAA**, and **GDPR** security requirements. All data transmitted through the client portal is encrypted using high-grade Secure Socket Layer (SSL) technology and stored securely. Intake questionnaires, protocols, waivers, and invoicing records are housed safely in this encrypted workspace.
            </p>
          </section>

          {/* Section 5: CASL Compliance */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <Mail className="w-5 h-5 text-terracotta-500 shrink-0" />
              5. CASL and Email Communications
            </h2>
            <p>
              In accordance with Canada’s Anti-Spam Legislation (CASL), we will never send you unsolicited promotional emails or newsletters. 
            </p>
            <ul className="list-disc pl-6 space-y-2 text-earth-600">
              <li><strong>Consent:</strong> We require your express, active consent before adding you to our mailing list. Opt-in checkboxes will never be pre-checked.</li>
              <li><strong>Unsubscribe:</strong> Every promotional email includes a clear and instant &quot;Unsubscribe&quot; link. Unsubscribe requests are processed immediately.</li>
              <li><strong>Identification:</strong> All emails clearly identify {BRAND.name} as the sender and list our contact details.</li>
            </ul>
          </section>

          {/* Section 6: User Rights */}
          <section className="space-y-4">
            <h2 className="font-serif font-bold text-xl text-earth-800 flex items-center gap-2">
              <Shield className="w-5 h-5 text-terracotta-500 shrink-0" />
              6. Your Rights Regarding Your Data
            </h2>
            <p>
              Under PIPEDA, you hold absolute rights to control your personal health details. You may:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-earth-600">
              <li>Request access to check what information we hold about you.</li>
              <li>Request immediate corrections to any inaccurate or incomplete details.</li>
              <li>Request the complete deletion of your records (right to erasure/withdrawal of consent), subject to legal, insurance, or professional record retention requirements.</li>
            </ul>
          </section>

          {/* Section 7: Contact Info */}
          <section className="space-y-4 border-t border-sand-200 pt-6">
            <h2 className="font-serif font-bold text-xl text-earth-800">
              7. Contact Our Privacy Officer
            </h2>
            <p>
              If you have questions about this Privacy Policy, wish to request access to your data, or want to file a complaint, please contact us:
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-sand-50 border border-sand-200 inline-block space-y-2.5">
              <p className="font-serif font-bold text-earth-800">{BRAND.name}</p>
              <p className="flex items-center gap-2 text-sm text-earth-600">
                <MapPin className="w-4 h-4 text-sage-600" />
                {CONTACT.location}
              </p>
              <p className="flex items-center gap-2 text-sm text-earth-600">
                <Mail className="w-4 h-4 text-terracotta-500" />
                <a href={`mailto:${CONTACT.email}`} className="underline hover:text-terracotta-600">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

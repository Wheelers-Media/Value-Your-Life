import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, DISCLAIMER, BRAND, PRACTITIONER } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="bg-earth-800 text-sand-200 relative overflow-hidden"
      role="contentinfo"
    >
      {/* ── Angled top edge ── */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-sand-50 -translate-y-1/2 skew-y-1" />

      <div className="container-brand pt-20 pb-8">
        {/* ── Main Footer Content ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <Image
                src="/images/Logo.png"
                alt={`${BRAND.name} logo`}
                width={44}
                height={44}
                className="rounded-full ring-2 ring-terracotta-400/40 group-hover:ring-terracotta-400/70 transition-all duration-300"
                style={{ height: "auto" }}
              />
              <div>
                <span className="block font-serif font-bold text-sand-100 text-base leading-tight">
                  Value Your Life
                </span>
                <span className="block font-accent text-terracotta-300 text-sm leading-none">
                  Wellness
                </span>
              </div>
            </Link>
            <p className="text-earth-300 text-sm leading-relaxed max-w-xs">
              Compassionate mental wellness coaching and holistic nutrition
              guidance, designed around your unique life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-semibold text-sand-100 text-base mb-5 !text-sand-100">
              Navigate
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      id={`footer-nav-${link.label.toLowerCase()}`}
                      className="text-earth-300 hover:text-terracotta-300 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif font-semibold text-sand-100 text-base mb-5 !text-sand-100">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/programs#discovery"
                  className="text-earth-300 hover:text-terracotta-300 transition-colors duration-200 text-sm"
                >
                  Free Discovery Session
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#refresh"
                  className="text-earth-300 hover:text-terracotta-300 transition-colors duration-200 text-sm"
                >
                  Mental Wellness Refresh
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#foundations"
                  className="text-earth-300 hover:text-terracotta-300 transition-colors duration-200 text-sm"
                >
                  Foundations of Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#transformation"
                  className="text-earth-300 hover:text-terracotta-300 transition-colors duration-200 text-sm"
                >
                  Value Your Life Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Credentials & Trust */}
          <div>
            <h4 className="font-serif font-semibold text-sand-100 text-base mb-5 !text-sand-100">
              Credentials
            </h4>
            <div className="flex items-start gap-3 mb-4">
              <Image
                src="/images/csnn-badge.jpeg"
                alt="Certified Holistic Nutritional Consultant (CSNN)"
                width={56}
                height={56}
                className="rounded-lg bg-white/90 p-1"
                style={{ height: "auto" }}
              />
              <div>
                <p className="text-sand-200 text-sm font-medium">
                  {PRACTITIONER.title}
                </p>
                <p className="text-earth-400 text-xs mt-0.5">
                  {PRACTITIONER.designation} · {PRACTITIONER.school}
                </p>
              </div>
            </div>
            <p className="text-earth-300 text-sm">
              {PRACTITIONER.additionalRole}
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-earth-600 to-transparent mb-8" />

        {/* ── Mandatory Legal Disclaimer ── */}
        <div
          id="legal-disclaimer"
          className="bg-earth-900/50 rounded-xl p-6 mb-8 border border-earth-700/30"
        >
          <h5 className="font-serif text-sm font-semibold text-earth-300 mb-2 !text-earth-300">
            Important Disclaimer
          </h5>
          <p className="text-earth-400 text-xs leading-relaxed max-w-none">
            {DISCLAIMER}
          </p>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-earth-400 text-xs">
          <p>
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-terracotta-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-earth-600">·</span>
            <Link
              href="/terms"
              className="hover:text-terracotta-300 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// components/home/HeroSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, TrendingUp, Users, Building2, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "500+", label: "Leads Generated Monthly" },
  { icon: Building2, value: "50+", label: "Real Estate Projects" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-main relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow" />
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Jaipur&apos;s #1 Real Estate Marketing Agency
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6">
              We Help Real Estate{" "}
              <span className="gradient-text">Brands Generate</span>{" "}
              More Leads &{" "}
              <span className="gradient-text">Close More Deals</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Outprix Digital is dedicated exclusively to real estate digital marketing.
              Meta Ads, Google Ads, SEO & Social Media — all laser-focused on growing
              your property business.
            </p>

            {/* Feature List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                "100% Real Estate Focused",
                "Results-Driven Campaigns",
                "Transparent Reporting",
                "Dedicated Account Manager",
                "Meta & Google Ads Expert",
                "Jaipur-Based, Pan-India Service",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/919460382804?text=Hi%20Outprix%20Digital%2C%20I%20want%20to%20grow%20my%20real%20estate%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-8 py-4"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+919460382804"
              className="inline-flex items-center gap-2 mt-6 text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Or call us: <span className="font-semibold text-blue-400">+91 9460382804</span>
            </a>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="relative">
            {/* Main card */}
            <div className="relative rounded-3xl border border-blue-500/20 bg-brand-surface/80 backdrop-blur-sm p-8 shadow-glow">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-button">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h2 className="font-heading font-bold text-xl text-white">
                  Exclusively Real Estate
                </h2>
                <p className="text-slate-400 text-sm mt-2">
                  We don&apos;t work with any other industry. 100% of our focus, expertise, and strategies are built for real estate.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-brand-navy/80 border border-blue-500/10 p-4 text-center hover:border-blue-500/30 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                    <div className="font-heading font-black text-2xl gradient-text">{value}</div>
                    <div className="text-slate-400 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center gap-3 p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Trusted by real estate brands across Rajasthan</p>
                  <p className="text-slate-400 text-xs">Jaipur · Jodhpur · Udaipur · Ajmer</p>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-2xl border border-blue-500/20 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/10 rounded-xl border border-blue-500/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

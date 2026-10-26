// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { services } from "@/lib/services-data";
import { Target, Search, TrendingUp, Share2, BarChart3, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Digital Marketing Services | Outprix Digital Jaipur",
  description:
    "Comprehensive digital marketing services for real estate — Meta Ads, Google Ads, SEO, Social Media & Performance Marketing. Exclusively for real estate brands.",
};

const iconMap: Record<string, React.ElementType> = {
  Target,
  Search,
  TrendingUp,
  Share2,
  BarChart3,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="container-main relative z-10 text-center">
            <span className="section-badge mb-4">Our Services</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Real Estate Digital Marketing{" "}
              <span className="gradient-text">Services That Deliver</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Every service we offer is designed exclusively for real estate.
              No generics. Just strategies built to sell properties.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-brand-bg">
          <div className="container-main">
            <div className="grid gap-8">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon] || Target;
                return (
                  <div
                    key={service.slug}
                    className="grid lg:grid-cols-3 gap-6 rounded-3xl border border-blue-500/10 bg-brand-surface p-8 hover:border-blue-500/30 transition-all duration-300"
                  >
                    {/* Icon + Title */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-blue-400" />
                        </div>
                        <span className="font-heading font-black text-blue-500/40 text-3xl">
                          0{index + 1}
                        </span>
                      </div>
                      <h2 className="font-heading font-bold text-white text-2xl mb-2">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description + Benefits */}
                    <div>
                      <p className="text-slate-400 leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((b) => (
                          <li key={b} className="flex items-start gap-2 text-slate-300 text-sm">
                            <span className="text-blue-400 mt-0.5">✓</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col justify-between">
                      <div />
                      <div className="flex flex-col gap-3">
                        <Link
                          href={`/services/${service.slug}`}
                          className="btn-primary justify-center"
                        >
                          Learn More <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href="/contact"
                          className="btn-outline justify-center text-sm"
                        >
                          Get a Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-600 text-center">
          <div className="container-main">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              Not Sure Which Service Is Right for You?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Book a free consultation and we&apos;ll recommend the best mix of services for your real estate project and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

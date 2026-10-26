// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { services } from "@/lib/services-data";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="container-main relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Link href="/services" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                  Services
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-blue-400 text-sm">{service.title}</span>
              </div>
              <span className="section-badge mb-4">Our Service</span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                {service.title}{" "}
                <span className="gradient-text">for Real Estate</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
                {service.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/919460382804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-brand-surface">
          <div className="container-main">
            <div className="text-center mb-12">
              <span className="section-badge mb-4">What&apos;s Included</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
                What You Get With Our{" "}
                <span className="gradient-text">{service.title}</span> Service
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-blue-500/10 bg-brand-navy p-4 hover:border-blue-500/30 transition-colors"
                >
                  <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-brand-bg">
          <div className="container-main">
            <div className="text-center mb-12">
              <span className="section-badge mb-4">Our Process</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
                How We Deliver{" "}
                <span className="gradient-text">{service.title}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {service.process.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="card-dark text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-4 shadow-button">
                      <span className="font-heading font-black text-white text-lg">{step.step}</span>
                    </div>
                    <h3 className="font-heading font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 text-blue-500/40 text-xl z-10">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-brand-surface">
          <div className="container-main max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-badge mb-4">FAQ</span>
              <h2 className="font-heading text-3xl font-black text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-blue-500/10 bg-brand-navy hover:border-blue-500/30 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                    <span className="font-heading font-semibold text-white">{faq.question}</span>
                    <ChevronDown className="h-4 w-4 text-blue-400 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed -mt-2">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-600 text-center">
          <div className="container-main">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Book a free consultation and let&apos;s discuss how we can use {service.title} to grow your real estate business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919460382804"
                className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/50 text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                Call +91 9460382804
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

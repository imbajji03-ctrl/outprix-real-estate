// components/home/FounderSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Side */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl scale-110" />

              <div className="relative w-72 sm:w-80 lg:w-96 rounded-3xl overflow-hidden border-2 border-blue-500/20 shadow-glow">
                <Image
                  src="/founder.jpg"
                  alt="Bajrang Choudhary — Founder & Growth Strategist, Outprix Digital"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-navy to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-surface border border-blue-500/30 rounded-2xl px-6 py-3 shadow-card text-center whitespace-nowrap">
                <p className="font-heading font-black text-white text-base">Bajrang Choudhary</p>
                <p className="text-blue-400 text-xs font-medium">Founder & Growth Strategist</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 -right-4 w-20 h-20 rounded-2xl border border-blue-500/10 bg-blue-500/5" />
            <div className="absolute -bottom-8 -left-4 w-16 h-16 rounded-xl border border-blue-500/10 bg-blue-500/5" />
          </div>

          {/* Content Side */}
          <div className="mt-8 lg:mt-0">
            <span className="section-badge mb-6">Meet the Founder</span>

            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              A Digital Marketer Who{" "}
              <span className="gradient-text">Lives & Breathes</span>{" "}
              Real Estate Marketing
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed mb-8">
              <p>
                Hi, I&apos;m <strong className="text-white">Bajrang Choudhary</strong> — Founder of Outprix Digital and a
                digital marketer obsessed with one thing: helping real estate brands grow.
              </p>
              <p>
                I started Outprix Digital with a clear vision — to build a marketing agency
                that is 100% dedicated to real estate. Not a generalist agency that dabbles
                in real estate. A specialist agency that eats, sleeps, and breathes property marketing.
              </p>
              <p>
                Based in Jaipur, we work with builders, developers, and real estate brands
                across Rajasthan and pan-India, running data-driven campaigns that actually
                move inventory and generate qualified leads.
              </p>
              <p>
                Our philosophy is simple:{" "}
                <strong className="text-white">Results with Trust.</strong>{" "}
                No fake testimonials. No inflated promises. Just honest, hard work and transparent results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/about" className="btn-primary">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}

// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { ArrowRight, Target, Heart, Shield, TrendingUp, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Outprix Digital | Jaipur's Real Estate Marketing Agency",
  description:
    "Learn about Outprix Digital — Jaipur's dedicated real estate digital marketing agency, founded by Bajrang Choudhary. Our story, mission, and values.",
};

const values = [
  {
    icon: Target,
    title: "Results-First",
    desc: "Every campaign we run is optimised relentlessly for one thing: generating real, qualified leads for your real estate project.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    desc: "We treat your marketing budget as our own. Every rupee is spent with intention, tracked carefully, and optimised continuously.",
  },
  {
    icon: Shield,
    title: "Radical Honesty",
    desc: "No fake testimonials, no inflated promises. We tell you the truth about what's working and what needs to improve.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    desc: "The digital marketing landscape changes fast. We constantly learn, test, and adapt to stay ahead for our clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="container-main relative z-10 text-center">
            <span className="section-badge mb-4">About Us</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Jaipur&apos;s Most Dedicated{" "}
              <span className="gradient-text">Real Estate Marketing Agency</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We exist for one purpose: to help real estate brands grow through smart,
              data-driven digital marketing.
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20 bg-brand-surface">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative flex justify-center">
                <div className="relative w-72 sm:w-80 rounded-3xl overflow-hidden border-2 border-blue-500/20 shadow-glow">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl scale-110 -z-10" />
                  <Image
                    src="/founder.jpg"
                    alt="Bajrang Choudhary — Founder, Outprix Digital"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-surface border border-blue-500/30 rounded-2xl px-6 py-3 shadow-card text-center whitespace-nowrap">
                  <p className="font-heading font-black text-white">Bajrang Choudhary</p>
                  <p className="text-blue-400 text-xs">Founder & Growth Strategist</p>
                </div>
              </div>

              <div>
                <span className="section-badge mb-6">Our Story</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-6">
                  Built to Serve Real Estate, and{" "}
                  <span className="gradient-text">Only Real Estate</span>
                </h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    Outprix Digital was founded by <strong className="text-white">Bajrang Choudhary</strong> with
                    a clear and focused mission — to create a digital marketing agency
                    that specialises exclusively in real estate.
                  </p>
                  <p>
                    Having seen how generic agencies apply one-size-fits-all marketing
                    strategies to real estate brands and deliver mediocre results, Bajrang
                    decided to build something different — an agency where every team
                    member, every strategy, every tool, and every framework is built
                    specifically around how property buyers think, search, and decide.
                  </p>
                  <p>
                    Based in Jaipur — the rapidly growing property market of Rajasthan —
                    Outprix Digital works with builders, developers, real estate agents,
                    and property brands across Jaipur and pan-India.
                  </p>
                  <p>
                    Our core belief: <strong className="text-white">Results with Trust.</strong>{" "}
                    We believe the best client relationships are built on honest communication,
                    transparent reporting, and genuine hard work — not hype.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Work With Us <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#"
                    className="btn-outline flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-brand-bg">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-dark p-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-5">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-heading font-black text-white text-2xl mb-4">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To become the most trusted real estate digital marketing partner in Rajasthan
                  by delivering honest, data-driven marketing that generates real results for
                  our clients — one property project at a time.
                </p>
              </div>
              <div className="card-dark p-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-5">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-heading font-black text-white text-2xl mb-4">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  A future where every real estate developer — from a first-time builder
                  to an established brand — has access to world-class digital marketing
                  that helps them sell properties faster and build stronger brands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-brand-surface">
          <div className="container-main">
            <div className="text-center mb-12">
              <span className="section-badge mb-4">Our Values</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
                What We Stand For
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card-dark text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="font-heading font-bold text-white mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="py-20 bg-brand-bg">
          <div className="container-main text-center max-w-2xl mx-auto">
            <span className="section-badge mb-4">Client Stories</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="card-dark p-10 mt-8">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">
                Testimonials Coming Soon
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We believe in authentic client stories — not manufactured testimonials.
                As we grow our client base and deliver results, we&apos;ll share real stories
                from real builders and developers who&apos;ve worked with us. Our commitment
                to honesty starts here.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-600">
          <div className="container-main text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              Let&apos;s Grow Your Real Estate Business Together
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Book a free consultation with Bajrang and let&apos;s build a digital marketing strategy for your project.
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

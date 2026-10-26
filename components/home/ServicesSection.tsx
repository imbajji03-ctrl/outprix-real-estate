// components/home/ServicesSection.tsx
import Link from "next/link";
import { Target, Search, TrendingUp, Share2, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Meta & Instagram Ads",
    description:
      "Hyper-targeted Facebook & Instagram campaigns that put your properties in front of serious buyers — not just scrollers.",
    href: "/services/meta-ads-for-real-estate",
    color: "from-blue-600/20 to-blue-500/5",
    iconBg: "bg-blue-600/20",
  },
  {
    icon: Search,
    title: "Google Ads",
    description:
      "Capture high-intent buyers actively searching for properties with precision Google Search & Display campaigns.",
    href: "/services/google-ads-for-real-estate",
    color: "from-blue-700/20 to-blue-600/5",
    iconBg: "bg-blue-700/20",
  },
  {
    icon: TrendingUp,
    title: "Real Estate SEO",
    description:
      "Rank your website on top of Google organically so buyers find you 24/7 — without paying per click.",
    href: "/services/real-estate-seo",
    color: "from-blue-500/20 to-blue-400/5",
    iconBg: "bg-blue-500/20",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Build a premium brand presence on Instagram, Facebook & LinkedIn that attracts and nurtures quality buyers.",
    href: "/services/social-media-management",
    color: "from-blue-600/20 to-blue-500/5",
    iconBg: "bg-blue-600/20",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description:
      "End-to-end performance marketing with full-funnel strategy — from awareness to qualified site visits and bookings.",
    href: "/services/performance-marketing",
    color: "from-blue-700/20 to-blue-600/5",
    iconBg: "bg-blue-700/20",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-blue-500/5 rounded-full blur-3xl -z-0" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge mb-4">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Everything Your Real Estate Brand Needs to{" "}
            <span className="gradient-text">Dominate Digitally</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Every service we offer is built specifically for real estate. No generics,
            no guesswork — just strategies that actually sell properties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative rounded-2xl border border-blue-500/10 bg-gradient-to-br ${service.color} p-6 hover:border-blue-500/30 hover:shadow-card transition-all duration-300 cursor-pointer`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${service.iconBg} border border-blue-500/20 flex items-center justify-center mb-5`}
                >
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-white text-lg mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1 text-blue-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500/30 group-hover:bg-blue-400 transition-colors" />
              </Link>
            );
          })}

          {/* Extra CTA card */}
          <div className="rounded-2xl border border-dashed border-blue-500/20 p-6 flex flex-col items-center justify-center text-center bg-blue-500/5 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 shadow-button">
              <ArrowRight className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-heading font-bold text-white mb-2">Not sure where to start?</h3>
            <p className="text-slate-400 text-sm mb-4">
              Get a free consultation and we&apos;ll recommend the best strategy for your real estate project.
            </p>
            <Link href="/contact" className="btn-primary text-sm px-6 py-2.5">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

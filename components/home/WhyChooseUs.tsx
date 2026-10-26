// components/home/WhyChooseUs.tsx
import { Shield, Target, BarChart2, Users, Zap, Eye } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "100% Real Estate Focused",
    description:
      "We don't work with restaurants, fashion brands, or coaching institutes. Every strategy, every campaign, every insight we have is about real estate. That specialisation means better results for you.",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Approach",
    description:
      "Every decision is backed by data. We track cost-per-lead, conversion rates, and campaign ROAS in real-time — and share transparent reports so you know exactly where your money is going.",
  },
  {
    icon: Shield,
    title: "No Fake Promises",
    description:
      "We don't promise 'guaranteed leads' or '10x ROI overnight'. We promise honest, consistent effort, transparent communication, and a team that genuinely works hard to grow your business.",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description:
      "You get a dedicated person who knows your projects inside-out. No shuffling between generic support agents. One point of contact, always available.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "In real estate, timing is everything. We move fast — from onboarding to campaign launch in 48–72 hours. Because slow marketing means missed opportunities.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Complete access to your ad accounts, dashboards, and weekly reports. You'll always know what's running, what's working, and what we're testing.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge mb-4">Why Choose Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Why Real Estate Brands{" "}
            <span className="gradient-text">Choose Outprix Digital</span>
          </h2>
          <p className="text-slate-400 text-lg">
            There are hundreds of digital marketing agencies in Jaipur. Here&apos;s what makes us the right choice for real estate brands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="card-dark group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}

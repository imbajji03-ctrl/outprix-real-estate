// components/home/RealEstateFocus.tsx
import { Building2, Home, Landmark, Trees } from "lucide-react";

const propertyTypes = [
  { icon: Home, label: "Residential Apartments", desc: "2BHK, 3BHK, 4BHK & Penthouses" },
  { icon: Building2, label: "Commercial Properties", desc: "Shops, Offices & Business Parks" },
  { icon: Trees, label: "Plots & Land", desc: "Residential & Commercial Plots" },
  { icon: Landmark, label: "Luxury Villas", desc: "High-end villa projects" },
];

export default function RealEstateFocus() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Property Types */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {propertyTypes.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-blue-500/10 bg-brand-surface p-5 hover:border-blue-500/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-1">{label}</h3>
                  <p className="text-slate-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: "100%", label: "Real Estate Only" },
                { value: "₹150", label: "Avg Cost Per Lead" },
                { value: "48hrs", label: "Campaign Launch" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-brand-surface border border-blue-500/10">
                  <div className="font-heading font-black text-xl gradient-text">{value}</div>
                  <div className="text-slate-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <span className="section-badge mb-6">Niche Expertise</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              We Only Work With{" "}
              <span className="gradient-text">Real Estate.</span>{" "}
              Here&apos;s Why That Matters.
            </h2>

            <div className="space-y-5 text-slate-400 text-base leading-relaxed mb-8">
              <p>
                Most digital marketing agencies try to serve everyone — ecommerce stores,
                restaurants, coaching institutes, real estate — all at once. The result?
                Generic strategies that don&apos;t understand the nuances of your industry.
              </p>
              <p>
                Real estate marketing is uniquely complex. The sales cycle is long. The
                ticket size is high. The buyer&apos;s emotional journey is deeply personal.
                The regulatory environment (RERA) requires special care.
              </p>
              <p>
                <strong className="text-white">At Outprix Digital, we work exclusively with real estate brands.</strong>{" "}
                Every strategy we&apos;ve developed, every ad format we&apos;ve tested, every insight
                we&apos;ve gained — is specific to property marketing. That gives you an unfair
                competitive advantage.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Builders & Developers",
                "Real Estate Agents",
                "Housing Societies",
                "Commercial Projects",
                "Luxury Properties",
                "Plot Developers",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

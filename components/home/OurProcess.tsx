// components/home/OurProcess.tsx
const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a deep-dive into your project — target audience, location, pricing, competition, and your marketing goals.",
  },
  {
    step: "02",
    title: "Strategy Blueprint",
    description:
      "We build a custom marketing strategy — which channels to use, what messaging to run, what budget to allocate, and what KPIs to track.",
  },
  {
    step: "03",
    title: "Campaign Launch",
    description:
      "We create creatives, set up ad accounts, build landing pages, and launch your campaigns — typically within 48–72 hours.",
  },
  {
    step: "04",
    title: "Optimise & Scale",
    description:
      "We analyse performance daily, A/B test continuously, cut what doesn't work, and scale what does — maximising every rupee of your budget.",
  },
];

export default function OurProcess() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge mb-4">Our Process</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            How We{" "}
            <span className="gradient-text">Grow Your Real Estate</span>{" "}
            Business
          </h2>
          <p className="text-slate-400 text-lg">
            A proven 4-step process that takes your real estate brand from zero digital presence to a consistent lead generation machine.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center relative">
                {/* Step Number Circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-brand-surface border-2 border-blue-500/30 flex items-center justify-center shadow-brand z-10 relative">
                    <span className="font-heading font-black text-3xl gradient-text">
                      {step.step}
                    </span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl -z-10" />
                </div>

                <h3 className="font-heading font-bold text-white text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow between steps (mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-blue-500/50 text-2xl">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

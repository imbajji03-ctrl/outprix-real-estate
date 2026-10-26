// components/home/CTASection.tsx
"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your email/CRM here
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-blue-500/20 bg-brand-surface shadow-glow overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-700 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }} />

                <div className="relative z-10">
                  <div className="section-badge mb-6 bg-white/10 border-white/20 text-white">
                    Free Consultation
                  </div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                    Ready to Dominate Real Estate Marketing in Jaipur?
                  </h2>
                  <p className="text-blue-100 text-base leading-relaxed mb-8">
                    Get a free 30-minute consultation with Bajrang Choudhary and discover exactly what digital marketing strategy will work for your real estate project.
                  </p>

                  <div className="space-y-4">
                    {[
                      "No commitment required",
                      "Custom strategy for your project",
                      "Honest assessment of your current marketing",
                      "Clear roadmap to generate more leads",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-3 text-blue-100 text-sm">
                        <CheckCircle className="h-4 w-4 text-white shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-blue-100 text-sm mb-2">Prefer to call directly?</p>
                    <a
                      href="tel:+919460382804"
                      className="flex items-center gap-2 text-white font-bold text-lg hover:text-blue-200 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      +91 9460382804
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="p-8 lg:p-12">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mb-2">
                      Message Received!
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Thank you for reaching out. Bajrang will contact you within 24 hours to schedule your free consultation.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading font-bold text-white text-xl mb-6">
                      Book Your Free Consultation
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-blue-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 XXXXXXXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-blue-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-blue-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center py-3.5">
                        <Send className="h-4 w-4" />
                        Get Free Consultation
                      </button>
                      <p className="text-slate-500 text-xs text-center">
                        Your information is 100% confidential. No spam.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

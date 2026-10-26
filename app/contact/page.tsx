// app/contact/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", form);
    setSubmitted(true);
  };

  const projectTypes = [
    "Residential Apartments",
    "Commercial Properties",
    "Plots & Land",
    "Luxury Villas",
    "Real Estate Agency",
    "Other",
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="container-main relative z-10 text-center">
            <span className="section-badge mb-4">Get In Touch</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Let&apos;s Grow Your{" "}
              <span className="gradient-text">Real Estate Business</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Book a free 30-minute consultation with Bajrang Choudhary and
              get a custom digital marketing strategy for your real estate project.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-brand-bg">
          <div className="container-main">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="rounded-3xl border border-blue-500/10 bg-brand-surface p-8">
                  <h2 className="font-heading font-black text-white text-2xl mb-2">
                    Book Your Free Consultation
                  </h2>
                  <p className="text-slate-400 text-sm mb-8">
                    Fill in your details and Bajrang will reach out within 24 hours to schedule your call.
                  </p>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-6">
                        <CheckCircle className="h-10 w-10 text-green-400" />
                      </div>
                      <h3 className="font-heading font-bold text-white text-2xl mb-3">
                        Thank You! Message Received 🙌
                      </h3>
                      <p className="text-slate-400 max-w-sm">
                        Bajrang will personally reach out to you within 24 hours to schedule your free consultation.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
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

                      <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5">
                          Project Type
                        </label>
                        <select
                          value={form.projectType}
                          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-blue-500/20 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors appearance-none text-white"
                        >
                          <option value="" className="text-slate-500 bg-brand-navy">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-brand-navy">{type}</option>
                          ))}
                        </select>
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                        <Send className="h-4 w-4" />
                        Send Message & Book Free Call
                      </button>
                      <p className="text-slate-500 text-xs text-center">
                        100% confidential. We never share your information. No spam.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Info Cards */}
                <div className="rounded-2xl border border-blue-500/10 bg-brand-surface p-6">
                  <h3 className="font-heading font-bold text-white mb-5">Contact Details</h3>
                  <div className="space-y-5">
                    <a
                      href="tel:+919460382804"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <Phone className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-0.5">Call or WhatsApp</p>
                        <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                          +91 9460382804
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@outprixdigital.com"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-0.5">Email Us</p>
                        <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                          info@outprixdigital.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <MapPin className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-0.5">Based In</p>
                        <p className="text-white font-semibold">Jaipur, Rajasthan</p>
                        <p className="text-slate-400 text-xs">Serving Pan-India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <Clock className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-0.5">Response Time</p>
                        <p className="text-white font-semibold">Within 24 hours</p>
                        <p className="text-slate-400 text-xs">Mon–Sat, 9AM–7PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919460382804?text=Hi%20Outprix%20Digital%2C%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20real%20estate%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-green-500/30 bg-green-500/10 p-5 hover:bg-green-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="white" className="h-6 w-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-green-300 transition-colors">
                      Chat on WhatsApp
                    </p>
                    <p className="text-slate-400 text-xs">
                      Get an instant response on WhatsApp
                    </p>
                  </div>
                </a>

                {/* Founder note */}
                <div className="rounded-2xl border border-blue-500/10 bg-brand-surface p-5">
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    &ldquo;I personally review every enquiry and respond to each one.
                    If you reach out, you&apos;ll hear from me directly — not an automated reply.&rdquo;
                  </p>
                  <p className="text-white text-sm font-semibold mt-3">— Bajrang Choudhary</p>
                  <p className="text-blue-400 text-xs">Founder & Growth Strategist, Outprix Digital</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

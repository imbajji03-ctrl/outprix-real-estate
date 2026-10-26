// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Digital Marketing Blog | Outprix Digital Jaipur",
  description:
    "Expert insights, guides and strategies on real estate digital marketing. Meta Ads, Google Ads, SEO and social media tips for builders and developers.",
};

const categories = ["All", "Meta Ads", "Google Ads", "SEO", "Social Media", "Performance Marketing"];

const categoryColors: Record<string, string> = {
  "Meta Ads": "bg-blue-600/20 text-blue-400 border-blue-500/30",
  "Google Ads": "bg-blue-700/20 text-blue-300 border-blue-600/30",
  SEO: "bg-blue-500/20 text-blue-400 border-blue-400/30",
  "Social Media": "bg-blue-600/20 text-blue-400 border-blue-500/30",
  "Performance Marketing": "bg-blue-700/20 text-blue-300 border-blue-600/30",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="container-main relative z-10 text-center">
            <span className="section-badge mb-4">Blog & Insights</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Real Estate Marketing{" "}
              <span className="gradient-text">Insights & Guides</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Actionable strategies, data-driven insights, and practical guides
              for real estate brands looking to grow through digital marketing.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-brand-bg">
          <div className="container-main">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    cat === "All"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-blue-500/5 text-slate-400 border-blue-500/20 hover:border-blue-500/40 hover:text-blue-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Post */}
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group block mb-8 rounded-3xl border border-blue-500/10 bg-brand-surface hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-brand p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold border border-white/30 mb-6 inline-block">
                      Featured Article
                    </span>
                    <h2 className="font-heading font-black text-white text-2xl lg:text-3xl leading-tight group-hover:text-blue-100 transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-blue-100 mt-4 leading-relaxed text-sm">
                      {blogPosts[0].excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-100 text-sm font-semibold mt-8 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-10 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[blogPosts[0].category]}`}>
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <Clock className="h-3 w-3" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Calendar className="h-3 w-3" />
                    {blogPosts[0].date} · By {blogPosts[0].author}
                  </div>
                </div>
              </div>
            </Link>

            {/* Remaining Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group card-dark flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[post.category] || "bg-blue-500/10 text-blue-400 border-blue-500/20"}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="font-heading font-bold text-white text-lg leading-snug mb-3 group-hover:text-blue-300 transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-blue-500/10">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <span className="flex items-center gap-1 text-blue-400 text-xs font-semibold group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-brand-surface">
          <div className="container-main max-w-2xl mx-auto text-center">
            <span className="section-badge mb-4">Stay Updated</span>
            <h2 className="font-heading text-3xl font-black text-white mb-4">
              Get Real Estate Marketing Tips{" "}
              <span className="gradient-text">In Your Inbox</span>
            </h2>
            <p className="text-slate-400 mb-8">
              Join real estate brands across Rajasthan getting actionable marketing insights every week.
            </p>
            <Link href="/contact" className="btn-primary mx-auto">
              Contact Us to Stay Updated <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

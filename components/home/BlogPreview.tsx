// components/home/BlogPreview.tsx
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

const categoryColors: Record<string, string> = {
  "Meta Ads": "bg-blue-600/20 text-blue-400 border-blue-500/30",
  "Google Ads": "bg-blue-700/20 text-blue-300 border-blue-600/30",
  SEO: "bg-blue-500/20 text-blue-400 border-blue-400/30",
  "Social Media": "bg-blue-600/20 text-blue-400 border-blue-500/30",
  "Performance Marketing": "bg-blue-700/20 text-blue-300 border-blue-600/30",
};

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="section-badge mb-4">Blog & Insights</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
              Real Estate Marketing{" "}
              <span className="gradient-text">Insights & Guides</span>
            </h2>
            <p className="text-slate-400 mt-2">
              Actionable strategies and insights for real estate brands.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors whitespace-nowrap"
          >
            View All Posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card-dark flex flex-col"
            >
              {/* Category + Date */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    categoryColors[post.category] || "bg-blue-500/10 text-blue-400 border-blue-500/20"
                  }`}
                >
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-white text-base leading-snug mb-3 group-hover:text-blue-300 transition-colors flex-1">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Footer */}
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}

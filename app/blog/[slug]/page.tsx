// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { blogPosts } from "@/lib/blog-data";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string): string {
  return content
    // h2
    .replace(/^## (.+)$/gm, '<h2 class="font-heading font-black text-white text-2xl mt-10 mb-4">$1</h2>')
    // h3
    .replace(/^### (.+)$/gm, '<h3 class="font-heading font-bold text-white text-xl mt-8 mb-3">$1</h3>')
    // h4
    .replace(/^#### (.+)$/gm, '<h4 class="font-heading font-semibold text-blue-300 text-lg mt-6 mb-2">$1</h4>')
    // bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // horizontal rule
    .replace(/^---$/gm, '<hr class="border-blue-500/20 my-10" />')
    // table rows (simplified)
    .replace(/^\|(.+)\|$/gm, (match) => {
      if (match.includes('---')) return '<tr class="border-t border-blue-500/10"><td></td></tr>';
      const cells = match.split('|').filter(Boolean).map(c => c.trim());
      const isHeader = cells.some(() => true);
      const tag = 'td';
      return `<tr class="border-t border-blue-500/10">${cells.map(c => `<${tag} class="px-4 py-3 text-sm text-slate-300">${c}</${tag}>`).join('')}</tr>`;
    })
    // checkmarks
    .replace(/^✅ (.+)$/gm, '<li class="flex items-start gap-2 text-slate-300 text-sm my-1"><span class="text-green-400 shrink-0">✅</span> $1</li>')
    // unordered list items
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-slate-300 text-sm my-1.5"><span class="text-blue-400 shrink-0 mt-1">•</span> $1</li>')
    // numbered list
    .replace(/^\d+\. (.+)$/gm, '<li class="text-slate-300 text-sm my-1.5 ml-4 list-decimal">$1</li>')
    // paragraphs (non-empty lines not already tagged)
    .replace(/^(?!<)(.+)$/gm, '<p class="text-slate-400 leading-relaxed my-4">$1</p>')
    // links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline underline-offset-2">$1</a>');
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-30" />
          <div className="container-main relative z-10 max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-slate-500 text-xs">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </div>
              <span>·</span>
              <span>By <strong className="text-white">{post.author}</strong></span>
              <span>·</span>
              <span>Outprix Digital</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-brand-bg">
          <div className="container-main max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-3">
                <div
                  className="prose-custom"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
                />

                {/* Share / CTA */}
                <div className="mt-12 pt-8 border-t border-blue-500/20">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-center">
                    <h3 className="font-heading font-black text-white text-xl mb-2">
                      Want Help With Your Real Estate Marketing?
                    </h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Book a free consultation with Outprix Digital and get a custom strategy for your project.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-colors text-sm"
                    >
                      Get Free Consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Author Card */}
                  <div className="rounded-2xl border border-blue-500/10 bg-brand-surface p-5">
                    <h4 className="font-heading font-bold text-white text-sm mb-3">About the Author</h4>
                    <p className="font-semibold text-white text-sm">{post.author}</p>
                    <p className="text-blue-400 text-xs mb-2">Founder & Growth Strategist</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Digital marketer specialising exclusively in real estate. Founder of Outprix Digital, Jaipur.
                    </p>
                  </div>

                  {/* Contact CTA */}
                  <div className="rounded-2xl border border-blue-500/20 bg-brand-surface p-5 text-center">
                    <h4 className="font-heading font-bold text-white text-sm mb-2">
                      Need Help?
                    </h4>
                    <p className="text-slate-400 text-xs mb-4">
                      Get a free consultation for your real estate project.
                    </p>
                    <Link href="/contact" className="btn-primary text-xs px-4 py-2.5 w-full justify-center">
                      Book Free Call
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-brand-surface">
          <div className="container-main">
            <h2 className="font-heading font-black text-white text-2xl mb-8">
              More Real Estate Marketing Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group card-dark flex flex-col"
                >
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold mb-3 self-start">
                    {relPost.category}
                  </span>
                  <h3 className="font-heading font-bold text-white text-sm leading-snug mb-2 group-hover:text-blue-300 transition-colors flex-1">
                    {relPost.title}
                  </h3>
                  <div className="flex items-center gap-1 text-blue-400 text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

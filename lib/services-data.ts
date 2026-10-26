// lib/services-data.ts

export interface Service {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "meta-ads-for-real-estate",
    icon: "Target",
    title: "Meta & Instagram Ads",
    shortDescription:
      "Hyper-targeted Facebook & Instagram ad campaigns that put your properties in front of serious buyers — not just scrollers.",
    fullDescription:
      "We design, launch, and optimise Meta ad campaigns exclusively for real estate brands. From residential projects to luxury villas, our data-driven approach ensures every rupee of your ad budget reaches qualified home buyers and investors.",
    benefits: [
      "Audience targeting based on income, location & property intent",
      "High-converting creative ads — reels, carousels, lead forms",
      "Cost-per-lead optimisation every 48 hours",
      "Retargeting campaigns to convert warm leads",
      "Transparent weekly reporting with full ad account access",
      "Dedicated real estate ad specialist for your account",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "We study your project, target buyer profile, budget, and location to build a precise audience strategy.",
      },
      {
        step: "02",
        title: "Creative Strategy",
        description:
          "We design scroll-stopping creatives — video reels, property images, and copy that speaks to buyers.",
      },
      {
        step: "03",
        title: "Campaign Launch",
        description:
          "We launch campaigns with A/B testing across multiple ad sets to find the winning formula.",
      },
      {
        step: "04",
        title: "Optimise & Scale",
        description:
          "We analyse data daily, cut underperformers, and scale what works to maximise your lead volume.",
      },
    ],
    faqs: [
      {
        question: "How soon will I start getting leads?",
        answer:
          "Most real estate clients start seeing leads within 3–5 days of campaign launch. Significant volume typically picks up in 2–3 weeks as we optimise the campaigns.",
      },
      {
        question: "What is the minimum ad budget I need?",
        answer:
          "We recommend a minimum of ₹30,000–₹50,000/month in ad spend for real estate. We can discuss the ideal budget based on your project size and city.",
      },
      {
        question: "Do you handle creative design or do I need to provide it?",
        answer:
          "We handle everything — ad copy, graphic design, video editing, and campaign management. You just need to approve the creatives.",
      },
    ],
    metaTitle:
      "Meta & Instagram Ads for Real Estate | Outprix Digital Jaipur",
    metaDescription:
      "Expert Meta & Instagram ad campaigns for real estate developers and builders. Generate qualified property leads from Facebook & Instagram. Outprix Digital, Jaipur.",
  },
  {
    slug: "google-ads-for-real-estate",
    icon: "Search",
    title: "Google Ads",
    shortDescription:
      "Capture high-intent buyers actively searching for properties with precision Google Search & Display campaigns.",
    fullDescription:
      "When someone searches 'flats in Jaipur' or '3BHK near me', your project needs to appear at the top. We run Google Search, Performance Max, and Display campaigns that capture buyers at their highest buying intent.",
    benefits: [
      "Top-of-Google visibility for property searches",
      "Intent-based keyword targeting for hot buyers",
      "Landing page design optimised for conversions",
      "Call & form tracking for every lead",
      "Google Display retargeting campaigns",
      "Monthly performance reports with insights",
    ],
    process: [
      {
        step: "01",
        title: "Keyword Research",
        description:
          "We identify high-intent keywords that your potential buyers are actively searching for.",
      },
      {
        step: "02",
        title: "Ad Creation",
        description:
          "Compelling ad copies with strong headlines and CTAs that drive clicks from serious buyers.",
      },
      {
        step: "03",
        title: "Landing Page Setup",
        description:
          "High-converting landing pages designed specifically for your project with lead forms.",
      },
      {
        step: "04",
        title: "Track & Optimise",
        description:
          "Continuous bid management and optimisation to lower your cost-per-lead over time.",
      },
    ],
    faqs: [
      {
        question: "Is Google Ads or Facebook Ads better for real estate?",
        answer:
          "Both serve different purposes. Google Ads captures people actively searching for properties (high intent). Meta Ads creates awareness and captures people who may not be actively searching yet. The best strategy is to use both together.",
      },
      {
        question: "What cities do you run Google Ads for?",
        answer:
          "We run campaigns pan-India, with deep expertise in Jaipur, Delhi NCR, Mumbai, Pune, Hyderabad, and Bengaluru markets.",
      },
    ],
    metaTitle: "Google Ads for Real Estate | Outprix Digital Jaipur",
    metaDescription:
      "Rank on top of Google for property searches. Expert Google Ads management for real estate builders and developers. Outprix Digital, Jaipur.",
  },
  {
    slug: "real-estate-seo",
    icon: "TrendingUp",
    title: "Real Estate SEO",
    shortDescription:
      "Rank your website on top of Google organically so buyers find you 24/7 — without paying per click.",
    fullDescription:
      "SEO is the long-term growth engine for real estate brands. We optimise your website to rank for high-value keywords like 'flats in Jaipur', 'plots near Ajmer Road', and 'luxury villas Jaipur', so you get free organic traffic month after month.",
    benefits: [
      "Comprehensive technical SEO audit & fixes",
      "Keyword research for real estate niches & localities",
      "On-page SEO for all service & project pages",
      "Local SEO & Google Maps ranking for Jaipur",
      "High-quality backlink building from real estate sites",
      "Monthly SEO progress reports with ranking tracking",
    ],
    process: [
      {
        step: "01",
        title: "SEO Audit",
        description:
          "Full audit of your website covering technical issues, keyword gaps, and competitor analysis.",
      },
      {
        step: "02",
        title: "Strategy & Planning",
        description:
          "We build a custom SEO roadmap targeting local Jaipur searches and pan-India property keywords.",
      },
      {
        step: "03",
        title: "On-Page Optimisation",
        description:
          "Optimise all pages — meta tags, content, images, internal links — for target keywords.",
      },
      {
        step: "04",
        title: "Off-Page & Link Building",
        description:
          "Build domain authority through quality backlinks from real estate portals and local directories.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Typically 3–6 months to see significant ranking improvements. However, you'll see early wins like technical fixes and local SEO improvements within the first 30–60 days.",
      },
      {
        question: "Do you work with existing real estate websites?",
        answer:
          "Yes, we work with your existing website or help you build an SEO-optimised new one. We also specialise in WordPress and custom website SEO.",
      },
    ],
    metaTitle: "Real Estate SEO Services Jaipur | Outprix Digital",
    metaDescription:
      "Rank your real estate website on Google with expert SEO services. Local SEO for Jaipur builders and developers. Outprix Digital — Real estate SEO specialists.",
  },
  {
    slug: "social-media-management",
    icon: "Share2",
    title: "Social Media Management",
    shortDescription:
      "Build a premium brand presence on Instagram, Facebook & LinkedIn that attracts and nurtures quality buyers.",
    fullDescription:
      "Your social media is your digital showroom. We manage your Instagram, Facebook, and LinkedIn with premium creatives, strategic content, and consistent brand storytelling that positions you as the trusted name in Jaipur real estate.",
    benefits: [
      "Premium graphics, reels & carousel posts",
      "Real estate content strategy & monthly calendar",
      "Instagram & Facebook page management",
      "Story and reel creation with property showcases",
      "Comment and DM management",
      "Monthly performance analytics report",
    ],
    process: [
      {
        step: "01",
        title: "Brand Audit",
        description:
          "Review your current social presence and define the content strategy that fits your brand.",
      },
      {
        step: "02",
        title: "Content Calendar",
        description:
          "30-day content calendar approved by you before every month for consistent posting.",
      },
      {
        step: "03",
        title: "Create & Post",
        description:
          "We design, write, and schedule all posts — reels, stories, carousels, and static posts.",
      },
      {
        step: "04",
        title: "Engage & Grow",
        description:
          "Reply to comments, manage DMs, and grow your follower base with organic strategies.",
      },
    ],
    faqs: [
      {
        question: "How many posts do you create per month?",
        answer:
          "Our standard package includes 20–24 posts per month across Instagram and Facebook — a mix of static posts, reels, and stories.",
      },
      {
        question: "Do you do video shoots for reels?",
        answer:
          "We create reels using your property images, videos, and drone footage if available. We can also guide you on what to shoot. Full video production is available as an add-on.",
      },
    ],
    metaTitle:
      "Social Media Management for Real Estate | Outprix Digital Jaipur",
    metaDescription:
      "Premium social media management for real estate brands. Instagram, Facebook & LinkedIn management for builders and developers in Jaipur. Outprix Digital.",
  },
  {
    slug: "performance-marketing",
    icon: "BarChart3",
    title: "Performance Marketing",
    shortDescription:
      "End-to-end performance marketing with full-funnel strategy — from awareness to qualified site visits and bookings.",
    fullDescription:
      "Performance marketing is our flagship offering — a complete digital marketing ecosystem built around one goal: maximising your return on every marketing rupee spent. We combine Meta Ads, Google Ads, landing pages, and CRM tracking into one powerful lead generation machine.",
    benefits: [
      "Full-funnel strategy from awareness to conversion",
      "Multi-channel campaigns — Meta + Google + Display",
      "Custom landing pages for each campaign",
      "Lead qualification & CRM integration",
      "Cost-per-lead and cost-per-site-visit tracking",
      "Weekly performance reviews with growth insights",
    ],
    process: [
      {
        step: "01",
        title: "Funnel Design",
        description:
          "We map your complete buyer journey and design a full marketing funnel from awareness to booking.",
      },
      {
        step: "02",
        title: "Multi-Channel Setup",
        description:
          "Launch coordinated campaigns across Meta, Google, and other relevant channels.",
      },
      {
        step: "03",
        title: "Track Everything",
        description:
          "Set up complete tracking — pixel, GA4, CRM — so every lead and conversion is attributed.",
      },
      {
        step: "04",
        title: "Optimise for ROI",
        description:
          "Weekly reviews, A/B testing, and budget reallocation to continuously improve your returns.",
      },
    ],
    faqs: [
      {
        question: "What makes performance marketing different from normal digital marketing?",
        answer:
          "In performance marketing, every activity is tracked and measured against clear KPIs like cost-per-lead, conversion rate, and ROI. Nothing is done without data backing it up.",
      },
      {
        question: "Can you guarantee a number of leads per month?",
        answer:
          "We can't promise exact numbers as results depend on market conditions, project pricing, and location. But we commit to full transparency, continuous optimisation, and working hard to maximise your lead volume within your budget.",
      },
    ],
    metaTitle:
      "Performance Marketing for Real Estate | Outprix Digital Jaipur",
    metaDescription:
      "Full-funnel performance marketing for real estate developers. Meta Ads + Google Ads + Landing Pages + Tracking. Outprix Digital, Jaipur's real estate marketing experts.",
  },
];

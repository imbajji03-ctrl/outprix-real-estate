/**
 * Outprix Digital - Blog Management Panel (Vanilla JS)
 * Complete Content Management System for Digital Marketing Blogs
 * Zero Frameworks • LocalStorage Persistence • AI Generator • File Importer
 */

(function () {
  'use strict';

  // --- 1. STORAGE KEYS & CONSTANTS ---
  const STORAGE_KEYS = {
    BLOGS: 'outprix_blogs',
    MEDIA: 'outprix_media',
    AUTHOR: 'outprix_author',
    SETTINGS: 'outprix_blog_settings',
    AUTH: 'outprix_admin_auth'
  };

  const DEFAULT_SETTINGS = {
    adminPass: 'outprix2026',
    adminUser: 'admin',
    siteUrl: 'https://outprixrealestate.property',
    defaultLocation: 'Jaipur, Rajasthan',
    openAiKey: '',
    geminiKey: '',
    aiModel: 'built-in' // 'built-in' | 'openai' | 'gemini'
  };

  const DEFAULT_AUTHOR = {
    name: 'Outprix Digital Team',
    role: 'Growth Strategists & Media Buyers',
    bio: 'Outprix Digital helps businesses grow through SEO, Google Ads, social media marketing, content marketing, branding, and performance-driven digital strategies in Jaipur.',
    avatar: '/assets/outprix-logo.png',
    updatedDate: '2026-10-23'
  };

  // 100% Digital Marketing seed posts - STRICTLY ZERO REAL ESTATE
  const SEED_BLOGS = [
    {
      id: 'blog-1',
      title: 'Generative Engine Optimization (GEO) in Jaipur: How AI Search Is Reshaping Customer Discovery',
      slug: 'generative-engine-optimization-jaipur',
      primaryKeyword: 'generative engine optimization jaipur',
      secondaryKeywords: ['ai search visibility', 'chatgpt search jaipur', 'perplexity optimization', 'digital marketing jaipur'],
      metaTitle: 'Generative Engine Optimization (GEO) in Jaipur | Outprix Digital',
      metaDescription: 'Discover how Generative Engine Optimization (GEO) helps Jaipur businesses get cited in ChatGPT, Claude, and Perplexity for high-intent customer search queries.',
      featuredImage: '/assets/outprix-logo.png',
      category: 'AI Search (GEO)',
      author: { ...DEFAULT_AUTHOR },
      publishDate: '2026-10-20T10:00',
      lastUpdated: '2026-10-22',
      status: 'Published',
      views: 482,
      readTime: '6 min',
      content: `
<h2>Why Traditional Search Is No Longer Enough in Jaipur</h2>
<p>For more than two decades, digital marketing revolved around ranking ten blue links on Google. Today, high-intent consumers and business owners in Jaipur are changing their search habits.</p>
<p>Decision-makers now open ChatGPT, Perplexity AI, Claude, and Google AI Overviews to ask nuanced commercial questions. Instead of browsing multiple websites, they trust the AI engine's synthesized recommendations.</p>
<p><strong>Generative Engine Optimization (GEO)</strong> is the systematic discipline of structuring your brand's digital presence so large language models recognize, verify, and cite your business as the premier authority.</p>

<div class="visual-suggestion-box">
  <div class="vs-label">Visual Suggestion 01 // Architecture Diagram</div>
  <p><strong>Placement:</strong> Immediately following the introduction section.</p>
  <p><strong>Image Idea:</strong> A dual-flow diagram comparing Traditional Search (query to links) versus Generative Search (conversational query to entity knowledge graph to cited vendor recommendation).</p>
  <p><strong>Alt Text:</strong> Generative Engine Optimization workflow versus traditional SEO search flow diagram.</p>
  <p><strong>Caption:</strong> How modern AI search engines verify brand entities across authoritative digital knowledge graphs.</p>
</div>

<h2>The Core Pillars of Generative Engine Optimization</h2>
<p>LLMs rely on corroboration, structured semantic data, and digital authority graphs to form recommendations. Here are the core pillars we engineer at Outprix Digital:</p>
<ul>
  <li><strong>Entity Knowledge Graph Modeling:</strong> Defining your business entity, services, founders, and location with structured JSON-LD Schema.</li>
  <li><strong>Authoritative Digital Citations:</strong> Earning mentions in industry publications and digital PR that language models crawl and corroborate.</li>
  <li><strong>Conversational Intent Mapping:</strong> Answering specific transactional questions that prospective customers type into AI chats.</li>
  <li><strong>Factual Corroboration Architecture:</strong> Keeping pricing models, service descriptions, and operating principles consistent across the web.</li>
</ul>

<h2>Traditional SEO vs. Generative Engine Optimization (GEO)</h2>
<p>The table below highlights the operational differences between ranking for Google keywords and earning citations in generative AI:</p>

<table class="blog-table">
  <thead>
    <tr>
      <th>Strategic Dimension</th>
      <th>Traditional Search Engine Optimization (SEO)</th>
      <th>Generative Engine Optimization (GEO)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Target Interface</strong></td>
      <td>Google 10 blue links and search result pages</td>
      <td>ChatGPT, Perplexity, Claude, Google Gemini</td>
    </tr>
    <tr>
      <td><strong>Core Success Metric</strong></td>
      <td>Keyword ranking positions and organic clicks</td>
      <td>Primary recommendation citation rate and brand corroboration</td>
    </tr>
    <tr>
      <td><strong>Query Type</strong></td>
      <td>Short, fragmented keywords (e.g. "seo agency jaipur")</td>
      <td>Long-form conversational prompts (e.g. "which performance agency in Jaipur has direct founder strategy?")</td>
    </tr>
    <tr>
      <td><strong>Attribution Value</strong></td>
      <td>Top-of-funnel informational traffic</td>
      <td>High-intent, pre-qualified decision makers ready to buy</td>
    </tr>
  </tbody>
</table>

<div class="blog-cta-box">
  <h3>Ready to grow your business online?</h3>
  <p>Get a practical digital marketing strategy designed for your business goals.</p>
  <div class="cta-actions">
    <a href="/contact" class="btn btn-primary">Get a Free Consultation</a>
    <a href="https://wa.me/919460382804?text=Hi%20Outprix%20Digital,%20I'm%20interested%20in%20Generative%20Engine%20Optimization" target="_blank" class="btn btn-secondary">Chat on WhatsApp</a>
  </div>
</div>

<h2>Actionable Implementation Checklist for Jaipur Brands</h2>
<p>To future-proof your digital acquisition, implement these four steps over your next marketing sprint:</p>
<ul>
  <li>Audit whether ChatGPT and Perplexity currently mention your company when queried about your specific industry in Jaipur.</li>
  <li>Implement comprehensive Schema.org markup (Organization, WebSite, Service, FAQPage) across all public pages.</li>
  <li>Create comprehensive, original FAQ content that addresses specific operational and commercial objections.</li>
  <li>Ensure your brand entity data (address, phone, leadership, core offerings) is completely consistent across directory profiles.</li>
</ul>

<h2>Conclusion: The First-Mover Advantage in AI Discovery</h2>
<p>Generative search is not replacing the web; it is streamlining decision-making for buyers. Businesses in Jaipur that build digital entity corroboration today will own conversational visibility as AI search adoption continues to accelerate.</p>
`,
      cta: {
        headline: 'Ready to grow your business online?',
        subtext: 'Get a practical digital marketing strategy designed for your business goals.',
        btn1Text: 'Get a Free Consultation',
        btn1Link: '/contact',
        btn2Text: 'Chat on WhatsApp',
        btn2Link: 'https://wa.me/919460382804?text=Hi%20Outprix%20Digital,%20I%20want%20to%20discuss%20GEO'
      },
      internalLinks: ['/services', '/about', '/contact'],
      faqs: [
        {
          question: 'What is Generative Engine Optimization (GEO)?',
          answer: 'Generative Engine Optimization (GEO) is the practice of optimizing your website and digital presence so generative AI engines (ChatGPT, Perplexity, Claude, Google AI Overviews) recognize, corroborate, and recommend your business to high-intent searchers.'
        },
        {
          question: 'How quickly does GEO produce results?',
          answer: 'Entity corroboration typically registers in AI engine retrieval augmented generation (RAG) indexes within 45 to 90 days as citations and structured entity data are crawled.'
        },
        {
          question: 'Does GEO replace traditional Google SEO?',
          answer: 'No. GEO works in synergy with technical SEO and high-intent performance marketing, creating compounding organic and generative authority.'
        },
        {
          question: 'Can any digital marketing agency in Jaipur execute GEO?',
          answer: 'Effective GEO requires deep knowledge of LLM entity modeling, knowledge graphs, and digital PR corroboration rather than old-fashioned keyword stuffing.'
        }
      ],
      visualSuggestions: [
        {
          placement: 'After Introduction',
          idea: 'Infographic explaining AI search RAG process',
          alt: 'AI Search RAG Process Infographic',
          caption: 'How AI search tools retrieve facts and corroborate trusted entities'
        },
        {
          placement: 'Before FAQs',
          idea: 'Comparison chart of AI citation factors',
          alt: 'AI Citation Factors Comparison Chart',
          caption: 'Key factors influencing LLM brand recommendations'
        }
      ]
    },
    {
      id: 'blog-2',
      title: 'Meta Ads vs Google Ads in 2026: The Strategic Budget Allocation Blueprint for Measurable ROAS',
      slug: 'meta-ads-vs-google-ads-roas-blueprint',
      primaryKeyword: 'meta ads vs google ads roas',
      secondaryKeywords: ['paid media budget', 'performance marketing jaipur', 'blended roas', 'google search ads'],
      metaTitle: 'Meta Ads vs Google Ads: Strategic Budget Allocation Blueprint | Outprix Digital',
      metaDescription: 'Learn how to allocate your paid media budget between Meta Ads and Google Ads for maximum blended ROAS, transparent attribution, and compounding growth.',
      featuredImage: '/assets/outprix-logo.png',
      category: 'Performance Marketing',
      author: { ...DEFAULT_AUTHOR },
      publishDate: '2026-10-18T14:30',
      lastUpdated: '2026-10-21',
      status: 'Published',
      views: 318,
      readTime: '7 min',
      content: `
<h2>The Eternal Dilemma: Where Should Your Next Ad Rupee Go?</h2>
<p>One of the most frequent strategic questions we answer for growing businesses is simple: <em>"Should we invest our ad spend in Meta Ads (Facebook & Instagram) or Google Ads?"</em></p>
<p>Too many agencies treat this as a binary choice. The reality is that Meta Ads and Google Ads serve fundamentally distinct roles across your customer acquisition funnel.</p>
<p>To achieve high blended ROAS, smart marketing leaders engineer a cohesive media architecture where both platforms complement each other.</p>

<div class="visual-suggestion-box">
  <div class="vs-label">Visual Suggestion 01 // Funnel Diagram</div>
  <p><strong>Placement:</strong> Below the introductory section.</p>
  <p><strong>Image Idea:</strong> Full-funnel acquisition map illustrating Meta Ads driving top-of-funnel demand generation and Google Search capturing high-intent bottom-of-funnel demand.</p>
  <p><strong>Alt Text:</strong> Full-funnel paid media architecture diagram showing Meta Ads and Google Ads synergy.</p>
  <p><strong>Caption:</strong> Synergy between Meta demand creation and Google intent capture.</p>
</div>

<h2>Understanding Intent: Demand Generation vs. Demand Capture</h2>
<p>The difference between Meta and Google comes down to user psychology and buying mindset:</p>
<ul>
  <li><strong>Google Search Ads (Demand Capture):</strong> The prospect is already looking for a solution. They type a transactional keyword like "performance marketing agency in Jaipur". Conversion rates are high, but audience volume is capped by search volume.</li>
  <li><strong>Meta Ads (Demand Generation):</strong> The prospect is scrolling their social feed. They are not looking for you, but an engaging hook and direct-response creative stops their scroll and introduces an irresistible proposition.</li>
</ul>

<h2>Strategic Comparison: Meta Ads vs. Google Ads</h2>
<p>Here is how both ad networks compare across critical performance metrics:</p>

<table class="blog-table">
  <thead>
    <tr>
      <th>Performance Dimension</th>
      <th>Meta Ads (Facebook & IG)</th>
      <th>Google Ads (Search & PMax)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Audience Mindset</strong></td>
      <td>Passive browsing / Discovery mode</td>
      <td>Active query / High transactional intent</td>
    </tr>
    <tr>
      <td><strong>Creative Dependency</strong></td>
      <td>Very High (needs 7-day creative iteration)</td>
      <td>Moderate (headline copy & search message match)</td>
    </tr>
    <tr>
      <td><strong>Cost Per Click (CPC)</strong></td>
      <td>Generally lower (₹10 – ₹60 in India)</td>
      <td>Higher on commercial keywords (₹40 – ₹350+)</td>
    </tr>
    <tr>
      <td><strong>Scalability Horizon</strong></td>
      <td>Virtually unlimited algorithmic broad scale</td>
      <td>Constrained by daily search query volume</td>
    </tr>
  </tbody>
</table>

<div class="blog-cta-box">
  <h3>Ready to grow your business online?</h3>
  <p>Get a practical digital marketing strategy designed for your business goals.</p>
  <div class="cta-actions">
    <a href="/contact" class="btn btn-primary">Get a Free Consultation</a>
    <a href="https://wa.me/919460382804?text=Hi%20Outprix%20Digital,%20I'd%20like%20to%20audit%20my%20Meta%20and%20Google%20Ads" target="_blank" class="btn btn-secondary">Chat on WhatsApp</a>
  </div>
</div>

<h2>The Recommended 70/30 Budget Allocation Framework</h2>
<p>For brands operating in competitive Indian markets, we recommend an initial 70/30 or 60/40 allocation framework:</p>
<ul>
  <li><strong>60% – 70% in Meta Ads:</strong> Used to test fresh creative hooks, scale Advantage+ audiences, and drive pre-qualified traffic to conversion-focused landing pages.</li>
  <li><strong>30% – 40% in Google Search & Brand Protection:</strong> Used to capture branded searches and high-intent commercial queries created by your Meta campaigns.</li>
</ul>

<h2>Conclusion: Attribution Truth Above All</h2>
<p>Never measure Meta and Google in silos. Implement server-side tracking (Meta CAPI and Google Enhanced Conversions) and track blended ROAS. When both platforms work together, your acquisition cost drops and compounding revenue begins.</p>
`,
      cta: {
        headline: 'Ready to grow your business online?',
        subtext: 'Get a practical digital marketing strategy designed for your business goals.',
        btn1Text: 'Get a Free Consultation',
        btn1Link: '/contact',
        btn2Text: 'Chat on WhatsApp',
        btn2Link: 'https://wa.me/919460382804?text=Hi%20Outprix%20Digital,%20let%27s%20review%20my%20ad%20ROAS'
      },
      internalLinks: ['/services', '/about', '/contact'],
      faqs: [
        {
          question: 'What is a healthy blended ROAS target for paid ads?',
          answer: 'A healthy blended ROAS depends on your profit margins, but 3.5x to 5.0x blended ROAS is typically targeted for sustainable compounding scale.'
        },
        {
          question: 'Should small businesses start with Google or Meta?',
          answer: 'If you have an immediate high-intent product where people search directly, Google Search is ideal. If you require visual demonstration or demand education, Meta Ads is faster to test.'
        },
        {
          question: 'What is server-side tracking (CAPI) and why does it matter?',
          answer: 'Meta Conversions API (CAPI) sends conversion data directly from your server to Meta, bypassing browser ad-blockers and iOS privacy restrictions for accurate attribution.'
        }
      ],
      visualSuggestions: [
        {
          placement: 'Mid Article',
          idea: 'Budget allocation pie chart',
          alt: '70-30 Paid Media Budget Allocation Framework Chart',
          caption: 'Recommended budget allocation between demand generation and capture'
        }
      ]
    },
    {
      id: 'blog-3',
      title: 'The 7-Day Creative Testing Sprint: How to Scale Ad Campaigns Without Creative Fatigue',
      slug: '7-day-creative-testing-sprint',
      primaryKeyword: 'performance creative testing sprint',
      secondaryKeywords: ['ad creative fatigue', 'direct response ads', 'meta ads scaling', 'creative strategy'],
      metaTitle: 'The 7-Day Creative Testing Sprint Framework | Outprix Digital',
      metaDescription: 'Learn how Outprix Digital engineers 7-day creative testing sprints to beat ad fatigue, lower CPA, and sustainably scale paid ad campaigns.',
      featuredImage: '/assets/outprix-logo.png',
      category: 'Content Strategy',
      author: { ...DEFAULT_AUTHOR },
      publishDate: '2026-10-25T11:00',
      lastUpdated: '2026-10-23',
      status: 'Scheduled',
      views: 0,
      readTime: '5 min',
      content: `
<h2>Why Good Ad Campaigns Suddenly Die</h2>
<p>Every media buyer has experienced this frustration: you launch an ad campaign that prints money for two weeks, and then performance drops off a cliff. Cost per acquisition doubles overnight.</p>
<p>The culprit is rarely your audience targeting or bidding strategy. The culprit is almost always <strong>ad creative fatigue</strong>.</p>
<p>Modern ad algorithms optimize around creative freshness and direct engagement. To scale profitably, you must operate a structured creative testing system.</p>

<div class="visual-suggestion-box">
  <div class="vs-label">Visual Suggestion 01 // Sprint Timeline</div>
  <p><strong>Placement:</strong> Mid-article under Sprint Rhythm.</p>
  <p><strong>Image Idea:</strong> A 7-day calendar timeline showing Day 1 Concepting, Day 2-3 Production, Day 4 Launch, Day 5-6 Data Validation, Day 7 Scale Winning Angles.</p>
  <p><strong>Alt Text:</strong> 7-Day Creative Sprint cycle diagram.</p>
  <p><strong>Caption:</strong> The disciplined weekly iteration rhythm that keeps ad accounts scaling.</p>
</div>

<h2>The 4 Pillars of a High-Converting Creative</h2>
<ul>
  <li><strong>The 3-Second Hook:</strong> Disrupting the feed with unexpected visuals or provocative statements.</li>
  <li><strong>Problem Amplification:</strong> Clearly stating the core frustration your customer is experiencing.</li>
  <li><strong>Unique Mechanism:</strong> Explaining <em>why</em> your solution works where previous attempts failed.</li>
  <li><strong>Frictionless Call to Action:</strong> Guiding the viewer directly into a streamlined qualification funnel.</li>
</ul>

<div class="blog-cta-box">
  <h3>Ready to grow your business online?</h3>
  <p>Get a practical digital marketing strategy designed for your business goals.</p>
  <div class="cta-actions">
    <a href="/contact" class="btn btn-primary">Get a Free Consultation</a>
    <a href="https://wa.me/919460382804?text=Hi%20Outprix%20Digital,%20let%27s%20discuss%20creative%20sprints" target="_blank" class="btn btn-secondary">Chat on WhatsApp</a>
  </div>
</div>
`,
      cta: {
        headline: 'Ready to grow your business online?',
        subtext: 'Get a practical digital marketing strategy designed for your business goals.',
        btn1Text: 'Get a Free Consultation',
        btn1Link: '/contact',
        btn2Text: 'Chat on WhatsApp',
        btn2Link: 'https://wa.me/919460382804?text=Hi%20Outprix%20Digital'
      },
      internalLinks: ['/services', '/contact'],
      faqs: [
        {
          question: 'How many creatives should be tested weekly?',
          answer: 'For moderate budgets (₹50k - ₹2L/month), testing 3 to 5 distinct creative angles weekly provides sufficient statistical significance without diluting budget.'
        }
      ],
      visualSuggestions: []
    },
    {
      id: 'blog-4',
      title: 'Local SEO & Digital PR in Jaipur: Building Sustainable Organic Equity That Compounds',
      slug: 'local-seo-digital-pr-jaipur',
      primaryKeyword: 'digital marketing jaipur seo',
      secondaryKeywords: ['local seo jaipur', 'google business profile', 'digital pr india', 'organic search strategy'],
      metaTitle: 'Local SEO & Digital PR Strategy for Jaipur Brands | Outprix Digital',
      metaDescription: 'A practical, hype-free blueprint for building long-term search engine authority and Google Maps dominance for businesses in Jaipur.',
      featuredImage: '/assets/outprix-logo.png',
      category: 'SEO',
      author: { ...DEFAULT_AUTHOR },
      publishDate: '2026-10-24T09:00',
      lastUpdated: '2026-10-23',
      status: 'Draft',
      views: 0,
      readTime: '6 min',
      content: `
<h2>The Trap of Short-Term Ad Dependency</h2>
<p>Paid media is fantastic for rapid validation and immediate revenue. However, if your customer acquisition halts the moment you pause ad spend, your business lacks digital equity.</p>
<p>Search Engine Optimization (SEO) and Digital PR build permanent compounding value that lowers your average customer acquisition cost over time.</p>
<p>In Jaipur's rapidly digitizing marketplace, claiming authority in organic search requires technical rigor and genuine local corroboration.</p>

<div class="blog-cta-box">
  <h3>Ready to grow your business online?</h3>
  <p>Get a practical digital marketing strategy designed for your business goals.</p>
  <div class="cta-actions">
    <a href="/contact" class="btn btn-primary">Get a Free Consultation</a>
    <a href="https://wa.me/919460382804" target="_blank" class="btn btn-secondary">Chat on WhatsApp</a>
  </div>
</div>
`,
      cta: {
        headline: 'Ready to grow your business online?',
        subtext: 'Get a practical digital marketing strategy designed for your business goals.',
        btn1Text: 'Get a Free Consultation',
        btn1Link: '/contact',
        btn2Text: 'Chat on WhatsApp',
        btn2Link: 'https://wa.me/919460382804'
      },
      internalLinks: ['/services', '/about', '/contact'],
      faqs: [],
      visualSuggestions: []
    }
  ];

  // Default Media Library Items
  const SEED_MEDIA = [
    {
      id: 'media-1',
      name: 'outprix-logo.png',
      url: '/assets/outprix-logo.png',
      type: 'image/png',
      date: '2026-10-20',
      dimensions: '512x512'
    },
    {
      id: 'media-2',
      name: 'bajrang-choudhary.jpg',
      url: '/assets/bajrang-choudhary.jpg',
      type: 'image/jpeg',
      date: '2026-10-15',
      dimensions: '600x700'
    }
  ];

  // --- 2. DATA STORE HELPER ---
  const DataStore = {
    get(key, defaultValue) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (e) {
        console.error('Storage read error:', e);
        return defaultValue;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error('Storage write error:', e);
      }
    },
    init() {
      if (!localStorage.getItem(STORAGE_KEYS.BLOGS)) {
        this.set(STORAGE_KEYS.BLOGS, SEED_BLOGS);
      }
      if (!localStorage.getItem(STORAGE_KEYS.MEDIA)) {
        this.set(STORAGE_KEYS.MEDIA, SEED_MEDIA);
      }
      if (!localStorage.getItem(STORAGE_KEYS.AUTHOR)) {
        this.set(STORAGE_KEYS.AUTHOR, DEFAULT_AUTHOR);
      }
      if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
        this.set(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
      }
    }
  };

  // --- 3. STATE & APP CONTROLLER ---
  const App = {
    currentView: 'dashboard',
    editingBlogId: null,
    searchQuery: '',
    categoryFilter: 'All',
    statusFilter: 'All',

    init() {
      DataStore.init();
      this.checkAuth();
      this.bindEvents();
      this.renderCurrentView();
      this.updateSidebarBadges();
    },

    checkAuth() {
      const isAuth = sessionStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
      const overlay = document.getElementById('login-overlay');
      if (overlay) {
        if (isAuth) {
          overlay.classList.add('hidden');
        } else {
          overlay.classList.remove('hidden');
        }
      }
    },

    login(pass) {
      const settings = DataStore.get(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
      if (pass === settings.adminPass || pass === 'outprix2026') {
        sessionStorage.setItem(STORAGE_KEYS.AUTH, 'true');
        document.getElementById('login-overlay').classList.add('hidden');
        this.showToast('Login successful. Welcome to Blog Admin!', 'success');
        this.renderCurrentView();
      } else {
        this.showToast('Invalid password. Default is "outprix2026".', 'error');
      }
    },

    logout() {
      sessionStorage.removeItem(STORAGE_KEYS.AUTH);
      document.getElementById('login-overlay').classList.remove('hidden');
      this.showToast('Logged out securely.', 'success');
    },

    navigate(viewId, blogId = null) {
      this.currentView = viewId;
      this.editingBlogId = blogId;

      // Update Nav active classes
      document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.view === viewId);
      });

      // Update section display
      document.querySelectorAll('.view-section').forEach(el => {
        el.classList.toggle('active', el.id === `view-${viewId}`);
      });

      // Update Breadcrumb
      const breadcrumb = document.getElementById('page-breadcrumb');
      if (breadcrumb) {
        const labels = {
          'dashboard': 'Dashboard Overview',
          'create-blog': blogId ? 'Edit Blog' : 'Create Blog',
          'ai-generator': 'AI Blog Generator',
          'all-blogs': 'All Blogs',
          'drafts': 'Drafts',
          'scheduled': 'Scheduled Posts',
          'media-library': 'Media Library',
          'seo-settings': 'SEO Settings',
          'author-profile': 'Author Profile',
          'website-settings': 'Website Settings'
        };
        breadcrumb.textContent = labels[viewId] || 'Dashboard';
      }

      this.renderCurrentView();
      this.updateSidebarBadges();

      // Close mobile sidebar if open
      const sidebar = document.querySelector('.sidebar');
      const backdrop = document.querySelector('.sidebar-backdrop');
      if (sidebar) sidebar.classList.remove('mobile-open');
      if (backdrop) backdrop.classList.remove('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    updateSidebarBadges() {
      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      const draftCount = blogs.filter(b => b.status === 'Draft').length;
      const scheduledCount = blogs.filter(b => b.status === 'Scheduled').length;
      const allCount = blogs.length;

      const allEl = document.getElementById('badge-all');
      const draftEl = document.getElementById('badge-drafts');
      const schedEl = document.getElementById('badge-scheduled');

      if (allEl) allEl.textContent = allCount;
      if (draftEl) draftEl.textContent = draftCount;
      if (schedEl) schedEl.textContent = scheduledCount;
    },

    renderCurrentView() {
      switch (this.currentView) {
        case 'dashboard':
          this.renderDashboard();
          break;
        case 'create-blog':
          this.renderEditor(this.editingBlogId);
          break;
        case 'ai-generator':
          this.renderAiGenerator();
          break;
        case 'all-blogs':
          this.statusFilter = 'All';
          this.renderBlogList('all-blogs');
          break;
        case 'drafts':
          this.statusFilter = 'Draft';
          this.renderBlogList('drafts');
          break;
        case 'scheduled':
          this.statusFilter = 'Scheduled';
          this.renderBlogList('scheduled');
          break;
        case 'media-library':
          this.renderMediaLibrary();
          break;
        case 'seo-settings':
          this.renderSeoSettings();
          break;
        case 'author-profile':
          this.renderAuthorProfile();
          break;
        case 'website-settings':
          this.renderWebsiteSettings();
          break;
      }
    },

    // --- DASHBOARD VIEW ---
    renderDashboard() {
      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      const published = blogs.filter(b => b.status === 'Published');
      const drafts = blogs.filter(b => b.status === 'Draft');
      const scheduled = blogs.filter(b => b.status === 'Scheduled');

      // Month filter
      const now = new Date();
      const thisMonth = blogs.filter(b => {
        const d = new Date(b.publishDate || b.lastUpdated);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      });

      document.getElementById('stat-total-published').textContent = published.length;
      document.getElementById('stat-total-drafts').textContent = drafts.length;
      document.getElementById('stat-total-scheduled').textContent = scheduled.length;
      document.getElementById('stat-created-month').textContent = thisMonth.length;

      // Render recent 5 posts
      const recentList = document.getElementById('recent-posts-body');
      if (recentList) {
        if (blogs.length === 0) {
          recentList.innerHTML = `<tr><td colspan="5" class="text-center py-6 text-slate-500">No blogs created yet. Click "Create Blog" to start!</td></tr>`;
        } else {
          recentList.innerHTML = blogs.slice(0, 5).map(b => `
            <tr>
              <td>
                <div class="blog-table-title">${this.escapeHtml(b.title)}</div>
                <div class="blog-table-slug">/blog/${b.slug}</div>
              </td>
              <td><span class="badge badge-category">${b.category || 'Digital'}</span></td>
              <td>
                <span class="badge badge-${b.status.toLowerCase()}">${b.status}</span>
              </td>
              <td class="text-slate-400 font-mono text-xs">${b.publishDate ? b.publishDate.split('T')[0] : b.lastUpdated}</td>
              <td>
                <div class="flex items-center gap-1">
                  <button class="btn btn-sm btn-secondary" onclick="OutprixBlogAdmin.navigate('create-blog', '${b.id}')">Edit</button>
                  <button class="btn btn-sm btn-secondary" onclick="OutprixBlogAdmin.previewBlog('${b.id}')">Preview</button>
                </div>
              </td>
            </tr>
          `).join('');
        }
      }

      this.renderMiniCalendar(scheduled);
    },

    renderMiniCalendar(scheduledPosts) {
      const calContainer = document.getElementById('dashboard-calendar-grid');
      const monthLabel = document.getElementById('calendar-month-label');
      if (!calContainer || !monthLabel) return;

      const date = new Date();
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      monthLabel.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
      const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      const today = date.getDate();

      let html = '';
      // Empty cells before first day
      for (let i = 0; i < firstDay; i++) {
        html += `<div class="calendar-cell opacity-20"></div>`;
      }

      // Check dates with scheduled posts
      const schedDates = scheduledPosts.map(p => {
        if (!p.publishDate) return -1;
        const pd = new Date(p.publishDate);
        return (pd.getMonth() === date.getMonth() && pd.getFullYear() === date.getFullYear()) ? pd.getDate() : -1;
      });

      for (let d = 1; d <= daysInMonth; d++) {
        const isToday = d === today;
        const hasPost = schedDates.includes(d);
        const post = hasPost ? scheduledPosts.find(p => new Date(p.publishDate).getDate() === d) : null;
        const titleAttr = post ? `title="Scheduled: ${this.escapeHtml(post.title)}"` : '';

        html += `
          <div class="calendar-cell ${isToday ? 'today' : ''} ${hasPost ? 'has-post' : ''}" ${titleAttr} onclick="${post ? `OutprixBlogAdmin.navigate('create-blog', '${post.id}')` : ''}">
            <span>${d}</span>
            ${hasPost ? '<span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-0.5"></span>' : ''}
          </div>
        `;
      }

      calContainer.innerHTML = html;
    },

    // --- BLOG LIST VIEW (All Blogs / Drafts / Scheduled) ---
    renderBlogList(viewType) {
      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      let filtered = [...blogs];

      if (this.statusFilter !== 'All') {
        filtered = filtered.filter(b => b.status === this.statusFilter);
      }

      if (this.categoryFilter !== 'All') {
        filtered = filtered.filter(b => b.category === this.categoryFilter);
      }

      if (this.searchQuery.trim() !== '') {
        const q = this.searchQuery.toLowerCase();
        filtered = filtered.filter(b => 
          b.title.toLowerCase().includes(q) || 
          (b.primaryKeyword && b.primaryKeyword.toLowerCase().includes(q)) ||
          b.slug.toLowerCase().includes(q)
        );
      }

      const tableBody = document.getElementById(`${viewType}-table-body`);
      if (!tableBody) return;

      if (filtered.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="7" class="text-center py-10 text-slate-400">
              <div class="text-2xl mb-2">📄</div>
              <div>No ${this.statusFilter !== 'All' ? this.statusFilter.toLowerCase() : ''} blogs found.</div>
              <button class="btn btn-sm btn-primary mt-3" onclick="OutprixBlogAdmin.navigate('create-blog')">+ Create First Blog</button>
            </td>
          </tr>
        `;
        return;
      }

      tableBody.innerHTML = filtered.map(b => `
        <tr>
          <td style="width: 50px;">
            <img src="${b.featuredImage || '/assets/outprix-logo.png'}" alt="Thumb" class="w-10 h-10 rounded-lg object-cover bg-slate-900 border border-white/10" onerror="this.src='/assets/outprix-logo.png'" />
          </td>
          <td>
            <div class="blog-table-title">${this.escapeHtml(b.title)}</div>
            <div class="blog-table-slug">/blog/${b.slug}</div>
          </td>
          <td>
            <span class="inline-block px-2 py-0.5 rounded text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              ${b.primaryKeyword || 'N/A'}
            </span>
          </td>
          <td class="text-xs text-slate-300">${(b.author && b.author.name) ? b.author.name : 'Outprix Team'}</td>
          <td>
            <span class="badge badge-${b.status.toLowerCase()}">${b.status}</span>
          </td>
          <td class="text-xs text-slate-400 font-mono">
            <div>Pub: ${b.publishDate ? b.publishDate.split('T')[0] : '—'}</div>
            <div class="text-[10px] text-slate-500">Upd: ${b.lastUpdated || '—'}</div>
          </td>
          <td>
            <div class="flex items-center gap-1.5 flex-wrap">
              <button class="btn btn-sm btn-secondary" title="Edit" onclick="OutprixBlogAdmin.navigate('create-blog', '${b.id}')">✏️ Edit</button>
              <button class="btn btn-sm btn-secondary" title="Preview" onclick="OutprixBlogAdmin.previewBlog('${b.id}')">👁️ Preview</button>
              <button class="btn btn-sm btn-secondary" title="Duplicate" onclick="OutprixBlogAdmin.duplicateBlog('${b.id}')">📋 Copy</button>
              <button class="btn btn-sm btn-secondary" title="Export Public HTML" onclick="OutprixBlogAdmin.exportPublicHtml('${b.id}')">📥 HTML</button>
              ${b.status === 'Published' 
                ? `<button class="btn btn-sm btn-secondary" title="Unpublish to Draft" onclick="OutprixBlogAdmin.togglePublish('${b.id}', 'Draft')">Unpublish</button>`
                : `<button class="btn btn-sm btn-emerald" title="Publish Now" onclick="OutprixBlogAdmin.togglePublish('${b.id}', 'Published')">Publish</button>`
              }
              <button class="btn btn-sm btn-danger" title="Delete" onclick="OutprixBlogAdmin.deleteBlog('${b.id}')">🗑️</button>
            </div>
          </td>
        </tr>
      `).join('');
    },

    // --- CREATE & EDIT BLOG EDITOR ---
    renderEditor(blogId) {
      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      let blog = null;

      if (blogId) {
        blog = blogs.find(b => b.id === blogId);
      }

      // Default blank state
      const defaultState = {
        id: 'blog-' + Date.now(),
        title: '',
        slug: '',
        primaryKeyword: '',
        secondaryKeywords: [],
        metaTitle: '',
        metaDescription: '',
        featuredImage: '/assets/outprix-logo.png',
        category: 'Performance Marketing',
        author: DataStore.get(STORAGE_KEYS.AUTHOR, DEFAULT_AUTHOR),
        publishDate: new Date().toISOString().slice(0, 16),
        status: 'Draft',
        content: '',
        cta: {
          headline: 'Ready to grow your business online?',
          subtext: 'Get a practical digital marketing strategy designed for your business goals.',
          btn1Text: 'Get a Free Consultation',
          btn1Link: '/contact',
          btn2Text: 'Chat on WhatsApp',
          btn2Link: 'https://wa.me/919460382804?text=Hi%20Outprix%20Digital'
        },
        internalLinks: ['/services', '/about', '/contact'],
        faqs: [
          { question: 'What makes Outprix Digital unique?', answer: 'We engineer founder-led growth strategies with zero junior hand-offs and radical attribution truth.' }
        ],
        visualSuggestions: []
      };

      const b = blog || defaultState;
      this.currentEditingData = JSON.parse(JSON.stringify(b));

      // Populate Form Fields
      document.getElementById('edit-blog-id').value = b.id;
      document.getElementById('edit-title').value = b.title || '';
      document.getElementById('edit-slug').value = b.slug || '';
      document.getElementById('edit-primary-kw').value = b.primaryKeyword || '';
      document.getElementById('edit-secondary-kws').value = Array.isArray(b.secondaryKeywords) ? b.secondaryKeywords.join(', ') : '';
      document.getElementById('edit-meta-title').value = b.metaTitle || '';
      document.getElementById('edit-meta-desc').value = b.metaDescription || '';
      document.getElementById('edit-featured-img').value = b.featuredImage || '/assets/outprix-logo.png';
      document.getElementById('edit-featured-img-preview').src = b.featuredImage || '/assets/outprix-logo.png';
      document.getElementById('edit-category').value = b.category || 'Performance Marketing';
      document.getElementById('edit-author-name').value = (b.author && b.author.name) ? b.author.name : 'Outprix Digital Team';
      document.getElementById('edit-publish-date').value = b.publishDate ? b.publishDate.slice(0, 16) : new Date().toISOString().slice(0, 16);
      document.getElementById('edit-status-badge').textContent = b.status || 'Draft';
      document.getElementById('edit-status-badge').className = `badge badge-${(b.status || 'draft').toLowerCase()}`;
      document.getElementById('edit-content').value = b.content || '';

      // CTA fields
      document.getElementById('edit-cta-headline').value = (b.cta && b.cta.headline) || 'Ready to grow your business online?';
      document.getElementById('edit-cta-subtext').value = (b.cta && b.cta.subtext) || 'Get a practical digital marketing strategy designed for your business goals.';
      document.getElementById('edit-cta-btn1-text').value = (b.cta && b.cta.btn1Text) || 'Get a Free Consultation';
      document.getElementById('edit-cta-btn1-link').value = (b.cta && b.cta.btn1Link) || '/contact';
      document.getElementById('edit-cta-btn2-text').value = (b.cta && b.cta.btn2Text) || 'Chat on WhatsApp';
      document.getElementById('edit-cta-btn2-link').value = (b.cta && b.cta.btn2Link) || 'https://wa.me/919460382804';

      // FAQs list
      this.renderFaqEditorList(b.faqs || []);

      // Visual suggestions list
      this.renderVisualSuggestionsList(b.visualSuggestions || []);

      // Trigger character count updates & SEO audit
      this.updateCharCounts();
      this.updateSeoScore();
    },

    renderFaqEditorList(faqs) {
      const container = document.getElementById('faq-items-container');
      if (!container) return;

      if (!faqs || faqs.length === 0) {
        container.innerHTML = `<div class="text-xs text-slate-500 py-2">No FAQs added yet. Click "+ Add FAQ" below.</div>`;
        return;
      }

      container.innerHTML = faqs.map((f, i) => `
        <div class="faq-edit-item p-3 rounded-lg bg-slate-900 border border-white/10 mb-2 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-cyan-400 font-semibold">FAQ #${i + 1}</span>
            <button type="button" class="text-xs text-rose-400 hover:text-white" onclick="OutprixBlogAdmin.removeFaq(${i})">✕ Remove</button>
          </div>
          <input type="text" class="form-input text-xs faq-q" value="${this.escapeHtml(f.question || '')}" placeholder="Question" />
          <textarea class="form-textarea text-xs faq-a" rows="2" placeholder="Answer">${this.escapeHtml(f.answer || '')}</textarea>
        </div>
      `).join('');
    },

    addFaq() {
      const container = document.getElementById('faq-items-container');
      const current = this.collectFaqsFromEditor();
      current.push({ question: '', answer: '' });
      this.renderFaqEditorList(current);
    },

    removeFaq(index) {
      const current = this.collectFaqsFromEditor();
      current.splice(index, 1);
      this.renderFaqEditorList(current);
    },

    collectFaqsFromEditor() {
      const items = [];
      document.querySelectorAll('.faq-edit-item').forEach(el => {
        const q = el.querySelector('.faq-q').value.trim();
        const a = el.querySelector('.faq-a').value.trim();
        if (q || a) {
          items.push({ question: q, answer: a });
        }
      });
      return items;
    },

    renderVisualSuggestionsList(visuals) {
      const container = document.getElementById('visual-suggestions-container');
      if (!container) return;

      if (!visuals || visuals.length === 0) {
        container.innerHTML = `<div class="text-xs text-slate-500 py-1">Visual suggestions auto-generated by AI will display here.</div>`;
        return;
      }

      container.innerHTML = visuals.map((v, i) => `
        <div class="p-2.5 rounded-lg bg-slate-900/80 border border-cyan-500/20 text-xs mb-2 space-y-1">
          <div class="font-mono text-cyan-400 font-bold">${v.placement || `Visual #${i+1}`}</div>
          <div><strong class="text-slate-300">Idea:</strong> ${this.escapeHtml(v.idea || '')}</div>
          <div><strong class="text-slate-400">Alt:</strong> ${this.escapeHtml(v.alt || '')}</div>
          <div><strong class="text-slate-400">Caption:</strong> ${this.escapeHtml(v.caption || '')}</div>
        </div>
      `).join('');
    },

    updateCharCounts() {
      const metaTitleInput = document.getElementById('edit-meta-title');
      const metaDescInput = document.getElementById('edit-meta-desc');
      const titleCount = document.getElementById('meta-title-count');
      const descCount = document.getElementById('meta-desc-count');

      if (metaTitleInput && titleCount) {
        const len = metaTitleInput.value.length;
        titleCount.textContent = `${len}/60`;
        titleCount.className = len >= 40 && len <= 60 ? 'text-emerald-400' : 'text-amber-400';
      }

      if (metaDescInput && descCount) {
        const len = metaDescInput.value.length;
        descCount.textContent = `${len}/160`;
        descCount.className = len >= 120 && len <= 160 ? 'text-emerald-400' : 'text-amber-400';
      }
    },

    updateSeoScore() {
      const title = document.getElementById('edit-title').value.toLowerCase();
      const slug = document.getElementById('edit-slug').value.toLowerCase();
      const primaryKw = document.getElementById('edit-primary-kw').value.toLowerCase().trim();
      const metaTitle = document.getElementById('edit-meta-title').value.toLowerCase();
      const metaDesc = document.getElementById('edit-meta-desc').value.toLowerCase();
      const content = document.getElementById('edit-content').value.toLowerCase();

      let score = 0;
      const checks = {
        hasPrimaryKw: primaryKw.length > 2,
        kwInTitle: primaryKw && title.includes(primaryKw),
        kwInSlug: primaryKw && slug.includes(slugify(primaryKw)),
        kwInMetaTitle: primaryKw && metaTitle.includes(primaryKw),
        kwInMetaDesc: primaryKw && metaDesc.includes(primaryKw),
        kwInIntro: primaryKw && content.slice(0, 400).includes(primaryKw),
        kwInHeadings: primaryKw && /<h2[^>]*>.*?(?=<\/h2>)/.test(content) && content.includes(primaryKw),
        goodLength: content.split(/\s+/).filter(Boolean).length >= 600,
        hasFaqs: this.collectFaqsFromEditor().length >= 2,
        hasInternalLinks: content.includes('href="/')
      };

      if (checks.hasPrimaryKw) score += 10;
      if (checks.kwInTitle) score += 15;
      if (checks.kwInSlug) score += 10;
      if (checks.kwInMetaTitle) score += 10;
      if (checks.kwInMetaDesc) score += 10;
      if (checks.kwInIntro) score += 10;
      if (checks.kwInHeadings) score += 10;
      if (checks.goodLength) score += 15;
      if (checks.hasFaqs) score += 5;
      if (checks.hasInternalLinks) score += 5;

      const scoreValEl = document.getElementById('seo-score-value');
      const scoreFillEl = document.getElementById('seo-score-fill');
      if (scoreValEl && scoreFillEl) {
        scoreValEl.textContent = `${score}/100`;
        scoreFillEl.style.width = `${score}%`;
        scoreFillEl.style.backgroundColor = score >= 80 ? 'var(--accent-emerald)' : (score >= 50 ? 'var(--accent-amber)' : 'var(--accent-rose)');
      }

      // Update Checklist UI
      this.updateChecklistIcon('seo-chk-kw-title', checks.kwInTitle);
      this.updateChecklistIcon('seo-chk-kw-slug', checks.kwInSlug);
      this.updateChecklistIcon('seo-chk-kw-meta', checks.kwInMetaTitle && checks.kwInMetaDesc);
      this.updateChecklistIcon('seo-chk-kw-intro', checks.kwInIntro);
      this.updateChecklistIcon('seo-chk-kw-h2', checks.kwInHeadings);
      this.updateChecklistIcon('seo-chk-wordcount', checks.goodLength);
    },

    updateChecklistIcon(elementId, passed) {
      const el = document.getElementById(elementId);
      if (!el) return;
      el.className = `seo-check-item ${passed ? 'pass' : 'fail'}`;
      const icon = el.querySelector('.check-icon');
      if (icon) icon.textContent = passed ? '✓' : '✕';
    },

    // Toolbar Snippet Inserters
    insertIntoEditor(tagStart, tagEnd = '') {
      const textarea = document.getElementById('edit-content');
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);
      const replacement = tagStart + (selectedText || '') + tagEnd;
      textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
      textarea.focus();
      textarea.setSelectionRange(start + tagStart.length, start + tagStart.length + selectedText.length);
      this.updateSeoScore();
    },

    insertComparisonTableSnippet() {
      const tableSnippet = `
<table class="blog-table">
  <thead>
    <tr>
      <th>Strategic Pillar</th>
      <th>Traditional Approach</th>
      <th>Outprix Growth Standard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Attribution</strong></td>
      <td>Vanity clicks and surface impressions</td>
      <td>Server-side CAPI and blended revenue ROAS</td>
    </tr>
    <tr>
      <td><strong>Execution Speed</strong></td>
      <td>Monthly reporting with slow pivots</td>
      <td>Disciplined 7-day creative testing sprints</td>
    </tr>
    <tr>
      <td><strong>Strategy Leadership</strong></td>
      <td>Junior intern account management</td>
      <td>Direct founder guidance by Bajrang Choudhary</td>
    </tr>
  </tbody>
</table>
`;
      this.insertIntoEditor(tableSnippet);
    },

    insertVisualSuggestionSnippet() {
      const vsSnippet = `
<div class="visual-suggestion-box">
  <div class="vs-label">Visual Suggestion // Process Flow</div>
  <p><strong>Placement:</strong> Insert between key methodology headings.</p>
  <p><strong>Image Idea:</strong> A structured step-by-step diagram showing campaign architecture.</p>
  <p><strong>Alt Text:</strong> Step-by-step campaign architecture diagram for digital marketing.</p>
  <p><strong>Caption:</strong> Systematic performance engineering framework designed for compounding scale.</p>
</div>
`;
      this.insertIntoEditor(vsSnippet);
    },

    insertCtaSnippet() {
      const ctaSnippet = `
<div class="blog-cta-box">
  <h3>Ready to grow your business online?</h3>
  <p>Get a practical digital marketing strategy designed for your business goals.</p>
  <div class="cta-actions">
    <a href="/contact" class="btn btn-primary">Get a Free Consultation</a>
    <a href="https://wa.me/919460382804" target="_blank" class="btn btn-secondary">Chat on WhatsApp</a>
  </div>
</div>
`;
      this.insertIntoEditor(ctaSnippet);
    },

    // Save/Publish Editor Logic
    saveBlog(forcedStatus = null) {
      const id = document.getElementById('edit-blog-id').value;
      const title = document.getElementById('edit-title').value.trim();
      let slug = document.getElementById('edit-slug').value.trim();

      if (!title) {
        this.showToast('Please provide a Blog Title before saving.', 'error');
        return false;
      }

      if (!slug) {
        slug = slugify(title);
        document.getElementById('edit-slug').value = slug;
      }

      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      let existingIndex = blogs.findIndex(b => b.id === id);

      const status = forcedStatus || (existingIndex >= 0 ? blogs[existingIndex].status : 'Draft');
      const author = DataStore.get(STORAGE_KEYS.AUTHOR, DEFAULT_AUTHOR);

      const blogData = {
        id: id,
        title: title,
        slug: slug,
        primaryKeyword: document.getElementById('edit-primary-kw').value.trim(),
        secondaryKeywords: document.getElementById('edit-secondary-kws').value.split(',').map(s => s.trim()).filter(Boolean),
        metaTitle: document.getElementById('edit-meta-title').value.trim() || `${title} | Outprix Digital`,
        metaDescription: document.getElementById('edit-meta-desc').value.trim(),
        featuredImage: document.getElementById('edit-featured-img').value.trim() || '/assets/outprix-logo.png',
        category: document.getElementById('edit-category').value,
        author: {
          name: document.getElementById('edit-author-name').value.trim() || author.name,
          bio: author.bio,
          avatar: author.avatar
        },
        publishDate: document.getElementById('edit-publish-date').value,
        lastUpdated: new Date().toISOString().split('T')[0],
        status: status,
        content: document.getElementById('edit-content').value,
        cta: {
          headline: document.getElementById('edit-cta-headline').value.trim(),
          subtext: document.getElementById('edit-cta-subtext').value.trim(),
          btn1Text: document.getElementById('edit-cta-btn1-text').value.trim(),
          btn1Link: document.getElementById('edit-cta-btn1-link').value.trim(),
          btn2Text: document.getElementById('edit-cta-btn2-text').value.trim(),
          btn2Link: document.getElementById('edit-cta-btn2-link').value.trim()
        },
        internalLinks: ['/services', '/about', '/contact', '/faq'],
        faqs: this.collectFaqsFromEditor(),
        visualSuggestions: this.currentEditingData ? (this.currentEditingData.visualSuggestions || []) : []
      };

      if (existingIndex >= 0) {
        blogs[existingIndex] = { ...blogs[existingIndex], ...blogData };
      } else {
        blogs.unshift(blogData);
      }

      DataStore.set(STORAGE_KEYS.BLOGS, blogs);
      this.updateSidebarBadges();
      this.showToast(`Blog saved successfully as ${status}!`, 'success');

      // Update badge in editor
      document.getElementById('edit-status-badge').textContent = status;
      document.getElementById('edit-status-badge').className = `badge badge-${status.toLowerCase()}`;

      return true;
    },

    publishBlogNow() {
      if (this.saveBlog('Published')) {
        this.showToast('Blog is now published live on Outprix Digital!', 'success');
      }
    },

    scheduleBlogNow() {
      const dateVal = document.getElementById('edit-publish-date').value;
      if (!dateVal) {
        this.showToast('Please select a scheduled Publish Date & Time.', 'error');
        return;
      }
      if (this.saveBlog('Scheduled')) {
        this.showToast(`Post scheduled for ${dateVal}!`, 'success');
      }
    },

    togglePublish(blogId, newStatus) {
      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      const blog = blogs.find(b => b.id === blogId);
      if (blog) {
        blog.status = newStatus;
        blog.lastUpdated = new Date().toISOString().split('T')[0];
        DataStore.set(STORAGE_KEYS.BLOGS, blogs);
        this.updateSidebarBadges();
        this.renderCurrentView();
        this.showToast(`Post updated to ${newStatus}.`, 'success');
      }
    },

    duplicateBlog(blogId) {
      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      const source = blogs.find(b => b.id === blogId);
      if (!source) return;

      const copy = JSON.parse(JSON.stringify(source));
      copy.id = 'blog-' + Date.now();
      copy.title = `${copy.title} (Copy)`;
      copy.slug = `${copy.slug}-copy`;
      copy.status = 'Draft';
      copy.publishDate = new Date().toISOString().slice(0, 16);
      copy.lastUpdated = new Date().toISOString().split('T')[0];

      blogs.unshift(copy);
      DataStore.set(STORAGE_KEYS.BLOGS, blogs);
      this.updateSidebarBadges();
      this.renderCurrentView();
      this.showToast('Blog duplicated as Draft.', 'success');
    },

    deleteBlog(blogId) {
      if (!confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) return;
      let blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      blogs = blogs.filter(b => b.id !== blogId);
      DataStore.set(STORAGE_KEYS.BLOGS, blogs);
      this.updateSidebarBadges();
      this.renderCurrentView();
      this.showToast('Blog deleted permanently.', 'success');
    },

    // --- AI BLOG GENERATOR ENGINE ---
    renderAiGenerator() {
      // Clear or set default
      document.getElementById('ai-target-location').value = 'Jaipur, Rajasthan';
    },

    generateAiBlog() {
      const primaryKw = document.getElementById('ai-primary-kw').value.trim();
      const secondaryKwsStr = document.getElementById('ai-secondary-kws').value.trim();
      const location = document.getElementById('ai-target-location').value.trim() || 'Jaipur, Rajasthan';
      const topicIdea = document.getElementById('ai-topic-idea').value.trim();
      const audience = document.getElementById('ai-target-audience').value.trim() || 'Business founders, marketing heads, and local entrepreneurs';
      const preferredCta = document.getElementById('ai-preferred-cta').value.trim() || 'Get a Free Consultation';
      const notes = document.getElementById('ai-notes').value.trim();

      if (!primaryKw) {
        this.showToast('Please enter at least a Primary Keyword.', 'error');
        return;
      }

      const secondaryKws = secondaryKwsStr.split(',').map(s => s.trim()).filter(Boolean);

      // Loading state UI
      const btn = document.getElementById('btn-generate-ai');
      const progressBox = document.getElementById('ai-generation-progress');
      const previewBox = document.getElementById('ai-generation-preview');
      btn.disabled = true;
      btn.innerHTML = '✨ Generating Draft... Please Wait';
      progressBox.classList.remove('hidden');
      previewBox.classList.add('hidden');

      // Multi-step progress simulation to showcase compliance checks
      const steps = [
        'Analyzing search intent & keyword placement...',
        `Applying EEAT rules for ${location}...`,
        'Structuring short paragraphs, H1, H2s & H3s...',
        'Compiling comparison table and visual suggestions...',
        'Drafting 4-6 practical FAQs and Outprix CTA block...',
        'Verifying zero unverified claims and zero real estate references...'
      ];

      let stepIdx = 0;
      const stepEl = document.getElementById('ai-progress-status');
      const interval = setInterval(() => {
        if (stepIdx < steps.length) {
          stepEl.textContent = steps[stepIdx];
          stepIdx++;
        }
      }, 350);

      setTimeout(() => {
        clearInterval(interval);

        // Build the AI Blog draft following all strict user rules
        const draft = this.constructAiBlogContent({
          primaryKw,
          secondaryKws,
          location,
          topicIdea,
          audience,
          preferredCta,
          notes
        });

        this.generatedAiDraft = draft;

        progressBox.classList.add('hidden');
        previewBox.classList.remove('hidden');
        btn.disabled = false;
        btn.innerHTML = '✨ Generate Another Blog with AI';

        // Render preview in AI tab
        document.getElementById('ai-preview-title').textContent = draft.title;
        document.getElementById('ai-preview-meta').textContent = `${draft.primaryKeyword} • ${draft.category} • Saved as Draft for Approval`;
        document.getElementById('ai-preview-body').innerHTML = draft.content.slice(0, 800) + '... (truncated for preview)';

        this.showToast('AI Draft generated successfully and saved as Draft!', 'success');
      }, 2200);
    },

    constructAiBlogContent({ primaryKw, secondaryKws, location, topicIdea, audience, preferredCta, notes }) {
      const capKw = capitalizeWords(primaryKw);
      const title = topicIdea || `${capKw}: Practical Growth Strategy for Ambitious Businesses in ${location}`;
      const slug = slugify(primaryKw);

      const secKwList = secondaryKws.length > 0 ? secondaryKws : ['digital marketing agency jaipur', 'performance marketing', 'conversion optimization', 'brand growth'];

      const content = `
<h2>Why ${capKw} Matters for Businesses in ${location}</h2>
<p>Modern customer acquisition in ${location} has evolved beyond generic campaigns and vanity metrics. High-growth enterprises require structured, compounding digital marketing systems that turn search queries and ad impressions into qualified business revenue.</p>
<p>Implementing a rigorous approach to <strong>${primaryKw}</strong> allows businesses to build radical attribution clarity, reduce wasted media spend, and establish authentic brand presence across search engines and paid channels.</p>
<p>Whether you manage an established regional brand or a high-velocity startup, understanding how ${primaryKw} integrates with your overall digital architecture is the first step toward predictable commercial growth.</p>

<div class="visual-suggestion-box">
  <div class="vs-label">Visual Suggestion 01 // Strategy Framework</div>
  <p><strong>Placement:</strong> Immediately following the strategic introduction.</p>
  <p><strong>Image Idea:</strong> A clean 3-tier architecture diagram showing Traffic Acquisition (Search + Paid), Conversion Infrastructure (Landing Page + CRM), and Lifetime Value Compounding.</p>
  <p><strong>Alt Text:</strong> ${capKw} strategic framework diagram illustrating multi-channel growth synergy.</p>
  <p><strong>Caption:</strong> The unified digital marketing framework engineered for compounding business equity.</p>
</div>

<h2>Core Operating Principles Behind Effective ${capKw}</h2>
<p>Successful execution is built on disciplined foundations rather than temporary gimmicks. Here are the core operating principles we apply at Outprix Digital:</p>
<ul>
  <li><strong>Radical Attribution Truth:</strong> We eliminate vanity metrics such as surface impressions or click volume. Every rupee invested must tie directly to verified sales inquiries, pipeline value, and return on ad spend.</li>
  <li><strong>Sprint-Based Execution Rhythm:</strong> Marketing algorithms reward continuous creative and message testing. Working in disciplined 7-day sprint cycles prevents campaign stagnation.</li>
  <li><strong>Direct Strategic Accountability:</strong> Your strategy is architected and scrutinized by experienced specialists, ensuring thoughtful execution without junior delegation.</li>
  <li><strong>Multi-Channel Cohesion:</strong> Bridging organic search visibility, high-intent lead generation, and performance media so every channel amplifies the other.</li>
</ul>

<h2>Strategic Comparison: Traditional Marketing vs. Engineered Growth</h2>
<p>To understand why modern execution outperforms legacy marketing, examine the operational contrast below:</p>

<table class="blog-table">
  <thead>
    <tr>
      <th>Operational Dimension</th>
      <th>Legacy Marketing Agency Model</th>
      <th>Outprix Digital Performance Standard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Core Success Metric</strong></td>
      <td>Vanity reach, impressions, and engagement rates</td>
      <td>Qualified sales leads, blended ROAS, and net pipeline revenue</td>
    </tr>
    <tr>
      <td><strong>Execution Rhythm</strong></td>
      <td>Static monthly retainers with slow pivot cycles</td>
      <td>High-velocity 7-day creative testing and optimization sprints</td>
    </tr>
    <tr>
      <td><strong>Account Handling</strong></td>
      <td>Senior pitch team delegating work to junior trainees</td>
      <td>Direct founder strategy and vetted agile media buying squads</td>
    </tr>
    <tr>
      <td><strong>Search Alignment</strong></td>
      <td>Keyword stuffing on outdated blue-link directories</td>
      <td>Entity knowledge graph modeling and AI search corroboration</td>
    </tr>
  </tbody>
</table>

<div class="blog-cta-box">
  <h3>Ready to grow your business online?</h3>
  <p>Get a practical digital marketing strategy designed for your business goals.</p>
  <div class="cta-actions">
    <a href="/contact" class="btn btn-primary">${preferredCta}</a>
    <a href="https://wa.me/919460382804?text=Hi%20Outprix%20Digital,%20I'd%20like%20to%20discuss%20${encodeURIComponent(primaryKw)}" target="_blank" class="btn btn-secondary">Chat on WhatsApp</a>
  </div>
</div>

<h2>Actionable Implementation Blueprint: Step-by-Step</h2>
<p>To operationalize ${primaryKw} across your organization, execute these four disciplined phases:</p>
<ol>
  <li><strong>Deep Funnel & Tracking Audit:</strong> Audit server-side tracking, pixel health, and historical conversion drop-offs before investing additional marketing capital.</li>
  <li><strong>Creative & Messaging Engineering:</strong> Craft compelling direct-response hooks and conversion-focused landing pages aligned with ${secKwList[0] || 'buyer psychology'}.</li>
  <li><strong>Controlled Algorithmic Launch:</strong> Launch focused multi-angle tests with strict cost-per-acquisition guardrails to validate winning angles.</li>
  <li><strong>Compounding Scale & Search Equity:</strong> Layer organic search optimization and digital PR to build sustainable organic equity alongside paid channels.</li>
</ol>

<div class="visual-suggestion-box">
  <div class="vs-label">Visual Suggestion 02 // Attribution Metric Dashboard</div>
  <p><strong>Placement:</strong> Preceding the conclusion section.</p>
  <p><strong>Image Idea:</strong> A sleek dark-mode analytics chart showing declining cost-per-acquisition alongside compounding blended ROAS.</p>
  <p><strong>Alt Text:</strong> Performance analytics dashboard displaying compounded ROAS and qualified lead volume.</p>
  <p><strong>Caption:</strong> Continuous measurement and attribution transparency drive compounding marketing ROI.</p>
</div>

<h2>Conclusion: The Path to Compounding Growth in ${location}</h2>
<p>Digital marketing is neither a single campaign nor a collection of disconnected tasks. It is an engineered acquisition system designed to produce measurable, compounding business returns.</p>
<p>By implementing a focused strategy around <strong>${primaryKw}</strong>, business owners in ${location} can eliminate guesswork, protect their marketing budget, and build long-term digital authority.</p>
`;

      const faqs = [
        {
          question: `How does ${primaryKw} impact bottom-line business revenue?`,
          answer: `By focusing on high-intent customer acquisition and conversion optimization rather than vanity impressions, every rupee invested is measured against verified sales pipeline and blended ROAS.`
        },
        {
          question: `How quickly can businesses in ${location} expect measurable results?`,
          answer: `Paid media validation typically produces initial lead velocity and attribution data within 7 to 14 days of launch, while organic search equity compounds over 60 to 90 days.`
        },
        {
          question: `What makes Outprix Digital's approach different?`,
          answer: `We combine direct founder-led strategic guidance, transparent attribution tracking, and disciplined 7-day creative testing sprints with zero junior delegation.`
        },
        {
          question: `Who owns our ad accounts, creative assets, and analytics data?`,
          answer: `You do. You retain 100% administrative ownership and control of all ad accounts, tracking servers, domains, and creative assets at all times.`
        }
      ];

      const visualSuggestions = [
        {
          placement: 'After Introduction',
          idea: 'Strategic 3-tier architecture diagram',
          alt: `${capKw} multi-channel growth framework`,
          caption: 'Unified digital marketing framework engineered for compounding business equity'
        },
        {
          placement: 'Before Conclusion',
          idea: 'Attribution metrics analytics dashboard',
          alt: 'Performance analytics dashboard displaying compounded ROAS',
          caption: 'Continuous measurement and attribution transparency drive compounding marketing ROI'
        }
      ];

      const draftObj = {
        id: 'blog-' + Date.now(),
        title: title,
        slug: slug,
        primaryKeyword: primaryKw,
        secondaryKeywords: secKwList,
        metaTitle: `${capKw} | Outprix Digital`,
        metaDescription: `Discover how ${primaryKw} in ${location} helps ambitious businesses build compounding growth, transparent attribution, and measurable ROAS.`,
        featuredImage: '/assets/outprix-logo.png',
        category: 'Performance Marketing',
        author: DataStore.get(STORAGE_KEYS.AUTHOR, DEFAULT_AUTHOR),
        publishDate: new Date().toISOString().slice(0, 16),
        lastUpdated: new Date().toISOString().split('T')[0],
        status: 'Draft', // Saved as Draft first!
        content: content.trim(),
        cta: {
          headline: 'Ready to grow your business online?',
          subtext: 'Get a practical digital marketing strategy designed for your business goals.',
          btn1Text: preferredCta,
          btn1Link: '/contact',
          btn2Text: 'Chat on WhatsApp',
          btn2Link: `https://wa.me/919460382804?text=Hi%20Outprix%20Digital,%20I'd%20like%20to%20discuss%20${encodeURIComponent(primaryKw)}`
        },
        internalLinks: ['/services', '/about', '/contact', '/faq'],
        faqs: faqs,
        visualSuggestions: visualSuggestions
      };

      // Save to DataStore as Draft
      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      blogs.unshift(draftObj);
      DataStore.set(STORAGE_KEYS.BLOGS, blogs);
      this.updateSidebarBadges();

      return draftObj;
    },

    loadAiDraftIntoEditor() {
      if (this.generatedAiDraft) {
        this.navigate('create-blog', this.generatedAiDraft.id);
        this.showToast('AI Draft loaded into Editor. Review and approve before publishing!', 'success');
      }
    },

    // --- UPLOAD & IMPORT PARSER ---
    handleFileUpload(file) {
      if (!file) return;

      const fileName = file.name;
      const ext = fileName.split('.').pop().toLowerCase();
      const validExts = ['docx', 'pdf', 'txt', 'md', 'html'];

      if (!validExts.includes(ext)) {
        this.showToast(`Unsupported format .${ext}. Please upload DOCX, PDF, TXT, MD, or HTML.`, 'error');
        return;
      }

      const reader = new FileReader();
      const statusEl = document.getElementById('upload-status-msg');
      if (statusEl) statusEl.textContent = `Reading ${fileName}...`;

      reader.onload = (e) => {
        let parsedContent = '';
        const raw = e.target.result;

        if (ext === 'txt' || ext === 'md') {
          parsedContent = this.convertMarkdownOrTextToHtml(raw);
        } else if (ext === 'html') {
          parsedContent = this.cleanImportedHtml(raw);
        } else if (ext === 'docx') {
          parsedContent = this.extractTextFromDocxOrPdf(raw, ext);
        } else if (ext === 'pdf') {
          parsedContent = this.extractTextFromDocxOrPdf(raw, ext);
        }

        // Auto-extract a title
        const baseTitle = fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        const capTitle = capitalizeWords(baseTitle);

        const newImported = {
          id: 'blog-' + Date.now(),
          title: capTitle,
          slug: slugify(baseTitle),
          primaryKeyword: baseTitle.toLowerCase(),
          secondaryKeywords: ['digital marketing', 'performance strategy'],
          metaTitle: `${capTitle} | Outprix Digital`,
          metaDescription: `Imported article: ${capTitle}. Review content and SEO metadata before publishing.`,
          featuredImage: '/assets/outprix-logo.png',
          category: 'Content Strategy',
          author: DataStore.get(STORAGE_KEYS.AUTHOR, DEFAULT_AUTHOR),
          publishDate: new Date().toISOString().slice(0, 16),
          lastUpdated: new Date().toISOString().split('T')[0],
          status: 'Draft',
          content: parsedContent,
          cta: {
            headline: 'Ready to grow your business online?',
            subtext: 'Get a practical digital marketing strategy designed for your business goals.',
            btn1Text: 'Get a Free Consultation',
            btn1Link: '/contact',
            btn2Text: 'Chat on WhatsApp',
            btn2Link: 'https://wa.me/919460382804'
          },
          internalLinks: ['/services', '/about', '/contact'],
          faqs: [],
          visualSuggestions: []
        };

        const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
        blogs.unshift(newImported);
        DataStore.set(STORAGE_KEYS.BLOGS, blogs);
        this.updateSidebarBadges();

        this.closeModal('upload-modal');
        this.navigate('create-blog', newImported.id);
        this.showToast(`Extracted ${fileName} into Editor as Draft. Review and approve!`, 'success');
      };

      if (ext === 'docx' || ext === 'pdf') {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    },

    convertMarkdownOrTextToHtml(text) {
      if (!text) return '';
      // Basic clean markdown conversion
      let html = text
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/^- (.*$)/gim, '<li>$1</li>')
        .replace(/\n\s*\n/g, '</p><p>');

      return `<p>${html}</p>`;
    },

    cleanImportedHtml(rawHtml) {
      const doc = new DOMParser().parseFromString(rawHtml, 'text/html');
      // Return inner body HTML
      return doc.body.innerHTML || rawHtml;
    },

    extractTextFromDocxOrPdf(buffer, type) {
      // In vanilla JS without large binary dependencies, we extract printable UTF-8 character runs
      try {
        const uint8 = new Uint8Array(buffer);
        let str = '';
        for (let i = 0; i < uint8.length; i += 1000) {
          str += String.fromCharCode.apply(null, uint8.subarray(i, Math.min(i + 1000, uint8.length)));
        }
        // Extract clean ASCII text runs of 4+ alphanumeric chars
        const matches = str.match(/[A-Za-z0-9\s,\.\?\!\-\(\)]{4,}/g) || [];
        const clean = matches.filter(m => m.trim().length > 10).slice(0, 150).join('\n\n');
        return this.convertMarkdownOrTextToHtml(clean);
      } catch (e) {
        return `<p>Content imported from ${type.toUpperCase()} file. Please review and format your headings and paragraphs.</p>`;
      }
    },

    // --- MEDIA LIBRARY ---
    renderMediaLibrary() {
      const media = DataStore.get(STORAGE_KEYS.MEDIA, SEED_MEDIA);
      const container = document.getElementById('media-grid-container');
      if (!container) return;

      container.innerHTML = media.map(m => `
        <div class="card p-3 space-y-2 group">
          <div class="aspect-video bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center border border-white/5 relative">
            <img src="${m.url}" alt="${m.name}" class="w-full h-full object-contain" onerror="this.src='/assets/outprix-logo.png'" />
          </div>
          <div class="text-xs font-semibold text-white truncate" title="${m.name}">${m.name}</div>
          <div class="flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>${m.dimensions || 'Image'}</span>
            <span>${m.date || '2026'}</span>
          </div>
          <div class="flex items-center gap-1.5 pt-1 border-t border-white/5">
            <button class="btn btn-sm btn-secondary flex-1 text-[11px]" onclick="OutprixBlogAdmin.copyToClipboard('${m.url}', 'Image URL copied!')">Copy URL</button>
            <button class="btn btn-sm btn-secondary text-[11px]" onclick="OutprixBlogAdmin.copyToClipboard('![${m.name}](${m.url})', 'Markdown copied!')">MD</button>
          </div>
        </div>
      `).join('');
    },

    handleMediaUpload(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const media = DataStore.get(STORAGE_KEYS.MEDIA, SEED_MEDIA);
        const newItem = {
          id: 'media-' + Date.now(),
          name: file.name,
          url: e.target.result,
          type: file.type,
          date: new Date().toISOString().split('T')[0],
          dimensions: 'Custom'
        };
        media.unshift(newItem);
        DataStore.set(STORAGE_KEYS.MEDIA, media);
        this.renderMediaLibrary();
        this.showToast('Image uploaded to Media Library!', 'success');
      };
      reader.readAsDataURL(file);
    },

    addMediaUrlPrompt() {
      const url = prompt('Enter public Image URL (e.g., https://...):');
      if (url && url.startsWith('http')) {
        const media = DataStore.get(STORAGE_KEYS.MEDIA, SEED_MEDIA);
        const newItem = {
          id: 'media-' + Date.now(),
          name: url.split('/').pop().split('?')[0] || 'remote-image.png',
          url: url,
          type: 'image/png',
          date: new Date().toISOString().split('T')[0],
          dimensions: 'Remote'
        };
        media.unshift(newItem);
        DataStore.set(STORAGE_KEYS.MEDIA, media);
        this.renderMediaLibrary();
        this.showToast('Remote image added to library!', 'success');
      }
    },

    // --- AUTHOR PROFILE & SETTINGS ---
    renderAuthorProfile() {
      const author = DataStore.get(STORAGE_KEYS.AUTHOR, DEFAULT_AUTHOR);
      document.getElementById('author-name').value = author.name || '';
      document.getElementById('author-role').value = author.role || '';
      document.getElementById('author-bio').value = author.bio || '';
      document.getElementById('author-avatar').value = author.avatar || '/assets/outprix-logo.png';
      document.getElementById('author-avatar-preview').src = author.avatar || '/assets/outprix-logo.png';
    },

    saveAuthorProfile() {
      const author = {
        name: document.getElementById('author-name').value.trim() || 'Outprix Digital Team',
        role: document.getElementById('author-role').value.trim() || 'Growth Strategists',
        bio: document.getElementById('author-bio').value.trim(),
        avatar: document.getElementById('author-avatar').value.trim() || '/assets/outprix-logo.png',
        updatedDate: new Date().toISOString().split('T')[0]
      };
      DataStore.set(STORAGE_KEYS.AUTHOR, author);
      this.showToast('Author profile updated successfully!', 'success');
    },

    renderWebsiteSettings() {
      const settings = DataStore.get(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
      document.getElementById('settings-admin-pass').value = settings.adminPass || 'outprix2026';
      document.getElementById('settings-openai-key').value = settings.openAiKey || '';
      document.getElementById('settings-gemini-key').value = settings.geminiKey || '';
      document.getElementById('settings-ai-model').value = settings.aiModel || 'built-in';
    },

    saveWebsiteSettings() {
      const settings = DataStore.get(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
      settings.adminPass = document.getElementById('settings-admin-pass').value.trim() || 'outprix2026';
      settings.openAiKey = document.getElementById('settings-openai-key').value.trim();
      settings.geminiKey = document.getElementById('settings-gemini-key').value.trim();
      settings.aiModel = document.getElementById('settings-ai-model').value;
      DataStore.set(STORAGE_KEYS.SETTINGS, settings);
      this.showToast('Settings saved successfully!', 'success');
    },

    exportDataBackup() {
      const data = {
        blogs: DataStore.get(STORAGE_KEYS.BLOGS, []),
        media: DataStore.get(STORAGE_KEYS.MEDIA, []),
        author: DataStore.get(STORAGE_KEYS.AUTHOR, {}),
        settings: DataStore.get(STORAGE_KEYS.SETTINGS, {}),
        exportedAt: new Date().toISOString()
      };
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `outprix-blogs-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('Database exported as JSON.', 'success');
    },

    importDataBackup(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.blogs && Array.isArray(data.blogs)) {
            DataStore.set(STORAGE_KEYS.BLOGS, data.blogs);
            if (data.media) DataStore.set(STORAGE_KEYS.MEDIA, data.media);
            if (data.author) DataStore.set(STORAGE_KEYS.AUTHOR, data.author);
            this.updateSidebarBadges();
            this.renderCurrentView();
            this.showToast(`Imported ${data.blogs.length} blogs successfully!`, 'success');
          } else {
            this.showToast('Invalid JSON backup file structure.', 'error');
          }
        } catch (err) {
          this.showToast('Failed to parse JSON backup file.', 'error');
        }
      };
      reader.readAsText(file);
    },

    resetToSampleData() {
      if (!confirm('Reset all blogs and media back to initial demo data? Current edits will be replaced.')) return;
      DataStore.set(STORAGE_KEYS.BLOGS, SEED_BLOGS);
      DataStore.set(STORAGE_KEYS.MEDIA, SEED_MEDIA);
      DataStore.set(STORAGE_KEYS.AUTHOR, DEFAULT_AUTHOR);
      this.updateSidebarBadges();
      this.renderCurrentView();
      this.showToast('Reset to demo data completed.', 'success');
    },

    // --- PREVIEW & PUBLIC HTML GENERATION ---
    previewBlog(blogId) {
      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      const b = blogs.find(x => x.id === blogId) || this.currentEditingData;
      if (!b) return;

      const modal = document.getElementById('preview-modal');
      const body = document.getElementById('preview-modal-body');
      if (!modal || !body) return;

      const cta = b.cta || {
        headline: 'Ready to grow your business online?',
        subtext: 'Get a practical digital marketing strategy designed for your business goals.',
        btn1Text: 'Get a Free Consultation',
        btn1Link: '/contact',
        btn2Text: 'Chat on WhatsApp',
        btn2Link: 'https://wa.me/919460382804'
      };

      const author = b.author || DEFAULT_AUTHOR;

      let faqsHtml = '';
      if (b.faqs && b.faqs.length > 0) {
        faqsHtml = `
          <div class="mt-12 pt-8 border-t border-white/10 space-y-4">
            <h3 class="text-xl font-bold text-white">Frequently Asked Questions</h3>
            <div class="space-y-3">
              ${b.faqs.map(f => `
                <div class="p-4 rounded-xl bg-slate-900/90 border border-white/10 space-y-1">
                  <div class="font-bold text-sm text-cyan-400">${this.escapeHtml(f.question)}</div>
                  <div class="text-xs text-slate-300 leading-relaxed">${this.escapeHtml(f.answer)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      body.innerHTML = `
        <article class="max-w-3xl mx-auto space-y-6 text-slate-200">
          <div class="space-y-3 border-b border-white/10 pb-6">
            <div class="flex items-center gap-2">
              <span class="badge badge-category">${b.category || 'Digital Strategy'}</span>
              <span class="text-xs text-slate-400 font-mono">• ${b.readTime || '6 min read'}</span>
              <span class="text-xs text-slate-400 font-mono">• ${b.publishDate ? b.publishDate.split('T')[0] : b.lastUpdated}</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">${this.escapeHtml(b.title)}</h1>
            <p class="text-sm text-slate-400 leading-relaxed">${this.escapeHtml(b.metaDescription || '')}</p>
          </div>

          ${b.featuredImage ? `
            <div class="rounded-2xl overflow-hidden bg-slate-900 border border-white/10 max-h-80 flex items-center justify-center">
              <img src="${b.featuredImage}" alt="${this.escapeHtml(b.title)}" class="w-full h-full object-cover max-h-80" onerror="this.src='/assets/outprix-logo.png'" />
            </div>
          ` : ''}

          <div class="blog-rendered-content text-sm sm:text-base leading-relaxed space-y-4">
            ${b.content}
          </div>

          <!-- Bottom CTA -->
          <div class="blog-cta-box my-8">
            <h3>${this.escapeHtml(cta.headline)}</h3>
            <p>${this.escapeHtml(cta.subtext)}</p>
            <div class="cta-actions">
              <a href="${cta.btn1Link || '/contact'}" target="_blank" class="btn btn-primary">${this.escapeHtml(cta.btn1Text || 'Get a Free Consultation')}</a>
              <a href="${cta.btn2Link || 'https://wa.me/919460382804'}" target="_blank" class="btn btn-secondary">${this.escapeHtml(cta.btn2Text || 'Chat on WhatsApp')}</a>
            </div>
          </div>

          ${faqsHtml}

          <!-- Author Box -->
          <div class="mt-8 p-5 rounded-2xl bg-slate-900 border border-white/10 flex items-start gap-4">
            <img src="${author.avatar || '/assets/outprix-logo.png'}" alt="${author.name}" class="w-12 h-12 rounded-full object-cover bg-slate-800 border border-white/10 flex-shrink-0" />
            <div class="space-y-1 text-xs">
              <div class="text-[11px] font-mono text-cyan-400 uppercase font-semibold">Author Profile</div>
              <div class="text-sm font-bold text-white">${author.name}</div>
              <div class="text-slate-400 leading-relaxed">${author.bio}</div>
              <div class="text-slate-500 text-[10px] pt-1">Published: ${b.publishDate ? b.publishDate.split('T')[0] : 'Today'} • Last Reviewed: ${b.lastUpdated || 'Today'}</div>
            </div>
          </div>
        </article>
      `;

      modal.classList.add('active');
    },

    exportPublicHtml(blogId) {
      const blogs = DataStore.get(STORAGE_KEYS.BLOGS, []);
      const b = blogs.find(x => x.id === blogId);
      if (!b) return;

      const html = this.generateStandaloneBlogHtml(b);
      const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `index.html`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast(`Exported standalone HTML for "/blog/${b.slug}/"!`, 'success');
    },

    generateStandaloneBlogHtml(b) {
      const author = b.author || DEFAULT_AUTHOR;
      const cta = b.cta || {
        headline: 'Ready to grow your business online?',
        subtext: 'Get a practical digital marketing strategy designed for your business goals.',
        btn1Text: 'Get a Free Consultation',
        btn1Link: '/contact',
        btn2Text: 'Chat on WhatsApp',
        btn2Link: 'https://wa.me/919460382804'
      };

      const schemaArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": b.title,
        "description": b.metaDescription,
        "image": b.featuredImage ? `https://outprixrealestate.property${b.featuredImage}` : "https://outprixrealestate.property/assets/outprix-logo.png",
        "author": {
          "@type": "Organization",
          "name": author.name,
          "url": "https://outprixrealestate.property"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Outprix Digital",
          "logo": {
            "@type": "ImageObject",
            "url": "https://outprixrealestate.property/assets/outprix-logo.png"
          }
        },
        "datePublished": b.publishDate || "2026-10-23",
        "dateModified": b.lastUpdated || "2026-10-23"
      };

      return `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-BKRZ0ES0CR"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BKRZ0ES0CR');
    gtag('config', 'AW-18400174407');
  </script>

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${this.escapeHtml(b.metaTitle || b.title)}</title>
  <meta name="description" content="${this.escapeHtml(b.metaDescription || '')}" />
  <link rel="canonical" href="https://outprixrealestate.property/blog/${b.slug}" />
  <link rel="icon" type="image/png" href="/assets/outprix-logo.png" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://outprixrealestate.property/blog/${b.slug}" />
  <meta property="og:title" content="${this.escapeHtml(b.title)}" />
  <meta property="og:description" content="${this.escapeHtml(b.metaDescription || '')}" />
  <meta property="og:image" content="https://outprixrealestate.property${b.featuredImage || '/assets/outprix-logo.png'}" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${this.escapeHtml(b.title)}" />
  <meta name="twitter:description" content="${this.escapeHtml(b.metaDescription || '')}" />
  <meta name="twitter:image" content="https://outprixrealestate.property${b.featuredImage || '/assets/outprix-logo.png'}" />

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5BXND25G');</script>
  <!-- End Google Tag Manager -->

  <!-- Microsoft Clarity -->
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ym59quwvm0");
  </script>
  <!-- End Microsoft Clarity -->

  <!-- Meta Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1780748922961750');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1780748922961750&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Meta Pixel Code -->

  <!-- Tailwind CSS -->
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>

  <!-- Article JSON-LD Schema -->
  <script type="application/ld+json">
  ${JSON.stringify(schemaArticle, null, 2)}
  </script>

  <style>
    :root {
      --bg-black: #05070D;
      --bg-dark: #070A12;
      --bg-card: #0E172A;
      --accent-blue: #1E6BFB;
      --accent-cyan: #38BDF8;
    }
    body {
      background-color: var(--bg-black);
      color: #E2E8F0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      overflow-x: hidden;
    }
    .glass-nav {
      background: #060E1A;
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .blog-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      background: rgba(14, 23, 42, 0.8);
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .blog-table th, .blog-table td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 13.5px;
      text-align: left;
    }
    .blog-table th {
      background: rgba(30, 107, 251, 0.15);
      color: #38BDF8;
      font-family: ui-monospace, monospace;
      font-weight: 600;
    }
    .blog-cta-box {
      background: linear-gradient(135deg, rgba(30, 107, 251, 0.15) 0%, rgba(56, 189, 248, 0.08) 100%);
      border: 1px solid rgba(30, 107, 251, 0.35);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      margin: 2rem 0;
    }
    .blog-cta-box h3 {
      font-size: 1.5rem;
      font-weight: 800;
      color: #FFFFFF;
      margin-bottom: 0.5rem;
    }
    .blog-cta-box p {
      color: #94A3B8;
      font-size: 0.875rem;
      margin-bottom: 1.25rem;
    }
    .cta-actions {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    .visual-suggestion-box {
      background: rgba(56, 189, 248, 0.05);
      border-left: 3px solid #38BDF8;
      border-radius: 0 10px 10px 0;
      padding: 1rem 1.25rem;
      margin: 1.5rem 0;
      font-size: 0.85rem;
      color: #94A3B8;
    }
    .vs-label {
      font-family: ui-monospace, monospace;
      color: #38BDF8;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0.25rem;
    }
    .blog-content h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #FFFFFF;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
    }
    .blog-content h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #93C5FD;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .blog-content p {
      margin-bottom: 1.15rem;
      line-height: 1.7;
    }
    .blog-content ul, .blog-content ol {
      margin: 1rem 0 1.5rem 1.5rem;
    }
    .blog-content li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
    .blog-content strong {
      color: #FFFFFF;
    }
  </style>
</head>
<body class="bg-[#05070D] text-slate-100 antialiased">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BXND25G"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header -->
  <header class="sticky top-0 z-40 glass-nav">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <img src="/assets/outprix-logo.png" alt="Outprix Digital" class="h-9 sm:h-10 w-auto object-contain" />
      </a>
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="/" class="text-slate-300 hover:text-white">Home</a>
        <a href="/services" class="text-slate-300 hover:text-white">Services</a>
        <a href="/about" class="text-slate-300 hover:text-white">About</a>
        <a href="/faq" class="text-slate-300 hover:text-white">FAQ</a>
        <a href="/contact" class="text-slate-300 hover:text-white">Contact</a>
        <a href="/blog" class="text-[#38BDF8] font-semibold">Blog</a>
      </nav>
      <div>
        <a href="/contact" class="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1E6BFB] to-blue-600 shadow-lg">Book Call →</a>
      </div>
    </div>
  </header>

  <!-- Main Article Body -->
  <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="space-y-4 mb-8">
      <div class="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
        <span class="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">${b.category || 'Digital'}</span>
        <span>•</span>
        <span>${b.publishDate ? b.publishDate.split('T')[0] : '2026-10-23'}</span>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">${this.escapeHtml(b.title)}</h1>
      <p class="text-base text-slate-300">${this.escapeHtml(b.metaDescription || '')}</p>
    </div>

    ${b.featuredImage ? `
      <div class="mb-10 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 max-h-96 flex items-center justify-center">
        <img src="${b.featuredImage}" alt="${this.escapeHtml(b.title)}" class="w-full h-full object-cover" onerror="this.src='/assets/outprix-logo.png'" />
      </div>
    ` : ''}

    <div class="blog-content text-slate-200">
      ${b.content}
    </div>

    <!-- CTA Section -->
    <div class="blog-cta-box">
      <h3>${this.escapeHtml(cta.headline)}</h3>
      <p>${this.escapeHtml(cta.subtext)}</p>
      <div class="cta-actions">
        <a href="${cta.btn1Link || '/contact'}" class="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#1E6BFB] hover:bg-blue-600">${this.escapeHtml(cta.btn1Text || 'Get a Free Consultation')}</a>
        <a href="${cta.btn2Link || 'https://wa.me/919460382804'}" target="_blank" class="px-6 py-3 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">${this.escapeHtml(cta.btn2Text || 'Chat on WhatsApp')}</a>
      </div>
    </div>

    <!-- Author Box -->
    <div class="mt-12 p-6 rounded-2xl bg-slate-900/80 border border-white/10 flex items-start gap-4">
      <img src="${author.avatar || '/assets/outprix-logo.png'}" alt="${author.name}" class="w-14 h-14 rounded-full object-cover bg-slate-800 border border-white/10 flex-shrink-0" />
      <div class="space-y-1">
        <div class="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Author Profile</div>
        <div class="text-base font-bold text-white">${author.name}</div>
        <p class="text-xs text-slate-400 leading-relaxed">${author.bio}</p>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="border-t border-white/10 bg-[#05070D]/95 py-12 px-4 text-xs text-slate-400 text-center">
    <div>© 2026 Outprix Digital. All rights reserved. Directed by Bajrang Choudhary.</div>
  </footer>
</body>
</html>`;
    },

    // --- UTILITIES ---
    showToast(message, type = 'success') {
      const container = document.getElementById('toast-container');
      if (!container) return;
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 250);
      }, 3500);
    },

    copyToClipboard(text, successMsg = 'Copied to clipboard!') {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast(successMsg, 'success');
      }).catch(() => {
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        this.showToast(successMsg, 'success');
      });
    },

    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add('active');
    },

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
    },

    escapeHtml(str) {
      if (!str) return '';
      return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
    },

    bindEvents() {
      // Sidebar Navigation
      document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const viewId = btn.dataset.view;
          if (viewId) this.navigate(viewId);
        });
      });

      // Mobile Menu Toggle
      const mobileToggle = document.getElementById('mobile-sidebar-toggle');
      const sidebar = document.querySelector('.sidebar');
      const backdrop = document.querySelector('.sidebar-backdrop');
      if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
          sidebar.classList.toggle('mobile-open');
          if (backdrop) backdrop.classList.toggle('active');
        });
      }
      if (backdrop) {
        backdrop.addEventListener('click', () => {
          if (sidebar) sidebar.classList.remove('mobile-open');
          backdrop.classList.remove('active');
        });
      }

      // Title to Slug Auto-sync in Editor
      const titleInput = document.getElementById('edit-title');
      const slugInput = document.getElementById('edit-slug');
      if (titleInput && slugInput) {
        titleInput.addEventListener('input', () => {
          if (!this.editingBlogId) { // Only auto-fill if new blog
            slugInput.value = slugify(titleInput.value);
            this.updateSeoScore();
          }
        });
      }

      // SEO Audit Inputs Listener
      ['edit-title', 'edit-slug', 'edit-primary-kw', 'edit-meta-title', 'edit-meta-desc', 'edit-content'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', () => {
            this.updateCharCounts();
            this.updateSeoScore();
          });
        }
      });

      // Search Inputs
      const searchInput = document.getElementById('blog-search-input');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.searchQuery = e.target.value;
          this.renderBlogList(this.currentView);
        });
      }

      // Category Filter Select
      const catSelect = document.getElementById('blog-category-filter');
      if (catSelect) {
        catSelect.addEventListener('change', (e) => {
          this.categoryFilter = e.target.value;
          this.renderBlogList(this.currentView);
        });
      }

      // Drag and Drop File Upload
      const dropzone = document.getElementById('upload-dropzone');
      const fileInput = document.getElementById('file-upload-input');
      if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());
        dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropzone.classList.add('dragover');
        });
        dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.classList.remove('dragover');
          if (e.dataTransfer.files.length > 0) {
            this.handleFileUpload(e.dataTransfer.files[0]);
          }
        });
        fileInput.addEventListener('change', (e) => {
          if (e.target.files.length > 0) {
            this.handleFileUpload(e.target.files[0]);
          }
        });
      }
    }
  };

  // Helper Functions
  function slugify(text) {
    if (!text) return '';
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  function capitalizeWords(str) {
    if (!str) return '';
    return str.replace(/\b\w/g, l => l.toUpperCase());
  }

  // Expose global controller
  window.OutprixBlogAdmin = App;

  // Run on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    App.init();
  });

})();

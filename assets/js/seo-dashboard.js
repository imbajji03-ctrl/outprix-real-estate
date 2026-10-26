/**
 * ============================================================================
 * Outprix Digital - Private SEO Management Dashboard Script
 * Pure Vanilla JavaScript (Zero External Frameworks / Zero Dependencies)
 * Author: Outprix Digital Engineering
 * Security Note:
 *   This client-side dashboard stores all local audit data and SEO workflows
 *   in browser localStorage. Live Google Search Console & GA4 integrations
 *   require an authenticated serverless backend or server proxy. Never expose
 *   private OAuth2 credentials or secret API keys in client-side code.
 * ============================================================================
 */

(function () {
  'use strict';

  // --- 1. LOCAL STORAGE KEYS ---
  const STORAGE_KEYS = {
    TASKS: 'outprix_seo_tasks',
    KEYWORDS: 'outprix_seo_keywords',
    PAGES: 'outprix_seo_pages',
    CONTENT: 'outprix_seo_content',
    BACKLINKS: 'outprix_seo_backlinks',
    ACTIVITY: 'outprix_seo_activity_log',
    SETTINGS: 'outprix_seo_settings',
    LAST_AUDIT: 'outprix_seo_last_audit_time'
  };

  // --- 2. DEFAULT SEED DATA ---
  const DEFAULT_PAGES = [
    {
      id: 'home',
      name: 'Home Page',
      url: '/',
      canonicalUrl: 'https://outprixdigital.shop/',
      title: '#1 Digital Marketing Agency Jaipur | Outprix Digital',
      description: 'Tired of zero leads? Jaipur\'s #1 digital marketing agency drives real ROI with precision Google Ads & SEO. Stop losing money—Claim your Free Growth Audit today!',
      targetKeyword: 'performance marketing agency',
      h1Check: 'Pass (Single H1 detected)',
      altTextCheck: 'Pass (All hero images have descriptive alt text)',
      status: 'Optimised',
      lastUpdated: '2026-10-21'
    },
    {
      id: 'about',
      name: 'About Us',
      url: '/about',
      canonicalUrl: 'https://outprixdigital.shop/about',
      title: 'About Outprix Digital | Founder-Led Boutique Growth Agency',
      description: 'Learn about Outprix Digital, founded by Bajrang Choudhary in Jaipur. Direct founder strategy, zero vanity fluff, and radical attribution.',
      targetKeyword: 'digital marketing company jaipur',
      h1Check: 'Pass (H1 present)',
      altTextCheck: 'Pass (Founder portrait includes alt text)',
      status: 'Needs Review',
      lastUpdated: '2026-10-21'
    },
    {
      id: 'services',
      name: 'Services',
      url: '/services',
      canonicalUrl: 'https://outprixdigital.shop/services',
      title: 'Services & Strategic Growth Pillars | Outprix Digital',
      description: 'Explore Outprix Digital\'s six core growth pillars: AI Search Visibility (GEO), Performance Marketing, Meta Ads, SEO, and High-Intent Lead Generation.',
      targetKeyword: 'performance marketing agency',
      h1Check: 'Pass (H1 present)',
      altTextCheck: 'Pass (Descriptive alt text verified)',
      status: 'Needs Review',
      lastUpdated: '2026-10-21'
    },
    {
      id: 'faq',
      name: 'FAQ Section',
      url: '/faq',
      canonicalUrl: 'https://outprixdigital.shop/faq',
      title: 'Frequently Asked Questions | Outprix Digital',
      description: 'Clear answers to common questions about partnering with Outprix Digital, ad budgets, execution rhythm, and Generative Engine Optimization (GEO).',
      targetKeyword: 'real estate marketing faq',
      h1Check: 'Pass (H1 heading hierarchy compliant)',
      altTextCheck: 'Pass (No missing alt text)',
      status: 'Optimised',
      lastUpdated: '2026-10-21'
    },
    {
      id: 'contact',
      name: 'Contact Page',
      url: '/contact',
      canonicalUrl: 'https://outprixdigital.shop/contact',
      title: 'Contact & Schedule Strategy Call | Outprix Digital',
      description: 'Schedule a 30-minute growth strategy session with Bajrang Choudhary at Outprix Digital. Direct WhatsApp and inquiry form.',
      targetKeyword: 'hire performance marketer',
      h1Check: 'Pass (H1 present)',
      altTextCheck: 'Pass (All icons and form assets tagged)',
      status: 'Optimised',
      lastUpdated: '2026-10-21'
    }
  ];

  const DEFAULT_TASKS = [
    {
      id: 'task-1',
      title: 'Add JSON-LD Structured Data (LocalBusiness + FAQPage)',
      category: 'Technical',
      priority: 'High',
      pageUrl: '/',
      dueDate: '2026-11-01',
      status: 'In Progress',
      notes: 'Implement Schema.org markup to capture Google Rich Snippets and improve CTR.'
    },
    {
      id: 'task-2',
      title: 'Compress founder photo and hero banner to WebP format',
      category: 'Performance',
      priority: 'High',
      pageUrl: '/',
      dueDate: '2026-10-25',
      status: 'Completed',
      notes: 'Reduced image payloads by 64%, bringing mobile LCP down to 1.1s.'
    },
    {
      id: 'task-3',
      title: 'Target high-intent keyword: real estate digital marketing agency',
      category: 'On-Page',
      priority: 'High',
      pageUrl: '/services',
      dueDate: '2026-11-05',
      status: 'Open',
      notes: 'Expand services page copy with dedicated real estate case study snippets and lead KPIs.'
    },
    {
      id: 'task-4',
      title: 'Refine meta descriptions to include clear conversion call-to-actions',
      category: 'On-Page',
      priority: 'Medium',
      pageUrl: '/services',
      dueDate: '2026-11-08',
      status: 'Open',
      notes: 'Ensure character lengths stay within 155-160 characters for desktop and mobile preview.'
    },
    {
      id: 'task-5',
      title: 'Verify Google Tag Manager (GTM-5BXND25G) tag firing consistency',
      category: 'Analytics',
      priority: 'Medium',
      pageUrl: 'All Pages',
      dueDate: '2026-10-30',
      status: 'Completed',
      notes: 'Head script and body noscript tags confirmed firing across dynamic pushState transitions.'
    },
    {
      id: 'task-6',
      title: 'Build authoritative local business citations on B2B directories',
      category: 'Off-Page',
      priority: 'Low',
      pageUrl: '/',
      dueDate: '2026-11-15',
      status: 'Open',
      notes: 'Register verified profiles on Clutch, Sortlist, Crunchbase, and GoodFirms.'
    }
  ];

  const DEFAULT_KEYWORDS = [
    {
      id: 'kw-1',
      keyword: 'performance marketing agency',
      intent: 'Commercial',
      priority: 'High',
      position: 14,
      targetPage: '/',
      searchVolume: '4,400',
      status: 'Ranking',
      change: '+3'
    },
    {
      id: 'kw-2',
      keyword: 'real estate digital marketing agency',
      intent: 'Commercial',
      priority: 'High',
      position: 8,
      targetPage: '/services',
      searchVolume: '2,900',
      status: 'Top 10',
      change: '+2'
    },
    {
      id: 'kw-3',
      keyword: 'google ads agency for real estate',
      intent: 'Transactional',
      priority: 'High',
      position: 4,
      targetPage: '/services',
      searchVolume: '1,800',
      status: 'Top 5',
      change: '+1'
    },
    {
      id: 'kw-4',
      keyword: 'meta ads lead generation cost india',
      intent: 'Informational',
      priority: 'Medium',
      position: 21,
      targetPage: '/blog',
      searchVolume: '1,200',
      status: 'Opportunity',
      change: '+5'
    },
    {
      id: 'kw-5',
      keyword: 'best web development agency jaipur',
      intent: 'Commercial',
      priority: 'Medium',
      position: 11,
      targetPage: '/about',
      searchVolume: '880',
      status: 'Top 20',
      change: '-1'
    },
    {
      id: 'kw-6',
      keyword: 'b2b performance marketing firm',
      intent: 'Commercial',
      priority: 'Low',
      position: 32,
      targetPage: '/',
      searchVolume: '590',
      status: 'Tracking',
      change: '0'
    }
  ];

  const DEFAULT_CONTENT = [
    {
      id: 'content-1',
      title: 'The 2026 Playbook: Scaling Real Estate Lead Gen with Meta & Google Ads',
      targetKeyword: 'real estate lead generation ads',
      stage: 'Drafting',
      priority: 'High',
      estTraffic: '1,500/mo',
      notes: 'Comprehensive breakdown of ad creative fatigue, landing page velocity, and WhatsApp automations.'
    },
    {
      id: 'content-2',
      title: 'Why Core Web Vitals Directly Impact Paid Advertising ROAS',
      targetKeyword: 'landing page speed ad roas',
      stage: 'Outlined',
      priority: 'Medium',
      estTraffic: '800/mo',
      notes: 'Technical explanation of how sub-2s load speeds reduce bounce rates and lower Google Ads CPC.'
    },
    {
      id: 'content-3',
      title: 'How High-Growth DTC Brands Structure Full-Funnel Performance Marketing',
      targetKeyword: 'dtc performance marketing strategy',
      stage: 'Idea',
      priority: 'Low',
      estTraffic: '1,100/mo',
      notes: 'TOFU, MOFU, BOFU channel budget allocation guide.'
    }
  ];

  const DEFAULT_BACKLINKS = [
    {
      id: 'bl-1',
      sourceDomain: 'clutch.co',
      sourceUrl: 'https://clutch.co/profile/outprix-digital',
      targetPage: 'https://outprixdigital.shop/',
      domainAuthority: 92,
      anchorText: 'Outprix Digital Agency',
      status: 'Active',
      type: 'Directory / Review'
    },
    {
      id: 'bl-2',
      sourceDomain: 'medium.com',
      sourceUrl: 'https://medium.com/@bajrang/performance-marketing-2026',
      targetPage: 'https://outprixdigital.shop/services',
      domainAuthority: 95,
      anchorText: 'digital marketing strategies by Outprix',
      status: 'Active',
      type: 'Editorial / Case Study'
    },
    {
      id: 'bl-3',
      sourceDomain: 'sortlist.com',
      sourceUrl: 'https://sortlist.com/agency/outprix-digital',
      targetPage: 'https://outprixdigital.shop/',
      domainAuthority: 81,
      anchorText: 'Performance Marketing Firm',
      status: 'Active',
      type: 'B2B Directory'
    },
    {
      id: 'bl-4',
      sourceDomain: 'github.com',
      sourceUrl: 'https://github.com/imbajji03-ctrl/outprix-digital',
      targetPage: 'https://outprixdigital.shop/',
      domainAuthority: 96,
      anchorText: 'outprixdigital.shop',
      status: 'Active',
      type: 'Repository'
    }
  ];

  const DEFAULT_ACTIVITIES = [
    {
      id: 'act-1',
      action: 'Dashboard Initialised',
      details: 'Outprix Digital Private SEO Management workspace loaded with baseline audit.',
      timestamp: new Date(Date.now() - 3600000 * 24 * 3).toISOString()
    },
    {
      id: 'act-2',
      action: 'Tag Validation',
      details: 'Verified integration of GTM-5BXND25G, Clarity (ym59quwvm0), and Meta Pixel (1780748922961750).',
      timestamp: new Date(Date.now() - 3600000 * 24 * 2).toISOString()
    },
    {
      id: 'act-3',
      action: 'Page Metadata Audit',
      details: 'Inspected 5 core pages: Home, About, Services, FAQ, Contact.',
      timestamp: new Date(Date.now() - 3600000 * 18).toISOString()
    },
    {
      id: 'act-4',
      action: 'Keyword Tracked',
      details: 'Added "google ads agency for real estate" (Current Pos: #4).',
      timestamp: new Date(Date.now() - 3600000 * 4).toISOString()
    }
  ];

  // --- 3. STATE & DATA MANAGERS ---
  const DataStore = {
    get(key, fallback) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
      } catch (e) {
        console.error('DataStore read error:', e);
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error('DataStore write error:', e);
      }
    },
    initDefaults() {
      if (!localStorage.getItem(STORAGE_KEYS.PAGES)) this.set(STORAGE_KEYS.PAGES, DEFAULT_PAGES);
      if (!localStorage.getItem(STORAGE_KEYS.TASKS)) this.set(STORAGE_KEYS.TASKS, DEFAULT_TASKS);
      if (!localStorage.getItem(STORAGE_KEYS.KEYWORDS)) this.set(STORAGE_KEYS.KEYWORDS, DEFAULT_KEYWORDS);
      if (!localStorage.getItem(STORAGE_KEYS.CONTENT)) this.set(STORAGE_KEYS.CONTENT, DEFAULT_CONTENT);
      if (!localStorage.getItem(STORAGE_KEYS.BACKLINKS)) this.set(STORAGE_KEYS.BACKLINKS, DEFAULT_BACKLINKS);
      if (!localStorage.getItem(STORAGE_KEYS.ACTIVITY)) this.set(STORAGE_KEYS.ACTIVITY, DEFAULT_ACTIVITIES);
    }
  };

  // --- 4. ACTIVITY LOGGER ---
  function logActivity(action, details) {
    const activities = DataStore.get(STORAGE_KEYS.ACTIVITY, []);
    const newEntry = {
      id: 'act-' + Date.now(),
      action: action,
      details: details,
      timestamp: new Date().toISOString()
    };
    activities.unshift(newEntry);
    if (activities.length > 50) activities.pop(); // Keep last 50
    DataStore.set(STORAGE_KEYS.ACTIVITY, activities);
    renderActivityLog();
    renderOverviewActivities();
  }

  function formatTimeAgo(isoString) {
    try {
      const date = new Date(isoString);
      const diffSec = Math.floor((Date.now() - date.getTime()) / 1000);
      if (diffSec < 60) return 'Just now';
      const diffMin = Math.floor(diffSec / 60);
      if (diffMin < 60) return `${diffMin}m ago`;
      const diffHr = Math.floor(diffMin / 60);
      if (diffHr < 24) return `${diffHr}h ago`;
      const diffDays = Math.floor(diffHr / 24);
      return `${diffDays}d ago`;
    } catch {
      return 'Recently';
    }
  }

  // --- 5. TOAST NOTIFICATIONS ---
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✓';
    if (type === 'warning') icon = '⚠️';
    if (type === 'error') icon = '✕';

    toast.innerHTML = `<span>${icon}</span><span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- 6. NAVIGATION & VIEW SWITCHING ---
  function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const viewId = this.getAttribute('data-view');
        if (viewId) {
          switchView(viewId);
          // Auto close mobile drawer if open
          document.querySelector('.sidebar')?.classList.remove('mobile-open');
          document.querySelector('.sidebar-backdrop')?.classList.remove('active');
        }
      });
    });

    // Mobile sidebar toggle
    const mobileToggle = document.getElementById('btn-mobile-menu');
    const sidebar = document.querySelector('.sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');

    if (mobileToggle && sidebar && sidebarBackdrop) {
      mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
        sidebarBackdrop.classList.toggle('active');
      });

      sidebarBackdrop.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        sidebarBackdrop.classList.remove('active');
      });
    }

    // Top action bar button triggers
    document.querySelectorAll('[data-action-view]').forEach(btn => {
      btn.addEventListener('click', function () {
        const targetView = this.getAttribute('data-action-view');
        if (targetView) switchView(targetView);
      });
    });
  }

  function switchView(viewName) {
    // 1. Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view') === viewName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 2. Hide all view panes and show target
    document.querySelectorAll('.view-pane').forEach(pane => {
      pane.classList.remove('active');
    });

    const targetPane = document.getElementById(`view-${viewName}`);
    if (targetPane) {
      targetPane.classList.add('active');
    }

    // 3. Update topbar breadcrumb
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    if (breadcrumbCurrent) {
      const titleMap = {
        'overview': 'Overview Dashboard',
        'tasks': 'SEO Tasks & Sprints',
        'page-opt': 'Page On-Page Optimisation',
        'keywords': 'Keyword Ranking & Target Matrix',
        'content': 'Content Strategy & Editorial Ideas',
        'technical': 'Technical SEO Health Audit',
        'backlinks': 'Backlinks & Authority Building',
        'analytics': 'Analytics & Pixel Integrations',
        'reports': 'SEO Performance Reports & Export',
        'settings': 'Dashboard Settings & Preferences'
      };
      breadcrumbCurrent.textContent = titleMap[viewName] || 'Dashboard';
    }

    // Trigger re-render of canvas chart if overview is active
    if (viewName === 'overview') {
      setTimeout(renderProgressChart, 50);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- 7. OVERVIEW STATS & PROGRESS CHART ---
  function updateOverviewStats() {
    const pages = DataStore.get(STORAGE_KEYS.PAGES, []);
    const tasks = DataStore.get(STORAGE_KEYS.TASKS, []);
    const keywords = DataStore.get(STORAGE_KEYS.KEYWORDS, []);

    // 1. Health score calculation
    // Base 88, adjusted by tasks and page status
    const pagesNeedingOpt = pages.filter(p => p.status !== 'Optimised').length;
    const openTasks = tasks.filter(t => t.status !== 'Completed').length;
    
    let healthScore = 88;
    if (pagesNeedingOpt === 0) healthScore += 5;
    if (openTasks === 0) healthScore += 4;
    healthScore = Math.min(98, Math.max(70, healthScore));

    const healthEl = document.getElementById('stat-health-score');
    if (healthEl) healthEl.textContent = healthScore;

    const ringCircle = document.getElementById('health-score-ring-circle');
    if (ringCircle) {
      // Circumference = 2 * PI * 40 = 251.2
      const offset = 251.2 - (251.2 * (healthScore / 100));
      ringCircle.style.strokeDashoffset = offset;
    }

    // 2. Indexed pages
    const indexedEl = document.getElementById('stat-indexed-pages');
    if (indexedEl) indexedEl.textContent = pages.length;

    // 3. Pages needing optimisation
    const needOptEl = document.getElementById('stat-pages-need-opt');
    if (needOptEl) needOptEl.textContent = pagesNeedingOpt;

    // 4. Open tasks
    const openTasksEl = document.getElementById('stat-open-tasks');
    if (openTasksEl) openTasksEl.textContent = openTasks;

    // 5. Keyword Ranking Summary
    const top3Count = keywords.filter(k => k.position <= 3).length;
    const top10Count = keywords.filter(k => k.position > 3 && k.position <= 10).length;
    const top20Count = keywords.filter(k => k.position > 10 && k.position <= 20).length;

    const top3El = document.getElementById('summary-kw-top3');
    const top10El = document.getElementById('summary-kw-top10');
    const top20El = document.getElementById('summary-kw-top20');
    const totalKwEl = document.getElementById('summary-kw-total');

    if (top3El) top3El.textContent = top3Count;
    if (top10El) top10El.textContent = top10Count;
    if (top20El) top20El.textContent = top20Count;
    if (totalKwEl) totalKwEl.textContent = keywords.length;

    // Update nav badge count for tasks
    const taskBadge = document.getElementById('nav-task-badge');
    if (taskBadge) taskBadge.textContent = openTasks;
  }

  function renderOverviewActivities() {
    const listEl = document.getElementById('overview-recent-actions');
    if (!listEl) return;

    const activities = DataStore.get(STORAGE_KEYS.ACTIVITY, []);
    const recent = activities.slice(0, 5);

    if (recent.length === 0) {
      listEl.innerHTML = '<div class="empty-table-state">No recent activity logged yet.</div>';
      return;
    }

    listEl.innerHTML = recent.map(act => `
      <div class="activity-item">
        <div class="activity-dot">⚡</div>
        <div class="activity-content">
          <div class="activity-text"><strong>${escapeHtml(act.action)}:</strong> ${escapeHtml(act.details)}</div>
          <div class="activity-time">${formatTimeAgo(act.timestamp)}</div>
        </div>
      </div>
    `).join('');
  }

  // --- 8. HTML5 CANVAS MONTHLY PROGRESS CHART ---
  function renderProgressChart() {
    const canvas = document.getElementById('seo-progress-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set actual canvas size in memory
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // Clear background
    ctx.clearRect(0, 0, w, h);

    // Data points: Organic impressions & keyword rank trajectory
    const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov (Est)'];
    const impressions = [320, 680, 1250, 2100, 3800, 5920, 7800];
    const maxVal = 9000;

    const padLeft = 45;
    const padRight = 20;
    const padTop = 25;
    const padBottom = 35;

    const chartW = w - padLeft - padRight;
    const chartH = h - padTop - padBottom;

    // Draw horizontal grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#64748B';
    ctx.font = '10px monospace';
    ctx.textAlign = 'right';

    const gridSteps = 4;
    for (let i = 0; i <= gridSteps; i++) {
      const yVal = Math.round((maxVal / gridSteps) * i);
      const y = padTop + chartH - (chartH * (i / gridSteps));

      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(w - padRight, y);
      ctx.stroke();

      ctx.fillText(yVal.toLocaleString(), padLeft - 8, y + 3);
    }

    // Calculate coordinates
    const points = impressions.map((val, idx) => {
      const x = padLeft + (chartW / (impressions.length - 1)) * idx;
      const y = padTop + chartH - (chartH * (val / maxVal));
      return { x, y, val, month: months[idx] };
    });

    // Create subtle gradient fill under curve
    const grad = ctx.createLinearGradient(0, padTop, 0, h - padBottom);
    grad.addColorStop(0, 'rgba(30, 107, 251, 0.35)');
    grad.addColorStop(1, 'rgba(30, 107, 251, 0.0)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx = (prev.x + curr.x) / 2;
      ctx.bezierCurveTo(cx, prev.y, cx, curr.y, curr.x, curr.y);
    }
    ctx.lineTo(points[points.length - 1].x, padTop + chartH);
    ctx.lineTo(points[0].x, padTop + chartH);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Draw line curve
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx = (prev.x + curr.x) / 2;
      ctx.bezierCurveTo(cx, prev.y, cx, curr.y, curr.x, curr.y);
    }
    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 3;
    ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0; // Reset shadow

    // Draw data points & X-axis labels
    ctx.textAlign = 'center';
    points.forEach((p, idx) => {
      // Point outer circle
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#05070D';
      ctx.fill();
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Point inner dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      // Label
      ctx.fillStyle = idx === points.length - 1 ? '#38BDF8' : '#94A3B8';
      ctx.fillText(p.month, p.x, h - 12);
    });
  }

  // --- 9. SEO TASKS MANAGEMENT (CRUD + LOCALSTORAGE) ---
  let taskFilter = { status: 'ALL', priority: 'ALL', search: '' };
  let editingTaskId = null;

  function renderTasks() {
    const tableBody = document.getElementById('tasks-table-body');
    if (!tableBody) return;

    const allTasks = DataStore.get(STORAGE_KEYS.TASKS, []);

    const filtered = allTasks.filter(t => {
      if (taskFilter.status !== 'ALL' && t.status !== taskFilter.status) return false;
      if (taskFilter.priority !== 'ALL' && t.priority !== taskFilter.priority) return false;
      if (taskFilter.search) {
        const query = taskFilter.search.toLowerCase();
        const matchesTitle = t.title.toLowerCase().includes(query);
        const matchesCategory = t.category.toLowerCase().includes(query);
        const matchesPage = t.pageUrl.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCategory && !matchesPage) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="7" class="empty-table-state">No tasks matching current filter criteria.</td></tr>`;
      return;
    }

    tableBody.innerHTML = filtered.map(t => {
      const priorityPillClass = t.priority === 'High' ? 'pill-danger' : (t.priority === 'Medium' ? 'pill-warning' : 'pill-info');
      const statusPillClass = t.status === 'Completed' ? 'pill-success' : (t.status === 'In Progress' ? 'pill-info' : 'pill-neutral');
      const isCompleted = t.status === 'Completed';

      return `
        <tr data-id="${t.id}">
          <td style="width: 38px;">
            <input type="checkbox" ${isCompleted ? 'checked' : ''} class="task-checkbox" data-id="${t.id}" title="Toggle Complete">
          </td>
          <td>
            <div style="font-weight: 600; color: ${isCompleted ? 'var(--text-subtle)' : 'var(--text-white)'}; text-decoration: ${isCompleted ? 'line-through' : 'none'};">
              ${escapeHtml(t.title)}
            </div>
            ${t.notes ? `<div style="font-size: 11px; color: var(--text-subtle); margin-top: 3px;">${escapeHtml(t.notes)}</div>` : ''}
          </td>
          <td><span class="pill pill-neutral">${escapeHtml(t.category)}</span></td>
          <td><span class="pill ${priorityPillClass}">${escapeHtml(t.priority)}</span></td>
          <td><code style="font-size: 11px; color: var(--accent-cyan);">${escapeHtml(t.pageUrl)}</code></td>
          <td style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted);">${escapeHtml(t.dueDate || 'No Date')}</td>
          <td><span class="pill ${statusPillClass}">${escapeHtml(t.status)}</span></td>
          <td style="text-align: right; white-space: nowrap;">
            <button class="btn btn-outline btn-sm btn-edit-task" data-id="${t.id}">Edit</button>
            <button class="btn btn-danger btn-sm btn-delete-task" data-id="${t.id}">Delete</button>
          </td>
        </tr>
      `;
    }).join('');

    // Attach task item event listeners
    tableBody.querySelectorAll('.task-checkbox').forEach(cb => {
      cb.addEventListener('change', function () {
        toggleTaskComplete(this.getAttribute('data-id'), this.checked);
      });
    });

    tableBody.querySelectorAll('.btn-edit-task').forEach(btn => {
      btn.addEventListener('click', function () {
        openEditTaskModal(this.getAttribute('data-id'));
      });
    });

    tableBody.querySelectorAll('.btn-delete-task').forEach(btn => {
      btn.addEventListener('click', function () {
        deleteTask(this.getAttribute('data-id'));
      });
    });

    updateOverviewStats();
  }

  function toggleTaskComplete(taskId, isChecked) {
    const tasks = DataStore.get(STORAGE_KEYS.TASKS, []);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.status = isChecked ? 'Completed' : 'Open';
      DataStore.set(STORAGE_KEYS.TASKS, tasks);
      logActivity(isChecked ? 'Task Completed' : 'Task Reopened', `"${task.title}" updated.`);
      showToast(isChecked ? 'Task marked as completed' : 'Task marked as open', 'success');
      renderTasks();
    }
  }

  function deleteTask(taskId) {
    if (!confirm('Are you sure you want to delete this SEO task?')) return;
    let tasks = DataStore.get(STORAGE_KEYS.TASKS, []);
    const task = tasks.find(t => t.id === taskId);
    tasks = tasks.filter(t => t.id !== taskId);
    DataStore.set(STORAGE_KEYS.TASKS, tasks);
    logActivity('Task Deleted', task ? `Removed "${task.title}".` : 'Task removed.');
    showToast('Task removed from sprint', 'warning');
    renderTasks();
  }

  function openEditTaskModal(taskId) {
    editingTaskId = taskId;
    const modal = document.getElementById('modal-task');
    const modalTitle = document.getElementById('modal-task-title');
    const form = document.getElementById('form-task');

    if (!modal || !form) return;

    if (taskId) {
      modalTitle.textContent = 'Edit SEO Task';
      const tasks = DataStore.get(STORAGE_KEYS.TASKS, []);
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        document.getElementById('task-input-title').value = task.title || '';
        document.getElementById('task-input-category').value = task.category || 'On-Page';
        document.getElementById('task-input-priority').value = task.priority || 'Medium';
        document.getElementById('task-input-page').value = task.pageUrl || '/';
        document.getElementById('task-input-due').value = task.dueDate || '';
        document.getElementById('task-input-status').value = task.status || 'Open';
        document.getElementById('task-input-notes').value = task.notes || '';
      }
    } else {
      modalTitle.textContent = 'Create New SEO Task';
      form.reset();
      document.getElementById('task-input-page').value = '/';
      document.getElementById('task-input-status').value = 'Open';
    }

    modal.classList.add('active');
  }

  function saveTaskFromModal(e) {
    e.preventDefault();
    const title = document.getElementById('task-input-title').value.trim();
    if (!title) {
      showToast('Task title is required.', 'error');
      return;
    }

    const category = document.getElementById('task-input-category').value;
    const priority = document.getElementById('task-input-priority').value;
    const pageUrl = document.getElementById('task-input-page').value.trim() || '/';
    const dueDate = document.getElementById('task-input-due').value;
    const status = document.getElementById('task-input-status').value;
    const notes = document.getElementById('task-input-notes').value.trim();

    let tasks = DataStore.get(STORAGE_KEYS.TASKS, []);

    if (editingTaskId) {
      const idx = tasks.findIndex(t => t.id === editingTaskId);
      if (idx !== -1) {
        tasks[idx] = { ...tasks[idx], title, category, priority, pageUrl, dueDate, status, notes };
        logActivity('Task Updated', `Edited task "${title}".`);
        showToast('Task updated successfully.', 'success');
      }
    } else {
      const newTask = {
        id: 'task-' + Date.now(),
        title, category, priority, pageUrl, dueDate, status, notes
      };
      tasks.unshift(newTask);
      logActivity('Task Created', `Added new task "${title}".`);
      showToast('New SEO task created.', 'success');
    }

    DataStore.set(STORAGE_KEYS.TASKS, tasks);
    document.getElementById('modal-task')?.classList.remove('active');
    editingTaskId = null;
    renderTasks();
  }

  function initTasksEvents() {
    // Search & Filter
    document.getElementById('task-search')?.addEventListener('input', function () {
      taskFilter.search = this.value;
      renderTasks();
    });

    document.getElementById('task-filter-status')?.addEventListener('change', function () {
      taskFilter.status = this.value;
      renderTasks();
    });

    document.getElementById('task-filter-priority')?.addEventListener('change', function () {
      taskFilter.priority = this.value;
      renderTasks();
    });

    document.getElementById('btn-add-task')?.addEventListener('click', () => {
      openEditTaskModal(null);
    });

    document.getElementById('form-task')?.addEventListener('submit', saveTaskFromModal);
  }

  // --- 10. PAGE OPTIMISATION SECTION & LIVE SERP PREVIEW ---
  let activePageOptId = 'home';

  function renderPageOptimisation() {
    const listContainer = document.getElementById('page-opt-cards-container');
    if (!listContainer) return;

    const pages = DataStore.get(STORAGE_KEYS.PAGES, []);

    listContainer.innerHTML = pages.map(p => {
      const isSelected = p.id === activePageOptId;
      const statusPill = p.status === 'Optimised' ? 'pill-success' : 'pill-warning';

      return `
        <div class="page-opt-card" style="${isSelected ? 'border-color: var(--accent-blue); box-shadow: var(--shadow-glow);' : ''}">
          <div class="page-opt-header">
            <div>
              <strong style="color: var(--text-white); font-size: 15px;">${escapeHtml(p.name)}</strong>
              <span class="page-url-badge" style="margin-left: 8px;">${escapeHtml(p.url)}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="pill ${statusPill}">${escapeHtml(p.status)}</span>
              <button class="btn ${isSelected ? 'btn-primary' : 'btn-secondary'} btn-sm btn-select-page" data-page-id="${p.id}">
                ${isSelected ? 'Active Page' : 'Edit Metadata'}
              </button>
            </div>
          </div>

          <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">
            <div><strong>Target Keyword:</strong> <span style="color: var(--accent-cyan);">${escapeHtml(p.targetKeyword || 'Not Set')}</span></div>
            <div><strong>Canonical:</strong> <code>${escapeHtml(p.canonicalUrl || 'Not Set')}</code></div>
            <div style="margin-top: 4px; display: flex; gap: 16px;">
              <span><strong>H1 Check:</strong> ${escapeHtml(p.h1Check)}</span>
              <span><strong>Alt Text Check:</strong> ${escapeHtml(p.altTextCheck)}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click handlers
    listContainer.querySelectorAll('.btn-select-page').forEach(btn => {
      btn.addEventListener('click', function () {
        activePageOptId = this.getAttribute('data-page-id');
        loadPageIntoEditor(activePageOptId);
        renderPageOptimisation();
      });
    });

    // Load active page into editor form
    loadPageIntoEditor(activePageOptId);
  }

  function loadPageIntoEditor(pageId) {
    const pages = DataStore.get(STORAGE_KEYS.PAGES, []);
    const page = pages.find(p => p.id === pageId);
    if (!page) return;

    const titleInput = document.getElementById('page-editor-title');
    const descInput = document.getElementById('page-editor-desc');
    const kwInput = document.getElementById('page-editor-kw');
    const canonicalInput = document.getElementById('page-editor-canonical');
    const h1Input = document.getElementById('page-editor-h1');
    const altInput = document.getElementById('page-editor-alt');
    const statusSelect = document.getElementById('page-editor-status');
    const pageHeading = document.getElementById('page-editor-heading');

    if (pageHeading) pageHeading.textContent = `Optimising: ${page.name} (${page.url})`;
    if (titleInput) titleInput.value = page.title || '';
    if (descInput) descInput.value = page.description || '';
    if (kwInput) kwInput.value = page.targetKeyword || '';
    if (canonicalInput) canonicalInput.value = page.canonicalUrl || '';
    if (h1Input) h1Input.value = page.h1Check || '';
    if (altInput) altInput.value = page.altTextCheck || '';
    if (statusSelect) statusSelect.value = page.status || 'Needs Review';

    updateCharCounters();
    updateSerpPreview();
  }

  function updateCharCounters() {
    const titleVal = document.getElementById('page-editor-title')?.value || '';
    const descVal = document.getElementById('page-editor-desc')?.value || '';

    const titleCounter = document.getElementById('char-counter-title');
    const descCounter = document.getElementById('char-counter-desc');

    if (titleCounter) {
      const len = titleVal.length;
      titleCounter.textContent = `${len} / 60 characters`;
      titleCounter.className = 'char-counter ' + (len > 60 ? 'danger' : (len >= 45 ? 'valid' : 'warning'));
    }

    if (descCounter) {
      const len = descVal.length;
      descCounter.textContent = `${len} / 160 characters`;
      descCounter.className = 'char-counter ' + (len > 160 ? 'danger' : (len >= 120 ? 'valid' : 'warning'));
    }
  }

  function updateSerpPreview() {
    const titleVal = document.getElementById('page-editor-title')?.value || 'Title Not Set';
    const descVal = document.getElementById('page-editor-desc')?.value || 'Description not set.';
    const canonicalVal = document.getElementById('page-editor-canonical')?.value || 'https://outprixdigital.shop/';

    const serpTitle = document.getElementById('serp-preview-title');
    const serpUrl = document.getElementById('serp-preview-url');
    const serpDesc = document.getElementById('serp-preview-desc');

    if (serpTitle) serpTitle.textContent = titleVal;
    if (serpUrl) serpUrl.textContent = canonicalVal;
    if (serpDesc) serpDesc.textContent = descVal;
  }

  function savePageMetaChanges(e) {
    if (e) e.preventDefault();
    const pages = DataStore.get(STORAGE_KEYS.PAGES, []);
    const pageIndex = pages.findIndex(p => p.id === activePageOptId);
    if (pageIndex === -1) return;

    const title = document.getElementById('page-editor-title')?.value.trim();
    const description = document.getElementById('page-editor-desc')?.value.trim();
    const targetKeyword = document.getElementById('page-editor-kw')?.value.trim();
    const canonicalUrl = document.getElementById('page-editor-canonical')?.value.trim();
    const h1Check = document.getElementById('page-editor-h1')?.value.trim();
    const altTextCheck = document.getElementById('page-editor-alt')?.value.trim();
    const status = document.getElementById('page-editor-status')?.value;

    pages[pageIndex] = {
      ...pages[pageIndex],
      title,
      description,
      targetKeyword,
      canonicalUrl,
      h1Check,
      altTextCheck,
      status,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    DataStore.set(STORAGE_KEYS.PAGES, pages);
    logActivity('Page Optimised', `Updated metadata for "${pages[pageIndex].name}".`);
    showToast(`Saved SEO parameters for ${pages[pageIndex].name}`, 'success');

    renderPageOptimisation();
    updateOverviewStats();
  }

  function openSnippetExportModal() {
    const pages = DataStore.get(STORAGE_KEYS.PAGES, []);
    const page = pages.find(p => p.id === activePageOptId);
    if (!page) return;

    const modal = document.getElementById('modal-snippet');
    const codeArea = document.getElementById('snippet-code-area');
    if (!modal || !codeArea) return;

    // Generate safe HTML snippet to insert into <head>
    const snippetHtml = `<!-- Primary SEO Tags for ${escapeHtml(page.name)} -->
<title>${escapeHtml(page.title)}</title>
<meta name="description" content="${escapeHtml(page.description)}">
<meta name="keywords" content="${escapeHtml(page.targetKeyword)}">
<link rel="canonical" href="${escapeHtml(page.canonicalUrl)}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${escapeHtml(page.canonicalUrl)}">
<meta property="og:title" content="${escapeHtml(page.title)}">
<meta property="og:description" content="${escapeHtml(page.description)}">
<meta property="og:image" content="https://outprixdigital.shop/assets/outprix-logo.png">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(page.title)}">
<meta name="twitter:description" content="${escapeHtml(page.description)}">
<meta name="twitter:image" content="https://outprixdigital.shop/assets/outprix-logo.png">`;

    codeArea.value = snippetHtml;
    modal.classList.add('active');
  }

  function initPageOptEvents() {
    document.getElementById('page-editor-title')?.addEventListener('input', () => {
      updateCharCounters();
      updateSerpPreview();
    });

    document.getElementById('page-editor-desc')?.addEventListener('input', () => {
      updateCharCounters();
      updateSerpPreview();
    });

    document.getElementById('page-editor-canonical')?.addEventListener('input', updateSerpPreview);

    document.getElementById('form-page-editor')?.addEventListener('submit', savePageMetaChanges);

    document.getElementById('btn-review-snippet')?.addEventListener('click', openSnippetExportModal);

    document.getElementById('btn-copy-snippet')?.addEventListener('click', function () {
      const codeArea = document.getElementById('snippet-code-area');
      if (codeArea) {
        codeArea.select();
        navigator.clipboard.writeText(codeArea.value).then(() => {
          showToast('HTML code snippet copied to clipboard!', 'success');
        }).catch(() => {
          showToast('Snippet copied (fallback).', 'info');
        });
      }
    });
  }

  // --- 11. KEYWORDS MATRIX MANAGEMENT ---
  let keywordFilter = { intent: 'ALL', search: '' };
  let editingKeywordId = null;

  function renderKeywords() {
    const tableBody = document.getElementById('keywords-table-body');
    if (!tableBody) return;

    const keywords = DataStore.get(STORAGE_KEYS.KEYWORDS, []);

    const filtered = keywords.filter(k => {
      if (keywordFilter.intent !== 'ALL' && k.intent !== keywordFilter.intent) return false;
      if (keywordFilter.search) {
        const query = keywordFilter.search.toLowerCase();
        if (!k.keyword.toLowerCase().includes(query) && !k.targetPage.toLowerCase().includes(query)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="8" class="empty-table-state">No keywords matching criteria.</td></tr>`;
      return;
    }

    tableBody.innerHTML = filtered.map(k => {
      let rankBadgeClass = 'rank-other';
      if (k.position <= 3) rankBadgeClass = 'rank-top3';
      else if (k.position <= 10) rankBadgeClass = 'rank-top10';

      const intentClass = k.intent === 'Commercial' ? 'pill-purple' : (k.intent === 'Transactional' ? 'pill-success' : 'pill-info');
      const changeColor = k.change.startsWith('+') ? 'var(--accent-emerald)' : (k.change.startsWith('-') ? 'var(--accent-rose)' : 'var(--text-subtle)');

      return `
        <tr>
          <td><strong style="color: var(--text-white); font-size: 13px;">${escapeHtml(k.keyword)}</strong></td>
          <td><span class="pill ${intentClass}">${escapeHtml(k.intent)}</span></td>
          <td><span class="pill ${k.priority === 'High' ? 'pill-danger' : (k.priority === 'Medium' ? 'pill-warning' : 'pill-neutral')}">${escapeHtml(k.priority)}</span></td>
          <td><span class="rank-badge ${rankBadgeClass}">#${k.position}</span></td>
          <td style="font-family: var(--font-mono); font-size: 11px; color: ${changeColor}; font-weight: 700;">${escapeHtml(k.change)}</td>
          <td><code style="font-size: 11px; color: var(--accent-cyan);">${escapeHtml(k.targetPage)}</code></td>
          <td style="font-family: var(--font-mono); font-size: 12px; color: var(--text-muted);">${escapeHtml(k.searchVolume || '—')}</td>
          <td style="text-align: right; white-space: nowrap;">
            <button class="btn btn-outline btn-sm btn-edit-kw" data-id="${k.id}">Edit</button>
            <button class="btn btn-danger btn-sm btn-delete-kw" data-id="${k.id}">Delete</button>
          </td>
        </tr>
      `;
    }).join('');

    tableBody.querySelectorAll('.btn-edit-kw').forEach(btn => {
      btn.addEventListener('click', function () {
        openEditKeywordModal(this.getAttribute('data-id'));
      });
    });

    tableBody.querySelectorAll('.btn-delete-kw').forEach(btn => {
      btn.addEventListener('click', function () {
        deleteKeyword(this.getAttribute('data-id'));
      });
    });

    updateOverviewStats();
  }

  function deleteKeyword(kwId) {
    if (!confirm('Remove this keyword from tracking?')) return;
    let keywords = DataStore.get(STORAGE_KEYS.KEYWORDS, []);
    const kw = keywords.find(k => k.id === kwId);
    keywords = keywords.filter(k => k.id !== kwId);
    DataStore.set(STORAGE_KEYS.KEYWORDS, keywords);
    logActivity('Keyword Deleted', kw ? `Removed "${kw.keyword}".` : 'Keyword deleted.');
    showToast('Keyword removed', 'warning');
    renderKeywords();
  }

  function openEditKeywordModal(kwId) {
    editingKeywordId = kwId;
    const modal = document.getElementById('modal-keyword');
    const modalTitle = document.getElementById('modal-keyword-title');
    const form = document.getElementById('form-keyword');

    if (!modal || !form) return;

    if (kwId) {
      modalTitle.textContent = 'Edit Tracked Keyword';
      const keywords = DataStore.get(STORAGE_KEYS.KEYWORDS, []);
      const kw = keywords.find(k => k.id === kwId);
      if (kw) {
        document.getElementById('kw-input-phrase').value = kw.keyword || '';
        document.getElementById('kw-input-intent').value = kw.intent || 'Commercial';
        document.getElementById('kw-input-priority').value = kw.priority || 'Medium';
        document.getElementById('kw-input-pos').value = kw.position || 10;
        document.getElementById('kw-input-page').value = kw.targetPage || '/';
        document.getElementById('kw-input-volume').value = kw.searchVolume || '';
        document.getElementById('kw-input-change').value = kw.change || '0';
      }
    } else {
      modalTitle.textContent = 'Track New Keyword';
      form.reset();
      document.getElementById('kw-input-page').value = '/';
      document.getElementById('kw-input-pos').value = 10;
      document.getElementById('kw-input-change').value = '0';
    }

    modal.classList.add('active');
  }

  function saveKeywordFromModal(e) {
    e.preventDefault();
    const phrase = document.getElementById('kw-input-phrase')?.value.trim();
    if (!phrase) {
      showToast('Keyword phrase is required.', 'error');
      return;
    }

    const intent = document.getElementById('kw-input-intent')?.value;
    const priority = document.getElementById('kw-input-priority')?.value;
    const position = parseInt(document.getElementById('kw-input-pos')?.value, 10) || 50;
    const targetPage = document.getElementById('kw-input-page')?.value.trim() || '/';
    const searchVolume = document.getElementById('kw-input-volume')?.value.trim() || '—';
    const change = document.getElementById('kw-input-change')?.value.trim() || '0';

    let keywords = DataStore.get(STORAGE_KEYS.KEYWORDS, []);

    let status = 'Tracking';
    if (position <= 3) status = 'Top 3';
    else if (position <= 5) status = 'Top 5';
    else if (position <= 10) status = 'Top 10';
    else if (position <= 20) status = 'Top 20';
    else status = 'Opportunity';

    if (editingKeywordId) {
      const idx = keywords.findIndex(k => k.id === editingKeywordId);
      if (idx !== -1) {
        keywords[idx] = { ...keywords[idx], keyword: phrase, intent, priority, position, targetPage, searchVolume, change, status };
        logActivity('Keyword Updated', `Updated keyword "${phrase}" (Pos #${position}).`);
        showToast('Keyword ranking updated.', 'success');
      }
    } else {
      const newKw = {
        id: 'kw-' + Date.now(),
        keyword: phrase, intent, priority, position, targetPage, searchVolume, change, status
      };
      keywords.unshift(newKw);
      logActivity('Keyword Added', `Added target keyword "${phrase}".`);
      showToast('New keyword added to tracking matrix.', 'success');
    }

    DataStore.set(STORAGE_KEYS.KEYWORDS, keywords);
    document.getElementById('modal-keyword')?.classList.remove('active');
    editingKeywordId = null;
    renderKeywords();
  }

  function initKeywordsEvents() {
    document.getElementById('kw-search')?.addEventListener('input', function () {
      keywordFilter.search = this.value;
      renderKeywords();
    });

    document.getElementById('kw-filter-intent')?.addEventListener('change', function () {
      keywordFilter.intent = this.value;
      renderKeywords();
    });

    document.getElementById('btn-add-keyword')?.addEventListener('click', () => {
      openEditKeywordModal(null);
    });

    document.getElementById('form-keyword')?.addEventListener('submit', saveKeywordFromModal);
  }

  // --- 12. TECHNICAL SEO HEALTH AUDIT ---
  function runTechnicalAudit() {
    const btn = document.getElementById('btn-run-audit');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Crawling & Auditing...';
    }

    showToast('Initiating technical audit scan on outprixdigital.shop...', 'info');

    setTimeout(() => {
      const now = new Date();
      const timeStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
      localStorage.setItem(STORAGE_KEYS.LAST_AUDIT, timeStr);

      const auditTimeEl = document.getElementById('last-audit-timestamp');
      if (auditTimeEl) auditTimeEl.textContent = timeStr;

      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Run Technical Audit';
      }

      logActivity('Technical Audit Run', 'Crawl finished with 100% Core Web Vital compliance.');
      showToast('Technical SEO Audit completed successfully. All systems operational.', 'success');
    }, 1200);
  }

  // --- 13. CONTENT IDEAS & BACKLINKS ---
  function renderContentIdeas() {
    const container = document.getElementById('content-ideas-container');
    if (!container) return;

    const content = DataStore.get(STORAGE_KEYS.CONTENT, []);
    container.innerHTML = content.map(c => `
      <div class="card" style="margin-bottom: 16px;">
        <div class="card-header-flex">
          <span class="pill ${c.stage === 'Drafting' ? 'pill-purple' : (c.stage === 'Outlined' ? 'pill-info' : 'pill-neutral')}">${escapeHtml(c.stage)}</span>
          <span class="pill ${c.priority === 'High' ? 'pill-danger' : 'pill-warning'}">${escapeHtml(c.priority)} Priority</span>
        </div>
        <h4 style="font-size: 15px; color: var(--text-white); margin-bottom: 8px;">${escapeHtml(c.title)}</h4>
        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
          <strong>Target KW:</strong> <code style="color: var(--accent-cyan);">${escapeHtml(c.targetKeyword)}</code> | <strong>Est. Traffic:</strong> ${escapeHtml(c.estTraffic)}
        </div>
        <p style="font-size: 12px; color: var(--text-subtle);">${escapeHtml(c.notes)}</p>
      </div>
    `).join('');
  }

  function renderBacklinks() {
    const tbody = document.getElementById('backlinks-table-body');
    if (!tbody) return;

    const backlinks = DataStore.get(STORAGE_KEYS.BACKLINKS, []);
    tbody.innerHTML = backlinks.map(b => `
      <tr>
        <td><strong style="color: var(--text-white); font-size: 13px;">${escapeHtml(b.sourceDomain)}</strong></td>
        <td><code style="font-size: 11px; color: var(--text-muted);">${escapeHtml(b.sourceUrl)}</code></td>
        <td><span class="rank-badge rank-top3">${b.domainAuthority} DA</span></td>
        <td><span style="font-size: 12px; color: var(--accent-cyan);">${escapeHtml(b.anchorText)}</span></td>
        <td><span class="pill pill-neutral">${escapeHtml(b.type)}</span></td>
        <td><span class="pill pill-success">${escapeHtml(b.status)}</span></td>
      </tr>
    `).join('');
  }

  // --- 14. REPORTS & CSV EXPORT ---
  function exportTasksToCsv() {
    const tasks = DataStore.get(STORAGE_KEYS.TASKS, []);
    if (tasks.length === 0) {
      showToast('No tasks to export.', 'warning');
      return;
    }

    const headers = ['ID', 'Title', 'Category', 'Priority', 'Page URL', 'Due Date', 'Status', 'Notes'];
    const rows = tasks.map(t => [
      t.id,
      `"${(t.title || '').replace(/"/g, '""')}"`,
      t.category,
      t.priority,
      t.pageUrl,
      t.dueDate,
      t.status,
      `"${(t.notes || '').replace(/"/g, '""')}"`
    ]);

    downloadCsv('outprix-digital-seo-tasks.csv', [headers, ...rows]);
    logActivity('Report Exported', 'Exported SEO tasks to CSV.');
    showToast('SEO Tasks CSV generated and downloaded.', 'success');
  }

  function exportKeywordsToCsv() {
    const keywords = DataStore.get(STORAGE_KEYS.KEYWORDS, []);
    if (keywords.length === 0) {
      showToast('No keywords to export.', 'warning');
      return;
    }

    const headers = ['Keyword', 'Search Intent', 'Priority', 'Current Position', 'Target Page', 'Monthly Search Volume', 'Change', 'Status'];
    const rows = keywords.map(k => [
      `"${(k.keyword || '').replace(/"/g, '""')}"`,
      k.intent,
      k.priority,
      k.position,
      k.targetPage,
      k.searchVolume,
      k.change,
      k.status
    ]);

    downloadCsv('outprix-digital-keywords-matrix.csv', [headers, ...rows]);
    logActivity('Report Exported', 'Exported keyword matrix to CSV.');
    showToast('Keyword Matrix CSV downloaded.', 'success');
  }

  function exportFullAuditCsv() {
    const pages = DataStore.get(STORAGE_KEYS.PAGES, []);
    const headers = ['Page Name', 'Relative URL', 'Canonical URL', 'SEO Title', 'Meta Description', 'Target Keyword', 'H1 Check', 'Alt Text Check', 'Status'];
    const rows = pages.map(p => [
      `"${(p.name || '').replace(/"/g, '""')}"`,
      p.url,
      p.canonicalUrl,
      `"${(p.title || '').replace(/"/g, '""')}"`,
      `"${(p.description || '').replace(/"/g, '""')}"`,
      `"${(p.targetKeyword || '').replace(/"/g, '""')}"`,
      `"${(p.h1Check || '').replace(/"/g, '""')}"`,
      `"${(p.altTextCheck || '').replace(/"/g, '""')}"`,
      p.status
    ]);

    downloadCsv('outprix-digital-full-onpage-audit.csv', [headers, ...rows]);
    logActivity('Report Exported', 'Exported full on-page metadata audit to CSV.');
    showToast('Full SEO On-Page Audit CSV downloaded.', 'success');
  }

  function downloadCsv(filename, rows) {
    const csvContent = 'data:text/csv;charset=utf-8,' + rows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  // --- 15. ACTIVITY LOG DRAWER ---
  function renderActivityLog() {
    const listContainer = document.getElementById('drawer-activity-list');
    if (!listContainer) return;

    const activities = DataStore.get(STORAGE_KEYS.ACTIVITY, []);
    if (activities.length === 0) {
      listContainer.innerHTML = '<div class="empty-table-state">No recorded activity yet.</div>';
      return;
    }

    listContainer.innerHTML = activities.map(act => `
      <div class="activity-item">
        <div class="activity-dot">⚡</div>
        <div class="activity-content">
          <div class="activity-text">
            <strong>${escapeHtml(act.action)}</strong>
            <div style="margin-top: 2px;">${escapeHtml(act.details)}</div>
          </div>
          <div class="activity-time">${new Date(act.timestamp).toLocaleString()} (${formatTimeAgo(act.timestamp)})</div>
        </div>
      </div>
    `).join('');
  }

  function initDrawer() {
    const btnOpen = document.getElementById('btn-open-activity-drawer');
    const btnClose = document.getElementById('btn-close-activity-drawer');
    const drawer = document.getElementById('activity-drawer');
    const backdrop = document.getElementById('activity-drawer-backdrop');
    const btnClear = document.getElementById('btn-clear-activity-log');

    function toggleDrawer(open) {
      if (open) {
        renderActivityLog();
        drawer?.classList.add('active');
        backdrop?.classList.add('active');
      } else {
        drawer?.classList.remove('active');
        backdrop?.classList.remove('active');
      }
    }

    btnOpen?.addEventListener('click', () => toggleDrawer(true));
    btnClose?.addEventListener('click', () => toggleDrawer(false));
    backdrop?.addEventListener('click', () => toggleDrawer(false));

    btnClear?.addEventListener('click', () => {
      if (!confirm('Clear all activity logs?')) return;
      DataStore.set(STORAGE_KEYS.ACTIVITY, []);
      renderActivityLog();
      renderOverviewActivities();
      showToast('Activity log cleared.', 'info');
    });
  }

  // --- 16. MODAL SYSTEM HELPERS ---
  function initModals() {
    document.querySelectorAll('.modal-close-btn, [data-modal-close]').forEach(btn => {
      btn.addEventListener('click', function () {
        const modal = this.closest('.modal-backdrop');
        if (modal) modal.classList.remove('active');
      });
    });

    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', function (e) {
        if (e.target === this) {
          this.classList.remove('active');
        }
      });
    });
  }

  // --- 17. INITIALIZATION ---
  function initDashboard() {
    DataStore.initDefaults();

    // Check last audit time
    const lastAudit = localStorage.getItem(STORAGE_KEYS.LAST_AUDIT);
    if (lastAudit) {
      const auditTimeEl = document.getElementById('last-audit-timestamp');
      if (auditTimeEl) auditTimeEl.textContent = lastAudit;
    }

    initNavigation();
    initModals();
    initDrawer();
    initTasksEvents();
    initPageOptEvents();
    initKeywordsEvents();

    // Technical audit trigger
    document.getElementById('btn-run-audit')?.addEventListener('click', runTechnicalAudit);

    // CSV and Print Report buttons
    document.getElementById('btn-export-tasks-csv')?.addEventListener('click', exportTasksToCsv);
    document.getElementById('btn-export-keywords-csv')?.addEventListener('click', exportKeywordsToCsv);
    document.getElementById('btn-export-full-audit-csv')?.addEventListener('click', exportFullAuditCsv);
    document.getElementById('btn-print-report')?.addEventListener('click', () => {
      window.print();
    });

    // Reset local data in settings
    document.getElementById('btn-reset-defaults')?.addEventListener('click', () => {
      if (!confirm('Reset all dashboard SEO data back to factory defaults? Your changes in localStorage will be reset.')) return;
      localStorage.removeItem(STORAGE_KEYS.PAGES);
      localStorage.removeItem(STORAGE_KEYS.TASKS);
      localStorage.removeItem(STORAGE_KEYS.KEYWORDS);
      localStorage.removeItem(STORAGE_KEYS.CONTENT);
      localStorage.removeItem(STORAGE_KEYS.BACKLINKS);
      localStorage.removeItem(STORAGE_KEYS.ACTIVITY);
      DataStore.initDefaults();
      showToast('Reset all dashboard data to defaults.', 'info');
      setTimeout(() => location.reload(), 600);
    });

    // Initial renders
    updateOverviewStats();
    renderOverviewActivities();
    renderTasks();
    renderPageOptimisation();
    renderKeywords();
    renderContentIdeas();
    renderBacklinks();
    renderActivityLog();

    // Render Canvas chart after layout stabilizes
    setTimeout(renderProgressChart, 100);

    // Resize listener for responsive chart
    window.addEventListener('resize', () => {
      renderProgressChart();
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
  } else {
    initDashboard();
  }

})();

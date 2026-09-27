// ==========================================================================
// ARNAV OKHADE PM PORTFOLIO - MAIN APP JAVASCRIPT
// Multi-View Page Renderers & Interactive PM Features
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCommandPalette();
  
  // Register Router Views
  Router.register("home", renderHomeView);
  Router.register("about", renderAboutView);
  Router.register("resume", renderResumeView);
  Router.register("case-studies", () => renderCaseStudiesDirectoryView("all"));
  Router.register("podium", () => renderCaseStudiesDirectoryView("podium"));
  Router.register("case", (caseId) => renderCaseDetailView(caseId));
  Router.register("experience", renderExperienceView);
  Router.register("frameworks", renderFrameworksView);
  Router.register("contact", renderContactView);

  // Initialize Router
  Router.init("appViewport");
});

// --------------------------------------------------------------------------
// 1. Theme Management (Dark / Light)
// --------------------------------------------------------------------------
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("ao_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("ao_theme", nextTheme);
      updateThemeIcon(nextTheme);
      showToast(`Switched to ${nextTheme === "dark" ? "Dark" : "Light"} Mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  if (theme === "dark") {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.setAttribute("title", "Switch to Light Mode");
  } else {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.setAttribute("title", "Switch to Dark Mode");
  }
}

// --------------------------------------------------------------------------
// 2. Toast Feedback
// --------------------------------------------------------------------------
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-cyan);"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "all 0.2s ease";
    setTimeout(() => toast.remove(), 200);
  }, 2400);
}

function copyToClipboard(text, label = "Copied to clipboard") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(label);
  });
}

// --------------------------------------------------------------------------
// VIEW 1: HOME PAGE (Interactive Bento Grid & Portals)
// --------------------------------------------------------------------------
function renderHomeView() {
  const vp = document.getElementById("appViewport");
  const prof = PORTFOLIO_DATA.profile;
  const flagships = PORTFOLIO_DATA.caseStudies.filter((c) => c.featured);

  vp.innerHTML = `
    <div class="container" style="padding-top: 40px; padding-bottom: 60px;">
      
      <!-- Top Hero Header with Reference Green Tag -->
      <header style="margin-bottom: 32px;">
        <div class="home-status-tag">
          <span class="status-dot"></span>
          <span>Open to Product Management & Consulting Roles</span>
        </div>
        <h1 class="page-title" style="margin-bottom: 12px;">
          Bridging First-Principles Product Thinking, Strategy & Practical AI.
        </h1>
        <p class="page-desc">
          Solving realistic business and operational bottlenecks through structured user research, financial unit economics, and practical AI workflows.
        </p>
      </header>

      <!-- Bento Grid Experience -->
      <div class="bento-grid">
        
        <!-- Bento 1: Profile & Credentials with Headshot (8 Cols) -->
        <div class="bento-card bento-col-8" onclick="Router.navigate('#about')">
          <div>
            <div class="profile-headshot-container">
              <img src="assets/arnav-okhade.jpg" alt="Arnav Okhade" class="profile-headshot-img" />
              <div>
                <span class="case-tag-pill">Executive Profile</span>
                <h2 class="bento-hero-title" style="margin-top: 6px; margin-bottom: 4px;">Arnav Okhade</h2>
                <div style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 500;">MBA (IIM Kashipur '26) • B.Tech (NIT Hamirpur '22)</div>
              </div>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
              ${prof.bio}
            </p>
            <div class="bento-badge-group" style="margin: 8px 0 16px;">
              <span class="hero-badge">💼 ATPM @ MAQ Software</span>
              <span class="hero-badge">🏛️ Ex-Oracle (Core Banking)</span>
              <span class="hero-badge">🤖 Practical AI & Systems</span>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid var(--border-color);">
            <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">Venture into About & PM Vision →</span>
            <span style="font-size: 0.78rem; color: var(--text-dim);">Read philosophy & story</span>
          </div>
        </div>

        <!-- Bento 2: Interactive Resume Portal (4 Cols) -->
        <div class="bento-card bento-col-4" onclick="Router.navigate('#resume')">
          <div>
            <span class="case-tag-pill" style="background: rgba(16, 185, 129, 0.12); color: var(--accent-emerald); border-color: rgba(16, 185, 129, 0.25);">Curriculum Vitae</span>
            <h3 style="font-size: 1.35rem; font-weight: 700; margin: 12px 0 8px;">Executive Resume</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
              Explore the complete 1-to-1 CV spanning enterprise experience, education, consulting projects, and skills.
            </p>
            <div style="padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.82rem; color: var(--text-muted); margin-bottom: 16px;">
              <div>• 2+ Years Enterprise Experience</div>
              <div>• 7+ National Case Podiums</div>
              <div>• Top Technical & PM Skills</div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid var(--border-color);">
            <span style="font-size: 0.85rem; color: var(--accent-emerald); font-weight: 600;">Open Interactive Resume →</span>
            <span style="font-size: 0.75rem; color: var(--text-dim);">Printable</span>
          </div>
        </div>

        <!-- Bento 3: Stats Ribbon (12 Cols) -->
        <div class="bento-card bento-col-12" style="cursor: default;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-dim); letter-spacing: 0.06em;">Track Record Highlights</span>
            <span style="font-size: 0.75rem; color: var(--accent-primary);">Quantified Impact</span>
          </div>
          <div class="bento-stats-row">
            ${prof.stats
              .map(
                (s) => `
              <div class="bento-stat-item">
                <div class="bento-stat-num">${s.value}</div>
                <div class="bento-stat-label">${s.label}</div>
                <div class="bento-stat-sub">${s.sub}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Bento 4: Selected National Shortlist Case Studies (12 Cols) -->
        <div class="bento-card bento-col-12" style="cursor: default;">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 20px;">
            <div>
              <span class="case-tag-pill">Selected Competitions</span>
              <h3 style="font-size: 1.2rem; font-weight: 600; margin-top: 6px;">National Finalist & Shortlisted Case Studies</h3>
              <p style="font-size: 0.82rem; color: var(--text-dim); margin-top: 2px;">Projects from national corporate challenges where we reached the final and semifinal stages.</p>
            </div>
            <button class="btn btn-secondary" onclick="Router.navigate('#case-studies')">
              <span>Explore All Projects</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <div class="case-study-grid" style="margin-bottom: 0;">
            ${flagships
              .map((item) => renderCaseCardHTML(item))
              .join("")}
          </div>
        </div>

        <!-- Bento 5: Featured AI Product (6 Cols) -->
        <div class="bento-card bento-col-6">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span class="case-tag-pill" style="background: rgba(6, 182, 212, 0.12); color: var(--accent-cyan); border-color: rgba(6, 182, 212, 0.25);">Featured AI Product</span>
              <a href="https://financial-model-impact-agent.streamlit.app/" target="_blank" rel="noopener noreferrer" class="live-app-highlight-btn" style="padding: 4px 10px; font-size: 0.74rem;">
                <span class="status-dot"></span>
                <span>Live App ↗</span>
              </a>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px;">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin: 4px 0 8px; cursor: pointer;" onclick="Router.navigate('#case/financial-model-analyzer')">Financial Model Impact Analyzer</h3>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 14px;">
              AI-powered decision-support tool for equity research connecting earnings calls and analyst notes directly to forecast cells and Excel models.
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;">
              <span class="skill-tag" style="color: var(--accent-cyan);">Python</span>
              <span class="skill-tag" style="color: var(--accent-cyan);">Gemini</span>
              <span class="skill-tag" style="color: var(--accent-cyan);">OpenPyXL</span>
              <span class="skill-tag" style="color: var(--accent-cyan);">PyMuPDF</span>
              <span class="skill-tag" style="color: var(--accent-cyan);">Streamlit</span>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid var(--border-color); gap: 10px; flex-wrap: wrap;">
            <a href="https://financial-model-impact-agent.streamlit.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.82rem;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>Launch Live App</span>
            </a>
            <span onclick="Router.navigate('#case/financial-model-analyzer')" style="font-size: 0.82rem; color: var(--accent-cyan); cursor: pointer; font-weight: 500;">
              View Case Study →
            </span>
          </div>
        </div>

        <!-- Bento 6: Frameworks Vault Portal (6 Cols) -->
        <div class="bento-card bento-col-6" onclick="Router.navigate('#frameworks')">
          <div>
            <span class="case-tag-pill">Mental Models</span>
            <h3 style="font-size: 1.25rem; font-weight: 600; margin: 12px 0 8px;">Product Thinking Vault</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
              Explore the core frameworks I use: RICE Prioritization, Opportunity Solution Trees, First-Principles Deconstruction, and Tiered AI Governance.
            </p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid var(--border-color);">
            <span style="font-size: 0.85rem; color: var(--accent-primary); font-weight: 600;">Explore Mental Models →</span>
            <span style="font-size: 0.75rem; color: var(--text-dim);">5 Frameworks</span>
          </div>
        </div>      </div>

    </div>
  `;

  attachCardGlowEffect();
}

// --------------------------------------------------------------------------
// VIEW 2: CASE STUDIES DIRECTORY
// --------------------------------------------------------------------------
function renderCaseStudiesDirectoryView(initialFilter = "all") {
  const vp = document.getElementById("appViewport");

  vp.innerHTML = `
    <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
      <div class="page-hero">
        <div class="page-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>Portfolio Showcase</span>
        </div>
        <h1 class="page-title">Case Studies & Strategic Solutions</h1>
        <p class="page-desc">
          Every project is documented through an 8-stage PM breakdown: <em>Problem → Context → Research → Constraints → Decision Making → Solution → Outcome → Learnings</em>.
        </p>
      </div>

      <!-- Filter Controls & Search -->
      <div class="filter-bar">
        <div class="filter-tabs" id="directoryFilterTabs">
          <button class="filter-btn ${initialFilter === 'all' ? 'active' : ''}" data-filter="all">All Projects</button>
          <button class="filter-btn ${initialFilter === 'finalist' ? 'active' : ''}" data-filter="finalist">National Finalists & Semifinalists</button>
          <button class="filter-btn ${initialFilter === 'Operations & Strategy' ? 'active' : ''}" data-filter="Operations & Strategy">Operations & Strategy</button>
          <button class="filter-btn ${initialFilter === 'FinTech & Banking' ? 'active' : ''}" data-filter="FinTech & Banking">FinTech & Banking</button>
          <button class="filter-btn ${initialFilter === 'Consumer Tech & Hardware' ? 'active' : ''}" data-filter="Consumer Tech & Hardware">Consumer Tech & Hardware</button>
          <button class="filter-btn ${initialFilter === 'AI & Software Systems' ? 'active' : ''}" data-filter="AI & Software Systems">AI & Engineering Velocity</button>
        </div>

        <div class="search-input-wrapper">
          <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" class="search-input" id="directorySearchInput" placeholder="Search problems, metrics, tools..." />
        </div>
      </div>

      <div class="case-study-grid" id="directoryGrid">
        <!-- Rendered by Directory Filter -->
      </div>
    </div>
  `;

  let currentFilter = initialFilter;
  let currentSearch = "";

  const renderFiltered = () => {
    const grid = document.getElementById("directoryGrid");
    if (!grid) return;

    let cases = PORTFOLIO_DATA.caseStudies;
    if (currentFilter === "finalist") cases = cases.filter((c) => c.featured);
    else if (currentFilter !== "all") cases = cases.filter((c) => c.category === currentFilter);

    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase();
      cases = cases.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          c.tag.toLowerCase().includes(q) ||
          c.executiveSummary.toLowerCase().includes(q)
      );
    }

    if (cases.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted);">
          <p style="font-size: 1.1rem; margin-bottom: 8px;">No case studies match your search.</p>
          <button class="btn btn-secondary" onclick="document.getElementById('directorySearchInput').value=''; renderCaseStudiesDirectoryView();">Reset Search</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = cases.map((item) => renderCaseCardHTML(item)).join("");
    attachCardGlowEffect();
  };

  const tabs = document.querySelectorAll("#directoryFilterTabs .filter-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-filter");
      renderFiltered();
    });
  });

  const searchInput = document.getElementById("directorySearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderFiltered();
    });
  }

  renderFiltered();
}

function renderCaseCardHTML(item) {
  const awardBadge = item.award ? `<span class="case-award-badge">★ ${item.award.split("•")[0]}</span>` : "";

  const metricsHTML = item.heroMetrics
    ? `
    <div class="case-metrics-grid">
      ${item.heroMetrics
        .map(
          (m) => `
        <div class="case-metric-item">
          <span class="case-metric-value">${m.value}</span>
          <span class="case-metric-label">${m.label}</span>
        </div>
      `
        )
        .join("")}
    </div>
  `
    : "";

  return `
    <article class="case-card" onclick="Router.navigate('#case/${item.id}')" data-id="${item.id}">
      <div class="case-card-header">
        <div class="case-meta-row">
          <span class="case-tag-pill">${item.tag}</span>
          <div style="display: flex; align-items: center; gap: 6px;">
            ${item.liveDemo ? `<a href="${item.liveDemo}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="live-app-highlight-btn" style="padding: 3px 8px; font-size: 0.7rem;"><span class="status-dot"></span><span>Live App ↗</span></a>` : ''}
            ${awardBadge}
          </div>
        </div>
        <h3 class="case-title">${item.title}</h3>
        <p class="case-subtitle">${item.subtitle}</p>
        <p class="case-summary">${item.executiveSummary}</p>
      </div>
      
      <div>
        ${metricsHTML}
        <div class="case-footer">
          <span>${item.liveDemo ? `<a href="${item.liveDemo}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" style="color: var(--accent-cyan); font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">Live App ↗</a>` : '8-Stage PM Breakdown'}</span>
          <span class="case-read-btn">
            Read Case Study 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </span>
        </div>
      </div>
    </article>
  `;
}

// --------------------------------------------------------------------------
// VIEW 3: DEDICATED FULL-PAGE CASE STUDY DEEP DIVE
// --------------------------------------------------------------------------
function renderCaseDetailView(caseId) {
  const vp = document.getElementById("appViewport");
  const caseItem = PORTFOLIO_DATA.caseStudies.find((c) => c.id === caseId);

  if (!caseItem) {
    vp.innerHTML = `
      <div class="container" style="padding: 80px 24px; text-align: center;">
        <h2>Case Study Not Found</h2>
        <p style="color: var(--text-muted); margin: 12px 0 24px;">The requested case study does not exist or has moved.</p>
        <button class="btn btn-primary" onclick="Router.navigate('#podium')">Back to Case Studies</button>
      </div>
    `;
    return;
  }

  const sectionKeys = [
    { key: "problem", num: "1", title: "Problem & Core Friction" },
    { key: "context", num: "2", title: "Context & Market Dynamics" },
    { key: "research", num: "3", title: "Research & Behavioral Insights" },
    { key: "constraints", num: "4", title: "Constraints & Feasibility" },
    { key: "decisionMaking", num: "5", title: "Decision Making & Trade-offs" },
    { key: "solution", num: "6", title: "Solution Architecture & Product Spec" },
    { key: "outcome", num: "7", title: "Quantified Outcome & Business ROI" },
    { key: "learnings", num: "8", title: "Learnings & PM Retrospective" }
  ];

  const sectionsHTML = sectionKeys
    .map((s) => {
      const secData = caseItem.sections[s.key];
      if (!secData) return "";

      return `
      <section class="case-section-block" id="sec-${s.key}">
        <h3 class="case-section-heading">
          <span class="case-section-number">${s.num}</span>
          ${secData.title || s.title}
        </h3>
        <ul class="case-bullet-list">
          ${secData.points.map((p) => `<li class="case-bullet-item">${p}</li>`).join("")}
        </ul>
      </section>
    `;
    })
    .join("");

  const tocHTML = sectionKeys
    .map(
      (s) => `
    <li>
      <a href="#sec-${s.key}" class="toc-link" onclick="handleCaseTocScroll(event, 'sec-${s.key}')">
        ${s.num}. ${s.title.split("&")[0].trim()}
      </a>
    </li>
  `
    )
    .join("");

  const heroMetricsHTML = caseItem.heroMetrics
    ? `
    <div class="reader-metrics-strip">
      ${caseItem.heroMetrics
        .map(
          (m) => `
        <div class="reader-metric-card">
          <div class="reader-metric-value">${m.value}</div>
          <div class="reader-metric-label">${m.label}</div>
        </div>
      `
        )
        .join("")}
    </div>
  `
    : "";

  // Prev / Next index
  const currentIndex = PORTFOLIO_DATA.caseStudies.findIndex((c) => c.id === caseId);
  const prevCase = PORTFOLIO_DATA.caseStudies[currentIndex - 1];
  const nextCase = PORTFOLIO_DATA.caseStudies[currentIndex + 1];

  const prevBtnHTML = prevCase
    ? `<button class="pagination-btn" onclick="Router.navigate('#case/${prevCase.id}')"><span>← Previous Project</span><strong>${prevCase.title.slice(0, 32)}...</strong></button>`
    : `<div></div>`;

  const nextBtnHTML = nextCase
    ? `<button class="pagination-btn" style="text-align: right;" onclick="Router.navigate('#case/${nextCase.id}')"><span>Next Project →</span><strong>${nextCase.title.slice(0, 32)}...</strong></button>`
    : `<div></div>`;

  vp.innerHTML = `
    <div class="container case-view-container">
      
      <!-- Top Navigation & Actions Bar -->
      <div class="case-header-nav">
        <button class="back-to-dir-btn" onclick="Router.navigate('#podium')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          <span>All Case Studies</span>
        </button>

        <div class="case-action-group">
          <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="copyToClipboard(window.location.href, 'Case study link copied!')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            <span>Share Case</span>
          </button>
        </div>
      </div>

      <!-- Case Hero Banner -->
      <header class="case-hero-banner">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 14px;">
          <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
            <span class="case-tag-pill">${caseItem.tag}</span>
            ${caseItem.award ? `<span class="case-award-badge">★ ${caseItem.award}</span>` : ""}
            ${caseItem.team ? `<span style="font-size: 0.8rem; color: var(--text-dim);">Team: ${caseItem.team}</span>` : ""}
          </div>
          ${caseItem.liveDemo ? `
            <a href="${caseItem.liveDemo}" target="_blank" rel="noopener noreferrer" class="live-app-highlight-btn">
              <span class="status-dot"></span>
              <span>Launch Live App ↗</span>
            </a>
          ` : ""}
        </div>

        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 8px;">
          <h1 class="case-hero-title" style="margin: 0; flex: 1; min-width: 280px;">${caseItem.title}</h1>
        </div>

        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;">
          <p class="case-hero-subtitle" style="margin-bottom: 0; flex: 1; min-width: 260px;">${caseItem.subtitle}</p>
          ${caseItem.liveDemo ? `
            <a href="${caseItem.liveDemo}" target="_blank" rel="noopener noreferrer" class="live-app-hero-cta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>financial-model-impact-agent.streamlit.app ↗</span>
            </a>
          ` : ""}
        </div>

        <div class="case-exec-callout">
          <div class="case-exec-title">Executive Summary</div>
          ${caseItem.executiveSummary}
          ${caseItem.liveDemo ? `
            <div style="margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
              <span style="font-size: 0.82rem; color: var(--accent-cyan); font-family: var(--font-mono);">Live Deployment: financial-model-impact-agent.streamlit.app</span>
              <a href="${caseItem.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.82rem;">
                <span>Open Streamlit App ↗</span>
              </a>
            </div>
          ` : ""}
        </div>

        ${heroMetricsHTML}
      </header>

      <!-- Layout with Sticky TOC Sidebar -->
      <div class="case-layout-grid">
        <aside class="case-toc-sticky">
          <div class="toc-title">8-Stage PM Index</div>
          <ul class="toc-list" id="caseTocList">
            ${tocHTML}
          </ul>
        </aside>

        <main class="case-content-area">
          ${sectionsHTML}
          
          <!-- Bottom Pagination -->
          <div class="case-pagination-bar">
            ${prevBtnHTML}
            ${nextBtnHTML}
          </div>
        </main>
      </div>

    </div>
  `;

  // Attach scroll spy for TOC
  window.removeEventListener("scroll", handleCaseDetailScroll);
  window.addEventListener("scroll", handleCaseDetailScroll);
}

function handleCaseTocScroll(e, secId) {
  e.preventDefault();
  const el = document.getElementById(secId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function handleCaseDetailScroll() {
  const sections = document.querySelectorAll(".case-section-block");
  let activeId = "";
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 140) {
      activeId = sec.id;
    }
  });

  const links = document.querySelectorAll("#caseTocList .toc-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === `#${activeId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// --------------------------------------------------------------------------
// VIEW 4: INTERACTIVE RESUME VIEW
// --------------------------------------------------------------------------
function renderResumeView() {
  const vp = document.getElementById("appViewport");
  const prof = PORTFOLIO_DATA.profile;

  vp.innerHTML = `
    <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
      
      <div class="page-hero" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 20px;">
        <div>
          <div class="page-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            <span>Curriculum Vitae</span>
          </div>
          <h1 class="page-title">Executive Resume</h1>
          <p class="page-desc">
            Complete background spanning enterprise technology, MBA leadership, consulting engagements, and competition achievements.
          </p>
        </div>

        <div style="display: flex; gap: 12px;">
          <button class="btn btn-secondary" onclick="window.print()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            <span>Print / Save PDF</span>
          </button>
          <a href="mailto:${prof.email}?subject=Requesting%20Arnav%20Okhade%20Official%20Resume%20PDF" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>Request PDF</span>
          </a>
        </div>
      </div>

      <!-- Resume Paper Container -->
      <div class="resume-paper">
        <!-- Header with Executive Headshot -->
        <div class="resume-top-banner" style="display: flex; align-items: center; justify-content: center; gap: 24px; text-align: left;">
          <img src="assets/arnav-okhade.jpg" alt="Arnav Okhade" style="width: 76px; height: 76px; border-radius: 14px; object-fit: cover; object-position: top; border: 1px solid var(--border-color); flex-shrink: 0;" />
          <div>
            <h2 class="resume-name" style="margin-bottom: 2px;">${prof.name}</h2>
            <div class="resume-subtitle" style="margin-bottom: 6px;">Master of Business Administration (2024 - 2026) • IIM Kashipur</div>
            <div class="resume-contacts" style="justify-content: flex-start;">
              <a href="mailto:${prof.email}" style="color: var(--accent-cyan);">${prof.email}</a>
              <span>•</span>
              <a href="mailto:${prof.alternateEmail}" style="color: var(--accent-cyan);">${prof.alternateEmail}</a>
              <span>•</span>
              <a href="${prof.linkedin}" target="_blank" style="color: var(--accent-cyan);">LinkedIn Profile</a>
              <span>•</span>
              <span>${prof.phone}</span>
              <span>•</span>
              <span>Bhopal / Noida, India</span>
            </div>
          </div>
        </div>

        <!-- Experience -->
        <div class="resume-sec-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          <span>Professional Experience</span>
        </div>

        <div class="resume-entry">
          <div class="resume-entry-header">
            <div><span class="resume-entry-role">Associate Technical Project Manager</span>  -  <span class="resume-entry-company">MAQ Software</span></div>
            <span class="resume-entry-period">May 2026  -  Present</span>
          </div>
          <ul class="resume-bullets">
            <li>Reduced Power Pages enhancement effort by 70% through SpecKit-driven workflows, streamlining requirement-to-delivery execution cycles.</li>
            <li>Boosted engineering throughput by 3.3× through reusable implementation frameworks, saving close to 35 hours per 10 change requests.</li>
            <li>Enhanced governance visibility for 70+ reporting assets through ADO dashboards tracking PR compliance, sprint execution, and workflows.</li>
            <li>Led execution across a 40+ member team through dependency resolution, stakeholder alignment, governance, and delivery tracking.</li>
          </ul>
        </div>

        <div class="resume-entry">
          <div class="resume-entry-header">
            <div><span class="resume-entry-role">Project Management Intern</span>  -  <span class="resume-entry-company">MAQ Software</span></div>
            <span class="resume-entry-period">Apr 2025  -  Jun 2025</span>
          </div>
          <ul class="resume-bullets">
            <li>Increased training engagement from 66.7% to 89.7% by leading cross-functional learning programs across 8 streams and 15+ stakeholders.</li>
            <li>Improved participation by 24% through standardizing 10+ domain training programs using quizzes, leaderboards, and learning interventions.</li>
            <li>Enhanced visibility for 40+ employees by developing real-time dashboards and conceptualizing assessment automation frameworks.</li>
          </ul>
        </div>

        <div class="resume-entry">
          <div class="resume-entry-header">
            <div><span class="resume-entry-role">Product Developer / Associate Consultant</span>  -  <span class="resume-entry-company">Oracle</span></div>
            <span class="resume-entry-period">Jul 2022  -  Jun 2024 (2 Years)</span>
          </div>
          <ul class="resume-bullets">
            <li>Localized core banking product (FLEXCUBE) for LATAM region, resolving 30+ critical defects via PL/SQL, achieving 99% uptime and client trust.</li>
            <li>Owned end-to-end feature delivery across backend PL/SQL scripting, workflow automation, and production deployment activities.</li>
            <li>Expedited feature delivery by 20% through cross-functional collaboration and stakeholder alignment across 10+ organizational functions.</li>
            <li>Defined and implemented sprint retrospectives and testing insights, reducing rework cycles and enhancing sprint delivery efficiency by 15%.</li>
          </ul>
        </div>

        <!-- Education -->
        <div class="resume-sec-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          <span>Educational Background</span>
        </div>
        <table class="resume-table">
          <thead>
            <tr>
              <th>Degree</th>
              <th>Institute</th>
              <th>Score</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>MBA</strong></td>
              <td>Indian Institute of Management (IIM), Kashipur</td>
              <td>6.94 CGPA</td>
              <td>2024 - 2026</td>
            </tr>
            <tr>
              <td><strong>B. Tech (Electrical Engineering)</strong></td>
              <td>National Institute of Technology (NIT), Hamirpur</td>
              <td>80.20%</td>
              <td>2018 - 2022</td>
            </tr>
            <tr>
              <td><strong>Class XII, Science</strong></td>
              <td>Campion School, Bhopal (CBSE)</td>
              <td>86.40%</td>
              <td>2016 - 2017</td>
            </tr>
            <tr>
              <td><strong>Class X, General Studies</strong></td>
              <td>Campion School, Bhopal (CBSE)</td>
              <td>89.30%</td>
              <td>2014 - 2015</td>
            </tr>
          </tbody>
        </table>

        <!-- Projects -->
        <div class="resume-sec-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>Key Consulting & Product Projects</span>
        </div>

        <div class="resume-entry">
          <div class="resume-entry-header">
            <div><strong style="color: var(--text-primary);">Central Supply Chain</strong>  -  <span class="resume-entry-company">Reliance Retail (2025)</span></div>
          </div>
          <ul class="resume-bullets">
            <li>Identified 7% damage in appliance handling at 6 touchpoints, revealing ₹20 - 30L loss per 10k deliveries.</li>
            <li>Designed a Smart Cradle that enhanced handling efficiency by 55%, enabling annual savings of ₹10 - 15 Cr.</li>
            <li>Built a vernacular training and incentive module for 120+ staff, to make last mile deliveries safer by 25%.</li>
          </ul>
        </div>

        <div class="resume-entry">
          <div class="resume-entry-header">
            <div><strong style="color: var(--text-primary);">Strategic Management</strong>  -  <span class="resume-entry-company">IIM Kashipur (2025)</span></div>
          </div>
          <ul class="resume-bullets">
            <li>Analyzed the ₹70,000+ crore paint industry, identifying 6 major risks and 5 competitive strengths.</li>
            <li>Modeled a 4-path Ansoff growth strategy unlocking ₹10,000 - ₹12,000Cr opportunity across segments.</li>
            <li>Recommended AR and recyclable-packaging initiatives reducing environmental impact by 40 - 60%.</li>
          </ul>
        </div>

        <div class="resume-entry">
          <div class="resume-entry-header">
            <div><strong style="color: var(--text-primary);">Marketing Research</strong>  -  <span class="resume-entry-company">Seva Satra Foundation (2024)</span></div>
          </div>
          <ul class="resume-bullets">
            <li>Surveyed 1,000+ families in Vishwakarma Nagar slums to assess sanitation and welfare accessibility gaps.</li>
            <li>Designated strategies for healthcare, training, and legal aid, improving livelihood prospects by 25%.</li>
            <li>Produced comprehensive policy-driven reports, raising ₹5,000+ in funds to support welfare initiatives.</li>
          </ul>
        </div>

        <!-- Awards -->
        <div class="resume-sec-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
          <span>Academic Achievements & Case Competitions</span>
        </div>
        <ul class="resume-bullets">
          <li><strong>National 1st Runner-Up</strong> in AGI Growth X - HEAL 2025, outperforming 500+ teams.</li>
          <li><strong>National Finalist</strong> in Policython by QCI × MDI Murshidabad, ranking in the top 28 teams nationally.</li>
          <li><strong>National Semi-finalist</strong> in Nothing Incubator 2025, ranking in top 1.6% out of 10,000+ teams.</li>
          <li><strong>National Semi-finalist</strong> in Reliance Retail, The Idea Buzz 2025, among top 32 of 2,500+ teams.</li>
          <li><strong>National Semi-finalist</strong> in TVS Credit E.P.I.C 7.0, among top 200 of 9,000+ participating teams.</li>
          <li><strong>National Finalist</strong> in HeadHunters, IIM Indore.</li>
          <li><strong>Silver Medalist</strong> in ESBP among 300+ peers, delivering client-focused sustainability strategies.</li>
        </ul>

        <!-- Responsibility -->
        <div class="resume-sec-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span>Position of Responsibility</span>
        </div>
        <div class="resume-entry">
          <div class="resume-entry-header">
            <div><strong style="color: var(--text-primary);">Exchange Coordinator</strong>  -  <span class="resume-entry-company">International Relations Committee, IIM Kashipur</span></div>
            <span class="resume-entry-period">2024  -  2026</span>
          </div>
          <ul class="resume-bullets">
            <li>Engaged with 800+ universities, onboarding 4 new partners like TUM Germany and COPPEAD Brazil.</li>
            <li>Orchestrated long and short-term exchange programs for 70+ students across 5 partner universities.</li>
            <li>Executed IIM Kashipur’s MUN with 60+ participants from 20+ colleges, ensuring smooth operations.</li>
            <li>Drafted and aligned 14+ MoUs with IIM Kashipur’s internationalization and academic collaboration goals.</li>
          </ul>
        </div>

        <!-- Skills -->
        <div class="resume-sec-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          <span>Skills Matrix</span>
        </div>
        <div class="resume-skills-grid">
          <div class="skills-category-box">
            <div class="skills-category-title">Hard & Technical Skills</div>
            <div class="skills-pills-wrap">
              ${prof.skills.hardSkills.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
            </div>
          </div>
          <div class="skills-category-box">
            <div class="skills-category-title">Product & Strategic Skills</div>
            <div class="skills-pills-wrap">
              ${prof.skills.softSkills.map((s) => `<span class="skill-tag" style="color: var(--accent-cyan);">${s}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

// --------------------------------------------------------------------------
// VIEW 5: CAREER & PROFESSIONAL EXPERIENCE
// --------------------------------------------------------------------------
function renderExperienceView() {
  const vp = document.getElementById("appViewport");

  vp.innerHTML = `
    <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
      <div class="page-hero">
        <div class="page-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          <span>Career History</span>
        </div>
        <h1 class="page-title">Professional Experience & Track Record</h1>
        <p class="page-desc">
          2+ years of enterprise software engineering, technical product management, cross-functional execution, and velocity governance.
        </p>
      </div>

      <div class="timeline">
        ${PORTFOLIO_DATA.experiences
          .map(
            (exp) => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-header">
                <div>
                  <h3 class="timeline-role">${exp.role}</h3>
                  <span class="timeline-company">${exp.company}</span> • <span style="font-size: 0.85rem; color: var(--text-dim);">${exp.location}</span>
                </div>
                <div>
                  <span class="case-tag-pill" style="margin-right: 8px;">${exp.badge}</span>
                  <span class="timeline-period">${exp.period}</span>
                </div>
              </div>
              <p class="timeline-summary">${exp.summary}</p>
              <ul class="timeline-highlights">
                ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
              </ul>
              <div class="timeline-skills">
                ${exp.skills.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// VIEW 6: PM DECISION SANDBOX
// --------------------------------------------------------------------------
function renderFrameworksView() {
  const vp = document.getElementById("appViewport");

  vp.innerHTML = `
    <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
      <div class="page-hero">
        <div class="page-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          <span>Mental Models</span>
        </div>
        <h1 class="page-title">Product Thinking & Decision Frameworks</h1>
        <p class="page-desc">
          Structured mental models used to deconstruct market ambiguity, align cross-functional engineering teams, and drive defensible ROI.
        </p>
      </div>

      <div class="frameworks-grid">
        ${PORTFOLIO_DATA.frameworks
          .map(
            (fw) => `
          <div class="framework-card">
            <h3 class="framework-name">${fw.name}</h3>
            <p class="framework-tagline">${fw.tagline}</p>
            <ul class="framework-points">
              ${fw.principles.map((p) => `<li>${p}</li>`).join("")}
            </ul>
            <div class="framework-applied">
              <strong>Applied in:</strong> ${fw.appliedIn}
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// VIEW 8: ABOUT ME & PM VISION
// --------------------------------------------------------------------------
function renderAboutView() {
  const vp = document.getElementById("appViewport");
  const prof = PORTFOLIO_DATA.profile;
  const asp = prof.aspirations;

  vp.innerHTML = `
    <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
      <div class="page-hero">
        <div class="page-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          <span>Background & Vision</span>
        </div>
        <div class="profile-headshot-container" style="margin-top: 8px;">
          <img src="assets/arnav-okhade.jpg" alt="Arnav Okhade" class="profile-headshot-img" style="width: 104px; height: 104px;" />
          <div>
            <h1 class="page-title" style="margin-bottom: 6px;">Arnav Okhade</h1>
            <p class="page-desc" style="font-size: 0.95rem;">
              The intersection of engineering rigor, business strategy, and practical AI to solve realistic problems.
            </p>
          </div>
        </div>
      </div>

      <div class="pm-callout" style="margin-bottom: 32px;">
        <div class="pm-callout-title" style="color: var(--accent-cyan);">Career Positioning</div>
        <p style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 10px;">${asp.headline}</p>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 20px;">${prof.bio}</p>
        
        <div>
          <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-dim); margin-bottom: 8px;">Target PM Roles</div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${asp.targetRoles.map((r) => `<span class="hero-badge" style="background: var(--bg-tertiary); color: var(--accent-primary); border-color: var(--border-accent);">${r}</span>`).join("")}
          </div>
        </div>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 16px;">Core Focus Pillars</h2>
      <div class="vision-grid" style="margin-bottom: 48px;">
        ${asp.corePillars
          .map(
            (p) => `
          <div class="vision-card">
            <div class="vision-card-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-primary);"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              <span>${p.title}</span>
            </div>
            <div class="vision-card-desc">${p.desc}</div>
          </div>
        `
          )
          .join("")}
      </div>

      <!-- Institutional Leadership & Certifications -->
      <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 16px;">Leadership & Certifications</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">
        <div>
          <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 14px;">Positions of Responsibility</h3>
          ${PORTFOLIO_DATA.academicLeadership
            .map(
              (lead) => `
            <div class="framework-card" style="margin-bottom: 16px;">
              <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">${lead.role}</h4>
              <div style="font-size: 0.85rem; color: var(--accent-cyan); margin-bottom: 12px;">${lead.organization}</div>
              <ul class="case-bullet-list">
                ${lead.details.map((d) => `<li class="case-bullet-item" style="font-size: 0.85rem;">${d}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </div>

        <div>
          <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 14px;">Certifications</h3>
          ${PORTFOLIO_DATA.certifications
            .map(
              (c) => `
            <div style="padding: 14px 18px; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 12px;">
              <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-primary);">${c.name}</div>
              <div style="font-size: 0.8rem; color: var(--accent-primary); margin-bottom: 4px;">${c.issuer}</div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">${c.desc}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

    </div>
  `;
}

// --------------------------------------------------------------------------
// VIEW 9: CONTACT & CONNECT
// --------------------------------------------------------------------------
function renderContactView() {
  const vp = document.getElementById("appViewport");
  const prof = PORTFOLIO_DATA.profile;

  vp.innerHTML = `
    <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
      <div class="page-hero" style="text-align: center;">
        <div class="page-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span>Get in Touch</span>
        </div>
        <h1 class="page-title">Let's Build Great Products Together</h1>
        <p class="page-desc" style="margin: 0 auto;">
          I am actively exploring Product Management and Strategy roles where I can drive customer impact, business growth, and operational rigor.
        </p>
      </div>

      <div class="sandbox-wrapper" style="max-width: 760px; margin: 0 auto; text-align: center;">
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; margin-bottom: 32px;">
          <a href="mailto:${prof.email}" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>Primary: ${prof.email}</span>
          </a>
          <a href="mailto:${prof.alternateEmail}" class="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>Alternate: ${prof.alternateEmail}</span>
          </a>
          <a href="${prof.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>LinkedIn Profile</span>
          </a>
          <a href="tel:${prof.phone}" class="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>${prof.phone}</span>
          </a>
        </div>

        <div style="padding-top: 20px; border-top: 1px solid var(--border-color); font-size: 0.85rem; color: var(--text-dim);">
          Primary: <span style="color: var(--accent-cyan); cursor: pointer;" onclick="copyToClipboard('${prof.email}', 'Primary email copied!')">${prof.email}</span> | 
          Alternate: <span style="color: var(--accent-cyan); cursor: pointer;" onclick="copyToClipboard('${prof.alternateEmail}', 'Alternate email copied!')">${prof.alternateEmail}</span>
        </div>
      </div>
    </div>
  `;
}

function attachCardGlowEffect() {
  document.querySelectorAll(".case-card, .bento-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    });
  });
}

// --------------------------------------------------------------------------
// COMMAND PALETTE (Cmd + K / Ctrl + K)
// --------------------------------------------------------------------------
function initCommandPalette() {
  const overlay = document.getElementById("cmdPaletteOverlay");
  const input = document.getElementById("cmdSearchInput");
  const triggerBtn = document.getElementById("cmdPaletteBtn");
  const resultsContainer = document.getElementById("cmdResultsList");

  if (!overlay || !input) return;

  const openCmd = () => {
    overlay.classList.add("open");
    input.value = "";
    input.focus();
    renderCmdResults("");
  };

  const closeCmd = () => {
    overlay.classList.remove("open");
  };

  if (triggerBtn) triggerBtn.addEventListener("click", openCmd);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeCmd();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (overlay.classList.contains("open")) closeCmd();
      else openCmd();
    }
    if (e.key === "Escape") {
      if (overlay.classList.contains("open")) closeCmd();
    }
  });

  input.addEventListener("input", (e) => {
    renderCmdResults(e.target.value);
  });

  function renderCmdResults(query) {
    const q = query.toLowerCase().trim();
    const commands = [
      {
        name: "Go to Home View",
        category: "Navigation",
        shortcut: "H",
        action: () => {
          Router.navigate("#home");
          closeCmd();
        }
      },
      {
        name: "Explore Case Studies Directory",
        category: "Navigation",
        shortcut: "C",
        action: () => {
          Router.navigate("#case-studies");
          closeCmd();
        }
      },
      {
        name: "View National Podium Finishes",
        category: "Navigation",
        shortcut: "P",
        action: () => {
          Router.navigate("#podium");
          closeCmd();
        }
      },
      {
        name: "Open Interactive Resume",
        category: "Navigation",
        shortcut: "R",
        action: () => {
          Router.navigate("#resume");
          closeCmd();
        }
      },
      {
        name: "Go to Career & Experience Timeline",
        category: "Navigation",
        shortcut: "E",
        action: () => {
          Router.navigate("#experience");
          closeCmd();
        }
      },
      {
        name: "View Financial Model Impact Analyzer (AI Agent)",
        category: "Case Study",
        shortcut: "A",
        action: () => {
          Router.navigate("#case/financial-model-analyzer");
          closeCmd();
        }
      },
      {
        name: "View Product Thinking Vault",
        category: "Navigation",
        shortcut: "F",
        action: () => {
          Router.navigate("#frameworks");
          closeCmd();
        }
      },
      {
        name: "About Me & PM Vision",
        category: "Navigation",
        shortcut: "A",
        action: () => {
          Router.navigate("#about");
          closeCmd();
        }
      },
      {
        name: "Toggle Dark / Light Theme",
        category: "Action",
        shortcut: "T",
        action: () => {
          document.getElementById("themeToggleBtn")?.click();
          closeCmd();
        }
      },
      {
        name: "Copy Primary Email (arnavokhadeofficial@gmail.com)",
        category: "Action",
        shortcut: "M",
        action: () => {
          copyToClipboard("arnavokhadeofficial@gmail.com", "Primary email copied!");
          closeCmd();
        }
      },
      {
        name: "Copy Alternate Email (arnavokhade9@gmail.com)",
        category: "Action",
        shortcut: "Alt+M",
        action: () => {
          copyToClipboard("arnavokhade9@gmail.com", "Alternate email copied!");
          closeCmd();
        }
      }
    ];

    // Add individual case studies to command palette
    PORTFOLIO_DATA.caseStudies.forEach((cs) => {
      commands.push({
        name: cs.title,
        category: "Case Study",
        shortcut: "Enter",
        action: () => {
          Router.navigate(`#case/${cs.id}`);
          closeCmd();
        }
      });
    });

    const filtered = q ? commands.filter((c) => c.name.toLowerCase().includes(q)) : commands;

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<li style="padding: 16px; color: var(--text-dim); text-align: center;">No matching actions</li>`;
      return;
    }

    resultsContainer.innerHTML = filtered
      .map(
        (c, idx) => `
      <li class="cmd-item ${idx === 0 ? "selected" : ""}" onclick="executeCmdAction(${idx})">
        <div>
          <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--accent-cyan); margin-right: 8px;">${c.category}</span>
          <span>${c.name}</span>
        </div>
        <span class="cmd-shortcut">${c.shortcut}</span>
      </li>
    `
      )
      .join("");

    window._currentCmdFiltered = filtered;
  }
}

function executeCmdAction(index) {
  if (window._currentCmdFiltered && window._currentCmdFiltered[index]) {
    window._currentCmdFiltered[index].action();
  }
}

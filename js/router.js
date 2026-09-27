// ==========================================================================
// ARNAV OKHADE PM PORTFOLIO - CLIENT-SIDE ROUTER
// Hash-based routing with smooth view transitions & deep-linking
// ==========================================================================

const Router = {
  routes: {},
  currentRoute: null,
  viewport: null,

  init(viewportId) {
    this.viewport = document.getElementById(viewportId);
    window.addEventListener("hashchange", () => this.handleRoute());
    
    // Initial route load
    if (!window.location.hash) {
      window.location.hash = "#home";
    } else {
      this.handleRoute();
    }
  },

  register(path, handler) {
    this.routes[path] = handler;
  },

  navigate(path) {
    window.location.hash = path;
  },

  handleRoute() {
    const rawHash = window.location.hash.slice(1) || "home";
    const parts = rawHash.split("/");
    const basePath = parts[0];
    const param = parts[1] || null;

    // Update active nav links
    this.updateActiveNav(basePath);

    // View transition effect
    if (this.viewport) {
      this.viewport.classList.add("view-exit");
      
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        if (basePath === "case" && param) {
          if (this.routes["case"]) {
            this.routes["case"](param);
          }
        } else if (this.routes[basePath]) {
          this.routes[basePath]();
        } else {
          this.routes["home"]();
        }

        this.viewport.classList.remove("view-exit");
        this.viewport.classList.add("view-enter");

        setTimeout(() => {
          this.viewport.classList.remove("view-enter");
        }, 300);
      }, 150);
    }
  },

  updateActiveNav(currentBase) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const targetHash = href.replace("#", "");
      if (targetHash === currentBase || (currentBase === "case" && targetHash === "case-studies")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
};

window.Router = Router;

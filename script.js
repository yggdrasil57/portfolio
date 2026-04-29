const localeData = {
  fr: window.portfolioData,
  en: window.portfolioDataEn
};

const uiText = window.portfolioUi || {};
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const storedLocale = localStorage.getItem("portfolio-language");

let currentLocale = localeData[storedLocale] ? storedLocale : "fr";
let data = localeData[currentLocale] || localeData.fr;
let activeCubeFilter = null;
let currentPageId = "accueil";
let pageNavigationReady = false;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function t(key) {
  return uiText[currentLocale]?.[key] || uiText.fr?.[key] || key;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function listItems(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function tagList(items) {
  return items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
}

function getSafeUrl(value, allowedProtocols = ["http:", "https:", "file:"]) {
  if (!value) return "";

  try {
    const url = new URL(value, window.location.href);
    return allowedProtocols.includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function safeCssToken(value, fallback = "accent") {
  return /^[a-z0-9-]+$/i.test(value || "") ? value : fallback;
}

function documentCountLabel(count) {
  if (!count) return t("documentationOnRequest");
  if (currentLocale === "fr") {
    return `${count} fichier${count > 1 ? "s" : ""}`;
  }
  return `${count} file${count > 1 ? "s" : ""}`;
}

function getPageSections() {
  return $$(".page-section[data-page]");
}

function getPageIds() {
  return [...new Set(getPageSections().map((section) => section.dataset.page).filter(Boolean))];
}

function getHashId(hash = window.location.hash) {
  if (!hash || hash === "#") return "";

  try {
    return decodeURIComponent(hash.replace(/^#/, ""));
  } catch {
    return hash.replace(/^#/, "");
  }
}

function getRouteFromHash(hash = window.location.hash) {
  const hashId = getHashId(hash);
  const pageIds = getPageIds();

  if (!hashId) {
    return { pageId: "accueil", targetId: "accueil" };
  }

  const target = document.getElementById(hashId);
  const targetPage = target?.closest?.(".page-section[data-page]")?.dataset.page;
  if (targetPage) {
    return { pageId: targetPage, targetId: hashId };
  }

  if (pageIds.includes(hashId)) {
    return { pageId: hashId, targetId: hashId };
  }

  return null;
}

function getCurrentRoute() {
  return getRouteFromHash(window.location.hash) || { pageId: "accueil", targetId: "accueil" };
}

function getPageLabel(pageId) {
  const link = $$(".nav-panel a[href^='#']").find((navLink) => getRouteFromHash(navLink.getAttribute("href"))?.pageId === pageId);
  return link?.textContent.trim() || "";
}

function updatePageTitle(pageId) {
  if (pageId === "accueil") {
    document.title = t("pageTitle");
    return;
  }

  const label = getPageLabel(pageId);
  document.title = label ? `${label} | ${data.profile.name}` : t("pageTitle");
}

function updatePageLinks(pageId) {
  const links = $$(".brand[href^='#'], .nav-panel a[href^='#'], .route-card[href^='#'], .footer-inner a[href^='#']");

  links.forEach((link) => {
    const route = getRouteFromHash(link.getAttribute("href"));
    const isActive = route?.pageId === pageId && route.targetId !== "navigation-portfolio";

    link.classList.toggle("is-active", Boolean(isActive));

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function getPrimarySectionId(pageId) {
  return getPageSections().find((section) => section.dataset.page === pageId)?.id || pageId;
}

function getSectionNavigationItems() {
  const pageItems = getPageIds().map((pageId) => ({
    pageId,
    targetId: getPrimarySectionId(pageId),
    label: getPageLabel(pageId) || t("navHome")
  }));

  return [
    ...pageItems,
    {
      pageId: "mentions-legales",
      href: "mentions-legales.html",
      label: t("legalLink")
    }
  ];
}

function updateSectionNavigation(pageId) {
  const nav = $("[data-section-nav]");
  if (!nav) return;

  const items = getSectionNavigationItems();
  const index = items.findIndex((item) => item.pageId === pageId);
  const isReady = items.length > 1 && index >= 0;

  nav.hidden = !isReady;
  if (!isReady) return;

  const previousButton = $("[data-section-nav-prev]", nav);
  const nextButton = $("[data-section-nav-next]", nav);
  const count = $("[data-section-nav-count]", nav);
  const label = $("[data-section-nav-label]", nav);
  const currentItem = items[index];

  if (count) {
    count.textContent = `${index + 1} / ${items.length}`;
  }

  if (label) {
    label.textContent = currentItem.label;
  }

  [
    [previousButton, index === 0],
    [nextButton, index === items.length - 1]
  ].forEach(([button, disabled]) => {
    if (!button) return;
    button.disabled = disabled;
    button.setAttribute("aria-disabled", String(disabled));
  });
}

function pulseSectionButton(button) {
  if (!button || prefersReducedMotion) return;

  button.classList.remove("is-pulsing");
  void button.offsetWidth;
  button.classList.add("is-pulsing");
  window.setTimeout(() => button.classList.remove("is-pulsing"), 520);
}

function navigateSection(direction, sourceButton) {
  const items = getSectionNavigationItems();
  const currentIndex = items.findIndex((item) => item.pageId === currentPageId);
  const targetIndex = currentIndex + direction;

  if (currentIndex < 0 || targetIndex < 0 || targetIndex >= items.length) return;

  const targetItem = items[targetIndex];
  pulseSectionButton(sourceButton);

  if (targetItem.href) {
    window.setTimeout(
      () => {
        window.location.href = targetItem.href;
      },
      prefersReducedMotion ? 0 : 90
    );
    return;
  }

  activatePage(targetItem.pageId, {
    targetId: targetItem.targetId,
    scroll: true,
    updateHash: true
  });
}

function scrollToPageTarget(pageId, targetId, { smooth = true } = {}) {
  const target = document.getElementById(targetId);
  const targetPage = target?.closest?.(".page-section[data-page]")?.dataset.page;
  const fallback = getPageSections().find((section) => section.dataset.page === pageId);
  const scrollTarget = targetPage === pageId ? target : fallback;
  const headerOffset = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 72;
  const top = scrollTarget ? scrollTarget.getBoundingClientRect().top + window.scrollY : 0;
  const offset = scrollTarget?.id === "accueil" ? 0 : headerOffset + 12;
  const destination = scrollTarget?.id === "accueil" ? 0 : Math.max(0, top - offset);
  const behavior = smooth && !prefersReducedMotion ? "smooth" : "auto";

  if (scrollTarget?.id === "navigation-portfolio") {
    scrollTarget.scrollIntoView({ behavior, block: "start" });
    window.setTimeout(
      () => window.scrollBy({ top: -offset, behavior: "auto" }),
      behavior === "smooth" ? 420 : 0
    );
    return;
  }

  window.scrollTo({
    top: destination,
    behavior
  });
}

function activatePage(pageId = "accueil", { targetId = pageId, scroll = true, updateHash = false, smoothScroll = true } = {}) {
  const pageSections = getPageSections();
  const pageIds = getPageIds();
  const nextPageId = pageIds.includes(pageId) ? pageId : "accueil";
  const nextTargetId = targetId || nextPageId;

  currentPageId = nextPageId;
  document.documentElement.classList.add("has-page-routing");
  document.body.dataset.activePage = nextPageId;

  pageSections.forEach((section) => {
    const isActive = section.dataset.page === nextPageId;
    section.hidden = !isActive;
    section.classList.toggle("is-active-page", isActive);
    section.setAttribute("aria-hidden", String(!isActive));
  });

  updatePageLinks(nextPageId);
  updatePageTitle(nextPageId);
  updateSectionNavigation(nextPageId);

  if (updateHash) {
    const nextHash = `#${nextTargetId}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash);
    }
  }

  window.requestAnimationFrame(() => {
    if (scroll) {
      scrollToPageTarget(nextPageId, nextTargetId, { smooth: smoothScroll });
      window.requestAnimationFrame(setupReveal);
      window.setTimeout(setupReveal, smoothScroll ? 520 : 80);
      return;
    }

    setupReveal();
  });
}

function syncPageWithLocation({ scroll = false, smoothScroll = false } = {}) {
  const route = getCurrentRoute();
  activatePage(route.pageId, { targetId: route.targetId, scroll, smoothScroll });
}

function setStaticContent() {
  document.documentElement.lang = currentLocale;
  document.documentElement.dataset.locale = currentLocale;
  document.title = t("pageTitle");

  const description = $('meta[name="description"]');
  if (description) {
    description.setAttribute("content", t("metaDescription"));
  }

  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  $$("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  $$("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  $$("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });

  const languageToggle = $("[data-language-toggle]");
  if (languageToggle) {
    languageToggle.textContent = currentLocale === "fr" ? "EN" : "FR";
    languageToggle.setAttribute("aria-label", t("switchLanguage"));
    languageToggle.setAttribute("title", t("switchLanguage"));
  }

  updateThemeButtonLabel();
}

function updateThemeButtonLabel() {
  const button = $("[data-theme-toggle]");
  if (!button) return;

  const theme = document.documentElement.dataset.theme || "light";
  button.setAttribute("aria-label", theme === "dark" ? t("lightMode") : t("darkMode"));
}

function setProfileContent() {
  $$("[data-profile]").forEach((element) => {
    const key = element.dataset.profile;
    if (data.profile[key]) {
      element.textContent = data.profile[key];
    }
  });

  $$("[data-profile-link]").forEach((link) => {
    const key = link.dataset.profileLink;
    const value = data.profile[key];
    if (!value) {
      link.hidden = true;
      return;
    }

    link.hidden = false;

    if (key === "email") {
      link.href = `mailto:${value}`;
      link.textContent = value;
      return;
    }

    if (key === "cv") {
      const cvUrl = getSafeUrl(value);
      if (!cvUrl) {
        link.hidden = true;
        return;
      }

      link.href = cvUrl;
      link.setAttribute("download", data.profile.cvDownloadName || "Theo_BORTOLOTTO.pdf");
      return;
    }

    const safeUrl = getSafeUrl(value, ["http:", "https:"]);
    if (!safeUrl) {
      link.hidden = true;
      return;
    }

    link.href = safeUrl;
  });

  const targetRoles = $("#target-roles");
  if (targetRoles) {
    targetRoles.innerHTML = data.profile.targetRoles.map((role) => `<span>${escapeHtml(role)}</span>`).join("");
  }

  const jobDetails = $("#job-details");
  if (jobDetails) {
    jobDetails.innerHTML = data.profile.jobDetails
      .map(
        (detail) => `
          <div>
            <dt>${escapeHtml(detail.label)}</dt>
            <dd>${escapeHtml(detail.value)}</dd>
          </div>
        `
      )
      .join("");
  }

  $("#hero-metrics").innerHTML = data.profile.metrics
    .map(
      (metric) => `
        <div>
          <dt>${escapeHtml(metric.value)}</dt>
          <dd>${escapeHtml(metric.label)}</dd>
        </div>
      `
    )
    .join("");

  $("#about-text").innerHTML = data.profile.about.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  $("#about-tags").innerHTML = data.profile.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  $("[data-current-year]").textContent = new Date().getFullYear();
}

function renderSkills() {
  $("#skills-grid").innerHTML = data.skills
    .map(
      (group) => `
        <article class="skill-card reveal">
          <h3>${escapeHtml(group.category)}</h3>
          <div class="skill-tags">
            ${tagList(group.items)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderContributions() {
  const container = $("#contribution-grid");
  if (!container) return;

  container.innerHTML = (data.contributions || [])
    .map((item) => {
      const icon = safeCssToken(item.icon, "support");
      const tone = safeCssToken(item.tone, "accent");

      return `
        <article class="contribution-card reveal" data-contribution-tone="${escapeHtml(tone)}">
          <span class="contribution-icon contribution-icon-${escapeHtml(icon)}" aria-hidden="true"></span>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTraitGrid(selector, items) {
  const container = $(selector);
  if (!container) return;

  container.innerHTML = (items || [])
    .map(
      (item) => `
        <article class="trait-card reveal">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderProfileExtras() {
  renderTraitGrid("#soft-skills-grid", data.softSkills);
  renderTraitGrid("#interests-grid", data.interests);
}

function renderFilters() {
  const allLabel = t("allFilter");
  const filters = [allLabel, ...data.cubeCategories];
  const active = filters.includes(activeCubeFilter) ? activeCubeFilter : allLabel;
  activeCubeFilter = active;

  $("#cube-filters").innerHTML = filters
    .map(
      (filter) => `
        <button
          class="filter-button ${filter === active ? "is-active" : ""}"
          type="button"
          data-filter="${escapeHtml(filter)}"
          aria-pressed="${filter === active ? "true" : "false"}"
        >
          ${escapeHtml(filter)}
        </button>
      `
    )
    .join("");
}

function renderCubes(filter = activeCubeFilter || t("allFilter")) {
  const allLabel = t("allFilter");
  const cubes = filter === allLabel ? data.cubes : data.cubes.filter((cube) => cube.category === filter);

  $("#cubes-grid").innerHTML = cubes
    .map((cube) => {
      const tools = cube.tools?.length ? cube.tools.slice(0, 4) : cube.technologies.slice(0, 4);
      const references = cube.references?.length ? cube.references.slice(0, 3) : [];
      const documentCount = cube.documents?.length || 0;

      return `
        <article class="cube-card reveal" data-category="${escapeHtml(cube.category)}">
          <div class="card-topline">
            <span>${escapeHtml(cube.category)}</span>
            <span>${escapeHtml(cube.year)}</span>
          </div>
          <h3>${escapeHtml(cube.title)}</h3>
          <p>${escapeHtml(cube.summary)}</p>
          <div class="case-block">
            <span>${escapeHtml(t("problemLabel"))}</span>
            <p>${escapeHtml(cube.problem)}</p>
          </div>
          <div class="cube-proof-grid">
            <div>
              <span>${escapeHtml(t("toolsLabel"))}</span>
              <div class="tag-row">${tagList(tools)}</div>
            </div>
            ${
              references.length
                ? `
                  <div>
                    <span>${escapeHtml(t("referencesLabel"))}</span>
                    <div class="tag-row">${tagList(references)}</div>
                  </div>
                `
                : ""
            }
            <div>
              <span>${escapeHtml(t("cubeDocumentsTitle"))}</span>
              <strong>${escapeHtml(documentCountLabel(documentCount))}</strong>
            </div>
          </div>
          <a class="text-button" href="cube.html?id=${encodeURIComponent(cube.id)}">
            ${escapeHtml(t("openCubePage"))}
          </a>
        </article>
      `;
    })
    .join("");

  setupReveal();
  setupInteractiveSurfaces($("#cubes-grid"));
}

function renderProjects() {
  $("#projects-grid").innerHTML = data.projects
    .map((project) => {
      const links = [
        project.github
          ? `<a href="${escapeHtml(getSafeUrl(project.github, ["http:", "https:"]))}" target="_blank" rel="noopener noreferrer">GitHub</a>`
          : "",
        project.demo ? `<a href="${escapeHtml(getSafeUrl(project.demo, ["http:", "https:"]))}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("demoLink"))}</a>` : ""
      ]
        .filter((link) => !link.includes('href=""'))
        .join("");
      const projectLinks = `<div class="project-links">${links || `<span>${escapeHtml(t("documentationOnRequest"))}</span>`}</div>`;

      return `
        <article class="project-card reveal">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="tag-row">${tagList(project.technologies)}</div>
          ${projectLinks}
        </article>
      `;
    })
    .join("");
}

function renderTimelineItems(items, { showDetails = false } = {}) {
  return items
    .map((item) => {
      const done = item.done || [];
      const learned = item.learned || [];

      return `
        <article class="timeline-item reveal">
          <time>${escapeHtml(item.period)}</time>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          ${
            showDetails && (done.length || learned.length)
              ? `
                <div class="experience-details ${learned.length ? "" : "single"}">
                  ${
                    done.length
                      ? `
                        <div>
                          <strong>${escapeHtml(t("doneLabel"))}</strong>
                          <ul>${listItems(done)}</ul>
                        </div>
                      `
                      : ""
                  }
                  ${
                    learned.length
                      ? `
                        <div>
                          <strong>${escapeHtml(t("learnedLabel"))}</strong>
                          <ul>${listItems(learned)}</ul>
                        </div>
                      `
                      : ""
                  }
                </div>
              `
              : ""
          }
        </article>
      `;
    })
    .join("");
}

function renderTimeline() {
  const currentEducation = data.educationCurrent;
  const education = data.education || [];
  const experiences = data.experiences || [];

  $("#current-education").innerHTML = currentEducation
    ? `
      <article class="current-education-card">
        <time>${escapeHtml(currentEducation.period)}</time>
        <h3>${escapeHtml(currentEducation.title)}</h3>
        <p>${escapeHtml(currentEducation.description)}</p>
      </article>
    `
    : "";

  $("#education-list").innerHTML = renderTimelineItems(education);
  $("#experience-list").innerHTML = renderTimelineItems(experiences, { showDetails: true });
}

function openCubeDialog(cubeId) {
  const cube = data.cubes.find((item) => item.id === cubeId);
  if (!cube) return;

  $("#cube-dialog-content").innerHTML = `
    <p class="eyebrow">${escapeHtml(cube.category)} · ${escapeHtml(cube.year)}</p>
    <h2 id="cube-dialog-title">${escapeHtml(cube.title)}</h2>
    <p class="dialog-summary">${escapeHtml(cube.summary)}</p>
    <div class="dialog-grid">
      <section>
        <h3>${escapeHtml(t("problemLabel"))}</h3>
        <p>${escapeHtml(cube.problem)}</p>
      </section>
      <section>
        <h3>${escapeHtml(t("contextLabel"))}</h3>
        <p>${escapeHtml(cube.context)}</p>
      </section>
      <section>
        <h3>${escapeHtml(t("solutionLabel"))}</h3>
        <p>${escapeHtml(cube.solution)}</p>
      </section>
      <section>
        <h3>${escapeHtml(t("resultLabel"))}</h3>
        <p>${escapeHtml(cube.result)}</p>
      </section>
      <section>
        <h3>${escapeHtml(t("technologiesLabel"))}</h3>
        <div class="tag-row">${tagList(cube.technologies)}</div>
      </section>
      <section>
        <h3>${escapeHtml(t("toolsLabel"))}</h3>
        <div class="tag-row">${tagList(cube.tools || cube.technologies)}</div>
      </section>
      <section>
        <h3>${escapeHtml(t("referencesLabel"))}</h3>
        <div class="tag-row">${tagList(cube.references || [])}</div>
      </section>
      <section>
        <h3>${escapeHtml(t("deliverablesLabel"))}</h3>
        <ul>${listItems(cube.deliverables)}</ul>
      </section>
      <section>
        <h3>${escapeHtml(t("competenciesLabel"))}</h3>
        <ul>${listItems(cube.competencies)}</ul>
      </section>
    </div>
  `;

  const dialog = $("#cube-dialog");
  dialog.showModal();
  $("[data-dialog-close]").focus();
}

function renderPage({ resetFilter = false } = {}) {
  if (resetFilter) {
    activeCubeFilter = null;
  }

  setStaticContent();
  setProfileContent();
  renderContributions();
  renderSkills();
  renderProfileExtras();
  renderFilters();
  renderCubes();
  renderProjects();
  renderTimeline();
  setupReveal();
  setupInteractiveSurfaces();

  if (pageNavigationReady) {
    syncPageWithLocation({ scroll: false });
  }
}

function setupInteractions() {
  const header = $("[data-header]");
  const navToggle = $("[data-nav-toggle]");
  const navPanel = $("[data-nav-panel]");
  const backToTop = $("[data-back-to-top]");
  const root = document.documentElement;

  const setMenuState = (isOpen) => {
    navPanel.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? t("closeMenu") : t("openMenu"));
  };

  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));

    header.classList.toggle("is-scrolled", scrolled);
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
    root.style.setProperty("--scroll-progress", progress.toFixed(4));
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener("click", () => {
    setMenuState(!navPanel.classList.contains("is-open"));
  });

  $$(".nav-panel a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  $("#cube-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    activeCubeFilter = button.dataset.filter;
    $$(".filter-button").forEach((filterButton) => {
      const active = filterButton === button;
      filterButton.classList.toggle("is-active", active);
      filterButton.setAttribute("aria-pressed", String(active));
    });

    renderCubes(activeCubeFilter);
  });

  $("#cubes-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-cube-id]");
    if (button) {
      openCubeDialog(button.dataset.cubeId);
    }
  });

  $("[data-dialog-close]").addEventListener("click", () => $("#cube-dialog").close());
  $("#cube-dialog").addEventListener("click", (event) => {
    if (event.target.id === "cube-dialog") {
      event.target.close();
    }
  });

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));

}

function setupSectionNavigationControls() {
  const nav = $("[data-section-nav]");
  if (!nav) return;

  const previousButton = $("[data-section-nav-prev]", nav);
  const nextButton = $("[data-section-nav-next]", nav);

  previousButton?.addEventListener("click", () => navigateSection(-1, previousButton));
  nextButton?.addEventListener("click", () => navigateSection(1, nextButton));
}

function setupPageNavigation() {
  const pageIds = getPageIds();
  if (!pageIds.length) return;

  pageNavigationReady = true;
  setupSectionNavigationControls();
  syncPageWithLocation({ scroll: Boolean(getRouteFromHash(window.location.hash)) });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#']");
    if (!link || link.hasAttribute("download") || link.target) return;

    const route = getRouteFromHash(link.getAttribute("href"));
    if (!route || !pageIds.includes(route.pageId)) return;

    event.preventDefault();

    const navPanel = $("[data-nav-panel]");
    const navToggle = $("[data-nav-toggle]");
    if (navPanel && navToggle) {
      navPanel.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", t("openMenu"));
    }

    activatePage(route.pageId, {
      targetId: route.targetId,
      scroll: true,
      updateHash: true
    });
  });

  window.addEventListener("hashchange", () => syncPageWithLocation({ scroll: true }));
  window.addEventListener("popstate", () => syncPageWithLocation({ scroll: true }));
}

function setupInteractiveSurfaces(root = document) {
  if (prefersReducedMotion) return;

  const surfaces = [
    ".search-card",
    ".skill-card",
    ".cube-card",
    ".project-card",
    ".contribution-card",
    ".route-card",
    ".trait-card",
    ".recognition-card",
    ".about-proof-panel > div"
  ].join(",");

  $$(surfaces, root).forEach((surface) => {
    if (surface.dataset.surfaceReady) return;
    surface.dataset.surfaceReady = "true";

    surface.addEventListener("pointermove", (event) => {
      const rect = surface.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      surface.style.setProperty("--mx", `${x.toFixed(1)}%`);
      surface.style.setProperty("--my", `${y.toFixed(1)}%`);
    });

    surface.addEventListener("pointerleave", () => {
      surface.style.removeProperty("--mx");
      surface.style.removeProperty("--my");
    });
  });
}

function setupTheme() {
  const button = $("[data-theme-toggle]");
  if (!button) return;

  const storedTheme = localStorage.getItem("portfolio-theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const initialTheme = storedTheme || systemTheme;
  const themeColor = $('meta[name="theme-color"]');

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    themeColor?.setAttribute("content", theme === "dark" ? "#121417" : "#f7f8f7");
    updateThemeButtonLabel();
  };

  const toggleTheme = () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", nextTheme);
    applyTheme(nextTheme);
  };

  applyTheme(initialTheme);

  button.addEventListener("click", toggleTheme);
  button.addEventListener(
    "touchend",
    (event) => {
      event.preventDefault();
      toggleTheme();
    },
    { passive: false }
  );
}

function setupLanguageToggle() {
  const button = $("[data-language-toggle]");
  if (!button) return;

  button.addEventListener("click", () => {
    currentLocale = currentLocale === "fr" ? "en" : "fr";
    data = localeData[currentLocale];
    localStorage.setItem("portfolio-language", currentLocale);

    const dialog = $("#cube-dialog");
    if (dialog.open) {
      dialog.close();
    }

    const navPanel = $("[data-nav-panel]");
    const navToggle = $("[data-nav-toggle]");
    navPanel.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", t("openMenu"));

    renderPage({ resetFilter: true });
  });
}

function setupHeroVisual() {
  const card = $("[data-tilt-card]");
  if (!card || prefersReducedMotion) return;

  const resetTilt = () => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty("--tilt-x", `${(x * 5).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(-y * 5).toFixed(2)}deg`);
  });

  card.addEventListener("pointerleave", resetTilt);
  card.addEventListener("blur", resetTilt, true);
}

function setupReveal() {
  const elements = $$(".reveal:not(.is-visible)");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const isAlreadyInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
  };

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => {
    if (element.closest(".hero") || isAlreadyInView(element)) {
      element.classList.add("is-visible");
      return;
    }

    observer.observe(element);
  });
}

setupTheme();
setupInteractions();
setupLanguageToggle();
setupHeroVisual();
renderPage();
setupPageNavigation();

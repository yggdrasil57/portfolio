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

    if (key === "phone") {
      link.href = `tel:${value.replace(/[^\d+]/g, "")}`;
      link.textContent = value;
      return;
    }

    if (key === "cv") {
      link.href = value;
      link.setAttribute("download", data.profile.cvDownloadName || "Theo_BORTOLOTTO.pdf");
      return;
    }

    link.href = value;
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
    .map(
      (cube) => `
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
          <div class="tag-row">${tagList(cube.technologies.slice(0, 4))}</div>
          <a class="text-button" href="cube.html?id=${encodeURIComponent(cube.id)}">
            ${escapeHtml(t("openCubePage"))}
          </a>
        </article>
      `
    )
    .join("");

  setupReveal();
}

function renderProjects() {
  $("#projects-grid").innerHTML = data.projects
    .map((project) => {
      const links = [
        project.github
          ? `<a href="${escapeHtml(project.github)}" target="_blank" rel="noreferrer">GitHub</a>`
          : "",
        project.demo ? `<a href="${escapeHtml(project.demo)}" target="_blank" rel="noreferrer">${escapeHtml(t("demoLink"))}</a>` : ""
      ]
        .filter(Boolean)
        .join("");

      return `
        <article class="project-card reveal">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="tag-row">${tagList(project.technologies)}</div>
          <div class="project-links">
            ${links || `<span>${escapeHtml(t("documentationOnRequest"))}</span>`}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTimelineItems(items, { showDetails = false } = {}) {
  return items
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <time>${escapeHtml(item.period)}</time>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          ${
            showDetails
              ? `
                <div class="experience-details">
                  <div>
                    <strong>${escapeHtml(t("doneLabel"))}</strong>
                    <ul>${listItems(item.done || [])}</ul>
                  </div>
                  <div>
                    <strong>${escapeHtml(t("learnedLabel"))}</strong>
                    <ul>${listItems(item.learned || [])}</ul>
                  </div>
                </div>
              `
              : ""
          }
        </article>
      `
    )
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
  renderSkills();
  renderProfileExtras();
  renderFilters();
  renderCubes();
  renderProjects();
  renderTimeline();
  setupReveal();
}

function setupInteractions() {
  const header = $("[data-header]");
  const navToggle = $("[data-nav-toggle]");
  const navPanel = $("[data-nav-panel]");
  const backToTop = $("[data-back-to-top]");

  const setMenuState = (isOpen) => {
    navPanel.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? t("closeMenu") : t("openMenu"));
  };

  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    header.classList.toggle("is-scrolled", scrolled);
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
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

function setupTheme() {
  const button = $("[data-theme-toggle]");
  const storedTheme = localStorage.getItem("portfolio-theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const initialTheme = storedTheme || systemTheme;

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    updateThemeButtonLabel();
  };

  applyTheme(initialTheme);

  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", nextTheme);
    applyTheme(nextTheme);
  });
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

function setupReveal() {
  const elements = $$(".reveal:not(.is-visible)");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

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

  elements.forEach((element) => observer.observe(element));
}

setupTheme();
setupInteractions();
setupLanguageToggle();
renderPage();

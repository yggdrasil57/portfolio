const localeData = {
  fr: window.portfolioData,
  en: window.portfolioDataEn
};

const uiText = window.portfolioUi || {};
const storedLocale = localStorage.getItem("portfolio-language");

let currentLocale = localeData[storedLocale] ? storedLocale : "fr";
let data = localeData[currentLocale] || localeData.fr;
let activeDocumentIndex = 0;

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
  return (items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function tagList(items) {
  return (items || []).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
}

function getDocumentUrl(documentItem) {
  if (!documentItem?.path) return "";

  try {
    const url = new URL(documentItem.path, window.location.href);
    const safeProtocols = ["http:", "https:", "file:"];
    return safeProtocols.includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function getDownloadName(documentItem) {
  const pathName = documentItem?.path?.split("/").pop();
  return pathName || `${documentItem?.label || "document"}.pdf`;
}

function shouldUseInlinePdfViewer() {
  const smallViewport = window.matchMedia("(max-width: 760px)").matches;
  const touchDevice = window.matchMedia("(pointer: coarse)").matches;
  return !(smallViewport || touchDevice);
}

function getCube() {
  const params = new URLSearchParams(window.location.search);
  const cubeId = params.get("id");
  return data.cubes.find((cube) => cube.id === cubeId) || data.cubes[0];
}

function setStaticContent() {
  document.documentElement.lang = currentLocale;
  document.documentElement.dataset.locale = currentLocale;

  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  $$("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  $$("[data-profile]").forEach((element) => {
    const key = element.dataset.profile;
    if (data.profile[key]) {
      element.textContent = data.profile[key];
    }
  });

  const languageToggle = $("[data-language-toggle]");
  if (languageToggle) {
    languageToggle.textContent = currentLocale === "fr" ? "EN" : "FR";
    languageToggle.setAttribute("aria-label", t("switchLanguage"));
    languageToggle.setAttribute("title", t("switchLanguage"));
  }

  $("[data-current-year]").textContent = new Date().getFullYear();
  updateThemeButtonLabel();
}

function updateThemeButtonLabel() {
  const button = $("[data-theme-toggle]");
  if (!button) return;

  const theme = document.documentElement.dataset.theme || "light";
  button.setAttribute("aria-label", theme === "dark" ? t("lightMode") : t("darkMode"));
}

function renderDocumentActions(cube) {
  const documents = cube.documents || [];

  $("#cube-document-actions").innerHTML = documents
    .map(
      (documentItem, index) => `
        <button class="btn btn-secondary" type="button" data-document-index="${index}">
          ${escapeHtml(t("openDocument"))} ${escapeHtml(documentItem.type)}
        </button>
      `
    )
    .join("");
}

function renderMeta(cube) {
  $("#cube-detail-meta").innerHTML = `
    <div class="card-topline">
      <span>${escapeHtml(cube.category)}</span>
      <span>${escapeHtml(cube.year)}</span>
    </div>
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
  `;
}

function renderDocumentEmbed(selectedDocument) {
  const documentUrl = getDocumentUrl(selectedDocument);
  if (!documentUrl) {
    return `
      <div class="viewer-empty">
        <p>${escapeHtml(t("noEmbeddedViewer"))}</p>
      </div>
    `;
  }

  const fileName = getDownloadName(selectedDocument);
  const documentActions = `
    <div class="document-file-actions">
      <a class="btn btn-primary btn-small" href="${escapeHtml(documentUrl)}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(t("openPdfExternal"))}
      </a>
      <a class="btn btn-secondary btn-small" href="${escapeHtml(documentUrl)}" download="${escapeHtml(fileName)}">
        ${escapeHtml(t("downloadPdf"))}
      </a>
    </div>
  `;

  if (selectedDocument.viewer === "pdf" || selectedDocument.type === "PDF") {
    if (!shouldUseInlinePdfViewer()) {
      return `
        <div class="document-open-panel">
          <p>${escapeHtml(t("mobilePdfNotice"))}</p>
          ${documentActions}
        </div>
      `;
    }

    return `
      <div class="document-frame-wrap">
        ${documentActions}
        <iframe
          class="document-frame"
          title="${escapeHtml(selectedDocument.label)}"
          src="${escapeHtml(`${documentUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`)}"
          loading="lazy"
          referrerpolicy="no-referrer"
        ></iframe>
      </div>
    `;
  }

  return `
    <div class="viewer-empty viewer-empty-compact">
      <p>${escapeHtml(t("noEmbeddedViewer"))}</p>
      ${documentActions}
    </div>
  `;
}

function renderViewer(cube, documentIndex = activeDocumentIndex) {
  const documents = cube.documents || [];
  const selectedDocument = documents[documentIndex];

  if (!selectedDocument) {
    $("#document-viewer").innerHTML = `
      <div class="viewer-empty">
        <p>${escapeHtml(t("noEmbeddedViewer"))}</p>
      </div>
    `;
    return;
  }

  const previewSections = selectedDocument.sections || cube.documentPreview || [];

  $("#document-viewer").innerHTML = `
    <div class="internal-viewer" role="region" aria-label="${escapeHtml(selectedDocument.label)}">
      <div class="internal-viewer-header">
        <div>
          <span>${escapeHtml(t("viewerSelectedLabel"))}</span>
          <strong>${escapeHtml(selectedDocument.label)}</strong>
          ${selectedDocument.summary ? `<p>${escapeHtml(selectedDocument.summary)}</p>` : ""}
        </div>
        <span class="viewer-file-type">${escapeHtml(selectedDocument.type)}</span>
      </div>
      ${renderDocumentEmbed(selectedDocument)}
      <div class="document-summary-panel">
        <div class="document-summary-heading">
          <span>${escapeHtml(t("documentSummaryLabel"))}</span>
        </div>
        <div class="internal-viewer-pages">
          ${previewSections
            .map(
              (section, index) => `
                <article class="viewer-page">
                  <span>${escapeHtml(t("viewerPageLabel"))} ${index + 1}</span>
                  <h3>${escapeHtml(section.title)}</h3>
                  <ul>${listItems(section.items)}</ul>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderDocumentList(cube) {
  const documents = cube.documents || [];

  $("#document-list").innerHTML = documents.length
    ? documents
        .map(
          (documentItem, index) => `
            <button class="document-link" type="button" data-document-index="${index}">
              <span>${escapeHtml(documentItem.type)}</span>
              <strong>${escapeHtml(documentItem.label)}</strong>
            </button>
          `
        )
        .join("")
    : `<p class="muted-text">${escapeHtml(t("documentationOnRequest"))}</p>`;
}

function updateDocumentButtons() {
  $$("[data-document-index]").forEach((button) => {
    const isActive = Number(button.dataset.documentIndex) === activeDocumentIndex;
    button.classList.toggle("is-active", isActive);
  });
}

function selectDocument(cube, index) {
  activeDocumentIndex = index;
  renderViewer(cube, activeDocumentIndex);
  updateDocumentButtons();
}

function scrollDocumentViewerIntoView(behavior = "smooth") {
  $("#document-viewer").scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : behavior,
    block: "start"
  });
}

function setupDocumentSelection(cube) {
  const selectFromEvent = (event) => {
    const button = event.target.closest("[data-document-index]");
    if (!button) return;

    selectDocument(cube, Number(button.dataset.documentIndex));

    if (button.closest("#cube-document-actions")) {
      scrollDocumentViewerIntoView();
    }
  };

  $("#cube-document-actions").onclick = selectFromEvent;
  $("#document-list").onclick = selectFromEvent;
}

function renderCubeDetail() {
  const cube = getCube();
  if (!cube) return;

  activeDocumentIndex = 0;
  document.title = `${cube.title} | Théo BORTOLOTTO`;
  $("#cube-detail-title").textContent = cube.title;
  $("#cube-detail-summary").textContent = cube.summary;

  renderDocumentActions(cube);
  renderMeta(cube);
  renderViewer(cube, activeDocumentIndex);
  renderDocumentList(cube);
  setupDocumentSelection(cube);
  updateDocumentButtons();

  if (window.location.hash === "#document-viewer") {
    window.setTimeout(() => scrollDocumentViewerIntoView("auto"), 80);
  }
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
    setStaticContent();
    renderCubeDetail();
  });
}

setupTheme();
setupLanguageToggle();
setStaticContent();
renderCubeDetail();

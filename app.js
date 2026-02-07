// ===================================
// FILE: app.js
// NOTES: Labeled sections for future edits
// ===================================

import { content } from "./content.js";

// ================================
// Helpers: DOM + text + links
// ================================
const $ = (id) => document.getElementById(id);

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value ?? "";
}

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function safeLink(href) {
  if (!href) return null;
  const v = String(href).trim();
  if (!v || v === "#") return null;
  if (v.toUpperCase().includes("PASTE_")) return null;
  return v;
}

function isExternal(href) {
  return /^https?:\/\//i.test(href);
}

function applyLinkTarget(a, href) {
  if (href && isExternal(href)) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
}

// ================================
// Copy helper: Contact buttons
// ================================
function copyText(text) {
  const v = String(text || "").trim();
  if (!v) return Promise.reject(new Error("Nothing to copy"));

  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(v);

  return new Promise((resolve, reject) => {
    const ta = document.createElement("textarea");
    ta.value = v;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      document.body.removeChild(ta);
      resolve();
    } catch (e) {
      document.body.removeChild(ta);
      reject(e);
    }
  });
}

function prettyHost(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

// ================================
// Icons: Contact tiles
// ================================
function iconSvg(kind) {
  if (kind === "email") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="1.8" />
        <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" stroke-width="1.8" />
      </svg>`;
  }
  if (kind === "github") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5c-5.25 0-9.5 4.2-9.5 9.4 0 4.14 2.7 7.65 6.44 8.89.47.08.64-.2.64-.46v-1.6c-2.62.56-3.17-1.1-3.17-1.1-.43-1.08-1.04-1.37-1.04-1.37-.85-.57.06-.56.06-.56.94.06 1.43.95 1.43.95.84 1.41 2.2 1.01 2.73.77.09-.6.33-1.01.6-1.24-2.1-.23-4.3-1.03-4.3-4.57 0-1.01.37-1.84.97-2.49-.1-.23-.42-1.17.09-2.44 0 0 .79-.25 2.6.95.75-.2 1.56-.3 2.36-.3.8 0 1.61.1 2.36.3 1.81-1.2 2.6-.95 2.6-.95.51 1.27.19 2.21.09 2.44.6.65.97 1.48.97 2.49 0 3.55-2.2 4.34-4.31 4.57.34.29.64.85.64 1.72v2.55c0 .26.17.55.65.46A9.43 9.43 0 0 0 21.5 11.9c0-5.2-4.25-9.4-9.5-9.4Z" fill="currentColor"/>
      </svg>`;
  }
  if (kind === "linkedin") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6.5 9.5V19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M6.5 6.8h0.01" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M10.2 19v-5.2c0-1.8 1-3 2.7-3 1.7 0 2.6 1.2 2.6 3V19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M10.2 9.5V19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>`;
  }
  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 14a4 4 0 0 1 0-6l1.2-1.2a4 4 0 0 1 5.6 5.6L16 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M14 10a4 4 0 0 1 0 6L12.8 17.2a4 4 0 0 1-5.6-5.6L8 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`;
}

// ================================
// Render: HERO
// ================================
function renderHero() {
  setText("brandName", content.site.name);
  setText("mobileBrand", content.site.name);
  setText("heroBadge", content.site.badge);
  setText("heroTitle", content.site.title);
  setText("heroSubtitle", content.site.subtitle);
  setText("footerText", content.site.footerText);

  const bullets = $("heroBullets");
  bullets.innerHTML = "";
  for (const b of content.site.bullets || []) {
    bullets.appendChild(createEl("li", "", b));
  }

  const links = $("heroLinks");
  links.innerHTML = "";
  for (const l of content.site.links || []) {
    const a = document.createElement("a");
    const isPrimary = l.style === "primary";
    a.className = `btn ${isPrimary ? "" : "ghost"}`.trim();
    a.textContent = l.label;

    const href = safeLink(l.href);
    a.href = href ?? "#";
    applyLinkTarget(a, href);

    if (!href) {
      a.setAttribute("aria-disabled", "true");
      a.style.opacity = "0.55";
      a.style.pointerEvents = "none";
    }

    links.appendChild(a);
  }

  const img = $("profileImage");
  img.src = content.site.profileImage;
  img.onerror = () => {
    img.removeAttribute("src");
    img.alt = "Add your photo and update content.site.profileImage";
    img.style.display = "block";
    img.style.padding = "18px";
  };

  const quick = $("quickCards");
  quick.innerHTML = "";
  for (const c of content.site.quickCards || []) {
    const card = createEl("div", "quick-card");
    card.appendChild(createEl("div", "k", c.key));
    card.appendChild(createEl("div", "v", c.value));
    quick.appendChild(card);
  }
}

// ================================
// Render: ABOUT
// ================================
function renderAbout() {
  const wrap = $("aboutCard");
  wrap.innerHTML = "";

  for (const p of content.about?.paragraphs || []) {
    wrap.appendChild(createEl("p", "item-text", p));
  }

  const hr = document.createElement("hr");
  hr.style.border = "none";
  hr.style.borderTop = "1px solid var(--border)";
  hr.style.margin = "14px 0";
  wrap.appendChild(hr);

  const pills = createEl("div", "pill-row");
  for (const h of content.about?.highlights || []) {
    pills.appendChild(createEl("span", "pill", h));
  }
  wrap.appendChild(pills);
}

// ================================
// Render: SKILLS
// ================================
function renderSkills() {
  const aside = $("skillsAside");
  const grid = $("skillsGrid");

  aside.innerHTML = "";
  grid.innerHTML = "";

  aside.appendChild(createEl("div", "item-title", content.skills?.introTitle || "Core strengths"));
  aside.appendChild(createEl("p", "item-text", content.skills?.introText || ""));

  const featuredWrap = createEl("div", "pill-row");
  for (const s of content.skills?.featured || []) {
    featuredWrap.appendChild(createEl("span", "pill", s.name || s));
  }
  aside.appendChild(featuredWrap);

  for (const group of content.skills?.groups || []) {
    const card = createEl("div", "card");

    const head = createEl("div", "skill-group-title");
    head.appendChild(createEl("div", "item-title", group.title));
    head.appendChild(createEl("span", "", group.caption ?? ""));
    card.appendChild(head);

    const list = createEl("div", "skill-items");
    for (const item of group.items || []) {
      list.appendChild(createEl("div", "skill-item", item.name || item));
    }
    card.appendChild(list);

    grid.appendChild(card);
  }
}

// ================================
// Render: EXPERIENCE
// ================================
function renderExperience() {
  const stack = $("experienceStack");
  stack.innerHTML = "";

  for (const exp of content.experience || []) {
    const card = createEl("div", "card");
    card.appendChild(createEl("div", "item-title", exp.org));
    card.appendChild(createEl("div", "item-meta", `${exp.dates} • ${exp.location}`));

    for (const role of exp.roles || []) {
      const roleTitle = createEl("div", "item-title", role.title);
      roleTitle.style.marginTop = "12px";
      roleTitle.style.fontSize = "16px";
      card.appendChild(roleTitle);

      card.appendChild(createEl("div", "item-meta", role.dates));

      const ul = document.createElement("ul");
      ul.className = "bullets";
      for (const b of role.bullets || []) ul.appendChild(createEl("li", "", b));
      card.appendChild(ul);
    }

    stack.appendChild(card);
  }
}

// ================================
// Render: EDUCATION
// ================================
function renderEducation() {
  const stack = $("educationStack");
  stack.innerHTML = "";

  for (const ed of content.education || []) {
    const card = createEl("div", "card");
    card.appendChild(createEl("div", "item-title", ed.school));
    card.appendChild(createEl("div", "item-meta", ed.dates));
    card.appendChild(createEl("div", "item-text", ed.program));

    if (ed.notes?.length) {
      const ul = document.createElement("ul");
      ul.className = "bullets";
      for (const n of ed.notes) ul.appendChild(createEl("li", "", n));
      card.appendChild(ul);
    }

    stack.appendChild(card);
  }
}

// ================================
// Projects: card builder
// ================================
function projectCard(p) {
  const card = createEl("div", "card");
  card.appendChild(createEl("div", "item-title", p.title));
  card.appendChild(createEl("div", "item-meta", `${p.category} • ${p.role} • ${p.dates}`));
  card.appendChild(createEl("p", "item-text", p.summary));

  const pills = createEl("div", "pill-row");
  for (const t of p.tags || []) pills.appendChild(createEl("span", "pill", t));
  card.appendChild(pills);

  const links = createEl("div", "cta-row");
  links.style.marginTop = "12px";

  const validLinks = (p.links || []).filter((l) => safeLink(l.href));
  for (const l of validLinks) {
    const a = createEl("a", "btn ghost", l.label);
    const href = safeLink(l.href);
    a.href = href ?? "#";
    applyLinkTarget(a, href);
    links.appendChild(a);
  }

  if (validLinks.length) card.appendChild(links);
  return card;
}

// ================================
// Render: PROJECTS (tabs + search)
// ================================
function renderProjects() {
  const filters = $("projectFilters");
  const grid = $("projectsGrid");
  const search = $("projectSearch");
  const count = $("projectCount");

  let active = "All";
  let query = "";

  const categories = (() => {
    const list = content.projectCategories?.slice?.() || [];
    if (!list.includes("All")) list.unshift("All");
    return list;
  })();

  function matches(p) {
    const inCat = active === "All" ? true : p.category === active;
    if (!inCat) return false;
    if (!query) return true;

    const q = query.toLowerCase();
    const blob = [
      p.title,
      p.category,
      p.role,
      p.dates,
      p.summary,
      ...(p.tags || [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return blob.includes(q);
  }

  function paint() {
    grid.innerHTML = "";
    const list = (content.projects || []).filter(matches);

    for (const p of list) grid.appendChild(projectCard(p));

    if (count) {
      const label = list.length === 1 ? "project" : "projects";
      count.textContent = `Showing ${list.length} ${label}`;
    }
  }

  function setActive(cat) {
    active = cat;

    const tabs = [...filters.querySelectorAll("button.filterTab")];
    for (const b of tabs) {
      const isOn = b.textContent === active;
      b.classList.toggle("isActive", isOn);
      b.setAttribute("aria-selected", isOn ? "true" : "false");
      b.tabIndex = isOn ? 0 : -1;
    }

    paint();
  }

  filters.innerHTML = "";
  for (const cat of categories) {
    const btn = createEl("button", "filterTab", cat);
    btn.type = "button";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", cat === active ? "true" : "false");
    btn.tabIndex = cat === active ? 0 : -1;

    btn.addEventListener("click", () => setActive(cat));

    btn.addEventListener("keydown", (e) => {
      const tabs = [...filters.querySelectorAll("button.filterTab")];
      const i = tabs.indexOf(btn);

      if (e.key === "ArrowRight") {
        e.preventDefault();
        tabs[(i + 1) % tabs.length].focus();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        tabs[(i - 1 + tabs.length) % tabs.length].focus();
      }
      if (e.key === "Home") {
        e.preventDefault();
        tabs[0].focus();
      }
      if (e.key === "End") {
        e.preventDefault();
        tabs[tabs.length - 1].focus();
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActive(btn.textContent);
      }
    });

    filters.appendChild(btn);
  }

  search.addEventListener("input", (e) => {
    query = e.target.value.trim();
    paint();
  });

  setActive(active);
}

// ================================
// Render: ARTICLES
// ================================
function renderArticles() {
  const grid = $("articlesGrid");
  grid.innerHTML = "";

  for (const a of content.articles || []) {
    const card = createEl("div", "card");
    card.appendChild(createEl("div", "item-title", a.title));
    card.appendChild(createEl("div", "item-meta", `${a.source} • ${a.date} • ${a.readTime}`));
    card.appendChild(createEl("p", "item-text", a.summary));

    const pills = createEl("div", "pill-row");
    for (const t of a.tags || []) pills.appendChild(createEl("span", "pill", t));
    card.appendChild(pills);

    const href = safeLink(a.href);
    if (href) {
      const linkRow = createEl("div", "cta-row");
      linkRow.style.marginTop = "12px";
      const link = createEl("a", "btn ghost", "Read");
      link.href = href;

      if (isExternal(href)) {
        link.target = a.target ?? "_blank";
        link.rel = a.rel ?? "noopener noreferrer";
      }

      linkRow.appendChild(link);
      card.appendChild(linkRow);
    }

    grid.appendChild(card);
  }
}

// ================================
// Render: CONTACT (interactive tiles + copy)
// ================================
function renderContact() {
  const card = $("contactCard");
  card.innerHTML = "";

  const wrap = createEl("div", "contact-wrap");
  const hint = createEl("div", "contact-hint", "Quick actions: open or copy a link.");
  wrap.appendChild(hint);

  const grid = createEl("div", "contact-grid");

  const items = [];

  if (content.contact?.email) {
    items.push({
      kind: "email",
      label: "Email",
      value: content.contact.email,
      href: `mailto:${content.contact.email}?subject=Hello%20J%20Roque`
    });
  }

  if (content.contact?.github) {
    items.push({
      kind: "github",
      label: "GitHub",
      value: prettyHost(content.contact.github),
      href: content.contact.github
    });
  }

  if (content.contact?.linkedin) {
    items.push({
      kind: "linkedin",
      label: "LinkedIn",
      value: prettyHost(content.contact.linkedin),
      href: content.contact.linkedin
    });
  }

  for (const o of content.contact?.other || []) {
    if (o?.label && o?.href) {
      items.push({
        kind: "link",
        label: o.label,
        value: prettyHost(o.href),
        href: o.href
      });
    }
  }

  for (const it of items) {
    const tile = createEl("div", "contact-item");

    const top = createEl("div", "contact-top");
    const icon = createEl("div", "contact-icon");
    icon.innerHTML = iconSvg(it.kind);
    top.appendChild(icon);

    const meta = createEl("div", "contact-meta");
    meta.appendChild(createEl("div", "contact-label", it.label));
    meta.appendChild(createEl("div", "contact-value", it.value));
    top.appendChild(meta);

    tile.appendChild(top);

    const actions = createEl("div", "contact-actions");

    const open = createEl("a", "btn small", "Open");
    open.href = it.href;
    open.target = "_blank";
    open.rel = "noopener noreferrer";
    actions.appendChild(open);

    const copyBtn = createEl("button", "btn ghost small", "Copy");
    copyBtn.type = "button";
    copyBtn.dataset.copy = it.href;
    actions.appendChild(copyBtn);

    tile.appendChild(actions);

    const toast = createEl("div", "contact-toast");
    toast.setAttribute("aria-live", "polite");
    tile.appendChild(toast);

    copyBtn.addEventListener("click", async () => {
      toast.textContent = "Copying...";
      try {
        await copyText(copyBtn.dataset.copy);
        toast.textContent = "Copied!";
        setTimeout(() => (toast.textContent = ""), 1200);
      } catch {
        toast.textContent = "Copy failed";
        setTimeout(() => (toast.textContent = ""), 1200);
      }
    });

    grid.appendChild(tile);
  }

  const allLinks = items.map((x) => `${x.label}: ${x.href}`).join("\n");
  const footerActions = createEl("div", "contact-actions");

  const copyAll = createEl("button", "btn ghost small", "Copy all");
  copyAll.type = "button";
  copyAll.addEventListener("click", async () => {
    hint.textContent = "Copying all links...";
    try {
      await copyText(allLinks);
      hint.textContent = "Copied all links.";
      setTimeout(() => (hint.textContent = "Quick actions: open or copy a link."), 1400);
    } catch {
      hint.textContent = "Copy failed.";
      setTimeout(() => (hint.textContent = "Quick actions: open or copy a link."), 1400);
    }
  });

  footerActions.appendChild(copyAll);

  wrap.appendChild(grid);
  wrap.appendChild(footerActions);
  card.appendChild(wrap);
}

// ================================
// Theme: toggle light/dark
// ================================
function initTheme() {
  const btn = $("themeToggle");
  const saved = localStorage.getItem("theme");

  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  } else {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  function syncLabel() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    btn.textContent = current === "dark" ? "Light" : "Dark";
  }

  syncLabel();

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncLabel();
  });
}

// ================================
// Mobile nav: open/close
// ================================
function initMobileNav() {
  const openBtn = $("navToggle");
  const closeBtn = $("navClose");
  const mobileNav = $("mobileNav");

  function openMenu() {
    document.body.setAttribute("data-menu-open", "true");
    mobileNav.setAttribute("aria-hidden", "false");
    closeBtn.focus();
  }

  function closeMenu() {
    document.body.setAttribute("data-menu-open", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    openBtn.focus();
  }

  openBtn.addEventListener("click", () => {
    const isOpen = document.body.getAttribute("data-menu-open") === "true";
    if (isOpen) closeMenu();
    else openMenu();
  });

  closeBtn.addEventListener("click", closeMenu);

  mobileNav.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-close]");
    if (a) closeMenu();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

// ================================
// App boot: run all renders + inits
// ================================
renderHero();
renderAbout();
renderSkills();
renderExperience();
renderEducation();
renderProjects();
renderArticles();
renderContact();
initTheme();
initMobileNav();

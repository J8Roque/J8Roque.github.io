import { content } from "./content.js";

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
  if (!href || href === "#") return null;
  return href;
}

function clampLevel(level) {
  const n = Number(level);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(5, n));
}

function levelToPercent(level) {
  return `${(clampLevel(level) / 5) * 100}%`;
}

function renderTopText() {
  setText("brandName", content.site.name);
  setText("mobileBrand", content.site.name);
  setText("heroBadge", content.site.badge);
  setText("heroTitle", content.site.title);
  setText("heroSubtitle", content.site.subtitle);
  setText("footerText", content.site.footerText);

  setText("aboutSubtitle", content.sectionText?.about ?? "");
  setText("skillsSubtitle", content.sectionText?.skills ?? "");
  setText("experienceSubtitle", content.sectionText?.experience ?? "");
  setText("educationSubtitle", content.sectionText?.education ?? "");
  setText("projectsSubtitle", content.sectionText?.projects ?? "");
  setText("articlesSubtitle", content.sectionText?.articles ?? "");
  setText("contactSubtitle", content.sectionText?.contact ?? "");
}

function renderHero() {
  const bullets = $("heroBullets");
  bullets.innerHTML = "";
  for (const b of content.site.bullets) {
    const li = document.createElement("li");
    li.textContent = b;
    bullets.appendChild(li);
  }

  const links = $("heroLinks");
  links.innerHTML = "";
  for (const l of content.site.links) {
    const a = document.createElement("a");
    a.className = `btn ${l.style === "primary" ? "primary" : ""}`.trim();
    a.textContent = l.label;

    const href = safeLink(l.href);
    a.href = href ?? "#";
    if (href) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    links.appendChild(a);
  }

  const img = $("profileImage");
  img.src = content.site.profileImage;
  img.onerror = () => {
    img.removeAttribute("src");
    img.alt = "Add your photo to the project folder and update content.site.profileImage";
    img.style.display = "block";
    img.style.padding = "18px";
  };

  const quick = $("quickCards");
  quick.innerHTML = "";
  for (const c of content.site.quickCards) {
    const card = createEl("div", "quick-card");
    card.appendChild(createEl("div", "k", c.key));
    card.appendChild(createEl("div", "v", c.value));
    quick.appendChild(card);
  }

  const mini = $("heroMini");
  mini.innerHTML = "";
  const strong = createEl("strong", "", "Quick note: ");
  const span = createEl(
    "span",
    "",
    "Everything here is built to be easy to scan, easy to read, and focused on real IT work."
  );
  mini.appendChild(strong);
  mini.appendChild(span);
}

function renderAbout() {
  const wrap = $("aboutCard");
  wrap.innerHTML = "";

  for (const p of content.about.paragraphs) {
    wrap.appendChild(createEl("p", "item-text", p));
  }

  const hr = document.createElement("hr");
  hr.style.border = "none";
  hr.style.borderTop = "1px solid var(--border)";
  hr.style.margin = "14px 0";
  wrap.appendChild(hr);

  const pills = createEl("div", "pill-row");
  for (const h of content.about.highlights) {
    pills.appendChild(createEl("span", "pill", h));
  }
  wrap.appendChild(pills);
}

function renderSkills() {
  const aside = $("skillsAside");
  const grid = $("skillsGrid");

  aside.innerHTML = "";
  grid.innerHTML = "";

  aside.appendChild(createEl("h3", "", content.skills.introTitle));
  aside.appendChild(createEl("p", "item-text", content.skills.introText));

  const featuredWrap = createEl("div", "pill-row");
  for (const s of content.skills.featured) {
    const level = clampLevel(s.level);
    const pill = createEl("span", `pill ${level >= 4 ? "strong" : ""}`, s.name);
    featuredWrap.appendChild(pill);
  }
  aside.appendChild(featuredWrap);

  for (const group of content.skills.groups) {
    const card = createEl("div", "card reveal");

    const head = createEl("div", "skill-group-title");
    head.appendChild(createEl("div", "item-title", group.title));
    head.appendChild(createEl("span", "", group.caption ?? ""));
    card.appendChild(head);

    const row = createEl("div", "pill-row");
    for (const item of group.items) {
      const chip = createEl("span", "skill-chip");
      const dot = createEl("i", "skill-dot");
      dot.setAttribute("aria-hidden", "true");
      chip.appendChild(dot);

      chip.appendChild(createEl("span", "", item.name));

      const meter = createEl("span", "meter");
      const fill = document.createElement("i");
      fill.style.width = levelToPercent(item.level);
      meter.appendChild(fill);
      chip.appendChild(meter);

      row.appendChild(chip);
    }

    card.appendChild(row);
    grid.appendChild(card);
  }
}

function renderExperience() {
  const stack = $("experienceStack");
  stack.innerHTML = "";

  for (const exp of content.experience) {
    const card = createEl("div", "card reveal");
    card.appendChild(createEl("div", "item-title", exp.org));
    card.appendChild(createEl("div", "item-meta", `${exp.dates} • ${exp.location}`));

    for (const role of exp.roles) {
      const roleTitle = createEl("div", "item-title", role.title);
      roleTitle.style.marginTop = "12px";
      roleTitle.style.fontSize = "16px";
      card.appendChild(roleTitle);

      card.appendChild(createEl("div", "item-meta", role.dates));

      const ul = document.createElement("ul");
      ul.className = "bullets";
      for (const b of role.bullets) ul.appendChild(createEl("li", "", b));
      card.appendChild(ul);
    }

    stack.appendChild(card);
  }
}

function renderEducation() {
  const stack = $("educationStack");
  stack.innerHTML = "";

  for (const ed of content.education) {
    const card = createEl("div", "card reveal");
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

function projectCard(p) {
  const card = createEl("div", "card reveal");
  card.appendChild(createEl("div", "item-title", p.title));
  card.appendChild(createEl("div", "item-meta", `${p.category} • ${p.role} • ${p.dates}`));
  card.appendChild(createEl("p", "item-text", p.summary));

  const pills = createEl("div", "pill-row");
  for (const t of p.tags ?? []) pills.appendChild(createEl("span", "pill", t));
  card.appendChild(pills);

  const links = createEl("div", "cta-row");
  links.style.marginTop = "12px";
  for (const l of p.links ?? []) {
    const a = createEl("a", "btn ghost", l.label);
    const href = safeLink(l.href);
    a.href = href ?? "#";
    if (href) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    links.appendChild(a);
  }
  card.appendChild(links);

  return card;
}

function renderProjects() {
  const filters = $("projectFilters");
  const grid = $("projectsGrid");
  const search = $("projectSearch");

  let active = "All";
  let query = "";

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
      ...(p.tags ?? [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return blob.includes(q);
  }

  function paint() {
    grid.innerHTML = "";
    const list = content.projects.filter(matches);
    for (const p of list) grid.appendChild(projectCard(p));
  }

  filters.innerHTML = "";
  for (const cat of content.projectCategories) {
    const btn = createEl("button", "filter-btn", cat);
    btn.type = "button";
    btn.setAttribute("aria-pressed", cat === active ? "true" : "false");
    btn.addEventListener("click", () => {
      active = cat;
      [...filters.querySelectorAll("button")].forEach((b) =>
        b.setAttribute("aria-pressed", b.textContent === active ? "true" : "false")
      );
      paint();
      revealNow();
    });
    filters.appendChild(btn);
  }

  search.addEventListener("input", (e) => {
    query = e.target.value.trim();
    paint();
    revealNow();
  });

  paint();
}

function renderArticles() {
  const grid = $("articlesGrid");
  grid.innerHTML = "";

  for (const a of content.articles) {
    const card = createEl("div", "card reveal");
    card.appendChild(createEl("div", "item-title", a.title));
    card.appendChild(createEl("div", "item-meta", `${a.source} • ${a.date} • ${a.readTime}`));
    card.appendChild(createEl("p", "item-text", a.summary));

    const pills = createEl("div", "pill-row");
    for (const t of a.tags ?? []) pills.appendChild(createEl("span", "pill", t));
    card.appendChild(pills);

    const href = safeLink(a.href);
    if (href) {
      const linkRow = createEl("div", "cta-row");
      linkRow.style.marginTop = "12px";
      const link = createEl("a", "btn ghost", "Read");
      link.href = href;
      link.target = a.target ?? "_blank";
      link.rel = a.rel ?? "noreferrer";
      linkRow.appendChild(link);
      card.appendChild(linkRow);
    }

    grid.appendChild(card);
  }
}

function renderContact() {
  const card = $("contactCard");
  card.innerHTML = "";

  card.appendChild(createEl("p", "item-text", "Best ways to reach me:"));

  const ul = document.createElement("ul");
  ul.className = "bullets";

  if (content.contact.email) ul.appendChild(createEl("li", "", `Email: ${content.contact.email}`));
  ul.appendChild(createEl("li", "", `GitHub: ${content.contact.github}`));
  ul.appendChild(createEl("li", "", `LinkedIn: ${content.contact.linkedin}`));

  for (const o of content.contact.other ?? []) {
    ul.appendChild(createEl("li", "", `${o.label}: ${o.href}`));
  }

  card.appendChild(ul);
}

function initTheme() {
  const btn = $("themeToggle");

  const saved = localStorage.getItem("theme");
  const initial = saved || "dark";
  document.documentElement.setAttribute("data-theme", initial);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

function initMobileNav() {
  const openBtn = $("navToggle");
  const closeBtn = $("navClose");
  const mobileNav = $("mobileNav");

  function openMenu() {
    document.body.setAttribute("data-menu-open", "true");
    mobileNav.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-label", "Menu open");
  }

  function closeMenu() {
    document.body.setAttribute("data-menu-open", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-label", "Open menu");
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

let observer;

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (observer) observer.disconnect();

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }
    },
    { root: null, threshold: 0.12 }
  );

  items.forEach((el) => observer.observe(el));
}

function revealNow() {
  const items = document.querySelectorAll(".reveal");
  items.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) el.classList.add("is-visible");
  });
}

renderTopText();
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
initReveal();
revealNow();

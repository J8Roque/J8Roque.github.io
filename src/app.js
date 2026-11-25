/* Portfolio interactions and repeated card rendering. Edit content in content.js. */
import { content } from './content.js?v=20261124-v3';

const $ = (id) => document.getElementById(id);
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));

const usableLink = (link) => {
  const href = String(link?.href || '').trim();
  return link?.available !== false && href && !href.includes('PASTE_') &&
    (/^https?:\/\//i.test(href) || /^\.\/assets\/pdf\/[^?#]+\.pdf$/i.test(href));
};

const icon = (name, className = 'line-icon') => {
  const paths = {
    support: '<path d="M5 12a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2h-2"/><path d="M5 12v4H3v-4h2Zm16 0v4h-2v-4h2ZM9 20h6"/>',
    server: '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/>',
    network: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.8 3.1 7.8 7.5 9.5 4.4-1.7 7.5-4.7 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-5"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/>',
    document: '<path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'
  };
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.document}</svg>`;
};

const linkHTML = (link) => `<a class="button button-secondary" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">${icon('document', 'button-icon')}${esc(link.label)}</a>`;

let activeCategory = 'All';
let searchQuery = '';
const filters = $('filters');

for (const category of content.projectCategories) {
  const button = document.createElement('button');
  button.className = 'filter';
  button.type = 'button';
  button.textContent = category;
  button.setAttribute('aria-pressed', String(category === activeCategory));
  button.addEventListener('click', () => {
    activeCategory = category;
    renderProjects();
  });
  filters.appendChild(button);
}

function renderProjects() {
  const query = searchQuery.toLowerCase();
  const projects = content.projects
    .map((project, index) => ({ ...project, index }))
    .filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const haystack = [project.title, project.category, project.projectType, project.role, project.summary, ...project.tags].join(' ').toLowerCase();
      return matchesCategory && haystack.includes(query);
    });

  [...filters.children].forEach((button) => button.setAttribute('aria-pressed', String(button.textContent === activeCategory)));
  $('projectCount').textContent = `${projects.length} of ${content.projects.length} projects${activeCategory === 'All' ? '' : ` in ${activeCategory}`}`;
  $('emptyState').hidden = projects.length > 0;

  $('projectsGrid').innerHTML = projects.map((project) => {
    const documentationAvailable = project.links.some(usableLink);
    return `<article class="project-card${project.index === 0 ? ' project-card-featured' : ''}">
      <div class="project-card-top">
        <span class="project-icon">${icon(project.icon)}</span>
        <span class="project-index">${String(project.index + 1).padStart(2, '0')}</span>
      </div>
      <div class="project-meta"><span>${esc(project.category)}</span><span>${esc(project.projectType)}</span></div>
      <h3>${esc(project.shortTitle)}</h3>
      <p>${esc(project.cardSummary)}</p>
      <div class="tags">${project.tags.slice(0, 4).map((tag) => `<span>${esc(tag)}</span>`).join('')}</div>
      <div class="project-card-bottom">
        <button class="project-action" type="button" data-project="${project.index}" aria-label="View case study: ${esc(project.shortTitle)}">View case study</button>
        <span class="document-state ${documentationAvailable ? 'available' : 'unavailable'}">${documentationAvailable ? 'Documentation' : 'Document unavailable'}</span>
      </div>
    </article>`;
  }).join('');
}

$('projectSearch').addEventListener('input', (event) => {
  searchQuery = event.target.value.trim();
  renderProjects();
});

$('clearFilters').addEventListener('click', () => {
  activeCategory = 'All';
  searchQuery = '';
  $('projectSearch').value = '';
  renderProjects();
  $('projectSearch').focus();
});

const dialog = $('projectDialog');
let dialogTrigger = null;

function openProject(index, trigger) {
  const project = content.projects[index];
  const availableLinks = project.links.filter(usableLink);
  const unavailableNotes = project.links.filter((link) => !usableLink(link)).map((link) => link.note).filter(Boolean);
  dialogTrigger = trigger;

  $('dialogBody').innerHTML = `
    <div class="dialog-kicker">${icon(project.icon)}<span>${esc(project.category)} · ${esc(project.projectType)}</span></div>
    <h2 id="dialogTitle">${esc(project.title)}</h2>
    <p class="dialog-meta">${esc(project.role)} <span aria-hidden="true">·</span> ${esc(project.dates)}</p>
    <p class="dialog-summary">${esc(project.summary)}</p>
    <div class="case-study-grid">
      <section><h3>Technical objective</h3><p>${esc(project.objective)}</p></section>
      <section><h3>Environment and tools</h3><div class="tags">${project.tags.map((tag) => `<span>${esc(tag)}</span>`).join('')}</div></section>
      <section><h3>Implementation</h3><p>${esc(project.implementation)}</p></section>
      <section><h3>Results and documentation</h3><p>${esc(project.result)}</p></section>
    </div>
    ${availableLinks.length ? `<div class="dialog-links">${availableLinks.map(linkHTML).join('')}</div>` : ''}
    ${unavailableNotes.length ? `<div class="documentation-alert" role="note">${icon('document')}<div><strong>Documentation status</strong>${unavailableNotes.map((note) => `<p>${esc(note)}</p>`).join('')}</div></div>` : ''}`;

  dialog.showModal();
  document.body.classList.add('scroll-lock');
}

$('projectsGrid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-project]');
  if (button) openProject(Number(button.dataset.project), button);
});

$('closeDialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {
  document.body.classList.remove('scroll-lock');
  dialogTrigger?.focus();
});
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

$('skillsGrid').innerHTML = content.skills.groups.map((group) => `<article class="skill-card">
  <span class="skill-icon">${icon(group.icon)}</span>
  <h3>${esc(group.title)}</h3>
  <p>${esc(group.caption)}</p>
  <ul>${group.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
</article>`).join('');

$('experienceList').innerHTML = content.experience.map((entry) => `<article class="timeline-item">
  <div class="timeline-label"><span class="mono-label">${esc(entry.kind)}</span><strong>${esc(entry.org)}</strong><span>${esc(entry.dates)} · ${esc(entry.location)}</span></div>
  <div>${entry.roles.map((role) => `<h3>${esc(role.title)}</h3><ul>${role.bullets.map((bullet) => `<li>${esc(bullet)}</li>`).join('')}</ul>`).join('')}</div>
</article>`).join('');

$('educationGrid').innerHTML = content.education.map((education) => `<article class="education-card">
  <div class="education-logo"><img src="${esc(education.logo)}" alt="${esc(education.logoAlt)}" loading="lazy"></div>
  <div class="education-copy"><div class="education-meta"><span>${esc(education.dates)}</span></div><h3>${esc(education.school)}</h3><p class="program">${esc(education.program)}</p><ul>${education.notes.map((note) => `<li>${esc(note)}</li>`).join('')}</ul></div>
</article>`).join('');

$('articlesList').innerHTML = content.articles.map((article, index) => `<article class="article-row">
  <span class="article-index">${String(index + 1).padStart(2, '0')}</span>
  <div><h3>${esc(article.title)}</h3><p>${esc(article.summary)}</p><span class="mono-label">${esc(article.date)} · ${esc(article.tags.join(' / '))}</span></div>
  ${usableLink(article) ? `<a class="text-link" href="${esc(article.href)}" target="_blank" rel="noopener noreferrer">Read document</a>` : '<span class="document-state unavailable">Not yet published</span>'}
</article>`).join('');

const profiles = [
  { label: 'LinkedIn', href: content.contact.linkedin },
  { label: 'GitHub', href: content.contact.github },
  ...content.contact.other
];

$('contactLinks').innerHTML = profiles.map((profile, index) => `<div class="contact-row">
  <a href="${esc(profile.href)}" target="_blank" rel="noopener noreferrer"><strong>${esc(profile.label)}</strong><span>${esc(profile.href.replace('https://', '').replace('www.', ''))}</span></a>
  <button class="copy-button" type="button" data-copy="${index}" aria-label="Copy ${esc(profile.label)} link">Copy</button>
</div>`).join('');

let toastTimeout;
async function copy(text) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    $('toast').textContent = 'Profile link copied.';
  } catch {
    $('toast').textContent = 'Could not copy. Open the profile and copy its address.';
  }
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { $('toast').textContent = ''; }, 4500);
}

$('contactLinks').addEventListener('click', (event) => {
  const button = event.target.closest('[data-copy]');
  if (button) copy(profiles[Number(button.dataset.copy)].href);
});
$('copyAll').addEventListener('click', () => copy(profiles.map((profile) => `${profile.label}: ${profile.href}`).join('\n')));

const themeButton = $('themeToggle');
function syncTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  themeButton.title = `Switch to ${dark ? 'light' : 'dark'} theme`;
}
themeButton.addEventListener('click', () => {
  document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('jroque-theme', document.documentElement.dataset.theme); } catch {}
  syncTheme();
});
syncTheme();

const menuButton = $('menuToggle');
const navigation = $('navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = 'Menu';
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('span').textContent = open ? 'Close' : 'Menu';
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
matchMedia('(min-width: 961px)').addEventListener('change', (event) => { if (event.matches) closeMenu(); });

const navSections = [...document.querySelectorAll('main section[id]')];
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
  if (!visible.length) return;
  const id = visible[0].target.id;
  navigation.querySelectorAll('a').forEach((link) => {
    if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}, { rootMargin: '-20% 0px -65% 0px' });
navSections.forEach((section) => observer.observe(section));

$('year').textContent = new Date().getFullYear();
renderProjects();

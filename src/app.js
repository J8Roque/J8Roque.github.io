/* FILE: src/app.js
 * JavaScript controls interactions and creates repeated HTML cards.
 * Search for JS 01 through JS 17 to locate the parts below.
 * A template literal between backticks contains HTML that becomes visible in index.html.
 * Keep ids matched to the corresponding HTML containers.
 */

/* JS 01 / DATA IMPORT
 * content.js lives in this same src folder. It holds projects, skills, education, experience, articles, and contact data.
 */
import { content } from './content.js?v=20260918';
/* JS 02 / HELPERS
 * $("projectsGrid") finds an HTML element by id. esc() protects inserted text. usableLink() checks link format and availability; it does not check whether the PDF exists.
 */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Document-relative PDF paths resolve from index.html, not from this src folder.
// Set a link's available property to false to hide it until its file is uploaded.
const usableLink = (link) => {
  const href = String(link?.href || '').trim();
  if (link?.available === false || !href || href.includes('PASTE_')) return false;
  return /^https?:\/\//i.test(href) || /^\.\/assets\/pdf\/[^?#]+\.pdf$/i.test(href);
};
/* LINK HTML
 * Builds an a tag used for PDF and external buttons inside the popup. href is the destination; l.label is the visible text.
 */
const linkHTML = (l) => `<a class="button" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} <span aria-hidden="true">↗</span></a>`;
/* JS 03 / SHORT PROJECT CARD HEADINGS AND PARAGRAPHS
 * titles supplies the card h3 headings. summaries supplies the card p text. Both arrays follow the exact order of content.projects. Update all three together when adding/reordering projects. Full popup titles/summaries live in content.js.
 */
const titles = ['Active Directory home lab','Windows 11 in Hyper-V','A small-company VoIP network','TryHackMe: three security labs','Web application attack analysis','Phishing awareness presentation','Pizza ordering SQL database','IT Message Writer'];
const summaries = [
'Configured a domain controller, DNS, organizational units, and role-based file sharing. Joined a Windows client and practiced NTFS and share permissions.',
'Built a Windows 11 virtual machine and verified its network, memory, storage, and system settings.',
'Connected two IP phones using Voice VLAN 10, DHCP Option 150, and CallManager Express.',
'Practiced reconnaissance, enumeration, and privilege escalation in legal training environments.',
'Analyzed common attack patterns in safe training environments and documented the findings.',
'Turned common phishing patterns into practical security advice that users can act on.',
'Designed relational tables, keys, and constraints. Practiced SQL queries and CRUD operations.',
'Built a web tool for clear support emails, chats, and ticket updates that can be copied and reused.'
];
/* JS 04 / FILTER STATE AND CATEGORY BUTTONS
 * active stores the selected category; query stores the search text. Each category becomes a button inside index.html id="filters".
 */
let active = 'All';
let query = '';
const filters = $('filters');
for (const cat of content.projectCategories) {
 const button = document.createElement('button');button.className = 'filter';button.type = 'button';button.textContent = cat;button.setAttribute('aria-pressed',String(cat === active));
 button.addEventListener('click',()=>{active=cat;renderProjects();}); filters.appendChild(button);
}
/* JS 05 / PROJECT CARD HTML
 * Writes cards into id="projectsGrid". Each article contains: category span, number span, h3 title, p summary, tag spans, View project button, and time. Edit short text in JS 03; detailed data is in content.js. Also updates id="projectCount" and id="emptyState".
 */
function renderProjects(){
 const list = content.projects.map((p,i)=>({...p,index:i})).filter(p=>(active==='All'||p.category===active)&&[p.title,p.category,p.role,p.summary,...p.tags].join(' ').toLowerCase().includes(query.toLowerCase()));
 [...filters.children].forEach(b=>b.setAttribute('aria-pressed',String(b.textContent===active)));
 $('projectCount').textContent = `${list.length} of ${content.projects.length} projects${active !== 'All' ? ' · '+active : ''}`;
 $('emptyState').hidden=!!list.length;
 $('projectsGrid').innerHTML=list.map(p=>`<article class="project-card ${p.index===0?'featured':''}"><div class="project-top"><span class="category">${esc(p.category)}${p.index===0?' / FEATURED LAB':''}</span><span class="project-number">${String(p.index+1).padStart(2,'0')}</span></div><h3>${esc(titles[p.index])}</h3><p>${esc(summaries[p.index])}</p><div class="tags">${p.tags.slice(0,p.index===0?5:3).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><div class="project-bottom"><button class="text-link" data-project="${p.index}" aria-label="View project: ${esc(titles[p.index])}">View project <span aria-hidden="true">↗</span></button><time>${esc(p.dates)}</time></div></article>`).join('');
}
/* JS 06 / SEARCH AND PROJECT BUTTON ACTIONS
 * The search input triggers renderProjects(). Clear filters resets the list. A View project button opens its matching detail popup.
 */
$('projectSearch').addEventListener('input',e=>{query=e.target.value.trim();renderProjects();});
$('clearFilters').addEventListener('click',()=>{active='All';query='';$('projectSearch').value='';renderProjects();$('projectSearch').focus();});
$('projectsGrid').addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b)openProject(Number(b.dataset.project));});
/* JS 07 / PROJECT POPUP HTML AND ACTIONS
 * openProject() fills id="dialogBody": eyebrow p = category; h2 = project title; metadata p = role/date; summary p = full description; h3 = Tools & topics. These values come from content.projects. The close button, Escape, and clicks outside the popup dismiss it.
 */
const dialog=$('projectDialog');
function openProject(index){const p=content.projects[index];const available=p.links.filter(usableLink);
 $('dialogBody').innerHTML=`<p class="eyebrow">${esc(p.category)} / PROJECT ${String(index+1).padStart(2,'0')}</p><h2 class="dialog-heading" id="dialogTitle">${esc(p.title)}</h2><p class="dialog-meta">${esc(p.role)} · ${esc(p.dates)}</p><p class="dialog-summary">${esc(p.summary)}</p><h3 class="dialog-label">Tools & topics</h3><div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>${available.length?`<div class="dialog-links">${available.map(linkHTML).join('')}</div>`:`<p class="unavailable">${p.category==='Security'&&index===5?'Presentation link not available yet.':'The full lab report is not available on this site yet.'}</p>`}`;
 dialog.showModal();document.body.classList.add('scroll-lock');}
$('closeDialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('scroll-lock'));
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
/* JS 08 / SKILL CARD HTML
 * Creates h3 from g.title, p from g.caption, and ul/li entries from g.items. Edit skills.groups in content.js. HTML destination: id="skillsGrid".
 */
$('skillsGrid').innerHTML=content.skills.groups.map((g,i)=>`<article class="skill-card"><span class="skill-number">0${i+1}</span><h3>${esc(g.title)}</h3><p>${esc(g.caption)}</p><ul>${g.items.map(x=>`<li>${esc(x.name)}</li>`).join('')}</ul></article>`).join('');
/* JS 09 / EXPERIENCE HTML
 * Creates organization strong text, date/location span, role h3 heading, and ul/li bullet points. Edit experience in content.js. HTML destination: id="experienceList".
 */
$('experienceList').innerHTML=content.experience.map(x=>`<article class="timeline-row"><div class="timeline-meta"><strong>${esc(x.org)}</strong><span>${esc(x.dates)} · ${esc(x.location)}</span></div><div>${x.roles.map(r=>`<h3>${esc(r.title)}</h3><ul>${r.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`).join('')}</div></article>`).join('');
/* JS 10 / EDUCATION HTML
 * Creates school h3, program p, and ul/li notes. Edit education in content.js. ASU/CC monograms are set in this template. HTML destination: id="educationGrid".
 */
$('educationGrid').innerHTML=content.education.map((x,i)=>`<article class="education-card"><div class="education-top"><span class="school-mark">${i===0?'ASU':'CC'}</span><span>${esc(x.dates)}</span></div><h3>${esc(x.school)}</h3><p class="program">${esc(x.program)}</p><ul>${x.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul></article>`).join('');
/* JS 11 / ARTICLE HTML
 * Creates article h3 from a.title, p from a.summary, metadata p, and a Read article link when available. Edit articles in content.js. HTML destination: id="articlesList".
 */
$('articlesList').innerHTML=content.articles.map((a,i)=>`<article class="article-row"><span class="article-number">0${i+1}</span><div><h3>${esc(a.title)}</h3><p>${esc(a.summary)}</p><p class="article-meta">${esc(a.date)} · ${esc(a.tags.slice(0,2).join(' / '))}</p></div>${usableLink(a) ? `<a class="text-link article-status" href="${esc(a.href)}" target="_blank" rel="noopener noreferrer" aria-label="Read ${esc(a.title)}">Read article <span aria-hidden="true">↗</span></a>` : `<span class="article-status">Full article unavailable</span>`}</article>`).join('');
/* JS 12 / CONTACT LINK HTML
 * Builds LinkedIn, GitHub, and other profile rows with a links and Copy buttons. Edit contact in content.js. The large LinkedIn buttons in index.html have separate href values.
 */
const profiles = [{label:'LinkedIn',href:content.contact.linkedin},{label:'GitHub',href:content.contact.github},...content.contact.other];
$('contactLinks').innerHTML=profiles.map((p,i)=>`<div class="contact-row"><a href="${esc(p.href)}" target="_blank" rel="noopener noreferrer"><strong>${esc(p.label)} ↗</strong><span>${esc(p.href.replace('https://','').replace('www.',''))}</span></a><button class="copy-button" data-copy="${i}" aria-label="Copy ${esc(p.label)} link">Copy link</button></div>`).join('');
/* JS 13 / COPY BUTTONS AND FEEDBACK
 * Copies links to the clipboard and writes feedback inside id="toast". No email or message is sent.
 */
let toastTimeout;
async function copy(text){try{if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(text);$('toast').textContent='Profile link copied.';}catch{$('toast').textContent='Could not copy. Open the profile and copy its address.';}clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('toast').textContent='',4500);}
$('contactLinks').addEventListener('click',e=>{const b=e.target.closest('[data-copy]');if(b)copy(profiles[Number(b.dataset.copy)].href);});
$('copyAll').addEventListener('click',()=>copy(profiles.map(p=>p.label+': '+p.href).join('\n')));
/* JS 14 / LIGHT AND DARK THEME
 * Updates html data-theme and saves a device-local preference. Theme colors are defined in styles.css :root and :root[data-theme=light].
 */
const theme=$('themeToggle');function syncTheme(){const dark=document.documentElement.dataset.theme==='dark';theme.innerHTML=`<span aria-hidden="true">${dark?'☼':'☾'}</span>`;theme.setAttribute('aria-label',`Switch to ${dark?'light':'dark'} theme`);theme.title=`Switch to ${dark?'light':'dark'} theme`;}
theme.addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('jroque-theme',document.documentElement.dataset.theme);}catch{}syncTheme();});syncTheme();
/* JS 15 / MOBILE MENU
 * Connects id="menuToggle" to id="navigation". Changes aria-expanded, opens/closes the menu, and handles Escape.
 */
const menu=$('menuToggle'),nav=$('navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.textContent='Menu';nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu';nav.classList.toggle('open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
window.matchMedia('(min-width: 951px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
/* JS 16 / ACTIVE NAVIGATION LINK
 * Watches the visible page section and marks the matching navigation link. CSS uses [aria-current] to style it.
 */
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(visible.length){const id=visible[0].target.id;nav.querySelectorAll('a').forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}},{rootMargin:'-15% 0px -55% 0px'});sections.forEach(s=>observer.observe(s));
/* JS 17 / STARTUP
 * Sets the footer year and renders the initial project list. Keep this after the renderProjects function definition.
 */
$('year').textContent=new Date().getFullYear();renderProjects();

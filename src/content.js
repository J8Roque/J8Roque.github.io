// ===================================
// FILE: content.js
// PURPOSE: All portfolio data lives here (text, links, PDFs, image paths)
// IMPORTANT:
// - After reorganizing your repo, update paths for images + PDFs.
// - Your app reads this file and renders everything automatically.
// ===================================

export const content = {
  /* ================================
     SITE: header + hero + footer
     NOTES:
     - name shows in top left + mobile header
     - badge/title/subtitle show in hero
     - bullets become the hero bullet list
     - profileImage MUST match your new /assets/img location
  ================================ */
  site: {
    name: "J Roque",
    badge: "My Portfolio",
    title: "Hi, I am J Roque",
    subtitle:
      "I build hands on IT projects, write clear documentation, and share real lab work.",

    // NOTE: Hero bullet list
    bullets: [
      "IT student focused on support, systems, networking, and security fundamentals",
      "I learn by doing: labs, home projects, and step by step write ups",
      "Comfortable with Windows and Linux basics, virtualization, and troubleshooting workflows",
      "Security minded habits: MFA, least privilege, patch hygiene, phishing awareness"
    ],

    // ✅ UPDATED IMAGE PATH (you moved cat2.jpg into /assets/img)
    // If you rename cat2.jpg, update the filename here too.
    profileImage: "./assets/img/cat2.jpg",

    // NOTE: These show as the small “quick cards” in the hero section
    quickCards: [
      { key: "Degree path", value: "BS Information Technology (in progress)" },
      { key: "Background", value: "AS Information Technology and AS Cybersecurity" },
      { key: "Goal", value: "Entry level IT support and systems roles" }
    ],

    // NOTE: These become hero buttons
    // TIP: keep your main 2–3 links here
    links: [
      { label: "GitHub", href: "https://github.com/J8Roque", style: "primary" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jemmyroque/", style: "default" },
      { label: "Credly", href: "https://www.credly.com/users/jemmyroque", style: "default" }
    ],

    footerText: "© J Roque"
  },

  /* ================================
     ABOUT: paragraphs + highlight pills
     NOTES:
     - paragraphs render as text blocks in About
     - highlights render as “pill” tags
  ================================ */
  about: {
    paragraphs: [
      "Hi, I’m J Roque. I’m building this site to show real hands on IT work, not just class titles. I like troubleshooting because it feels like solving a puzzle, and I care about staying calm and clear when someone is stressed and needs help fast.",
      "My background includes Information Technology and Cybersecurity coursework, and I’m currently working toward a BS in Information Technology. I’m focused on strong fundamentals: operating systems, networking, security basics, and clean documentation that another tech can follow without guessing.",
      "Most of my learning happens through labs and builds. I practice Windows and Linux skills, set up virtual machines, work through database and SQL exercises, and document projects like Raspberry Pi and storage builds. Everything here is meant to be practical and easy to review."
    ],
    highlights: [
      "Clear step by step documentation",
      "Patient user focused troubleshooting",
      "Windows and Linux fundamentals",
      "Virtualization and home lab practice",
      "Security awareness and safe habits"
    ]
  },

  /* ================================
     SKILLS: intro + featured + grouped lists
     NOTES:
     - featured shows as top “pill” row in the Skills aside
     - groups become skill cards in the Skills grid
  ================================ */
  skills: {
    introTitle: "Core strengths",
    introText:
      "I focus on repeatable fundamentals: clear troubleshooting steps, clean ticket notes, and safe habits. I keep everything simple and practical.",
    featured: [
      { name: "Troubleshooting workflow" },
      { name: "Windows fundamentals" },
      { name: "Linux fundamentals" },
      { name: "Networking basics" },
      { name: "Security awareness" }
    ],
    groups: [
      {
        title: "IT Support and Systems",
        caption: "Support habits and OS fundamentals",
        items: [
          { name: "Troubleshooting workflow" },
          { name: "Ticket notes and documentation" },
          { name: "Windows basics" },
          { name: "Linux basics" },
          { name: "Remote support habits" },
          { name: "User communication" }
        ]
      },
      {
        title: "Networking Fundamentals",
        caption: "Home and small network basics",
        items: [
          { name: "IP basics" },
          { name: "DNS and DHCP basics" },
          { name: "WiFi troubleshooting" },
          { name: "Basic home network setup" },
          { name: "Switch and router basics" }
        ]
      },
      {
        title: "Security Fundamentals",
        caption: "Safe habits and mindset",
        items: [
          { name: "MFA" },
          { name: "Least privilege" },
          { name: "Patch hygiene" },
          { name: "Phishing awareness" },
          { name: "Basic incident mindset" }
        ]
      },
      {
        title: "Tools and Learning",
        caption: "Hands on practice tools",
        items: [
          { name: "Hyper V labs" },
          { name: "PowerShell basics" },
          { name: "Python basics" },
          { name: "Bash basics" },
          { name: "SQL basics" },
          { name: "GitHub basics" }
        ]
      }
    ]
  },

  /* ================================
     EXPERIENCE: orgs + roles + bullets
     NOTES:
     - Each item becomes one experience card
     - roles is a list inside each org card
  ================================ */
  experience: [
    {
      org: "Academic and Home Lab Projects",
      location: "California, USA",
      dates: "Ongoing",
      roles: [
        {
          title: "IT Student and Home Lab Builder",
          dates: "Ongoing",
          bullets: [
            "Build and document labs that practice troubleshooting, OS setup, and networking fundamentals",
            "Write clear steps and checklists so projects are repeatable and easy to review",
            "Practice security aware habits like MFA, least privilege, and safe downloads"
          ]
        }
      ]
    },
    {
      org: "Mastercard Forage Job Simulation",
      location: "Remote",
      dates: "Completed",
      roles: [
        {
          title: "Security Awareness and Phishing Analysis Simulation",
          dates: "Completed",
          bullets: [
            "Reviewed phishing related results and identified groups that needed additional awareness",
            "Created a short security awareness presentation focused on practical actions",
            "Strengthened skills in communication, analysis, and security mindset"
          ]
        }
      ]
    }
  ],

  /* ================================
     EDUCATION: schools + notes
     NOTES:
     - Each item becomes one education card
  ================================ */
  education: [
    {
      school: "Arizona State University",
      dates: "In progress",
      program: "Bachelor of Science in Information Technology",
      notes: [
        "ASU Online, Ira A. Fulton Schools of Engineering",
        "Focus: systems, networking, security fundamentals",
        "Expected graduation: 2027 (estimate, 4 classes per semester)",
        "Coursework highlights: OS Architecture, Networking, System Security, UNIX Utilities, Java, Information Modeling and Retrieval"
      ]
    },
    {
      school: "Coastline College",
      dates: "Completed (2025)",
      program: "Associate of Science in Information Technology and Associate of Science in Cybersecurity",
      notes: [
        "Hands on labs and technical coursework",
        "Focused on IT support fundamentals, networking, Windows and Linux basics, and security awareness",
        "Built repeatable lab reports with screenshots, troubleshooting steps, and clear ticket style documentation"
      ]
    }
  ],

  /* ================================
     PROJECTS: categories + project cards
     IMPORTANT:
     - Every PDF you moved into /assets/pdf must use the new path:
       "./assets/pdf/<filename>.pdf"
     - Remove any ".pdf.pdf" in the hrefs.
  ================================ */
  projectCategories: ["All", "IT Support", "Systems", "Security", "Database"],

  projects: [
    {
      title: "Active Directory Home Lab: Domain Controller, DNS, Domain Join, and File Sharing",
      category: "Systems",
      role: "Windows System Lab Builder",
      dates: "Feb 2026",
      summary:
        "Built an Active Directory lab in VirtualBox by configuring AD DS and DNS, creating OUs, users, and security groups, joining a Windows 10 client to the domain, and setting up role based SMB shares using NTFS and share permissions.",
      tags: ["Windows Server", "Active Directory", "DNS", "VirtualBox", "Domain Join", "NTFS", "SMB"],

      // ✅ UPDATED PDF PATH:
      // Old: "./active-directory-home-lab.pdf.pdf"
      // New: "./assets/pdf/active-directory-home-lab.pdf"
      links: [{ label: "PDF Lab Report", href: "./assets/pdf/active-directory-home-lab.pdf" }]
    },
    {
      title: "Hyper V Windows 11 VM Build Guide (Apporto Lab)",
      category: "Systems",
      role: "Builder / Author",
      dates: "Jan 2026",
      summary:
        "Created a Windows 11 Generation 2 VM in Hyper V, configured an external virtual switch for network access, installed Windows 11 from an ISO, and verified CPU, memory, and disk inside the VM.",
      tags: ["Hyper V", "Windows 11", "Virtualization", "Networking"],

      // ✅ UPDATED PDF PATH:
      // Make sure your actual PDF file name matches exactly.
      // Recommended rename: "hyperv-windows11-vm-guide.pdf"
      links: [{ label: "PDF Guide", href: "./assets/pdf/hyperv-windows11-vm-guide.pdf" }]
    },
    {
      title: "TryHackMe Labs: PyRat, Mr Robot, and Publisher",
      category: "Security",
      role: "Student",
      dates: "Oct 2025",
      summary:
        "Completed three legal training labs in TryHackMe to practice reconnaissance, web enumeration, credential discovery, post exploitation, and privilege escalation. Wrote a clear report with screenshots and lessons learned.",
      tags: ["TryHackMe", "Web Security", "Linux", "Enumeration", "Privilege Escalation"],

      // NOTE:
      // If you have this PDF in your repo, move it to /assets/pdf and update the path.
      // If you do NOT have it in the repo yet, keep it as-is until you upload it.
      links: [{ label: "PDF Write up", href: "./assets/pdf/PyRat-Mr-Robot-Publisher-THM.pdf" }]
    },
    {
      title: "Analyzing Types of Web Application Attacks (Lab Report)",
      category: "Security",
      role: "Student / Analyst",
      dates: "2025",
      summary:
        "Lab report analyzing common web application attack patterns using safe training environments. Documented observations, traffic behavior, and key security takeaways with clear notes and screenshots.",
      tags: ["Web Security", "Lab", "HTTP", "Security Fundamentals"],

      // ✅ UPDATED PDF PATH:
      links: [
        { label: "PDF Report", href: "./assets/pdf/analyzing-types-of-web-application-attacks.pdf" }
      ]
    },
    {
      title: "Phishing Awareness Mini Presentation",
      category: "Security",
      role: "Creator",
      dates: "2025",
      summary:
        "Created a short security awareness presentation focused on spotting phishing patterns and safer habits.",
      tags: ["Security", "Awareness", "Communication"],

      // NOTE:
      // "PASTE_SLIDES_LINK" disables the button (your app.js blocks placeholder links).
      // Replace with an actual Google Slides link or a PDF in /assets/pdf.
      links: [{ label: "Slides", href: "PASTE_SLIDES_LINK" }]
    },
    {
      title: "Pizza Ordering SQL Database (MySQL Lab)",
      category: "Database",
      role: "Student / Developer",
      dates: "Feb 2026",
      summary:
        "Designed and built a relational database for a pizza ordering system, created tables with keys and constraints, and practiced CRUD operations. Documented results with screenshots and query outputs.",
      tags: ["MySQL", "SQL", "Database Design", "CRUD", "Foreign Keys"],

      // ✅ UPDATED PDF PATH:
      links: [{ label: "PDF Lab", href: "./assets/pdf/pizza-ordering-system.pdf" }]
    },
    {
      title: "IT Message Writer",
      category: "IT Support",
      role: "Builder",
      dates: "2026",
      summary:
        "A simple web tool that creates clean support emails, chats, and ticket updates you can copy. It can also generate an optional AI prompt for polishing without sharing sensitive data.",
      tags: ["JavaScript", "HTML", "CSS", "IT Support"],
      links: [
        { label: "Live tool", href: "https://j8roque.github.io/it-message-writer/" },
        { label: "Repo", href: "https://github.com/J8Roque/it-message-writer" }
      ]
    }
  ],

  /* ================================
     ARTICLES: portfolio writing cards
     IMPORTANT:
     - If the article is a PDF in your repo, point to /assets/pdf.
     - If it is a blog post, use the full https link.
  ================================ */
  articles: [
    {
      title: "My Troubleshooting Checklist for Common IT Issues",
      source: "Portfolio",
      date: "2026",
      readTime: "3 min",
      summary:
        "A practical checklist I follow for login, WiFi, printing, and slow device issues, plus what to document in the ticket.",
      tags: ["IT Support", "Troubleshooting", "Documentation", "Workflow"],

      // ✅ UPDATED PDF PATH:
      // Recommended rename: "my-troubleshooting-checklist-portfolio-2026.pdf"
      href: "./assets/pdf/my-troubleshooting-checklist-portfolio-2026.pdf",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "What I Learned Setting Up a Home Lab",
      source: "Portfolio",
      date: "2026",
      readTime: "4 min",
      summary:
        "How I set up my lab environment, what I tested first, and the small habits that saved me time later.",
      tags: ["Systems", "Learning"],

      // NOTE:
      // This button is disabled until you paste a real link (your app.js blocks placeholder links).
      href: "PASTE_ARTICLE_LINK",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "Phishing Red Flags I Watch For",
      source: "Portfolio",
      date: "2025",
      readTime: "3 min",
      summary:
        "A short guide to common phishing patterns and what actions reduce risk quickly.",
      tags: ["Security", "Awareness"],

      // NOTE: Replace with a real blog link or PDF in /assets/pdf.
      href: "PASTE_ARTICLE_LINK",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ],

  /* ================================
     CONTACT: used by Contact section
     NOTES:
     - If email is empty, Email tile will not show.
     - other[] adds extra tiles (Credly etc).
  ================================ */
  contact: {
    // NOTE: Add your email if you want the Email tile to appear
    email: "",
    github: "https://github.com/J8Roque",
    linkedin: "https://www.linkedin.com/in/jemmyroque/",
    other: [{ label: "Credly", href: "https://www.credly.com/users/jemmyroque" }]
  }
};

/* ================================
   FINAL CHECKLIST (after edits)
   1) index.html points to:
      - ./src/styles.css
      - ./src/app.js
   2) content.js points to:
      - ./assets/img/cat2.jpg
      - ./assets/pdf/<your pdf files>
   3) Filenames in href MUST match exactly (case + spaces).
================================ */

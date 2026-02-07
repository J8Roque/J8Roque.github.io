export const content = {
  site: {
    name: "J Roque",
    badge: "IT Portfolio",
    title: "Hi, I am J Roque",
    subtitle:
      "I build hands on IT projects, write clear documentation, and share real lab and DIY work.",
    bullets: [
      "IT student focused on support, systems, networking, and security fundamentals",
      "I learn by doing: labs, home projects, and step by step write ups",
      "Comfortable with Windows and Linux basics, virtualization, and troubleshooting workflows",
      "Security minded habits: MFA, least privilege, patch hygiene, phishing awareness"
    ],
    profileImage: "./cat2.jpg",
    quickCards: [
      { key: "Degree path", value: "BS Information Technology (in progress)" },
      { key: "Background", value: "AS IT and AS Cybersecurity" },
      { key: "Goal", value: "Entry level IT support and systems roles" }
    ],
    links: [
      { label: "GitHub", href: "https://github.com/J8Roque", style: "primary" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jemmyroque/", style: "default" },
      { label: "Credly", href: "https://www.credly.com/users/jemmyroque", style: "default" }
    ],
    footerText: "© J Roque"
  },

  about: {
    paragraphs: [
      "Hi, I’m J Roque. I’m building this site to show real hands on IT work, not just class titles. I like troubleshooting because it feels like solving a puzzle, and I care about staying calm and clear when someone is stressed and needs help fast.",
      "My background includes Information Technology and Cybersecurity coursework, and I’m currently working toward a BS in Information Technology. I’m focused on strong fundamentals: operating systems, networking, security basics, and clean documentation that another tech can follow without guessing.",
      "Most of my learning happens through labs and DIY builds. I practice Windows and Linux skills, set up virtual machines, work through database and SQL exercises, and document builds like Raspberry Pi and storage projects. Everything here is meant to be practical, readable, and easy to review."
    ],
    highlights: [
      "Clear step by step documentation",
      "Patient user focused troubleshooting",
      "Windows and Linux fundamentals",
      "Virtualization and home lab practice",
      "Security awareness and safe habits"
    ]
  },

  skills: [
    {
      title: "IT Support and Systems",
      items: [
        "Troubleshooting workflow",
        "Ticket notes and documentation",
        "Windows basics",
        "Linux basics",
        "Remote support habits",
        "User communication"
      ]
    },
    {
      title: "Networking Fundamentals",
      items: [
        "IP basics",
        "DNS and DHCP basics",
        "WiFi troubleshooting",
        "Basic home network setup",
        "Switch and router basics"
      ]
    },
    {
      title: "Security Fundamentals",
      items: [
        "MFA",
        "Least privilege",
        "Patch hygiene",
        "Phishing awareness",
        "Basic incident mindset"
      ]
    },
    {
      title: "Tools and Learning",
      items: [
        "Hyper V labs",
        "PowerShell basics",
        "Python basics",
        "Bash basics",
        "SQL basics",
        "GitHub basics"
      ]
    }
  ],

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

  education: [
    {
      school: "Arizona State University",
      dates: "In progress",
      program: "Bachelor of Science in Information Technology",
      notes: [
        "Focus: systems, networking, security fundamentals",
        "Update with your expected graduation date when ready"
      ]
    },
    {
      school: "Coastline College",
      dates: "Completed",
      program: "Associate of Science in Information Technology and Associate of Science in Cybersecurity",
      notes: [
        "Hands on labs and technical coursework",
        "Update this line if you want specific classes listed"
      ]
    }
  ],

  projectCategories: ["All", "IT Support", "Systems", "Security", "Database", "DIY"],

  projects: [
   {
  title: "Hyper-V Windows 11 VM Build Guide (Apporto Lab)",
  category: "Systems",
  role: "Builder / Author",
  dates: "Jan 2026",
  summary:
    "Created a Windows 11 Generation 2 VM in Hyper-V, configured an external virtual switch for network access, installed Windows 11 from an ISO, and verified CPU, memory, and disk inside the VM.",
  tags: ["Hyper-V", "Windows 11", "Virtualization", "Networking"],
  links: [
    { label: "PDF Guide", href: "./Hyperv-windows11-vm-guide.pdf" }
  ]
},

    {
      title: "Raspberry Pi Build and Boot Troubleshooting Notes",
      category: "DIY",
      role: "Builder",
      dates: "2026",
      summary:
        "Documented setup steps and common boot and storage issues, including what I tried, what failed, and what fixed it.",
      tags: ["Linux", "DIY", "Troubleshooting"],
      links: [{ label: "Photos", href: "PASTE_PHOTOS_LINK" }]
    },
    {
      title: "NAS Setup Notes and Backup Plan",
      category: "DIY",
      role: "Builder",
      dates: "2026",
      summary:
        "Set up storage and basic organization, then documented a simple backup approach I can maintain long term.",
      tags: ["Storage", "Backups", "DIY"],
      links: [{ label: "Write up", href: "PASTE_WRITEUP_LINK" }]
    },
    {
      title: "Phishing Awareness Mini Presentation",
      category: "Security",
      role: "Creator",
      dates: "2025",
      summary:
        "Created a short security awareness presentation focused on spotting phishing patterns and safer habits.",
      tags: ["Security", "Awareness", "Communication"],
      links: [{ label: "Slides", href: "PASTE_SLIDES_LINK" }]
    },
    {
      title: "SQL and Data Modeling Practice",
      category: "Database",
      role: "Student",
      dates: "2025 to 2026",
      summary:
        "Designed a simple schema and wrote queries to support common scenarios like search, reporting, and updates.",
      tags: ["SQL", "Data modeling"],
      links: [{ label: "Repo", href: "PASTE_REPO_LINK" }]
    },
    {
      title: "No Code AI App Concept: Email and Message Writer",
      category: "IT Support",
      role: "Builder",
      dates: "2025 to 2026",
      summary:
        "Started a simple no code tool idea to help write clear support emails and messages with consistent tone and structure.",
      tags: ["Productivity", "Documentation", "AI tools"],
      links: [{ label: "Demo", href: "PASTE_DEMO_LINK" }]
    }
  ],

  articles: [
    {
      title: "My Troubleshooting Checklist for Common IT Issues",
      source: "Portfolio",
      date: "2026",
      readTime: "3 min",
      summary:
        "A practical checklist I follow for login, WiFi, printing, and slow device issues, plus what to document in the ticket.",
      tags: ["IT Support", "Basics"],
      href: "PASTE_ARTICLE_LINK"
    },
    {
      title: "What I Learned Setting Up a Home Lab",
      source: "Portfolio",
      date: "2026",
      readTime: "4 min",
      summary:
        "How I set up my lab environment, what I tested first, and the small habits that saved me time later.",
      tags: ["Systems", "Learning"],
      href: "PASTE_ARTICLE_LINK"
    },
    {
      title: "Phishing Red Flags I Watch For",
      source: "Portfolio",
      date: "2025",
      readTime: "3 min",
      summary:
        "A short guide to common phishing patterns and what actions reduce risk quickly.",
      tags: ["Security", "Awareness"],
      href: "PASTE_ARTICLE_LINK"
    }
  ],

  diy: [
    {
      title: "Raspberry Pi Storage Setup",
      summary:
        "Notes on storage choices, boot behavior, and fixes I used when something would not start correctly.",
      tags: ["DIY", "Linux", "Storage"],
      href: "PASTE_DIY_LINK"
    },
    {
      title: "Home NAS Organization and Backups",
      summary:
        "How I organized folders, users, and a simple backup routine that is realistic to keep doing.",
      tags: ["DIY", "Backups"],
      href: "PASTE_DIY_LINK"
    },
    {
      title: "Basic Home Network Cleanup",
      summary:
        "Small changes that improved reliability like checking DNS settings, reboot order, and documenting devices.",
      tags: ["DIY", "Networking"],
      href: "PASTE_DIY_LINK"
    }
  ],

  contact: {
    github: "https://github.com/J8Roque",
    linkedin: "https://www.linkedin.com/in/jemmyroque/",
    other: [
      { label: "Credly", href: "https://www.credly.com/users/jemmyroque" }
    ]
  }
};

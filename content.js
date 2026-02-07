export const content = {
  site: {
    name: "J Roque",
    badge: "My Portfolio",
    title: "Hi, I am J Roque",
    subtitle: "I build hands on IT projects, write clear documentation, and share real lab work.",
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
      "Hi, I’m J Roque. I built this site to show real hands on IT work, not just class titles. I like troubleshooting because it feels like solving a puzzle, and I stay calm and clear when someone is stressed and needs help fast.",
      "My background includes Information Technology and Cybersecurity coursework, and I’m currently working toward a BS in Information Technology. I focus on strong fundamentals: operating systems, networking, security basics, and clean documentation that another tech can follow without guessing.",
      "Most of my learning happens through labs and builds. I practice Windows and Linux skills, set up virtual machines, work through database and SQL exercises, and document projects so they are repeatable and easy to review."
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
      items: ["MFA", "Least privilege", "Patch hygiene", "Phishing awareness", "Basic incident mindset"]
    },
    {
      title: "Tools and Learning",
      items: ["Hyper V labs", "PowerShell basics", "Python basics", "Bash basics", "SQL basics", "GitHub basics"]
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

  projectCategories: ["All", "IT Support", "Systems", "Security", "Database"],

  projects: [
    {
      title: "Pizza Ordering SQL Database (MySQL Lab)",
      category: "Database",
      role: "Student / Developer",
      dates: "Feb 2026",
      summary:
        "Designed and built a relational database for a pizza ordering system, created tables with keys and constraints, and practiced CRUD operations. Documented results with screenshots and query outputs.",
      tags: ["MySQL", "SQL", "Database Design", "CRUD", "Foreign Keys"],
      links: [{ label: "PDF Lab", href: "./pizza-ordering-system.pdf" }]
    },
    {
      title: "IT Message Writer",
      category: "IT Support",
      role: "Builder",
      dates: "2026",
      summary:
        "A simple web tool that creates clean support emails, chats, and ticket updates you can copy. It also generates an optional AI prompt for polishing without sharing sensitive data.",
      tags: ["JavaScript", "HTML", "CSS", "IT Support"],
      links: [
        { label: "Live tool", href: "https://j8roque.github.io/it-message-writer/" },
        { label: "Repo", href: "https://github.com/J8Roque/it-message-writer" }
      ]
    },
    {
      title: "TryHackMe Labs: PyRat, Mr Robot, and Publisher",
      category: "Security",
      role: "Student",
      dates: "Oct 2025",
      summary:
        "Completed legal training labs to practice reconnaissance, web enumeration, credential discovery, post exploitation, and privilege escalation. Wrote a report with screenshots and lessons learned.",
      tags: ["TryHackMe", "Web Security", "Linux", "Enumeration", "Privilege Escalation"],
      links: [{ label: "Write up", href: "#" }]
    },
    {
      title: "Hyper V Windows 11 VM Build Guide (Lab)",
      category: "Systems",
      role: "Builder / Author",
      dates: "Jan 2026",
      summary:
        "Created a Windows 11 Generation 2 VM in Hyper V, configured a virtual switch, installed Windows 11 from an ISO, and verified VM resources inside the OS.",
      tags: ["Hyper V", "Windows 11", "Virtualization", "Networking"],
      links: [{ label: "Guide", href: "#" }]
    }
  ],

  articles: [
    {
      title: "My Troubleshooting Checklist for Common IT Issues",
      source: "Portfolio",
      date: "2026",
      readTime: "3 min",
      summary: "A practical checklist for login, WiFi, printing, and slow device issues, plus what to document in the ticket.",
      tags: ["IT Support", "Troubleshooting", "Documentation", "Workflow"],
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "What I Learned Setting Up a Home Lab",
      source: "Portfolio",
      date: "2026",
      readTime: "4 min",
      summary: "How I set up my lab environment, what I tested first, and the small habits that saved me time later.",
      tags: ["Systems", "Learning"],
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "Phishing Red Flags I Watch For",
      source: "Portfolio",
      date: "2025",
      readTime: "3 min",
      summary: "Common phishing patterns and quick actions that reduce risk.",
      tags: ["Security", "Awareness"],
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ],

  contact: {
    email: "your.email@example.com",
    github: "https://github.com/J8Roque",
    linkedin: "https://www.linkedin.com/in/jemmyroque/",
    other: [{ label: "Credly", href: "https://www.credly.com/users/jemmyroque" }]
  }
};

// PDF names must match assets/pdf exactly, including capitals and extensions.
// All portfolio data lives here so the visible cards can be edited without
// changing the rendering code in app.js.

export const content = {
  site: {
    name: "J Roque",
    badge: "IT portfolio",
    title: "Technology. Problem solving. People.",
    subtitle:
      "I'm J Roque, a CompTIA-certified IT professional with a background in healthcare operations and hands-on practice through systems, networking, cybersecurity, and database labs. I care about practical troubleshooting, clear documentation, and technology that supports people.",
    profileImage: "./assets/img/cat2.jpg",
    links: [
      { label: "GitHub", href: "https://github.com/J8Roque" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jemmyroque/" },
      { label: "Credly", href: "https://www.credly.com/users/jemmyroque" }
    ],
    footerText: "© J Roque"
  },

  about: {
    paragraphs: [
      "Troubleshooting clicks for me because each symptom is a clue. I like finding the cause, but I also care about keeping the person waiting on the answer informed.",
      "My healthcare operations background taught me to communicate calmly, document details carefully, and work with people in complex environments. I'm building on those habits through IT coursework, certifications, and hands-on labs.",
      "I'm working toward a BS in Information Technology after completing associate degrees in IT and cybersecurity. My focus is on operating systems, networking, security fundamentals, and documentation another technician can follow without guessing."
    ],
    highlights: [
      "Calm user communication",
      "Repeatable troubleshooting",
      "Clear technical documentation",
      "Security-minded habits"
    ]
  },

  certifications: [
    { name: "CompTIA A+", note: "IT support and hardware fundamentals" },
    { name: "CompTIA Security+", note: "Core security concepts and practices" },
    { name: "CompTIA ITF+", note: "Foundational IT knowledge" }
  ],

  skills: {
    groups: [
      {
        title: "IT Support",
        icon: "support",
        caption: "Troubleshooting with the user and the next technician in mind",
        items: ["Troubleshooting workflow", "Technical documentation", "Ticket communication", "User support", "Remote support habits"]
      },
      {
        title: "Systems Administration",
        icon: "server",
        caption: "Operating systems, identity, and virtual lab environments",
        items: ["Windows Server", "Active Directory", "Windows 10 and 11", "Linux", "Hyper-V", "VirtualBox"]
      },
      {
        title: "Networking",
        icon: "network",
        caption: "Small-network services, configuration, and testing",
        items: ["DNS", "DHCP", "TCP/IP fundamentals", "Cisco Packet Tracer", "VLANs", "VoIP"]
      },
      {
        title: "Cybersecurity",
        icon: "shield",
        caption: "Practical habits and safe training environments",
        items: ["MFA", "Least privilege", "Security awareness", "Web security labs", "Vulnerability fundamentals"]
      },
      {
        title: "Programming and Databases",
        icon: "code",
        caption: "Coursework and projects used to build and automate",
        items: ["Java", "Python basics", "Bash basics", "PowerShell basics", "SQL", "HTML", "CSS", "JavaScript"]
      }
    ]
  },

  experience: [
    {
      kind: "Academic and independent projects",
      org: "Academic and Home Lab Projects",
      location: "California, USA",
      dates: "Ongoing",
      roles: [
        {
          title: "IT Student and Home Lab Builder",
          bullets: [
            "Build and document labs covering operating system setup, networking, user access, and security basics.",
            "Write steps and checklists another technician can repeat without filling in missing details.",
            "Use MFA, least privilege, safe downloads, and clean notes as part of the lab process."
          ]
        }
      ]
    },
    {
      kind: "Virtual job simulation",
      org: "Mastercard Forage Job Simulation",
      location: "Remote",
      dates: "Completed",
      roles: [
        {
          title: "Security Awareness and Phishing Analysis Simulation",
          bullets: [
            "Reviewed phishing simulation results and identified groups that needed more security awareness training.",
            "Created a short presentation that turned common phishing signs into practical user actions.",
            "Summarized the findings in plain language for a nontechnical audience."
          ]
        }
      ]
    }
  ],

  education: [
    {
      school: "Arizona State University",
      logo: "./assets/img/ASU logo.webp",
      logoAlt: "Arizona State University logo",
      dates: "In progress",
      program: "Bachelor of Science in Information Technology",
      notes: [
        "ASU Online, Ira A. Fulton Schools of Engineering",
        "Expected graduation: 2027 estimate",
        "Coursework includes OS Architecture, Networking, System Security, UNIX Utilities, Java, and Information Modeling and Retrieval"
      ]
    },
    {
      school: "Coastline College",
      logo: "./assets/img/CCC logo.jpg",
      logoAlt: "Coastline College logo",
      dates: "Completed 2025",
      program: "Associate of Science in Information Technology and Associate of Science in Cybersecurity",
      notes: [
        "Hands-on labs and technical coursework",
        "IT support, networking, Windows and Linux fundamentals, and security awareness",
        "Lab reports with screenshots, troubleshooting steps, and ticket-style documentation"
      ]
    }
  ],

  projectCategories: ["All", "IT Support", "Systems", "Networking", "Security", "Database"],

  projects: [
    {
      shortTitle: "Active Directory home lab",
      title: "Active Directory Home Lab: Domain Controller, DNS, Domain Join, and File Sharing",
      category: "Systems",
      icon: "server",
      projectType: "Independent home lab",
      role: "Windows system lab builder",
      dates: "Feb 2026",
      summary: "Built an Active Directory lab in VirtualBox by configuring AD DS and DNS, creating OUs, users, and security groups, joining a Windows 10 client to the domain, and setting up role-based SMB shares using NTFS and share permissions.",
      cardSummary: "Configured a domain controller, DNS, organizational units, and role-based file sharing, then joined a Windows client to the domain.",
      objective: "Practice the core steps behind a small Windows domain and role-based access to shared files.",
      implementation: "Configured AD DS and DNS, created organizational units, users, and groups, joined a Windows 10 client, and applied NTFS and share permissions.",
      result: "The lab documents a working domain join and role-based SMB file access. The report records the setup in repeatable steps.",
      tags: ["Windows Server", "Active Directory", "DNS", "VirtualBox", "Domain Join", "NTFS", "SMB"],
      links: [{ label: "Open lab report", href: "./assets/pdf/active-directory-home-lab.pdf.pdf", available: true }]
    },
    {
      shortTitle: "Windows 11 in Hyper-V",
      title: "Hyper-V Windows 11 VM Build Guide",
      category: "Systems",
      icon: "server",
      projectType: "Independent technical guide",
      role: "Builder and author",
      dates: "Jan 2026",
      summary: "Created a Windows 11 Generation 2 virtual machine in Hyper-V, configured a virtual switch for network access, installed Windows 11 from an ISO, and verified CPU, memory, disk, and system settings inside the VM.",
      cardSummary: "Built a Generation 2 Windows 11 virtual machine and verified its network, memory, storage, and system settings.",
      objective: "Create a repeatable Windows 11 virtual machine build in Hyper-V and verify the finished configuration.",
      implementation: "Configured the VM, a virtual switch, installation media, CPU, memory, and storage, then checked the installed system settings.",
      result: "The lab build is represented, but its repository PDF is corrupted and cannot be opened.",
      tags: ["Hyper-V", "Windows 11", "Virtualization", "Networking"],
      links: [{ label: "PDF guide", href: "./assets/pdf/hyperv-windows11-vm-guide.pdf", available: false, note: "Documentation unavailable: the existing PDF is a 2-byte invalid file." }]
    },
    {
      shortTitle: "Small-company VoIP network",
      title: "Cisco Packet Tracer VoIP Network Setup",
      category: "Networking",
      icon: "network",
      projectType: "Technical networking lab",
      role: "Network lab builder and author",
      dates: "2026",
      summary: "Built and documented a small-company VoIP network in Cisco Packet Tracer using Router0, Switch0, Cisco 7960 IP phones, DHCP Option 150, Voice VLAN 10, and CallManager Express. The lab shows how two IP phones register and call each other using extensions 1001 and 1002.",
      cardSummary: "Connected two IP phones using Voice VLAN 10, DHCP Option 150, and CallManager Express.",
      objective: "Configure the services a small VoIP lab needs for two Cisco IP phones to register and call each other.",
      implementation: "Configured the router, switch, voice VLAN, DHCP Option 150, telephony service, and extensions 1001 and 1002 in Packet Tracer.",
      result: "The documented lab shows both phones registering and completing a call between the two extensions.",
      tags: ["Cisco Packet Tracer", "VoIP", "DHCP", "Voice VLAN", "CallManager Express", "IP Phones"],
      links: [{ label: "Open setup guide", href: "./assets/pdf/VoIP_Network_Setup.pdf", available: true }]
    },
    {
      shortTitle: "TryHackMe security labs",
      title: "TryHackMe Labs: PyRat, Mr Robot, and Publisher",
      category: "Security",
      icon: "shield",
      projectType: "Legal training labs",
      role: "Student",
      dates: "Oct 2025",
      summary: "Completed three legal training labs in TryHackMe to practice reconnaissance, web enumeration, credential discovery, post-exploitation, and privilege escalation. A report was planned with screenshots and lessons learned.",
      cardSummary: "Practiced reconnaissance, enumeration, and privilege escalation in legal training environments.",
      objective: "Practice a structured security-testing workflow in authorized TryHackMe environments.",
      implementation: "Worked through PyRat, Mr Robot, and Publisher exercises covering reconnaissance, enumeration, credential discovery, post-exploitation, and privilege escalation.",
      result: "The labs remain represented here. The referenced write-up is not present in this repository.",
      tags: ["TryHackMe", "Web Security", "Linux", "Enumeration", "Privilege Escalation"],
      links: [{ label: "PDF write-up", href: "./assets/pdf/PyRat-Mr-Robot-Publisher-THM.pdf", available: false, note: "Documentation unavailable: the referenced report is missing from the repository." }]
    },
    {
      shortTitle: "Web application attack analysis",
      title: "Analyzing Types of Web Application Attacks",
      category: "Security",
      icon: "shield",
      projectType: "Academic lab report",
      role: "Student and analyst",
      dates: "2025",
      summary: "Created a lab report analyzing common web application attack patterns using safe training environments. Documented observations, traffic behavior, and key security takeaways with notes and screenshots.",
      cardSummary: "Analyzed common attack patterns in safe training environments and documented the findings.",
      objective: "Recognize common web application attack patterns and record observable behavior in a safe lab.",
      implementation: "Reviewed attack scenarios in training environments and documented traffic behavior, observations, and security takeaways.",
      result: "The report preserves the analysis, screenshots, and lessons from the lab.",
      tags: ["Web Security", "HTTP", "Security Fundamentals", "Lab Documentation"],
      links: [{ label: "Open lab report", href: "./assets/pdf/analyzing-types-of-web-application-attacks.pdf", available: true }]
    },
    {
      shortTitle: "Phishing awareness presentation",
      title: "Phishing Awareness Mini Presentation",
      category: "Security",
      icon: "shield",
      projectType: "Virtual job simulation deliverable",
      role: "Creator",
      dates: "2025",
      summary: "Created a short security awareness presentation focused on spotting phishing patterns and safer habits.",
      cardSummary: "Turned common phishing patterns into practical security advice that users can act on.",
      objective: "Explain common phishing warning signs in plain language for a nontechnical audience.",
      implementation: "Converted findings from a phishing analysis simulation into a short awareness presentation with practical user actions.",
      result: "The project remains represented, but a public slide link has not been provided.",
      tags: ["Security Awareness", "Phishing", "Communication"],
      links: [{ label: "Presentation slides", href: "PASTE_SLIDES_LINK", available: false, note: "Presentation unavailable: no approved public slide link is configured." }]
    },
    {
      shortTitle: "Pizza ordering SQL database",
      title: "Pizza Ordering SQL Database",
      category: "Database",
      icon: "database",
      projectType: "Academic database project",
      role: "Student and developer",
      dates: "Feb 2026",
      summary: "Designed and built a relational database for a pizza ordering system, created tables with keys and constraints, and practiced CRUD operations. Documented results with screenshots and query outputs.",
      cardSummary: "Designed relational tables, keys, and constraints, then practiced SQL queries and CRUD operations.",
      objective: "Model a pizza ordering workflow as a relational database and practice common data operations.",
      implementation: "Created related tables with keys and constraints, then ran create, read, update, and delete queries.",
      result: "The report includes the schema work, query outputs, and screenshots from the project.",
      tags: ["MySQL", "SQL", "Database Design", "CRUD", "Foreign Keys"],
      links: [{ label: "Open database report", href: "./assets/pdf/pizza-ordering-system.pdf", available: true }]
    },
    {
      shortTitle: "IT Message Writer",
      title: "IT Message Writer",
      category: "IT Support",
      icon: "support",
      projectType: "Independent web project",
      role: "Builder",
      dates: "2026",
      summary: "Built a simple web tool that creates clean support emails, chats, and ticket updates that can be copied and reused. The project focuses on clear IT communication and safe handling of sensitive information.",
      cardSummary: "Built a browser tool for writing clear support emails, chats, and ticket updates.",
      objective: "Make routine IT support messages easier to draft consistently without including sensitive information.",
      implementation: "Built a lightweight HTML, CSS, and JavaScript interface that formats reusable support messages and copies them to the clipboard.",
      result: "The tool is available as a live project, and its source is published in a separate GitHub repository.",
      tags: ["JavaScript", "HTML", "CSS", "IT Support"],
      links: [
        { label: "Open live tool", href: "https://j8roque.github.io/it-message-writer/", available: true },
        { label: "View repository", href: "https://github.com/J8Roque/it-message-writer", available: true }
      ]
    }
  ],

  articles: [
    {
      title: "My Troubleshooting Checklist for Common IT Issues",
      date: "2026",
      summary: "A practical checklist I follow for login, Wi-Fi, printing, and slow-device issues, plus what to document in the ticket.",
      tags: ["IT Support", "Troubleshooting", "Documentation", "Workflow"],
      href: "./assets/pdf/my-troubleshooting-checklist-portfolio-2026.pdf",
      available: true
    },
    {
      title: "What I Learned Setting Up a Home Lab",
      date: "2026",
      summary: "How I set up my lab environment, what I tested first, and the small habits that saved me time later.",
      tags: ["Systems", "Learning"],
      href: "PASTE_ARTICLE_LINK",
      available: false
    },
    {
      title: "Phishing Red Flags I Watch For",
      date: "2025",
      summary: "A short guide to common phishing patterns and the actions that reduce risk quickly.",
      tags: ["Security", "Awareness"],
      href: "PASTE_ARTICLE_LINK",
      available: false
    }
  ],

  contact: {
    email: "",
    github: "https://github.com/J8Roque",
    linkedin: "https://www.linkedin.com/in/jemmyroque/",
    other: [{ label: "Credly", href: "https://www.credly.com/users/jemmyroque" }]
  }
};

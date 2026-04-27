window.portfolioData = {
  profile: {
    name: "Théo BORTOLOTTO",
    initials: "TB",
    role: "Administrateur Systèmes & Réseaux",
    status: "Etudiant CESI - Infrastructures & Cybersécurité",
    tagline:
      "Je construis mon parcours autour de l'administration systèmes/réseaux, de la sécurité et du suivi de projets IT.",
    location: "Nancy / Luxembourg",
    email: "theo.bortolotto@yahoo.com",
    phone: "06 15 66 24 01",
    linkedin: "https://www.linkedin.com/in/t-bortolotto",
    github: "",
    cv: "assets/cv.pdf",
    cvDownloadName: "CV_Theo_BORTOLOTTO.pdf",
    targetRoles: ["Administrateur Systèmes et Réseaux", "Consultant IT", "Chef de projet IT Junior"],
    jobDetails: [
      { label: "Disponibilité", value: "Octobre 2026" },
      { label: "Mobilité", value: "Luxembourg / Grand Est" },
      { label: "Permis", value: "Permis B - véhiculé" }
    ],
    about: [
      "Je suis en Master Manager en Infrastructures et Cybersécurité des Systèmes d'Information au CESI de Nancy. Mon fil conducteur est assez simple : comprendre le besoin, garder une vision terrain et produire quelque chose de clair à exploiter.",
      "En alternance, j'ai travaillé sur du support N1/N2, du poste de travail, du réseau, de l'inventaire, Intune, des migrations et des sujets de sécurité. J'aime quand une infrastructure est documentée, maintenable et compréhensible par les utilisateurs.",
      "Pour octobre 2026, je vise un poste d'Administrateur Systèmes et Réseaux, Consultant IT ou Chef de projet IT Junior, idéalement sur le Luxembourg."
    ],
    tags: ["CESI Nancy", "Recherche emploi", "Disponible octobre 2026", "Mobilité Luxembourg / Grand Est"],
    metrics: [
      { value: "5 ans", label: "d'alternance IT" },
      { value: "4", label: "cubes CESI présentés" },
      { value: "N1/N2", label: "support utilisateurs" }
    ]
  },

  skills: [
    {
      category: "Systèmes",
      items: ["Windows", "Linux", "VMware", "Hyper-V", "VirtualBox", "Intune", "Sauvegardes"]
    },
    {
      category: "Réseaux",
      items: ["Cisco", "CCNA 1", "Aruba", "Wi-Fi", "Commutateurs", "Architecture réseau", "Visio"]
    },
    {
      category: "Support & exploitation",
      items: ["Support N1/N2", "GLPI", "ServiceNow", "SOTI", "Inventaire", "Masterisation", "Documentation IT"]
    },
    {
      category: "Gestion de projet",
      items: ["PMP", "ITIL", "Coordination", "Ticketing", "Migration cloud", "Plan de formation", "Suivi d'actions"]
    },
    {
      category: "Cybersécurité",
      items: ["Sécurisation SI", "Gestion des risques", "Bonnes pratiques", "Monitoring", "Root Me", "Anglais technique"]
    },
    {
      category: "Outils",
      items: ["Microsoft 365", "Excel", "Word", "Visio", "Notion", "Packet Tracer", "Aruba Central"]
    }
  ],

  softSkills: [
    {
      title: "Rigueur",
      text: "Je fais attention à la documentation, aux procédures et aux impacts avant de modifier une infrastructure."
    },
    {
      title: "Sens du service",
      text: "Le support m'a appris à rester clair, patient et utile, même quand la demande arrive dans l'urgence."
    },
    {
      title: "Curiosité technique",
      text: "J'aime comprendre le pourquoi d'un incident ou d'une configuration, pas seulement appliquer une correction."
    },
    {
      title: "Communication",
      text: "Je sais reformuler un sujet technique pour des utilisateurs, une direction ou une équipe projet."
    }
  ],

  interests: [
    {
      title: "Root Me et cybersécurité",
      text: "Challenges sécurité, prise de notes et entraînement à raisonner proprement face à un problème technique.",
      link: ""
    },
    {
      title: "Veille infrastructure et cloud",
      text: "Suivi des sujets Microsoft 365, réseau, sauvegarde, supervision et bonnes pratiques de sécurisation.",
      link: ""
    },
    {
      title: "Labs et tests techniques",
      text: "Virtualisation, scénarios réseau, essais de configuration et reproduction de problèmes pour apprendre sans casser une prod.",
      link: ""
    },
    {
      title: "Documentation et cartographie",
      text: "Plans réseau, inventaires et notes techniques : c'est moins spectaculaire, mais très utile pour exploiter un SI.",
      link: ""
    }
  ],

  cubeCategories: ["Infrastructure", "Gestion de projet", "Cybersécurité", "ITIL"],

  cubes: [
    {
      id: "cube-1-smartfactory",
      title: "Cube 1 - SmartFactory : renouvellement du parc et architecture hybride",
      category: "Infrastructure",
      year: "2025",
      summary:
        "Etude d'un SI industriel vieillissant, puis proposition d'une architecture hybride plus moderne pour les sites de production.",
      problem:
        "Comment moderniser une infrastructure multi-sites avec des serveurs obsolètes, peu de supervision, un réseau peu segmenté et des équipements industriels à renouveler ?",
      context:
        "Travail individuel réalisé dans le contexte SmartFactory : 800 employés, 4 sites de production, Windows Server 2008 R2, Exchange 2010, ERP maison, switches non managés et peu d'outils de cybersécurité.",
      solution:
        "Proposition d'une cible hybride : cloud et on-premise, migration Microsoft 365, mise à jour Active Directory, réseau modernisé, supervision, sauvegardes 3-2-1 et renouvellement du matériel industriel.",
      technologies: ["Windows Server 2022", "Microsoft 365", "Azure / OVH", "Cisco", "Aruba", "pfSense", "Zabbix", "NAS Synology"],
      deliverables: ["Audit de l'existant", "Note de cadrage", "Analyse des risques", "Architecture cible", "Planning prévisionnel", "Matrice RACI", "Plan de déploiement et formation", "Contrat de maintenance"],
      competencies: ["Audit d'infrastructure", "Architecture hybride", "Réseau industriel", "Planification", "Gestion des risques", "Documentation technique"],
      documents: [
        {
          label: "Présentation SmartFactory",
          type: "PowerPoint",
          path: "assets/cubes/cube1-smartfactory-presentation.pptx",
          viewable: false
        },
        {
          label: "Contexte du sujet",
          type: "Word",
          path: "assets/cubes/cube1-smartfactory-contexte.docx",
          viewable: false
        }
      ],
      documentPreview: [
        {
          title: "Contexte de départ",
          items: ["Groupe industriel de 800 employés répartis sur 4 sites dans le Grand-Est.", "Infrastructure vieillissante : Windows Server 2008 R2, Exchange 2010, ERP maison et réseau peu maîtrisé.", "Faible supervision, peu d'outils cybersécurité, switches non managés et manque de segmentation."]
        },
        {
          title: "Travail réalisé",
          items: ["Audit de l'existant et identification des limites techniques.", "Proposition d'une architecture hybride cloud / on-premise.", "Choix de solutions pour le réseau, les systèmes, la supervision, la sauvegarde et le renouvellement industriel."]
        },
        {
          title: "Points importants du dossier",
          items: ["Migration Microsoft 365 et mise à jour Active Directory.", "Modernisation réseau avec SD-WAN, VLAN, Wi-Fi, firewall et supervision.", "Sauvegarde 3-2-1, PCA/PRA, planning, matrice RACI et contrat de maintenance."]
        }
      ],
      result:
        "Une proposition complète de modernisation, avec une trajectoire de migration, des choix techniques justifiés et une prise en compte du recyclage des anciens équipements."
    },
    {
      id: "cube-2-pmp-microsoft-365",
      title: "Cube 2 - PMP Microsoft 365 : cadrer et piloter une migration",
      category: "Gestion de projet",
      year: "2025",
      summary:
        "Construction d'un Plan de Management de Projet pour organiser une migration Microsoft 365 de façon réaliste.",
      problem:
        "Comment cadrer une migration Microsoft 365 sans perdre de vue le périmètre, les risques, les utilisateurs, les délais et la conduite du changement ?",
      context:
        "Partie individuelle centrée sur la gestion de projet : clarification du besoin, organisation du pilotage, identification des acteurs et préparation des livrables de suivi.",
      solution:
        "Formalisation d'un PMP avec gouvernance, planning, lots de travail, risques, communication, accompagnement des utilisateurs et critères de validation.",
      technologies: ["Microsoft 365", "Teams", "SharePoint", "Exchange Online", "PMP", "WBS", "RACI", "Planning"],
      deliverables: ["Plan de Management de Projet", "Périmètre projet", "Planning", "Organisation des responsabilités", "Registre des risques", "Plan de communication", "Plan d'accompagnement"],
      competencies: ["Cadrage projet", "Gestion des parties prenantes", "Planification", "Suivi des risques", "Communication", "Conduite du changement"],
      documents: [
        {
          label: "PMP Microsoft 365",
          type: "PDF",
          path: "assets/cubes/cube2-pmp-microsoft365.pdf",
          viewable: true
        }
      ],
      documentPreview: [
        {
          title: "Objectif du document",
          items: ["Formaliser le pilotage d'une migration Microsoft 365.", "Donner un cadre au projet : périmètre, responsabilités, suivi, risques et communication.", "Préparer une migration lisible pour l'équipe projet comme pour les utilisateurs."]
        },
        {
          title: "Ce que le PMP met en avant",
          items: ["Organisation du projet et responsabilités.", "Planification, lots de travail et critères de validation.", "Gestion des risques, communication et accompagnement du changement."]
        }
      ],
      result:
        "Un dossier de pilotage structuré, pensé pour suivre la migration et garder une vision claire des décisions à prendre."
    },
    {
      id: "cube-3-securisation-si",
      title: "Cube 3 - Sécuriser les infrastructures du SI",
      category: "Cybersécurité",
      year: "2026",
      summary:
        "Suite logique du Cube 1 : reprendre l'infrastructure cible et renforcer sa sécurité avant mise en exploitation.",
      problem:
        "Comment sécuriser une infrastructure modernisée tout en gardant de la disponibilité, de la lisibilité et des procédures exploitables ?",
      context:
        "Travail individuel dans la continuité de SmartFactory, avec un angle sécurité : segmentation, gestion des accès, supervision, sauvegardes et continuité d'activité.",
      solution:
        "Priorisation de mesures concrètes : durcissement des accès, segmentation réseau, règles firewall/VPN, sauvegardes, supervision, procédures de réponse à incident et sensibilisation.",
      technologies: ["VLAN", "Firewall", "VPN", "MFA", "Active Directory", "Sauvegardes", "Supervision", "PCA / PRA"],
      deliverables: ["Analyse des risques", "Plan de sécurisation", "Schéma cible sécurisé", "Mesures de durcissement", "Procédures d'exploitation", "Plan de remédiation", "Synthèse de continuité"],
      competencies: ["Cybersécurité infrastructure", "Gestion des risques", "Segmentation réseau", "Contrôle d'accès", "Continuité d'activité", "Documentation sécurité"],
      documents: [
        {
          label: "Sécuriser les infrastructures du SI",
          type: "PDF",
          path: "assets/cubes/cube3-securisation-si.pdf",
          viewable: true
        }
      ],
      documentPreview: [
        {
          title: "Lien avec le Cube 1",
          items: ["Le Cube 3 reprend la logique SmartFactory avec un angle sécurité.", "L'objectif est de durcir l'infrastructure cible avant son exploitation.", "Le travail relie les choix techniques aux risques du contexte industriel."]
        },
        {
          title: "Axes de sécurisation",
          items: ["Segmentation réseau, contrôle d'accès, firewall, VPN et MFA.", "Supervision, sauvegardes, procédures d'exploitation et continuité d'activité.", "Plan de remédiation et priorisation des actions selon les risques."]
        }
      ],
      result:
        "Une approche de sécurisation progressive, reliée aux risques du contexte industriel et utilisable par une équipe IT."
    },
    {
      id: "cube-4-itil",
      title: "Cube 4 - ITIL : structurer les services IT",
      category: "ITIL",
      year: "A venir",
      summary:
        "Projet à venir autour de la gestion des services IT : incidents, demandes, changements, documentation et amélioration continue.",
      problem:
        "Comment organiser un service IT pour mieux traiter les demandes, prioriser les incidents et fiabiliser les changements ?",
      context:
        "Cube prévu sur la partie ITIL, dans la continuité des sujets déjà vus : support, exploitation, documentation et pilotage du service.",
      solution:
        "Mise en place attendue d'une logique de catalogue de services, de workflow incidents/demandes, de gestion des changements, d'indicateurs et de base de connaissances.",
      technologies: ["ITIL", "GLPI", "ServiceNow", "SLA", "KPI", "Catalogue de services", "Base de connaissances"],
      deliverables: ["Cartographie des services", "Processus incidents et demandes", "Modèle de priorisation", "Processus de changement", "Indicateurs de suivi", "Plan d'amélioration continue"],
      competencies: ["IT Service Management", "Support IT", "Amélioration continue", "Qualité de service", "Communication utilisateurs", "Pilotage opérationnel"],
      documents: [],
      documentPreview: [
        {
          title: "Préparation du Cube 4",
          items: ["Le sujet portera sur ITIL et la gestion des services IT.", "L'objectif sera de relier support, incidents, demandes, changements et amélioration continue.", "La page sera complétée quand les livrables seront produits."]
        }
      ],
      result:
        "Un cube à compléter, déjà positionné dans le portfolio pour montrer la suite logique de mon parcours."
    }
  ],

  projects: [
    {
      title: "Lab cybersécurité Root Me",
      description:
        "Entraînement personnel sur Root Me pour garder la main sur les bases sécurité, avec prise de notes et reprise des méthodes après chaque challenge.",
      technologies: ["Root Me", "Linux", "Réseau", "Bonnes pratiques"],
      github: "",
      demo: ""
    },
    {
      title: "Cartographie réseau et documentation",
      description:
        "Travail de remise au propre des plans réseau : équipements, rôles, liens importants et points à vérifier lors d'une intervention.",
      technologies: ["Visio", "Cisco", "Aruba", "Notion"],
      github: "",
      demo: ""
    },
    {
      title: "Suivi de parc et support IT",
      description:
        "Modèle de suivi pour relier inventaire, demandes utilisateurs, interventions et priorités de maintenance sans disperser les informations.",
      technologies: ["Excel", "GLPI", "ServiceNow", "Support N1/N2"],
      github: "",
      demo: ""
    }
  ],

  educationCurrent: {
    period: "2024 - 2026",
    title: "Master Manager en Infrastructures et Cybersécurité des SI - CESI Nancy",
    description:
      "Diplôme en cours. Formation centrée sur les infrastructures, la cybersécurité, la gouvernance IT, la gestion de projet et l'amélioration continue."
  },

  education: [
    {
      period: "2023 - 2024",
      title: "Licence Administrateur Systèmes et Réseaux - CESI Nancy",
      description:
        "Administration systèmes, réseaux, environnements Windows/Linux, exploitation et documentation technique."
    },
    {
      period: "2021 - 2023",
      title: "BTS Technicien Systèmes et Réseaux - CESI Nancy",
      description:
        "Bases support, maintenance, déploiement, systèmes, réseaux et relation utilisateur."
    }
  ],

  experiences: [
    {
      period: "Octobre 2024 - Septembre 2026",
      title: "Référent informatique et gestionnaire de projet - EHPAD Saint-Charles",
      description:
        "Gestion de l'infrastructure, support utilisateurs, sécurisation du SI, ticketing, stock, migrations cloud, plan de formation et préparation à une évaluation externe.",
      done: ["Gestion du support et des demandes utilisateurs", "Suivi du parc et du stock informatique", "Participation à des migrations cloud", "Mise en place de documents et procédures"],
      learned: ["Prioriser dans un environnement sensible", "Expliquer l'IT à des utilisateurs non techniques", "Relier exploitation, sécurité et gestion de projet"]
    },
    {
      period: "Septembre 2023 - Septembre 2024",
      title: "Administrateur Systèmes et Réseaux - Nestlé Waters",
      description:
        "Projet de migration Wi-Fi vers Aruba, modification d'architecture réseau, supervision SOTI, plans réseau Visio, Intune et configuration de commutateurs Cisco.",
      done: ["Préparation d'une migration Wi-Fi Aruba", "Mise à jour de plans réseau", "Suivi d'équipements via SOTI", "Configuration et vérification d'équipements Cisco"],
      learned: ["Travailler sur une infrastructure industrielle", "Mesurer l'impact d'une modification réseau", "Documenter pour faciliter les interventions suivantes"]
    },
    {
      period: "2021 - 2023",
      title: "Technicien Systèmes et Réseaux - Nestlé Waters",
      description:
        "Support niveau 1 et 2, déploiement de postes, smartphones, iPad, terminaux industriels, inventaire réseau et masterisation.",
      done: ["Support utilisateurs N1/N2", "Déploiement de postes et terminaux mobiles", "Masterisation et préparation de matériel", "Inventaire et premières actions réseau"],
      learned: ["Diagnostiquer rapidement", "Garder une relation utilisateur propre", "Comprendre les contraintes du terrain industriel"]
    }
  ]
};

window.portfolioDataEn = {
  profile: {
    name: "Théo BORTOLOTTO",
    initials: "TB",
    role: "Systems & Network Administrator",
    status: "CESI student - Infrastructure & Cybersecurity",
    tagline:
      "I am building my path around systems and network administration, security and IT project coordination.",
    location: "Nancy / Luxembourg",
    email: "theo.bortolotto@yahoo.com",
    phone: "06 15 66 24 01",
    linkedin: "https://www.linkedin.com/in/t-bortolotto",
    github: "",
    cv: "assets/resume.pdf",
    cvDownloadName: "Resume_Theo_BORTOLOTTO.pdf",
    targetRoles: ["Systems and Network Administrator", "IT Consultant", "Junior IT Project Manager"],
    jobDetails: [
      { label: "Availability", value: "October 2026" },
      { label: "Mobility", value: "Luxembourg / Grand Est" },
      { label: "Driving licence", value: "Full licence - own vehicle" }
    ],
    about: [
      "I am completing a Master's degree in Infrastructure and Information Systems Cybersecurity Management at CESI Nancy. My approach is practical: understand the need, stay close to the field and produce work that is clear to operate.",
      "During my work-study roles, I have worked on L1/L2 support, workstations, networking, inventory, Intune, migrations and security topics. I like infrastructures that are documented, maintainable and understandable for users.",
      "From October 2026, I am looking for a Systems and Network Administrator, IT Consultant or Junior IT Project Manager role, ideally in Luxembourg."
    ],
    tags: ["CESI Nancy", "Open to opportunities", "Available October 2026", "Luxembourg / Grand Est mobility"],
    metrics: [
      { value: "5 years", label: "IT work-study experience" },
      { value: "4", label: "CESI cases presented" },
      { value: "L1/L2", label: "user support" }
    ]
  },

  skills: [
    {
      category: "Systems",
      items: ["Windows", "Linux", "VMware", "Hyper-V", "VirtualBox", "Intune", "Backups"]
    },
    {
      category: "Networks",
      items: ["Cisco", "CCNA 1", "Aruba", "Wi-Fi", "Switches", "Network architecture", "Visio"]
    },
    {
      category: "Support & operations",
      items: ["L1/L2 support", "GLPI", "ServiceNow", "SOTI", "Inventory", "Imaging", "IT documentation"]
    },
    {
      category: "Project management",
      items: ["PMP", "ITIL", "Coordination", "Ticketing", "Cloud migration", "Training plan", "Action tracking"]
    },
    {
      category: "Cybersecurity",
      items: ["IS hardening", "Risk management", "Best practices", "Monitoring", "Root Me", "Technical English"]
    },
    {
      category: "Tools",
      items: ["Microsoft 365", "Excel", "Word", "Visio", "Notion", "Packet Tracer", "Aruba Central"]
    }
  ],

  softSkills: [
    {
      title: "Rigor",
      text: "I pay attention to documentation, procedures and impact before changing an infrastructure."
    },
    {
      title: "Service mindset",
      text: "Support taught me to stay clear, patient and useful, even when requests arrive under pressure."
    },
    {
      title: "Technical curiosity",
      text: "I like understanding why an incident or configuration behaves a certain way, not only applying a fix."
    },
    {
      title: "Communication",
      text: "I can rephrase a technical topic for users, management or a project team."
    }
  ],

  interests: [
    {
      title: "Root Me and cybersecurity",
      text: "Security challenges, note-taking and practice to reason cleanly when facing a technical problem.",
      link: ""
    },
    {
      title: "Infrastructure and cloud watch",
      text: "Following Microsoft 365, networking, backup, monitoring and security best practices.",
      link: ""
    },
    {
      title: "Labs and technical tests",
      text: "Virtualization, network scenarios, configuration tests and problem reproduction to learn without breaking production.",
      link: ""
    },
    {
      title: "Documentation and mapping",
      text: "Network diagrams, inventories and technical notes: less flashy, but very useful for operating an IS.",
      link: ""
    }
  ],

  cubeCategories: ["Infrastructure", "Project Management", "Cybersecurity", "ITIL"],

  cubes: [
    {
      id: "cube-1-smartfactory",
      title: "Cube 1 - SmartFactory: asset renewal and hybrid architecture",
      category: "Infrastructure",
      year: "2025",
      summary:
        "Review of an ageing industrial information system, followed by a modern hybrid architecture proposal for production sites.",
      problem:
        "How can a multi-site infrastructure be modernized when servers are obsolete, monitoring is limited, the network is poorly segmented and industrial equipment needs renewal?",
      context:
        "Individual work based on the SmartFactory case: 800 employees, 4 production sites, Windows Server 2008 R2, Exchange 2010, a legacy ERP, unmanaged switches and few cybersecurity tools.",
      solution:
        "Proposal of a hybrid target architecture: cloud and on-premise, Microsoft 365 migration, Active Directory update, network modernization, monitoring, 3-2-1 backups and industrial hardware renewal.",
      technologies: ["Windows Server 2022", "Microsoft 365", "Azure / OVH", "Cisco", "Aruba", "pfSense", "Zabbix", "Synology NAS"],
      deliverables: ["Current-state audit", "Project brief", "Risk analysis", "Target architecture", "Forecast schedule", "RACI matrix", "Deployment and training plan", "Maintenance contract"],
      competencies: ["Infrastructure audit", "Hybrid architecture", "Industrial networking", "Planning", "Risk management", "Technical documentation"],
      documents: [
        {
          label: "SmartFactory presentation",
          type: "PowerPoint",
          path: "assets/cubes/cube1-smartfactory-presentation.pptx",
          viewable: false
        },
        {
          label: "Case context",
          type: "Word",
          path: "assets/cubes/cube1-smartfactory-contexte.docx",
          viewable: false
        }
      ],
      documentPreview: [
        {
          title: "Starting context",
          items: ["Industrial group with 800 employees across 4 sites in eastern France.", "Ageing infrastructure: Windows Server 2008 R2, Exchange 2010, legacy ERP and poorly controlled network.", "Limited monitoring, few cybersecurity tools, unmanaged switches and little segmentation."]
        },
        {
          title: "Work carried out",
          items: ["Current-state audit and identification of technical limitations.", "Proposal of a hybrid cloud / on-premise architecture.", "Technical choices for network, systems, monitoring, backup and industrial equipment renewal."]
        },
        {
          title: "Key points",
          items: ["Microsoft 365 migration and Active Directory update.", "Network modernization with SD-WAN, VLANs, Wi-Fi, firewall and monitoring.", "3-2-1 backup, BCP/DRP, schedule, RACI matrix and maintenance contract."]
        }
      ],
      result:
        "A complete modernization proposal, with a migration path, justified technical choices and a responsible plan for obsolete equipment."
    },
    {
      id: "cube-2-pmp-microsoft-365",
      title: "Cube 2 - Microsoft 365 PMP: framing and managing a migration",
      category: "Project Management",
      year: "2025",
      summary:
        "Creation of a Project Management Plan to organize a Microsoft 365 migration in a realistic way.",
      problem:
        "How can a Microsoft 365 migration be framed while keeping scope, risks, users, deadlines and change management under control?",
      context:
        "Individual project management work focused on clarifying the need, organizing governance, identifying stakeholders and preparing tracking deliverables.",
      solution:
        "Formalization of a PMP covering governance, schedule, work packages, risks, communication, user support and validation criteria.",
      technologies: ["Microsoft 365", "Teams", "SharePoint", "Exchange Online", "PMP", "WBS", "RACI", "Schedule"],
      deliverables: ["Project Management Plan", "Project scope", "Schedule", "Responsibility structure", "Risk register", "Communication plan", "Change support plan"],
      competencies: ["Project framing", "Stakeholder management", "Planning", "Risk tracking", "Communication", "Change management"],
      documents: [
        {
          label: "Microsoft 365 PMP",
          type: "PDF",
          path: "assets/cubes/cube2-pmp-microsoft365.pdf",
          viewable: true
        }
      ],
      documentPreview: [
        {
          title: "Document goal",
          items: ["Formalize the steering of a Microsoft 365 migration.", "Frame the project: scope, responsibilities, tracking, risks and communication.", "Prepare a migration that stays readable for both the project team and users."]
        },
        {
          title: "What the PMP highlights",
          items: ["Project organization and responsibilities.", "Planning, work packages and validation criteria.", "Risk management, communication and change support."]
        }
      ],
      result:
        "A structured steering file designed to track the migration and keep decisions clear."
    },
    {
      id: "cube-3-securisation-si",
      title: "Cube 3 - Securing information system infrastructures",
      category: "Cybersecurity",
      year: "2026",
      summary:
        "A direct continuation of Cube 1: taking the target infrastructure and strengthening its security before operation.",
      problem:
        "How can a modernized infrastructure be secured while preserving availability, clarity and usable operating procedures?",
      context:
        "Individual work following the SmartFactory case, with a security angle: segmentation, access management, monitoring, backups and business continuity.",
      solution:
        "Prioritization of concrete measures: access hardening, network segmentation, firewall/VPN rules, backups, monitoring, incident response procedures and awareness.",
      technologies: ["VLAN", "Firewall", "VPN", "MFA", "Active Directory", "Backups", "Monitoring", "BCP / DRP"],
      deliverables: ["Risk analysis", "Security plan", "Secure target diagram", "Hardening measures", "Operating procedures", "Remediation plan", "Continuity summary"],
      competencies: ["Infrastructure security", "Risk management", "Network segmentation", "Access control", "Business continuity", "Security documentation"],
      documents: [
        {
          label: "Securing IS infrastructures",
          type: "PDF",
          path: "assets/cubes/cube3-securisation-si.pdf",
          viewable: true
        }
      ],
      documentPreview: [
        {
          title: "Link with Cube 1",
          items: ["Cube 3 continues the SmartFactory logic with a security angle.", "The goal is to harden the target infrastructure before operation.", "The work connects technical choices to industrial-context risks."]
        },
        {
          title: "Security focus areas",
          items: ["Network segmentation, access control, firewall, VPN and MFA.", "Monitoring, backups, operating procedures and business continuity.", "Remediation plan and prioritization according to risk."]
        }
      ],
      result:
        "A progressive security approach connected to the risks of an industrial context and usable by an IT team."
    },
    {
      id: "cube-4-itil",
      title: "Cube 4 - ITIL: structuring IT services",
      category: "ITIL",
      year: "Upcoming",
      summary:
        "Upcoming project on IT service management: incidents, requests, changes, documentation and continuous improvement.",
      problem:
        "How can an IT service be organized to handle requests better, prioritize incidents and make changes more reliable?",
      context:
        "Planned ITIL case, following the topics already covered: support, operations, documentation and service steering.",
      solution:
        "Expected implementation of a service catalogue approach, incident/request workflow, change management, indicators and knowledge base.",
      technologies: ["ITIL", "GLPI", "ServiceNow", "SLA", "KPI", "Service catalogue", "Knowledge base"],
      deliverables: ["Service mapping", "Incident and request processes", "Prioritization model", "Change process", "Tracking indicators", "Continuous improvement plan"],
      competencies: ["IT Service Management", "IT support", "Continuous improvement", "Service quality", "User communication", "Operational steering"],
      documents: [],
      documentPreview: [
        {
          title: "Preparing Cube 4",
          items: ["The topic will focus on ITIL and IT service management.", "The goal will be to connect support, incidents, requests, changes and continuous improvement.", "The page will be completed when the deliverables are produced."]
        }
      ],
      result:
        "A case to complete, already positioned in the portfolio to show the next step in my path."
    }
  ],

  projects: [
    {
      title: "Root Me cybersecurity lab",
      description:
        "Personal Root Me practice to keep working on security fundamentals, with notes and method review after each challenge.",
      technologies: ["Root Me", "Linux", "Network", "Best practices"],
      github: "",
      demo: ""
    },
    {
      title: "Network mapping and documentation",
      description:
        "Network diagram cleanup work: equipment, roles, key links and checks to perform during interventions.",
      technologies: ["Visio", "Cisco", "Aruba", "Notion"],
      github: "",
      demo: ""
    },
    {
      title: "Asset tracking and IT support workflow",
      description:
        "Tracking model connecting inventory, user requests, interventions and maintenance priorities without scattering information.",
      technologies: ["Excel", "GLPI", "ServiceNow", "L1/L2 support"],
      github: "",
      demo: ""
    }
  ],

  educationCurrent: {
    period: "2024 - 2026",
    title: "Master's degree in Infrastructure and IS Cybersecurity Management - CESI Nancy",
    description:
      "Degree in progress. Training focused on infrastructure, cybersecurity, IT governance, project management and continuous improvement."
  },

  education: [
    {
      period: "2023 - 2024",
      title: "Bachelor's degree - Systems and Network Administrator - CESI Nancy",
      description:
        "System administration, networking, Windows/Linux environments, operations and technical documentation."
    },
    {
      period: "2021 - 2023",
      title: "Higher Technician Diploma - Systems and Network Technician - CESI Nancy",
      description:
        "Foundations in support, maintenance, deployment, systems, networks and user relations."
    }
  ],

  experiences: [
    {
      period: "October 2024 - September 2026",
      title: "IT referent and project manager - EHPAD Saint-Charles",
      description:
        "Infrastructure management, user support, IS hardening, ticketing, stock management, cloud migrations, training plan and preparation for an external assessment.",
      done: ["Managed support and user requests", "Tracked IT assets and stock", "Contributed to cloud migrations", "Created documents and procedures"],
      learned: ["Prioritizing in a sensitive environment", "Explaining IT to non-technical users", "Connecting operations, security and project management"]
    },
    {
      period: "September 2023 - September 2024",
      title: "Systems and Network Administrator - Nestlé Waters",
      description:
        "Wi-Fi migration project to Aruba, network architecture changes, SOTI monitoring, Visio network diagrams, Intune and Cisco switch configuration.",
      done: ["Prepared an Aruba Wi-Fi migration", "Updated network diagrams", "Tracked devices with SOTI", "Configured and checked Cisco equipment"],
      learned: ["Working on industrial infrastructure", "Assessing the impact of network changes", "Documenting to make future interventions easier"]
    },
    {
      period: "2021 - 2023",
      title: "Systems and Network Technician - Nestlé Waters",
      description:
        "Level 1 and 2 support, deployment of workstations, smartphones, iPads, industrial terminals, network inventory and device imaging.",
      done: ["L1/L2 user support", "Deployment of workstations and mobile terminals", "Device imaging and preparation", "Inventory and first network tasks"],
      learned: ["Diagnosing quickly", "Keeping user relations clean", "Understanding industrial field constraints"]
    }
  ]
};

window.portfolioUi = {
  fr: {
    pageTitle: "Théo BORTOLOTTO | Portfolio IT",
    metaDescription:
      "Portfolio de Théo BORTOLOTTO, étudiant CESI en infrastructures et cybersécurité, à la recherche d'un poste d'administrateur systèmes et réseaux, consultant IT ou chef de projet IT junior.",
    navAbout: "A propos",
    navSkills: "Compétences",
    navProfile: "Profil",
    navCubes: "Cubes CESI",
    navProjects: "Projets",
    navTimeline: "Parcours",
    navContact: "Contact",
    cvButton: "Télécharger CV",
    heroPrimary: "Voir les Cubes CESI",
    heroSecondary: "Mes contacts",
    searchLabel: "Recherche actuelle",
    aboutEyebrow: "A propos",
    aboutTitle: "Terrain, support, infrastructure : c'est là que je progresse le plus.",
    skillsEyebrow: "Compétences",
    skillsTitle: "Ce que j'utilise vraiment dans mes projets et mes alternances.",
    skillsText:
      "Un aperçu simple des outils et sujets que j'ai manipulés en entreprise, en cube CESI ou sur mon temps personnel.",
    profileExtraEyebrow: "Savoir-être & centres d'intérêt",
    profileExtraTitle: "Ce que mes loisirs et ma manière de travailler apportent à mon profil IT.",
    profileExtraText:
      "J'ai gardé ici les éléments qui ont un vrai lien avec les postes que je vise : support, infrastructure, cybersécurité, conseil et gestion de projet.",
    softSkillsTitle: "Soft skills",
    interestsTitle: "Centres d'intérêt utiles au métier",
    cubesEyebrow: "Cubes CESI",
    cubesTitle: "Mes Cubes CESI, replacés dans leur contexte.",
    cubesText:
      "Je les présente comme des cas pratiques : le problème de départ, ce que j'ai proposé, les livrables et les compétences travaillées.",
    cubesIntroTitle: "C'est quoi un Cube CESI ?",
    cubesIntroText:
      "Un cube est un projet de formation CESI construit comme une mise en situation professionnelle. Il combine une partie groupe et une partie individuelle, avec un contexte, des livrables, une soutenance et des compétences à démontrer. Dans mon portfolio, je les présente comme des cas d'étude IT pour montrer ma démarche, pas seulement le résultat final.",
    cubesIntroPointOne: "Analyser un contexte réel ou réaliste",
    cubesIntroPointTwo: "Produire des livrables exploitables",
    cubesIntroPointThree: "Justifier les choix techniques et projet",
    openCubePage: "Ouvrir la page du cube",
    cubePageBack: "Retour au portfolio",
    cubePageEyebrow: "Détail du Cube CESI",
    cubeDocumentsTitle: "Documents du cube",
    cubeViewerTitle: "Visualisation du document",
    cubePreviewTitle: "Aperçu du contenu",
    cubeDownloadTitle: "Choisir un document",
    openDocument: "Visualiser",
    downloadDocument: "Visualiser",
    noEmbeddedViewer:
      "La visionneuse intégrée affiche un aperçu structuré de ce document.",
    viewerSelectedLabel: "Document sélectionné",
    viewerPageLabel: "Section",
    projectsEyebrow: "Projets personnels",
    projectsTitle: "Quelques travaux en plus du cursus.",
    projectsText:
      "Des sujets plus petits, mais utiles pour continuer à pratiquer et garder une trace de ce que j'apprends.",
    timelineEyebrow: "Parcours",
    timelineTitle: "Diplômes, master en cours et expériences pro, dans l'ordre.",
    currentEducationLabel: "Diplôme en cours",
    completedEducationLabel: "Diplômes obtenus",
    experienceLabel: "Expériences professionnelles",
    doneLabel: "Ce que j'ai fait",
    learnedLabel: "Ce que j'ai appris",
    contactEyebrow: "Contact",
    contactTitle: "Mes contacts",
    contactText:
      "Email, téléphone et LinkedIn : le plus simple pour me joindre directement.",
    footerSuffix: "Portfolio étudiant CESI.",
    allFilter: "Tous",
    problemLabel: "Problématique",
    contextLabel: "Contexte",
    solutionLabel: "Solution proposée",
    resultLabel: "Résultat / impact",
    technologiesLabel: "Technologies",
    deliverablesLabel: "Livrables",
    competenciesLabel: "Compétences développées",
    viewDetail: "Voir le détail",
    demoLink: "Démo",
    documentationOnRequest: "Détails disponibles sur demande",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    lightMode: "Activer le mode clair",
    darkMode: "Activer le mode sombre",
    switchLanguage: "Switch to English",
    filterAria: "Filtrer les cubes CESI",
    profileAlt: "Portrait professionnel illustré de Théo BORTOLOTTO",
    profileQuickInfo: "Informations rapides",
    backToTop: "Retour en haut",
    dialogClose: "Fermer le détail"
  },
  en: {
    pageTitle: "Théo BORTOLOTTO | IT Portfolio",
    metaDescription:
      "Portfolio of Théo BORTOLOTTO, CESI infrastructure and cybersecurity student, looking for a systems and network administrator, IT consultant or junior IT project manager role.",
    navAbout: "About",
    navSkills: "Skills",
    navProfile: "Profile",
    navCubes: "CESI Cases",
    navProjects: "Projects",
    navTimeline: "Background",
    navContact: "Contact",
    cvButton: "Download resume",
    heroPrimary: "View CESI cases",
    heroSecondary: "Contact details",
    searchLabel: "Current search",
    aboutEyebrow: "About",
    aboutTitle: "Field work, support and infrastructure are where I progress the most.",
    skillsEyebrow: "Skills",
    skillsTitle: "What I actually use in projects and work-study roles.",
    skillsText:
      "A simple overview of the tools and topics I have handled at work, in CESI cases or through personal practice.",
    profileExtraEyebrow: "Soft skills & interests",
    profileExtraTitle: "What my interests and working style bring to my IT profile.",
    profileExtraText:
      "I kept the elements that connect directly with the roles I am targeting: support, infrastructure, cybersecurity, consulting and project management.",
    softSkillsTitle: "Soft skills",
    interestsTitle: "Role-relevant interests",
    cubesEyebrow: "CESI cases",
    cubesTitle: "My CESI cases, with their real context.",
    cubesText:
      "Each case shows the starting issue, what I proposed, the deliverables and the skills I worked on.",
    cubesIntroTitle: "What is a CESI Cube?",
    cubesIntroText:
      "A cube is a CESI training project built as a professional scenario. It combines group work and individual work, with a context, deliverables, a presentation and skills to demonstrate. In this portfolio, I present them as IT case studies to show my approach, not only the final result.",
    cubesIntroPointOne: "Analyze a realistic professional context",
    cubesIntroPointTwo: "Produce usable deliverables",
    cubesIntroPointThree: "Justify technical and project choices",
    openCubePage: "Open case page",
    cubePageBack: "Back to portfolio",
    cubePageEyebrow: "CESI case detail",
    cubeDocumentsTitle: "Case documents",
    cubeViewerTitle: "Document viewer",
    cubePreviewTitle: "Content preview",
    cubeDownloadTitle: "Choose a document",
    openDocument: "View",
    downloadDocument: "View",
    noEmbeddedViewer:
      "The integrated viewer shows a structured preview of this document.",
    viewerSelectedLabel: "Selected document",
    viewerPageLabel: "Section",
    projectsEyebrow: "Personal projects",
    projectsTitle: "A few projects alongside the course.",
    projectsText:
      "Smaller topics that help me keep practicing and track what I learn.",
    timelineEyebrow: "Background",
    timelineTitle: "Degrees, current Master's and professional experience in order.",
    currentEducationLabel: "Degree in progress",
    completedEducationLabel: "Completed degrees",
    experienceLabel: "Professional experience",
    doneLabel: "What I did",
    learnedLabel: "What I learned",
    contactEyebrow: "Contact",
    contactTitle: "Contact details",
    contactText:
      "Email, phone and LinkedIn: the simplest ways to reach me directly.",
    footerSuffix: "CESI student portfolio.",
    allFilter: "All",
    problemLabel: "Problem",
    contextLabel: "Context",
    solutionLabel: "Proposed solution",
    resultLabel: "Result / impact",
    technologiesLabel: "Technologies",
    deliverablesLabel: "Deliverables",
    competenciesLabel: "Developed skills",
    viewDetail: "View details",
    demoLink: "Demo",
    documentationOnRequest: "Details available on request",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lightMode: "Enable light mode",
    darkMode: "Enable dark mode",
    switchLanguage: "Passer en français",
    filterAria: "Filter CESI cases",
    profileAlt: "Professional illustrated portrait of Théo BORTOLOTTO",
    profileQuickInfo: "Quick information",
    backToTop: "Back to top",
    dialogClose: "Close details"
  }
};

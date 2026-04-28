window.portfolioData = {
  profile: {
    name: "Théo BORTOLOTTO",
    initials: "TB",
    role: "Administrateur Systèmes & Réseaux",
    location: "Nancy / Luxembourg",
    email: "theo.bortolotto@yahoo.com",
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
      "Je suis en master infrastructures et cybersécurité au CESI de Nancy. J'avance surtout par le terrain : comprendre ce qui bloque, documenter proprement, puis proposer une solution qui tient dans la vraie vie.",
      "Mes alternances m'ont amené sur du support N1/N2, du réseau, de l'inventaire, des migrations, de la documentation et des sujets de sécurité. Ce que je cherche à montrer ici, ce n'est pas une liste de mots-clés : c'est ma façon de raisonner sur un SI.",
      "A partir d'octobre 2026, je vise un poste d'Administrateur Systèmes et Réseaux, Consultant IT ou Chef de projet IT Junior, avec une préférence pour le Luxembourg et le Grand Est."
    ],
    tags: ["Master MICSI", "Recherche emploi", "Disponible octobre 2026", "Luxembourg / Grand Est"],
    metrics: [
      { value: "5 ans", label: "d'alternance IT" },
      { value: "N1/N2", label: "support utilisateurs" }
    ]
  },

  skills: [
    {
      category: "Systèmes",
      items: ["Windows", "Linux", "VMware", "Hyper-V", "VirtualBox", "Sauvegardes", "Active Directory"]
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
      items: ["Sécurisation SI", "Gestion des risques", "EBIOS RM", "CISO Assistant", "Root Me", "Bonnes pratiques"]
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
      tools: ["Cisco ISR 4461", "Catalyst 9200 / 9500", "Aruba AP22", "pfSense", "Zabbix", "OVH", "Microsoft 365", "Synology NAS", "SAP"],
      references: ["Architecture hybride", "SD-WAN", "QoS", "VLAN", "RACI", "Sauvegarde 3-2-1", "PCA / PRA", "RTO / RPO"],
      deliverables: ["Audit de l'existant", "Note de cadrage", "Analyse des risques", "Architecture cible", "Planning prévisionnel", "Matrice RACI", "Plan de déploiement et formation", "Contrat de maintenance"],
      competencies: ["Audit d'infrastructure", "Architecture hybride", "Réseau industriel", "Planification", "Gestion des risques", "Documentation technique"],
      documents: [
        {
          label: "Présentation SmartFactory",
          type: "PDF",
          path: "assets/cubes/cube1-smartfactory-presentation.pdf",
          viewable: true,
          viewer: "pdf",
          summary:
            "Soutenance de modernisation IT : état des lieux, limites, cible hybride, choix réseau/système/industrie, budget, plan de déploiement et maintenance.",
          sections: [
            {
              title: "Ce que montre le PowerPoint",
              items: ["Contexte SmartFactory : 800 employés, 4 sites de production et SI vieillissant.", "Analyse des limites : Windows Server 2008, Exchange 2010, réseau non redondé, peu de supervision et segmentation faible.", "Cible proposée : SD-WAN, VLAN, Wi-Fi Aruba, firewall, Microsoft 365, supervision Zabbix et sauvegarde 3-2-1."]
            },
            {
              title: "Outils et choix visibles",
              items: ["Cisco ISR 4461, Catalyst 9200/9500, Aruba AP22, pfSense, Zabbix, OVH, Microsoft 365, Synology NAS et SAP.", "Matrice RACI, planning prévisionnel, analyse des risques, PCA/PRA, RTO/RPO et contrat de maintenance.", "Déploiement réseau, système, cloud et industriel avec formation des utilisateurs."]
            },
            {
              title: "Ce que je veux mettre en avant",
              items: ["Capacité à partir d'un SI existant et à construire une cible cohérente.", "Lecture réseau/système/sécurité au lieu d'une simple liste de matériel.", "Vision projet : planning, rôles, risques, coûts, remédiation et maintenance."]
            }
          ]
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
      tools: ["PMP", "WBS", "RACI", "Registre des risques", "Microsoft 365", "Teams", "SharePoint", "Exchange Online"],
      references: ["PMBOK / PMP", "Gouvernance projet", "Conduite du changement", "Plan de communication", "Gestion des parties prenantes"],
      deliverables: ["Plan de Management de Projet", "Périmètre projet", "Planning", "Organisation des responsabilités", "Registre des risques", "Plan de communication", "Plan d'accompagnement"],
      competencies: ["Cadrage projet", "Gestion des parties prenantes", "Planification", "Suivi des risques", "Communication", "Conduite du changement"],
      documents: [
        {
          label: "PMP Microsoft 365",
          type: "PDF",
          path: "assets/cubes/cube2-pmp-microsoft365.pdf",
          viewable: true,
          viewer: "pdf",
          summary:
            "Plan de management de projet pour une migration Microsoft 365 : cadrage, gouvernance, lots de travail, risques, communication et validation.",
          sections: [
            {
              title: "Synthèse claire du fichier",
              items: ["Le document sert à piloter une migration Microsoft 365, pas seulement à décrire la solution technique.", "Il structure le périmètre, les acteurs, les livrables, le planning et les critères de validation.", "Il met l'accent sur la communication, la conduite du changement et la gestion des risques."]
            },
            {
              title: "Outils et référentiels mis en avant",
              items: ["PMP/PMBOK pour la structure de pilotage.", "WBS pour découper le travail, RACI pour clarifier les responsabilités et registre des risques pour suivre les points sensibles.", "Microsoft 365, Teams, SharePoint et Exchange Online pour la cible de migration."]
            }
          ]
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
      tools: ["CISO Assistant", "EBIOS RM", "Active Directory", "MFA", "Firewall", "VPN", "Supervision", "Sauvegardes"],
      references: ["EBIOS RM", "ISO 27005", "CIS Controls", "Moindre privilège", "Défense en profondeur", "PCA / PRA"],
      deliverables: ["Analyse des risques", "Plan de sécurisation", "Schéma cible sécurisé", "Mesures de durcissement", "Procédures d'exploitation", "Plan de remédiation", "Synthèse de continuité"],
      competencies: ["Cybersécurité infrastructure", "Gestion des risques", "Segmentation réseau", "Contrôle d'accès", "Continuité d'activité", "Documentation sécurité"],
      documents: [
        {
          label: "Sécuriser les infrastructures du SI",
          type: "PDF",
          path: "assets/cubes/cube3-securisation-si.pdf",
          viewable: true,
          viewer: "pdf",
          summary:
            "Dossier de sécurisation d'une infrastructure : risques, mesures prioritaires, segmentation, accès, continuité d'activité et plan de remédiation.",
          sections: [
            {
              title: "Synthèse claire du fichier",
              items: ["Le document reprend le contexte SmartFactory avec un angle sécurité.", "Il cherche à réduire les risques avant exploitation : accès, réseau, sauvegardes, supervision et procédures.", "La logique est progressive : identifier les risques, prioriser les mesures et rendre les actions exploitables par une équipe IT."]
            },
            {
              title: "Outils et référentiels mis en avant",
              items: ["CISO Assistant et EBIOS RM pour structurer l'analyse de risques.", "ISO 27005, CIS Controls, défense en profondeur et principe de moindre privilège comme repères de sécurisation.", "MFA, VLAN, firewall, VPN, Active Directory, supervision, sauvegardes et PCA/PRA comme axes techniques."]
            }
          ]
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
      tools: ["ITIL", "GLPI", "ServiceNow", "SLA", "KPI", "Catalogue de services", "Base de connaissances"],
      references: ["ITIL 4", "Gestion des incidents", "Gestion des demandes", "Gestion des changements", "Amélioration continue"],
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
      period: "Octobre 2024 - Octobre 2025",
      title: "Référent Informatique - Gestion de projet - EHPAD Saint-Charles",
      description:
        "Référent Informatique - Gestion de projet en alternance.",
      done: ["Gestion de l'infrastructure informatique existante", "Support utilisateurs et maintenance du parc", "Mise en place de la sécurisation de la structure SI", "Migrations des solutions métiers dans le cloud", "Mise en place d'une solution de ticket", "Mise en place d'une solution de gestion des stocks", "Mise en place d'un plan de formation", "Mise en place de documentation", "Préparation du SI à une évaluation externe"],
      learned: []
    },
    {
      period: "Septembre 2023 - Septembre 2024",
      title: "Administrateur système et réseau - Nestlé Waters",
      description:
        "Administrateur système et réseau en alternance.",
      done: ["Gestion de projet (changement des bornes Wi-Fi)", "Migration vers Aruba sur les équipements réseaux", "Supervision avec la console SOTI", "Configuration des commutateurs Cisco", "Modification de l'architecture réseau", "Création de plan réseau sur Visio", "Masterisation de smartphone et PC avec Intune"],
      learned: []
    },
    {
      period: "2021 - 2023",
      title: "Technicien Systèmes et Réseaux - Nestlé Waters Supply Est",
      description:
        "Technicien Systèmes et Réseaux en alternance.",
      done: ["Configuration et déploiement de commutateurs", "Déploiement de différents téléphones", "Déploiement d'IPAD", "Mise à jour et création de classeurs Excel", "Masterisation", "Gestion d'inventaire des équipements réseaux", "Support niveau 1 et 2", "Déploiement de terminaux code-barres industriels"],
      learned: []
    }
  ]
};

window.portfolioDataEn = {
  profile: {
    name: "Théo BORTOLOTTO",
    initials: "TB",
    role: "Systems & Network Administrator",
    location: "Nancy / Luxembourg",
    email: "theo.bortolotto@yahoo.com",
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
      "I am completing a master's degree in infrastructure and cybersecurity at CESI Nancy. I learn best through field work: understand what blocks people, document it properly and propose a solution that can actually be operated.",
      "My work-study roles have taken me through L1/L2 support, networking, inventory, migrations, documentation and security topics. This portfolio is meant to show how I think about an information system, not just stack keywords.",
      "From October 2026, I am looking for a Systems and Network Administrator, IT Consultant or Junior IT Project Manager role, preferably in Luxembourg or eastern France."
    ],
    tags: ["MICSI master's", "Open to opportunities", "Available October 2026", "Luxembourg / Grand Est"],
    metrics: [
      { value: "5 years", label: "IT work-study experience" },
      { value: "L1/L2", label: "user support" }
    ]
  },

  skills: [
    {
      category: "Systems",
      items: ["Windows", "Linux", "VMware", "Hyper-V", "VirtualBox", "Backups", "Active Directory"]
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
      items: ["IS hardening", "Risk management", "EBIOS RM", "CISO Assistant", "Root Me", "Best practices"]
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
      tools: ["Cisco ISR 4461", "Catalyst 9200 / 9500", "Aruba AP22", "pfSense", "Zabbix", "OVH", "Microsoft 365", "Synology NAS", "SAP"],
      references: ["Hybrid architecture", "SD-WAN", "QoS", "VLAN", "RACI", "3-2-1 backup", "BCP / DRP", "RTO / RPO"],
      deliverables: ["Current-state audit", "Project brief", "Risk analysis", "Target architecture", "Forecast schedule", "RACI matrix", "Deployment and training plan", "Maintenance contract"],
      competencies: ["Infrastructure audit", "Hybrid architecture", "Industrial networking", "Planning", "Risk management", "Technical documentation"],
      documents: [
        {
          label: "SmartFactory presentation",
          type: "PDF",
          path: "assets/cubes/cube1-smartfactory-presentation.pdf",
          viewable: true,
          viewer: "pdf",
          summary:
            "Modernization presentation: current state, limitations, hybrid target, network/system/industrial choices, budget, deployment plan and maintenance.",
          sections: [
            {
              title: "What the PowerPoint shows",
              items: ["SmartFactory context: 800 employees, 4 production sites and an ageing information system.", "Limitations: Windows Server 2008, Exchange 2010, no network redundancy, weak monitoring and little segmentation.", "Proposed target: SD-WAN, VLANs, Aruba Wi-Fi, firewall, Microsoft 365, Zabbix monitoring and 3-2-1 backup."]
            },
            {
              title: "Visible tools and choices",
              items: ["Cisco ISR 4461, Catalyst 9200/9500, Aruba AP22, pfSense, Zabbix, OVH, Microsoft 365, Synology NAS and SAP.", "RACI matrix, forecast schedule, risk analysis, BCP/DRP, RTO/RPO and maintenance contract.", "Network, system, cloud and industrial deployment with user training."]
            },
            {
              title: "What it demonstrates",
              items: ["Ability to start from an existing IS and build a coherent target.", "Network/system/security reasoning rather than a simple hardware list.", "Project view: schedule, roles, risks, costs, remediation and maintenance."]
            }
          ]
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
      tools: ["PMP", "WBS", "RACI", "Risk register", "Microsoft 365", "Teams", "SharePoint", "Exchange Online"],
      references: ["PMBOK / PMP", "Project governance", "Change management", "Communication plan", "Stakeholder management"],
      deliverables: ["Project Management Plan", "Project scope", "Schedule", "Responsibility structure", "Risk register", "Communication plan", "Change support plan"],
      competencies: ["Project framing", "Stakeholder management", "Planning", "Risk tracking", "Communication", "Change management"],
      documents: [
        {
          label: "Microsoft 365 PMP",
          type: "PDF",
          path: "assets/cubes/cube2-pmp-microsoft365.pdf",
          viewable: true,
          viewer: "pdf",
          summary:
            "Project management plan for a Microsoft 365 migration: framing, governance, work packages, risks, communication and validation.",
          sections: [
            {
              title: "Clear file summary",
              items: ["The document is made to manage a Microsoft 365 migration, not only describe the technical solution.", "It structures scope, stakeholders, deliverables, schedule and validation criteria.", "It focuses on communication, change management and risk handling."]
            },
            {
              title: "Tools and references highlighted",
              items: ["PMP/PMBOK for project structure.", "WBS to split work, RACI to clarify responsibilities and a risk register to track sensitive points.", "Microsoft 365, Teams, SharePoint and Exchange Online as the migration target."]
            }
          ]
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
      tools: ["CISO Assistant", "EBIOS RM", "Active Directory", "MFA", "Firewall", "VPN", "Monitoring", "Backups"],
      references: ["EBIOS RM", "ISO 27005", "CIS Controls", "Least privilege", "Defense in depth", "BCP / DRP"],
      deliverables: ["Risk analysis", "Security plan", "Secure target diagram", "Hardening measures", "Operating procedures", "Remediation plan", "Continuity summary"],
      competencies: ["Infrastructure security", "Risk management", "Network segmentation", "Access control", "Business continuity", "Security documentation"],
      documents: [
        {
          label: "Securing IS infrastructures",
          type: "PDF",
          path: "assets/cubes/cube3-securisation-si.pdf",
          viewable: true,
          viewer: "pdf",
          summary:
            "Infrastructure security file: risks, priority measures, segmentation, access control, business continuity and remediation plan.",
          sections: [
            {
              title: "Clear file summary",
              items: ["The document reuses the SmartFactory context with a security focus.", "It aims to reduce risks before operation: access, network, backups, monitoring and procedures.", "The logic is progressive: identify risks, prioritize controls and make actions usable for an IT team."]
            },
            {
              title: "Tools and references highlighted",
              items: ["CISO Assistant and EBIOS RM to structure risk analysis.", "ISO 27005, CIS Controls, defense in depth and least privilege as security references.", "MFA, VLANs, firewall, VPN, Active Directory, monitoring, backups and BCP/DRP as technical controls."]
            }
          ]
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
      tools: ["ITIL", "GLPI", "ServiceNow", "SLA", "KPI", "Service catalogue", "Knowledge base"],
      references: ["ITIL 4", "Incident management", "Request management", "Change management", "Continuous improvement"],
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
      period: "October 2024 - October 2025",
      title: "IT Coordinator / Project Support Officer - Saint-Charles Nursing Home",
      description:
        "IT Coordinator / Project Support Officer, work-study programme.",
      done: ["Managed the existing IT infrastructure", "Provided user support and hardware maintenance", "Improved IT security", "Supported cloud migration of business applications", "Implemented ticketing and stock management solutions", "Developed a user training plan", "Prepared the IT environment for external assessment"],
      learned: []
    },
    {
      period: "September 2023 - September 2024",
      title: "Systems & Network Administrator - Nestlé Waters Supply Est",
      description:
        "Systems & Network Administrator, work-study programme.",
      done: ["Supported Wi-Fi replacement and Aruba migration", "Monitored the SOTI management console", "Configured Cisco switches", "Supported network architecture updates", "Produced network documentation in Visio", "Built smartphone and PC images using Intune"],
      learned: []
    },
    {
      period: "2021 - 2023",
      title: "Systems & Network Technician - Nestlé Waters Supply Est",
      description:
        "Systems & Network Technician, work-study programme.",
      done: ["Configured and deployed network switches", "Deployed phones, iPads, and barcode scanners", "Built system images", "Managed network equipment inventory", "Provided Level 1 and Level 2 support", "Maintained Excel tracking files"],
      learned: []
    }
  ]
};

window.portfolioUi = {
  fr: {
    pageTitle: "Théo BORTOLOTTO | Portfolio",
    metaDescription:
      "Portfolio de Théo BORTOLOTTO : systèmes, réseaux, cybersécurité, gestion de projet et documents de cubes CESI consultables.",
    navAbout: "A propos",
    navSkills: "Compétences",
    navProfile: "Méthode",
    navCubes: "Cubes CESI",
    navProjects: "Projets",
    navTimeline: "Parcours",
    navContact: "Contact",
    cvButton: "Télécharger CV",
    heroPrimary: "Voir les Cubes CESI",
    heroSecondary: "Mes contacts",
    searchLabel: "Recherche actuelle",
    visualTitle: "Points clés du CV",
    visualBadge: "Tech + pilotage",
    visualSnapshotLabel: "Synthèse profil",
    visualSnapshotTitle: "Infrastructure, support, sécurité",
    visualSnapshotText:
      "5 ans d'alternance avec une double lecture : intervenir techniquement et cadrer proprement les actions.",
    visualMetricExperience: "alternance IT",
    visualMetricSupport: "support utilisateurs",
    visualMetricAvailability: "disponible",
    visualTechTitle: "Socle technique",
    visualTechBadge: "Infra",
    visualTechOne: "Systèmes, réseau, virtualisation",
    visualTechTwo: "Cisco, Aruba, Microsoft 365",
    visualTechThree: "Sécurisation SI, EBIOS RM, CISO Assistant",
    visualManagementTitle: "Pilotage & coordination",
    visualManagementBadge: "Projet",
    visualManagementOne: "PMP, RACI, planning, suivi d'actions",
    visualManagementTwo: "Migration cloud et conduite du changement",
    visualManagementThree: "Documentation, formation, relation utilisateurs",
    visualTargetLabel: "Objectif",
    visualTargetText: "Admin Systèmes & Réseaux / Consultant IT / Chef de projet junior",
    badgeShortLabel: "Badge CESI",
    badgeEyebrow: "Badge CESI",
    badgeTitle: "Citoyen Responsable - Dynamique",
    badgeText:
      "Badge obtenu dans le cadre du Mastère CESI autour de la RSE, de l'éthique du manager et du rôle du futur manager dans l'entreprise.",
    visualNetwork: "Réseau",
    visualProject: "Projet",
    visualSecurity: "Sécurité",
    aboutEyebrow: "A propos",
    aboutTitle: "Terrain, support et infrastructure",
    aboutProofSupportTitle: "Support & exploitation",
    aboutProofSupportText: "N1/N2, inventaire, suivi de parc, documentation et relation utilisateur.",
    aboutProofNetworkTitle: "Réseau & infrastructure",
    aboutProofNetworkText: "Cisco, Aruba, supervision, schémas réseau, migrations et environnements industriels.",
    aboutProofSecurityTitle: "Projet & sécurité",
    aboutProofSecurityText: "PMP, RACI, EBIOS RM, CISO Assistant, PCA/PRA et plans de remédiation.",
    skillsEyebrow: "Compétences",
    skillsTitle: "Compétences utilisées en alternance et sur mes projets",
    skillsText:
      "Un aperçu des outils et sujets que j'ai manipulés en entreprise, en cube CESI ou sur mon temps personnel.",
    profileExtraEyebrow: "Méthode & centres d'intérêt",
    profileExtraTitle: "Méthode de travail et curiosité technique",
    profileExtraText:
      "Je garde ici uniquement les éléments qui ont un lien direct avec les postes que je vise : support, infrastructure, cybersécurité, conseil et gestion de projet.",
    softSkillsTitle: "Soft skills",
    interestsTitle: "Centres d'intérêt utiles au métier",
    cubesEyebrow: "Cubes CESI",
    cubesTitle: "Cubes CESI replacés dans leur contexte",
    cubesText:
      "Pour chaque cube : problème de départ, démarche, outils utilisés, référentiels, livrables et PDF intégrés.",
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
    noEmbeddedViewer:
      "La visualisation complète dépend du navigateur. La synthèse ci-dessous reprend les points importants du document.",
    mobilePdfNotice:
      "Sur téléphone, la lecture intégrée des PDF dépend du navigateur. Ouvre le fichier directement pour le lire dans le lecteur PDF du téléphone.",
    openPdfExternal: "Ouvrir le PDF",
    downloadPdf: "Télécharger",
    viewerSelectedLabel: "Document sélectionné",
    viewerPageLabel: "Section",
    documentSummaryLabel: "Synthèse du fichier",
    projectsEyebrow: "Projets personnels",
    projectsTitle: "Travaux personnels et pratique technique",
    projectsText:
      "Des sujets plus petits, utiles pour continuer à pratiquer et garder une trace de ce que j'apprends.",
    timelineEyebrow: "Parcours",
    timelineTitle: "Diplômes, master en cours et expériences pro",
    currentEducationLabel: "Diplôme en cours",
    completedEducationLabel: "Diplômes obtenus",
    experienceLabel: "Expériences professionnelles",
    doneLabel: "Ce que j'ai fait",
    learnedLabel: "Ce que j'ai appris",
    contactEyebrow: "Contact",
    contactTitle: "Mes contacts",
    contactText:
      "Email et LinkedIn : le plus simple pour me joindre directement.",
    footerSuffix: "Portfolio",
    allFilter: "Tous",
    problemLabel: "Problématique",
    contextLabel: "Contexte",
    solutionLabel: "Solution proposée",
    resultLabel: "Résultat / impact",
    technologiesLabel: "Technologies",
    toolsLabel: "Outils utilisés",
    referencesLabel: "Référentiels / méthodes",
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
    profileStrengthsAria: "Points forts du profil",
    backToTop: "Retour en haut",
    dialogClose: "Fermer le détail"
  },
  en: {
    pageTitle: "Théo BORTOLOTTO | Portfolio",
    metaDescription:
      "Portfolio of Théo BORTOLOTTO: systems, networks, cybersecurity, project management and viewable CESI case documents.",
    navAbout: "About",
    navSkills: "Skills",
    navProfile: "Approach",
    navCubes: "CESI Cases",
    navProjects: "Projects",
    navTimeline: "Background",
    navContact: "Contact",
    cvButton: "Download resume",
    heroPrimary: "View CESI cases",
    heroSecondary: "Contact details",
    searchLabel: "Current search",
    visualTitle: "Resume highlights",
    visualBadge: "Tech + delivery",
    visualSnapshotLabel: "Profile summary",
    visualSnapshotTitle: "Infrastructure, support, security",
    visualSnapshotText:
      "5 years of work-study experience with a dual angle: hands-on technical work and structured action planning.",
    visualMetricExperience: "IT work-study",
    visualMetricSupport: "user support",
    visualMetricAvailability: "available",
    visualTechTitle: "Technical base",
    visualTechBadge: "Infra",
    visualTechOne: "Systems, network, virtualization",
    visualTechTwo: "Cisco, Aruba, Microsoft 365",
    visualTechThree: "IS hardening, EBIOS RM, CISO Assistant",
    visualManagementTitle: "Delivery & coordination",
    visualManagementBadge: "Project",
    visualManagementOne: "PMP, RACI, planning, action tracking",
    visualManagementTwo: "Cloud migration and change management",
    visualManagementThree: "Documentation, training, user relations",
    visualTargetLabel: "Target",
    visualTargetText: "Systems & Network Admin / IT Consultant / Junior Project Manager",
    badgeShortLabel: "CESI badge",
    badgeEyebrow: "CESI badge",
    badgeTitle: "Responsible Citizen - Dynamic",
    badgeText:
      "Badge earned during the CESI master's program, focused on CSR, managerial ethics and the role of future managers in organizations.",
    visualNetwork: "Network",
    visualProject: "Project",
    visualSecurity: "Security",
    aboutEyebrow: "About",
    aboutTitle: "Field work, support and infrastructure",
    aboutProofSupportTitle: "Support & operations",
    aboutProofSupportText: "L1/L2, inventory, asset tracking, documentation and user relations.",
    aboutProofNetworkTitle: "Network & infrastructure",
    aboutProofNetworkText: "Cisco, Aruba, monitoring, network diagrams, migrations and industrial environments.",
    aboutProofSecurityTitle: "Project & security",
    aboutProofSecurityText: "PMP, RACI, EBIOS RM, CISO Assistant, BCP/DRP and remediation plans.",
    skillsEyebrow: "Skills",
    skillsTitle: "Tools I use in work-study roles and projects",
    skillsText:
      "An overview of the tools and topics I have handled at work, in CESI cases or through personal practice.",
    profileExtraEyebrow: "Approach & interests",
    profileExtraTitle: "Working method and technical curiosity",
    profileExtraText:
      "I kept only the elements that connect directly with the roles I am targeting: support, infrastructure, cybersecurity, consulting and project management.",
    softSkillsTitle: "Soft skills",
    interestsTitle: "Role-relevant interests",
    cubesEyebrow: "CESI cases",
    cubesTitle: "CESI cases with their context",
    cubesText:
      "For each case: starting issue, approach, tools, references, deliverables and viewable documents.",
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
    noEmbeddedViewer:
      "Full viewing depends on the browser. The summary below highlights the important points of the document.",
    mobilePdfNotice:
      "On phones, embedded PDF viewing depends on the browser. Open the file directly to read it in the phone's PDF viewer.",
    openPdfExternal: "Open PDF",
    downloadPdf: "Download",
    viewerSelectedLabel: "Selected document",
    viewerPageLabel: "Section",
    documentSummaryLabel: "File summary",
    projectsEyebrow: "Personal projects",
    projectsTitle: "Personal work and technical practice",
    projectsText:
      "Smaller topics that help me keep practicing and track what I learn.",
    timelineEyebrow: "Background",
    timelineTitle: "Degrees, current master's and professional experience",
    currentEducationLabel: "Degree in progress",
    completedEducationLabel: "Completed degrees",
    experienceLabel: "Professional experience",
    doneLabel: "What I did",
    learnedLabel: "What I learned",
    contactEyebrow: "Contact",
    contactTitle: "Contact details",
    contactText:
      "Email and LinkedIn: the simplest ways to reach me directly.",
    footerSuffix: "Portfolio",
    allFilter: "All",
    problemLabel: "Problem",
    contextLabel: "Context",
    solutionLabel: "Proposed solution",
    resultLabel: "Result / impact",
    technologiesLabel: "Technologies",
    toolsLabel: "Tools used",
    referencesLabel: "References / methods",
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
    profileStrengthsAria: "Profile strengths",
    backToTop: "Back to top",
    dialogClose: "Close details"
  }
};

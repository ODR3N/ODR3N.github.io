// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ODR3N',
  },
  
  base: '/',

  projects: {
    external: {
      header: 'Professional Summary',
      projects: [
        {
          title: 'About Me',
          description:
            'Product Specialist at WWT (Softchoice) on the SAM team, leading customer onboarding, deployment, and RMM/network monitoring rollouts. Bilingual (English C1 Advanced), Azure-certified (AZ-104) and Linux-certified (LFCS), with a background spanning technical support, help desk, and cloud infrastructure. Managed 500+ annual support requests via ServiceNow and Jira with zero SLA breaches, and cut a manual reporting workflow from 5 hours a day to 1. I build real systems to learn: an enterprise-style Azure landing zone, a hardened multi-node Linux environment, and Active Directory hybrid identity labs, all documented on GitHub. Based in San Jose, Costa Rica.',
          imageUrl:
            '/aboutme.jpeg',
          link: 'https://www.linkedin.com/in/afc2806',
      },
    ],
  },

  github: {
    display: true,
    header: 'GitHub Projects',
    mode: 'automatic',
    automatic: {
      sortBy: 'updated',
      limit: 6,
      exclude: {
        forks: true,
        projects: [],
      },
    },
    manual: {
      projects: [],
    },
  },
},
  seo: {
    title: 'Adrian Fonseca Coto | Product Specialist & Azure Cloud Support Portfolio',
    description:
      'Portfolio of Adrian Fonseca Coto, Product Specialist at WWT (Softchoice) based in San Jose, Costa Rica. Azure-certified (AZ-104) and Linux-certified (LFCS), focused on customer onboarding, cloud support, Azure, Linux administration, Active Directory, and troubleshooting.',
    imageURL: 'https://odr3n.github.io/aboutme.jpeg',
  },

  social: {
    linkedin: 'afc2806',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '+506 8780-6996',
    email: 'adrfc.pro@gmail.com',
  },

  resume: {
    fileUrl: 'https://drive.google.com/file/d/1v8XOPppa_jzackY-T49sA2VDeGBQkAA9/view?usp=sharing',
  },

  skills: [
    'Cloud Services',
    'Software Product Management',
    'Asset Management',
    'Customer Onboarding',
    'RMM & Network Monitoring',
    'Technical Support',
    'Troubleshooting',
    'Root Cause Analysis',
    'Incident Management',
    'ServiceNow',
    'Jira',
    'Microsoft 365',
    'Microsoft Azure',
    'Bicep',
    'Entra ID',
    'Active Directory',
    'RBAC',
    'Key Vault',
    'Managed Identity',
    'MFA',
    'Power BI',
    'SQL',
    'Linux',
    'Ubuntu Server',
    'Bash',
    'Python',
    'Systemd',
    'SSH',
    'Networking',
    'TCP/IP',
    'DNS',
    'HTTP/HTTPS',
    'Nginx',
    'Firewalls',
    'Git',
    'GitHub',
    'Technical Documentation',
  ],


  languages: [
    { name: 'English', level: 'C1 Advanced' },
    { name: 'Spanish', level: 'Native' },
  ],

  experiences: [
    {
      company: 'World Wide Technology (WWT / Softchoice)',
      position: 'Product Specialist, SAM Team',
      from: 'September 2026',
      to: 'Present',
      companyLink: 'https://www.wwt.com',
      description: [
        'Lead customer deployment and technical onboarding sessions, from solution configuration through go-live.',
        'Support the rollout of RMM and network monitoring solutions across customer environments.',
        'Key point of contact through the onboarding lifecycle, coordinating with sales, customer success, and technical teams.',
        'Manage an inbound case queue and contribute to onboarding documentation and self-service resources.',
      ],
    },
    {
      company: 'TeKnowledge',
      position: 'Customer Success Manager Technical Support, Microsoft Partner Operations',
      from: 'April 2025',
      to: 'July 2026',
      companyLink: '',
      description: [
        'Owned an inbound queue of 500+ multi-client requests annually via ServiceNow and Jira, with zero SLA breaches from triage through resolution.',
        'Supported onboarding and configuration of Microsoft 365 and Azure environments, resolving integration and deployment issues across diverse client setups.',
        'Used Microsoft Copilot for process optimization and information analysis in daily workflow management.',
        "Authored and maintained the team's knowledge base and onboarding runbooks, turning individual fixes into reusable self-service documentation.",
        'Redesigned a manual reporting workflow from 5 hours a day to 1, a 5x reduction.',
      ],
    },
    {
      company: 'Intronix',
      position: 'Technical Support & Electronics Technician',
      from: 'October 2020',
      to: 'December 2024',
      companyLink: '',
      description: [
        'Diagnosed hardware, software, and connectivity failures using structured root-cause analysis, validating fixes and documenting corrective actions.',
        'Delivered customer-facing technical support, managing communication, expectations, and follow-up through resolution.',
        'Maintained technical documentation covering failure modes, corrective procedures, and equipment specs.',
      ],
    },
  ],


  certifications: [
    {
      name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      body: 'Validates skills in managing Azure identities, governance, storage, compute, and virtual networks — including implementing, monitoring, and maintaining Microsoft Azure solutions.',
      year: '2026',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/AdrianFonseca-2806/5C4E5ECF63DB14BD?sharingId',
    },
    {
      name: 'Linux Foundation Certified System Administrator (LFCS)',
      body: 'Hands-on certification validating Linux administration skills across users, permissions, networking, storage, services, security basics, and troubleshooting.',
      year: '2026',
      link: 'https://www.credly.com/badges/638cf953-108c-4b77-a37c-bbee9ae55f95/linked_in_profile',
    },
    {
      name: 'Cisco Certified Network Associate (CCNA) — Modules I & II',
      body: 'Validates networking fundamentals including TCP/IP, DNS, DHCP, switching, VLANs, and routing.',
      year: '2022',
      link: '',
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      body: 'Foundational certification covering core cloud concepts, Azure services, pricing, governance, security, compliance, and basic cloud administration principles.',
      year: '2025',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/AdrianFonseca-1773/291F39D812EBB34C?sharingId',
    },
    {
      name: 'Certificate for Technical Support Fundamentals',
      body: 'Gain essential skills in Information Technology, including computer hardware, the Internet, software, troubleshooting, and customer service.',
      year: '2025',
      link: '',
    },
    {
      name: 'Storage in Azure',
      body: 'Covers Azure storage accounts, data redundancy, access control, and managing storage for cloud workloads.',
      year: '',
      link: '',
    },
    {
      name: 'Compute Resources in Azure',
      body: 'Covers deploying and managing Azure virtual machines and other compute resources.',
      year: '',
      link: '',
    },
    {
      name: 'Ethical Hacking',
      body: 'Introduction to ethical hacking concepts, security assessment, and defensive practices.',
      year: '',
      link: '',
    },
    {
      name: 'Principios de Ciberseguridad',
      body: 'Cybersecurity fundamentals: core principles, common threats, and basic protection practices.',
      year: '',
      link: '',
    },
  ],

  educations: [
    {
      institution: 'Universidad Fidélitas',
      degree: 'Computer Systems Engineering',
      from: 'January 2021',
      to: 'February 2026',
    },
    {
      institution: 'Universidad de Costa Rica (UCR)',
      degree: 'Conversational English B2+',
      from: 'October 2022',
      to: 'December 2022',
    },
    {
      institution: 'COVAO',
      degree: 'Technician, Industrial Electronics Technology',
      from: 'January 2018',
      to: 'December 2020',
    },
    {
      institution: 'Colegio Vocacional de Artes y Oficios',
      degree: 'Técnico Medio en Electrónica',
      from: '',
      to: '',
    },
  ],


  publications: [],

  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'business',

    disableSwitch: false,

    respectPrefersColorScheme: false,

    displayAvatarRing: true,

    themes: [
      'business',
      'corporate',
      'nord',
      'winter',
      'night',
      'dark',
      'light',
      'lofi',
    ],
  },

  footer: `Portfolio of Adrian Fonseca Coto`,

  enablePWA: true,
};

export default CONFIG;

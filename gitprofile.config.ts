// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ODR3N',
  },

  /**
   * If your repository is ODR3N.github.io, keep base as '/'.
   * If your repository is named something like portfolio, change it to '/portfolio/'.
   */
  base: '/',

  projects: {
    external: {
      header: 'Professional Summary',
      projects: [
        {
          title: 'About Me',
          description:
            'Technical Support and Cloud Support professional (AZ-104 & LFCS certified) with 5+ years of experience managing 500+ annual support requests with zero SLA breaches, across customer success operations, Azure reporting, service health analysis, and technical documentation. Building hands-on Linux, networking, cloud, and DevOps/SRE projects to grow into production-focused cloud engineering roles. Also open to Help Desk, IT Support, and System Administrator positions. Based in Costa Rica, open to remote roles across the US, Canada, Latin America, and Europe. English: C1 Advanced (EF SET 77/100).',
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
    title: 'Adrian Fonseca Coto | Technical Support & Cloud Support Portfolio',
    description:
      'Portfolio of Adrian Fonseca Coto, Computer Systems Engineer based in Costa Rica, open to remote roles across the US, Canada, Latin America, and Europe. Focused on Technical Support, Cloud Support, Linux administration, Azure, troubleshooting, and DevOps/SRE foundations.',
    imageURL: '/aboutme.jpeg',
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
    fileUrl: 'https://drive.google.com/file/d/1DVQk_eM9dxQybgPabNC0XiyClYIHLO5j/view?usp=sharing',
  },

  skills: [
    'Technical Support',
    'Cloud Support',
    'Troubleshooting',
    'Root Cause Analysis',
    'Incident Management',
    'ServiceNow',
    'Microsoft Azure',
    'Entra ID',
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
    'C#',
    '.NET Core',
    'MySQL',
    'Technical Documentation',
  ],

  experiences: [
    {
      company: 'Teknowledge',
      position: 'Customer Success Manager Technical Support, Microsoft Partner Operations',
      from: 'April 2025',
      to: 'July 2026',
      companyLink: '',
    },
    {
      company: 'Intronix S.A.',
      position: 'Technical Support & Electronics Technician',
      from: 'October 2020',
      to: 'December 2024',
      companyLink: '',
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
  ],

  educations: [
    {
      institution: 'Universidad Fidélitas',
      degree: 'Bachelor’s Degree in Computer Systems Engineering',
      from: '2021',
      to: '2026',
    },
    {
      institution: 'COVAO',
      degree: 'Mid-Level Technician in Industrial Electronics',
      from: '2018',
      to: '2020',
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

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
            'Technical Support and Cloud Support professional with experience in customer success operations, Azure reporting, service health analysis, troubleshooting, and technical documentation. Currently developing hands-on Linux, networking, cloud, and DevOps/SRE projects to grow into production-focused cloud engineering roles.',
          imageUrl:
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
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
      'Portfolio of Adrian Fonseca Coto, Computer Systems Engineer focused on Technical Support, Cloud Support, Linux administration, Azure, troubleshooting, customer success operations, and DevOps/SRE foundations.',
    imageURL: '',
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
    fileUrl: 'https://drive.google.com/file/d/1rsM_C0egPBrr3iICiLER7xgq8hCc7OgJ/view?usp=sharing',
  },

  skills: [
    'Technical Support',
    'Cloud Support',
    'Troubleshooting',
    'Root Cause Analysis',
    'Incident Management',
    'ServiceNow',
    'Microsoft Azure',
    'Power BI',
    'SQL',
    'Linux',
    'Ubuntu Server',
    'Bash',
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
      position: 'Customer Success Manager Support L2',
      from: 'April 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Intronix S.A.',
      position: 'Electronic Engineering Technician',
      from: 'October 2020',
      to: 'December 2024',
      companyLink: '',
    },
  ],

  certifications: [
    {
      name: 'Linux Foundation Certified System Administrator (LFCS)',
      body: 'Hands-on certification validating Linux administration skills across users, permissions, networking, storage, services, security basics, and troubleshooting.',
      year: '2026',
      link: 'https://www.credly.com/badges/638cf953-108c-4b77-a37c-bbee9ae55f95/linked_in_profile',
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

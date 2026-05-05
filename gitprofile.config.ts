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

    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Linux & Networking Reverse Proxy Lab',
          description:
            'Production-style Linux and networking lab using multiple Ubuntu Server virtual machines. The project demonstrates SSH key-based access, static networking, Nginx reverse proxy configuration, TLS termination, rate limiting, logging, firewall basics, systemd services, health checks, and structured troubleshooting documentation.',
          imageUrl:
            'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1200&auto=format&fit=crop',
          link: 'https://github.com/ODR3N',
        },
        {
          title: 'Vehicle Speed Configuration Web Platform',
          description:
            'Web platform built with C#, .NET Core MVC, HTML, CSS, and MySQL to configure vehicle speed limiter modules through USB. The solution included user authentication, device detection, real-time speed monitoring, configuration history, technical documentation, and direct coordination with a real client.',
          imageUrl:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
          link: 'https://github.com/ODR3N',
        },
        {
          title: 'LFCS Linux Administration Practice',
          description:
            'Hands-on Linux administration practice focused on LFCS objectives, including users and groups, permissions, storage, LVM, networking, services, logs, cron jobs, SSH, firewall configuration, and troubleshooting under practical scenarios.',
          imageUrl:
            'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
          link: 'https://github.com/ODR3N',
        },
      ],
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
    fileUrl: '',
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
      link: '',
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      body: 'Foundational certification covering core cloud concepts, Azure services, pricing, governance, security, compliance, and basic cloud administration principles.',
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

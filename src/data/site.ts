interface Site {
  name: string;
  tagline: string;
  description: string;
  lang: string;
  github: string;
  email?: string;
  linkedin?: string;
  resume?: string;
  about: string[];
}

export const site: Site = {
  name: 'Felix',
  tagline: 'Software engineer',
  description: 'Projects by Felix: Ask the Fly, Retrace, basis and AI Avalon.',
  lang: 'en',
  github: 'https://github.com/Felix471',
  email: 'FelixWangShigiOu@outlook.com',
  linkedin: 'https://www.linkedin.com/in/ziyi-wang-984378125/',
  about: [],
};

export const contactLinks = [
  { label: 'GitHub', href: site.github },
  { label: 'Email', href: site.email ? `mailto:${site.email}` : undefined },
  { label: 'LinkedIn', href: site.linkedin },
];

export const coverLinks = [
  { label: 'Résumé', href: site.resume },
  ...contactLinks,
];

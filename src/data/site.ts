// Everything on the site that is not a project lives here.
// Edit this file, not the components.

export type SiteLink = {
  label: string;
  href: string;
  /** Opens in a new tab (external links, PDF). */
  external?: boolean;
};

export const site = {
  /** Used in the <title>, hero and footer. */
  name: 'Felix',
  /** One-line positioning under the name. */
  tagline: 'Software engineer building tools for people who think with data.',
  /** Shown in <meta name="description"> and social cards. */
  description:
    'Personal portfolio of Felix: selected projects, writing and contact links.',
  /** Language of the content. */
  lang: 'en',

  /** Links row, rendered in the hero and repeated in the footer. */
  links: [
    { label: 'GitHub', href: 'https://github.com/Felix471', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle', external: true },
    { label: 'Resume', href: '/resume.pdf', external: true },
    { label: 'Email', href: 'mailto:hello@example.com' },
    { label: 'Writing', href: 'https://medium.com/@felixwangshigiou', external: true },
  ] satisfies SiteLink[],

  /** 2-3 short paragraphs. Plain text; each string is one <p>. */
  about: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. I build small, sharp tools and occasionally write about the process. Most of my recent work sits at the intersection of data pipelines, developer experience and interfaces that stay out of the way.',
    'Before this I spent a few years doing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, which taught me that the boring parts of a system are usually where the leverage is.',
    'Away from the keyboard: ut enim ad minim veniam, quis nostrud exercitation. If any of the projects above look interesting, my inbox is open.',
  ],
};

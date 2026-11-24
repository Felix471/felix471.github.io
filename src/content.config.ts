import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const project = z.object({
  title: z.string(),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be lowercase kebab-case'),
  summary: z.string().max(160),
  links: z.array(z.object({ label: z.string(), href: z.url() })).min(1),
  caption: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.union([
    project.extend({ image: image(), tone: z.enum(['light', 'dark']), alt: z.string() }),
    project.extend({ panel: z.string() }),
  ]),
});

export const collections = { projects };

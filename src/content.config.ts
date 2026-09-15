import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z
        .string()
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be lowercase kebab-case'),
      summary: z.string().max(160, 'keep the summary to one line'),
      // Relative path from the .md file to an image in src/assets/.
      // Validated + optimized by Astro's image pipeline at build time.
      thumbnail: image(),
      tags: z.array(z.string()).default([]),
      demo_url: z.url().optional(),
      repo_url: z.url().optional(),
      // Optional external write-up. When omitted, "Write-up" links to this
      // project's own page (/projects/<slug>).
      writeup_url: z.url().optional(),
      order: z.number().int().default(100),
      featured: z.boolean().default(false),
    }),
});

export const collections = { projects };

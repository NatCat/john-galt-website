import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // Accepts both date strings and Date objects
    description: z.string(),
    author: z.string().optional().default('Admin'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const heroStatIcons = ['Award', 'CheckCircle', 'Users', 'Globe', 'CheckCircle2'] as const;
const serviceIcons = ['Factory', 'Zap', 'Code', 'Package'] as const;
const aboutStatIcons = ['Users', 'Award', 'Globe', 'CheckCircle2'] as const;
const contactIcons = ['Phone', 'Mail', 'MapPin'] as const;

const sectionIntroSchema = z
  .object({
    tag: z.string().optional(),
    heading: z.string(),
    description: z.string().optional(),
  })
  .optional();

const heroSchema = z.object({
  heading: z.string(),
  subheading: z.string(),
  primaryCta: z.object({
    label: z.string(),
    url: z.string(),
  }),
  secondaryCta: z
    .object({
      label: z.string(),
      url: z.string(),
    })
    .optional(),
  stats: z
    .array(
      z.object({
        icon: z.enum(heroStatIcons),
        value: z.string(),
        label: z.string(),
      }),
    )
    .optional(),
});

const servicesSchema = z
  .array(
    z.object({
      icon: z.enum(serviceIcons),
      title: z.string(),
      description: z.string(),
      image: z.string(),
    }),
  )
  .optional();

const portfolioSchema = z
  .array(
    z.object({
      number: z.string(),
      title: z.string(),
      category: z.string(),
      description: z.string(),
      image: z.string(),
    }),
  )
  .optional();

const aboutSchema = z
  .object({
    tag: z.string().optional(),
    heading: z.string(),
    paragraphs: z.array(z.string()),
    capabilities: z.array(z.string()),
    stats: z.array(
      z.object({
        icon: z.enum(aboutStatIcons),
        value: z.string(),
        label: z.string(),
      }),
    ),
  })
  .optional();

const contactSchema = z
  .object({
    tag: z.string().optional(),
    heading: z.string(),
    description: z.string(),
    info: z.array(
      z.object({
        icon: z.enum(contactIcons),
        title: z.string(),
        lines: z.array(z.string()),
      }),
    ),
    submitLabel: z.string().optional(),
  })
  .optional();

const historySchema = z
  .object({
    heading: z.string(),
    subsections: z
      .array(
        z.object({
          subtitle: z.string(),
          paragraphs: z.array(z.string()),
        }),
      )
      .optional(),
    paragraphs: z.array(z.string()).optional(), // Fallback for simple paragraphs without subsections
  })
  .optional();

const solutionSectionSchema = z.object({
  heading: z.string(),
  image: z.string().optional(),
  items: z.array(z.string()),
});

const solutionsSchema = z
  .object({
    intro: sectionIntroSchema,
    sections: z.array(solutionSectionSchema).optional(),
  })
  .optional();

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'ru', 'sr', 'hy', 'fr']).default('en'),
    title: z.string(),
    description: z.string().optional(),
    hero: heroSchema.optional(),
    servicesIntro: sectionIntroSchema,
    services: servicesSchema,
    portfolioIntro: sectionIntroSchema,
    portfolio: portfolioSchema,
    about: aboutSchema,
    history: historySchema,
    solutions: solutionsSchema,
    contact: contactSchema,
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};


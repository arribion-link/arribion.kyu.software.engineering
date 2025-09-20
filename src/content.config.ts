import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';



import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/docs/" }),
	schema: z.object({
		title: z.string(),
		permalink: z.string().optional(),
	}),
});

// Expose your defined collection to Astro
// with the `collections` export

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/arribion-link/arribion.kyu.software.engineering",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
		{
		  label: "Visual Programming",
		  autogenerate: { directory: "visual-programming" },
		},
        // {
        //   label: "Web Technologies",
        //   autogenerate: { directory: "web-development" },
        // },
        // {
        //   label: "Database",
        //   autogenerate: { directory: "database" },
        // },
        // {
        //   label: "Data Structures and Algorithms",
        //   autogenerate: { directory: "DSA" },
        // },
        // {
        //   label: "Operating System",
        //   autogenerate: { directory: "operating-system" },
        // },
      ],
    }),
  ],
});

# KYU Software Engineering Visual Programming Unit

## 🚀 Project Structure

Inside the Astro project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## How To Contribute

### Fork and Clone the Repository

- Forking creates your own copy of the project on GitHub.
- Cloning lets you work on it locally.

### Run the following commands

```bash
# to install neccessary dependancies run
npm install
# to run the project 
npm run dev
```

### Create a New Branch and Make Changes

- Always work on a separate branch to keep things organized.

```bash
# run to check if there are already existing changes and marge them to your project
npn pull https://github.com/arribion-link/arribion.kyu.software.engineering.git
```

### 📝 Ways to Contribute to Documentation

#### Key Note 

Project content file structure

```
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
|   |        |___guide/
|   |        |    |_example.md
|   |        |___Visual Programming
|   |        |    |_Page-1.md
|   |             |_page-2.md
|   |             |_page-3.md
```

Add a new page by including a new markdown  ie:

```
page-4.md
```

***NOTE***

Each file must have a title and description wrapped in tripple hyphen on top of each markdown file ie:
```bash
---
title: Introduction to visual programming
description: Learn basics of visual programming
---
```

📝 Ways to Contribute to Documentation

***Fix Typos and Grammar***

- Even small corrections improve clarity and professionalism.
- Look for spelling errors, punctuation issues, or awkward phrasing.

***Improve Readability***

- Rewrite complex sentences to be more beginner-friendly.
- Break long paragraphs into bullet points or sections.

***Add Missing Information***

- Fill in gaps where steps are unclear or undocumented.
- Include examples, screenshots, or diagrams to aid understanding.

***Update Outdated Content***

- Check if instructions match the latest version of the software.
- Remove deprecated features or update links.

***Organize and Restructure***

- Suggest better navigation, table of contents, or indexing.
- Create or improve README files, FAQs, or Getting Started guides.

***Write Tutorials or How-To Guides***

- Create beginner-friendly walkthroughs for common tasks.
- Share your own experience using the project.

***Review and Test Instructions***

- Follow the steps in the docs and report anything that doesn’t work.
- Suggest improvements based on your testing.

***Add Code Comments***

- Explain complex logic or usage in inline comments.
- Help others understand the codebase better.

***Contribute to Style Guides***

- Help define consistent tone, formatting, and terminology.
- Create templates for contributors to follow.

#### Submit a Pull Request (PR)

- A PR is how you propose your changes to be merged into the main project.

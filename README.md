# Lucas Prado | Web Engineering & Marketing Mindset

> "Less 'npm install', more performance. Less '404 error', more strategy."

*Live project link: [https://lucasprado.space](https://lucasprado.space)*

## About the Project

This is my personal portfolio, built to showcase not only my engineering projects (Chrome extensions, high-performance corporate websites, and enterprise SaaS) but also my business-oriented mindset (Marketing DNA). 

The main differentiator of this project is the conscious architectural choice to use **Vanilla JavaScript, Semantic HTML5, and Pure CSS3**. In an ecosystem obsessed with shipping 2MB React bundles for simple static landing pages, this portfolio proves a point: by mastering the core technologies, you can deliver a blazing-fast, highly accessible, multilingual, and scalable application. 

The result? **90+ Performance and 100/100 Accessibility & Best Practices on Google Lighthouse.**

## Featured Solutions

Here are the main products highlighted in this portfolio:

* **Systems & SaaS (Enterprise):**
  * **Innovative Business Portal:** A private Full-Stack SaaS platform built to automate accounting operations. Features secure Auth (Supabase/RLS), document management (Google Drive API recursive algorithms), and automated billing via mTLS banking integration (Banco Inter API).
* **B2B Websites & Niche Solutions:** High-performance, SEO-optimized corporate platforms tailored for distinct business sectors. Focused on UI/UX, brand authority, and targeted lead generation across multiple industries:
  * **Accounting & Corporate Finance:** *Innovative Business* (Clear, professional service presentation).
  * **Legal Services:** *Oliveira & Sales* (Design focused on legal security and direct client-lawyer contact).
  * **Luxury Real Estate:** *Equity Imóveis* (AJAX smart search, market intelligence, and dynamic SEO).
  * **Logistics & Industry:** *Baran Transport* (Local SEO dominance, product catalogs, and material calculators).
  * **Architecture & Construction:** *Reformas Almeida* (Conversion-focused design with project galleries for high-end clients).
* **Browser Extensions:**
  * **Câmbio Real-Time:** Quick and precise access to global currency rates directly from the browser without impacting performance.
  * **SmartCase Pro:** The ultimate developer tool for text formatting (camelCase, snake_case), data cleaning, and instantly redacting sensitive information.
  * **ClipOctaplus:** A privacy-first clipboard manager that seamlessly saves copy history 100% locally, featuring a PIN-protected secure vault.

## Technical Highlights & "Under the Hood"

* **Advanced International SEO Architecture:** Instead of relying on Client-Side Rendering (which harms global indexation), the project uses a physical folder structure (`/en/`, `/es/`, `/pl/`) combined with `hreflang` tags. This ensures the Googlebot perfectly indexes and serves the localized version natively in each country.
* **Smart Global JS Router:** A Vanilla JS script intercepts the `navigator.language` API at the root level, identifies the user's OS native language, and instantly routes them (`window.location.replace`) to the correct localized folder, with a seamless fallback to English (`x-default`) for unsupported regions.
* **Performance Obsession:** Extensive use of modern CSS features like `content-visibility: auto` for lazy rendering of off-screen sections, keeping the initial paint ridiculously fast. 
* **A11y (The 100/100 Formula):** Perfect semantic structure (`<main>`, `<article>`), dynamic `aria-labels`, `focus-visible` states for keyboard navigation, `prefers-reduced-motion` media queries, and injected JSON-LD Schema.org to feed Google's Knowledge Graph.
* **Integrated Gamification:** Implementation of a custom iframe mini-game ("Corgi Break"), utilizing marketing concepts to aggressively increase user dwell time (reducing bounce rate).

## Technologies Used

* **HTML5:** Pure, semantic, and blind-friendly.
* **CSS3:** Flexbox, CSS Grid, Custom Properties (CSS Variables for the Cyberpunk theme). *Zero Tailwind, Zero Bootstrap.*
* **JavaScript (ES6+):** Vanilla DOM manipulation and logic. *Zero React/Vue.*
* **Infrastructure:** GitHub Pages, DNS Routing (CNAME/A records).

## How to run locally

This project has no complex build processes, no NPM dependencies, and will not create a massive `node_modules` black hole on your hard drive. 

To run it:

1. Clone the repository:
   ```bash
   git clone [https://github.com/lsprado-dev/lsprado-dev.github.io.git](https://github.com/lsprado-dev/lsprado-dev.github.io.git)
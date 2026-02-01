# MJ Growth Partner — Website

Nuxt 3 website for MJ Growth Partner.

## Tech Stack

- **Framework:** [Nuxt 3](https://nuxt.com/) (v3.15.4)
- **UI:** [Vue 3](https://vuejs.org/) with Composition API
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) via `@nuxtjs/tailwindcss`
- **Icons:** [Lucide](https://lucide.dev/) via `lucide-vue-next`
- **Utilities:** [VueUse](https://vueuse.org/) via `@vueuse/nuxt`
- **Fonts:** Google Fonts via `@nuxtjs/google-fonts`
- **Language:** TypeScript

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts a dev server at `http://localhost:3000`.

## Production

```bash
npm run build     # Build for production
npm run preview   # Preview the production build
npm run generate  # Generate static site
```

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.vue` | Home page |
| `/about` | `pages/about.vue` | About page |
| `/services` | `pages/services.vue` | Services overview |
| `/contact` | `pages/contact.vue` | Contact page |
| `/diagnostic` | `pages/diagnostic/index.vue` | Diagnostic tool landing |
| `/diagnostic/start` | `pages/diagnostic/start.vue` | Diagnostic intake form |

## Components

| Component | Description |
|-----------|-------------|
| `SiteHeader.vue` | Navigation header |
| `SiteFooter.vue` | Site footer |
| `MjLogo.vue` | MJ Growth Partner logo |
| `MountainScene.vue` | Hero scene graphic |
| `PhaseCard.vue` | Phase/service card |
| `RadarChart.vue` | Radar chart visualisation |
| `FadeIn.vue` | Fade-in animation wrapper |

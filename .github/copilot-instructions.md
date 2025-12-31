# Copilot Instructions for Além da Conta

## Architecture Overview

This is a Next.js 16 educational website focused on mathematics philosophy, built with the App Router. The site emphasizes simplicity, clarity, and SEO, using static content for learning sections.

- **Conceptual Layers**: Content (core, technology-independent), Navigation Experience (home, study, syllabus, origin), Interaction (future comments/discussions).
- **Key Structure**: Pages in `src/app/` (e.g., `page.tsx` for home, `origem/page.tsx` for origin). Shared layout in `layout.tsx` with fixed header.
- **Components**: UI components in `src/components/ui/` follow shadcn/ui patterns (e.g., `button.tsx` uses `cva` for variants). Custom components like `Header.tsx` use these primitives.
- **Styling**: Tailwind CSS v4 with custom theme in `globals.css`, zinc color base, Noto Sans font, and CSS variables for theming.
- **Data Flow**: Static site; no backend or dynamic data. Content is hardcoded in page components.

## Developer Workflows

- **Development**: Run `npm run dev` to start the dev server at localhost:3000.
- **Build**: Use `npm run build` for production build; `npm run start` to serve built app.
- **Linting**: `npm run lint` checks code with ESLint (Next.js config).
- **No Tests**: Project lacks test setup; focus on manual verification.

## Conventions and Patterns

- **Imports**: Use `@/` aliases (e.g., `@/components/Header`) as defined in `tsconfig.json` and `components.json`.
- **Class Merging**: Always use `cn()` from `@/lib/utils.ts` for combining Tailwind classes.
- **UI Components**: Extend shadcn/ui components (e.g., `Button` in `src/components/ui/button.tsx`) with variants via `cva`.
- **Navigation**: Use Next.js `Link` for routing; header navigation via `NavigationMenu` from Radix UI.
- **Language**: Content in Portuguese (pt-BR); metadata and UI reflect this.
- **Fonts**: Noto Sans for body, JetBrains Mono for code, loaded in `layout.tsx`.
- **Content Tone**: Clear, direct, reflective, provocative; avoid jargon, formalism, intimidating explanations.
- **UI Guidelines**: Minimalism, white space, reading-focused; avoid distracting elements like excess colors or animations.

## Integration Points

- **Dependencies**: Relies on Radix UI for primitives, Lucide React for icons, class-variance-authority for variants.
- **No External APIs**: Pure frontend; no database or third-party services.
- **SEO Focus**: Metadata in `layout.tsx` and pages prioritize search engine optimization.

Reference: `README.md` for project overview, `docs/` for vision and architecture, `components.json` for shadcn config, `package.json` for scripts.</content>
<parameter name="filePath">/workspaces/alemdaconta/.github/copilot-instructions.md

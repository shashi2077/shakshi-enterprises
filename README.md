# Shakshi Enterprises

Production-ready foundation built with Next.js, TypeScript, Tailwind CSS, the App Router, and ESLint.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Configure the public Supabase project URL and publishable key in `.env.local`. Never commit service-role keys or other secrets.

## Commands

- `npm run dev` — start the development server
- `npm run lint` — run ESLint
- `npm run typecheck` — check TypeScript
- `npm run build` — create a production build

## UI and data

The project includes a shadcn/ui-compatible `components.json`, theme tokens, the `cn` utility, and required base packages. Add components with `npx shadcn@latest add <component>`.

Supabase browser and server client factories are available in `src/lib/supabase`. Copy `.env.example` to `.env.local` and replace its placeholders with project values before using them.

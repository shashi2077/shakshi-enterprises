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

## UI and product data

The project includes a shadcn/ui-compatible `components.json`, theme tokens, the `cn` utility, and required base packages. Add components with `npx shadcn@latest add <component>`.

Supabase stores the public product catalogue. Browser and server client factories live in `src/lib/supabase`; product queries and database-to-UI mapping live in `src/lib/products`. UI components continue to consume the stable `Product` model from `src/types/product.ts` rather than raw database columns.

### Database design

The migration in `supabase/migrations` creates normalized `categories` and `products` tables. A product belongs to one category. Ordered, product-specific collections—gallery images, sizes, specifications, features, advantages, applications, accessories, and customization options—use JSONB arrays. This avoids many tiny ordering tables while remaining straightforward for a future admin editor. There is intentionally no price column.

Both tables use UUID primary keys, timestamps, automatic `updated_at` triggers, slug constraints, public ordering indexes, and Row Level Security. Anonymous and authenticated public clients can only select active categories and active products belonging to an active category. No public insert, update, or delete policy exists.

### Connect Supabase

1. Create a Supabase project.
2. Install the Supabase CLI and authenticate with `supabase login`.
3. Link the repository with `supabase link --project-ref <project-ref>`.
4. Apply versioned migrations with `supabase db push`.
5. Seed a local database with `supabase start` followed by `supabase db reset`. The checked-in `supabase/config.toml` automatically runs `supabase/seed.sql`.
6. For a linked remote project, apply `supabase/seed.sql` through a secure PostgreSQL connection after `supabase db push`. The seed is idempotent and can be rerun.
7. Copy `.env.example` to `.env.local` and add the project URL and publishable key from Supabase Project Settings → API.

Required runtime variables:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

The publishable key is safe for public reads only because RLS enforces access. A service-role key is not needed and must never be exposed to browser code. `.env.local` is ignored and must not be committed.

### Static development fallback

When either Supabase variable is absent or still contains the `.env.example` placeholder, server queries explicitly use `src/data/products.ts` and write a fallback notice to the server console. This keeps local and CI builds reproducible before a project is connected. When real-looking credentials are configured, database errors are thrown instead of silently switching to static data. This prevents production database failures from being hidden.

The static catalogue remains the seed source of truth for this foundation step. Public data flows as follows:

```text
Supabase → server query layer → row mapper → Product model → existing product UI
```

Future admin CRUD will require authenticated role checks and separate write policies. Do not add broad authenticated write access or use a service-role key in client components.

## Admin authentication

Supabase Auth owns passwords and sessions. The application never stores passwords in the public schema. After email/password authentication, the server reads the signed-in user's `profiles` row and allows `/admin` only when `role = 'admin'` and `active = true`. The protected layout repeats this authorization server-side on every admin render; client UI is not treated as an authorization boundary.

The `profiles` table is linked one-to-one to `auth.users`. A database trigger creates every new profile with the constrained `customer` role. Supported roles are `admin` and `customer`. Authenticated users may select only their own profile and may update only the `full_name` column. Table privileges prevent them from changing `role`, `active`, or identity fields, and there are no public insert or delete policies.

Session cookies are refreshed by `src/proxy.ts` for admin routes. Login is available at `/admin/login`; unauthenticated, inactive, and non-admin accounts cannot enter `/admin`. Logout invalidates the Supabase session and returns to the login page.

### Create the first administrator safely

1. Apply migrations before creating users: `supabase db push`.
2. In Supabase Dashboard → Authentication → Users, create the administrator's email/password account. Do not expose a public sign-up path for administrators.
3. From the Supabase SQL Editor while authenticated as the project owner, run the following after replacing the email:

```sql
update public.profiles
set role = 'admin', active = true
where id = (select id from auth.users where email = 'admin@example.com');
```

4. Confirm exactly one intended row changed, then sign in at `/admin/login`.

Do not accept a role from registration metadata, forms, URL parameters, or browser code. Later role-management functionality must run through narrowly scoped, audited server/database logic. The public publishable key remains the only key used by the application today. A service-role key is not required for login or authorization; if a future server-only workflow needs one, store it only in the deployment secret manager and never use a `NEXT_PUBLIC_` prefix.

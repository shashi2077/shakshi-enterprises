create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at = timezone('utc', now()); return new; end;
$$;

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) > 0),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  description text,
  active boolean not null default true,
  sort_order integer not null default 0 check (sort_order >= 0),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories(id) on update cascade on delete restrict,
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  name text not null check (char_length(trim(name)) > 0),
  short_description text not null,
  description text not null,
  featured boolean not null default false,
  active boolean not null default true,
  primary_image text,
  gallery jsonb not null default '[]'::jsonb check (jsonb_typeof(gallery) = 'array'),
  sizes jsonb not null default '[]'::jsonb check (jsonb_typeof(sizes) = 'array'),
  specifications jsonb not null default '[]'::jsonb check (jsonb_typeof(specifications) = 'array'),
  features jsonb not null default '[]'::jsonb check (jsonb_typeof(features) = 'array'),
  advantages jsonb not null default '[]'::jsonb check (jsonb_typeof(advantages) = 'array'),
  applications jsonb not null default '[]'::jsonb check (jsonb_typeof(applications) = 'array'),
  accessories jsonb not null default '[]'::jsonb check (jsonb_typeof(accessories) = 'array'),
  customization_options jsonb not null default '[]'::jsonb check (jsonb_typeof(customization_options) = 'array'),
  sort_order integer not null default 0 check (sort_order >= 0),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index categories_public_order_idx on public.categories (sort_order, name) where active;
create index products_public_order_idx on public.products (sort_order, name) where active;
create index products_category_public_idx on public.products (category_id, sort_order, name) where active;
create index products_featured_public_idx on public.products (sort_order, name) where active and featured;

create trigger categories_set_updated_at before update on public.categories for each row execute function public.set_updated_at();
create trigger products_set_updated_at before update on public.products for each row execute function public.set_updated_at();

alter table public.categories enable row level security;
alter table public.products enable row level security;

create policy "Public can read active categories" on public.categories for select to anon, authenticated using (active = true);
create policy "Public can read active products in active categories" on public.products for select to anon, authenticated
using (active = true and exists (select 1 from public.categories c where c.id = products.category_id and c.active = true));

comment on table public.products is 'Public B2B catalogue products. Prices intentionally do not belong in this table.';
comment on column public.products.gallery is 'Ordered array of approved product image paths.';
comment on column public.products.sizes is 'Ordered ProductSize objects; unverified dimensions remain generic.';
comment on column public.products.specifications is 'Ordered label/value objects for verified specifications only.';

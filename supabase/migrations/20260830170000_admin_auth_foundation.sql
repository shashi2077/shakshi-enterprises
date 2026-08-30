create type public.app_role as enum ('admin', 'customer');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text check (full_name is null or char_length(trim(full_name)) between 1 and 120),
  role public.app_role not null default 'customer',
  active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index profiles_role_active_idx on public.profiles (role, active);
create trigger profiles_set_updated_at before update on public.profiles for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, role, active)
  values (new.id, nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''), 'customer', true)
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

insert into public.profiles (id, full_name, role, active)
select id, nullif(trim(raw_user_meta_data ->> 'full_name'), ''), 'customer', true from auth.users
on conflict (id) do nothing;

alter table public.profiles enable row level security;

create policy "Users can read their own profile" on public.profiles
for select to authenticated using (id = (select auth.uid()));

create policy "Users can update their own permitted profile fields" on public.profiles
for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));

revoke all on table public.profiles from anon;
revoke insert, delete, truncate, references, trigger on table public.profiles from authenticated;
revoke update on table public.profiles from authenticated;
grant select on table public.profiles to authenticated;
grant update (full_name) on table public.profiles to authenticated;

comment on column public.profiles.role is 'Assigned only through trusted database/server administration; never accepted from client profile updates.';
comment on column public.profiles.active is 'Controls application access and is not user-editable.';

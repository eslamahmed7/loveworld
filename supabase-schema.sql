-- Mahmoud ❤️ Mariam production schema for Supabase
-- Run this in the Supabase SQL editor after creating the two Auth users.

create extension if not exists pgcrypto;
create extension if not exists pg_trgm;

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  name text unique not null check (name in ('Mahmoud', 'Mariam')),
  display_name text not null,
  avatar_url text,
  last_seen timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.enforce_two_love_users()
returns trigger
language plpgsql
as $$
begin
  if (select count(*) from public.users where id <> new.id) >= 2 then
    raise exception 'Only Mahmoud and Mariam can exist in public.users';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_enforce_two_love_users on public.users;
create trigger trg_enforce_two_love_users
before insert or update on public.users
for each row execute function public.enforce_two_love_users();

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  text text,
  type text not null default 'text' check (type in ('text', 'voice')),
  user_id uuid not null references public.users(id) on delete cascade,
  sender_name text not null check (sender_name in ('Mahmoud', 'Mariam')),
  is_seen boolean not null default false,
  seen_at timestamptz,
  voice_url text,
  voice_path text,
  voice_bucket text default 'love-media',
  created_at timestamptz not null default now()
);

create table if not exists public.voice_messages (
  id uuid primary key default gen_random_uuid(),
  message_id uuid references public.messages(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  audio_url text,
  audio_path text,
  bucket text default 'love-media',
  duration_seconds numeric,
  mime_type text,
  size bigint,
  created_at timestamptz not null default now()
);

create table if not exists public.reactions (
  id uuid primary key default gen_random_uuid(),
  message_id uuid not null references public.messages(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  emoji text not null check (emoji in ('❤️', '😂', '😢', '🔥')),
  created_at timestamptz not null default now(),
  unique (message_id, user_id, emoji)
);

create table if not exists public.memories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  uploader_name text not null check (uploader_name in ('Mahmoud', 'Mariam')),
  title text not null,
  description text,
  date date not null,
  location_text text,
  lat numeric,
  lng numeric,
  is_favorite boolean not null default false,
  is_star boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  memory_id uuid references public.memories(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  uploader_name text not null check (uploader_name in ('Mahmoud', 'Mariam')),
  type text not null check (type in ('photo', 'video', 'voice', 'audio', 'file')),
  title text,
  url text,
  path text,
  bucket text default 'love-media',
  provider text not null default 'supabase',
  mime_type text,
  size bigint,
  created_at timestamptz not null default now()
);

create table if not exists public.locations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  name text not null,
  address text,
  lat numeric,
  lng numeric,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.playlists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.songs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  playlist_id uuid references public.playlists(id) on delete set null,
  title text not null,
  artist text,
  audio_url text,
  audio_path text,
  bucket text default 'love-music',
  mime_type text,
  size bigint,
  is_favorite boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.time_capsules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  creator_name text not null check (creator_name in ('Mahmoud', 'Mariam')),
  title text not null,
  message text not null,
  media_url text,
  media_path text,
  media_bucket text default 'love-media',
  media_type text default 'text',
  open_date timestamptz not null,
  password_hash text not null,
  is_opened boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.bucket_lists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  creator_name text not null check (creator_name in ('Mahmoud', 'Mariam')),
  title text not null,
  description text,
  target_date date,
  progress int not null default 0 check (progress between 0 and 100),
  status text not null default 'pending' check (status in ('pending', 'completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.love_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete set null,
  body text unique not null,
  favorite_by uuid[] not null default '{}'::uuid[],
  created_at timestamptz not null default now()
);

create table if not exists public.star_memories (
  id uuid primary key default gen_random_uuid(),
  memory_id uuid not null references public.memories(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (memory_id, user_id)
);

create table if not exists public.presence (
  user_id uuid primary key references public.users(id) on delete cascade,
  name text not null check (name in ('Mahmoud', 'Mariam')),
  display_name text not null,
  is_online boolean not null default false,
  last_seen timestamptz not null default now()
);

create index if not exists idx_messages_created_at on public.messages(created_at);
create index if not exists idx_messages_user_id on public.messages(user_id);
create index if not exists idx_memories_date on public.memories(date);
create index if not exists idx_memories_user_id on public.memories(user_id);
create index if not exists idx_media_memory_id on public.media(memory_id);
create index if not exists idx_locations_geo on public.locations(lat, lng);
create index if not exists idx_time_capsules_open_date on public.time_capsules(open_date);
create index if not exists idx_bucket_lists_status on public.bucket_lists(status);
create index if not exists idx_memories_search on public.memories using gin ((title || ' ' || coalesce(description, '') || ' ' || coalesce(location_text, '')) gin_trgm_ops);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_users_touch on public.users;
create trigger trg_users_touch before update on public.users for each row execute function public.touch_updated_at();
drop trigger if exists trg_memories_touch on public.memories;
create trigger trg_memories_touch before update on public.memories for each row execute function public.touch_updated_at();
drop trigger if exists trg_time_capsules_touch on public.time_capsules;
create trigger trg_time_capsules_touch before update on public.time_capsules for each row execute function public.touch_updated_at();
drop trigger if exists trg_bucket_lists_touch on public.bucket_lists;
create trigger trg_bucket_lists_touch before update on public.bucket_lists for each row execute function public.touch_updated_at();

create or replace function public.is_love_user(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.users u
    where u.id = uid
      and u.name in ('Mahmoud', 'Mariam')
  );
$$;

create or replace function public.current_love_name()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select name from public.users where id = auth.uid();
$$;

alter table public.users enable row level security;
alter table public.messages enable row level security;
alter table public.voice_messages enable row level security;
alter table public.reactions enable row level security;
alter table public.memories enable row level security;
alter table public.media enable row level security;
alter table public.locations enable row level security;
alter table public.playlists enable row level security;
alter table public.songs enable row level security;
alter table public.time_capsules enable row level security;
alter table public.bucket_lists enable row level security;
alter table public.love_messages enable row level security;
alter table public.star_memories enable row level security;
alter table public.presence enable row level security;

drop policy if exists "love profiles are readable" on public.users;
create policy "love profiles are readable" on public.users
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own love profile" on public.users;
create policy "insert own love profile" on public.users
for insert to authenticated
with check (id = auth.uid() and name in ('Mahmoud', 'Mariam'));

drop policy if exists "update own love profile" on public.users;
create policy "update own love profile" on public.users
for update to authenticated
using (id = auth.uid())
with check (id = auth.uid() and name in ('Mahmoud', 'Mariam'));

drop policy if exists "read messages" on public.messages;
create policy "read messages" on public.messages
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own messages" on public.messages;
create policy "insert own messages" on public.messages
for insert to authenticated
with check (public.is_love_user() and user_id = auth.uid() and sender_name = public.current_love_name());

drop policy if exists "update message receipts" on public.messages;
create policy "update message receipts" on public.messages
for update to authenticated
using (public.is_love_user())
with check (public.is_love_user());

drop policy if exists "delete own messages" on public.messages;
create policy "delete own messages" on public.messages
for delete to authenticated using (public.is_love_user() and user_id = auth.uid());

drop policy if exists "read voice messages" on public.voice_messages;
create policy "read voice messages" on public.voice_messages
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own voice messages" on public.voice_messages;
create policy "insert own voice messages" on public.voice_messages
for insert to authenticated with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "delete own voice messages" on public.voice_messages;
create policy "delete own voice messages" on public.voice_messages
for delete to authenticated using (public.is_love_user() and user_id = auth.uid());

drop policy if exists "read reactions" on public.reactions;
create policy "read reactions" on public.reactions
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own reactions" on public.reactions;
create policy "insert own reactions" on public.reactions
for insert to authenticated with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "delete own reactions" on public.reactions;
create policy "delete own reactions" on public.reactions
for delete to authenticated using (public.is_love_user() and user_id = auth.uid());

drop policy if exists "read memories" on public.memories;
create policy "read memories" on public.memories
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own memories" on public.memories;
create policy "insert own memories" on public.memories
for insert to authenticated
with check (public.is_love_user() and user_id = auth.uid() and uploader_name = public.current_love_name());

drop policy if exists "update own memories" on public.memories;
create policy "update own memories" on public.memories
for update to authenticated
using (public.is_love_user() and user_id = auth.uid())
with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "delete own memories" on public.memories;
create policy "delete own memories" on public.memories
for delete to authenticated using (public.is_love_user() and user_id = auth.uid());

drop policy if exists "read media" on public.media;
create policy "read media" on public.media
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own media" on public.media;
create policy "insert own media" on public.media
for insert to authenticated
with check (public.is_love_user() and user_id = auth.uid() and uploader_name = public.current_love_name());

drop policy if exists "delete own media" on public.media;
create policy "delete own media" on public.media
for delete to authenticated using (public.is_love_user() and user_id = auth.uid());

drop policy if exists "read locations" on public.locations;
create policy "read locations" on public.locations
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own locations" on public.locations;
create policy "insert own locations" on public.locations
for insert to authenticated with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "update own locations" on public.locations;
create policy "update own locations" on public.locations
for update to authenticated
using (public.is_love_user() and user_id = auth.uid())
with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "delete own locations" on public.locations;
create policy "delete own locations" on public.locations
for delete to authenticated using (public.is_love_user() and user_id = auth.uid());

drop policy if exists "read playlists" on public.playlists;
create policy "read playlists" on public.playlists
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own playlists" on public.playlists;
create policy "insert own playlists" on public.playlists
for insert to authenticated with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "update own playlists" on public.playlists;
create policy "update own playlists" on public.playlists
for update to authenticated
using (public.is_love_user() and user_id = auth.uid())
with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "delete own playlists" on public.playlists;
create policy "delete own playlists" on public.playlists
for delete to authenticated using (public.is_love_user() and user_id = auth.uid());

drop policy if exists "read songs" on public.songs;
create policy "read songs" on public.songs
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own songs" on public.songs;
create policy "insert own songs" on public.songs
for insert to authenticated with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "update own songs" on public.songs;
create policy "update own songs" on public.songs
for update to authenticated
using (public.is_love_user() and user_id = auth.uid())
with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "delete own songs" on public.songs;
create policy "delete own songs" on public.songs
for delete to authenticated using (public.is_love_user() and user_id = auth.uid());

drop policy if exists "read capsule envelopes" on public.time_capsules;
create policy "read capsule envelopes" on public.time_capsules
for select to authenticated using (public.is_love_user());

drop policy if exists "capsules via functions only insert" on public.time_capsules;
create policy "capsules via functions only insert" on public.time_capsules
for insert to authenticated with check (false);

drop policy if exists "capsules via functions only update" on public.time_capsules;
create policy "capsules via functions only update" on public.time_capsules
for update to authenticated using (false) with check (false);

drop policy if exists "capsules via functions only delete" on public.time_capsules;
create policy "capsules via functions only delete" on public.time_capsules
for delete to authenticated using (false);

drop policy if exists "read bucket list" on public.bucket_lists;
create policy "read bucket list" on public.bucket_lists
for select to authenticated using (public.is_love_user());

drop policy if exists "insert bucket list" on public.bucket_lists;
create policy "insert bucket list" on public.bucket_lists
for insert to authenticated
with check (public.is_love_user() and user_id = auth.uid() and creator_name = public.current_love_name());

drop policy if exists "update shared bucket list" on public.bucket_lists;
create policy "update shared bucket list" on public.bucket_lists
for update to authenticated using (public.is_love_user()) with check (public.is_love_user());

drop policy if exists "delete shared bucket list" on public.bucket_lists;
create policy "delete shared bucket list" on public.bucket_lists
for delete to authenticated using (public.is_love_user());

drop policy if exists "read love messages" on public.love_messages;
create policy "read love messages" on public.love_messages
for select to authenticated using (public.is_love_user());

drop policy if exists "insert love messages" on public.love_messages;
create policy "insert love messages" on public.love_messages
for insert to authenticated with check (public.is_love_user());

drop policy if exists "favorite love messages" on public.love_messages;
create policy "favorite love messages" on public.love_messages
for update to authenticated using (public.is_love_user()) with check (public.is_love_user());

drop policy if exists "read star memories" on public.star_memories;
create policy "read star memories" on public.star_memories
for select to authenticated using (public.is_love_user());

drop policy if exists "insert own star memories" on public.star_memories;
create policy "insert own star memories" on public.star_memories
for insert to authenticated with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "delete own star memories" on public.star_memories;
create policy "delete own star memories" on public.star_memories
for delete to authenticated using (public.is_love_user() and user_id = auth.uid());

drop policy if exists "read presence" on public.presence;
create policy "read presence" on public.presence
for select to authenticated using (public.is_love_user());

drop policy if exists "upsert own presence" on public.presence;
create policy "upsert own presence" on public.presence
for insert to authenticated with check (public.is_love_user() and user_id = auth.uid());

drop policy if exists "update own presence" on public.presence;
create policy "update own presence" on public.presence
for update to authenticated
using (public.is_love_user() and user_id = auth.uid())
with check (public.is_love_user() and user_id = auth.uid());

revoke all on public.time_capsules from anon, authenticated;
grant select (id, user_id, creator_name, title, open_date, is_opened, media_type, created_at, updated_at)
on public.time_capsules to authenticated;
grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.users,
  public.messages,
  public.voice_messages,
  public.reactions,
  public.memories,
  public.media,
  public.locations,
  public.playlists,
  public.songs,
  public.bucket_lists,
  public.love_messages,
  public.star_memories,
  public.presence
to authenticated;

create or replace function public.create_time_capsule(
  p_title text,
  p_message text,
  p_open_date timestamptz,
  p_password text,
  p_media_url text default null,
  p_media_path text default null,
  p_media_bucket text default 'love-media',
  p_media_type text default 'text'
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
  v_name text;
begin
  if not public.is_love_user(auth.uid()) then
    raise exception 'Not allowed';
  end if;

  select name into v_name from public.users where id = auth.uid();

  insert into public.time_capsules (
    user_id, creator_name, title, message, open_date, password_hash,
    media_url, media_path, media_bucket, media_type
  )
  values (
    auth.uid(), v_name, p_title, p_message, p_open_date,
    crypt(p_password, gen_salt('bf')),
    p_media_url, p_media_path, p_media_bucket, coalesce(p_media_type, 'text')
  )
  returning id into v_id;

  return v_id;
end;
$$;

create or replace function public.open_time_capsule(
  p_capsule_id uuid,
  p_password text
)
returns table (
  id uuid,
  title text,
  message text,
  media_url text,
  media_path text,
  media_bucket text,
  media_type text,
  open_date timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_love_user(auth.uid()) then
    raise exception 'Not allowed';
  end if;

  if not exists (
    select 1
    from public.time_capsules tc
    where tc.id = p_capsule_id
      and tc.open_date <= now()
      and crypt(p_password, tc.password_hash) = tc.password_hash
  ) then
    raise exception 'Capsule is locked or password is wrong';
  end if;

  update public.time_capsules tc
  set is_opened = true
  where tc.id = p_capsule_id;

  return query
  select tc.id, tc.title, tc.message, tc.media_url, tc.media_path, tc.media_bucket, tc.media_type, tc.open_date
  from public.time_capsules tc
  where tc.id = p_capsule_id;
end;
$$;

create or replace function public.delete_time_capsule(
  p_capsule_id uuid,
  p_password text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_love_user(auth.uid()) then
    raise exception 'Not allowed';
  end if;

  delete from public.time_capsules tc
  where tc.id = p_capsule_id
    and crypt(p_password, tc.password_hash) = tc.password_hash;

  if not found then
    raise exception 'Password is wrong';
  end if;
end;
$$;

create or replace function public.match_memories(
  query_text text,
  match_count int default 5
)
returns table (
  id uuid,
  title text,
  description text,
  date date,
  location_text text,
  rank real
)
language sql
stable
security definer
set search_path = public
as $$
  select
    m.id,
    m.title,
    m.description,
    m.date,
    m.location_text,
    greatest(
      similarity(m.title, query_text),
      similarity(coalesce(m.description, ''), query_text),
      similarity(coalesce(m.location_text, ''), query_text)
    )::real as rank
  from public.memories m
  where public.is_love_user(auth.uid())
    and (
      m.title ilike '%' || query_text || '%'
      or coalesce(m.description, '') ilike '%' || query_text || '%'
      or coalesce(m.location_text, '') ilike '%' || query_text || '%'
      or greatest(
        similarity(m.title, query_text),
        similarity(coalesce(m.description, ''), query_text),
        similarity(coalesce(m.location_text, ''), query_text)
      ) > 0.12
    )
  order by rank desc, m.date desc
  limit match_count;
$$;

grant execute on function public.create_time_capsule(text, text, timestamptz, text, text, text, text, text) to authenticated;
grant execute on function public.open_time_capsule(uuid, text) to authenticated;
grant execute on function public.delete_time_capsule(uuid, text) to authenticated;
grant execute on function public.match_memories(text, int) to authenticated;

insert into storage.buckets (id, name, public, file_size_limit)
values
  ('love-media', 'love-media', false, 52428800),
  ('love-music', 'love-music', false, 104857600)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit;

drop policy if exists "love users read storage" on storage.objects;
create policy "love users read storage" on storage.objects
for select to authenticated
using (bucket_id in ('love-media', 'love-music') and public.is_love_user());

drop policy if exists "love users upload own storage folder" on storage.objects;
create policy "love users upload own storage folder" on storage.objects
for insert to authenticated
with check (
  bucket_id in ('love-media', 'love-music')
  and public.is_love_user()
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "love users update own storage folder" on storage.objects;
create policy "love users update own storage folder" on storage.objects
for update to authenticated
using (
  bucket_id in ('love-media', 'love-music')
  and public.is_love_user()
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id in ('love-media', 'love-music')
  and public.is_love_user()
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "love users delete own storage folder" on storage.objects;
create policy "love users delete own storage folder" on storage.objects
for delete to authenticated
using (
  bucket_id in ('love-media', 'love-music')
  and public.is_love_user()
  and (storage.foldername(name))[1] = auth.uid()::text
);

alter table public.messages replica identity full;
alter table public.reactions replica identity full;
alter table public.memories replica identity full;
alter table public.media replica identity full;
alter table public.presence replica identity full;

do $$
begin
  begin alter publication supabase_realtime add table public.messages; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.reactions; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.memories; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.media; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.presence; exception when duplicate_object then null; end;
end $$;

-- After Auth users exist, insert their profile rows with the real auth.users IDs:
-- insert into public.users (id, email, name, display_name)
-- values
--   ('MAHMOUD_AUTH_UUID', 'mahmoud@example.com', 'Mahmoud', 'محمود'),
--   ('MARIAM_AUTH_UUID', 'mariam@example.com', 'Mariam', 'مريم')
-- on conflict (id) do update
-- set email = excluded.email, name = excluded.name, display_name = excluded.display_name;

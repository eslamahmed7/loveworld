# محمود ❤️ مريم

Vanilla HTML/CSS/JavaScript romantic web app for two people only: Mahmoud and Mariam.

## Run Locally

Open a static server in this folder:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.

Without Supabase keys, the app runs in demo mode:

- `mahmoud@example.com`
- `mariam@example.com`
- password: `love123456`

## Supabase Setup

1. Create a Supabase project.
2. Enable Email/Password Auth.
3. Create two Auth users only: Mahmoud and Mariam.
4. Run [sql/supabase-schema.sql](sql/supabase-schema.sql) in the Supabase SQL editor.
5. Insert the real Auth UUIDs into `public.users` using the commented SQL block at the bottom of the schema.
6. Copy `config.example.js` into `config.js` and fill:

```js
window.LOVE_APP_CONFIG = {
  SUPABASE_URL: "https://your-project-ref.supabase.co",
  SUPABASE_ANON_KEY: "your-supabase-publishable-anon-key",
  MEDIA_BUCKET: "love-media",
  MUSIC_BUCKET: "love-music",
  GOOGLE_MAPS_API_KEY: "",
  CLOUDINARY_CLOUD_NAME: "",
  CLOUDINARY_UPLOAD_PRESET: ""
};
```

Cloudinary is optional. If `CLOUDINARY_CLOUD_NAME` and `CLOUDINARY_UPLOAD_PRESET` are set, image/video memory uploads use Cloudinary. Audio, voice notes, capsules, and songs use Supabase Storage.

## Included Features

- Supabase Auth with global current user.
- RLS-protected database tables for the two users.
- WhatsApp-style realtime chat, read receipts, typing indicator, reactions, voice messages, online/offline status.
- Relationship counter from `21-07-2023`.
- Birthday countdowns for Mariam `04-09-2004` and Mahmoud `04-07-2003`.
- Memories CRUD with media upload, favorites, Star Memories, search, filters, WhatsApp share.
- Timeline, On This Day, Random Memory.
- Love Map with manual places and Google Maps embeds.
- Password-protected Time Capsules using `pgcrypto`.
- Persistent music player, songs, playlists, volume and mute.
- 50 daily love messages with favorite state.
- AI relationship assistant using Supabase data and the `match_memories` RPC fallback.
- Stats dashboard and bucket list.

## Deploy

This is a static app, so it can be deployed to Netlify, Vercel static hosting, Cloudflare Pages, GitHub Pages, or Supabase Hosting. Keep `config.js` configured for the deployed environment. The Supabase anon key is intended to be public; RLS is the security boundary.

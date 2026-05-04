# Nishchay AI — React Frontend

Landing page for Nishchay AI, built with React + Vite. Deployable to **Vercel** and **AWS Amplify Gen 2**.

## Tech stack

- React 18
- Vite 5
- CSS Modules (no extra CSS framework)
- Environment variable for API URL (`VITE_API_URL`)

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file
cp .env.example .env.local
# Edit .env.local and set VITE_API_URL=http://localhost:3000

# 3. Start the backend (from the project root)
cd .. && node server.js

# 4. Start the frontend dev server
cd nishchay-frontend && npm run dev
```

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
cd nishchay-frontend
vercel
```

Follow the prompts. Vercel auto-detects Vite.

### Option B — Vercel Dashboard

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) → Import repository.
3. Set **Root Directory** to `nishchay-frontend`.
4. Add environment variable:
   - `VITE_API_URL` → your backend URL (e.g. `https://api.nishchay.ai`)
5. Click **Deploy**.

The `vercel.json` handles SPA routing (all paths → `index.html`).

---

## Deploy to AWS Amplify Gen 2

### Option A — Amplify Console (recommended)

1. Push this repo to GitHub / CodeCommit / Bitbucket.
2. Open [AWS Amplify Console](https://console.aws.amazon.com/amplify/home).
3. Click **New app → Host web app**.
4. Connect your repository and select the branch.
5. Set **App root directory** to `nishchay-frontend`.
6. Amplify will detect `amplify.yml` automatically.
7. Under **Environment variables**, add:
   - `VITE_API_URL` → your backend URL
8. Click **Save and deploy**.

Amplify serves the `dist/` folder and the `amplify.yml` configures the build.

### Option B — Amplify CLI (Gen 2)

```bash
npm install -g @aws-amplify/cli
cd nishchay-frontend
amplify init
amplify push
```

### SPA routing on Amplify

In the Amplify Console, go to **App settings → Rewrites and redirects** and add:

| Source address | Target address | Type              |
|----------------|----------------|-------------------|
| `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|js\|png\|txt\|svg\|woff\|woff2\|ttf\|map\|json)$)([^.]+$)/>` | `/index.html` | 200 (Rewrite) |

This ensures React Router (if added later) and direct URL access work correctly.

---

## Environment variables

| Variable        | Description                          | Example                        |
|-----------------|--------------------------------------|--------------------------------|
| `VITE_API_URL`  | Base URL of the Express backend API  | `https://api.nishchay.ai`      |

Leave `VITE_API_URL` empty (or unset) to use relative URLs — useful when the frontend and backend are served from the same origin.

---

## Project structure

```
nishchay-frontend/
├── amplify/              # Amplify Gen 2 backend definition
│   └── backend.ts
├── src/
│   ├── components/       # One component + CSS Module per section
│   │   ├── Navbar.*
│   │   ├── Hero.*
│   │   ├── WaitlistForm.*
│   │   ├── ProofStrip.*
│   │   ├── Problem.*
│   │   ├── HowItWorks.*
│   │   ├── Features.*
│   │   ├── Testimonials.*
│   │   ├── Pricing.*
│   │   ├── FinalCta.*
│   │   └── Footer.*
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         # Global tokens + reset
├── amplify.yml           # Amplify build spec
├── vercel.json           # Vercel SPA rewrite rules
├── vite.config.js
└── package.json
```

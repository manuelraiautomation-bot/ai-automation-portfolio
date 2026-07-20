# AI Automation — Bio-Link Portfolio

A single-page Next.js bio-link site. Edit `app/page.js` to change your name,
bio, and links. Colors/fonts live in `app/globals.css`.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:3000

## Push to GitHub

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

(Create the empty repo on github.com first — click "New repository", don't
initialize it with a README, then copy the remote URL it gives you.)

## Deploy to Vercel

1. Go to vercel.com and sign in with your GitHub account.
2. Click "Add New… → Project".
3. Select this GitHub repo. Vercel auto-detects Next.js — no config needed.
4. Click "Deploy".

Every future `git push` to `main` auto-deploys a new version.

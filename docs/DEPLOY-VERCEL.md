# Deploy on Vercel (Namecheap domain)

This project is ready to deploy on Vercel.

## 1) Prerequisites
- GitHub repository connected to Vercel
- Namecheap DNS access for `jamesdaime.com`
- Production env values if analytics is required

## 2) Create Vercel project
1. Open Vercel dashboard
2. Import repository: `VinPOPFrance/James`
3. Framework preset: Next.js (auto-detected)
4. Build settings:
   - Install command: `npm ci`
   - Build command: `npm run build`
   - Output: default

## 3) Configure environment variables
In Vercel project settings, add:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`

If omitted, analytics scripts remain disabled.

## 4) Add custom domains in Vercel
Add both domains:
- `jamesdaime.com`
- `www.jamesdaime.com`

Set `jamesdaime.com` as Primary Domain.

## 5) Update Namecheap DNS
In Namecheap > Advanced DNS:
1. `A` record
   - Host: `@`
   - Value: `76.76.21.21`
2. `CNAME` record
   - Host: `www`
   - Value: `cname.vercel-dns.com`

Remove old/overlapping WordPress records for `@` and `www`.

## 6) Verification checklist
1. `https://jamesdaime.com` loads the new site
2. `https://www.jamesdaime.com` redirects to primary domain
3. EN/NL routes work
4. Blog list + article pages work
5. GA4 Realtime and Clarity receive events (if vars set)

## 7) Safe cutover workflow (recommended)
1. Keep WordPress online until Vercel domain checks are green
2. Lower Namecheap TTL before switch (e.g., 300)
3. Change DNS records
4. Validate production behavior
5. Decommission WordPress only after stable checks

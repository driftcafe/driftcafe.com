# driftcafe.com Deployment Documentation

## Current Setup Overview

### Infrastructure Stack
- **Domain Registrar**: Porkbun (driftcafe.com)
- **DNS Management**: Vercel DNS
- **Website Hosting**: Vercel (Next.js)
- **Email Forwarding**: ImprovMX (free)
- **Code Repository**: GitHub (github.com/driftcafe/driftcafe.com)

### How It All Works Together

1. **Domain → DNS**
   - Porkbun nameservers point to Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`)
   - Vercel manages all DNS records

2. **DNS → Website**
   - A record: `driftcafe.com` → `216.198.79.1` (Vercel)
   - CNAME record: `www.driftcafe.com` → `a533f0dcd4663f2d.vercel-dns-017.com`
   - Visitors to your domain are routed to Vercel's servers

3. **DNS → Email**
   - 2 MX records point to ImprovMX's email servers (`mx1.improvmx.com`, `mx2.improvmx.com`)
   - 1 TXT record (SPF) authenticates your email
   - Emails to `*@driftcafe.com` (catch-all) forward to `driftcafe@gmail.com`

4. **GitHub → Vercel**
   - When you push code to GitHub, Vercel automatically deploys
   - Every commit to `main` branch triggers a production deployment
   - Preview deployments for other branches

---

## Making Updates to Your Site

### Quick Updates (Content Changes)

**Step 1: Edit your files locally**
```bash
cd /Users/driftcafe/Desktop/Antigravity-repo/driftcafe.com
```

**Step 2: Make your changes**
- Edit project content in `src/data/projects.ts`
- Update About page in `src/app/about/page.tsx`
- Modify home page in `src/app/page.tsx`
- Add images to `public/` folder

**Step 3: Test locally**
```bash
npm run dev
```
Visit `http://localhost:3000` to preview changes

**Step 4: Commit and push to GitHub**
```bash
git add .
git commit -m "Update project content"
git push
```

**Step 5: Wait for deployment**
- Vercel automatically detects the push
- Builds and deploys in ~2-3 minutes
- Check https://vercel.com/driftcafe-2331s-projects for deployment status
- Your site at driftcafe.com will update automatically

---

## Common Tasks

### Adding a New Project

1. Add images to `public/` folder (e.g., `public/new-project-hero.jpg`)
2. Edit `src/data/projects.ts`
3. Add a new project object to the `projects` array:

```typescript
{
    title: "Project Name",
    description: "Short description for card",
    category: "Category",
    company: "Company Name",
    timeline: "Timeline",
    slug: "project-slug",
    role: "Your Role",
    team: "Team Info",
    outcome: "Outcome",
    image: "/project-hero.jpg",
    content: `
        <h3>Section Title</h3>
        <p>Content here...</p>
        <img src="/project-image.jpg" alt="Description" style="width: 100%; height: auto; border-radius: 8px;" />
    `
}
```

4. Commit and push (see steps above)

### Updating the About Page

1. Edit `src/app/about/page.tsx`
2. Modify the text in the `<p>` tags
3. Update images in `public/` if needed
4. Commit and push

### Changing Styles

1. Global styles: Edit `src/app/globals.css`
2. Component-specific: Edit inline styles in component files
3. Test locally with `npm run dev`
4. Commit and push

---

## Email Setup

### Current Configuration
- **Incoming**: `*@driftcafe.com` (catch-all) → forwards to `driftcafe@gmail.com`
- **Outgoing**: Use Gmail's "Send mail as" feature (see below)
- **Service**: ImprovMX (free email forwarding)

### How Email Forwarding Works

**ImprovMX Dashboard**: https://improvmx.com

Your domain is set up with a catch-all forwarding rule, which means:
- `josh@driftcafe.com` → `driftcafe@gmail.com`
- `hello@driftcafe.com` → `driftcafe@gmail.com`
- `anything@driftcafe.com` → `driftcafe@gmail.com`

**To add specific aliases:**
1. Go to ImprovMX dashboard
2. Click on `driftcafe.com`
3. Go to "Aliases" tab
4. Add specific email addresses if you want different forwarding rules

**DNS Records (already configured in Vercel):**
- MX: Priority 10 → `mx1.improvmx.com`
- MX: Priority 20 → `mx2.improvmx.com`
- TXT: `v=spf1 include:_spf.mx.cloudflare.net include:spf.improvmx.com ~all`

### Setting Up "Send As" in Gmail

1. Open Gmail settings (gear icon → See all settings)
2. Go to **Accounts and Import** tab
3. Under "Send mail as", click **Add another email address**
4. Enter:
   - Name: `Josh Campbell`
   - Email: `josh@driftcafe.com`
5. Choose "Treat as an alias" (checked)
6. Click **Next Step**
7. For SMTP server, use Gmail's SMTP:
   - SMTP Server: `smtp.gmail.com`
   - Port: `587`
   - Username: Your Gmail address
   - Password: Use an App Password (not your regular password)
8. Verify the email address via the confirmation link

### Creating a Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification (if not already enabled)
3. Search for "App passwords"
4. Create a new app password for "Mail"
5. Use this password in the Gmail "Send as" setup

---

## Troubleshooting

### Site Not Updating After Push

1. Check GitHub: Did the commit go through?
   ```bash
   git log -1
   ```
2. Check Vercel dashboard: Is the deployment running?
3. Hard refresh your browser: `Cmd + Shift + R`

### Email Not Working

1. Check ImprovMX dashboard → Logs tab to see if emails are being received
2. Verify DNS records are correct in Vercel (MX and TXT)
3. Check Gmail spam folder - forwarded emails often land there initially
4. Mark forwarded emails as "Not spam" to train Gmail
5. Check ImprovMX status page for any service issues

### DNS Changes Not Taking Effect

- DNS propagation can take up to 48 hours (usually 5-60 minutes)
- Check DNS propagation: https://dnschecker.org
- Clear your browser cache

---

## Important URLs

- **Live Site**: https://driftcafe.com
- **Vercel Dashboard**: https://vercel.com/driftcafe-2331s-projects
- **GitHub Repo**: https://github.com/driftcafe/driftcafe.com
- **ImprovMX Dashboard**: https://improvmx.com
- **Porkbun Dashboard**: https://porkbun.com

---

## Service Costs

- **Porkbun**: Domain registration (~$10-15/year)
- **Vercel**: Free (personal plan)
- **ImprovMX**: Free (email forwarding)
- **GitHub**: Free (public repository)
- **Total**: ~$10-15/year (just the domain)

---

## Backup & Recovery

### Backing Up Your Site

Your site is already backed up in multiple places:
- **GitHub**: Full code history
- **Vercel**: Deployment history (can rollback)
- **Local**: Your computer has the latest code

### Rolling Back a Deployment

1. Go to Vercel dashboard
2. Click on your project
3. Go to "Deployments"
4. Find the previous working deployment
5. Click "..." → "Promote to Production"

### Recovering from Mistakes

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# View commit history
git log

# Revert to specific commit
git revert <commit-hash>
```

---

## Development Workflow

### Local Development

```bash
# Start dev server
npm run dev

# Build for production (test)
npm run build

# Run production build locally
npm start
```

### Branch Strategy

- `main` branch = Production (auto-deploys to driftcafe.com)
- Create feature branches for major changes:
  ```bash
  git checkout -b feature/new-design
  # Make changes
  git push origin feature/new-design
  ```
- Vercel creates preview deployments for all branches

---

## Contact & Support

- **Vercel Support**: https://vercel.com/support
- **Cloudflare Support**: https://dash.cloudflare.com/?to=/:account/support
- **Next.js Docs**: https://nextjs.org/docs

---

*Last updated: January 16, 2026*

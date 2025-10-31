# Deploying to Vercel + Custom Domain

Vercel is actually the **best choice** for Next.js projects (Vercel created Next.js!). This guide covers deployment and custom domain setup.

## 🚀 Deploy to Vercel (3 Options)

### Option 1: Deploy from GitHub (Recommended - Auto-deploys on push)

This is the easiest and most powerful option.

#### Step 1: Push to GitHub First
```bash
# If you haven't already
git commit -m "Initial commit: EveryPasswordSucks password checker"
git remote add origin https://github.com/YOUR_USERNAME/everypasswordsucks.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Click "New Project"
5. **Import your repository**:
   - Find "everypasswordsucks" in the list
   - Click "Import"

#### Step 3: Configure Build Settings
Vercel will auto-detect Next.js. You'll see:

```
Framework Preset: Next.js
Build Command: next build
Output Directory: .next
Install Command: npm install
```

✅ **Leave these as default** - they're already correct!

#### Step 4: Add Environment Variables (Optional but Recommended)
Click "Environment Variables" and add:

```
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-XXXXXXXXXX  (your Google Analytics ID)
```

Click "Add" for each variable.

#### Step 5: Deploy!
Click **"Deploy"**

⏱️ Deployment takes ~2 minutes. You'll get a URL like:
```
https://everypasswordsucks.vercel.app
```

🎉 **Your site is live!**

---

### Option 2: Deploy with Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Follow prompts:
# Set up and deploy? Yes
# Which scope? (your account)
# Link to existing project? No
# Project name? everypasswordsucks
# Directory? ./
# Override settings? No

# For production deployment
vercel --prod
```

---

### Option 3: Drag & Drop (Quick Test)

For a quick test without GitHub:

1. Build the project:
```bash
npm run build
```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag the **entire project folder** into the upload area
4. Click "Deploy"

⚠️ **Note**: This won't have auto-deployments. Use Option 1 for production.

---

## 🌐 Add Custom Domain

### Step 1: Purchase Domain

Buy from:
- **Namecheap** (~$12/year) - https://namecheap.com
- **Google Domains** (~$12/year) - https://domains.google
- **Cloudflare** (~$10/year) - https://cloudflare.com
- **GoDaddy** (~$15/year) - https://godaddy.com

Recommended domain: `everypasswordsucks.com`

### Step 2: Add Domain in Vercel

1. Go to your project dashboard on Vercel
2. Click **"Settings"** tab
3. Click **"Domains"** in sidebar
4. Enter your domain: `everypasswordsucks.com`
5. Click **"Add"**

Vercel will show you DNS records to add.

### Step 3: Configure DNS at Your Domain Registrar

#### Option A: Use Vercel Nameservers (Easiest - Recommended)

Vercel will give you nameservers like:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**At your domain registrar:**
1. Find "Nameservers" or "DNS Settings"
2. Change nameservers to Vercel's nameservers
3. Save changes

✅ **Vercel handles everything automatically**

Wait: 24-48 hours for DNS propagation (usually ~1 hour)

#### Option B: Use CNAME Records (If you want to keep your registrar's nameservers)

**At your domain registrar:**

1. Add **A Record**:
```
Type: A
Name: @
Value: 76.76.21.21
```

2. Add **CNAME Record** for www:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

3. Save changes

Wait: 24-48 hours for DNS propagation

### Step 4: Verify Domain

Back in Vercel:
1. Click "Refresh" next to your domain
2. Status will show "Valid Configuration" when DNS is ready
3. Vercel automatically provisions SSL certificate (free)

🎉 Your site is now at `everypasswordsucks.com`!

---

## 🔒 SSL Certificate (HTTPS)

✅ **Automatic** - Vercel provisions free SSL via Let's Encrypt
- No configuration needed
- Renews automatically
- Works for custom domains

Your site will be `https://everypasswordsucks.com` (secure)

---

## 📊 Monitor Traffic with Analytics

### 1. Google Analytics (Recommended - Most Detailed)

#### Setup Steps:

**A. Create Google Analytics Account**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Account name: "EveryPasswordSucks"
4. Property name: "EveryPasswordSucks Website"
5. Select "Web"
6. Add website URL: `https://everypasswordsucks.com`
7. Click "Create"

**B. Get Measurement ID**
After creation, you'll see:
```
Measurement ID: G-XXXXXXXXXX
```

Copy this ID!

**C. Add to Vercel**
1. Go to Vercel project
2. Settings → Environment Variables
3. Add:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
4. Click "Add"
5. Redeploy (Vercel does this automatically)

**D. Verify It's Working**
1. Visit your live site
2. In Google Analytics, go to "Realtime" view
3. You should see yourself as active user!

#### What You Can Track:

**User Metrics:**
- Total visitors (daily, weekly, monthly)
- Unique visitors
- Page views
- Average session duration
- Bounce rate
- Geographic location (country, city)
- Device type (mobile, desktop, tablet)
- Browser and OS

**Engagement:**
- Most popular pages
- Entry/exit pages
- User flow through site

**Custom Events** (Already implemented in your code):
- `password_tested` - When user tests a password
  - See how many passwords are tested daily
- `affiliate_click` - When someone clicks affiliate links
  - Track which password manager is most popular
  - Calculate click-through rate
- `share_click` - When users share on social media
  - See which platform is most popular

**How to View:**
- **Real-time**: See live visitors right now
- **Reports** → **Engagement** → **Events**: See custom events
- **Reports** → **Acquisition**: See traffic sources
- **Reports** → **User attributes**: See demographics

---

### 2. Vercel Analytics (Built-in - Quick Overview)

Vercel includes basic analytics for free!

**Enable:**
1. Go to your Vercel project
2. Click **"Analytics"** tab
3. Click **"Enable Analytics"**

**What You Get (Free):**
- ✅ Page views
- ✅ Top pages
- ✅ Top referrers (where traffic comes from)
- ✅ Unique visitors
- ✅ Countries
- ✅ Devices

**View:**
- Vercel Dashboard → Your Project → Analytics tab

**Limitations (Free Tier):**
- Basic metrics only
- No custom events
- 7-day data retention

**Upgrade ($20/month):**
- 30-day retention
- Web Vitals (performance)
- Advanced filtering

💡 **Recommendation**: Use both!
- **Vercel Analytics**: Quick daily check
- **Google Analytics**: Detailed analysis and custom events

---

### 3. Plausible Analytics (Privacy-Friendly Alternative)

If you want a simpler, privacy-focused option:

**Setup:**
1. Go to [plausible.io](https://plausible.io)
2. Start free trial (30 days)
3. Add your domain
4. Add tracking code to `pages/_document.js`
5. Cost: $9/month after trial

**Benefits:**
- No cookie banner needed
- GDPR compliant
- Simple, clean dashboard
- Lightweight script

---

## 📈 Traffic Monitoring Dashboard Setup

### Daily Monitoring Checklist:

**Morning Check (5 minutes):**
1. Open Vercel Analytics → Check yesterday's traffic
2. Open Google Analytics → Real-time view
3. Check total password tests (Events → password_tested)
4. Check affiliate clicks (Events → affiliate_click)

**Weekly Review (15 minutes):**
1. Google Analytics → Acquisition → Traffic sources
2. Check top performing pages
3. Review conversion rate (tests → affiliate clicks)
4. Check geographic distribution
5. Review share rate

**Monthly Analysis (30 minutes):**
1. Compare traffic growth month-over-month
2. Calculate revenue (affiliate clicks × conversion × commission)
3. Identify best traffic sources
4. Optimize based on data

### Key Metrics to Track:

| Metric | Where to Find | Target (Month 1) |
|--------|---------------|------------------|
| Daily Visitors | GA → Realtime | 100+ |
| Password Tests | GA → Events | 500+ |
| Affiliate CTR | (Clicks/Tests) × 100 | 5-10% |
| Bounce Rate | GA → Engagement | < 60% |
| Avg. Session | GA → Engagement | > 1 minute |
| Share Rate | (Shares/Tests) × 100 | 2-5% |

---

## 🔧 Troubleshooting

### Site Not Loading After Deployment
**Check:**
1. Build logs in Vercel (should show "Build successful")
2. Function logs (Settings → Functions)
3. Try clearing browser cache (Cmd+Shift+R or Ctrl+Shift+R)

**Fix:**
```bash
# Test build locally first
npm run build
# If it works locally, redeploy
vercel --prod
```

### Custom Domain Not Working
**Check:**
1. DNS propagation status: https://dnschecker.org
2. Vercel dashboard → Domains → Status should be "Valid"
3. Wait 24-48 hours (DNS can be slow)

**Fix:**
- Verify nameservers/DNS records are correct
- Use Vercel nameservers (Option A) - most reliable

### Analytics Not Tracking
**Check:**
1. Open browser console (F12) on your live site
2. Look for errors mentioning "gtag" or "analytics"
3. Verify environment variable is set in Vercel
4. Check ad blockers aren't blocking (test in incognito)

**Fix:**
```bash
# Redeploy to pick up environment variables
# In Vercel dashboard: Deployments → ... menu → Redeploy
```

### Environment Variables Not Working
**Common Issues:**
- Variable name must start with `NEXT_PUBLIC_` to be visible in browser
- Need to redeploy after adding variables
- Clear browser cache after redeployment

---

## 🚀 Advanced: Automatic Deployments

Once connected to GitHub, Vercel automatically:
- ✅ Deploys every push to `main` branch (production)
- ✅ Creates preview deployments for pull requests
- ✅ Shows build status in GitHub
- ✅ Runs builds in ~2 minutes

**Workflow:**
```bash
# Make changes locally
# ... edit files ...

# Commit and push
git add .
git commit -m "Update affiliate links"
git push

# Vercel automatically deploys!
# Check: Vercel dashboard for deployment status
# Visit: your-site.com to see changes live
```

---

## 💰 Cost Summary

| Service | Cost | What You Get |
|---------|------|--------------|
| **Domain** | $10-15/year | Your custom URL |
| **Vercel Hosting** | $0/month | Free tier: 100GB bandwidth, SSL, CDN |
| **Google Analytics** | $0/month | Unlimited traffic tracking |
| **Vercel Analytics** | $0/month | Basic metrics (or $20/mo for advanced) |
| **Total** | **$10-15/year** | 🎉 Everything you need! |

---

## 📊 Revenue Tracking Spreadsheet

Create a Google Sheet to track revenue:

| Date | Traffic | Tests | Affiliate Clicks | CTR | Est. Conversions | Est. Revenue |
|------|---------|-------|------------------|-----|------------------|--------------|
| Day 1 | 100 | 250 | 15 | 6% | 0.3 | $1.20 |
| Day 2 | 150 | 400 | 28 | 7% | 0.8 | $3.20 |
| ... | | | | | | |

**Formula for Est. Revenue:**
```
Affiliate Clicks × Conversion Rate (2-3%) × Avg Commission ($4)
```

---

## 🎯 Next Steps After Deployment

**Day 1:**
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] Enable Google Analytics
- [ ] Test all features work live

**Day 2-7:**
- [ ] Submit to Google Search Console
- [ ] Post to Reddit (r/InternetIsBeautiful)
- [ ] Share on Twitter with #infosec #cybersecurity
- [ ] Post to Hacker News (Show HN)

**Day 8-30:**
- [ ] Check analytics daily
- [ ] Optimize based on data
- [ ] Apply for affiliate programs
- [ ] Add affiliate tracking parameters

---

## 🆘 Need Help?

- **Vercel Support**: https://vercel.com/support
- **Vercel Docs**: https://vercel.com/docs
- **DNS Issues**: https://dnschecker.org
- **Analytics Issues**: Check browser console (F12)

---

**You're ready to deploy and start tracking! 🚀**

Next: Read DEPLOYMENT.md for marketing strategies to drive traffic.

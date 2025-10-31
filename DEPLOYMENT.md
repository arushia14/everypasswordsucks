# Deployment Guide

Step-by-step guide to deploy EveryPasswordSucks.com to production.

## Pre-Deployment Checklist

### 1. Set Up Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Create `.env.local` file:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Configure Affiliate Links

Edit `/pages/index.js` and update affiliate links with your IDs:

```javascript
<AffiliateCard
  name="1Password"
  ctaLink="https://1password.com"
  affiliateTag="?ref=YOUR_AFFILIATE_ID"
/>
```

Repeat for LastPass and Dashlane.

### 3. Update Domain References

Search and replace `everypasswordsucks.com` with your actual domain if different:
- `/pages/index.js` (Open Graph URLs)
- `/public/robots.txt` (Sitemap URL)

### 4. Test Locally

```bash
# Test development build
npm run dev
# Visit http://localhost:3000

# Test production build
npm run build
npm run export
# Check the /out folder
```

## Deploy to Netlify (Recommended)

### Option A: Drag and Drop (Fastest)

1. **Build the site**:
```bash
npm run deploy
```

2. **Deploy**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag the `out/` folder into the upload area
   - Wait for deployment to complete

3. **Configure**:
   - Site settings → Change site name
   - Domain settings → Add custom domain
   - Environment variables → Add `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Option B: GitHub Integration (Automated)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/everypasswordsucks.git
git push -u origin main
```

2. **Connect to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize
   - Select your repository

3. **Configure Build Settings**:
   - Build command: `npm run deploy`
   - Publish directory: `out`
   - Click "Deploy site"

4. **Add Environment Variables**:
   - Site settings → Environment variables → Add variable
   - Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
   - Save and redeploy

### Option C: Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login**:
```bash
netlify login
```

3. **Initialize**:
```bash
netlify init
# Follow prompts to create new site or link existing
```

4. **Deploy**:
```bash
npm run deploy
netlify deploy --prod --dir=out
```

## Custom Domain Setup

### Purchase Domain

Buy domain from:
- Namecheap (~$12/year)
- Google Domains (~$12/year)
- Cloudflare (~$10/year)

### Configure DNS

In Netlify:
1. Go to Domain settings → Add custom domain
2. Enter: `everypasswordsucks.com`
3. Netlify provides DNS records

At your domain registrar:
1. Find DNS settings
2. Add A record:
   - Type: `A`
   - Name: `@`
   - Value: (Netlify's IP from dashboard)
3. Add CNAME record:
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-site.netlify.app`

Wait 24-48 hours for DNS propagation.

### Enable HTTPS

Netlify automatically provisions SSL certificate (free via Let's Encrypt).
No action needed - just wait a few minutes after DNS is configured.

## Post-Deployment Tasks

### 1. Verify Deployment

- [ ] Visit your live site
- [ ] Test password checker functionality
- [ ] Check all pages (About, Privacy)
- [ ] Test on mobile device
- [ ] Click affiliate links (verify tracking)
- [ ] Test social share buttons
- [ ] Check Google Analytics (Real-time view)

### 2. SEO Setup

**Google Search Console**:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership (use DNS method)
4. Submit sitemap (if you added one)

**Bing Webmaster Tools**:
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Verify ownership
4. Submit sitemap

### 3. Social Media Preview

Test how your site looks when shared:
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)

Paste your URL and check the preview. Fix any issues with Open Graph tags.

### 4. Performance Check

Test your site performance:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

Target: 90+ score on all metrics.

## Marketing Launch

### Week 1: Initial Push

**Day 1**:
- [ ] Post to Reddit: r/InternetIsBeautiful
- [ ] Tweet with hashtags: #cybersecurity #infosec #passwordsecurity
- [ ] Share on personal LinkedIn

**Day 2**:
- [ ] Post to Hacker News: "Show HN: EveryPasswordSucks - Real-time password vulnerability checker"
- [ ] Post to Reddit: r/cybersecurity, r/netsec

**Day 3**:
- [ ] Submit to ProductHunt
- [ ] Submit to BetaList
- [ ] Share in relevant Slack/Discord communities

**Day 4-7**:
- [ ] Monitor analytics
- [ ] Respond to comments/feedback
- [ ] Share user testimonials

### Ongoing Marketing

**Weekly**:
- Comment on password-related articles with tool link
- Share interesting password statistics
- Engage with cybersecurity community

**Monthly**:
- Create blog content (host on subdomain/Medium)
- Update with new features based on feedback
- Reach out to security bloggers/YouTubers

## Monitoring & Analytics

### Track These KPIs

Daily:
- Total tests
- Affiliate click-through rate (CTR)
- Bounce rate
- Average session duration

Weekly:
- Affiliate conversions
- Revenue per 1000 visitors (RPM)
- Top traffic sources
- Share rate

Monthly:
- Total revenue
- Growth rate
- Best performing affiliates
- SEO ranking improvements

### Google Analytics Events

Check these in GA4:
- `password_tested` - Total password tests
- `affiliate_click` - Affiliate link clicks (by provider)
- `share_click` - Social shares (by platform)

### Revenue Tracking

Create spreadsheet to track:
- Date
- Traffic (tests/day)
- Affiliate clicks
- Conversions
- Revenue
- Notes (what worked, what didn't)

## Troubleshooting

### Site not loading
- Check Netlify deploy logs for errors
- Verify DNS records are correct
- Clear browser cache

### Analytics not tracking
- Verify GA_MEASUREMENT_ID is set in Netlify environment variables
- Check browser console for errors
- Test in incognito mode (ad blockers can block GA)

### Build fails
- Check Node.js version (18+ required)
- Delete `node_modules` and `.next`, run `npm install` again
- Check Netlify build logs for specific error

### CSS not loading
- Verify `next.config.js` has correct output settings
- Check file paths are correct
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

## Scaling Up

### If traffic grows significantly:

1. **Upgrade Netlify plan** (if needed)
   - Free tier: 100GB bandwidth/month
   - Pro tier: 400GB bandwidth/month ($19/mo)

2. **Add CDN optimization**
   - Netlify includes CDN by default
   - Consider Cloudflare for additional layer

3. **Optimize assets**
   - Compress images (if you add any)
   - Minify CSS/JS (automatic with Next.js)
   - Enable Brotli compression (automatic on Netlify)

4. **Add caching headers**
   - Edit `netlify.toml` to add cache rules

## Backup & Maintenance

### Regular Tasks

**Weekly**:
- Check Google Analytics for issues
- Monitor Netlify status
- Test affiliate links still work

**Monthly**:
- Update dependencies: `npm update`
- Review and respond to user feedback
- Check for security updates

**Quarterly**:
- Review and optimize affiliate links
- Update content (stats, etc.)
- A/B test different CTAs

### Backup

Since this is a static site with no database:
- Code is in Git (GitHub)
- Netlify keeps deployment history
- Environment variables documented in `.env.example`

To backup: Just push to GitHub regularly.

## Cost Summary

| Item | Cost | Frequency |
|------|------|-----------|
| Domain | $12 | /year |
| Netlify | $0 | Free tier |
| **Total** | **$12** | **/year** |

## Support

Need help? Check:
- Next.js docs: https://nextjs.org/docs
- Netlify docs: https://docs.netlify.com
- Create GitHub issue for bugs

---

**Congratulations! Your site is live! 🎉**

Now focus on marketing and iterating based on user feedback. Track your metrics and optimize for conversions.

Target: $500-2000/month in 30-90 days with consistent marketing effort.

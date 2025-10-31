# EveryPasswordSucks.com

A viral, single-page password security tool that demonstrates password vulnerabilities in real-time while promoting password manager adoption through affiliate marketing.

![Project Status](https://img.shields.io/badge/status-ready%20to%20deploy-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Features

- **Real-time Password Analysis** - Uses zxcvbn library for accurate password strength testing
- **Animated Attack Simulation** - 6-second visualization of 4 attack vectors (brute force, dictionary, patterns, breaches)
- **Privacy-First** - All analysis happens client-side; passwords never leave the browser
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **SEO Optimized** - Schema markup, meta tags, and social sharing cards
- **Affiliate Integration** - Password manager recommendations with tracking
- **Social Sharing** - Built-in share buttons for viral growth
- **Dark Cybersecurity Theme** - Professional, modern design

## 📸 Preview

The application is running locally at: **http://localhost:3000**

## 🛠 Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: JavaScript (React)
- **Styling**: CSS Modules + CSS Variables
- **Password Analysis**: zxcvbn
- **Analytics**: Google Analytics 4
- **Hosting**: Netlify (static export)
- **Deployment**: Zero-config static export

## 📁 Project Structure

```
everypasswordsucks/
├── components/           # React components
│   ├── Header.js
│   ├── Footer.js
│   ├── PasswordInput.js
│   ├── AttackPanel.js
│   ├── ResultsCard.js
│   ├── AffiliateCard.js
│   ├── ShareButtons.js
│   └── GoogleAnalytics.js
├── pages/               # Next.js pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js         # Main password checker
│   ├── about.js
│   └── privacy.js
├── lib/                 # Utility libraries
│   └── passwordAnalyzer.js
├── styles/              # CSS files
│   ├── globals.css
│   ├── Home.module.css
│   └── Page.module.css
├── public/              # Static assets
└── next.config.js       # Next.js configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Dependencies are already installed**, but if needed:
```bash
npm install
```

2. **Configure Google Analytics (Optional)**:
```bash
# Copy the example env file
cp .env.example .env.local

# Edit .env.local and add your Google Analytics ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser** to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Deploy to Netlify

1. **Build the static export**:
```bash
npm run deploy
```
This creates an `out/` directory with static HTML/CSS/JS.

2. **Deploy to Netlify**:

**Option A: Netlify CLI** (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=out
```

**Option B: Netlify Dashboard**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag the `out/` folder
4. Done!

**Option C: GitHub Integration**
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run deploy`
   - Publish directory: `out`
4. Add environment variables in Netlify dashboard

3. **Configure Custom Domain**:
- In Netlify dashboard: Site settings → Domain management
- Add custom domain: `everypasswordsucks.com`
- Update DNS records at your registrar

### Environment Variables (Netlify)

Add these in **Site settings → Environment variables**:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📊 Google Analytics Setup

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property
3. Copy your Measurement ID (format: G-XXXXXXXXXX)
4. Add to `.env.local` or Netlify environment variables

### Tracked Events

The app automatically tracks:
- `password_tested` - When a user tests a password
- `affiliate_click` - When affiliate links are clicked
- `share_click` - When social share buttons are clicked

View these in Google Analytics under **Events**.

## 💰 Affiliate Marketing

### Setup Affiliate Links

Edit `/pages/index.js` and update the `AffiliateCard` components with your affiliate links:

```javascript
<AffiliateCard
  name="1Password"
  ctaLink="https://1password.com"
  affiliateTag="?ref=YOUR_AFFILIATE_ID"  // Add your affiliate tag
/>
```

### Affiliate Programs

Apply to these password manager affiliate programs:
- **1Password**: https://1password.com/affiliates/
- **LastPass**: https://lastpass.com/affiliates/
- **Dashlane**: https://www.dashlane.com/partnerships/affiliate

## 🎨 Customization

### Colors

Edit `/styles/globals.css`:

```css
:root {
  --bg-primary: #0A0E27;
  --accent-primary: #00D9FF;
  --danger: #FF3366;
  /* ... etc */
}
```

### Typography

Fonts are loaded from Google Fonts (Space Grotesk, Inter, Fira Code). Change in `/styles/globals.css`.

### Animation Speed

Edit `/pages/index.js` line ~96:
```javascript
setTimeout(() => {
  // Change 6000 to adjust total animation time (in milliseconds)
}, 6000)
```

## 🔒 Privacy & Security

- **Client-side only**: All password analysis happens in the browser using JavaScript
- **No server**: Passwords are never sent to any server
- **HTTPS**: Enforced automatically by Netlify
- **No tracking**: Analytics only track interactions, never password content

## 📈 SEO Checklist

- [x] Meta tags (title, description)
- [x] Open Graph tags (social sharing)
- [x] Twitter Card tags
- [x] Schema.org JSON-LD markup
- [x] Semantic HTML
- [x] Mobile-responsive
- [ ] Submit sitemap to Google Search Console (after deployment)
- [ ] Register with Bing Webmaster Tools

### After Deployment

1. **Submit Sitemap**:
   - Create account at [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `everypasswordsucks.com`
   - Submit sitemap: `https://everypasswordsucks.com/sitemap.xml`

2. **Generate Sitemap** (optional):
```bash
npm install next-sitemap
```
Add configuration to generate sitemap automatically.

## 🎯 Marketing Strategy

### Launch Checklist

- [ ] Post to r/InternetIsBeautiful
- [ ] Post to r/cybersecurity
- [ ] Share on Twitter with #infosec #cybersecurity
- [ ] Post to Hacker News (Show HN)
- [ ] Share on LinkedIn
- [ ] Submit to ProductHunt
- [ ] Submit to BetaList

### Content Ideas

- Blog post: "We tested 10,000 passwords - here's what we learned"
- Infographic: Most common password patterns
- Twitter thread: Password security myths
- LinkedIn article: Why every business needs password managers

## 📝 License

MIT License - Feel free to use for your own projects!

## 🤝 Contributing

This is a personal project, but suggestions and bug reports are welcome!

## 📧 Support

Questions or issues? Create an issue on GitHub.

## 🎉 Acknowledgments

- **zxcvbn** by Dropbox - Password strength estimation
- **Next.js** - React framework
- **Netlify** - Hosting platform

---

**Built with 💀 for security awareness**

**Target Revenue**: $500-2000/month passive income
**Total Cost**: $12/year (domain only)
**Build Time**: ~18 hours

Let's make the internet more secure, one password at a time! 🔐

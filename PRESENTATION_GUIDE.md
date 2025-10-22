# 📱 Class Presentation Guide - QR Code Setup

## 🎯 Goal
Get your StreamHub app accessible via QR code in class within 10 minutes!

## ⚡ Quick Deploy (For Class Tomorrow)

### Option 1: Vercel (Fastest - 5 minutes)

1. **Deploy Now**:
   ```bash
   cd C:\Users\Vaill\OneDrive\Documents\stream-hub
   npx vercel --prod
   ```

2. **Get Your URL**:
   - Copy the URL Vercel gives you (e.g., `streamhub-xyz.vercel.app`)

3. **Create QR Code**:
   - Go to: https://qr-code-generator.com
   - Paste your Vercel URL
   - Click "Create QR Code"
   - Download and print!

### Option 2: Deploy via Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Ready for class"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Vercel Dashboard**:
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Import your repo
   - Click "Deploy"
   - Wait 2 minutes ⏱️

3. **Get QR Code**:
   - Vercel gives you URL
   - Use QR generator
   - Print for class!

## 📊 Class Presentation Flow

### 1. Introduction (1 min)
"I built StreamHub - it combines streaming discovery with subscription tracking. Scan the QR code to try it!"

### 2. Demo Features (3 min)

**Show Discover Tab:**
- "Browse trending movies and shows"
- "See which service has each title"
- "Add services you're interested in"

**Show Subscriptions Tab:**
- "Track all your streaming costs"
- "See monthly spending at a glance"  
- "Direct links to manage or cancel"

### 3. Let Class Explore (5 min)
- Show QR code on projector
- Students scan with phones
- Walk around and help
- Answer questions

## 🎤 Talking Points

### Technical Highlights:
- "Built with Next.js and TypeScript"
- "Real movie data from TMDB API"
- "Fully responsive - works on any device"
- "Deployed on Vercel for instant access"

### Unique Features:
- "Combines two apps in one"
- "Service badges show streaming availability"
- "Actual links to Netflix, Hulu account pages"
- "Local storage - no backend needed"

## 📱 QR Code Best Practices

### Size:
- **Print**: At least 4x4 inches
- **Screen**: Large enough to scan from 10 feet away

### Placement:
- **Option 1**: Projected on screen
- **Option 2**: Printed handout
- **Option 3**: Both!

### Test Before Class:
```bash
# Run local test
npm run dev

# Test Vercel deployment
# Visit your .vercel.app URL on phone
```

## 🔥 Impressive Stats to Mention

- "21+ streaming services supported"
- "Real-time movie data from 500,000+ titles"
- "Accessible from any device"
- "Zero setup for users - just scan"

## 🎬 Demo Script

**Opening**:
"Who here has too many streaming subscriptions? [raise hands] StreamHub solves that. Let me show you."

**Feature 1 - Discovery**:
"See what's trending across all services. Notice the badges showing where each title streams."

**Feature 2 - Subscriptions**:
"Now flip to subscriptions. Add your services, track spending, get direct management links."

**Closing**:
"Scan the QR code and try it yourself. Works on your phone right now."

## ⚠️ Troubleshooting

### QR Code Won't Scan?
- Make sure URL is correct
- Increase QR code size
- Use high-quality print/screen

### Website Won't Load?
- Check Vercel deployment status
- Verify URL is correct
- Test on your phone first

### TMDB API Not Working?
- App includes demo key
- Limited to 50 requests/day
- Upgrade key if needed

## ✅ Pre-Class Checklist

- [ ] App deployed to Vercel
- [ ] QR code generated
- [ ] QR code tested (scans correctly)
- [ ] Website loads on phone
- [ ] Demo flow practiced
- [ ] Backup URL written down
- [ ] Screenshots ready (backup plan)

## 🌟 Bonus Points

### Add Analytics:
- Show how many classmates visited
- Vercel Analytics shows live stats

### Custom Domain:
- Use a custom URL for extra credit
- More professional than .vercel.app

### Share After Class:
- Keep URL live for portfolio
- Add to resume/LinkedIn
- Let classmates keep using it!

---

**You've got this! Your app will impress the class.** 🎓🚀

**Pro tip**: Have the QR code ready BEFORE class starts. Test it during break!


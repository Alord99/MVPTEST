# 🎬 StreamHub - Integrated Streaming Discovery & Subscription Tracker

A unified platform combining streaming content discovery with subscription management - perfect for class presentations with QR code access!

## ✨ Features

### 🎥 Streaming Discovery
- **Browse trending movies & TV shows** from TMDB API
- **Beautiful content cards** with posters and ratings
- **Service badges** showing where content is available
- **Multiple categories**: Trending, Popular, Critically Acclaimed
- **Discover new services** with one-click activation

### 💰 Subscription Tracker
- **Track all your streaming subscriptions** in one place
- **See monthly/yearly costs** at a glance
- **Direct management links** to Netflix, Hulu, Disney+, etc.
- **Add unlimited subscriptions** with custom details
- **Visual analytics** of spending

## 🚀 Quick Start

### Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit: http://localhost:3000

### Deploy to Vercel (QR Code Access for Class)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "StreamHub ready for deployment"
   git push
   ```

2. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Get your live URL (e.g., `streamhub.vercel.app`)

3. **Create QR Code**:
   - Go to https://qr-code-generator.com
   - Paste your Vercel URL
   - Download QR code
   - Share in class! 📱

## 🎯 How to Use

### Discover Tab
1. Browse trending content
2. Click content cards to see details
3. Service badges show where it's streaming
4. Add services via "Discover More Services" section

### My Subscriptions Tab
1. Click "Add Subscription"
2. Select service from dropdown
3. Enter amount and billing cycle
4. See monthly spending analytics
5. Click "Manage" or "Cancel" buttons for direct links

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **TMDB API** - Movie/TV data
- **Vercel** - Deployment (QR code hosting)

## 📱 Mobile Responsive

Works perfectly on all devices - phones, tablets, desktops!

## 🎨 Design

- Pure black background (#000000)
- Teal accent color (#7DD3C0)
- Service-specific brand colors
- Card-based UI with hover effects
- Smooth horizontal scrolling

## 🔒 Data Storage

- **Local storage** for subscriptions (persists in browser)
- **No backend required** for demo
- **Privacy-first** - data stays on your device

## 🌟 Perfect for Class Presentations

- **QR code access** - classmates scan to view
- **Live demo** - works immediately
- **Interactive** - everyone can explore
- **Professional** - production-ready design

## 📊 Features Overview

| Feature | Discover | Subscriptions |
|---------|----------|---------------|
| Content Cards | ✅ | - |
| Service Badges | ✅ | ✅ |
| Analytics | ⭐ Ratings | 💰 Spending |
| Management | Add Services | Manage/Cancel Links |
| Data Source | TMDB API | Local Storage |

## 🚀 Deployment Status

- **Local**: http://localhost:3000
- **Production**: Deploy to get your QR code URL!

---

**Built for class presentation - combining streaming discovery with subscription management!** 🎓✨

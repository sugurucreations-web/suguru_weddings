# Suguru Weddings - Professional Photography Website

Professional wedding photography and videography website built with React, Vite, and Tailwind CSS.

## 🚀 Features

✅ Responsive design for all devices
✅ Auto-rotating hero carousel
✅ Filterable portfolio gallery
✅ Contact form with Formspree integration
✅ WhatsApp floating button
✅ Google Analytics tracking
✅ Facebook Pixel integration
✅ Newsletter subscription
✅ JSON-based content management
✅ SEO optimized

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/suguru-weddings.git
cd suguru-weddings
```

### 2. Install dependencies
```bash
npm install
```

### 3. Update Configuration

#### A. Update content.json
Edit `public/images/content.json` to update:
- Your images (replace Unsplash URLs)
- Services and pricing
- Contact information
- Social media links

#### B. Update index.html
Replace these IDs:
- Line 18: Google Analytics `G-XXXXXXXXXX`
- Line 32 & 37: Facebook Pixel `YOUR_PIXEL_ID`

#### C. Update Contact Form
In `src/components/Contact.jsx` line 37, replace:
```javascript
'https://formspree.io/f/YOUR_FORM_ID'
```
Get your form ID from [Formspree.io](https://formspree.io)

#### D. Update Newsletter
In `src/components/Footer.jsx` line 23, replace:
```javascript
'https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID'
```

#### E. Update WhatsApp Number
In `public/images/content.json`, update:
```json
"whatsapp": "919876543210"
```
(Use country code + number, no + or spaces)

### 4. Run Development Server
```bash
npm run dev
```
Open http://localhost:5173

### 5. Build for Production
```bash
npm run build
```

## 🌐 Deploy to Vercel

### Option 1: Via Website
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

### Option 2: Via CLI
```bash
npm i -g vercel
vercel
```

## 🔧 How to Update Content

### Change Images or Text:
1. Edit `public/images/content.json`
2. Push to GitHub
3. Vercel auto-deploys in 30 seconds

### Add Portfolio Images:
```json
{
  "id": 13,
  "url": "YOUR_IMAGE_URL",
  "category": "wedding",
  "title": "Beautiful Ceremony"
}
```

### Update Pricing:
Edit the services section in `content.json`

## 📊 Lead Generation Features

✅ Contact form with detailed fields
✅ WhatsApp instant messaging
✅ Multiple CTA buttons
✅ Newsletter signup
✅ Phone/email click-to-contact
✅ Google Analytics tracking
✅ Facebook Pixel tracking
✅ Event tracking on all buttons

## 💰 Cost Breakdown

| Service | Monthly Cost |
|---------|-------------|
| Vercel Hosting | FREE |
| GitHub | FREE |
| Formspree (50 forms/month) | FREE |
| Google Analytics | FREE |
| Facebook Pixel | FREE |
| Cloudinary (25GB) | FREE |
| **TOTAL** | **₹0/month** |

## 📱 Contact

- **Email:** info@suguruweddings.com
- **Phone:** +91 XXXXX XXXXX
- **Website:** https://suguruweddings.com

## 📄 License

Private - All Rights Reserved

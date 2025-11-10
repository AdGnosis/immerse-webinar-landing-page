# Immerse Education - College Week Challenge Landing Page

## 🚀 Quick Start

This is a complete landing page system with Salesforce Web-to-Lead integration for Immerse Education's webinar registration and College Week Challenge game.

## 📁 File Structure
```
/
├── index.html           # Main landing page
├── thank-you.html       # Thank you page after registration
├── styles.css           # All styling (Blue & White prestige theme)
├── scripts.js           # Form validation, slideshow, tracking
└── assets/              # Images and icons folder
    ├── hero-graduation.jpg
    ├── hero-students.jpg
    ├── hero-lecture.jpg
    ├── icon-admissions.svg
    ├── icon-standout.svg
    ├── icon-mentors.svg
    ├── icon-qa.svg
    ├── icon-planning.svg
    ├── icon-balance.svg
    ├── icon-insights.svg
    ├── game-landing.jpg
    ├── game-profile.jpg
    ├── game-university.jpg
    ├── game-monday.jpg
    ├── game-tuesday.jpg
    ├── game-results.jpg
    ├── logo-cambridge.png
    ├── logo-oxford.png
    ├── logo-yale.png
    ├── logo-harvard.png
    └── logo-unsw.png
```

## ⚙️ Salesforce Configuration

### ✅ Already Configured
- **Org ID:** `00Dd200000SzGqv`
- **Return URL:** Relative path `thank-you.html`
- **Form endpoint:** Salesforce Web-to-Lead

### 🔧 Custom Field Mapping

If you have custom fields in Salesforce, update these field IDs in `index.html`:
```html
Line 99:  name="00N8d00000Q9fXX"  ← Student Age
Line 106: name="00N8d00000Q9fXY"  ← Area of Study
Line 120: name="00N8d00000Q9fXZ"  ← Country Preference
Line 133: name="00N8d00000Q9fXa"  ← Degree Interest
Line 145: name="00N8d00000Q9fXb"  ← Target University
Line 151: name="00N8d00000Q9fXc"  ← Zoom Attending
```

**To find your field IDs:**
1. Go to Salesforce Setup → Object Manager → Lead
2. Find each custom field
3. Copy the Field Name or API Name

## 🎨 Assets Required

All images must be saved in the `assets/` folder with exact filenames:

### Hero Images (3)
- hero-graduation.jpg
- hero-students.jpg
- hero-lecture.jpg

### Benefit Icons (4 SVG)
- icon-admissions.svg
- icon-standout.svg
- icon-mentors.svg
- icon-qa.svg

### Feature Icons (3 SVG)
- icon-planning.svg
- icon-balance.svg
- icon-insights.svg

### Game Screenshots (6)
- game-landing.jpg
- game-profile.jpg
- game-university.jpg
- game-monday.jpg
- game-tuesday.jpg
- game-results.jpg

### University Logos (5)
- logo-cambridge.png
- logo-oxford.png
- logo-yale.png
- logo-harvard.png
- logo-unsw.png

## 🚀 Deployment

### Option 1: GitHub + Vercel (Recommended)

1. **Create GitHub repository**
2. **Upload all files:**
   - index.html, thank-you.html, styles.css, scripts.js
   - Create `assets/` folder with all 21 images
3. **Deploy on Vercel:**
   - Go to vercel.com
   - Sign in with GitHub
   - Import your repository
   - Click Deploy

### Option 2: GitHub Pages

1. Upload all files to GitHub
2. Go to Settings → Pages
3. Select main branch and `/root` folder
4. Your site will be live at: `username.github.io/repo-name`

### Option 3: Netlify

1. Drag and drop your project folder to netlify.com/drop
2. Site goes live instantly
3. Optional: Connect to GitHub for continuous deployment

## ✅ Testing Checklist

Before deploying:

- [ ] Hero slideshow rotates every 5 seconds
- [ ] All form fields validate correctly
- [ ] Age field accepts only 2 digits (10-99)
- [ ] Form submits to Salesforce
- [ ] Thank you page loads after submission
- [ ] Play Game button links to game URL
- [ ] All 21 images load properly
- [ ] Mobile responsive design works
- [ ] All university logos display
- [ ] Footer links work

## 🎨 Customization

### Colors (Blue & White Theme)
- Primary Blue: `#003366`
- Secondary Blue: `#0066cc`
- White: `#ffffff`
- Light Gray: `#f8f9fa`

To change colors, search and replace in `styles.css`.

### Text Content
Edit directly in `index.html`:
- Hero heading (line 19)
- Webinar benefits (lines 31-55)
- Feature descriptions
- Footer text

## 📊 Analytics Setup (Optional)

### Google Analytics
Add to `<head>` of both HTML files:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel
Add to `<head>` of both HTML files:
```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🔧 Troubleshooting

**Form not submitting to Salesforce?**
- Verify Web-to-Lead is enabled in Salesforce
- Check Org ID is correct: `00Dd200000SzGqv`
- Verify custom field IDs match your Salesforce setup

**Images not loading?**
- Check file names match exactly (case-sensitive)
- Ensure all files are in `assets/` folder
- Verify file extensions are correct (.jpg, .png, .svg)

**Thank you page not loading?**
- Ensure `thank-you.html` is in root directory
- Check return URL in form (line 88)

## 📄 Features

✅ **Hero Section** - Auto-rotating slideshow (3 images)
✅ **Webinar Benefits** - 4 key benefits with icons
✅ **Registration Form** - Salesforce Web-to-Lead integration
✅ **Sticky Form** - Stays visible while scrolling
✅ **Game Features** - 3 feature cards with icons
✅ **Game Screenshots** - 6 gameplay screenshots
✅ **Play Game CTA** - Links to deployed game
✅ **University Logos** - 5 featured universities
✅ **Thank You Page** - Professional confirmation
✅ **Form Validation** - Client-side validation
✅ **Mobile Responsive** - Works on all devices
✅ **Blue & White Theme** - Professional prestige styling

## 📞 Support

For issues or questions, refer to:
- Salesforce documentation for Web-to-Lead setup
- Vercel/Netlify documentation for deployment help
- GitHub documentation for repository management

## 📄 License

© Immerse Education. All Rights Reserved.
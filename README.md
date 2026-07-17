# Kushel Wellness Club Website

This repository contains the static website source code for Kushel Wellness Club, a community-driven wellness platform helping individuals and families build healthier lifestyles.

## Technical Architecture

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **CSS Architecture:** Custom properties (variables.css), responsive design (responsive.css)
- **Deployment:** GitHub Pages (Static Hosting)
- **Performance:** Optimized for fast loading, no heavy frameworks used.
- **Accessibility:** WCAG AA compliant forms, ARIA labels, semantic HTML.
- **SEO:** Schema.org JSON-LD, canonical tags, proper headings, Open Graph tags.

## Directory Structure

```
/
├── index.html            # Home Page
├── about.html            # About & Coach Profile
├── programs.html         # Community Experiences
├── calculators.html      # Wellness Tools
├── success-stories.html  # Testimonials
├── faq.html              # Frequently Asked Questions
├── contact.html          # Contact & Consultation
├── privacy.html          # Privacy Policy
├── terms.html            # Terms & Conditions
├── robots.txt            # SEO rules
├── sitemap.xml           # SEO sitemap
└── assets/
    ├── css/
    │   ├── variables.css # Design system tokens
    │   ├── style.css     # Main styling
    │   └── responsive.css# Mobile media queries
    ├── js/
    │   ├── main.js       # Global interactions (nav, FAQ, lazy load)
    │   ├── bmi.js        # BMI logic
    │   ├── water.js      # Water Intake logic
    │   ├── protein.js    # Protein Target logic
    │   └── calorie.js    # TDEE Calculator logic
    ├── images/           # Images (Placeholders)
    ├── icons/            # SVGs
    └── fonts/            # Local fonts (if needed)
```

## Local Development

Since this is a static website, you do not need Node.js, npm, or any backend to run it.

1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. For testing calculators and preventing CORS issues (if you add local data fetches later), it's recommended to serve the directory using a simple local server:
   - Python: `python -m http.server 8000`
   - Node: `npx serve .`

## Deployment to GitHub Pages

1. Push this code to a GitHub repository (e.g., `username/kushel-wellness`).
2. Go to the repository **Settings** -> **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder.
5. Click **Save**.
6. Your site will be live at `https://username.github.io/kushel-wellness/` (or your custom domain if configured).

## Brand Guidelines & Future Expansion
Refer to `brand_bible.txt` or `Kushel_Wellness_Club_Brand_Bible_v1.0.docx` for content, philosophy, and future scaling plans (e.g., integrating the future Kushel Coach App).

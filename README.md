# Forces Academy Faisalabad — Website

A responsive, multi-page frontend website built for Forces Academy Faisalabad, developed during the **Code Saviours SI-26 Frontend Internship**. The site covers admissions, course offerings, results, and campus life for a military-preparatory academy.

## Live Site
[https://laiba-aleem.github.io/forces-academy-frontend-codesaviours-si26-laiba/](https://laiba-aleem.github.io/forces-academy-frontend-codesaviours-si26-laiba/)

## Screenshots

### Home Page
**Landing hero (video intro):**
<img width="1353" height="640" alt="home-hero" src="https://github.com/user-attachments/assets/b70033e3-a004-4c59-b1d6-01e21de9d307" />
**Landing hero (scrolled — main content reveal):**
<img width="1349" height="640" alt="home-content" src="https://github.com/user-attachments/assets/a78d814b-3b72-4059-858f-c65ed377aaf2" />

### About Page
<img width="1350" height="640" alt="about" src="https://github.com/user-attachments/assets/f4df8137-2b04-4998-a796-fbc8752500e8" />

### Courses Page
<img width="1352" height="640" alt="courses" src="https://github.com/user-attachments/assets/95710616-87aa-4efe-867f-0f5e219e9f23" />

### Admissions Page
<img width="1349" height="640" alt="admissions" src="https://github.com/user-attachments/assets/8a2da90d-4194-4dd1-9e64-ddb120b33380" />

### Contact Page
<img width="1350" height="637" alt="contact" src="https://github.com/user-attachments/assets/a6da3bdc-b5b3-41f6-bd41-9c9443c52ef3" />

## Tech Stack
- HTML5
- CSS3 (custom properties, Flexbox, Grid, responsive media queries)
- Bootstrap 5
- JavaScript (vanilla)
- GSAP & ScrollTrigger (landing page hero animation)
- AOS (Animate On Scroll library)
- GLightbox (gallery lightbox)
- Bootstrap Icons
- Cloudinary (video CDN hosting)
- Deployed on GitHub Pages

## Features
- **Deliberate conversion-focused homepage flow** — cinematic hero to build interest, stats for credibility, a live announcements ticker for urgency, testimonials for social proof, and a closing CTA — each section sequenced to move a visitor toward applying
- Consistent custom design system across all pages (dashed-border accents, pill-tag badges, icon-circle motifs) built on CSS custom properties
- Cinematic scroll-driven hero: full-screen video shrinks into a floating photo card via a GSAP ScrollTrigger sequence
- Performance-optimized: hero video hosted via Cloudinary CDN for faster load times; images compressed and served in WebP format
- Animated stats counter (CountUp.js), triggered on scroll into view
- Auto-scrolling "Latest Updates" announcement ticker (pure CSS, no JS)
- Auto-playing testimonials carousel
- Scroll-triggered navbar (transparent over the video, solid on scroll)
- Interactive "Why Choose Us" expanding-card section
- "Find the Right Path" quick-index linking directly to detailed course cards
- Multi-step "How to Apply" process visual with eligibility accordions, a required-documents checklist, fee table, and FAQ
- Bootstrap modal-based online registration form
- Filterable photo gallery with lightbox (GLightbox), a "Hall of Fame" showcase, and an embedded YouTube video section
- Rank/grade results table
- Contact form validation
- Embedded map
- Back-to-top button
- Fully responsive across mobile, tablet, and desktop; cross-browser tested (Chrome, Firefox, Edge)

## 📁 Project Structure
├── index.html
├── about.html
├── courses.html
├── admissions.html
├── results.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/

## Future Improvements
- Results table's PDF-download buttons and pagination are currently static — full functionality requires backend/database integration, which is outside this track's scope.
- The Student Portal navbar link is a placeholder (`href="#"`), pending a real student-portal backend.
- The registration modal collects data client-side only; no backend endpoint is connected yet.

## Built By
**Laiba Aleem** | Code Saviours SI-26 | 2026

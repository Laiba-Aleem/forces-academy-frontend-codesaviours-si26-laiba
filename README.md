# Forces Academy Faisalabad — Website

A responsive, multi-page frontend website built for Forces Academy Faisalabad, developed during the **Code Saviours SI-26 Frontend Internship**. The site covers admissions, course offerings, results, and campus life for a military-preparatory academy.

## Live Site
[https://laiba-aleem.github.io/forces-academy-frontend-codesaviours-si26-laiba/](https://laiba-aleem.github.io/forces-academy-frontend-codesaviours-si26-laiba/)

## Screenshots

### Home Page
**Landing hero** — Full-screen video intro with cinematic scroll animation.
<img width="1353" height="640" alt="home-hero" src="https://github.com/user-attachments/assets/b70033e3-a004-4c59-b1d6-01e21de9d307" />
**Main content reveal** — Academy mission, CTAs, and parade hero section.
<img width="1349" height="640" alt="home-content" src="https://github.com/user-attachments/assets/a78d814b-3b72-4059-858f-c65ed377aaf2" />

### About Page
**Who We Are** — Academy legacy, mission, and cadet formation.
<img width="829" height="520" alt="about" src="https://github.com/user-attachments/assets/91fd852e-5bd5-4931-824c-d1817495ec41" />

### Courses Page
**Programs** — Course cards with duration, eligibility, and entry requirements.
<img width="832" height="521" alt="courses-cards" src="https://github.com/user-attachments/assets/8adee09a-33d8-42fb-a56a-8eeaaf4a4f3a" />

### Admissions Page
**Eligibility** — Six specialized program tracks, each with detailed eligibility criteria.
<img width="832" height="514" alt="admissions-criteria" src="https://github.com/user-attachments/assets/283ae57d-0bee-4d98-9bca-5faefd51cee8" />

**Online Registration** — Application modal with form validation and program selection.
<img width="834" height="517" alt="admissions-registration" src="https://github.com/user-attachments/assets/2c05287a-94fa-4de7-be13-937d5068fa63" />

### Gallery Page
**Success Stories** — Hall of Fame with cadet profiles, achievement stats, and featured testimonials.
<img width="831" height="521" alt="hall-of-fame" src="https://github.com/user-attachments/assets/d70f512a-c1d1-4f39-9bcf-30e5c0d74d66" />

**Moments We Cherish** — Filterable photo gallery by category (Study, Training, Classroom, Events).
<img width="833" height="518" alt="gallery-grid" src="https://github.com/user-attachments/assets/8978c24a-be6c-4c85-b4fc-c93b04d25250" />

### Contact Page
**FAQ & Contact Form** — Accordion-based questions, message form, and WhatsApp integration.
<img width="834" height="521" alt="contact" src="https://github.com/user-attachments/assets/1feadd8f-4fb7-464c-abb8-e8b129ae226f" />

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
```
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
```

## Future Improvements
- Results table's PDF-download buttons and pagination are currently static — full functionality requires backend/database integration, which is outside this track's scope.
- The Student Portal navbar link is a placeholder (`href="#"`), pending a real student-portal backend.
- The registration modal collects data client-side only; no backend endpoint is connected yet.

## Built By
**Laiba Aleem** | Code Saviours SI-26 | 2026

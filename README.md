# Forces Academy Faisalabad — Website

A responsive, multi-page frontend website built for Forces Academy Faisalabad, developed during the **Code Saviours SI-26 Frontend Internship**. The site covers admissions, course offerings, results, and campus life for a military-preparatory academy.

## Live Site
[https://laiba-aleem.github.io/forces-academy-frontend-codesaviours-si26-laiba/](https://laiba-aleem.github.io/forces-academy-frontend-codesaviours-si26-laiba/)

## Screenshots

### Home Page
**Landing hero** — Full-screen video intro with cinematic scroll animation.
<img width="1353" height="640" alt="home-hero" src="https://github.com/user-attachments/assets/b70033e3-a004-4c59-b1d6-01e21de9d307" />
**Main content reveal** — Academy mission, CTAs, and parade hero section.
<img width="1351" height="630" alt="home-content" src="https://github.com/user-attachments/assets/33bd0492-67e3-4de6-808d-b08c54108de4" />

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

## 📄 Website Pages
| Page | Description |
|---|---|
| 🏠 Home | Cinematic video hero, "Why Choose Us," animated stats, testimonials, and latest announcements |
| ℹ️ About | Academy legacy, mission, and leadership |
| 📚 Courses | Six specialized programs with a quick-jump index and detailed course cards |
| 📝 Admissions | Application steps, eligibility, required documents, fees, FAQ, and a live enquiry form |
| 📊 Results | Merit list, performance stats, and course-wise results overview |
| 🖼️ Gallery | Filterable photo gallery with lightbox |
| 📞 Contact | Contact form, FAQ, and location details |

## Tech Stack

### Core Stack
- HTML5
- CSS3 (custom properties, Flexbox, Grid, responsive media queries)
- Bootstrap 5
- JavaScript (vanilla)

### Libraries & Animation
- GSAP & ScrollTrigger (landing page hero animation)
- AOS (Animate On Scroll library)
- GLightbox (gallery lightbox)
- CountUp.js (animated stat counters)
- Bootstrap Icons

### Integrations & Deployment
- EmailJS (contact/enquiry form email delivery)
- Cloudinary (video CDN hosting)
- Deployed on GitHub Pages

## Features

### Landing Experience
- **Cinematic scroll-driven hero** — a full-screen video shrinks into a floating photo card via a GSAP ScrollTrigger sequence, revealing the main homepage content
- **Dark/Light mode toggle** — theme preference persists across pages via localStorage
- **Consistent custom design system** — dashed-border accents, pill-tag badges, and icon-circle motifs built on CSS custom properties, applied across all 7 pages
- **Performance-optimized** — hero video hosted via Cloudinary CDN; images compressed and served in WebP
- **Basic SEO** — unique meta descriptions, Open Graph tags, and a custom favicon on every page

### Content & Navigation
- **Student Portal integration** — the navbar button links to a live LMS built by a Full Stack teammate
- **Results dashboard** — animated stat cards, a pure-CSS course-performance bar chart, and a clickable "Next Phases & Key Dates" list linking directly to relevant courses
- **Interactive course finder** — a quick-jump index linking straight to detailed, icon-based course cards
- **Multi-step admissions flow** — visual application steps, per-program eligibility accordions, a required-documents checklist, fee table, and FAQ

### Interactive Elements
- **Live enquiry form** — the Admissions page form sends real emails through EmailJS
- **Auto-playing carousels** — testimonials and homepage announcements, both scroll-aware and touch-friendly
- **Workshop registration modal** — event details plus an inline sign-up form
- **Filterable photo gallery** — category filtering with a GLightbox-powered lightbox

### Responsiveness
- **Fully responsive** — tested down to 360px-wide devices, with a consistent experience across mobile, tablet, and desktop

## How to Run Locally
This is a static front-end project — no build process or dependency installation required.

1. Clone the repository
```bash
   git clone https://github.com/Laiba-Aleem/forces-academy-frontend-codesaviours-si26-laiba.git
```
2. Move into the project directory
```bash
   cd forces-academy-frontend-codesaviours-si26-laiba
```
3. Open the site
   - Double-click `index.html` to open it directly in your browser, or
   - Use VS Code's Live Server extension (recommended) → right-click `index.html` → "Open with Live Server"

No environment variables or API keys are needed for local viewing — EmailJS and the Student Portal link work directly against their live endpoints.

## Testing

Cross-browser tested on:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Responsive testing performed via Chrome DevTools device emulation and real-device checks across a wide range of viewport widths, including:
- Desktop (1920px and standard laptop widths)
- Tablet (iPad Air)
- Mobile — iPhone 12 Pro (390px) down to Samsung Galaxy S8+ (360px)

**The debugging story:** during final mobile testing, a subtle horizontal-scroll bug appeared on two pages — but only on the narrowest viewports, and only intermittently. Rather than guessing at fixes, I wrote a small browser-console script to scan the live DOM and flag the exact element(s) overflowing the viewport, down to the pixel. That traced the root cause to a missing responsive grid class on one section — a one-line fix that would have been very hard to find by inspection alone. This became my go-to debugging approach for the rest of the project: measure first, fix second.

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
- Results table's PDF-download button and pagination are currently static — full functionality would require backend/database integration.
- This project was intentionally scoped to frontend only, as part of the Frontend Track — the Student Portal links to a live LMS backend built by a Full Stack teammate. Going forward, I'm working toward becoming a full-stack (PERN) developer, and building out backend functionality myself — real data persistence, authentication — is a natural next step in that journey.

## 👤 Built By
**Laiba Aleem** | Code Saviours SI-26 | 2026

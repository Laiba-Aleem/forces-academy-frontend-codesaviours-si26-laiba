// ----------------------------------------------- GALLERY PAGE ------------------------------------------------

// -------- GALLERY LIGHTBOX -----------------
if (typeof GLightbox !== "undefined") {
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        openEffect: 'zoom',
        closeEffect: 'zoom',
        slideEffect: 'slide',
        moreLength: 0,
        skin: 'clean',
        closeButton: true,
        keyboardNavigation: true,
    });
}

//  ----------- GALLERY FILTERS --------------
const buttons = document.querySelectorAll(".filter-button");
const sections = document.querySelectorAll(".gallery-section");
const wrapper = document.querySelector(".gallery-wrapper");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.dataset.filter;
        wrapper.classList.add("loading");
        setTimeout(() => {
            sections.forEach(section => {
                if (filter === "all") {
                    section.style.display = "block";
                }
                else if (section.id === filter) {
                    section.style.display = "block";
                }
                else {
                    section.style.display = "none";
                }
            });
            wrapper.classList.remove("loading");
            AOS.refresh();
        }, 250);
    });
});

// ----------- SCROLL EFFECT lft right for rows ------------
const leftRows = document.querySelectorAll(".left-scroll");
const rightRows = document.querySelectorAll(".right-scroll");

if (leftRows.length || rightRows.length) {

    window.addEventListener("scroll", () => {
        const speed = window.innerWidth < 768 ? 0.01 :
            window.innerWidth < 992 ? 0.05 : 0.08;
        leftRows.forEach(row => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = window.innerHeight / 2 - (rect.top + rect.height / 2);
                row.style.transform = `translateX(${-offset * speed}px)`;
            }
        });
        rightRows.forEach(row => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = window.innerHeight / 2 - (rect.top + rect.height / 2);
                row.style.transform = `translateX(${offset * speed}px)`;
            }
        });
    });
}

// ------------- CONTACT FORM WITH EMAILJS --------------
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contactName');
        const email = document.getElementById('contactEmail');
        const phone = document.getElementById('contactPhone');
        const subject = document.getElementById('contactSubject');
        const message = document.getElementById('contactMessage');

        let valid = true;

        // Name check
        if (name.value.trim() === '') {
            name.classList.add('is-invalid');
            valid = false;
        } else {
            name.classList.remove('is-invalid');
            name.classList.add('is-valid');
        }
        // Email check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }
        // Phone check
        const phoneValue = phone.value.trim();
        const phoneRegex = /^03\d{9}$/;
        if (
            !phoneRegex.test(phoneValue) ||
            /^0+$/.test(phoneValue) ||
            /^(\d)\1+$/.test(phoneValue)
        ) {
            phone.classList.add("is-invalid");
            phone.classList.remove("is-valid");
            valid = false;
        } else {
            phone.classList.remove("is-invalid");
            phone.classList.add("is-valid");
        }
        // Subject check
        if (subject.value === '') {
            subject.classList.add('is-invalid');
            valid = false;
        } else {
            subject.classList.remove('is-invalid');
            subject.classList.add('is-valid');
        }
        // Message check (Min 10 characters required)
        const messageValue = message.value.trim();
        if (messageValue.length < 10) {
            message.classList.remove('is-valid');
            message.classList.add('is-invalid');
            valid = false;
        } else {
            message.classList.remove('is-invalid');
            message.classList.add('is-valid');
        }

        // If all valid then Send via EmailJS
        if (valid) {
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
            btn.disabled = true;

            emailjs.sendForm('service_ds8bajf', 'template_q2fzpm4', contactForm)
                .then(() => {
                    document.getElementById('formSuccess').classList.remove('d-none');
                    contactForm.reset();
                    contactForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
                    setTimeout(() => {
                        document.getElementById('formSuccess').classList.add('d-none');
                    }, 5000);
                })
                .catch((err) => {
                    console.error('EmailJS Error:', err);
                    alert('Failed to send message. Please try again or WhatsApp us directly.');
                })
                .finally(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                });
        }
    });
}


// -------------------------------------------------- HOME PAGE ---------------------------------------------------

/* ------------------------  CountUp.js stat counters ----------------------- */
  /* Only run when the stats section scrolls into view. */
  var counters = document.querySelectorAll(".stat-number[data-count]");
  if (counters.length > 0 && window.countUp) {
    var started = false;
    var runCounters = function () {
      counters.forEach(function (el) {
        var end = parseFloat(el.getAttribute("data-count"));
        var counter = new countUp.CountUp(el, end, { duration: 2.2 });
        if (!counter.error) {
  counter.start(function () {
    if (end === 12) {
      el.textContent += "+";
    }
    if (end === 95) {
        el.textContent += "%";
    }
  });
}
      });
    };
    /* Use IntersectionObserver so counting starts when visible */
    var statsSection = document.querySelector(".stats-section");
    if (statsSection && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !started) {
            started = true;
            runCounters();
            observer.disconnect();
          }
        });
      }, { threshold: 0.4 });
      observer.observe(statsSection);
    } else {
      runCounters(); // fallback: just run
    }
  }

/*------------------- ANNOUNCEMENT SECTION IMAGES --------------------*/
const announceCarouselEl = document.getElementById("announceCarousel");
const tints = document.querySelectorAll(".announce-bg-img");

if (announceCarouselEl && tints.length) {
  announceCarouselEl.addEventListener("slide.bs.carousel", (e) => {
    tints.forEach(t => t.classList.remove("active"));
    tints[e.to].classList.add("active");
  });
}

/*-------------------- CTA COMPASS NEEDLE SPIN ----------------------------*/
const ctaSection = document.querySelector(".cta-section");
const compassNeedle = document.getElementById("compassNeedle");
if (ctaSection && compassNeedle) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section visible - spin start
        compassNeedle.classList.add("spin-in");
      } else {
        // Section invisible — class remove so it spin again on visibility
        compassNeedle.classList.remove("spin-in");
      }
    });
  }, {
    threshold: 0.7  // trigger on 70% section visible
  });
  observer.observe(ctaSection);
}

/* ------------------- Back to Top BUTTON ---------------------- */
window.addEventListener("scroll", function () {
  var backBtn = document.getElementById("backToTop");
  if (backBtn) {
    backBtn.style.display = window.scrollY > 400 ? "flex" : "none";
  }
});
var backBtn = document.getElementById("backToTop");
if (backBtn) {
  backBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/*------------------- WHY CHOOSE US SECTION -----------------------*/
// WHY CHOOSE US — card expand or collapse
const whyCards = document.querySelectorAll(".why-card");
whyCards.forEach(card => {
  card.addEventListener("click", () => {
    whyCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});
// transition on screen in contact
const whySection = document.querySelector('.why-section');
if (whySection) {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.why-card').forEach(card => card.classList.add('in-view'));
        cardObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  cardObserver.observe(whySection);
}

/*------------------- for lazy loading images ---------------------*/
const lazyBgElements = document.querySelectorAll('[data-bg]');
if (lazyBgElements.length > 0) {
    const bgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.backgroundImage = `url('${el.dataset.bg}')`;
                observer.unobserve(el);
            }
        });
    }, { rootMargin: "200px" });
    lazyBgElements.forEach(el => bgObserver.observe(el));
}
/*------------------- Current year on FOOTER -----------------------*/
var yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// ------------------------------------------------- NAVBAR  ------------------------------------------------------

/* TRANSPARENT NAVBAR ON VIDEO ,revealed on SCROLL */
const navbar = document.getElementById('mainNav');
const landingHero = document.querySelector('.landing-hero');
function updateNavbar() {
    if (!navbar || !landingHero) return;
  const heroBottom = landingHero.getBoundingClientRect().bottom;
  if (heroBottom <= 80) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
}
window.addEventListener('scroll', updateNavbar);
window.addEventListener('load', updateNavbar);
updateNavbar();

// ----------------------------------------------- DARK MODE TOGGLE ------------------------------------------------

const darkToggle = document.getElementById('darkModeToggle');
const darkIcon = darkToggle ? darkToggle.querySelector('i') : null;

function applyDarkMode(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  if (darkIcon) {
    darkIcon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }
}

// Page load pe saved preference check karo
const savedMode = localStorage.getItem('darkMode');
applyDarkMode(savedMode === 'true');

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyDarkMode(isDark);
    localStorage.setItem('darkMode', isDark);
  });
}

/* ---------------------------------- EMAILJS — Admission Enquiry Form ---------------------------------------------*/

(function() {
  emailjs.init("GCnZ1RUbcjiNlMvfH");

  const form = document.getElementById('enquiryForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
    btn.disabled = true;

    // NAYI IDs yahan
    emailjs.sendForm('service_ds8bajf', 'template_v6p2xie', this)
      .then(() => {
        document.getElementById('enquirySuccess').classList.remove('d-none');
        this.reset();
        setTimeout(() => {
          document.getElementById('enquirySuccess').classList.add('d-none');
        }, 5000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert('Failed to send. Error: ' + (err.text || err.message || 'Unknown'));
      })
      .finally(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
      });
  });
})();
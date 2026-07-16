// ----------------------------------------------- GALLERY LIGHTBOX ------------------------------------------------

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
});  }

//                                          ----------- GALLERY FILTERS --------------

const buttons = document.querySelectorAll(".filter-button");
const items = document.querySelectorAll(".gal-imgs");

if (buttons.length) {

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    items.forEach(item => {
      if (filter === "all" || item.dataset.category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});    }

//                                           ----------- SCROLL EFFECT ------------

const leftRows = document.querySelectorAll(".left-scroll");
const rightRows = document.querySelectorAll(".right-scroll");

if (leftRows.length || rightRows.length) {

window.addEventListener("scroll", () => {
    const speed = window.innerWidth < 768 ? 0.01 : 
                  window.innerWidth < 992 ? 0.05 : 0.08;

    leftRows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = window.innerHeight/2 - (rect.top + rect.height/2);
            row.style.transform = `translateX(${-offset * speed}px)`;
        }
    });

    rightRows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = window.innerHeight/2 - (rect.top + rect.height/2);
            row.style.transform = `translateX(${offset * speed}px)`;
        }
    });
});    }


// ----------------------------------------------- CONTACT FORM ------------------------------------------------
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
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

    // If all valid
    if (valid) {
      document.getElementById('formSuccess').classList.remove('d-none');
      contactForm.reset();
      // Remove green borders after reset
      contactForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
    }
  });
}
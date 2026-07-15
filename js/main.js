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

const buttons = document.querySelectorAll(".filter-button");
const items = document.querySelectorAll(".gal-imgs");

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
});

const leftRows = document.querySelectorAll(".left-scroll");
const rightRows = document.querySelectorAll(".right-scroll");

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
});
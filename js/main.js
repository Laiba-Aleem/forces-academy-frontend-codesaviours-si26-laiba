const lightbox = GLightbox({
    touchNavigation: true,    // mobile pe swipe karo images ke beech
    loop: true,               // last image ke baad first pe wapas aao
    openEffect: 'zoom',       // image zoom karke khule
    closeEffect: 'zoom',      // zoom karke band ho
    slideEffect: 'slide',     // images ke beech slide animation
    moreLength: 0,            // description length limit
    skin: 'clean',            // clean white style
    closeButton: true,        // X button dikhao
    keyboardNavigation: true, // arrow keys se navigate karo
});


const buttons = document.querySelectorAll(".filter-button");
const items = document.querySelectorAll(".filter");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.filter;

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        items.forEach(item => {

            if (value === "all") {

                item.style.display = "block";

            } else if (item.classList.contains(value)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});
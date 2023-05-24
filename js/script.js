const buttons = document.querySelectorAll("button");
const buttonLeft = document.querySelector("[data-carousel-button-left]");
const buttonRight = document.querySelector("[data-carousel-button-right]");
const carouselSlider = document.querySelector("[data-carousel-slider");
const slides = carouselSlider.children;
let newIndex;
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const currentItem = carouselSlider.querySelector("[data-current-item]");
        const currentIndex = Array.from(slides).indexOf(currentItem);
        if (e.target == buttonLeft) newIndex = currentIndex - 1;
        if (e.target == buttonRight) newIndex = currentIndex + 1;
        if (newIndex == slides.length) newIndex = 0;
        if (newIndex < 0) newIndex = slides.length - 1;
        slides[newIndex].setAttribute("data-current-item", "");
        slides[currentIndex].removeAttribute("data-current-item");
    });
});
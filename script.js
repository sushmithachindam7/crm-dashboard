let currentSlide = 1;
const totalSlides = 3;

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === n - 1) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > totalSlides) currentSlide = 1;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 1) currentSlide = totalSlides;
  showSlide(currentSlide);
}

// Initialize first slide
showSlide(currentSlide);

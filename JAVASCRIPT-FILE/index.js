// This ensures all scripts run after the page content has loaded.
document.addEventListener("DOMContentLoaded", function () {

  // === Hamburger Menu Toggle ===
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // A check to ensure the elements exist before adding the event listener.
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // === Carousel Slider ===
  let slideIndex = 1;
  const slides = document.getElementsByClassName("carousel-slide");
  const dots = document.getElementsByClassName("dot");

  // Initial call and a check to ensure slides exist
  if (slides.length > 0) {
    showSlides(slideIndex);
  }

  // Auto-slide timer, runs every 3 seconds
  let slideTimer = setInterval(() => plusSlides(1), 3000);

  function plusSlides(n) {
    clearInterval(slideTimer);
    showSlides(slideIndex += n);
    slideTimer = setInterval(() => plusSlides(1), 3000); // Restart the timer
  }

  function currentSlide(n) {
    clearInterval(slideTimer);
    showSlides(slideIndex = n);
    slideTimer = setInterval(() => plusSlides(1), 3000); // Restart the timer
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }

  // === Tab Switching (Benefits Page) ===
  // This is a more robust way to handle tab clicks without using inline `onclick` attributes.
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Get the target tab from the data-tab attribute
      const tabId = button.getAttribute("data-tab");

      // Deactivate all buttons and tabs
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      // Activate the clicked button and its corresponding tab content
      button.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });

}); // End of DOMContentLoaded

// === Google Translate Widget ===
// This function needs to be global, so it's placed outside the DOMContentLoaded listener.
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'mr,en',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
}

// === Previous code to be removed ===
/*
// The following code is repetitive and should be removed.
function plusSlides(n) { ... }
function currentSlide(n) { ... }
function showSlides(n) { ... }
function googleTranslateElementInit() { ... }
function switchTab(tabId) { ... }
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
*/
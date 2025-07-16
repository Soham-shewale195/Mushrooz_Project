
let slideIndex = 1;
showSlides(slideIndex);
let slideTimer = setInterval(() => plusSlides(1), 3000);

function plusSlides(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex += n);
slideTimer = setInterval(() => plusSlides(1), 3000);
}

function currentSlide(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex = n);
 slideTimer = setInterval(() => plusSlides(1), 3000);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("carousel-slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  }

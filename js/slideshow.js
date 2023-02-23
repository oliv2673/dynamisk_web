let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function myFunction(x) {
  if (mediaQuery.matches) {
    // If media query matches
    document.querySelector(".img1").src = "img/forside/5.webp";
    document.querySelector(".img2").src = "img/forside/6.webp";
    document.querySelector(".img3").src = "img/forside/7.webp";
    document.querySelector(".img4").src = "img/forside/8.webp";
  } else {
    document.querySelector(".img1").src = "img/forside/2.webp";
    document.querySelector(".img2").src = "img/forside/1.webp";
    document.querySelector(".img3").src = "img/forside/3.webp";
    document.querySelector(".img4").src = "img/forside/4.webp";
  }
}
const mediaQuery = window.matchMedia("(max-width: 600px)");

myFunction(mediaQuery);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function openModalTools() {
  document.getElementById('modal-tools').style.display = "block";
}

function closeModalTools() {
  document.getElementById('modal-tools').style.display = "none";
}

var slideIndex = 1;
showSlidesTools(slideIndex);

function plusSlidesTools(n) {
  showSlidesTools(slideIndex += n);
}

function currentSlideTools(n) {
  showSlidesTools(slideIndex = n);
}

function showSlidesTools(n) {
  var i;
  var slides = document.getElementsByClassName("SlidesTools");
  var dots = document.getElementsByClassName("image-modal-tools");
  var captionText = document.getElementById("caption-tools");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
'use strict';


const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });


const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});

document.getElementById('contact-whatsapp').addEventListener('click', function () {
  const message = "Fale com a nossa equipe";
  const whatsappURL = `https://wa.me/5581997420369?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
});

document.getElementById('cta-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const message = `Quero os 7 dias Grátis. Meu email é: ${email}`;
  const whatsappURL = `https://wa.me/5581997420369?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
});

let scrollAmount = 0;
const scrollStep = 800; // Ajustado para a largura de dois pares

function scrollGallery(direction) {
  const gallery = document.querySelector('.gallery');
  const galleryWidth = gallery.scrollWidth;
  const maxScroll = gallery.scrollWidth - gallery.clientWidth;

  scrollAmount += direction * scrollStep;

  if (scrollAmount < 0) {
    scrollAmount = maxScroll; // Reinicia para o final
  } else if (scrollAmount >= galleryWidth) {
    scrollAmount = 0; // Reinicia para o início
  }

  gallery.style.transform = `translateX(-${scrollAmount}px)`;
}

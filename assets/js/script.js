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
const updatePairWidth = () => {
  const pairs = document.querySelectorAll('.gallery-pair');
  return pairs.length > 0 ? pairs[0].offsetWidth : 0;
};
let pairWidth = updatePairWidth();

function scrollGallery(direction) {
  const gallery = document.querySelector('.gallery');
  const pairs = document.querySelectorAll('.gallery-pair');
  pairWidth = updatePairWidth();
  const maxScroll = (pairs.length - 2) * pairWidth; // Ajustado para evitar mostrar partes adjacentes
  scrollAmount += direction * pairWidth;

  if (scrollAmount < 0) {
    scrollAmount = maxScroll; // Reinicia para o final
  } else if (scrollAmount > maxScroll) {
    scrollAmount = 0; // Reinicia para o início
  }

  gallery.style.transform = `translateX(-${scrollAmount}px)`;
}

window.addEventListener('resize', () => {
  pairWidth = updatePairWidth(); // Recalcula a largura do par quando a janela é redimensionada
});

window.addEventListener('scroll', function () {
  const whatsappButton = document.querySelector('.whatsapp-button');
  if (window.scrollY > 500) {
    whatsappButton.classList.add('active');
  } else {
    whatsappButton.classList.remove('active');
  }
});


document.querySelectorAll('.gallery-pair').forEach((pair, index) => {
  pair.addEventListener('click', () => {
    openModal(pair);
  });
});

function openModal(pair) {
  const images = pair.querySelectorAll('img');
  document.getElementById('modalImage1').src = images[0].src;
  document.getElementById('modalImage2').src = images[1].src;
  document.getElementById('imageModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

window.onclick = function (event) {
  if (event.target === document.getElementById('imageModal')) {
    closeModal();
  }
};

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Adicionar eventos de toque e mouse

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;

const gallery = document.querySelector('.gallery');
const pairs = Array.from(document.querySelectorAll('.gallery-pair'));


pairs.forEach((pair, index) => {
  const imageContainer = pair;

  imageContainer.addEventListener('touchstart', touchStart(index));
  imageContainer.addEventListener('touchend', touchEnd);
  imageContainer.addEventListener('touchmove', touchMove);

  imageContainer.addEventListener('mousedown', touchStart(index));
  imageContainer.addEventListener('mouseup', touchEnd);
  imageContainer.addEventListener('mousemove', touchMove);
  imageContainer.addEventListener('mouseleave', touchEnd);
});

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < pairs.length - 1) {
    currentIndex += 1;
  }

  if (movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  gallery.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -pairWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

window.addEventListener('resize', () => {
  pairWidth = updatePairWidth();
  setPositionByIndex();
});




<<<<<<< HEAD

=======
>>>>>>> 84a1875002d392ab9747ffc11cfb7fb8eab96c5a
function selectTab(tabId) {
  const buttons = Array.from(document.querySelectorAll('.tab-btn'));
  const contents = Array.from(document.querySelectorAll('.tab-content'));

  buttons.forEach(button => button.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.querySelector(`[onclick="selectTab('${tabId}')"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');

  reorderTabs(tabId, buttons);
}

function reorderTabs(selectedTabId, buttons) {
  const selectedIndex = buttons.findIndex(button => button.getAttribute('onclick') === `selectTab('${selectedTabId}')`);
  const midIndex = Math.floor(buttons.length / 2);

  let startIndex = selectedIndex - midIndex;
  if (startIndex < 0) startIndex += buttons.length;

  const orderedButtons = buttons.slice(startIndex).concat(buttons.slice(0, startIndex));

  const tabsContainer = document.querySelector('.tabs');
  tabsContainer.innerHTML = '';
  orderedButtons.forEach(button => tabsContainer.appendChild(button));

  centerTab();
}

function centerTab() {
  const activeButton = document.querySelector('.tab-btn.active');
  const tabsContainer = document.querySelector('.tabs');

<<<<<<< HEAD
  if (activeButton) {
    const offset = tabsContainer.offsetWidth / 2 - activeButton.offsetWidth / 2;
    const activeOffset = activeButton.offsetLeft - tabsContainer.offsetLeft;

    tabsContainer.scroll({
      left: activeOffset - offset,
      behavior: 'smooth'
    });
  }
}

// Centralizar a aba selecionada ao carregar a página
window.addEventListener('load', function () {
  const activeButton = document.querySelector('.tab-btn.active');
  if (activeButton) {
    setTimeout(centerTab, 100); // Adicionar um pequeno atraso para garantir que a aba seja centralizada
  }
});


let currentCardContent = '';

function showCustomModal(cardTitle) {
  const card = document.querySelector(`.about-card[onclick="showCustomModal('${cardTitle}')"]`);
  const extraDetails = "Mais informações sobre o serviço do card.";

  currentCardContent = card.innerHTML;
  document.getElementById('custom-modal-card-content').innerHTML = currentCardContent + `<p>${extraDetails}</p>`;
  document.getElementById('custom-modal').style.display = 'block';

  document.getElementById('customer-name').value = '';
  document.getElementById('send-btn').disabled = true;
}

function closeCustomModal() {
  document.getElementById('custom-modal').style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == document.getElementById('custom-modal')) {
    closeCustomModal();
  }
}

document.getElementById('customer-name').addEventListener('input', function () {
  const sendBtn = document.getElementById('send-btn');
  if (this.value.trim() !== '') {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
});

function sendCustomMessage() {
  const name = document.getElementById('customer-name').value.trim();
  const message = `Meu nome é ${name}, tenho interesse em ${document.querySelector('.custom-modal .card-title').innerText}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://api.whatsapp.com/send?phone=5581997420369&text=${encodedMessage}`, '_blank');
  closeCustomModal();
}


let currentCardIndex = 0;

function showCustomModal(cardTitle) {
  const card = document.querySelector(`.about-card[onclick="showCustomModal('${cardTitle}')"]`);
  const extraDetails = "Mais informações sobre o serviço do card.";

  currentCardContent = card.innerHTML;
  document.getElementById('custom-modal-card-content').innerHTML = currentCardContent + `<p>${extraDetails}</p>`;
  document.getElementById('custom-modal').style.display = 'block';
=======
  const offset = tabsContainer.offsetWidth / 2 - activeButton.offsetWidth / 2;
  const activeOffset = activeButton.offsetLeft - tabsContainer.offsetLeft;

  tabsContainer.scroll({
    left: activeOffset - offset,
    behavior: 'smooth'
  });
}

let currentCardContent = '';

function showModal(cardTitle) {
  const card = document.querySelector(`.about-card[onclick="showModal('${cardTitle}')"]`);
  currentCardContent = card.innerHTML;

  const extraDetails = "Adicione aqui suas informações adicionais sobre o serviço do card.";
  document.getElementById('modal-card-content').innerHTML = currentCardContent + `<p>${extraDetails}</p>`;
  document.getElementById('modal').style.display = 'block';
>>>>>>> 84a1875002d392ab9747ffc11cfb7fb8eab96c5a

  document.getElementById('customer-name').value = '';
  document.getElementById('send-btn').disabled = true;
}

<<<<<<< HEAD
function closeCustomModal() {
  document.getElementById('custom-modal').style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == document.getElementById('custom-modal')) {
    closeCustomModal();
=======
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == document.getElementById('modal')) {
    closeModal();
>>>>>>> 84a1875002d392ab9747ffc11cfb7fb8eab96c5a
  }
}

document.getElementById('customer-name').addEventListener('input', function () {
  const sendBtn = document.getElementById('send-btn');
  if (this.value.trim() !== '') {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
});

<<<<<<< HEAD
function sendCustomMessage() {
  const name = document.getElementById('customer-name').value.trim();
  const message = `Meu nome é ${name}, tenho interesse em ${document.querySelector('.custom-modal .card-title').innerText}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://api.whatsapp.com/send?phone=5581997420369&text=${encodedMessage}`, '_blank');
  closeCustomModal();
}

function showCard(index) {
  const cards = document.querySelectorAll('.about-card-wrapper');
  const totalCards = cards.length;

  if (index >= totalCards) {
    currentCardIndex = 0;
  } else if (index < 0) {
    currentCardIndex = totalCards - 1;
  } else {
    currentCardIndex = index;
  }

  const offset = -currentCardIndex * 100;
  cards.forEach(card => {
    card.style.transform = `translateX(${offset}%)`;
  });
}

function nextCard() {
  showCard(currentCardIndex + 1);
}

function prevCard() {
  showCard(currentCardIndex - 1);
}

// Mostrar o primeiro card ao carregar a página
showCard(currentCardIndex);
=======
function sendMessage() {
  const name = document.getElementById('customer-name').value.trim();
  const message = `Meu nome é ${name}, tenho interesse em ${document.querySelector('.modal .card-title').innerText}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://api.whatsapp.com/send?phone=5581997420369&text=${encodedMessage}`, '_blank');
  closeModal();
}
>>>>>>> 84a1875002d392ab9747ffc11cfb7fb8eab96c5a

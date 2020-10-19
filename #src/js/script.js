'use strict'
//get link with parameters
const paramLinks = document.querySelectorAll('.get-link');
if (paramLinks.length > 0) {
  paramLinks.forEach(link => {
    link.setAttribute('href', link.getAttribute('href') + window.location.search);
  });
}

//footer button
const footerBtn = document.querySelector('.footer__btn-trigger');
footerBtn.addEventListener('click', () => {
  footerBtn.classList.toggle('active');
  footerBtn.classList.contains('active') ? footerBtn.innerText = "Скрыть" : footerBtn.innerText = "Регистрация";
  const footer = document.querySelector('.footer');
  footer.classList.toggle('active');
  document.body.classList.toggle('lock');
});







@@include('scene1.js');





@@include('smoothPageScroll.js');
@@include('webpSupport.js');

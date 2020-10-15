'use strict'
document.addEventListener('DOMContentLoaded', () => {

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
  });

















  function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
});

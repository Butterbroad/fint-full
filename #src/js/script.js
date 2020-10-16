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
    document.body.classList.toggle('lock');
  });



  //scroll test
  // let counter = 0;

  // window.addEventListener('wheel', e => {
  //   const lol = document.querySelector('.lol')

  //   const delta = e.deltaY || e.detail || e.wheelDelta;
  //   console.log(delta)

  //   delta >= 0 ? counter++ : counter--;

  //   console.log(counter)

  //   switch (counter) {
  //     case 0:
  //       lol.classList.remove('active');
  //       break;
  //     case 1:
  //       lol.classList.add('active');
  //       const logo = document.querySelector('.header__logo');
  //       logo.classList.add('white')
  //       break;
  //   }
  // });












  @@include('webpSupport.js')
});

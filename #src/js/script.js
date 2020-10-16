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



  const html = document.documentElement;
  const canvas = document.getElementById("hero-lightpass");
  const context = canvas.getContext("2d");

  const section1 = document.querySelector('.lol1')
  const hero = document.querySelector('.hero')


  const frameCount = 22;
  const currentFrame = index => (
    `../img/animation1/${index.toString().padStart(4, '0')}.jpg`
  )

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const img = new Image()
  img.src = currentFrame(1);
  canvas.width = 600;
  canvas.height = 1080;
  img.onload = function () {
    context.drawImage(img, 0, 0);
  }

  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  }

  window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop - hero.scrollHeight;
    const maxScrollTop = section1.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );

    requestAnimationFrame(() => updateImage(frameIndex + 1))
  });

  preloadImages()









  @@include('webpSupport.js')
});

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



  function init() {
    new SmoothScroll(document, 60, 12) //div px smooth
  }

  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement
        || document.documentElement
        || document.body.parentNode
        || document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
      && document.documentElement
      ? document.documentElement
      : target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
      e.preventDefault(); // disable default scrolling

      var delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

      if (!moving) update()
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
        else
          return -e.detail / 3 // Firefox
      } else
        return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
      moving = true

      var delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }
  init()





  @@include('webpSupport.js')
});

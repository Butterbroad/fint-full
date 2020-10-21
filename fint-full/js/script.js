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






//canvas1
const html = document.documentElement;
const canvas1 = document.getElementById("canvas1");
const sceneOne = document.querySelector('.scene-one');
const hero = document.querySelector('.hero');
let margin1 = hero.scrollHeight;
//canvas2
const sceneTwo = document.querySelector('.scene-two');
const canvas2 = document.getElementById("canvas2");
let margin2 = sceneOne.scrollHeight + hero.scrollHeight;

//canvas3
const canvas3 = document.getElementById("canvas3");

//canvas4
const sceneThree = document.querySelector('.scene-three');
let margin3 = sceneOne.scrollHeight + hero.scrollHeight + sceneTwo.scrollHeight;
const canvas4 = document.getElementById("canvas4");

//sticky section
const sticky = document.querySelector('.sticky');


function getCanvas(canvas, canvasWidth, canvasHeight, wrapper, margin, framecount, path, imgFotmat) {
  const context = canvas.getContext("2d");

  const currentFrame = index => {
    let pathToImg = `${path}/${index.toString().padStart(4, '0')}.${imgFotmat}`
    return pathToImg;
  }
  const preloadImages = () => {
    for (let i = 1; i < framecount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  }
  const img = new Image()
  img.src = currentFrame(1);
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  img.onload = function () {
    context.drawImage(img, 0, 0);
  }

  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  }

  window.addEventListener('scroll', () => {



    const scrollTop = html.scrollTop - margin;
    const maxScrollTop = wrapper.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      framecount - 1,
      Math.ceil(scrollFraction * framecount)
    );
    requestAnimationFrame(() => frameIndex > 0 && updateImage(frameIndex + 1))
  });

  preloadImages();
}

getCanvas(canvas1, 600, 1080, sceneOne, margin1, 23, '../img/scene1/animation1', 'jpg');

getCanvas(canvas2, 600, 1080, sceneTwo, margin2, 32, '../img/scene2/animation2', 'jpg');

getCanvas(canvas3, 350, 220, sceneTwo, margin2, 9, '../img/scene2/animation3', 'svg');

getCanvas(canvas4, 1920, 1080, sceneThree, margin3, 18, '../img/scene3/animation4', 'jpg');






// function showTriggerSection(section) {
//   let top = section.getBoundingClientRect().top;
//   if (top === 0 || top < 0) {
//     section.style.opacity = 1;
//     section.style.pointerEvents = "all";
//   } else {
//     section.style.opacity = 0;
//     section.style.pointerEvents = "none";
//   }
// }
// showTriggerSection(sticky);
//animations
const controller = new ScrollMagic.Controller();
const firstScene = new TimelineMax();

firstScene
  .to('.player-info', 5, { opacity: 1 })
  .to('.player-info', 5, { opacity: 0 }, "+=1")
  .from('.scene-one__box', 10, { left: "-100%" })
  .from('.scene-one__content', 30, { y: '400%' }, '-=30')
  .to('.scene-one__title', 6, { scale: .8, y: '0' })
  .to('.scene-title__num_1', 6, { opacity: 0 }, '-=6')
  .from('.scene-one__list', 6, { opacity: 0, y: '30%' })
  .set('.scene-list__item', { className: "+=scene-list__item active" }, '-=.5')
  .set('.scene-one__box', { zIndex: 10 })
  .to('.scene-one__box', 12, { left: 0, width: '700px', height: '147', y: '100%' })
  .to('.scene-one__title', 6, { y: '-13%' }, '-=12')
  .to('.scene-one__box-title', 6, { opacity: 1, x: 0 })
  .to('.scene-one__box', 6, { height: '650px', top: '-128%' })
  .to('.scene-one__box-title', 6, { y: "30%" })
  .to('.scene-one__box-num', 6, { opacity: 1, y: '30%' })
  .set('.scene-two', { marginTop: '-50%' }, '+=.5')


//scene1
const scene1 = new ScrollMagic.Scene({
  triggerElement: '.scene-one-trigger',
  triggerHook: 100,
  duration: '100%'
})

  .setTween(firstScene)
  .setPin('.scene-one-trigger')
  .addIndicators()
  .addTo(controller);

;

//animations
const secondScene = new TimelineMax();

secondScene
  .to('.scene-two__title', 2, { x: 0 })
  .to('.scene-title__num_2', 2, { opacity: 0 }, '-=2')
  .to('.scene-two__list', 1, { y: 0, opacity: 1 })
  .set('.scene-list__item', { className: "+=scene-list__item active" }, '-=.5')
  .to('.canvas3', 10, { scale: 10, transformOrigin: "center top", x: "300%", y: "-300%" })


//scene1
const scene2 = new ScrollMagic.Scene({
  triggerElement: '.scene-two-trigger',
  triggerHook: 50,
  duration: '100%'
})

  .setTween(secondScene)
  .setPin('.scene-two-trigger')
  .addIndicators()
  .addTo(controller);;



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
init();
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
});;

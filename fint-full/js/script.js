'use strict'
//get link with parameters
const paramLinks = document.querySelectorAll('.get-link');
if (paramLinks.length > 0) {
  paramLinks.forEach(link => {
    link.setAttribute('href', link.getAttribute('href') + window.location.search);
  });
}

//footer button
// const footerBtn = document.querySelector('.footer__btn-trigger');
// footerBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   footerBtn.classList.toggle('active');
//   footerBtn.classList.contains('active') ? footerBtn.innerText = "Скрыть" : footerBtn.innerText = "Регистрация";
//   const footer = document.querySelector('.footer');
//   footer.classList.toggle('active');
//   document.body.classList.toggle('lock');
// });

//navigation
const navigation = document.querySelectorAll('.navigation__list-link');

navigation.forEach(elem => {
  elem.addEventListener('click', e => {
    e.preventDefault();

    if (elem.classList.contains('navigation__list-link_1')) {
      const section2 = document.querySelector('#section2');
      section2.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation__list-link_2')) {
      const section3 = document.querySelector('#section3');
      section3.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation__list-link_3')) {
      const section4 = document.querySelector('#section4');
      section4.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation__list-link_4')) {
      const section5 = document.querySelector('.scene-three-postview');
      section5.scrollIntoView({ behavior: 'auto', block: 'end' });

    } else {
      const section6 = document.querySelector('#section6');
      section6.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  });
})

//navigation-md
const burger = document.querySelector('.navigation-md__burger');
burger.addEventListener('click', () => {
  const navigationMd = document.querySelector('.navigation-md');
  navigationMd.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.classList.toggle('lock');
});

const navigationMd = document.querySelectorAll('.navigation-md__list-link');

navigationMd.forEach(elem => {
  elem.addEventListener('click', e => {
    e.preventDefault();

    if (elem.classList.contains('navigation-md__list-link_1')) {
      const section2 = document.querySelector('#section2');
      section2.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation-md__list-link_2')) {
      const section3 = document.querySelector('#section3');
      section3.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation-md__list-link_3')) {
      const section4 = document.querySelector('#section4');
      section4.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation-md__list-link_4')) {
      const section5 = document.querySelector('.scene-three-postview');
      section5.scrollIntoView({ behavior: 'auto', block: 'end' });

    } else {
      const section6 = document.querySelector('#section6');
      section6.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  });
})


//logo change,mouse show,burger change,scroll show,change header bgc
const logo = document.querySelectorAll('.logo-white');
const mouse = document.querySelector('.footer__mouse');
const header = document.querySelector('.header');

function changeHeader() {
  const top = html.getBoundingClientRect().top;
  if (top < `-${margin1}`) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    header.style.backdropFilter = "blur(9px)";
  } else {
    header.style.backgroundColor = "transparent"
    header.style.backdropFilter = "none";
  }
}


function changeItems() {
  const top = html.getBoundingClientRect().top;
  if (top < `-${margin1}`) {
    logo.forEach(item => {
      item.style.fill = '#000';
    })
    if (window.innerWidth > 1024) {
      mouse.style.display = 'block';
    }
    burger.classList.add('black');
  } else {
    logo.forEach(item => {
      item.style.fill = '#fff';
    })
    mouse.style.display = 'none';
    burger.classList.remove('black');
  }
}
window.addEventListener('scroll', () => {
  changeItems();
  changeHeader();
});



//scene five list
const listTrigger = document.querySelectorAll('.scene-content__column-trigger');
listTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const firstParent = trigger.parentElement;
    const secondParent = firstParent.parentElement;

    secondParent.classList.toggle('active');
  })
});


//hide mouse
const sceneFive = document.querySelector('.scene-five');
window.addEventListener('scroll', () => {
  if (sceneFive.getBoundingClientRect().top < 0) {
    mouse.style.display = 'none';
  }
});









//canvas1
const html = document.documentElement;
const body = document.querySelector('body');
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
const sceneThreePreview = document.querySelector('.scene-three-preview');
let margin3 = sceneOne.scrollHeight + hero.scrollHeight + sceneTwo.scrollHeight;
const canvas4 = document.getElementById("canvas4");

//canvas4
const sceneThree = document.querySelector('.scene-three');
const sceneThreePostview = document.querySelector('.scene-three-postview');
let margin4 = sceneOne.scrollHeight + hero.scrollHeight + sceneTwo.scrollHeight + sceneThree.scrollHeight + 2600;
const canvas5 = document.getElementById("canvas5");

//preload images
window.addEventListener("DOMContentLoaded", preloadImages, true);

let loadedImages = 0;
const imageArrayJPG = new Array("../img/scene1/animation1/0001.jpg", "../img/scene1/animation1/0002.jpg", "../img/scene1/animation1/0003.jpg", "../img/scene1/animation1/0004.jpg", "../img/scene1/animation1/0005.jpg", "../img/scene1/animation1/0006.jpg", "../img/scene1/animation1/0007.jpg", "../img/scene1/animation1/0008.jpg", "../img/scene1/animation1/0009.jpg", "../img/scene1/animation1/0010.jpg", "../img/scene1/animation1/0011.jpg", "../img/scene1/animation1/0012.jpg", "../img/scene1/animation1/0013.jpg", "../img/scene1/animation1/0014.jpg", "../img/scene1/animation1/0015.jpg", "../img/scene1/animation1/0016.jpg", "../img/scene1/animation1/0017.jpg", "../img/scene1/animation1/0018.jpg", "../img/scene1/animation1/0019.jpg", "../img/scene1/animation1/0020.jpg", "../img/scene1/animation1/0021.jpg", "../img/scene1/animation1/0022.jpg", "../img/scene1/animation1/0023.jpg",
  "../img/scene2/animation2/0001.jpg", "../img/scene2/animation2/0002.jpg", "../img/scene2/animation2/0003.jpg", "../img/scene2/animation2/0004.jpg", "../img/scene2/animation2/0005.jpg", "../img/scene2/animation2/0006.jpg", "../img/scene2/animation2/0007.jpg", "../img/scene2/animation2/0008.jpg", "../img/scene2/animation2/0009.jpg", "../img/scene2/animation2/0010.jpg", "../img/scene2/animation2/0011.jpg", "../img/scene2/animation2/0012.jpg", "../img/scene2/animation2/0013.jpg", "../img/scene2/animation2/0014.jpg", "../img/scene2/animation2/0015.jpg", "../img/scene2/animation2/0016.jpg", "../img/scene2/animation2/0017.jpg", "../img/scene2/animation2/0018.jpg", "../img/scene2/animation2/0019.jpg", "../img/scene2/animation2/0020.jpg", "../img/scene2/animation2/0021.jpg", "../img/scene2/animation2/0022.jpg", "../img/scene2/animation2/0023.jpg", "../img/scene2/animation2/0024.jpg", "../img/scene2/animation2/0025.jpg", "../img/scene2/animation2/0026.jpg", "../img/scene2/animation2/0027.jpg", "../img/scene2/animation2/0028.jpg", "../img/scene2/animation2/0029.jpg", "../img/scene2/animation2/0030.jpg", "../img/scene2/animation2/0031.jpg", "../img/scene2/animation2/0032.jpg",
  "../img/scene2/animation3/0001.svg", "../img/scene2/animation3/0002.svg", "../img/scene2/animation3/0003.svg", "../img/scene2/animation3/0004.svg", "../img/scene2/animation3/0005.svg", "../img/scene2/animation3/0006.svg", "../img/scene2/animation3/0007.svg", "../img/scene2/animation3/0008.svg", "../img/scene2/animation3/0009.svg",
  "../img/scene3/animation4/0001.jpg", "../img/scene3/animation4/0002.jpg", "../img/scene3/animation4/0003.jpg", "../img/scene3/animation4/0004.jpg", "../img/scene3/animation4/0005.jpg", "../img/scene3/animation4/0006.jpg", "../img/scene3/animation4/0007.jpg", "../img/scene3/animation4/0008.jpg", "../img/scene3/animation4/0009.jpg", "../img/scene3/animation4/0010.jpg", "../img/scene3/animation4/0011.jpg", "../img/scene3/animation4/0012.jpg", "../img/scene3/animation4/0013.jpg", "../img/scene3/animation4/0014.jpg", "../img/scene3/animation4/0015.jpg", "../img/scene3/animation4/0016.jpg", "../img/scene3/animation4/0017.jpg",
  "../img/scene3/animation5/0001.jpg", "../img/scene3/animation5/0002.jpg", "../img/scene3/animation5/0003.jpg", "../img/scene3/animation5/0004.jpg", "../img/scene3/animation5/0005.jpg", "../img/scene3/animation5/0006.jpg", "../img/scene3/animation5/0007.jpg", "../img/scene3/animation5/0008.jpg", "../img/scene3/animation5/0009.jpg", "../img/scene3/animation5/0010.jpg", "../img/scene3/animation5/0011.jpg", "../img/scene3/animation5/0012.jpg", "../img/scene3/animation5/0013.jpg", "../img/scene3/animation5/0014.jpg", "../img/scene3/animation5/0015.jpg", "../img/scene3/animation5/0016.jpg", "../img/scene3/animation5/0017.jpg", "../img/scene3/animation5/0018.jpg", "../img/scene3/animation5/0019.jpg", "../img/scene3/animation5/0020.jpg", "../img/scene3/animation5/0021.jpg", "../img/scene3/animation5/0022.jpg", "../img/scene3/animation5/0023.jpg", "../img/scene3/animation5/0024.jpg", "../img/scene3/animation5/0025.jpg", "../img/scene3/animation5/0026.jpg", "../img/scene3/animation5/0027.jpg", "../img/scene3/animation5/0028.jpg", "../img/scene3/animation5/0029.jpg", "../img/scene3/animation5/0030.jpg", "../img/scene3/animation5/0031.jpg", "../img/scene3/animation5/0032.jpg", "../img/scene3/animation5/0033.jpg", "../img/scene3/animation5/0034.jpg", "../img/scene3/animation5/0035.jpg", "../img/scene3/animation5/0036.jpg", "../img/scene3/animation5/0037.jpg", "../img/scene3/animation5/0038.jpg", "../img/scene3/animation5/0039.jpg", "../img/scene3/animation5/0040.jpg", "../img/scene3/animation5/0041.jpg", "../img/scene3/animation5/0042.jpg", "../img/scene3/animation5/0043.jpg", "../img/scene3/animation5/0044.jpg", "../img/scene3/animation5/0045.jpg", "../img/scene3/animation5/0046.jpg", "../img/scene3/animation5/0047.jpg", "../img/scene3/animation5/0048.jpg", "../img/scene3/animation5/0049.jpg", "../img/scene3/animation5/0050.jpg", "../img/scene3/animation5/0051.jpg", "../img/scene3/animation5/0052.jpg", "../img/scene3/animation5/0053.jpg", "../img/scene3/animation5/0054.jpg", "../img/scene3/animation5/0055.jpg", "../img/scene3/animation5/0056.jpg", "../img/scene3/animation5/0057.jpg", "../img/scene3/animation5/0058.jpg", "../img/scene3/animation5/0059.jpg", "../img/scene3/animation5/0060.jpg", "../img/scene3/animation5/0061.jpg", "../img/scene3/animation5/0062.jpg", "../img/scene3/animation5/0063.jpg", "../img/scene3/animation5/0064.jpg");

function preloadImages(e) {
  for (var i = 0; i < imageArrayJPG.length; i++) {
    var tempImage = new Image();

    tempImage.addEventListener("load", trackProgress, true);
    tempImage.src = imageArrayJPG[i];
  }
}

function trackProgress() {
  loadedImages++;

  if (loadedImages == imageArrayJPG.length) {
    imagesLoaded();
  }
}

function imagesLoaded() {
  getCanvas(canvas1, 600, 1080, sceneOne, margin1, 23, '../img/scene1/animation1', 'jpg');

  getCanvas(canvas2, 600, 1080, sceneTwo, margin2, 32, '../img/scene2/animation2', 'jpg');

  getCanvas(canvas3, 350, 220, sceneTwo, margin2, 9, '../img/scene2/animation3', 'svg');

  getCanvas(canvas4, 1920, 2000, sceneThreePreview, margin3, 17, '../img/scene3/animation4', 'jpg');

  getCanvas(canvas5, 1920, 2000, sceneThreePostview, margin4, 64, '../img/scene3/animation5', 'jpg');

}




//img format
function getFormat(imgFormat) {
  if (body.classList.contains('webp') && imgFormat === 'svg') {
    return 'svg'
  } else if (body.classList.contains('webp')) {
    return 'webp'
  } else {
    return imgFormat
  }
}

function getCanvas(canvas, canvasWidth, canvasHeight, wrapper, margin, framecount, path, imgFormat) {

  const context = canvas.getContext("2d");

  const currentFrame = index => {
    let pathToImg = `${path}/${index.toString().padStart(4, '0')}.${getFormat(imgFormat)}`
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







;
//animations
const controller = new ScrollMagic.Controller();
const firstScene = new TimelineMax();

if (window.innerWidth < 1025 && window.innerWidth > 640) {
  firstScene
    .to('.canvas1', 5, { x: '-20%' }, '+=1')
    .from('.scene-one__content', 5, { opacity: 0 }, '-=5')
    .to('.scene-title__num_1', 10, { opacity: 0 }, '-=5')
    .to('.scene-one__content', 5, { y: '40%' })
    .to('.scene-one__list', 5, { opacity: 1, y: '60' }, '-=5')
    .to('.scene-one__box', 10, { y: '43%' })
    .set('.scene-two', { marginTop: '-100vh' }, '+=.5')
    .set('.scene-two__list', { y: '300%' })

} else if (window.innerWidth < 641) {
  firstScene
    .to('.scene-one__content', 5, { y: '60%' })
    .to('.scene-one__content', 5, { y: '7%' }, '+=2')
    .to('.scene-title__num_1', 5, { opacity: 0 }, '-=5')
    .to('.scene-list', 5, { opacity: 1, y: '35%' }, "-=5")
    .to('.scene-one__box', 10, { y: '43%' })
    .set('.scene-two', { marginTop: '-100vh' }, '+=.5')
    .set('.scene-two__list', { y: '300%' })
} else {
  firstScene
    .to('.player-info', 5, { opacity: 1 })
    .to('.player-info', 5, { opacity: 0 }, "+=1")
    .from('.scene-one__box', 10, { left: "-150%" })
    .from('.scene-one__content', 30, { y: '400%' }, '-=30')
    .to('.scene-one__title', 6, { scale: .8, y: '0' })
    .to('.scene-title__num_1', 6, { opacity: 0 }, '-=6')
    .from('.scene-one__list', 6, { opacity: 0, y: '30%' })
    .set('.scene-list__item', { className: "+=scene-list__item active" }, '-=.5')
    .set('.scene-one__box', { zIndex: 10 })
    .to('.scene-one__box', 12, { left: 0, width: '700px', height: '147', y: '90%' })
    .to('.scene-one__title', 6, { y: '-13%' }, '-=12')
    .to('.scene-one__box-title', 6, { opacity: 1, x: 0 })
    .to('.scene-one__box', 6, { height: '650px', top: '-128%' })
    .to('.scene-one__box-title', 6, { y: "30%" })
    .to('.scene-one__box-num', 6, { opacity: 1, y: '30%' })
    .set('.scene-two', { marginTop: '-100vh' }, '+=.5')
    .set('.scene-two__list', { y: '300%' })
}

//scene1
const scene1 = new ScrollMagic.Scene({
  triggerElement: '.scene-one-trigger',
  triggerHook: 100,
  duration: '100%'
})

  .setTween(firstScene)
  .setPin('.scene-one-trigger')
  .addTo(controller);

;

//animations
const secondScene = new TimelineMax();

if (window.innerWidth < 641 && window.innerWidth > 414) {
  secondScene
    .to('.canvas2', 1, { scale: '1.5', transformOrigin: 'center top' })
    .to('.canvas2', .5, { opacity: 0 })
    .to('.canvas3', 5, { x: 0, y: '-150%' }, '-=.5')
    .to('.scene-two__title', 5, { y: '-330%' }, '-=5')
    .to('.scene-title__num_2', 5, { opacity: 0 }, '-=5')
    .to('.scene-two__list', 5, { y: '-420%' }, '-=5')
    .set('.scene-list__item', { className: "+=scene-list__item active" }, '-=.5')
    .to('.canvas3', 10, { scale: 10, transformOrigin: "center top", x: "300%", y: "-300%" })
    .set('.scene-three-preview', { zIndex: '5' })

} else if (window.innerWidth < 415 && window.innerWidth > 568) {
  secondScene
    .to('.canvas2', 1, { scale: '1.5', transformOrigin: 'center top' }, '+=1')
    .to('.canvas2', .1, { opacity: 0 })
    .to('.canvas3', 5, { x: 0, y: '-150%' }, '-=.5')
    .to('.scene-two__title', 5, { y: '-350%' }, '-=5')
    .to('.scene-title__num_2', 5, { opacity: 0 }, '-=5')
    .to('.scene-two__list', 5, { y: '-220%' }, '-=5')
    .set('.scene-list__item', { className: "+=scene-list__item active" }, '-=.5')
    .to('.canvas3', 10, { scale: 10, transformOrigin: "center top", x: "300%", y: "-300%" })
    .set('.scene-three-preview', { zIndex: '5' })

} else if (window.innerWidth < 340) {
  secondScene
    .fromTo('.scene-two__title', { y: '400%' }, { y: '-200%', duration: 1 })
    .to('.canvas2', 1, { scale: '1.5', transformOrigin: 'center top' }, '+=1')
    .to('.canvas2', .1, { opacity: 0 })
    .to('.canvas3', 5, { x: 0, y: '-110%' }, '-=.5')
    .to('.scene-two__title', 5, { y: '-550%' }, '-=5')
    .to('.scene-title__num_2', 5, { opacity: 0 }, '-=5')
    .to('.scene-two__list', 5, { y: '-175%' }, '-=5')
    .to('.canvas3', 10, { scale: 10, transformOrigin: "center top", x: "300%", y: "-300%" })
    .set('.scene-three-preview', { zIndex: '5' })
} else {
  secondScene
    .to('.scene-two__title', 2, { x: 0 })
    .to('.scene-title__num_2', 2, { opacity: 0 }, '-=2')
    .to('.scene-two__list', 1, { y: 0, opacity: 1 })
    .set('.scene-list__item', { className: "+=scene-list__item active" }, '-=.5')
    .to('.canvas3', 10, { scale: 10, transformOrigin: "center top", x: "300%", y: "-300%" })
    .set('.scene-three-preview', { zIndex: '5' })
}

//scene1
const scene2 = new ScrollMagic.Scene({
  triggerElement: '.scene-two-trigger',
  triggerHook: 50,
  duration: '100%'
})

  .setTween(secondScene)
  .setPin('.scene-two-trigger')
  .addTo(controller);;
//animations
const thirdScenePrev = new TimelineMax();

thirdScenePrev
  .from('.scene-three__title', 1, { y: '200%', opacity: 0 })
  .to('.scene-three__subtitle-word_1', .5, { opacity: 1, x: '65%' })
  .to('.scene-three__subtitle-word_1', .5, { x: '14%' })
  .to('.scene-three__subtitle-word_3', .5, { opacity: 1, x: '-14%' }, '-=.5')
  .to('.scene-three__subtitle-word_1', .5, { x: '0%' })
  .to('.scene-three__subtitle-word_3', .5, { x: '0%' }, '-=.5')
  .to('.scene-three__subtitle-word_2', .5, { opacity: 1, y: '0%' }, '-=.5')
  .to('.scene-three__title', .5, { y: '-20%' })
  .to('.scene-three__num', .5, { opacity: 0 }, '-=.5')
  .to('.scene-three__text', .5, { opacity: 1, y: '-50%' }, '-=.5')
  .set('.scene-three-postview', { marginTop: '-100vh' })




//scene3
const scene3prev = new ScrollMagic.Scene({
  triggerElement: '.scene-three-trigger',
  triggerHook: 50,
  duration: '100%'
})

  .setTween(thirdScenePrev)
  .setPin('.scene-three-trigger')
  .addTo(controller);


const thirdScenePost = new TimelineMax();


if (window.innerWidth < 1601 && innerHeight > 899) {
  thirdScenePost
    .to('.iphone', .1, { opacity: 1 }, '+=5')
    .to('.iphone', 5, { scale: 20, y: '200%', x: '100%', transformOrigin: 'center center' })
    .set('.canvas5', { opacity: 0 })
    .set('.iphone', { display: 'none' })
    .set('.scene-four', { marginTop: '-200vh' })
} else if (window.innerWidth < 1367) {
  thirdScenePost
    .to('.iphone', .1, { opacity: 1 }, '+=12')
    .to('.iphone', 5, { scale: 20, y: '200%', x: '100%', transformOrigin: 'center center' })
    .set('.canvas5', { opacity: 0 })
    .set('.iphone', { display: 'none' })
    .set('.scene-four', { marginTop: '-200vh' })
} else if (window.innerWidth < 1281) {
  thirdScenePost
    .to('.iphone', .1, { opacity: 1 }, '+=25')
    .to('.iphone', 5, { scale: 20, y: '200%', x: '100%', transformOrigin: 'center center' })
    .set('.canvas5', { opacity: 0 })
    .set('.iphone', { display: 'none' })
    .set('.scene-four', { marginTop: '-200vh' })
} else {
  thirdScenePost
    .to('.iphone', .1, { opacity: 1 }, '+=2.5')
    .to('.iphone', 5, { scale: 20, y: '200%', x: '100%', transformOrigin: 'center center' })
    .set('.canvas5', { opacity: 0 })
    .set('.iphone', { display: 'none' })
    .set('.scene-four', { marginTop: '-200vh' })
}


//scene3(2)
const scene3post = new ScrollMagic.Scene({
  triggerElement: '.scene-three-trigger_2',
  triggerHook: 30,
  duration: '175%'
})
  .setTween(thirdScenePost)
  .setPin('.scene-three-trigger_2')
  .addTo(controller);
;
//animations
const fourthScene = new TimelineMax();



if (window.innerWidth < 1025) {
  fourthScene
    .to('.scene-four__title', 1, { y: '-20%' }, '+=1')
    .to('.scene-four__num', 1, { opacity: 0 }, '-=1')
    .to('.scene-four__text', 1, { opacity: 1, y: '-180%' }, '-=1')
    .set('.scene-five', { marginTop: '-100vh' })

} else {
  fourthScene
    .to('.scene-four__title', 1, { y: '-50%' }, '+=1')
    .to('.scene-four__num', 1, { opacity: 0 }, '-=1')
    .to('.scene-four__text', 1, { opacity: 1, y: '-300%' }, '-=1')
    .set('.scene-five', { marginTop: '-100vh' })
}


//scene4
const scene4 = new ScrollMagic.Scene({
  triggerElement: '.scene-four-trigger',
  triggerHook: 100,
  duration: '100%'
})

  .setTween(fourthScene)
  .setPin('.scene-four-trigger')
  .addTo(controller);;
//animations
const fifthScene = new TimelineMax();

fifthScene
  .to('.scene-five__hero', 2, { scale: 1 })
  .set('.scene-five', { backgroundColor: '#EDEDED' })
  .set('.scene-five', { marginTop: '0' })



//scene4
const scene5 = new ScrollMagic.Scene({
  triggerElement: '.scene-five',
  triggerHook: 100,
  duration: '100%'
})

  .setTween(fifthScene)
  .setPin('.scene-five')
  .addTo(controller);;


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

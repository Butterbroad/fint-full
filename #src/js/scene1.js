//Canvas
const html = document.documentElement;
const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
const sceneOne = document.querySelector('.scene-one')
const hero = document.querySelector('.hero')
const sticky = document.querySelector('.sticky');
const frameCount = 23;


const currentFrame = index => (
  `../img/scene1/animation1/${index.toString().padStart(4, '0')}.jpg`
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
  function showTriggerSection(section) {
    let top = section.getBoundingClientRect().top;
    if (top === 0 || top < 0) {
      section.style.opacity = 1;
      section.style.pointerEvents = "all";
    } else {
      section.style.opacity = 0;
      section.style.pointerEvents = "none";
    }
    console.log(top)
  }
  showTriggerSection(sticky)


  const scrollTop = html.scrollTop - hero.scrollHeight;
  const maxScrollTop = sceneOne.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => frameIndex > 0 && updateImage(frameIndex + 1))
});

preloadImages();






//animations
const controller = new ScrollMagic.Controller();
const firstScene = new TimelineMax();

firstScene
  .to('.player-info', 5, { opacity: 1 })
  .to('.player-info', 5, { opacity: 0 }, "+=1")
  .from('.scene-one__box', 10, { left: "-100%" })
  .from('.scene-one__content', 30, { y: '400%' }, '-=30')
  .to('.scene-title', 6, { scale: .8, y: '0' })
  .to('.scene-title__num', 6, { opacity: 0 }, '-=6')
  .from('.scene-list', 6, { opacity: 0, y: '30%' })
  .set('.scene-one__box', { zIndex: 10 })
  .to('.scene-one__box', 12, { left: 0, width: '700px', height: '147', y: '100%' })
  .to('.scene-title', 6, { y: '-13%' }, '-=12')
  .to('.scene-one__box-title', 6, { opacity: 1, x: 0 })
  .to('.scene-one__box', 6, { height: '700px', top: '-146%' })
  .to('.scene-one__box-title', 6, { y: "30%" })
  .to('.scene-one__box-num', 6, { opacity: 1, y: '30%' })


//scene1
const scene1 = new ScrollMagic.Scene({
  triggerElement: '.scene-one-trigger',
  triggerHook: 100,
  duration: '100%'
})

  .setTween(firstScene)
  .setPin('.scene-one__wrapper')
  .addIndicators()
  .addTo(controller);


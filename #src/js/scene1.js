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


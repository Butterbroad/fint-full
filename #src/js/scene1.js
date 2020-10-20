






//animations
const controller = new ScrollMagic.Controller();
const firstScene = new TimelineMax();

firstScene
  .to('.player-info', 5, { opacity: 1 })
  .to('.player-info', 5, { opacity: 0 }, "+=1")
  .from('.scene-one__box', 10, { left: "-100%" })
  .from('.scene-one__content', 30, { y: '400%' }, '-=30')
  .to('.scene-title', 6, { scale: .8, y: '0' })
  .to('.scene-title__num_1', 6, { opacity: 0 }, '-=6')
  .from('.scene-list', 6, { opacity: 0, y: '30%' })
  .set('.scene-one__box', { zIndex: 10 })
  .to('.scene-one__box', 12, { left: 0, width: '700px', height: '147', y: '100%' })
  .to('.scene-title', 6, { y: '-13%' }, '-=12')
  .to('.scene-one__box-title', 6, { opacity: 1, x: 0 })
  .to('.scene-one__box', 6, { height: '650px', top: '-135%' })
  .to('.scene-one__box-title', 6, { y: "30%" })
  .to('.scene-one__box-num', 6, { opacity: 1, y: '30%' })
  .to('.scene-two', .1, { marginTop: '-65%' })


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


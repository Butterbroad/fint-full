//animations
const thirdScene = new TimelineMax();

thirdScene
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




//scene1
const scene3 = new ScrollMagic.Scene({
  triggerElement: '.scene-three-trigger',
  triggerHook: 50,
  duration: '100%'
})

  .setTween(thirdScene)
  .setPin('.scene-three-trigger')
  .addIndicators()
  .addTo(controller);
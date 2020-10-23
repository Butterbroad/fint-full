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
  .addIndicators()
  .addTo(controller);







const thirdScenePost = new TimelineMax();

thirdScenePost
  .to('.iphone', .1, { opacity: 1 }, '+=2.5')
  .to('.iphone', 5, { scale: 20, y: '200%', x: '100%', transformOrigin: 'center center' })
  .set('.canvas5', { opacity: 0 })
  .set('.iphone', { display: 'none' })
  .set('.scene-four', { marginTop: '-200vh' })


//scene3(2)
const scene3post = new ScrollMagic.Scene({
  triggerElement: '.scene-three-trigger_2',
  triggerHook: 30,
  duration: '175%'
})
  .setTween(thirdScenePost)
  .setPin('.scene-three-trigger_2')
  .addIndicators()
  .addTo(controller);

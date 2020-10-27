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
  .addIndicators()
  .addTo(controller);
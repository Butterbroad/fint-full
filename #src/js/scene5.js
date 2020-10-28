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
  .addTo(controller);
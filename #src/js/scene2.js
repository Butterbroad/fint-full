//animations
const secondScene = new TimelineMax();



secondScene
  .to('.scene-two__title', 2, { x: 0 })
  .to('.scene-title__num_2', 2, { opacity: 0 }, '-=2')
  .to('.scene-two__list', 1, { y: 0, opacity: 1 })
  .set('.scene-list__item', { className: "+=scene-list__item active" }, '-=.5')
  .to('.canvas3', 10, { scale: 10, transformOrigin: "center top", x: "300%", y: "-300%" })
  .set('.scene-three-preview', { zIndex: '5' })


//scene1
const scene2 = new ScrollMagic.Scene({
  triggerElement: '.scene-two-trigger',
  triggerHook: 50,
  duration: '100%'
})

  .setTween(secondScene)
  .setPin('.scene-two-trigger')
  .addIndicators()
  .addTo(controller);
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
  .addIndicators()
  .addTo(controller);
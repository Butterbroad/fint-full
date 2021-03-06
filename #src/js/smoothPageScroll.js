//navigation variables
const navigation = document.querySelectorAll('.navigation__list-link');
const navigationMd = document.querySelectorAll('.navigation-md__list-link');

function init() {
  new SmoothScroll(document, 80, 30) //div px smooth
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target = (document.scrollingElement
      || document.documentElement
      || document.body.parentNode
      || document.body) // cross browser support for document scrolling

  let moving = false
  let pos = target.scrollTop

  //navigation
  navigation.forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      if (elem.classList.contains('navigation__list-link_1')) {
        const section2 = document.querySelector('#section2');
        const sectionTop = section2.getBoundingClientRect().top;
        pos = sectionTop;
        section2.scrollIntoView({ behavior: 'auto', block: 'start' })
      } else if (elem.classList.contains('navigation__list-link_2')) {
        const section3 = document.querySelector('#section3');
        const sectionTop = section3.getBoundingClientRect().top;
        pos = sectionTop;
        section3.scrollIntoView({ behavior: 'auto', block: 'start' })
      } else if (elem.classList.contains('navigation__list-link_3')) {
        const section4 = document.querySelector('#section4');
        const sectionTop = section4.getBoundingClientRect().top;
        pos = sectionTop;
        section4.scrollIntoView({ behavior: 'auto', block: 'start' })
      } else if (elem.classList.contains('navigation__list-link_4')) {
        const section5 = document.querySelector('#section5');
        const sectionTop = section5.getBoundingClientRect().top;
        pos = sectionTop;
        section5.scrollIntoView({ behavior: 'auto', block: 'start' })
      } else {
        const section6 = document.querySelector('#section6');
        const sectionTop = section6.getBoundingClientRect().top;
        pos = sectionTop;
        section6.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    });
  })

  //navigation md
  navigationMd.forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      if (elem.classList.contains('navigation-md__list-link_1')) {
        const section2 = document.querySelector('#section2');
        const sectionTop = section2.getBoundingClientRect().top;
        pos = sectionTop;
        section2.scrollIntoView({ behavior: 'auto', block: 'start' })
      } else if (elem.classList.contains('navigation-md__list-link_2')) {
        const section3 = document.querySelector('#section3');
        const sectionTop = section3.getBoundingClientRect().top;
        pos = sectionTop;
        section3.scrollIntoView({ behavior: 'auto', block: 'start' })
      } else if (elem.classList.contains('navigation-md__list-link_3')) {
        const section4 = document.querySelector('#section4');
        const sectionTop = section4.getBoundingClientRect().top;
        pos = sectionTop;
        section4.scrollIntoView({ behavior: 'auto', block: 'start' })
      } else if (elem.classList.contains('navigation-md__list-link_4')) {
        const section5 = document.querySelector('#section5');
        const sectionTop = section5.getBoundingClientRect().top;
        pos = sectionTop;
        section5.scrollIntoView({ behavior: 'auto', block: 'start' })
      } else {
        const section6 = document.querySelector('#section6');
        const sectionTop = section6.getBoundingClientRect().top;
        pos = sectionTop;
        section6.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    });
  });

  let frame = target === document.body
    && document.documentElement
    ? document.documentElement
    : target // safari is the new IE

  target.addEventListener('mousewheel', scrolled, { passive: false })
  target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    let delta = normalizeWheelDelta(e)

    pos += -delta * speed / 2
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

    if (!moving) update()
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
      else
        return -e.detail / 3 // Firefox
    } else
      return e.wheelDelta / 120 // IE,Safari,Chrome
  }

  function update() {
    moving = true

    let delta = (pos - target.scrollTop) / smooth

    target.scrollTop += delta

    if (Math.abs(delta) > 0.5)
      requestFrame(update)
    else
      moving = false
  }

  let requestFrame = function () { // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  }()
}
init()
'use strict'
//get link with parameters
const paramLinks = document.querySelectorAll('.get-link');
if (paramLinks.length > 0) {
  paramLinks.forEach(link => {
    link.setAttribute('href', link.getAttribute('href') + window.location.search);
  });
}

//footer button
// const footerBtn = document.querySelector('.footer__btn-trigger');
// footerBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   footerBtn.classList.toggle('active');
//   footerBtn.classList.contains('active') ? footerBtn.innerText = "Скрыть" : footerBtn.innerText = "Регистрация";
//   const footer = document.querySelector('.footer');
//   footer.classList.toggle('active');
//   document.body.classList.toggle('lock');
// });

//navigation
const navigation = document.querySelectorAll('.navigation__list-link');

navigation.forEach(elem => {
  elem.addEventListener('click', e => {
    e.preventDefault();

    if (elem.classList.contains('navigation__list-link_1')) {
      const section2 = document.querySelector('#section2');
      section2.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation__list-link_2')) {
      const section3 = document.querySelector('#section3');
      section3.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation__list-link_3')) {
      const section4 = document.querySelector('#section4');
      section4.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation__list-link_4')) {
      const section5 = document.querySelector('.scene-three-postview');
      section5.scrollIntoView({ behavior: 'auto', block: 'end' });

    } else {
      const section6 = document.querySelector('#section6');
      section6.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  });
})

//navigation-md
const burger = document.querySelector('.navigation-md__burger');
burger.addEventListener('click', () => {
  const navigationMd = document.querySelector('.navigation-md');
  navigationMd.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.classList.toggle('lock');
});

const navigationMd = document.querySelectorAll('.navigation-md__list-link');

navigationMd.forEach(elem => {
  elem.addEventListener('click', e => {
    e.preventDefault();

    if (elem.classList.contains('navigation-md__list-link_1')) {
      const section2 = document.querySelector('#section2');
      section2.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation-md__list-link_2')) {
      const section3 = document.querySelector('#section3');
      section3.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation-md__list-link_3')) {
      const section4 = document.querySelector('#section4');
      section4.scrollIntoView({ behavior: 'auto', block: 'start' });

    } else if (elem.classList.contains('navigation-md__list-link_4')) {
      const section5 = document.querySelector('.scene-three-postview');
      section5.scrollIntoView({ behavior: 'auto', block: 'end' });

    } else {
      const section6 = document.querySelector('#section6');
      section6.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  });
})


//logo change,mouse show,burger change,scroll show,change header bgc
const logo = document.querySelectorAll('.logo-white');
const mouse = document.querySelector('.footer__mouse');
const header = document.querySelector('.header');

function changeHeader() {
  const top = html.getBoundingClientRect().top;
  if (top < `-${margin1}`) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    header.style.backdropFilter = "blur(9px)";
  } else {
    header.style.backgroundColor = "transparent"
    header.style.backdropFilter = "none";
  }
}


function changeItems() {
  const top = html.getBoundingClientRect().top;
  if (top < `-${margin1}`) {
    logo.forEach(item => {
      item.style.fill = '#000';
    })
    if (window.innerWidth > 1024) {
      mouse.style.display = 'block';
    }
    burger.classList.add('black');
  } else {
    logo.forEach(item => {
      item.style.fill = '#fff';
    })
    mouse.style.display = 'none';
    burger.classList.remove('black');
  }
}
window.addEventListener('scroll', () => {
  changeItems();
  changeHeader();
});



//scene five list
const listTrigger = document.querySelectorAll('.scene-content__column-trigger');
listTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const firstParent = trigger.parentElement;
    const secondParent = firstParent.parentElement;

    secondParent.classList.toggle('active');
  })
});


//hide mouse
const sceneFive = document.querySelector('.scene-five');
window.addEventListener('scroll', () => {
  if (sceneFive.getBoundingClientRect().top < 0) {
    mouse.style.display = 'none';
  }
});









@@include('canvases-test.js');
@@include('scene1.js');

@@include('scene2.js');
@@include('scene3.js');
@@include('scene4.js');
@@include('scene5.js');


@@include('webpSupport.js');

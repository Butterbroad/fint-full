//canvas1
const html = document.documentElement;
const canvas1 = document.getElementById("canvas1");
const sceneOne = document.querySelector('.scene-one');
const hero = document.querySelector('.hero');
let margin1 = hero.scrollHeight;
//canvas2
const sceneTwo = document.querySelector('.scene-two');
const canvas2 = document.getElementById("canvas2");
let margin2 = sceneOne.scrollHeight + hero.scrollHeight;

//canvas3
const canvas3 = document.getElementById("canvas3");

//canvas4
const sceneThreePreview = document.querySelector('.scene-three-preview');
let margin3 = sceneOne.scrollHeight + hero.scrollHeight + sceneTwo.scrollHeight;
const canvas4 = document.getElementById("canvas4");

//canvas4
const sceneThree = document.querySelector('.scene-three');
const sceneThreePostview = document.querySelector('.scene-three-postview');
let margin4 = sceneOne.scrollHeight + hero.scrollHeight + sceneTwo.scrollHeight + sceneThree.scrollHeight + 2600;
const canvas5 = document.getElementById("canvas5");

//sticky section
const sticky = document.querySelector('.sticky');


function getCanvas(canvas, canvasWidth, canvasHeight, wrapper, margin, framecount, path, imgFotmat) {
  const context = canvas.getContext("2d");

  const currentFrame = index => {
    let pathToImg = `${path}/${index.toString().padStart(4, '0')}.${imgFotmat || 'webp'}`
    return pathToImg;
  }
  const preloadImages = () => {
    for (let i = 1; i < framecount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  }
  const img = new Image()
  img.src = currentFrame(1);
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  img.onload = function () {
    context.drawImage(img, 0, 0);
  }

  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  }

  window.addEventListener('scroll', () => {



    const scrollTop = html.scrollTop - margin;
    const maxScrollTop = wrapper.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      framecount - 1,
      Math.ceil(scrollFraction * framecount)
    );
    requestAnimationFrame(() => frameIndex > 0 && updateImage(frameIndex + 1))
  });

  preloadImages();
}

getCanvas(canvas1, 600, 1080, sceneOne, margin1, 23, '../img/scene1/animation1', 'jpg');

getCanvas(canvas2, 600, 1080, sceneTwo, margin2, 32, '../img/scene2/animation2', 'jpg');

getCanvas(canvas3, 350, 220, sceneTwo, margin2, 9, '../img/scene2/animation3', 'svg');

getCanvas(canvas4, 1920, 1080, sceneThreePreview, margin3, 18, '../img/scene3/animation4', 'jpg');

getCanvas(canvas5, 1920, 1080, sceneThreePostview, margin4, 64, '../img/scene3/animation5', 'jpg');






// function showTriggerSection(section) {
//   let top = section.getBoundingClientRect().top;
//   if (top === 0 || top < 0) {
//     section.style.opacity = 1;
//     section.style.pointerEvents = "all";
//   } else {
//     section.style.opacity = 0;
//     section.style.pointerEvents = "none";
//   }
// }
// showTriggerSection(sticky)
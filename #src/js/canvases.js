//canvas1
const html = document.documentElement;
const body = document.querySelector('body');
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

//preload images
window.addEventListener("DOMContentLoaded", preloadImages, true);

let loadedImages = 0;
// const imageArray = new Array("../img/scene1/animation1/0001.jpg", "../img/scene1/animation1/0002.jpg", "../img/scene1/animation1/0003.jpg", "../img/scene1/animation1/0004.jpg", "../img/scene1/animation1/0005.jpg", "../img/scene1/animation1/0006.jpg", "../img/scene1/animation1/0007.jpg", "../img/scene1/animation1/0008.jpg", "../img/scene1/animation1/0009.jpg", "../img/scene1/animation1/0010.jpg", "../img/scene1/animation1/0011.jpg", "../img/scene1/animation1/0012.jpg", "../img/scene1/animation1/0013.jpg", "../img/scene1/animation1/0014.jpg", "../img/scene1/animation1/0015.jpg", "../img/scene1/animation1/0016.jpg", "../img/scene1/animation1/0017.jpg", "../img/scene1/animation1/0018.jpg", "../img/scene1/animation1/0019.jpg", "../img/scene1/animation1/0020.jpg", "../img/scene1/animation1/0021.jpg", "../img/scene1/animation1/0022.jpg", "../img/scene1/animation1/0023.jpg",
//   "../img/scene2/animation2/0001.jpg", "../img/scene2/animation2/0002.jpg", "../img/scene2/animation2/0003.jpg", "../img/scene2/animation2/0004.jpg", "../img/scene2/animation2/0005.jpg", "../img/scene2/animation2/0006.jpg", "../img/scene2/animation2/0007.jpg", "../img/scene2/animation2/0008.jpg", "../img/scene2/animation2/0009.jpg", "../img/scene2/animation2/0010.jpg", "../img/scene2/animation2/0011.jpg", "../img/scene2/animation2/0012.jpg", "../img/scene2/animation2/0013.jpg", "../img/scene2/animation2/0014.jpg", "../img/scene2/animation2/0015.jpg", "../img/scene2/animation2/0016.jpg", "../img/scene2/animation2/0017.jpg", "../img/scene2/animation2/0018.jpg", "../img/scene2/animation2/0019.jpg", "../img/scene2/animation2/0020.jpg", "../img/scene2/animation2/0021.jpg", "../img/scene2/animation2/0022.jpg", "../img/scene2/animation2/0023.jpg", "../img/scene2/animation2/0024.jpg", "../img/scene2/animation2/0025.jpg", "../img/scene2/animation2/0026.jpg", "../img/scene2/animation2/0027.jpg", "../img/scene2/animation2/0028.jpg", "../img/scene2/animation2/0029.jpg", "../img/scene2/animation2/0030.jpg", "../img/scene2/animation2/0031.jpg", "../img/scene2/animation2/0032.jpg",
//   "../img/scene2/animation3/0001.svg", "../img/scene2/animation3/0002.svg", "../img/scene2/animation3/0003.svg", "../img/scene2/animation3/0004.svg", "../img/scene2/animation3/0005.svg", "../img/scene2/animation3/0006.svg", "../img/scene2/animation3/0007.svg", "../img/scene2/animation3/0008.svg", "../img/scene2/animation3/0009.svg",
//   "../img/scene3/animation4/0001.jpg", "../img/scene3/animation4/0002.jpg", "../img/scene3/animation4/0003.jpg", "../img/scene3/animation4/0004.jpg", "../img/scene3/animation4/0005.jpg", "../img/scene3/animation4/0006.jpg", "../img/scene3/animation4/0007.jpg", "../img/scene3/animation4/0008.jpg", "../img/scene3/animation4/0009.jpg", "../img/scene3/animation4/0010.jpg", "../img/scene3/animation4/0011.jpg", "../img/scene3/animation4/0012.jpg", "../img/scene3/animation4/0013.jpg", "../img/scene3/animation4/0014.jpg", "../img/scene3/animation4/0015.jpg", "../img/scene3/animation4/0016.jpg", "../img/scene3/animation4/0017.jpg",
//   "../img/scene3/animation5/0001.jpg", "../img/scene3/animation5/0002.jpg", "../img/scene3/animation5/0003.jpg", "../img/scene3/animation5/0004.jpg", "../img/scene3/animation5/0005.jpg", "../img/scene3/animation5/0006.jpg", "../img/scene3/animation5/0007.jpg", "../img/scene3/animation5/0008.jpg", "../img/scene3/animation5/0009.jpg", "../img/scene3/animation5/0010.jpg", "../img/scene3/animation5/0011.jpg", "../img/scene3/animation5/0012.jpg", "../img/scene3/animation5/0013.jpg", "../img/scene3/animation5/0014.jpg", "../img/scene3/animation5/0015.jpg", "../img/scene3/animation5/0016.jpg", "../img/scene3/animation5/0017.jpg", "../img/scene3/animation5/0018.jpg", "../img/scene3/animation5/0019.jpg", "../img/scene3/animation5/0020.jpg", "../img/scene3/animation5/0021.jpg", "../img/scene3/animation5/0022.jpg", "../img/scene3/animation5/0023.jpg", "../img/scene3/animation5/0024.jpg", "../img/scene3/animation5/0025.jpg", "../img/scene3/animation5/0026.jpg", "../img/scene3/animation5/0027.jpg", "../img/scene3/animation5/0028.jpg", "../img/scene3/animation5/0029.jpg", "../img/scene3/animation5/0030.jpg", "../img/scene3/animation5/0031.jpg", "../img/scene3/animation5/0032.jpg", "../img/scene3/animation5/0033.jpg", "../img/scene3/animation5/0034.jpg", "../img/scene3/animation5/0035.jpg", "../img/scene3/animation5/0036.jpg", "../img/scene3/animation5/0037.jpg", "../img/scene3/animation5/0038.jpg", "../img/scene3/animation5/0039.jpg", "../img/scene3/animation5/0040.jpg", "../img/scene3/animation5/0041.jpg", "../img/scene3/animation5/0042.jpg", "../img/scene3/animation5/0043.jpg", "../img/scene3/animation5/0044.jpg", "../img/scene3/animation5/0045.jpg", "../img/scene3/animation5/0046.jpg", "../img/scene3/animation5/0047.jpg", "../img/scene3/animation5/0048.jpg", "../img/scene3/animation5/0049.jpg", "../img/scene3/animation5/0050.jpg", "../img/scene3/animation5/0051.jpg", "../img/scene3/animation5/0052.jpg", "../img/scene3/animation5/0053.jpg", "../img/scene3/animation5/0054.jpg", "../img/scene3/animation5/0055.jpg", "../img/scene3/animation5/0056.jpg", "../img/scene3/animation5/0057.jpg", "../img/scene3/animation5/0058.jpg", "../img/scene3/animation5/0059.jpg", "../img/scene3/animation5/0060.jpg", "../img/scene3/animation5/0061.jpg", "../img/scene3/animation5/0062.jpg", "../img/scene3/animation5/0063.jpg", "../img/scene3/animation5/0064.jpg");

const imageArray = new Array("../img/scene1/animation1/0001.jpg", "../img/scene1/animation1/0002.jpg", "../img/scene1/animation1/0003.jpg", "../img/scene1/animation1/0004.jpg", "../img/scene1/animation1/0005.jpg", "../img/scene1/animation1/0006.jpg", "../img/scene1/animation1/0007.jpg", "../img/scene1/animation1/0008.jpg", "../img/scene1/animation1/0009.jpg", "../img/scene1/animation1/0010.jpg", "../img/scene1/animation1/0011.jpg", "../img/scene1/animation1/0012.jpg", "../img/scene1/animation1/0013.jpg", "../img/scene1/animation1/0014.jpg", "../img/scene1/animation1/0015.jpg", "../img/scene1/animation1/0016.jpg", "../img/scene1/animation1/0017.jpg", "../img/scene1/animation1/0018.jpg", "../img/scene1/animation1/0019.jpg", "../img/scene1/animation1/0020.jpg", "../img/scene1/animation1/0021.jpg", "../img/scene1/animation1/0022.jpg", "../img/scene1/animation1/0023.jpg",
  "../img/scene1/animation1/0001.webp", "../img/scene1/animation1/0002.webp", "../img/scene1/animation1/0003.webp", "../img/scene1/animation1/0004.webp", "../img/scene1/animation1/0005.webp", "../img/scene1/animation1/0006.webp", "../img/scene1/animation1/0007.webp", "../img/scene1/animation1/0008.webp", "../img/scene1/animation1/0009.webp", "../img/scene1/animation1/0010.webp", "../img/scene1/animation1/0011.webp", "../img/scene1/animation1/0012.webp", "../img/scene1/animation1/0013.webp", "../img/scene1/animation1/0014.webp", "../img/scene1/animation1/0015.webp", "../img/scene1/animation1/0016.webp", "../img/scene1/animation1/0017.webp", "../img/scene1/animation1/0018.webp", "../img/scene1/animation1/0019.webp", "../img/scene1/animation1/0020.webp", "../img/scene1/animation1/0021.webp", "../img/scene1/animation1/0022.webp", "../img/scene1/animation1/0023.webp",
  "../img/scene2/animation2/0001.jpg", "../img/scene2/animation2/0002.jpg", "../img/scene2/animation2/0003.jpg", "../img/scene2/animation2/0004.jpg", "../img/scene2/animation2/0005.jpg", "../img/scene2/animation2/0006.jpg", "../img/scene2/animation2/0007.jpg", "../img/scene2/animation2/0008.jpg", "../img/scene2/animation2/0009.jpg", "../img/scene2/animation2/0010.jpg", "../img/scene2/animation2/0011.jpg", "../img/scene2/animation2/0012.jpg", "../img/scene2/animation2/0013.jpg", "../img/scene2/animation2/0014.jpg", "../img/scene2/animation2/0015.jpg", "../img/scene2/animation2/0016.jpg", "../img/scene2/animation2/0017.jpg", "../img/scene2/animation2/0018.jpg", "../img/scene2/animation2/0019.jpg", "../img/scene2/animation2/0020.jpg", "../img/scene2/animation2/0021.jpg", "../img/scene2/animation2/0022.jpg", "../img/scene2/animation2/0023.jpg", "../img/scene2/animation2/0024.jpg", "../img/scene2/animation2/0025.jpg", "../img/scene2/animation2/0026.jpg", "../img/scene2/animation2/0027.jpg", "../img/scene2/animation2/0028.jpg", "../img/scene2/animation2/0029.jpg", "../img/scene2/animation2/0030.jpg", "../img/scene2/animation2/0031.jpg", "../img/scene2/animation2/0032.jpg",
  "../img/scene2/animation2/0001.webp", "../img/scene2/animation2/0002.webp", "../img/scene2/animation2/0003.webp", "../img/scene2/animation2/0004.webp", "../img/scene2/animation2/0005.webp", "../img/scene2/animation2/0006.webp", "../img/scene2/animation2/0007.webp", "../img/scene2/animation2/0008.webp", "../img/scene2/animation2/0009.webp", "../img/scene2/animation2/0010.webp", "../img/scene2/animation2/0011.webp", "../img/scene2/animation2/0012.webp", "../img/scene2/animation2/0013.webp", "../img/scene2/animation2/0014.webp", "../img/scene2/animation2/0015.webp", "../img/scene2/animation2/0016.webp", "../img/scene2/animation2/0017.webp", "../img/scene2/animation2/0018.webp", "../img/scene2/animation2/0019.webp", "../img/scene2/animation2/0020.webp", "../img/scene2/animation2/0021.webp", "../img/scene2/animation2/0022.webp", "../img/scene2/animation2/0023.webp", "../img/scene2/animation2/0024.webp", "../img/scene2/animation2/0025.webp", "../img/scene2/animation2/0026.webp", "../img/scene2/animation2/0027.webp", "../img/scene2/animation2/0028.webp", "../img/scene2/animation2/0029.webp", "../img/scene2/animation2/0030.webp", "../img/scene2/animation2/0031.webp", "../img/scene2/animation2/0032.webp",
  "../img/scene2/animation3/0001.svg", "../img/scene2/animation3/0002.svg", "../img/scene2/animation3/0003.svg", "../img/scene2/animation3/0004.svg", "../img/scene2/animation3/0005.svg", "../img/scene2/animation3/0006.svg", "../img/scene2/animation3/0007.svg", "../img/scene2/animation3/0008.svg", "../img/scene2/animation3/0009.svg",
  "../img/scene3/animation4/0001.jpg", "../img/scene3/animation4/0002.jpg", "../img/scene3/animation4/0003.jpg", "../img/scene3/animation4/0004.jpg", "../img/scene3/animation4/0005.jpg", "../img/scene3/animation4/0006.jpg", "../img/scene3/animation4/0007.jpg", "../img/scene3/animation4/0008.jpg", "../img/scene3/animation4/0009.jpg", "../img/scene3/animation4/0010.jpg", "../img/scene3/animation4/0011.jpg", "../img/scene3/animation4/0012.jpg", "../img/scene3/animation4/0013.jpg", "../img/scene3/animation4/0014.jpg", "../img/scene3/animation4/0015.jpg", "../img/scene3/animation4/0016.jpg", "../img/scene3/animation4/0017.jpg",
  "../img/scene3/animation4/0001.webp", "../img/scene3/animation4/0002.webp", "../img/scene3/animation4/0003.webp", "../img/scene3/animation4/0004.webp", "../img/scene3/animation4/0005.webp", "../img/scene3/animation4/0006.webp", "../img/scene3/animation4/0007.webp", "../img/scene3/animation4/0008.webp", "../img/scene3/animation4/0009.webp", "../img/scene3/animation4/0010.webp", "../img/scene3/animation4/0011.webp", "../img/scene3/animation4/0012.webp", "../img/scene3/animation4/0013.webp", "../img/scene3/animation4/0014.webp", "../img/scene3/animation4/0015.webp", "../img/scene3/animation4/0016.webp", "../img/scene3/animation4/0017.webp",
  "../img/scene3/animation5/0001.jpg", "../img/scene3/animation5/0002.jpg", "../img/scene3/animation5/0003.jpg", "../img/scene3/animation5/0004.jpg", "../img/scene3/animation5/0005.jpg", "../img/scene3/animation5/0006.jpg", "../img/scene3/animation5/0007.jpg", "../img/scene3/animation5/0008.jpg", "../img/scene3/animation5/0009.jpg", "../img/scene3/animation5/0010.jpg", "../img/scene3/animation5/0011.jpg", "../img/scene3/animation5/0012.jpg", "../img/scene3/animation5/0013.jpg", "../img/scene3/animation5/0014.jpg", "../img/scene3/animation5/0015.jpg", "../img/scene3/animation5/0016.jpg", "../img/scene3/animation5/0017.jpg", "../img/scene3/animation5/0018.jpg", "../img/scene3/animation5/0019.jpg", "../img/scene3/animation5/0020.jpg", "../img/scene3/animation5/0021.jpg", "../img/scene3/animation5/0022.jpg", "../img/scene3/animation5/0023.jpg", "../img/scene3/animation5/0024.jpg", "../img/scene3/animation5/0025.jpg", "../img/scene3/animation5/0026.jpg", "../img/scene3/animation5/0027.jpg", "../img/scene3/animation5/0028.jpg", "../img/scene3/animation5/0029.jpg", "../img/scene3/animation5/0030.jpg", "../img/scene3/animation5/0031.jpg", "../img/scene3/animation5/0032.jpg", "../img/scene3/animation5/0033.jpg", "../img/scene3/animation5/0034.jpg", "../img/scene3/animation5/0035.jpg", "../img/scene3/animation5/0036.jpg", "../img/scene3/animation5/0037.jpg", "../img/scene3/animation5/0038.jpg", "../img/scene3/animation5/0039.jpg", "../img/scene3/animation5/0040.jpg", "../img/scene3/animation5/0041.jpg", "../img/scene3/animation5/0042.jpg", "../img/scene3/animation5/0043.jpg", "../img/scene3/animation5/0044.jpg", "../img/scene3/animation5/0045.jpg", "../img/scene3/animation5/0046.jpg", "../img/scene3/animation5/0047.jpg", "../img/scene3/animation5/0048.jpg", "../img/scene3/animation5/0049.jpg", "../img/scene3/animation5/0050.jpg", "../img/scene3/animation5/0051.jpg", "../img/scene3/animation5/0052.jpg", "../img/scene3/animation5/0053.jpg", "../img/scene3/animation5/0054.jpg", "../img/scene3/animation5/0055.jpg", "../img/scene3/animation5/0056.jpg", "../img/scene3/animation5/0057.jpg", "../img/scene3/animation5/0058.jpg", "../img/scene3/animation5/0059.jpg", "../img/scene3/animation5/0060.jpg", "../img/scene3/animation5/0061.jpg", "../img/scene3/animation5/0062.jpg", "../img/scene3/animation5/0063.jpg", "../img/scene3/animation5/0064.jpg",
  "../img/scene3/animation5/0001.webp", "../img/scene3/animation5/0002.webp", "../img/scene3/animation5/0003.webp", "../img/scene3/animation5/0004.webp", "../img/scene3/animation5/0005.webp", "../img/scene3/animation5/0006.webp", "../img/scene3/animation5/0007.webp", "../img/scene3/animation5/0008.webp", "../img/scene3/animation5/0009.webp", "../img/scene3/animation5/0010.webp", "../img/scene3/animation5/0011.webp", "../img/scene3/animation5/0012.webp", "../img/scene3/animation5/0013.webp", "../img/scene3/animation5/0014.webp", "../img/scene3/animation5/0015.webp", "../img/scene3/animation5/0016.webp", "../img/scene3/animation5/0017.webp", "../img/scene3/animation5/0018.webp", "../img/scene3/animation5/0019.webp", "../img/scene3/animation5/0020.webp", "../img/scene3/animation5/0021.webp", "../img/scene3/animation5/0022.webp", "../img/scene3/animation5/0023.webp", "../img/scene3/animation5/0024.webp", "../img/scene3/animation5/0025.webp", "../img/scene3/animation5/0026.webp", "../img/scene3/animation5/0027.webp", "../img/scene3/animation5/0028.webp", "../img/scene3/animation5/0029.webp", "../img/scene3/animation5/0030.webp", "../img/scene3/animation5/0031.webp", "../img/scene3/animation5/0032.webp", "../img/scene3/animation5/0033.webp", "../img/scene3/animation5/0034.webp", "../img/scene3/animation5/0035.webp", "../img/scene3/animation5/0036.webp", "../img/scene3/animation5/0037.webp", "../img/scene3/animation5/0038.webp", "../img/scene3/animation5/0039.webp", "../img/scene3/animation5/0040.webp", "../img/scene3/animation5/0041.webp", "../img/scene3/animation5/0042.webp", "../img/scene3/animation5/0043.webp", "../img/scene3/animation5/0044.webp", "../img/scene3/animation5/0045.webp", "../img/scene3/animation5/0046.webp", "../img/scene3/animation5/0047.webp", "../img/scene3/animation5/0048.webp", "../img/scene3/animation5/0049.webp", "../img/scene3/animation5/0050.webp", "../img/scene3/animation5/0051.webp", "../img/scene3/animation5/0052.webp", "../img/scene3/animation5/0053.webp", "../img/scene3/animation5/0054.webp", "../img/scene3/animation5/0055.webp", "../img/scene3/animation5/0056.webp", "../img/scene3/animation5/0057.webp", "../img/scene3/animation5/0058.webp", "../img/scene3/animation5/0059.webp", "../img/scene3/animation5/0060.webp", "../img/scene3/animation5/0061.webp", "../img/scene3/animation5/0062.webp", "../img/scene3/animation5/0063.webp", "../img/scene3/animation5/0064.webp");

function preloadImages(e) {
  for (var i = 0; i < imageArray.length; i++) {
    var tempImage = new Image();

    tempImage.addEventListener("load", trackProgress, true);
    tempImage.src = imageArray[i];
  }
}

function trackProgress() {
  loadedImages++;

  if (loadedImages == imageArray.length) {
    imagesLoaded();
  }
}

function imagesLoaded() {
  getCanvas(canvas1, 600, 1080, sceneOne, margin1, 23, '../img/scene1/animation1', 'jpg');

  getCanvas(canvas2, 600, 1080, sceneTwo, margin2, 32, '../img/scene2/animation2', 'jpg');

  getCanvas(canvas3, 350, 220, sceneTwo, margin2, 9, '../img/scene2/animation3', 'svg');

  getCanvas(canvas4, 1920, 2000, sceneThreePreview, margin3, 17, '../img/scene3/animation4', 'jpg');

  getCanvas(canvas5, 1920, 2000, sceneThreePostview, margin4, 64, '../img/scene3/animation5', 'jpg');

}



//img format
function getFormat(imgFormat) {
  if (body.classList.contains('webp') && imgFormat === 'svg') {
    return 'svg'
  } else if (body.classList.contains('webp')) {
    return 'webp'
  } else {
    return imgFormat
  }
}

function getCanvas(canvas, canvasWidth, canvasHeight, wrapper, margin, framecount, path, imgFormat) {

  const context = canvas.getContext("2d");

  const currentFrame = index => {
    let pathToImg = `${path}/${index.toString().padStart(4, '0')}.${getFormat(imgFormat)}`
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





import joteraImg from './images/jotera_v2.jpg';
import vienImg from './images/vien_v2.jpg';
import malkyImg from './images/malky_v2.jpg';
import davidImg from './images/david_v2.jpg';

const images = {
  jotera: joteraImg,
  vien: vienImg,
  malky: malkyImg,
  david: davidImg,
};

const scroller = scrollama();

scroller
  .setup({
    step: ".step, .title-section, .intro-section, .concluding-section",
    offset: 0.5,
  })
  .onStepEnter(response => {
    const imgFrame = document.getElementById("sticky-img-frame");
    const newImageKey = response.element.getAttribute("data-image");
    const newImage = images[newImageKey];
    const newColor = response.element.getAttribute("data-color");

    if (newImage && imgFrame) {
      // Fade out first
      imgFrame.style.opacity = 0.5;
      setTimeout(() => {
        imgFrame.style.backgroundImage = `url('${newImage}')`;
        imgFrame.style.opacity = 1;
      }, 200); // Halfway through the fade
    }

    if (response.element.classList.contains("title-section") ||
        response.element.classList.contains("intro-section") ||
        response.element.classList.contains("concluding-section")) {
      
      document.getElementById("fade-overlay").style.opacity = 0.4;
      setTimeout(() => {
        document.body.style.backgroundColor = newColor || "#264653";
        document.getElementById("fade-overlay").style.opacity = 0;
      }, 200);
    }
    else if (newColor) {
      document.body.style.backgroundColor = newColor;
    }
  });

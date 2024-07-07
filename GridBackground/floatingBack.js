const pattern = document.querySelector(".pattern");
let patternWidth = pattern.clientWidth;

const directions = {
     left: -1,
     right: 1
};
const SPEED = 0.5;
const DIRECTION = directions.left;

function updatePatternWidth() {
     patternWidth = pattern.clientWidth;
}

function animatePatternBG() {
     let position = 0;

     function updatePosition() {
          position += SPEED * DIRECTION; // px per frame
          pattern.style.transform = `translateX(${position}px)`;

          if (position <= -patternWidth / 2) {
               position = 0;
          }

          requestAnimationFrame(updatePosition);
     }

     updatePosition();
}

animatePatternBG();

window.addEventListener("resize", () => {
     updatePatternWidth();
});

// init with current width
updatePatternWidth();
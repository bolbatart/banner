const banner = document.querySelector('.banner');

const f1 = { x: 50, y: -155 };
const f2 = { x: 10, y: -60 };
const f3 = { x: 20, y: -60 };
const f4 = { x: -70, y: -120 };

function checkIfPositionsCorrect() {
  if (
    icon1[0].endX === f1.x &&
    icon1[0].endY === f1.y &&
    icon2[0].endX === f2.x &&
    icon2[0].endY === f2.y &&
    icon3[0].endX === f3.x &&
    icon3[0].endY === f3.y &&
    icon4[0].endX === f4.x &&
    icon4[0].endY === f4.y
  ) {
    // iscezajushie ikonki
    TweenLite.to(document.querySelectorAll('.icon'), 0.5, {
      autoAlpha: 0,
      scale: 0,
    });
    // before -> after
    TweenMax.to(document.getElementById('bg-before'), 1, {
      autoAlpha: 0,
    });
    TweenMax.to(document.getElementById('bg-after'), 3, {
      autoAlpha: 1,
    });
  }
}

function createDraggable(elTag, finishPos) {
  return Draggable.create(elTag, {
    bounds: banner,
    liveSnap: {
      points: [finishPos],
      radius: 20,
    },
    onDragEnd: checkIfPositionsCorrect,
  });
}

const icon1 = createDraggable('#icon1', f1);
const icon2 = createDraggable('#icon2', f2);
const icon3 = createDraggable('#icon3', f3);
const icon4 = createDraggable('#icon4', f4);

// prygajushie ikonki
TweenMax.to(document.querySelectorAll('.icon'), 0.5, {
  y: -5,
  repeat: -1,
  yoyo: true,
});

// iscezajushie ikonki
// TweenLite.to(document.querySelectorAll('.icon'), 0.5, {
//   autoAlpha: 0,
//   scale: 0,
// });

// before -> after
// TweenMax.to(document.getElementById('bg-before'), 1, {
//   autoAlpha: 0,
// });
// TweenMax.to(document.getElementById('bg-after'), 3, {
//   autoAlpha: 1,
// });

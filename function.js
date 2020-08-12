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
    console.log('succes');
    document.querySelectorAll('.icon').forEach((el) => el.remove());
    document.querySelector('#background').src =
      './assets/Bongo Bondhu - Drag _ Drop - After - 300_250.png';
  }
}

function createDraggable(elTag, finsihPos) {
  return Draggable.create(elTag, {
    bounds: banner,
    liveSnap: {
      points: [finsihPos],
      radius: 20,
    },
    onDragEnd: checkIfPositionsCorrect,
  });
}

const icon1 = createDraggable('#icon1', f1);
const icon2 = createDraggable('#icon2', f2);
const icon3 = createDraggable('#icon3', f3);
const icon4 = createDraggable('#icon4', f4);

const illo_1 = new Zdog.Illustration({
  // set canvas with selector
  element: '.smallTV-canvas-1',
  zoom: 4,
  // enable rotating scene with dragging
  dragRotate: true,
});
// square
new Zdog.RoundedRect({
  addTo: illo_1,
  width: 80,
  height: 60,
  stroke: 3,
  color: '#fff',
  cornerRadius: 12,
  fill: true,
});
new Zdog.RoundedRect({
  addTo: illo_1,
  width: 80,
  height: 60,
  stroke: 3,
  color: '#000',
  cornerRadius: 12,
});
// left eye
let line_1 = new Zdog.Shape({
  addTo: illo_1,
  path: [
    { x: -8 }, // start at 1st point
    { x: 8 }, // line to 2nd point
  ],
  translate:{z:10,x:-15,y:-10},
  rotate: { z: -(Zdog.TAU/12)},
  stroke: 2,
  color: '#000',
});
// right eye
line_1.copy({
  translate: { z: 10, x: 15, y: -10 },
  rotate: { z: (Zdog.TAU / 12) },
})
// mouth
line_1.copy({
  translate: { z: 10, y: 10 },
  rotate: { z: 0 },
})
// year left
line_1.copy({
  translate: { z: -5, x: -15, y: -35 },
  stroke: 5,
  rotate: { z: (Zdog.TAU / 9) },
})
// year right
line_1.copy({
  translate: { z: -5, x: 15, y: -35 },
  stroke: 5,
  rotate: { z: -(Zdog.TAU / 9) },
})

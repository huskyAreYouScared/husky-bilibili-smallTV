const fat = new Zdog.Illustration({
  // set canvas with selector
  element: '.fat',
  zoom:3,
  // enable rotating scene with dragging
  dragRotate: true,
});

let box = new Zdog.Box({
  addTo: fat,
  width: 80,
  height: 60,
  depth: 40,
  stroke: 15,
  cornerRadius: 15,
  color: '#fff', // default face color
});

// 前面黑色边框
new Zdog.RoundedRect({
  addTo: fat,
  width: 80,
  height: 60,
  stroke: 3,
  color: '#000',
  cornerRadius: 12,
  translate: { z: 28}
});
// 后面黑色边框
new Zdog.RoundedRect({
  addTo: fat,
  width: 80,
  height: 60,
  stroke: 3,
  color: '#000',
  cornerRadius: 12,
  translate: { z: -28}
});
// left eye
let line_1 = new Zdog.Shape({
  addTo: fat,
  path: [
    { x: -8 }, // start at 1st point
    { x: 8 }, // line to 2nd point
  ],
  translate: { z: 28, x: -15, y: -10 },
  rotate: { z: -(Zdog.TAU / 12) },
  stroke: 2,
  color: '#000',
});
// right eye
line_1.copy({
  translate: { z: 28, x: 15, y: -10 },
  rotate: { z: (Zdog.TAU / 12) },
})
// mouth
line_1.copy({
  translate: { z: 28, y: 10 },
  rotate: { z: 0 },
})
// year left
line_1.copy({
  translate: { z: -5, x: -15, y: -40},
  stroke: 10,
  rotate: { z: (Zdog.TAU / 9) },
  path: [
    { x: -10 }, // start at 1st point
    { x: 10}, // line to 2nd point
  ],
})
// year right
line_1.copy({
  translate: { z: -5, x: 15, y: -40 },
  stroke: 10,
  rotate: { z: -(Zdog.TAU / 9) },
  path: [
    { x: -10 }, // start at 1st point
    { x: 10 }, // line to 2nd point
  ],
})

function animate() {
  fat.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();
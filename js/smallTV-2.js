// Made with Zdog

// create  illo_2
const  illo_2 = new Zdog.Illustration({
  // set canvas with selector
  element: '.smallTV-canvas-2',
  zoom: 4,
  // enable rotating scene with dragging
  dragRotate: true,
});

// square
new Zdog.RoundedRect({
  addTo:  illo_2,
  width: 75,
  height: 60,
  stroke: 3,
  color: '#fff',
  cornerRadius: 15,
  fill: true,
});
new Zdog.RoundedRect({
  addTo:  illo_2,
  width: 75,
  height: 60,
  stroke: 3,
  color: '#000',
  cornerRadius: 15,
});
// mouth
let line_2 = new Zdog.Shape({
  addTo:  illo_2,
  path: [
    { x: -8 }, // start at 1st point
    { x: 8 }, // line to 2nd point
  ],
  translate: { z: 10, y: 10 },
  rotate: { z: -(Zdog.TAU / 36) },
  stroke: 2,
  color: '#000',
});

// year left

line_2.copy({
  translate: { z: -5, x: -15, y: -35 },
  stroke: 5,
  rotate: { z: (Zdog.TAU / 9) },
})
// year right

line_2.copy({
  translate: { z: -5, x: 15, y: -35 },
  stroke: 5,
  rotate: { z: -(Zdog.TAU / 9) },
})

// left eye
let circle = new Zdog.Ellipse({
  addTo: illo_2,
  diameter: 20,
  stroke: 1,
  color: '#000',
  translate: { z: 10, x: -15, y: -15 },
});
circle.copy({
  diameter: 2,
  stroke: 5,
  translate: { z: 10, x: -20, y: -20 },
})

//right eye

circle.copy({
  translate: { z: 10, x: 15, y: -15 },
})
circle.copy({
  diameter: 2,
  stroke: 5,
  translate: { z: 10, x: 10, y: -20 },
})

function animate() {
  illo_1.updateRenderGraph();
  illo_2.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();
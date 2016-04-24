import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import WebGLBatchedPointRenderer from 'lazer/renderers/batch_point/WebGLBatchedPoint';

let canvas = Canvas(800, 600);

AddToDOM(canvas, 'game');

let renderer = new WebGLBatchedPointRenderer(canvas);

renderer.addTri(100, 100, 128);
renderer.addTri(300, 100, 128);
renderer.addTri(500, 100, 128);
renderer.addTri(700, 100, 128);

//  Buffer and draw
renderer.bufferStatic();

// renderer.render();
// renderer.renderLines();
// renderer.renderLineStrip();
// renderer.renderLineLoop();
renderer.renderTriangles();
// renderer.renderTriangleStrip();
// renderer.renderTriangleFan();

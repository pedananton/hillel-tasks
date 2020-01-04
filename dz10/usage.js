// import { Circle } from './figures/Circle.js';
// import { Rectangle } from './figures/Rectangle.js';
// import { Square } from './figures/Square.js';

const figures = [
  // new Rectangle(5, 20),
  // new Rectangle(20, 5),
  // new Square(10),
  // new Circle(1 / Math.PI),
];

const sumOfPerimeters = figures
  .map(f => f.getPerimeter())
  .reduce((a, b) => a + b, 0);

const sumOfAreas = figures
  .map(f => f.getArea())
  .reduce((a, b) => a + b, 0);

document.getElementById('perimeterSum').textContent =
  `Sum of perimeters: ${sumOfPerimeters.toFixed(1)}`;

document.getElementById('areaSum').textContent =
  `Sum of areas: ${sumOfAreas.toFixed(1)}`;

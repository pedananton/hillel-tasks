
'use strict';

const r = 3;
const h = 9;
let area;
let volume;

alert(
  'площадь' + ' ' + (area = (2 * Math.PI * r * (h + r))),
  alert('объем' + ' ' + (volume = (Math.PI * Math.pow(r, 2) * h))),
);


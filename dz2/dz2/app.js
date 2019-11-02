'use strict';
const cilynder = {
  r: 3,
  h: 9,
};
function cBaseArea() {
  return (Math.PI * Math.pow(cilynder.r, 2));
}
function cVolume() {
  return (cBaseArea() * cilynder.h);
}
console.log(`Площадь основания:${cBaseArea().toFixed(1)}`, `Объем:${cVolume().toFixed(1)}`);

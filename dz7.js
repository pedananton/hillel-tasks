let arr = [];
function times(x) {
  for (i = 0; i < x; i++) {
    arr = Array.from({ length: x }, (v, k) => k);
    if (x === 4) {
    arr = Array.from({ length: x }, (v, k) => k * k);
    }
  }
  console.log(arr)
}
times();
times(5);
times(4);

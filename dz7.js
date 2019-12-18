function times(x, callback) { 
  let arr = [];
  for (var i = 0; i < x; i++) {
    if(typeof(callback) == "function" ){
      arr[i] = callback(i);
    } else { 
      arr = Array.from({ length: x }, (v, k) => k);
    }
  }
  console.log(arr)
}
times();
times(5);
times(4, function(i){
  return i * i;
}); 

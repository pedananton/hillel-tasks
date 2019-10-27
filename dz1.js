let student1 = {
    name: 'a',
    height: 166,
  };
  console.log(student1.valueOf())
let student2 = {
    name: 'b',
    height: 177,
  };
  console.log(student2.valueOf())
let student3 = {
    name: 'c',
    height: 180,
  };
  console.log(student3.valueOf())
  
let e = [student1, student2, student3];
e = e.map(a => a.height).reduce((x,y) => x + y/e.length, 0);
console.log(`Средний рост студента:${Math.round(e)}`);

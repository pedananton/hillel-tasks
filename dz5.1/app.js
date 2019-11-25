const calc = {
  createCalculator() {
    return this.initialValue + this.add;
  },
};
const value = Object.create(calc);
value.initialValue = 10;
value.add = 5;
console.log(value.createCalculator());

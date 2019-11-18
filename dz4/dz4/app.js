
const CALC = {
  amount: function result() {
    function max2() {
      if (inputA.value > inputB.value) {
        inputResult.value = inputA.value;
      } else {
        inputResult.value = inputB.value;
      }
    }

    function min2() {
      if (inputA.value < inputB.value) {
        inputResult.value = inputA.value;
      } else {
        inputResult.value = inputB.value;
      }
    }

    function selectFn() {
      if (document.getElementById('selectFn').selectedIndex === 0) {
        max2();
      } else {
        min2();
      }
    }
    selectFn();
  },
};

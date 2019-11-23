const calc = {
  result(selected) {
    selected = document.getElementById('selectProp').value;
    function selectOption() {
      if ((typeof (Math[selected]) === 'function') && (Math[selected].length === 1)) {
        document.getElementById('leftBracket').hidden = false;
        document.getElementById('rightBracket').hidden = false;
        document.getElementById('input1').hidden = false;
        document.getElementById('inputResult').value = Math[selected](input1.value, input2.value);
      } else if ((typeof (Math[selected]) === 'function') && (Math[selected].length === 2)) {
        document.getElementById('leftBracket').hidden = false;
        document.getElementById('rightBracket').hidden = false;
        document.getElementById('input1').hidden = false;
        document.getElementById('input2').hidden = false;
        document.getElementById('comma').hidden = false;
        document.getElementById('inputResult').value = Math[selected](document.getElementById('input1').value, document.getElementById('input2').value);
      } else {
        document.getElementById('leftBracket').hidden = true;
        document.getElementById('rightBracket').hidden = true;
        document.getElementById('input1').hidden = true;
        document.getElementById('input2').hidden = true;
        document.getElementById('comma').hidden = true;
        document.getElementById('inputResult').value = Math[selected];
      }
    }
    selectOption();
  },
};

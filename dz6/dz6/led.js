const selector = () => {
  function diagonalLighter() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (9 - i === j) {
          document.getElementById(String(i) + String(j)).classList.add('lit');
        } else {
          document.getElementById(String(i) + String(j)).classList.remove('lit');
        }
      }
    }
  }
  function squareLighter() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (i === 0 || j === 0) {
          document.getElementById(String(i) + String(j)).classList.add('lit');
        } else if (i === 9 || j === 9) {
          document.getElementById(String(i) + String(j)).classList.add('lit');
        } else {
          document.getElementById(String(i) + String(j)).classList.remove('lit');
        }
      }
    }
  }
  function crossLighter() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (i === 4 || j === 4) {
          document.getElementById(String(i) + String(j)).classList.add('lit');
        } else if (i === 5 || j === 5) {
          document.getElementById(String(i) + String(j)).classList.add('lit');
        } else {
          document.getElementById(String(i) + String(j)).classList.remove('lit');
        }
      }
    }
  }
  if (document.getElementById('selectPatterns').value === 'cross') {
    crossLighter();
  } else if (document.getElementById('selectPatterns').value === 'square') {
    squareLighter();
  } else if (document.getElementById('selectPatterns').value === 'diagonal') {
    diagonalLighter();
  }
};

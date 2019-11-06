function displayBookSummary(data) {
  const element1 = document.querySelectorAll('body > h1');
  for (const elem of element1) {
    elem.innerHTML = data.volumeInfo.title;
  }
  const element2 = document.querySelectorAll('body > p');
  for (const elem of element2) {
    elem.innerHTML = data.volumeInfo.description;
  }
  document.querySelector('.img-cont').innerHTML = '<img src="http://books.google.com/books/content?id=yZ1APgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" alt="" />';

  document.getElementById('link1').href = 'http://books.google.com.ua/books?id=yZ1APgAACAAJ&dq=isbn:0747532699&hl=&cd=1&source=gbs_api';
}

const url = 'yZ1APgAACAAJ.js';
const script = document.createElement('script');
script.setAttribute('src', url);
document.getElementsByTagName('body')[0].appendChild(script);

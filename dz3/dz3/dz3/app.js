function displayBookSummary(data) {
  document.querySelector('.bookTitle').innerHTML = data.volumeInfo.title;
  document.querySelector('.bookDescription').innerHTML = data.volumeInfo.description;
  document.getElementById('link1').href = data.volumeInfo.previewLink;
  document.getElementById('img-cont').src = data.volumeInfo.imageLinks.thumbnail;
}
const url = 'yZ1APgAACAAJ.js';
const script = document.createElement('script');
script.setAttribute('src', url);
document.getElementsByTagName('body')[0].appendChild(script);

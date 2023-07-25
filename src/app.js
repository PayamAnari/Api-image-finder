// Your app.js code goes here
const formEl = document.querySelector('form');
const inputEl = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const showMore = document.getElementById('show-more');

let inputData = '';
let page = 1;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener('click', () => {
  searchImages();
});

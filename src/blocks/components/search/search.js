'use strict';
function searchHovering() {
  const getInput = document.querySelector('.search__input');
  const body = document.querySelector('body');

  body.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('hovering')) {
      getInput.classList.add('shadow');
    } else {
      getInput.classList.remove('shadow');
    }
  });
}
searchHovering();

function moveSearchInput() {
  const getArticles = document.querySelector('.article'),
    getAside = document.querySelector('.aside'),
    getSearch = document.querySelector('.search');
  let width = window.innerWidth;

  if (width < 770) {
    getArticles.prepend(getSearch);
  } else {
    getAside.prepend(getSearch);
  }
}

moveSearchInput();

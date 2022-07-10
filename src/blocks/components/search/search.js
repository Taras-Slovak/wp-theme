'use strict';
const getInput = document.querySelector('.search__input');
const body = document.querySelector('body');

body.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('hovering')) {
    getInput.classList.add('shadow');
  } else {
    getInput.classList.remove('shadow');
  }
});

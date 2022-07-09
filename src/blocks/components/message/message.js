'use strict';

const closeBtn = document.querySelector('.message__close');
const message = document.querySelector('.message');

closeBtn.onclick = () => {
  message.remove();
};

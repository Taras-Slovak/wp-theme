const getBody = document.querySelector('.body');
const getNav = document.querySelector('.nav');

const getBurger = document.querySelector('.burger');

getBurger.addEventListener('click', () => {
  getBurger.classList.toggle('active');
  getNav.classList.toggle('active');
  getBody.classList.toggle('active');
});

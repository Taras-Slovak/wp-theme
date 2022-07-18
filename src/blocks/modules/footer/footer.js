function moveElement() {
  const getFooterNav = document.querySelector('.footer__nav'),
    getSocial = document.querySelector('.footer__social'),
    getFooterAbout = document.querySelector('.footer__about');

  let width = window.innerWidth;

  if (width > 1200) {
    getFooterAbout.append(getSocial);
  } else {
    getFooterNav.append(getSocial);
  }
}
moveElement();

window.addEventListener('resize', moveElement);

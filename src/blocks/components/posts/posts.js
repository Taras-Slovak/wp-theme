'use strict';

const createPosts = () => {
  const posts = `
  <div class="post" data-aos="zoom-in">
    <a href="#" href class="post__image"><img src="../img/pic/posts/Bitmap-0.webp" alt="post"></a>
    <div class="post__content">
      <a href="#" class="post__title">The Internet Cannot be Trusted – Beamsplitters, Backdoors, and Broken Promises</a>
      <p class="post__txt">Derek Zimmer <span>| JUL 25, 2018</span></p>
      <div class="post__tags"><a href="#">Governments,</a><a href="#">Networking,</a><a href="#">Open Source, </a><a href="#">Privacy, </a><a href="#">Security    </a></div>
      <div class="post__comments">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75001 11.3334V10.5834H4.00001H3.41667V3.41669H12.5833V10.5834H8.18667H8.00365L7.8412 10.6677L4.75001 12.2719V11.3334Z" stroke="#889099" stroke-width="1.5"></path>
        </svg><span>0</span>
      </div>
    </div>
  </div>
  <div class="post" data-aos="zoom-in">
    <a href="#"  class="post__image"><img src="../img/pic/posts/Bitmap-1.webp" alt="post"></a>
    <div class="post__content">
      <a href="#" class="post__title">How to get cheaper flights using a VPN</a>
      <p class="post__txt">Jayson <span>| JUL 24, 2018</span></p>
      <div class="post__tags"><a href="#">Guides </a></div>
      <div class="post__comments">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75001 11.3334V10.5834H4.00001H3.41667V3.41669H12.5833V10.5834H8.18667H8.00365L7.8412 10.6677L4.75001 12.2719V11.3334Z" stroke="#889099" stroke-width="1.5"></path>
        </svg><span>0</span>
      </div>
    </div>
  </div>
  <div class="post" data-aos="zoom-in">
    <a href="#" class="post__image"><img src="../img/pic/posts/Bitmap-2.webp" alt="post"></a>
    <div class="post__content">
      <a href="#" class="post__title">Net Neutrality was repealed, but the fight is far from over</a>
      <p class="post__txt">Chris Miller <span>| JUL 22, 2018</span></p>
      <div class="post__tags"><a href="#">Governments,</a><a href="#">Net Neutrality,</a><a href="#">News    </a></div>
      <div class="post__comments">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75001 11.3334V10.5834H4.00001H3.41667V3.41669H12.5833V10.5834H8.18667H8.00365L7.8412 10.6677L4.75001 12.2719V11.3334Z" stroke="#889099" stroke-width="1.5"></path>
        </svg><span>0    </span>
      </div>
    </div>
  </div>
`;

  let getAllPosts = document.querySelector('.posts');
  const getBtn = document.querySelector('.older-posts');
  let counter = 3;

  function renderPosts() {
    let olderPosts = document.createElement('div');
    olderPosts.innerHTML = posts;
    getAllPosts.append(olderPosts);
  }

  function showEndPosts() {
    let message = document.createElement('div');
    message.className = 'end-posts';
    message.innerHTML = `<p>There are no more posts to show ! &#128562</p>`;
    getAllPosts.append(message);
    getBtn.remove();
  }

  renderPosts();
  renderPosts();

  getBtn.addEventListener('click', () => {
    if (counter !== 0) {
      counter--;
      renderPosts();
    } else {
      showEndPosts();
    }
  });
};

createPosts();

const hoverPost = () => {
  const main = document.querySelector('.main');
  const title = document.querySelector('.post__title');

  main.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('post__title')) {
      e.target.classList.add('post-hover');
      console.log(e.target);
    } else {
      title.classList.remove('post-hover');
    }
  });
};

hoverPost();

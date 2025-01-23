import { CLASS_NAME_HIDDEN, hasKeyEscape } from './util.js';

let currentIndex = 0;
let pictureComments = [];
const COMMENTS_PER_PAGE = 5;
const bigWindow = document.querySelector('.big-picture');
const bigWindowImg = bigWindow.querySelector('.big-picture__img img');
const bigWindowLikes = bigWindow.querySelector('.likes-count');
const btnWindowCancel = bigWindow.querySelector('.big-picture__cancel');
const bigWindowTotalComment = bigWindow.querySelector('.social__comment-total-count');
const bigWindowComments = bigWindow.querySelector('.social__comments');
const socialCaption = bigWindow.querySelector('.social__caption');
const btnCommentsLoader = bigWindow.querySelector('.comments-loader');
const socialCommentShownCount = bigWindow.querySelector('.social__comment-shown-count');
const resetCommentsCount = () => {
  currentIndex = 0;
};
const closeBigPicture = () => {
  resetCommentsCount();
  bigWindow.classList.add(CLASS_NAME_HIDDEN);
  document.body.classList.remove('modal-open');
};

const closeBigPictureEsc = (evt) => hasKeyEscape(evt) && closeBigPicture();
const createComment = ({ id, avatar, name, message }) => {
  bigWindowComments.insertAdjacentHTML('beforeend', `
    <li class="social__comment" id="comment-${id}">
      <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
      <p class="social__text">${message}</p>
    </li>
  `);
};

const currentListComments = (comments) => {
  currentIndex += COMMENTS_PER_PAGE;
  if (currentIndex >= comments.length) {
    btnCommentsLoader.style.display = 'none';
    currentIndex = comments.length;
  } else {
    btnCommentsLoader.style.display = 'block';
  }
  bigWindowTotalComment.textContent = comments.length;
  socialCommentShownCount.textContent = currentIndex;
  bigWindowComments.innerHTML = '';
  comments.slice(0, currentIndex).forEach(createComment);
};


export const showBigPicture = ({ url, description, likes, comments }) => {
  bigWindow.classList.remove(CLASS_NAME_HIDDEN);
  btnCommentsLoader.classList.remove(CLASS_NAME_HIDDEN);
  bigWindowImg.src = url;
  bigWindowLikes.textContent = likes;
  bigWindowTotalComment.textContent = comments.length;
  socialCaption.textContent = description;
  document.body.classList.add('modal-open');
  pictureComments = comments;
  currentListComments(comments);

  btnWindowCancel.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeBigPictureEsc);

};
btnCommentsLoader.addEventListener('click', () => currentListComments(pictureComments));

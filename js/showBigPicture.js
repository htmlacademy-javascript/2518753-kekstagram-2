import {picturesContainer} from'./createPhotos';
import './createPhotos.js';
import './data.js';

const bigWindow = document.querySelector('.big-picture');
const smallPictures = picturesContainer.querySelectorAll('.picture__img');
const pictureCloseButton = document.querySelector('#picture-cancel');
const bigPicture = bigWindow.querySelector('.big-picture__img img');
const bigPictureSocial = document.querySelector('.social__header');
const socialComment = document.querySelector('.social__comments');
const likesCounts = document.querySelector('.likes-count');
const likesElements = document.querySelector('.picture__likes');


function openBigPicture (element){
  bigWindow.classList.remove('hidden');
  bigPicture.src = element.src ;
}

function closeBigPicture(){
  bigWindow.classList.add('hidden');
}

function closeBigPictureEsc(evt){
  if(evt.key === 'Escape'){
    bigWindow.classList.add('hidden');
  }
}

function likesCountFunction(likesCount,likesElement){
  likesCount.textContent = likesElement.textContent;
}


smallPictures.forEach((smallPicture) => {

  smallPicture.addEventListener('click', () => openBigPicture(smallPicture));
  likesCounts.textContent = likesElements.textContent;
});


pictureCloseButton.addEventListener('click',closeBigPicture);
document.addEventListener('keydown', closeBigPictureEsc);


console.log('rrrr');

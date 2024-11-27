import {picturesContainer} from'./createPhotos';
import './createPhotos.js';


const bigWindow = document.querySelector('.big-picture');
const smallPictures = picturesContainer.querySelectorAll('.picture__img');
const pictureCloseButton = document.querySelector('#picture-cancel');
const bigPicture = bigWindow.querySelector('.big-picture__img img');
const smallPicture = picturesContainer.querySelector('.picture__img');

// function changeImage(newSrc) {
//   bigPictureImg.src = newSrc;
// }

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

smallPictures.forEach((smallPicture) => {

  smallPicture.addEventListener('click', () => openBigPicture(smallPicture));
});
pictureCloseButton.addEventListener('click',closeBigPicture);
document.addEventListener('keydown', closeBigPictureEsc);


console.log('rrrr');

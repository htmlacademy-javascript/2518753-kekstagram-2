import {picturesContainer} from'./createPhotos';
import './createPhotos.js';


const bigWindow = document.querySelector('.big-picture');
const smallPicture = picturesContainer.querySelector('.picture__img');
const pictureCloseButton = document.querySelector('#picture-cancel');
const bigPicture = bigWindow.querySelector('.big-picture__img img');


// function changeImage(newSrc) {
//   bigPictureImg.src = newSrc;
// }
function openBigPicture (){
  bigWindow.classList.remove('hidden');
  bigPicture.src = smallPicture.src ;
}


function closeBigPicture(){
  bigWindow.classList.add('hidden');
}

function closeBigPictureEsc(evt){
  if(evt.key === 'Escape'){
    bigWindow.classList.add('hidden');
  }
}

smallPicture.addEventListener('click', () => openBigPicture());
pictureCloseButton.addEventListener('click',closeBigPicture);
document.addEventListener('keydown', closeBigPictureEsc);


console.log('rrrr');

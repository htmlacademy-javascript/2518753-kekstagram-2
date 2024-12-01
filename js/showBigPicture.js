const bigWindow = document.querySelector('.big-picture');
const bigWindowImg = document.querySelector('.big-picture__img img');
const bigWindowLikes = document.querySelector('.likes-count');
const btnWindowCancel = bigWindow.querySelector('.big-picture__cancel');
const bigWindowTotalComment = document.querySelector('.social__comment-total-count');
const bigWindowCountComment = document.querySelector('.social__comment-count');
const bigWindowComments = bigWindow.querySelector('.social__comments');
const socialCaption = bigWindow.querySelector('.social__caption');
const commentsLoader = bigWindow.querySelector('.comments-loader');
const btnCommentsLoader = bigWindow.querySelector('.comments-loader');
function closeBigPicture(){
  bigWindow.classList.add('hidden');

}

function closeBigPictureEsc(evt){
  if(evt.key === 'Escape'){
    closeBigPicture();
  }
}


function currentListComments (comments){

  const currentIndex = 0;
  const endIndex = 5;
  const currentList = comments.slice(currentIndex, currentIndex + endIndex);
  btnCommentsLoader.addEventListener('click',() =>{
    currentListComments(comments);
  });

  currentList.forEach(({ id, avatar, name, message }) => {
    bigWindowComments.insertAdjacentHTML('beforeend', `
        <li class="social__comment" id="comment-${id}">
            <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
            <p class="social__text">${message}</p>
        </li>
    `);
  });
}


export const showBigPicture = ({url, description, likes, comments})=>{
  bigWindow.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  bigWindowComments.innerHTML = '';
  bigWindowImg.src = url;
  bigWindowLikes.textContent = likes;
  bigWindowTotalComment.textContent = comments.length;
  socialCaption.textContent = description;
  document.body.className = 'modal-open';
  currentListComments (comments);

  btnWindowCancel.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeBigPictureEsc);

};

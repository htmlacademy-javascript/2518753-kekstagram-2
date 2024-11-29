const bigWindow = document.querySelector('.big-picture');
const bigWindowImg = document.querySelector('.big-picture__img img');
const bigWindowLikes = document.querySelector('.likes-count');
const btnWindowCancel = bigWindow.querySelector('.big-picture__cancel');
const bigWindowTotalComment = document.querySelector('.social__comment-total-count');
const bigWindowCountComment = document.querySelector('.social__comment-count');
const bigWindowComments = bigWindow.querySelector('.social__comments');

function closeBigPicture(){
  bigWindow.classList.add('hidden');
}

function closeBigPictureEsc(evt){
  if(evt.key === 'Escape'){
    closeBigPicture();
  }
}

export const showBigPicture = ({url, description, likes, comments})=>{
  bigWindow.classList.remove('hidden');
  bigWindowCountComment.classList.add('hidden');
  bigWindowComments.innerHTML = '';
  bigWindowImg.src = url;
  bigWindowLikes.textContent = likes;
  bigWindowTotalComment.textContent = comments.length;
  console.log(comments);

  comments.forEach(({id, avatar, name, message}) => {
    bigWindowComments.insertAdjacentHTML('afterbegin',`
        <li class="social__comment" id="comment-${id}">
          <img
            class="social__picture"
            src="${avatar}"
            alt="${name}"
            width="35" height="35">
          <p class="social__text">${message}</p>
        </li>
      `);
  });
  btnWindowCancel.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeBigPictureEsc);

};

import {CLASS_NAME_HIDDEN} from'./util.js';
const imgUpload = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const btnImgUploadClose = document.querySelector('#upload-cancel');
const imgupLoadText = document.querySelector('.img-upload__text');
const hashtagInput = imgupLoadText.querySelector('.text__hashtags');
const hashtagDescription = imgupLoadText.querySelector('.text__description');

function openUploadImg (){
  imgUpload.classList.remove(CLASS_NAME_HIDDEN);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeUploadImgEsc);
  btnImgUploadClose.addEventListener('click',() =>{
    closeUploadImg();
  });
}

function closeUploadImg(){
  imgUpload.classList.add(CLASS_NAME_HIDDEN);
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
  uploadFile.removeEventListener('click',closeUploadImg);
  document.removeEventListener('keydown', closeUploadImgEsc);
}

function closeUploadImgEsc(evt){
  if(evt.key === 'Escape'){
    closeUploadImg();
  }
}

uploadFile.addEventListener('change',() =>{
  openUploadImg ();
});
hashtagInput.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.stopPropagation();
  }
});
hashtagDescription.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.stopPropagation();
  }
});

const pristine = new Pristine(imgupLoadText,{
  classTo:'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',

});
pristine.addValidator(hashtagInput, (value) => {
  if (!value.trim()) {
    return true;
  }
  const hashtags = value.split(' ');
  const hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;
  const uniqueHashtags = new Set(hashtags);

  return hashtags.every((hashtag) => hashtagRegex.test(hashtag)) && uniqueHashtags.size === hashtags.length && hashtags.length <= 5;
}, 'Неправильный хэштег');


pristine.addValidator(hashtagDescription, (value) => {
  const isVailedComment = value.length;
  const maxLengthComment = 140;
  if (!value.trim()) {
    return true;
  }
  if(isVailedComment <= maxLengthComment){
    return isVailedComment;
  }
},'Неправильная длина комментария');

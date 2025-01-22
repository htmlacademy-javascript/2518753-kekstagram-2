import { sendData } from './api';
import { closeUploadImg } from './load-form';
import { showSuccessMessage,showErrorImgLoad } from './messages';
import { hasKeyEscape } from './util';
const imgUpLoadText = document.querySelector('.img-upload__text');
const hashtagInput = imgUpLoadText.querySelector('.text__hashtags');
const hashtagDescription = imgUpLoadText.querySelector('.text__description');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadSubmit = document.getElementById('upload-submit');

export const imgUploadSubmitText = {
  IDLE:'Опубликовать',
  SENDING:'Сохраняю...',
};

const disabledButton = (text)=>{
  imgUploadSubmit.disabled = true;
  imgUploadSubmit.textContent = text;
};

export const enableButton = (text)=>{
  imgUploadSubmit.disabled = false;
  imgUploadSubmit.textContent = text;
};

const pristine = new Pristine(imgUploadForm,{
  classTo:'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',

});
let errorMessage = '';
const error = ()=>errorMessage;
export const resetForm = ()=>{
  pristine.reset();
  imgUploadForm.reset();
};
const onEscape = (event)=>hasKeyEscape(event) && event.stopPropagation();

function validateHashtags(value) {
  const hashtags = value.trim().split(/\s+/);
  const isValidHashtag = /^#[a-zа-яё0-9()]*\s*$/i;
  const uniqueHashtags = new Set();

  if (!value.trim()) {
    return true;
  }

  if (!hashtagInput.pristine) {
    hashtagInput.pristine = {};
  }
  if (!hashtagInput.pristine.errors) {
    hashtagInput.pristine.errors = [];
  }
  if (hashtags.some((hashtag) => hashtag.length > 20)) {
    errorMessage = 'Максимальная длина одного хэш-тега — 20 символов, включая решётку.';
    hashtagInput.pristine.errors.push(errorMessage);
    return false;
  }

  if (!hashtags.every((hashtag) => isValidHashtag.test(hashtag))) {
    errorMessage = 'Один или несколько хештегов не соответствуют допустимому формату.';
    return false;
  }
  if (hashtags.some((hashtag) => hashtag === '#')) {
    errorMessage = 'Хештег не может состоять только из символа #.';
    return false;
  }


  for (const hashtag of hashtags) {
    const lowerCaseHashtag = hashtag.toLowerCase();
    if (uniqueHashtags.has(lowerCaseHashtag)) {
      errorMessage = 'Хэш-теги должны быть уникальными.';
      hashtagInput.pristine.errors.push(errorMessage);
      return false;
    }
    uniqueHashtags.add(lowerCaseHashtag);
  }

  if (hashtags.length > 5) {
    errorMessage = 'Максимальное количество хештегов — 5.';
    return false;
  }

  return true;
}

pristine.addValidator(hashtagInput, validateHashtags, error);


imgUploadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!pristine.validate()) {
    return;
  }
  disabledButton(imgUploadSubmitText.SENDING);
  return sendData(new FormData(event.target)).then(() => {
    enableButton(imgUploadSubmitText.IDLE);
    closeUploadImg();
    showSuccessMessage();
  }).catch(showErrorImgLoad);

});

[hashtagInput,hashtagDescription].forEach((item) => item.addEventListener('keydown',onEscape));


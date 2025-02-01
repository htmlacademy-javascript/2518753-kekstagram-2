import { sendData } from './api';
import { onUploadImgClose } from './load-form';
import { showSuccessMessage, showErrorImgLoad } from './messages';
import { hasKeyEscape } from './util';

export const IMG_UPLOAD_SUBMIT_TEXT = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...',
};

export const IMG_UPLOAD_SUBMIT_TEXT = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...',
};
const imgUpLoadText = document.querySelector('.img-upload__text');
const hashtagInput = imgUpLoadText.querySelector('.text__hashtags');
const hashtagDescription = imgUpLoadText.querySelector('.text__description');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadSubmit = document.getElementById('upload-submit');


const disabledButton = (text) => {
  const disabledButton = (text) => {
    imgUploadSubmit.disabled = true;
    imgUploadSubmit.textContent = text;
  };

  export const enableButton = (text) => {
    export const enableButton = (text) => {
      imgUploadSubmit.disabled = false;
      imgUploadSubmit.textContent = text;
    };

    const pristine = new Pristine(imgUploadForm, {
      classTo: 'img-upload__field-wrapper',
      const pristine = new Pristine(imgUploadForm, {
        classTo: 'img-upload__field-wrapper',
        errorClass: 'img-upload__field-wrapper--error',
        errorTextParent: 'img-upload__field-wrapper',

      });
      let errorMessage = '';
      const getErrorMessage = () => errorMessage;
      export const resetForm = () => {
        pristine.reset();
        imgUploadForm.reset();
      };
      const onEscape = (event) => hasKeyEscape(event) && event.stopPropagation();
      const onEscape = (event) => hasKeyEscape(event) && event.stopPropagation();

      const validateHashtags = (value) => {
        const hashtags = value.trim().split(/\s+/);
        const validateHashtags = (value) => {
          const hashtags = value.trim().split(/\s+/);
          const isValidHashtag = /^#[a-zа-яё0-9()]*\s*$/i;
          const uniqueHashtags = new Set();
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
            errorMessage = 'Максимальное количество хештегов — 5.';
            return false;
          }

          return true;
        };
      };

      pristine.addValidator(hashtagInput, validateHashtags, getErrorMessage);
      pristine.addValidator(hashtagInput, validateHashtags, getErrorMessage);


      imgUploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!pristine.validate()) {
          return;
        }
        disabledButton(IMG_UPLOAD_SUBMIT_TEXT.SENDING);
        disabledButton(IMG_UPLOAD_SUBMIT_TEXT.SENDING);
        return sendData(new FormData(event.target)).then(() => {
          enableButton(IMG_UPLOAD_SUBMIT_TEXT.IDLE);
          onUploadImgClose();
          showSuccessMessage();
          resetForm();
        }).catch(() => {
          enableButton(IMG_UPLOAD_SUBMIT_TEXT.IDLE);
          showErrorImgLoad();
        });

      });

      [hashtagInput, hashtagDescription].forEach((item) => item.addEventListener('keydown', onEscape));
      [hashtagInput, hashtagDescription].forEach((item) => item.addEventListener('keydown', onEscape));


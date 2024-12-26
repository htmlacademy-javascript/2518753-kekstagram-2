import { closeUploadImg } from './load-form';
import { hasKeyEscape } from './util';
import { enableButton, imgUploadSubmitText } from './validation-form';


const REMOVE_MESSAGE_TIMEOUT = 5000;
const messageFragment = document.createDocumentFragment();
const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const errorMessageElement = errorMessageTemplate.cloneNode(true);
const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const messageSuccessElement = messageSuccessTemplate.cloneNode(true);
const errorLoadImgTemplate = document.querySelector('#error').content.querySelector('.error');
const errorLoadImgElement = errorLoadImgTemplate.cloneNode(true);

export const showErrorMessage = ()=>{
  messageFragment.append(errorMessageElement);
  document.body.appendChild(messageFragment);
  const loadError = document.body.querySelector('.data-error');
  setTimeout(()=>loadError.remove(),REMOVE_MESSAGE_TIMEOUT);
};


export const showSuccessMessage = ()=>{
  messageFragment.append(messageSuccessElement);
  document.body.appendChild(messageFragment);
  const loadSuccess = document.body.querySelector('.success');
  const removeMessage = ()=>{
    loadSuccess.remove();
  };
  const removeMessageEsc = (event) => {
    if (hasKeyEscape(event)) {
      removeMessage();
    }
  };
  document.body.addEventListener('click', (event) => {
    if (event.target.matches('.success__button') || event.target === loadSuccess) {
      removeMessage();
    }
  });
  document.addEventListener('keydown', removeMessageEsc);

};


export const showErrorImgLoad = ()=>{
  messageFragment.append(errorLoadImgElement);
  document.body.appendChild(messageFragment);
  const loadErrorImg = document.body.querySelector('.error');
  const btnlLoadErrorImg = document.body.querySelector('.error__button');
  closeUploadImg();
  enableButton(imgUploadSubmitText.IDLE);
  const removeElement = (element)=>{
    if(element){
      element.remove();
    }
  };
  const removeErrorImg = (event) => {
    if (event && hasKeyEscape(event)) {
      if (hasKeyEscape(event)) {
        removeElement(loadErrorImg);
      }
    } else if (event && event.type === 'click') {
      removeElement(loadErrorImg);
    }
  };

  document.addEventListener('keydown',removeErrorImg);
  btnlLoadErrorImg.addEventListener('click',removeErrorImg);
};

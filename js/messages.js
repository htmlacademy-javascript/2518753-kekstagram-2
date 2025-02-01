const REMOVE_MESSAGE_TIMEOUT = 5000;

import { hasKeyEscape } from './util';

const messageFragment = document.createDocumentFragment();
const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const errorMessageElement = errorMessageTemplate.cloneNode(true);
const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const messageSuccessElement = messageSuccessTemplate.cloneNode(true);
const errorLoadImgTemplate = document.querySelector('#error').content.querySelector('.error');
const errorLoadImgElement = errorLoadImgTemplate.cloneNode(true);

export const showErrorMessage = () => {
  messageFragment.append(errorMessageElement);
  document.body.appendChild(messageFragment);
  const loadError = document.body.querySelector('.data-error');
  setTimeout(() => loadError.remove(), REMOVE_MESSAGE_TIMEOUT);
};


const removeMessage = (element) => element.remove();

const removeMessageEsc = (event, element) => {
  if (hasKeyEscape(event)) {
    removeMessage(element);
  }
};

export const showSuccessMessage = () => {
  messageFragment.append(messageSuccessElement);
  document.body.appendChild(messageFragment);
  const loadSuccess = document.body.querySelector('.success');
  loadSuccess.addEventListener('click', (event) => {
    if (event.target.matches('.success__button') || event.target === loadSuccess) {
      removeMessage(loadSuccess);
    }
  });
  document.addEventListener('keydown', (evt) => removeMessageEsc(evt, loadSuccess));
};

export const showErrorImgLoad = () => {
  messageFragment.append(errorLoadImgElement);
  document.body.appendChild(messageFragment);
  const loadErrorImg = document.body.querySelector('.error');

  document.addEventListener('keydown', (evt) => removeMessageEsc(evt, loadErrorImg));
  loadErrorImg.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('error') || evt.target.classList.contains('error__button')) {
      removeMessage(loadErrorImg);
    }
  });
};

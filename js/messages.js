const messageFragment = document.createDocumentFragment();
const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const errorMessageElement = errorMessageTemplate.cloneNode(true);
const REMOVE_MESSAGE_TIMEOUT = 5000;
const messageFragmentSuccess = document.createDocumentFragment();
const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const messageSuccessElement = messageSuccessTemplate.cloneNode(true);
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
  setTimeout(()=> loadSuccess.remove(), REMOVE_MESSAGE_TIMEOUT);
  const btnCloseSuccess = document.body.querySelector('.success__button');
  btnCloseSuccess.addEventListener('click',()=>{
    loadSuccess.remove();
  });
  loadSuccess.addEventListener('click', (event) => {
    if (event.target === loadSuccess) {
      loadSuccess.remove();
    }
  });
};

const filterImgDefault = document.querySelector('#filter-default');
const filterImgDiscussed = document.querySelector('#filter-discussed');
const filterImgRandom = document.querySelector('#filter-random');
const imgFilters = document.querySelector('.img-filters');
const filterElement = document.querySelector('.img-filters');
let currentFilter = 'filter-default';
export let pictures = [];
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';


function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
function onFilterChange(evt){
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if(!targetButton.matches('button')){
    return;
  }
  if(activeButton === targetButton){
    return;
  }

  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');
  applyFilter();
}


function applyFilter(){
  let filteredPictures = [];
  if(currentFilter === 'filer-default'){
    filteredPictures = pictures;
  }
  if(currentFilter === 'filter-random'){
    filteredPictures = pictures.toSorted(() => 0.5 - Math.random()).slice(0.10);
  }
  if(currentFilter === 'filter-discussed'){
    filteredPictures = pictures.toSorted((a,b)=>b.comments.length - a.comments.length);
  }
  debounce(filteredPictures);
}
export function configFilter(picturesData){
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click',onFilterChange);
  pictures = picturesData;
}


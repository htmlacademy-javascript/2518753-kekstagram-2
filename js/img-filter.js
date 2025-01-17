import { debounce } from './util';
const filterElement = document.querySelector('.img-filters');
let currentFilter = 'filter-default';
export let pictures = [];
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';


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
  switch(currentFilter){

    case'filer-default':
      filteredPictures = pictures;
      break;

    case'filter-random':
      filteredPictures = pictures.toSorted(() => 0.5 - Math.random()).slice(0.10);
      break;

    case'filter-discussed':filteredPictures = pictures.toSorted((a,b)=>b.comments.length - a.comments.length);
      break;
  }
  debounce(filteredPictures);
}
export function configFilter(picturesData){
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click',onFilterChange);
  pictures = picturesData;
}


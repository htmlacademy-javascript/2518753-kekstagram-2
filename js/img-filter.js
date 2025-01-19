import { creatPhotos } from './create-photos';
import { debounce } from './util';
export let pictures = [];

const FILTER = {
  Default:'filter-default',
  Random:'filter-random',
  Discussed:'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');
let currentFilter = FILTER.Default;
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
const renderDebounce = debounce(creatPhotos);
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
    case FILTER.Default:
      filteredPictures = pictures;
      break;

    case FILTER.Random:
      filteredPictures = pictures.toSorted(() => 0.5 - Math.random()).slice(0,10);
      break;

    case FILTER.Discussed:filteredPictures = pictures.toSorted((a,b)=>b.comments.length - a.comments.length);
      break;
  }
  renderDebounce(filteredPictures);
}
export function configFilter(picturesData){
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click',onFilterChange);
  pictures = picturesData;
}


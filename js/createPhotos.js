import { userPhotos } from './data.js';


const similar = userPhotos();
const photoListFragment = document.createDocumentFragment();
const template = document.querySelector('#picture');
export const picturesContainer = document.querySelector('.pictures');

similar.forEach(({url, description, likes, comments}) => {
  const templateClone = template.content.cloneNode(true);
  const img = templateClone.querySelector('.picture__img');
  img.src = url;
  img.alt = description;
  templateClone.querySelector('.picture__likes').textContent = likes;
  templateClone.querySelector('.picture__comments').textContent = comments.length;
  photoListFragment.append(templateClone);
});
picturesContainer.append(photoListFragment);



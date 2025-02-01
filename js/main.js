import { showErrorMessage } from './messages.js';
import { getData } from './api.js';
import { creatPhotos } from './create-photos.js';
import { getFilteredConfig } from './img-filter.js';
import './load-form.js';
import './validation-form.js';

getData().then((pictures) => {
  creatPhotos(pictures);
  getFilteredConfig(pictures);
}).catch(showErrorMessage);


import { showErrorMessage } from './messages.js';
import { getData } from './api.js';
import { creatPhotos } from './create-photos.js';
import { configFilter } from './img-filter.js';
try {
  const pictures = await getData();
  creatPhotos(pictures);
  configFilter(pictures);
} catch {
  showErrorMessage();
}

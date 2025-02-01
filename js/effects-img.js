import { CLASS_NAME_HIDDEN } from './util.js';
import { imgUploadPreview } from './scale-img.js';
import { CLASS_NAME_HIDDEN } from './util.js';
import { imgUploadPreview } from './scale-img.js';

const effectsPreview = document.querySelectorAll('.effects__radio');
const effectsContainer = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadEffect = document.querySelector('.img-upload__effect-level');
const imgUploadEffect = document.querySelector('.img-upload__effect-level');


export function defaultEffects() {
  export const defaultEffects = () => {
    imgUploadPreview.className = '';
    imgUploadPreview.style = '';
    effectLevelValue.value = '';
    effectsContainer.classList.add(CLASS_NAME_HIDDEN);
    imgUploadEffect.classList.add(CLASS_NAME_HIDDEN);
  };

  noUiSlider.create(effectsContainer, {
    noUiSlider.create(effectsContainer, {
      range: {
        min: 0,
        max: 1
      },
      start: 0,
      step: 0.1
    });
    effectsContainer.noUiSlider.on('update', (values) => {
      effectLevelValue.value = parseFloat(values[0]);
      effectLevelValue.value = parseFloat(values[0]);
    });

    effectsPreview.forEach((effectChecked) => {
      effectChecked.addEventListener('change', () => {
        effectChecked.addEventListener('change', () => {
          effectsContainer.classList.remove(CLASS_NAME_HIDDEN);
          const selectEffect = effectChecked.value;
          imgUploadPreview.classList.add(`effect__preview--${selectEffect}`);
          imgUploadEffect.classList.remove(CLASS_NAME_HIDDEN);

          switch (selectEffect) {
            case 'chrome':
              effectsContainer.noUiSlider.updateOptions({
                range: {
                  min: 0,
                  max: 1
          range: {
                    min: 0,
                    max: 1
                  },
                  step: 0.1,
                  start: 1
          step: 0.1,
                  start: 1
                });
              effectsContainer.noUiSlider.on('update', (evt) => {
                effectsContainer.noUiSlider.on('update', (evt) => {
                  imgUploadPreview.style.filter = `grayscale(${evt[0]})`;
                });
                break;
      case 'marvin':
              effectsContainer.noUiSlider.updateOptions({
                range: {
                  min: 0,
                  max: 100
          range: {
                    min: 0,
                    max: 100
                  },
                  step: 1,
                  start: 100
          step: 1,
                  start: 100
                });
              effectsContainer.noUiSlider.on('update', (evt) => {
                effectsContainer.noUiSlider.on('update', (evt) => {
                  imgUploadPreview.style.filter = `invert(${evt[0]}%)`;
                });
                break;
      case 'sepia':
            case 'sepia':
              effectsContainer.noUiSlider.updateOptions({
                range: {
                  min: 0,
                  max: 1
          range: {
                    min: 0,
                    max: 1
                  },
                  step: 0.1,
                  start: 1
          step: 0.1,
                  start: 1
                });
              effectsContainer.noUiSlider.on('update', (evt) => {
                effectsContainer.noUiSlider.on('update', (evt) => {
                  imgUploadPreview.style.filter = `sepia(${evt[0]})`;
                });
                break;
      case 'phobos':
            case 'phobos':
              effectsContainer.noUiSlider.updateOptions({
                range: {
                  min: 0,
                  max: 3
          range: {
                    min: 0,
                    max: 3
                  },
                  step: 0.1,
                  start: 3
          step: 0.1,
                  start: 3
                });
              effectsContainer.noUiSlider.on('update', (evt) => {
                effectsContainer.noUiSlider.on('update', (evt) => {
                  imgUploadPreview.style.filter = `blur(${evt[0]}px)`;
                });
                break;
      case 'heat':
            case 'heat':
              effectsContainer.noUiSlider.updateOptions({
                range: {
                  min: 1,
                  max: 3
          range: {
                    min: 1,
                    max: 3
                  },
                  step: 0.1,
                  start: 3
          step: 0.1,
                  start: 3
                });
              effectsContainer.noUiSlider.on('update', (evt) => {
                effectsContainer.noUiSlider.on('update', (evt) => {
                  imgUploadPreview.style.filter = `brightness(${evt[0]})`;
                });
                break;
      default:
              defaultEffects();
          }
        });
      });

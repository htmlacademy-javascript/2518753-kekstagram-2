const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25
};
const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
export const imgUploadPreview = document.querySelector('.img-upload__preview img');

const updateScale = (value = Scale.MAX) => {
  imgUploadPreview.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};
const onMinusButtonClick = () => {
  const currentValue = parseFloat(scaleControlValue.value);
  let newValue = currentValue - Scale.STEP;
  if (newValue < Scale.MIN) {
    newValue = Scale.MIN;
  }
  updateScale(newValue);
};

const onPlusButtonClick = () => {
  const currentValue = parseFloat(scaleControlValue.value);
  let newValue = currentValue + Scale.STEP;
  if (newValue > Scale.MAX) {
    newValue = Scale.MAX;
  }
  updateScale(newValue);
};

export const resetScale = () => updateScale();
btnSmaller.addEventListener('click', onMinusButtonClick);
btnBigger.addEventListener('click', onPlusButtonClick);

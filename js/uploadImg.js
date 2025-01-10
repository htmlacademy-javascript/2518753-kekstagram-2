import {imgUploadPreview} from'./scale-img.js';

const fileChooser = document.querySelector('.img-upload__start input[type="file"]');

fileChooser.addEventListener('change',()=>{
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();


});

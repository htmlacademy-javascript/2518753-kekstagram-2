import {imgUploadPreview} from'./scale-img.js';
const FILE_TYPES = ['gif','jpg','jpeg','png'];
const fileChooser = document.querySelector('.img-upload__start input[type="file"]');

fileChooser.addEventListener('change',()=>{
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it)=>fileName.endsWith(it));
  if(matches){
    imgUploadPreview.src = URL.createObjectURL(file);
  }
});

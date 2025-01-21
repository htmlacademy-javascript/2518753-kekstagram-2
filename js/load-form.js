import {CLASS_NAME_HIDDEN,hasKeyEscape} from'./util.js';
import { resetScale,imgUploadPreview } from './scale-img.js';
import{defaultEffects} from './effects-img.js';


export const imgUpload = document.querySelector('.img-upload__overlay');
const FILE_TYPES = ['gif','jpg','jpeg','png'];
const uploadFile = document.querySelector('#upload-file');
const btnImgUploadClose = document.querySelector('#upload-cancel');


function openUploadImg (){
  imgUpload.classList.remove(CLASS_NAME_HIDDEN);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeUploadImgEsc);
  btnImgUploadClose.addEventListener('click',closeUploadImg);
  defaultEffects();
}

export function closeUploadImg(){
  imgUpload.classList.add(CLASS_NAME_HIDDEN);
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
  defaultEffects();
  resetScale();
  uploadFile.removeEventListener('click',closeUploadImg);
  document.removeEventListener('keydown', closeUploadImg);
}

function closeUploadImgEsc(evt){
  return hasKeyEscape(evt) && closeUploadImg();
}

uploadFile.addEventListener('change',()=>{
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it)=>fileName.endsWith(it));
  if(matches){
    imgUploadPreview.src = URL.createObjectURL(file);
    openUploadImg();
  }
});

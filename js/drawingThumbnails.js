import { similarComments } from './data.js';

const similar = similarComments();
const template = document.querySelector('#picture');
const pictureList = document.querySelector('.pictures');

similar.forEach((parametr) => {
  const templateClone = template.content.cloneNode(true);
  const img = templateClone.querySelector('.picture__img');
  img.src = parametr.url;
  img.alt = parametr.description;
  const like = templateClone.querySelector('.picture__likes');
  like.textContent = parametr.likes;
  const commentsPicture = templateClone.querySelector('.picture__comments');
  commentsPicture.textContent = parametr.comments.length;
  pictureList.append(templateClone);
});

{/* <template id="picture">
<a href="#" class="picture">
  <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a>
</template> */}
// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.


// export function similarComments() {
//   return Array.from({ length: maxId }, () => ({
//     id: getRandomInteger(0, maxId),
//     url: `photos/${getRandomInteger(1, maxId)}.jpg`,
//     description: description[getRandomInteger(0, description.length - 1)],
//     likes: getRandomInteger(0, maxLikes),
//     comments: Array.from({ length: getRandomInteger(0, maxComments) }, () => ({
//       id: getRandomInteger(0, maxId),
//       avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
//       name: names[getRandomInteger(0, names.length - 1)],
//       message: message[getRandomInteger(0, message.length - 1)]
//     }))
//   }));
// }

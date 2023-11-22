import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.pictures');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');
const closeModal = (evt) => {
  if (isEscapeKey(evt) || evt.type === 'click') {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeModal);
    cancelButton.removeEventListener('click', closeModal);
  }
};
const openModal = (image) => {
  bigPicture.classList.remove('hidden');
  bigPictureImg.querySelector('img').src = image.url;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.description.length.toString();
  socialCaption.textContent = image.description;
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeModal);
  cancelButton.addEventListener('click', closeModal);
};
const thumbnailClickHandler = (data) => {
  pictures.addEventListener('click', (evt) => {
    const picture = evt.target.closest('.picture');
    if (picture) {
      openModal(data[picture.dataset.index]);
    }
  });
};

export {thumbnailClickHandler};

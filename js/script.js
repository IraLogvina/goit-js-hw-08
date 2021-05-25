import images from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector('.js-lightbox'),
  modalImg: document.querySelector('.lightbox__image'),

}

// Создаем разметку 

const createGalleryItemsMurkup = function (images) {
  return images
  .map(
    ({preview, original, description}) => 
      `<li class="gallery__item">
<a
class="gallery__link"
href="${original}"
>
<img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
</a>
</li>`,
  ).join('');
};

const galleryMurkup = createGalleryItemsMurkup(images)
refs.gallery.insertAdjacentHTML('beforeend', galleryMurkup),

// Открытие и закрытие модального окна

refs.gallery.addEventListener('click', openModalImg);
refs.closeModalBtn.addEventListener('click', closeModalImg);

function openModalImg (evt) {
  evt.preventDefault();
  if (evt.target.localName !== 'img') {
    return;
  }

  refs.modal.classList.add('is-open');

  refs.modalImg.src = evt.target.dataset.source;
  refs.modalImg.alt = evt.target.alt;

}

function closeModalImg() {
  refs.modal.classList.remove('is-open');
  refs.modalImg.src = '';
  refs.modalImg.alt = '';
}


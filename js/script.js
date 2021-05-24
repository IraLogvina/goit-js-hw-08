import images from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),


}

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
refs.gallery.insertAdjacentHTML('beforeend', galleryMurkup);
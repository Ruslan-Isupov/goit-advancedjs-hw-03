import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchPictures } from './js/pixabay-api.js';
import { renderUserListItems } from './js/render-functions.js';

const form = document.querySelector('#search-form');

form.addEventListener('submit', findListOfPictures);

function findListOfPictures(e) {
  e.preventDefault();
  const nameQuery = form.elements.searchQuery.value;

  if (nameQuery === '') {
    return clearMarkup();
  }
  searchPictures(nameQuery)
    .then(list => {
      renderUserListItems(list);
    })
    .catch(() => {
      pictureList.innerHTML = '';
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    });
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchPictures } from './js/pixabay-api.js';
import { renderUserListItems, clearMarkup } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', findListOfPictures);

function findListOfPictures(e) {
  e.preventDefault();
  toggleLoader();
  const nameQuery = form.elements.searchQuery.value;

  if (nameQuery === '') {
    toggleLoader();
    iziToast.warning({
      title: 'Alert',
      message: 'You need to put world for searching',
      position: 'topRight',
    });
    return;
  }
  searchPictures(nameQuery)
    .then(list => {
      if (list.total === 0) {
        toggleLoader();
        iziToast.warning({
          title: 'Alert',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return clearMarkup();
      }
      renderUserListItems(list);
      toggleLoader();
    })
    .catch(err => {
      toggleLoader();
      clearMarkup();
      iziToast.error({
        title: 'Error',
        message: err.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      form.reset();
    });
}

function toggleLoader() {
  loader.style.display =
    loader.style.display === 'none' || loader.style.display === ''
      ? 'block'
      : 'none';
}

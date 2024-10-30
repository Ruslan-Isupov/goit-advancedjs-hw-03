import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchPictures } from './js/pixabay-api.js';
import { renderUserListItems, clearMarkup } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const load = document.querySelector('.loader');

form.addEventListener('submit', findListOfPictures);

class LoaderService {
  constructor(el) {
    this.loader = el;
  }

  hide() {
    this.loader.style.display = '';
  }

  show() {
    this.loader.style.display = 'block';
  }
}

const loader = new LoaderService(load);

function findListOfPictures(e) {
  e.preventDefault();
  // toggleLoader();
  loader.show();
  const nameQuery = form.elements.searchQuery.value;

  if (nameQuery === '') {
    // toggleLoader();
    loader.hide();
    iziToast.warning({
      title: 'Alert',
      message: 'You need to put world for searching',
      position: 'topRight',
    });
    return;
  }
  searchPictures(nameQuery)
    .then(images => {
      if (images.total === 0) {
        // toggleLoader();
        loader.hide();
        iziToast.warning({
          title: 'Alert',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return clearMarkup();
      }
      renderUserListItems(images);
      // toggleLoader();
      loader.hide();
    })
    .catch(err => {
      // toggleLoader();
      loader.hide();
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

// function toggleLoader() {
//   loader.style.display =
//     loader.style.display === 'none' || loader.style.display === ''
//       ? 'block'
//       : 'none';
// }

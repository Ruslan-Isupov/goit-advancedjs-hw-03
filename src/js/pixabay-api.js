import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '34886676-216aa5272081537bbb6585f7b';

const searchPictures = function (query) {
  console.log(query);
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo$orientation=horizontal$safesearch=true`
  ).then(resp => {
    console.log(resp);
    if (!resp.ok) {
      iziToast.warning({
        title: 'Alert',
        message:
          //   'Sorry, there are no images matching your search query. Please try again!',
          'Sorry, it doesnt work',
        position: 'topRight',
      });
    }

    return resp.json();
  });
};

export { searchPictures };

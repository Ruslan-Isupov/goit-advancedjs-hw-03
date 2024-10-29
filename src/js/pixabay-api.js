const API_KEY = '34886676-216aa5272081537bbb6585f7b';

const searchPictures = function (query) {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo$orientation=horizontal$safesearch=true`
  ).then(resp => {
    if (!resp.ok) {
      console.log('Venya');
      throw new Error(resp.status);
    }
    return resp.json();
  });
};

export { searchPictures };

import axios from 'axios';

const API_KEY = '44049527-352ef67b2949e9cf818cbb88f';
const URL = 'https://pixabay.com/api/';

export default async function getImagesFromApi(textForm = '', page, perPage) {
  const parameters = new URLSearchParams({
    per_page: perPage,
    page,
    key: API_KEY,
    q: textForm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const { data } = await axios.get(`${URL}?${parameters}`);

  return data;
}
import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const PER_PAGE = 12;

export const fetchImages = async (query, page) => {
  const { data } = await axios.get('/search/photos', {
    params: { query, page, per_page: PER_PAGE },
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    },
  });
  return data;
};

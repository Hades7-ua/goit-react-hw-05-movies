import axios from 'axios';
const API_KEY = '46a0cf4d73079c81a4257338e6778956';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};
// console.log(fetchTrendMovies())
export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data;
};


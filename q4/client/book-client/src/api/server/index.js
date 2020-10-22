import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/';
const BOOKS = 'books/';

export default {
  fetchBooks() {
    return axios
      .get(`${API_URL}${BOOKS}`)
      .then((response) => response.data);
  },
};

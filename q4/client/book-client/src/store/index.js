import Vue from 'vue';
import Vuex from 'vuex';
import client from 'api-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    book: {},
  },
  mutations: {
    FETCH_BOOKS(state, books) {
      state.books = books;
    },
    FETCH_BOOK(state, book) {
      state.book = book;
    }
  },
  actions: {
    fetchBooks({ commit }) {
      return client.fetchBooks()
        .then((response) => {
          commit("FETCH_BOOKS", response.books);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
    fetchBook({ commit }, bookSlug) {
      return client.fetchBook(bookSlug)
        .then((response) => {
          commit("FETCH_BOOK", response);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
  },
  modules: {
  },
});

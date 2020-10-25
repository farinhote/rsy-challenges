import Vue from 'vue';
import Vuex from 'vuex';
import client from 'api-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    book: {},
    filter: ''
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setBook(state, book) {
      state.book = book;
    },
    setFilter(state, filter) {
      state.filter = filter;
    }
  },
  actions: {
    fetchBooks({ commit }, params) {
      return client.fetchBooks(params)
        .then((response) => {
          commit("setBooks", response.books);
          commit("setFilter", params.filter);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
    fetchBook({ commit }, bookSlug) {
      return client.fetchBook(bookSlug)
        .then((response) => {
          commit("setBook", response);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
  },
  modules: {
  },
});

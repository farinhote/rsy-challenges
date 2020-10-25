import Vue from 'vue';
import Vuex from 'vuex';
import client from 'api-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    book: {},
    filter: '',
    count: 0,
    page: 1,
    pageSize: 5,
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
    },
    setCount(state, count) {
      state.count = count;
    },
    setPage(state, page) {
      state.page = page;
    },
    setPageSize(state, pageSize) {
      state.pageSize = pageSize;
    }
  },
  actions: {
    fetchBooks({ commit }, params) {
      return client.fetchBooks(params)
        .then((response) => {
          commit("setBooks", response.books);
          commit("setCount", response.meta.count);
          commit("setFilter", params.filter || this.state.filter);
          commit("setPage", params.page || this.state.page);
          commit("setPageSize", params.pageSize || this.state.pageSize);
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

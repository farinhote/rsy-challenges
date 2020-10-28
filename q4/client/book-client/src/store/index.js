import Vue from 'vue';
import Vuex from 'vuex';
import client from 'api-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    book: {},
    count: 0,
    params: {
      filter: '',
      page: 1,
      pageSize: 5,
    }
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setBook(state, book) {
      state.book = book;
    },
    setCount(state, count) {
      state.count = count;
    },
    setParams(state, params) {
      state.params = params;
    }
  },
  actions: {
    fetchBooks({ commit }, params) {
      commit("setParams", { ...this.state.params, ...params });

      return client.fetchBooks(this.state.params)
        .then((response) => {
          const { books, meta: { count } } = response;
          commit("setBooks", books);
          commit("setCount", count);

          if (count <= books.length) {
            commit("setParams", { ...this.state.params, page: 1 });
          }
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

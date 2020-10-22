import Vue from 'vue';
import Vuex from 'vuex';
import client from 'api-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    FETCH_BOOKS(state, books) {
      state.books = books
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
  },
  modules: {
  },
});

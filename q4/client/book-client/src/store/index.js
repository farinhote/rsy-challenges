import Vue from 'vue';
import Vuex from 'vuex';
import client from 'api-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    FETCH_BOOKS(state, books) {
      state.books = books
    }
  },
  mutations: {
  },
  actions: {
    fetchBooks({ commit }) {
      return new Promise((resolve, reject) => {
        client
          .fetchBooks()
          .then((response) => {
            commit("FETCH_BOOKS", response.body);
            resolve();
          })
          .catch((error) => {
            console.log(error.statusText);
          });
      });
    },
  },
  modules: {
  },
});

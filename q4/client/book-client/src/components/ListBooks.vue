<template>
  <fragment>
    <h1>Top books of all time</h1>
    <Book v-for="book in books" :key="book.slug" :book="book" />
  </fragment>
</template>

<script>

import { Fragment } from 'vue-fragment';
import Book from '@/components/Book.vue';

export default {
  name: "ListBooks",
  components: { Fragment, Book },

  created() {
    this.$store.dispatch("fetchBooks");
  },

  computed: {
    books () {
      return this.$store.state.books
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

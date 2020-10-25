<template>
  <fragment>
    <h1>Top books of all time</h1>
    <Search />
    <div class="book-wrapper">
      <!-- Hacky workaround for v-deep -->
      <Book
        v-for="(book, index) in books"
        :key="book.slug"
        :book="{ ...book, position: index + 1 }"
      />
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { debounce } from "lodash";
import Book from "@/components/Book.vue";
import Search from "@/components/Search.vue";

export default {
  name: "ListBooks",
  components: { Fragment, Book, Search },

  created() {
    this.$store.dispatch("fetchBooks");
  },

  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  @include title();
  padding-bottom: 0;
}

.book-wrapper ::v-deep .book:nth-child(odd) {
  background-color: $secondary-background;
}
</style>

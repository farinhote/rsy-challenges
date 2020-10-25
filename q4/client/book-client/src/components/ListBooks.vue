<template>
  <fragment>
    <h1>Top books of all time</h1>
    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder="Search"
        name="search"
        id="search"
        v-model="filter"
      />
      <label for="search" class="form__label">Search</label>
    </div>
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

export default {
  name: "ListBooks",
  components: { Fragment, Book },
  data() {
    return {
      filter: "",
    };
  },

  created() {
    this.$store.dispatch("fetchBooks");
  },

  methods: {
    debouncedFilterChange(filter) {
      const debounced = debounce(() => {
        this.$store.dispatch("fetchBooks", { filter: this.filter} );
      }, 500);

      debounced();
    },
  },

  computed: {
    books() {
      return this.$store.state.books;
    },
  },

  watch: {
    filter: function (newFilter, oldFilter) {
      this.debouncedFilterChange(newFilter);
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

// https://codepen.io/lucasyem/pen/ZEEYKdj
.form__group {
  position: relative;
  padding: 15px 0 0;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $accent-color;
  outline: 0;
  font-size: 1.3rem;
  color: $accent-color;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $accent-color;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $accent-color;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $accent-color, $accent-color-darker);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
</style>

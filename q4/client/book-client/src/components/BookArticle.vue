<template>
  <fragment>
    <div v-if="book.slug" class="book">
      <div class="book-info">
        <div class="header">
          <span class="title">{{ this.book.title }}</span>
          <span class="rating">{{ rating }}</span>
        </div>
        <div class="author">{{ book.author }}</div>
        <div class="synopsis">{{ book.synopsis }}</div>
        <Vote :upvotes="book.upvotes" :upvoted="book.upvoted" />
      </div>
    </div>
    <div v-else class="loader"></div>
  </fragment>
</template>

<script>
import { truncate } from "lodash";
import { Fragment } from "vue-fragment";
import Vote from "@/components/Vote.vue";

export default {
  name: "BookArticle",
  components: { Fragment, Vote },
  data() {
    return {
      book: {},
    };
  },

  created() {
    // If the last book is still in store we clean it up before fetching a new one
    if (this.$store.state.book.slug) this.$store.commit("FETCH_BOOK", {});

    this.$store.dispatch("fetchBook", this.$route.params.id).then(() => {
      this.book = this.$store.state.book;
    });
  },

  computed: {
    rating() {
      return `Rating: ${this.book.rating}/10`;
    },
  },
};
</script>

<style lang="scss">
@include loading-spinner();

.title {
  @include book-title();
}

a {
  text-decoration: none;

  .rating {
    font: 100% $font;
    color: $primary-color;
  }
}

.book {
  display: grid;
  grid-template-columns: 5fr 1fr;

  min-height: 14rem;

  .book-info {
    align-self: start;
    text-align: start;
    margin: 1rem 2rem;
    .author {
      font-style: italic;
      font-size: 0.8rem;

      padding: 0.8rem 0 1rem 0;
    }
  }

  img {
    align-self: center;
    justify-self: center;
    border-radius: $border-radius;
    height: 12rem;
    cursor: pointer;
    margin-right: 1rem;
  }
}
</style>

<template>
  <fragment>
    <div v-if="book.slug" class="book">
      <div class="book-info">
        <div class="header">
          <span class="title">{{ this.book.title }}</span>
          <Vote :upvotes="book.upvotes" :upvoted="book.upvoted" />
        </div>
        <div class="author">{{ book.author }}</div>
        <img :src="book.cover" />
        <div class="book-data">
          <h1 class="synopsis-title">Synopsis</h1>
          <div class="synopsis">{{ book.synopsis }}</div>
          <div class="rating">{{ rating }}</div>
        </div>
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

<style scoped lang="scss">
@include loading-spinner();

.header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  .title {
    @include book-title(2rem, 700);
  }
}

a {
  text-decoration: none;

  .rating {
    font: 100% $font;
    color: $primary-color;
  }
}

.book {
  .book-info {
    padding: 0 2rem;
    .author {
      text-align: start;
      font-style: italic;
      font-size: 1.2rem;
      padding-bottom: 1rem;
    }
  }

  img {
    border-radius: $border-radius;
    margin: 0 auto;
  }
}

.book-data {
  text-align: start;
  .synopsis {
    padding: 1rem 0;
  }

  .rating {
    font-weight: 700;
  }
}
</style>

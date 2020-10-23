<template>
  <div class="book">
    <div class="book-info">
      <div class="header">
        <span class="title">{{ title }}</span>
        <span class="rating">{{ rating }}</span>
      </div>
      <div class="author">{{ book.author }}</div>
      <div class="synopsis">{{ synopsis }}</div>
      <Vote :upvotes="book.upvotes" :upvoted="book.upvoted" />
    </div>
    <img :src="book.cover" />
  </div>
</template>

<script>
import { truncate } from "lodash";
import Vote from "@/components/Vote.vue";

export default {
  name: "Book",
  components: { Vote },
  props: {
    book: Object,
  },

  computed: {
    synopsis() {
      return truncate(this.book.synopsis, { length: 200 });
    },
    title() {
      return `${this.book.position}. ${this.book.title}`;
    },
    rating() {
      return `(${this.book.rating}/10)`;
    },
  },
};
</script>

<style lang="scss">
.title {
  @include book-title();
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
    border-radius: $border-radius;
    height: 12rem;
  }
}
</style>

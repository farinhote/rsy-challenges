<template>
  <div class="book">
    <div class="book-info">
      <div>
        <div class="title">{{ title }}</div>
        <div class="rating">{{ rating }}</div>
      </div>
      <div class="author">{{ book.author }}</div>
      <div class="synopsis">{{ synopsis }}</div>
      <div class="upvoted">
        <button @click="upvote">{{upvotedText}}</button>
        <span>{{ timesUpvoted }}</span>
      </div>
    </div>
    <img :src="book.cover" />
  </div>
</template>

<script>
import { truncate } from "lodash";

export default {
  name: "Book",
  components: {},
  props: {
    book: Object,
  },

  data() {
    return {
      upvoted: this.book.upvoted,
      upvotes: this.book.upvotes
    };
  },

  methods: {
    upvote() {
      this.upvoted ? this.upvotes -= 1 : this.upvotes += 1;

      this.upvoted = !this.upvoted;
    },
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
    upvotedText() {
      return this.upvoted ? "Upvoted" : "Upvote";
    },
    timesUpvoted() {
      const upvotedText = `Upvote ${this.upvotes} time`;
      const times = this.upvotes === 1 ? "" : "s";

      return `${upvotedText}${times}`;
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

  height: 16rem;
  align-items: center;

  .book-info {
    margin: 2rem;
  }

  img {
    border-radius: $border-radius;
    height: 10rem;
  }
}
</style>

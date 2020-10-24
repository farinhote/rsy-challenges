<template>
  <div class="upvote">
    <button @click="upvote" :class="{ active: isUpvoted }">
      {{ upvotedText }}
    </button>
    <span>{{ timesUpvoted }}</span>
  </div>
</template>

<script>
import Vote from "@/components/Vote.vue";

export default {
  name: "Vote",
  components: {},
  props: {
    upvoted: Boolean,
    upvotes: Number,
  },

  data() {
    return {
      isUpvoted: this.upvoted,
      numberOfUpvotes: this.upvotes,
    };
  },

  methods: {
    upvote() {
      this.isUpvoted
        ? (this.numberOfUpvotes -= 1)
        : (this.numberOfUpvotes += 1);

      this.isUpvoted = !this.isUpvoted;
    },
  },

  computed: {
    upvotedText() {
      return this.isUpvoted ? "Upvoted" : "Upvote";
    },
    timesUpvoted() {
      const upvotedText = `Upvoted ${this.numberOfUpvotes} time`;
      const times = this.numberOfUpvotes === 1 ? "" : "s";

      return `${upvotedText}${times}`;
    },
  },
};
</script>

<style scoped lang="scss">
.upvote {
  padding: 1rem;
  padding-top: 2rem;

  button {
    background: $accent-color;
    color: $secondary-color;
    padding: 0.6rem 1rem;
    margin-right: 1rem;
    border-radius: $border-radius * 1.4;
    cursor: pointer;
    border-style: none;
    outline: none;

    &.active {
      border: 2px solid $accent-color;
      padding: calc(0.6rem - 2px) 1rem;
      color: $accent-color;
      background: $secondary-background;
    }
  }
}
</style>

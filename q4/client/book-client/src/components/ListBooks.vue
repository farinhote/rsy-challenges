<template>
  <fragment>
    <h1>Top books of all time</h1>
    <div class="book">eu</div>
  </fragment>
</template>

<script>

import { Fragment } from 'vue-fragment';

export default {
  name: "ListBooks",
  components: { Fragment },
  props: {
    msg: String,
  },

  created() {
    this.$store.dispatch("fetchBooks");
  },

  computed: {
    books () {
      return store.state.books
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

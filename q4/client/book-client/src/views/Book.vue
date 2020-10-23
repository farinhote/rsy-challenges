<template>
  <fragment>
    <div class="book-wrapper">  <!-- Hacky workaround for v-deep -->
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "Book",
  components: { Fragment },

  created() {
    // If the last book is still in store we clean it up before fetching a new one
    if (this.$store.state.book.slug) this.$store.commit('FETCH_BOOK', {});

    this.$store.dispatch('fetchBook', this.$route.params.id);
  },

  computed: {
    book() {
      return this.$store.state.book;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

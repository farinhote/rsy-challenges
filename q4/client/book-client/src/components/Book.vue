<template>
  <fragment>
    <div>{{ book.title }}</div>
    <img :src="book.cover">
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "Book",
  components: { Fragment },
  props: {
    book: Object,
  },
};
</script>

<style lang="scss">

div {
  background-color: $primary-color;
}

img {
  max-height: 300px;
}
</style>

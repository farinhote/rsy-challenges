<template>
  <div class="book-wrapper">
    <BookArticle />
  </div>
</template>

<script>
import BookArticle from "@/components/BookArticle.vue";

export default {
  name: "Book",
  components: { BookArticle },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.book-wrapper {
  @include view-element();
  background-color: $secondary-background;
}
</style>

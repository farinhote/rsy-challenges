<template>
  <div class="home-wrapper">
    <ListBooks/>
  </div>
</template>

<script>

import ListBooks from '@/components/ListBooks.vue';

export default {
  name: 'Home',
  components: {
    ListBooks,
  },
};
</script>

<style scoped lang="scss">
.home-wrapper {
  @include view-element();
}
</style>
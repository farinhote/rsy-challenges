<template>
  <div class="home">
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
.home {
  @include center();
  box-shadow: 0 4px 10px gray;
}
</style>
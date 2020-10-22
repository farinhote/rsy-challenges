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
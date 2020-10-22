<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListBooks/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListBooks from '@/components/ListBooks.vue';

export default {
  name: 'Home',
  components: {
    ListBooks,
  },
};
</script>

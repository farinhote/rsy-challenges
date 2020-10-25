<template>
  <fragment>
    <div class="container">
      <div
        @click="previousPage"
        :class="{ disabled: previousDisable }"
        class="previous"
      >
        &lt;
      </div>
      <div @click="nextPage" :class="{ disabled: nextDisable }" class="next">
        >
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { debounce } from "lodash";

export default {
  name: "Pagination",
  components: { Fragment },
  data() {
    return {
      pageSize: 5,
      page: 1,
    };
  },

  methods: {
    previousPage() {
      if (!this.previousDisable) {
        this.page--;
      }
    },

    nextPage() {
      if (!this.nextDisable) {
        this.page++;
      }
    },
  },

  computed: {
    previousDisable() {
      return this.page <= 1;
    },
    nextDisable() {
      return this.page * this.pageSize >= this.$store.state.count;
    },
  },
  watch: {
    page: function (newPage, oldPage) {
      this.$store.dispatch("fetchBooks", {
        page: newPage,
        pageSize: this.pageSize,
        filter: this.$store.state.filter,
      });
    },
    pageSize: function (newPageSize, oldPageSize) {
      this.$store.dispatch("fetchBooks", {
        page: 1,
        pageSize: this.pageSize,
        filter: this.$store.state.filter,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  height: 4rem;
  div {
    line-height: 4rem;
    height: 100%;
    width: 50%;
  }
  font-size: 2rem;
  color: $accent-color;
  cursor: pointer;
  .previous {
    border-right: 1px solid $accent-color;
  }
}

.disabled {
  cursor: default;
  background-color: darken($color: gray, $amount: 10%);
}
</style>

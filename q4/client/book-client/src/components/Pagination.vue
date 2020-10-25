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
      return this.$store.state.params.page <= 1;
    },
    nextDisable() {
      return this.$store.state.params.page * this.$store.state.params.pageSize >= this.$store.state.count;
    },
    page: {
      get: function () {
        return this.$store.state.params.page;
      },
      set: function (newValue) {
        this.$store.commit("setParams", {
          ...this.$store.state.params,
          page: newValue,
        });
      },
    },
  },

  watch: {
    page: function (newPage, oldPage) {
      this.$store.dispatch("fetchBooks", {});
    },
    pageSize: function (newPageSize, oldPageSize) {
      this.$store.dispatch("fetchBooks", {
        page: 1,
        pageSize: this.pageSize,
        filter: this.$store.state.params.filter,
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

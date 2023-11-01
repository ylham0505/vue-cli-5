<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
  </div>
  <v-catalog />
  <v-cart />
</template>
  
  <script>
import vCatalog from "./v-catalog.vue";
import vCart from "./v-cart.vue";

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    vCart,
  },
  props: {},
  data() {
    return {
      title: "Main wrapper",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log("hello i am alive");
  },
};
</script>
  
  <style lang="scss">
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
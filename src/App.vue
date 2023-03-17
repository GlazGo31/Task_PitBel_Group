<template>
  <div class="app">
    <v-header/>
   <v-catalog/>
    <v-footer/>
  </div>
</template>

<script>

import VHeader from "@/components/v-Header.vue";
import VCatalog from "@/components/v-Catalog.vue";
import VCatalogItem from "@/components/v-Catalog-Item.vue";
import VFooter from "@/components/v-Footer.vue";

export default {
  name: 'App',
  components: {
    VFooter,
    VCatalog,
    VCatalogItem,
    VHeader
  },
}
</script>

<style>
.app {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>

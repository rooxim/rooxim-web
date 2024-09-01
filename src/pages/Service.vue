<script setup lang="ts">
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Services from "@/components/services.vue";
</script>
<template>
  <v-app>
    <Header/>
    <v-main>
      <services />
    </v-main>

    <Footer/>
  </v-app>
</template>

<style scoped lang="scss">
</style>

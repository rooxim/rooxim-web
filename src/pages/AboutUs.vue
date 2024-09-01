<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue';
import Info from "@/components/info.vue";
import Contact from "@/components/contact.vue";
</script>
<template>
  <v-app>
    <Header/>
    <v-main>
      <Info/>
      <Contact/>
    </v-main>

    <Footer />
  </v-app>
</template>

<style scoped lang="scss">
</style>

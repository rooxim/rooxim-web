<script setup lang="ts">
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import NewsTimeline from "@/components/newsTimeline.vue";


</script>
<template>

  <v-app>
    <Header/>
    <v-main>
      <news-timeline/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<style scoped lang="scss">

</style>

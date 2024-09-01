<script setup lang="ts">
import Header from '@/components/header.vue';
import mainArea from '@/components/main.vue';
import Footer from '@/components/footer.vue';
import Menu from '@/components/menu.vue';
import Contact from '@/components/contact.vue';
</script>
<template>
  <v-app class="content">
    <Header :allow-transparent="true"/>
    <v-main>
      <mainArea/>
      <Menu/>
      <Contact/>
    </v-main>

    <Footer />
  </v-app>
</template>
∂
<style scoped lang="scss">
.content{
  background-color: white;
}
</style>

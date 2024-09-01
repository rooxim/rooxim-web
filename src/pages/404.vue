<script setup lang="ts">
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>
<template>

  <v-app>
    <Header/>
    <v-main>
      <div class="root">
        <div>
          <p>お探しのページは存在しません。</p>
        </div>
        <div>
          <router-link to="/">topへ</router-link>
        </div>
      </div>
    </v-main>

    <Footer app/>
  </v-app>
</template>

<style scoped lang="scss">
.root{
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

<script setup lang="ts">
import Mail from "@/components/atoms/mail.vue";
</script>
<template>
  <v-container id="contact">
    <h1>お問い合わせ</h1>
    <div class="main">
      <Mail/>
    </div>
  </v-container>
</template>
<style scoped lang="scss">
#contact{
  text-align: center;

  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
}
</style>

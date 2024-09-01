<script lang="ts" setup>
</script>
<template>
  <v-btn class="btn" to="contact">
    <v-icon icon="mdi-email"></v-icon>
    <div>お問い合わせフォームへ</div>
  </v-btn>
</template>
<style scoped lang="scss">
.btn{
  background-color: #787878;
  color: #fff;
  font-weight: bold;
  .v-btn__content{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.btn-img{
  height: 25px;
  width: 25px;
}
</style>

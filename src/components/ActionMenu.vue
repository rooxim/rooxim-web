<script setup lang="ts">
import {onMounted, ref} from "vue";
import { mdiMenu, mdiInformationOutline } from '@mdi/js';

const show = ref<boolean>(true);
const showTooltip = ref(false);

const toggle = ()=>{
  if(show.value){
    showTooltip.value = false;
  }
  show.value = !show.value;
  setTimeout(()=>{
    showTooltip.value = show.value;
  },500)
}

onMounted(()=>{
  setTimeout(()=>{
    showTooltip.value = show.value;
  },500)
})

const menus = [
  {
    icon: mdiInformationOutline,
    target: '#worry',
    text: 'こんな悩みありませんか？'
  },
  {
    icon: mdiInformationOutline,
    target: '#advantages',
    text: 'メリット'
  },
  {
    icon: mdiInformationOutline,
    target: '#prices',
    text: '料金プラン'
  },
  {
    icon: mdiInformationOutline,
    target: '#join',
    text: 'お申し込み'
  },
  {
    icon: mdiInformationOutline,
    target: '#contact',
    text: 'お問い合わせ'
  },
];

</script>
<template>
  <div class="content">
    <v-expand-transition>
      <div class="menu" v-show="show">


        <v-tooltip
            v-for="item in menus"
            :model-value="showTooltip"
            @update:model-value="()=>{}"
            :text="item.text"
            location="start">
          <template v-slot:activator="{ props }">
            <v-btn
                :href="item.target"
                v-smooth-scroll="{
                  duration: 1000,
                  offset: -50,
                }"
                v-bind="props"
                :icon="mdiInformationOutline"
                size="large" />
          </template>
        </v-tooltip>
      </div>
    </v-expand-transition>
    <div class="menuExpander">
      <v-btn :icon="mdiMenu" size="x-large" :onclick="toggle" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menuExpander{
  margin-top: 20px;
}
.content{
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
}
.menu{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(v-bind('menus.length') * 60px);

}
</style>

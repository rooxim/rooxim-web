<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const props = defineProps(['allowTransparent'])

const route = useRoute();

const isTransparent = ref(false);
const isMobile = ref(false);
const activeTab = ref(route.path);

const tabs = [
  {
    path: '/',
    name: 'TOP'
  },
  {
    path: '/about',
    name: '会社概要'
  },
  {
    path: '/news',
    name: 'ニュース'
  },
  {
    path: '/service',
    name: 'サービス・製品'
  },
  {
    path: '/contact',
    name: 'お問い合わせ'
  }
]

const onScroll = ()=>{
  const y = window.scrollY;
  isTransparent.value = y<300;
}

const onResize = ()=>{
  const w = window.innerWidth;
  isMobile.value = w < 800;
}

onMounted(()=>{
  window.addEventListener('scroll',onScroll);
  window.addEventListener('resize', onResize);
  onScroll();
  onResize();
  return ()=>{
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
  }
})



</script>
<template>
    <v-app-bar fixed class="header" :style="{backgroundColor: props.allowTransparent && isTransparent?'rgba(255, 255, 255, 0.7)':'rgba(255, 255, 255, 1)'}">
      <v-app-bar-title>
        <router-link to="/">
          <picture class="logo">
            <source type="image/webp" srcset="@/assets/logo.png?preset=img&format=webp&srcset">
            <img src="@/assets/logo.png?preset=img&format=webp&src" srcset="@/assets/logo.png?preset=img&format=webp&srcset" alt="logo" />
          </picture>
        </router-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-tabs v-model="activeTab" v-if="!isMobile">
        <v-tab v-for="item in tabs"
               :key="item.path"
               :text="item.name"
               :value="item.path"
               :to="item.path"/>
      </v-tabs>

      <template v-slot:extension v-if="isMobile" >
        <v-tabs align-with-title v-model="activeTab">
          <v-tab v-for="item in tabs"
                 :key="item.path"
                 :text="item.name"
                 :value="item.path"
                 :to="item.path" />
        </v-tabs>
      </template>
    </v-app-bar>
</template>

<style scoped lang="scss">

.header{
  backdrop-filter: blur(5px);
  transition: background-color 1s ease;
}
.logo{
  source, img{
    max-height: 30px;
  }
}
.append{
  display: flex;
  justify-content: end;
  width: 350px;


  div{
    margin-left: 10px;
  }
}

.extension{
  width: 100%;

  .append{
    margin-right: auto;
    margin-left: auto;

    flex-direction: row;
    justify-content: center;
    align-items: center;


    width: 100%;

    div{
      padding: 10px 0;
    }

    @media screen and (max-width: 400px){
      flex-direction: column;

      div{
        padding: 2px 0;
      }

    }
  }
}
</style>

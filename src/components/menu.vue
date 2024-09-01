<script setup lang="ts">

const aboutKey = '/src/assets/about.png'
const newsKey = '/src/assets/news.png'
const serviceKey = '/src/assets/service.png'
const contactKey = '/src/assets/contact.png'

const webp = import.meta.glob('/src/assets/*.png',{
  eager: true,
  query: {preset:'img',format:'webp', src: true},
  import: 'default'
});

const toPath = (str:string)=> str.startsWith('.')?str.slice(1):str;
const aboutWebp = toPath(webp[aboutKey] as string)
const newsWebp = toPath(webp[newsKey] as string)
const serviceWebp = toPath(webp[serviceKey] as string)
const contactWebp = toPath(webp[contactKey] as string)

</script>
<template>
  <v-container class="main">
    <div>
      <v-row>
        <v-col cols="6">
          <v-card to="/about"
                  class="card elevation-6"
                  v-prlx="{ custom:true, limit:{min:0, max:100} }"
                  :style="{
                    '--imgWebp':`url(${aboutWebp})`
                  }"
          >
            <div class="item">会社概要</div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card to="/news"
                  class="card elevation-6"
                  v-prlx="{ custom:true, limit:{min:0, max:100} }"
                  :style="{
                    '--imgWebp':`url(${newsWebp})`
                  }"
          >
            <div class="item">ニュース</div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card to="/service"
                  class="card elevation-6"
                  v-prlx="{ custom:true, limit:{min:0, max:100} }"
                  :style="{
                    '--imgWebp':`url(${serviceWebp})`
                  }"
          >
            <div class="item">サービス・製品</div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card to="contact"
                  class="card elevation-6"
                  v-prlx="{ custom:true, limit:{min:0, max:100} }"
                  :style="{
                    '--imgWebp':`url(${contactWebp})`
                  }"
          >
            <div class="item">お問い合わせ</div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<style scoped lang="scss">
.main{
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;

  >div{
    width: 100%;
  }
}

.card{
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before{
    content: '';

    background-image: var(--imgWebp);
    background-position: 50% calc(55% - (100 - var(--parallax-value))/100 * 10%);
    background-size: 1000px;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(3px);
  }

  &:hover:before {
    filter: blur(10px);
  }


  .item{
    color: #ffffff;
    font-size: 23px;
    font-weight: bold;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    padding: 20px;
    text-align: center;
  }
}
</style>

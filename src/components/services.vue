<script setup lang="ts">

const systemKey = '/src/assets/service_system.png'
const packageKey = '/src/assets/service_package.png'
const supportKey = '/src/assets/service_support.png'
const offshoreKey = '/src/assets/service_offshore.png'

const webp = import.meta.glob('/src/assets/*.png',{
  eager: true,
  query: {preset:'img',format:'webp', src: true},
  import: 'default'
});
console.log(webp)
const toPath = (str:string)=> import.meta.env.BASE_URL + str.startsWith('.')?str:('.'+str);
const systemWebp = toPath(webp[systemKey] as string)
const packageWebp = toPath(webp[packageKey] as string)
const supportWebp = toPath(webp[supportKey] as string)
const offshoreWebp = toPath(webp[offshoreKey] as string)

console.log(systemWebp,packageWebp,supportWebp,offshoreWebp)

const services = [
  {
    name: 'システム開発',
    img: systemWebp,
    icon: 'mdi-wrench',
    content: 'スマホアプリ、WEBシステム、業務システム開発を特に強みとしており、お客様が求めるシステムを開発させて頂きます。' +
        '基幹システムやCDP、CRM、他システムとの連携など、ご要望に応じて要件定義を行い、開発を行います。。'
  },
  {
    name: 'パッケージ開発',
    img: packageWebp,
    icon: 'mdi-package',
    content: 'パッケージを用いた開発を提供させて頂いています。' +
        '特にMagento、EC-CUBEを用いたECサイト開発WordPressでのサイト構築を得意としております。'
  },
  {
    name: '技術支援',
    img: supportWebp,
    icon: 'mdi-account',
    content: '開発したいけど技術的に不安がある。そんな方向けに技術支援をさせていただきます。'
  },
  {
    name: 'オフショア事業支援',
    img: offshoreWebp,
    icon: 'mdi-earth',
    content: '開発内容、開発サイクルのヒアリングによる人材分野、規模調整により、事業内容に対する人材マネジメントとお客様に合ったスケールを構築します。'
  }
]

</script>
<template>
  <v-container>
    <h1>サービス・製品</h1>
    <v-row>
      <v-col
          v-for="item in services"
          cols="12"
          md="6"
          sm="12"
      >
        <v-card class="card">
          <v-img
              height="300px"
              :src="item.img"
              cover>
            <div class="title">
              <v-icon :icon="item.icon" />
              {{item.name}}
            </div>
          </v-img>
          <v-card-text class="content">
            {{item.content}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped lang="scss">
.card{
  height: 420px;
}
.title{
  font-size: 1.25rem !important;
  font-weight: 500;
  letter-spacing: 0.0125em !important;
  font-family: "Roboto", sans-serif;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);

  backdrop-filter: blur(5px);

  margin: 0;
  padding: 15px 10px;
}
.content{
  font-size: 16px;
}
</style>

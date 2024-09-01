<script setup lang="ts">

const webp = import.meta.glob('/src/assets/main.png',{
  eager: true,
  query: {preset:'img',format:'webp', src: true},
  import: 'default'
})

const toPath = (str:string)=> import.meta.env.BASE_URL+ str.startsWith('.')?str:('.'+str);
const imgWebp = toPath(webp['/src/assets/main.png'] as string)

console.log(imgWebp)

</script>
<template>
  <div fluid >
    <div class="main"
         v-prlx.background="{ direction: 'y', speed: 0.07 }"
         :style="{
            '--imgWebp':'url('+imgWebp+')'
    }">
      <div class="content" v-prlx="{ speed: 0.4, limit: {min:0, max:390}}" v-prlx.mobile="{ speed: 0.4, limit: {min:0, max:390}}">
        <div class="subMessage">
          Think next always.
        </div>
        <div class="message">ROOXIM</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main{
  height: 550px;
  background-image: var(--imgWebp);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin-top: -120px;
  position: relative;
  &:after{
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    //box-shadow: inset 0 -20px 10px -10px white;
  }
}
.content{
  margin-top: -400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
  background-color: rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.17);
  backdrop-filter: blur(1px);
}
.message{
  font-weight: bold;
  font-size: 40px;
  color: #ffffff;
}
.subMessage{
  color: #ffffff;
  font-size: 25px;
}

</style>
<script setup lang="ts">
</script>

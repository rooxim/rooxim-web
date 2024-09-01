<template>
  <v-footer class="elevation-2" style="margin-top: 50px">
    <v-container >
      <div class="main">
        <v-row>
          <v-col cols="12" md="4" sm="4" class="logo">
            <picture>
              <source type="image/webp" srcset="@/assets/logo.png?preset=img&format=webp&srcset">
              <img src="@/assets/logo.png?preset=img&format=webp&src" srcset="@/assets/logo.png?preset=img&format=webp&srcset" alt="logo" />
            </picture>
          </v-col>
          <v-col cols="12" md="4" sm="8" class="company">
            <table>
              <tr>
                <td><v-icon icon="mdi-phone"/></td>
                <td>+81 (0)50-3136-6541</td>
              </tr>
              <tr>
                <td><v-icon icon="mdi-map-marker"/></td>
                <td>
                  〒150-0043<br>
                  東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C
                </td>
              </tr>
              <tr>
                <td><v-icon icon="mdi-email"/></td>
                <td>info@mail.rooxim.com</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="12" md="4" sm="12" class="menu">
            <div>
              <div class="title">リンク</div>
              <ul>
                <li>
                  <router-link to="/" v-if="$route.path!='/'">TOP</router-link>
                  <span v-else>TOP</span>
                </li>
                <li>
                  <router-link to="/about" v-if="$route.path!='/about'">会社概要</router-link>
                  <span v-else>会社概要</span>
                </li>
                <li>
                  <router-link to="/src/components/newsTimeline" v-if="$route.path!='/news'">ニュース</router-link>
                  <span v-else>ニュース</span>
                </li>
                <li>
                  <router-link to="/service" v-if="$route.path!='/service'">サービス・製品</router-link>
                  <span v-else>サービス・製品</span>
                </li>
                <li>
                  <router-link to="/contact" v-if="$route.path!='/contact'">お問い合わせ</router-link>
                  <span v-else>お問い合わせ</span>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="footer">
        @Copyright 2024 ROOXIM株式会社
      </div>
    </v-container>
  </v-footer>

</template>
<style scoped lang="scss">
.footer{
  margin-top: 20px;
  text-align: center;
}
.main{
  margin-top: 30px;
  width: 100%;

  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    source, img{
      max-height: 60px;
      max-width: 100%;
    }
  }
  .menu{
    text-align: left;
    display: flex;
    align-items: start;
    justify-content: center;
    padding-right: 40px;

    .title{
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }

    ul>li{
      font-size: 18px;
      list-style: none;
      padding-top: 15px;
      text-align: center;
    }
  }

  .company{
    table{
      tr{
        td{
          padding-top: 15px;
          &:first-child{
            vertical-align: top;
          }
        }
      }
    }
  }
}


</style>
<script setup lang="ts">
</script>

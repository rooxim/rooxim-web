<script setup lang="ts">

</script>

<template>
  <v-container id="info">
    <h1>会社情報</h1>
    <div class="main">
      <div>
        <div class="name">ROOXIM株式会社</div>
        <table>
          <tr>
            <td>
              業態・業種
            </td>
            <td>
              インターネットサービス事業
            </td>
          </tr>
          <tr>
            <td>
              役員
            </td>
            <td>
              <table class="boardMember">
                <tr>
                  <td>
                    代表取締役<br>会長CEO
                  </td>
                  <td>
                    山本 崇晴
                  </td>
                </tr>
                <tr>
                  <td>
                    代表取締役<br>社長 COO
                  </td>
                  <td>
                    上原 悠斗
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>事業内容</td>
            <td>
              Webアプリケーション開発<br>
              スマートフォン向けアプリケーション開発<br>
              インターネットサービス運営<br>
              オフショア事業支援<br>
            </td>
          </tr>
          <tr>
            <td>法人番号</td>
            <td>2011001093575</td>
          </tr>
          <tr>
            <td>インボイス登録番号</td>
            <td>T2011001093575</td>
          </tr>
          <tr>
            <td>郵便番号</td>
            <td>〒150-0043</td>
          </tr>
          <tr>
            <td>住所</td>
            <td>東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C</td>
          </tr>
          <tr>
            <td>電話番号</td>
            <td>+81 (0)50-3136-6541</td>
          </tr>
          <tr>
            <td>お問い合わせ</td>
            <td>info@mail.rooxim.com</td>
          </tr>
        </table>
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
#info{
  margin-top: 20px;
  .title{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .main{
    display: flex;
    justify-content: center;
    >div{
      justify-content: center;
    }

    .name{
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
    table{
      border-spacing: 0;
      td{
        border-bottom: 1px solid #d1d1d1;
        border-right: none;
        border-left: none;
        padding-top: 20px;
        padding-right: 20px;
        padding-left: 20px;
        vertical-align: bottom;

        &:first-child{
          text-align: right;
        }


        .boardMember{
          td{
            text-align: left;
            border: none;
            padding: 0;
          }
          td:first-child{
            width: 120px;
          }
        }
      }
    }

    table{
      font-size: 18px;
      td:first-child{
        width: 150px;
      }
    }
  }

  @media only screen and (max-width: 750px) {
    .main{
      flex-direction: column;

      table{
        font-size: 20px;
        td{
          .boardMember{
            td{
              text-align: left;
              border: none;
              padding: 0;
            }
            td:first-child{
              width: 120px;
            }
          }
        }
      }
    }
  }
}
</style>

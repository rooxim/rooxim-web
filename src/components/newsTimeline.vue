<script setup lang="ts">
const timelines = [
  {
    date: '2016/09/13',
    title: '開発拠点設立',
    content: `ベトナム、ホーチミン市に開発拠点を設立しました。`,
    color: 'blue'
  },
  {
    date: '2017/10/20',
    title: '完全子会社設立',
    content: ` ベトナム、ホーチミン市に完全子会社「ROOXIM COMPUTER SCIENCE Co.,Ltd」を設立しました。`,
    color: 'blue'
  },
  {
    date: '2019-07-09',
    title: '本店移転',
    content: `「東京都 渋谷区 南平台町15-10 南平台プチビル2F」に本店を移転しました。`,
    color: 'red'
  },
  {
    date: '2024/06/30',
    title: '本店移転',
    content: `「東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C」に本店を移転しました。`,
    color:'red'
  },
]
</script>
<template>
  <v-container>
    <h1>ニュース</h1>
    <v-timeline reverse side="end" size="small" density="comfortable">
      <v-timeline-item
          v-for="timeline in timelines.reverse()"
          :dot-color="timeline.color"
          width="100%"
      >
        <template v-slot:opposite>
          {{timeline.date}}
        </template>
        <v-row>
          <v-col cols="12">
            <v-card style="width: 100%;">
              <v-card-title :class="['text-h6', `bg-${timeline.color}`]">
                {{timeline.title}}
              </v-card-title>
              <v-card-text class="bg-white text--primary">
                <div class="content">{{timeline.content}}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<style scoped lang="scss">
.content{
  margin-top: 10px;
  font-size: 16px;
}
</style>

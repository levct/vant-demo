<template>
  <div>
    <van-grid :gutter="0">
      <van-grid-item v-for="item in hotList" :key="item.id" icon="photo-o" :text="item.title" />
    </van-grid>
    <van-cell-group>
      <van-cell title="家居百货排行榜" value="高销量/好口碑" icon="location-o" />
    </van-cell-group>
    <van-grid :border="false" :column-num="3">
      <van-grid-item text="撒的">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
       
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { hotList } from "./Index";
export default {
  data() {
    return {
      hotList
    };
  }
};
</script>

<style scoped>
.van-cell {
  margin-top: 1em;
}
</style>

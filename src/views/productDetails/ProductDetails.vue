<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
        style="height:400px;  overflow: hidden;"
      >
        <img v-lazy="image" class="sq" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group id="cel">
      <van-cell title="¥：1" value="以拼10w单" />
      <van-cell value="新人专享， 描述文本" />
    </van-cell-group>
    <van-cell title="路由跳转" is-link to="/" />

    <van-cell-group id="cel">
      <van-cell title="商品评论" value="查看更多" />
      <div>
        用户评论<br>
        用户评论
      </div>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="收藏" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" to="/pay" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "http://img1.imgtn.bdimg.com/it/u=3790916440,1554772441&fm=26&gp=0.jpg",
        "http://img4.imgtn.bdimg.com/it/u=2250957011,787220147&fm=26&gp=0.jpg"
      ]
    };
  }
};
</script>

<style scoped>
.sq {
  overflow: hidden;
}
#cel >>> .van-cell__title {
  display: flex;
  position: fixed;
  left: 1em;
}
</style>
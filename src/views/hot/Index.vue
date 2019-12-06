<template>
  <div>
    <div class="box">
      <van-grid :gutter="0" :border="false">
        <van-grid-item  v-for="item in hotList" :key="item.index" :icon="as" :text="item.title" />
      </van-grid>
    </div>

    <van-cell-group>
      <van-cell title="家居百货排行榜" value="高销量/好口碑" icon="location-o" />
    </van-cell-group>
    <van-grid :border="false" :column-num="3">
      <van-grid-item text="撒的">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />手机
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />电脑
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />平板
      </van-grid-item>
    </van-grid>
    <van-card
      :num="item.num"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      v-for="item in products"
      :key="item.id"
      @click="productDetails(item.id)"
    />
  </div>
</template>

<script>
import { hotList } from "./Index";
export default {
  data() {
    return {
      hotList,
      // imgg:this.img,

      products: [
        {
          id: "1",
          num: "1",
          title: "男装",
          desc: "男装描述信息",
          price: "2.00",
          thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg"
        },
        {
          id: "2",
          num: "2",
          title: "女装",
          desc: "女装描述信息",
          price: "2.00",
          thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg"
        },
        {
          id: "3",
          num: "3",
          title: "童装装",
          desc: "童装装描述信息",
          price: "2.00",
          thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg"
        }
      ]
    };
  },
  methods: {
    // id
    productDetails() {
      // this.$router.push({ path: "productDetails", query: { productid: id } });
      console.log( this.img);
    }
  },
  computed:{
    img() {
      let imgPath = [];
      for(let i = 0; i < this.hotList.length; i++) {
        imgPath.push(this.hotList[i].imgPath);
      }
      return imgPath;
    }
  }
};
</script>

<style scoped>
.van-cell {
  margin-top: 1em;
}

.van-grid-item::after {
  border-width: 0px;
  border: none
}

.box {
  height: 170px;
  overflow: scroll;
}

.box::-webkit-scrollbar {
  display: none;
}

</style>

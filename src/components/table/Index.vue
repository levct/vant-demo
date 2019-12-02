<template>
  <div>
    <van-tabs v-model="active">
      <van-tab v-for="item in tables" :key="item.id" :title="item.name" :to="item.path">
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { tables } from "./Index";

export default {
  data() {
    return {
      active: 0,
      tables,
    };
  },
};
</script>

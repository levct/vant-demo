<template>
  <div class="home">
    <t-tables></t-tables>
    <t-tbar></t-tbar>
  </div>
</template>

<script>
import TTables from "../components/table/Index.vue";
import TTbar from "../components/tablebar/Index.vue";
export default {
  components:{
    TTables,
    TTbar,
  }
}
</script>

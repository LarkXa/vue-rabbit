<script setup>

</script>

<template>
  <!-- 一级路由出口组件 -->
   <router-view/>
  <el-button type="primary">Primary</el-button>
  <div class="test">test css</div>
</template>

<style scoped lang="scss">
.test{
  color:$priceColor
}
</style>

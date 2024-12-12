<template>
  <div>这是主 页面</div>
  <LayoutNav />
<LayoutHeader />
<RouterView />
<LayoutFooter />

  <!-- 子路由需要在父路由配置路由出口 -->
</template>

<script setup>
import LayoutNav from '@/views/Layout/conponents/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/conponents/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/conponents/LayoutFooter.vue'
import { RouterView } from 'vue-router';
</script>

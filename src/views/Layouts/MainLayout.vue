<template>
  <a-layout style="height: 100vh;">
    <a-layout-sider breakpoint="lg" collapsed-width="0">
      <div class="logo" />
      <a-menu theme="dark" mode="inline">
        <a-menu-item :key="category.id" v-for="category in categories">
          <user-outlined />
          <RouterLink :to="'/category/'+ category.id" class="nav-text">{{ category.title }}</RouterLink>
        </a-menu-item>

      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 , 'text-align':'right', 'margin-right':'10px'}" >

        <RouterLink to="/cart" type="primary">
          Sepet
        </RouterLink>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"><RouterView/></div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { UserOutlined, } from '@ant-design/icons-vue';
import supabase from '@/plugin/supaBaseClients';


const categories = ref();

onMounted(async () => {
  const {data} = await supabase.from("categories").select();
  categories.value = data;
})
</script>
<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>

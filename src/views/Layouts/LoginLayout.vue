<template>
  <a-layout class="layout">

    <a-layout-content :class="{layout_content:true}">
      <div class="layout_content_item"><RouterView></RouterView></div>
    </a-layout-content>

    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>

  </a-layout>
</template>
<script lang="ts" setup>

</script>
<style scoped>
.layout{
  height: 100vh;
  width: 100%;
}

.layout_content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.layout_content_item{
  width: 100%;
}

.layout-item{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>

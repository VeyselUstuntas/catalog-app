<template>
  <component :is="layout"></component>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import LoginLayout from './views/Layouts/LoginLayout.vue';
import MainLayout from './views/Layouts/MainLayout.vue';
import { onMounted, ref, watch } from 'vue';
import categoryService from './services/categoryService';

const route = useRoute();
const layout = ref();

watch(
  () => route.meta.layout,
  (value) => {
    if(value == "MainLayout"){
      layout.value = MainLayout;
    }
    else if(value == "LoginLayout"){
      layout.value = LoginLayout;
    }
  }
)


onMounted(async () => {
  const data = await categoryService.getCategories();

})


</script>

<template>
  <div>
    <h1>categories</h1>
    <a-breadcrumb v-if="category">
      <a-breadcrumb-item>Kategoriler</a-breadcrumb-item>
      <a-breadcrumb-item active>{{ category?.title }}</a-breadcrumb-item>
    </a-breadcrumb>

    <a-divider></a-divider>

    <a-skeleton v-if="loading" />
    <p v-else>
      <a-empty v-if="products.length < 1" description="Bu Kategoriye Ait Ürün Bulunamadı"></a-empty>
      <a-row :gutter="16" v-else>
        <a-col :span="4" v-for="product in products" :key="product.id">
          <a-card hoverable style="width: 240px">
            <template #cover>
              <img alt="example"
                src="https://i.hizliresim.com/9vonhwk.jpg?_gl=1*13e7nqs*_ga*MTY1NDY1MzcyLjE3MzUzMDgzMTM.*_ga_M9ZRXYS2YN*MTczNTMwODMxMi4xLjEuMTczNTMwODMzNC4zOC4wLjA." />
            </template>
            <a-card-meta :title="product.title">
              <template #description>{{ product.price }}{{ product.currency }}</template>
            </a-card-meta>

            <template #actions>
              <a-button type="primary" @click="handleAddChart(product)">Sepete Ekle</a-button>
            </template>
          </a-card>
        </a-col>
      </a-row>
    </p>
  </div>
</template>

<script setup lang="ts">
import cartService from '@/services/cartService';
import categoryService from '@/services/categoryService';
import productService from '@/services/productService';
import { useAuthStore } from '@/stores/authStore';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const products = ref();
const loading = ref(true);
const category = ref();

const authStore = useAuthStore();


const loadProducts = async () => {
  loading.value = true;
  const { data: productsData } = await productService.getProducts(route.params.id);
  const { data: categoryData } = await categoryService.getCategory(route.params.id);
  category.value = categoryData;
  products.value = productsData;


  loading.value = false;
}

watch(
  () => route.params.id,
  async () => await loadProducts()
);

const handleAddChart = async (product: any) => {
  await cartService.addCartItem(authStore.userId, product.id);

  alert('Ürün Başarıyla Eklendi');

}

onMounted(async () => {
  await loadProducts();
})

</script>

<style scoped></style>

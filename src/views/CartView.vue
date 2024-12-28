<template>
  <a-breadcrumb>
    <a-breadcrumb-item>Sepetim</a-breadcrumb-item>
  </a-breadcrumb>
  <a-divider></a-divider>

  <a-table :dataSource="cart" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex == 'amount'">
        <a-input :value="record.amount" type="number"></a-input>
      </template>

      <template v-if="column.dataIndex == 'actions'">
        <a-button type="primary" @click="handleRemove(record)">Sil</a-button>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import supabase from '@/plugin/supaBaseClients';
import { onMounted, ref } from 'vue';

const cart = ref();

const columns = [
  {
    title: "Product",
    dataIndex: [
      "products",
      "title",
    ]
  },

  {
    title: "Product Price",
    dataIndex: [
      "products",
      "price",
    ]
  },

  {
    title: "Currency",
    dataIndex: [
      "products",
      "currency",
    ]
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: "100px",
  },
  {
    dataIndex: "actions",
    width: "100px",

  }

];

const getUserId = async () => {
  const { data: userData } = await supabase.auth.getUser();
  return userData.user?.id;
}

const handleRemove = async (cartItem: any) => {
  const { data } = await supabase.from("carts").delete().eq("user_id", await getUserId()).eq("id", cartItem.id);
  await loadData();
}

const loadData = async () => {
  const userId = await getUserId();
  const { data: cartData } = await supabase.from("carts").select(`id,amount,products(id, price, title, currency)`).eq("user_id", userId);
  cart.value = cartData;
}

onMounted(async () => {
  await loadData();
})
</script>

<style scoped></style>

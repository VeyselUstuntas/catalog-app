<template>
  <div>
    <h1>Home</h1>
    <a-button @click="handleLogout">logOut</a-button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { onMounted } from 'vue';


const authStore = useAuthStore();

onMounted(() => {

})

async function handleLogout(){
  await authStore.logout();
  location.href ="/login"
}
</script>

<style scoped></style>

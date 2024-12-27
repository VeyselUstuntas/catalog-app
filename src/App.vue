<template>
  <nav>
    <div>
      <RouterLink to="/">Home</RouterLink>

    </div>
    <div>
      <RouterLink to="/login">Login</RouterLink>

    </div>
  </nav>

  <div v-if="isAuth && currentUser ">
    welcome {{ currentUser.displayName }}
  </div>

  <button @click="handleLogout">LogOut</button>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAuthStore } from './stores/authStore';
import authService from './services/authService';

const authStore = useAuthStore();

const currentUser = ref();
const isAuth = ref();

onMounted(async () => {
  currentUser.value = await authStore.user;
  isAuth.value = await authService.isAuth();
})

async function handleLogout() {
  await authStore.logout();
  location.href="/login"
}

</script>


<style scoped></style>

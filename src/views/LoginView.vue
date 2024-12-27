<template>
  <h1>Login Page</h1>
  <form @submit.prevent="handleLogin">

    <div class="form-group">
      <div>
        <label for="">User Name</label>
        <input type="text" name="userName" v-model="loginForm.userName" required>
      </div>

      <div>
        <label for="">Password</label>
        <input type="password" name="password" v-model="loginForm.password" required>
      </div>
    </div>

    <button>Login</button>
  </form>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { reactive } from 'vue';
const authStore = useAuthStore();
const loginForm = reactive({
  userName: "",
  password: ""
});

async function handleLogin() {
  const isAuth = await authStore.login(loginForm.userName, loginForm.password);

  if(isAuth){
    location.href="/";
  }
  else{
    alert("User Not Found");
  }
}

</script>

<style scoped></style>

<template>
  <h1>Login Page</h1>

  <a-form name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @submit="handleLogin">
    <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
      <a-input v-model:value="loginForm.userName" />
    </a-form-item>

    <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
      <a-input-password v-model:value="loginForm.password" />
    </a-form-item>


    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
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

  if (isAuth) {
    location.href = "/";
  }
  else {
    alert("User Not Found");
  }
}

</script>

<style scoped>
h1{
  text-align: center;
}

form div{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        authRequired: true
      }
    },
  ],
})

router.beforeEach((to) => {

  const authStore = useAuthStore();

  if(to.meta.authRequired && !authStore.isAuth){
    location.href = "/login";
  }
})

export default router

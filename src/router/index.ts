import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/authStore'
import CategoryView from '@/views/CategoryView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        authRequired: true,
        layout: "MainLayout"

      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("../views/AboutView.vue"),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        layout: "LoginLayout"
      }
    },

    {
      path: '/category/:id',
      name: 'category',
      component: CategoryView,
      meta: {
        layout: "MainLayout"
      }
    },

    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: {
        layout: "MainLayout"
      }
    },
  ],
})

router.beforeEach((to) => {

  const authStore = useAuthStore();

  if (to.meta.authRequired && !authStore.isAuth) {
    location.href = "/login";
  }
})

export default router

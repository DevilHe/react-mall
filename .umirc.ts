import { defineConfig } from 'umi';

export default defineConfig({
  title: '这是个商城',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/',  component: '@/pages/index' },
    { path: '/cart',  component: '@/pages/cart/index' },
    { path: '/olist',  component: '@/pages/olist/index' },
    { path: '/user',  component: '@/pages/user/index' },
    { path: '/login',  component: '@/pages/login/index' },
  ],
});
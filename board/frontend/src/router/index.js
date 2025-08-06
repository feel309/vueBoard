import { createRouter, createWebHistory } from 'vue-router';
import BoardList from '@/components/BoardList.vue';
import BoardDetail from '@/components/BoardDetail.vue';
import ShopList from '@/components/ShopList.vue';

const routes = [
  { path: '/', component: BoardList },
  { path: '/boards/:id', component: BoardDetail, props: true },
  { path: '/shopList', component: ShopList },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
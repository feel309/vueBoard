import { createRouter, createWebHistory } from 'vue-router';
import BoardList from '@/components/BoardList.vue';
import BoardDetail from '@/components/BoardDetail.vue';

const routes = [
  { path: '/', component: BoardList },
  { path: '/boards/:id', component: BoardDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
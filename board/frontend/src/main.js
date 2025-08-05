import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
// createApp() 함수로 Vue 인스턴스를 생성하고,
// 생성한 인스턴스를 mount() 함수로 HTML DOM과 연결함
// App 컴포넌트는 #app 요소에 추가됨
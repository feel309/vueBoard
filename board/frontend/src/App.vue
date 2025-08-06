<template>
  <div id="app">
    <h1>📋 게시판</h1>
    <nav>
      <router-link to="/">📃 게시판 홈</router-link> |
      <router-link to="/shopList">🛍️ 쇼핑목록</router-link>
    </nav>
    <router-view />

    <!-- 디버그 정보 표시 -->
    <DebugState />
  </div>
</template>

<script>
import DebugState from './components/DebugState.vue';

export default {
  components: { DebugState }
}
</script>

<style scoped>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
}
h1 {
  text-align: center;
  color: #2c3e50;
}
nav {
  margin: 20px 0;
  text-align: center;
}
nav a {
  margin: 0 10px;
  color: #2c7be5;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
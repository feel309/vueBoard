<template>
  <div id="app">
    <h1>📋 게시판</h1>
    <BoardList />
  </div>
</template>

<script>
import BoardList from './components/BoardList.vue';
export default { components: { BoardList } }
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
</style>
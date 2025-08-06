<template>
  <div class="shop-list">
    <h2>🛍️ 쇼핑 목록</h2>
    <ul>
      <li>상품 1</li>
      <li>상품 2</li>
      <li>상품 3</li>
    </ul>
    <router-link to="/">← 게시판으로 돌아가기</router-link>
  </div>
</template>

<script>
export default {
  name: 'ShopList'
};
</script>

<style scoped>
.shop-list {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>
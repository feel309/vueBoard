<template>
  <div class="board-item">
    <h3 @click="goToDetail" class="clickable">{{ post.title }}</h3>
    <p class="content">{{ post.content }}</p>
    <div class="meta">
      <span>✍ {{ post.writer }}</span>
      <div class="actions">
        <!-- 수정 버튼 클릭 시 edit 이벤트 발생 -->
        <button @click="$emit('edit', post)">✏️ 수정</button>
        <!-- 삭제 버튼 클릭 시 deletePost 메서드 호출 -->
        <button @click="deletePost" class="delete">🗑️ 삭제</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['post'],
  methods: {
    goToDetail() {
      this.$router.push(`/boards/${this.post.id}`);
    },
    deletePost() {
      if (confirm('정말 삭제하시겠습니까?')) {
        axios.delete(`/api/boards/${this.post.id}`)
          .then(() => this.$emit('deleted'));
      }
    }
  }
}
</script>

<style scoped>
.board-item {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}
h3 {
  margin: 0;
  color: #2c3e50;
}
.clickable {
  cursor: pointer;
  color: #2c7be5;
}
.clickable:hover {
  text-decoration: underline;
}
.content {
  margin: 10px 0;
  white-space: pre-wrap;
}
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  color: #777;
}
.actions button {
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #2c7be5;
}
.actions .delete {
  color: #e53935;
}
.actions button:hover {
  text-decoration: underline;
}
</style>
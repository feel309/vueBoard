<template>
  <div class="form-wrapper">
    <h2>{{ isEditMode ? '✏️ 게시글 수정' : '📝 새 게시글 작성' }}</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="title" placeholder="제목" required />
      <textarea v-model="content" placeholder="내용" required></textarea>
      <input v-model="writer" placeholder="작성자" required />
      <div class="btn-group">
        <button type="submit">{{ isEditMode ? '수정하기' : '등록하기' }}</button>
        <button v-if="isEditMode" type="button" @click="resetForm" class="cancel">취소</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['editingPost'],
  data() {
    return { id: null, title: '', content: '', writer: '' };
  },
  watch: {
    editingPost(newVal) {
      if (newVal) {
        this.id = newVal.id;
        this.title = newVal.title;
        this.content = newVal.content;
        this.writer = newVal.writer;
      }
    }
  },
  computed: {
    isEditMode() {
      return this.id !== null;
    }
  },
  methods: {
    handleSubmit() {
      const payload = { title: this.title, content: this.content, writer: this.writer };
      const req = this.isEditMode
        ? axios.put(`/api/boards/${this.id}`, payload)
        : axios.post('/api/boards', payload);

      req.then(() => {
        this.$emit('saved');
        this.resetForm();
      });
    },
    resetForm() {
      this.id = null;
      this.title = '';
      this.content = '';
      this.writer = '';
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  background: #fff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}
h2 {
  margin-bottom: 15px;
  color: #2c3e50;
}
input, textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
}
textarea {
  min-height: 100px;
  resize: vertical;
}
.btn-group {
  display: flex;
  gap: 10px;
}
button {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: #2c7be5;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.cancel {
  background-color: #999;
}
button:hover {
  opacity: 0.9;
}
</style>
<template>
  <div class="form-wrapper">
    <h2>{{ isEditMode ? '✏️ 게시글 수정' : '📝 새 게시글 작성' }}</h2>
    <!-- form 제출 시 handleSubmit 호출 -->
    <form @submit.prevent="handleSubmit">
      <!-- 양방향 바인딩으로 입력값 관리 -->
      <input v-model="title" placeholder="제목" required />
      <textarea v-model="content" placeholder="내용" required></textarea>
      <input v-model="writer" placeholder="작성자" required />
      <div class="btn-group">
        <button type="submit">{{ isEditMode ? '수정하기' : '등록하기' }}</button>
        <!-- 수정 모드일 경우만 취소 버튼 표시 -->
        <button v-if="isEditMode" type="button" @click="resetForm" class="cancel">취소</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['editingPost'], // 상위에서 수정할 게시글 데이터 전달
  data() {
    return { id: null, title: '', content: '', writer: '' };
  },
  watch: {
    // editingPost 값이 바뀔 때 해당 데이터를 폼에 반영
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
    // 수정 모드인지 여부를 판단
    isEditMode() {
      return this.id !== null;
    }
  },
  methods: {
    handleSubmit() {
      const payload = { title: this.title, content: this.content, writer: this.writer };
      // 수정 모드: PUT 요청 / 새 작성: POST 요청
      const req = this.isEditMode
        ? axios.put(`/api/boards/${this.id}`, payload)
        : axios.post('/api/boards', payload);

      // 성공 후 이벤트 발생 및 폼 초기화
      req.then(() => {
        this.$emit('saved');  // 부모에게 저장 완료 알림
        this.resetForm();
      });
    },
    resetForm() {
      // 폼 입력 초기화
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
  border-radius: 12px;
  margin-bottom: 20px;
}
input, textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
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
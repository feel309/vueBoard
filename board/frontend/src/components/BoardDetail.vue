<template>
  <div v-if="post" class="board-detail">
    <h2>{{ post.title }}</h2>
    <p class="content">{{ post.content }}</p>
    <div class="meta">
      ✍ 작성자: {{ post.writer }}<br />
    </div>
  </div>
  <router-link to="/">← 목록으로</router-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['id'],
  computed: {
    ...mapGetters(['post']),
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  },
  mounted() {
    this.$store.dispatch('fetchPost', this.id);
  }
}
</script>

<style scoped>
.board-detail {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
.content {
  margin: 20px 0;
  white-space: pre-wrap;
}
.meta {
  color: #555;
  font-size: 0.9em;
}
</style>
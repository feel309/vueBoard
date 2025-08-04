<template>
  <div>
    <BoardForm @saved="fetchPosts" :editingPost="editingPost"/>
    <hr/>
    <BoardItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @edit="editPost"
      @deleted="fetchPosts"
    />
  </div>
</template>

<script>
import axios from 'axios';
import BoardItem from './BoardItem.vue';
import BoardForm from './BoardForm.vue';

export default {
  components: { BoardItem, BoardForm },
  data() {
    return {
      posts: [],
      editingPost: null
    };
  },
  methods: {
    fetchPosts() {
      axios.get('/api/boards').then(res => this.posts = res.data);
    },
    editPost(post) {
      this.editingPost = { ...post }; // 복사해서 전달
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style scoped>
hr {
  margin: 30px 0;
  border: none;
  height: 1px;
  background-color: #ddd;
}
</style>
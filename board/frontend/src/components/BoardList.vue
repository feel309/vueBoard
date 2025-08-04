<template>
  <div>
    <!-- 게시글 작성/수정 폼 컴포넌트 -->
    <BoardForm @saved="fetchPosts" :editingPost="editingPost"/>
    <hr/>
    <!-- 게시글 하나씩 렌더링 -->
    <BoardItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @edit="editPost"
      @deleted="fetchPosts"
    />
    <!-- editPost : 수정 버튼 클릭 시 호출 -->
    <!-- fetchPosts : 삭제 후 목록 갱신 -->
  </div>
</template>

<script>
import boardApi from '@/api/boardApi';
import BoardItem from './BoardItem.vue';
import BoardForm from './BoardForm.vue';

export default {
  components: { BoardItem, BoardForm },
  data() {
    return {
      posts: [],        // 게시글 목록
      editingPost: null // 수정 중인 게시글 (없으면 null)
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const res = await boardApi.getAll();
        this.posts = res.data;
      } catch (err) {
        console.error('게시글 불러오기 실패:', err);
      }
    },
    editPost(post) {
      // 수정 버튼 클릭 시 해당 게시글 복사해서 전달
      this.editingPost = { ...post };
    }
  },
  // mounted() : 컴포넌트가 웹 브라우저에 보이게 된다.
  mounted() {
    // 컴포넌트가 마운트되면 게시글 불러오기
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
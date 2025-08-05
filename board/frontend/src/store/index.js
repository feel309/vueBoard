import { createStore } from 'vuex';
import boardApi from '@/api/boardApi';

export default createStore({
  state: {
    post: null,
  },
  mutations: {
    setPost(state, payload) {
      state.post = payload;
    }
  },
  actions: {
    async fetchPost({ commit }, id) {
      const res = await boardApi.getById(id);
      commit('setPost', res.data);
    }
  },
  getters: {
    post: state => state.post,
  }
});
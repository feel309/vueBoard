import { createStore } from 'vuex';
import boardApi from '@/api/boardApi';

export default createStore({
  state: {
    post: null,
    user: {
      readState: false
    }
  },
  mutations: {
    setPost(state, payload) {
      state.post = payload;
    },
    markUserRead(state) {
      state.user.readState = true;
    }
  },
  actions: {
    async fetchPost({ commit }, id) {
      const res = await boardApi.getById(id);
      commit('setPost', res.data);
      commit('markUserRead');
    }
  },
  getters: {
    post: state => state.post,
    readState: state => state.user.readState
  }
});
/* axiosInstance.js : 공통 API 모듈 파일 */
import axios from './axiosInstance'; // 공통 axios 인스턴스를 불러옵니다

const boardApi = {
  getAll: () => axios.get('/boards'),
  create: (data) => axios.post('/boards', data),
  update: (id, data) => axios.put(`/boards/${id}`, data),
  delete: (id) => axios.delete(`/boards/${id}`)
};

export default boardApi;
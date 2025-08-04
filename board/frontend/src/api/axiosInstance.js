/* axiosInstance.js : Axios 인스턴스 구성 파일 */
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // baseURL을 지정하면 호출할 때 /api 생략 가능
  timeout: 5000
});

// 예: 요청 인터셉터, 응답 인터셉터 추가
instance.interceptors.request.use(config => {
  // 예: 토큰 자동 추가
  // config.headers.Authorization = `Bearer ${yourToken}`;
  return config;
}, error => Promise.reject(error));

instance.interceptors.response.use(
  res => res,
  err => {
    // 공통 에러 처리
    console.error(err);
    return Promise.reject(err);
  }
);

export default instance;
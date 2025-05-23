import axios from 'axios';

// import { IS_PROD } from '@/config/video';

// 创建axios实例
export const apiClient = axios.create({
  // baseURL: IS_PROD ? 'https://5ma.org' : '',
  baseURL: '',
  timeout: 10000,
  headers: { APP_ID: 'oqzrb688GfoQ94peiB4OMw==' },
});

// 添加请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // // 在发送请求之前做些什么，例如设置token
    // config.headers.
    return config;
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error);
  },
);

// 添加响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response && error.response.status === 401) {
      // 例如，处理401未授权错误
      console.error('Unauthorized access');
    }
    return Promise.reject(error);
  },
);

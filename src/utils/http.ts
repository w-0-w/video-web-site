import axios from 'axios';

// 创建axios实例
export const apiClient = axios.create({
  // baseURL: 'https://api.example.com', // 你的基础URL
  timeout: 10000, // 请求超时时间
});

// 添加请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如设置token
    config.headers.APP_ID = 'oqzrb688GfoQ94peiB4OMw==';
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
    // 对响应数据做点什么
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

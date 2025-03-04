import { apiClient } from '@/utils';

export const queryTagList = () => apiClient.get('/api/videoWeb/tag/list');

const queryVideoList = (data: TTypeQueryVideoListParams) =>
  apiClient.post('/api/videoWeb/video/page/list', data);

export const queryVideoListLatest = (
  basicParams: TTypeQueryVideoListBasicParams,
) =>
  queryVideoList({
    ...basicParams,
    type: 1,
  });

// // 创建新用户
// export const createUser = (userData) => apiClient.post('/users', userData);

// // 更新用户信息
// export const updateUser = (userId, userData) =>
//   apiClient.put(`/users/${userId}`, userData);

// // 删除用户
// export const deleteUser = (userId) => apiClient.delete(`/users/${userId}`);

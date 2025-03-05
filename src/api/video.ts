import { apiClient } from '@/utils';

export const queryTagList = () =>
  apiClient.get<any, IFApiResponse>('/api/videoWeb/tag/list');

export const queryVideoList = (data: TTypeQueryVideoListParams) =>
  apiClient.post<any, IFApiResponse>('/api/videoWeb/video/page/list', data);

export const queryVideoDetail = (id: string) =>
  apiClient.get<any, IFApiResponse>(`/api/videoWeb/video/dtl?id=${id}`);

const videoAction = ({
  id,
  type,
}: {
  id: string;
  type: 'play' | 'view' | 'like';
}) =>
  //
  apiClient.get<any, IFApiResponse>(
    `/api/videoWeb/video/count?id=${id}&type=${type}`,
  );

export const videoActionLike = (id: string) =>
  videoAction({ id, type: 'like' });

export const videoActionView = (id: string) =>
  videoAction({ id, type: 'view' });

export const videoActionPlay = (id: string) =>
  videoAction({ id, type: 'play' });

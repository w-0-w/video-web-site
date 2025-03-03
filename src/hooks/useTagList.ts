import store from '@/store';

export function useTagList() {
  const [videoState] = store.useModel('video');

  return videoState.tagList;
}

export const SceneMap = {
  home: {
    title: '推荐',
  },
  'tag-item': {
    title: 'tag',
  },
  detail: {
    title: '相关推荐',
  },
} as const;

export type T_Scene = keyof typeof SceneMap;

export default {};

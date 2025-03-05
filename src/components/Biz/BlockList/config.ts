export const SceneMap = {
  home: {
    title: '最热',
    type: 2,
  },
  'tag-item': {
    title: 'tag',
    type: 1,
  },
  detail: {
    title: '推荐',
    type: 4,
  },
} as const;

export type TScene = keyof typeof SceneMap;

export default {};

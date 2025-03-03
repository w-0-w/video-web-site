import { createModel } from 'ice';

// import { queryTagList } from '@/api';

interface ModelState {
  tagList: TTypeTagList;
}

export default createModel({
  // 定义  model 的初始 state
  state: {
    tagList: [],
  } as ModelState,
  // 定义改变该 model 状态的纯函数
  reducers: {
    updateTagList(prevState: ModelState, payload) {
      prevState.tagList = payload;
    },
  },
  // // 定义处理该 model 副作用的函数
  // effects: (dispatch) => ({
  //   async getTagListFn() {
  //     console.log('ss: ', dispatch);
  //     // if (this.) {

  //     // }
  //   },
  // }),
});

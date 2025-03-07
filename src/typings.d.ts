/// <reference types="@ice/app/types" />

interface IFApiResponse {
  code: string;
  data: any;
  msg: string;
}

type TTypeBlockListItem = {
  id: string; // 视频ID
  name: string; // 视频名称
  tags: string[]; // 视频标签 TODO
  url: string; // 视频URL
  videoType: string; // mp4 |
  coverImageUrl: string; // 视频封面URL
  likeCount: number; // 点赞数
  playCount: number; // 播放数
  createAt: number; // 上传时间，时间戳 ms
  duration: number; // 视频时长，单位 秒
};

type TTypeBlockList = TTypeBlockListItem[];

type TTypeTagListItem = {
  tagId: number;
  tagName: string;
};

type TTypeTagList = TTypeTagListItem[];

//

type TTypeQueryVideoListParams = {
  pageSize: number; // 页面大小
  pageNo: number; // 当前页号
  lastVideoId?: number; // 上一页最后一个视频的ID，方便后面用于实现瀑布流分页
  tagName?: string; // 标签，非必填
  type: 1 | 2 | 3 | 4; // 1 - 最新； 2 - 最热； 3 - 点赞最多； 4 - 推荐【近 3/7/N 天播放最多】
};

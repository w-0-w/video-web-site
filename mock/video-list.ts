import type { Request, Response } from '@ice/app';

export default {
  'POST /api/videoWeb/video/page/list': (request: Request, response: Response) => {
    // const { id } = request.params;
    const randomNum = Math.floor(Math.random() * 1000);
    const data: any = [];
    for (let idx = 0; idx < 20; idx++) {
      data.push({
        id: 1, // 视频ID
        name: `${
          idx + 1
        }-${randomNum} 这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本`,
        tags: ['xxx'], // 视频标签
        url: 'https://www.a.com/a',
        videoType: 'mp4',
        coverImageUrl: 'https://picsum.photos/320/200',
        likeCount: 100, // 点赞数
        playCount: 100, // 播放数
        createAt: 121212, // 上传时间，时间戳 ms
      });
    }
    response.send({
      code: 'SUCCESS',
      msg: 'OK',
      data: {
        totalPage: 20,
        pageNo: 1,
        pageSize: 20,
        totalCount: 1000,
        pageData: data,
      },
    });
  },
};
// export default {
//   'POST /videoWeb/video/page/list': {
//     code: 'SUCCESS',
//     msg: 'OK',
//     data: [
//       {
//         title:
//           '【推荐】这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本，这是一段描述文本',
//         img: 'https://picsum.photos/320/200',
//         link: '/',
//       },
//       {
//         title: '热门',
//         img: 'https://picsum.photos/320/200',
//         link: '/',
//       },
//       {
//         title: '最新',
//         img: 'https://picsum.photos/320/200',
//         link: '/',
//       },
//       {
//         title: '推荐',
//         img: 'https://picsum.photos/320/200',
//         link: '/',
//       },
//       {
//         title: '热门',
//         img: 'https://picsum.photos/320/200',
//         link: '/',
//       },
//       {
//         title: '最新',
//         img: 'https://picsum.photos/320/200',
//         link: '/',
//       },
//       {
//         title: '推荐',
//         img: 'https://picsum.photos/320/200',
//         link: '/',
//       },
//       {
//         title: '热门',
//         img: 'https://picsum.photos/320/200',
//         link: '/',
//       },
//       {
//         title: '最新',
//         img: 'https://picsum.photos/320/200',
//         link: '/',
//       },
//     ],
//   },
// };

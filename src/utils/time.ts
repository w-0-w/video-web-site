import dayjs from 'dayjs';
// 加载中文语言包
import 'dayjs/locale/zh-cn';
// 引入处理相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime';
// 配置使用处理相对时间的插件
dayjs.extend(relativeTime);
// 配置使用中文语言包
dayjs.locale('zh-cn');

export const getRelativeTime = (ms: number) => {
  return dayjs(ms).from(dayjs());
};

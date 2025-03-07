import dayjs from 'dayjs';
// 加载中文语言包
import 'dayjs/locale/zh-cn';
// 引入处理相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

// 配置使用处理相对时间的插件
dayjs.extend(relativeTime);
// 配置使用中文语言包
dayjs.locale('zh-cn');
dayjs.extend(duration);

export const getRelativeTime = (ms: number) => {
  return dayjs(ms).from(dayjs());
};

export const getHMSFromSeconds = (seconds: number) => {
  const str = dayjs.duration(seconds, 'seconds').format('HH:mm:ss');
  return str.startsWith('00:') ? str.substring(3) : str;
};

import { Link } from 'ice';

import { MAX_WIDTH, PAGE_TITLE } from '@/config/video';

import styles from './index.module.css';

export default function Footer() {
  const WarningList = [
    '警告：',
    '本网站只适合18岁或以上人士观看。本网站内容可能令人反感！',
    '切不可将本站的内容出售、出租、交给或借予年龄未满18岁的人士或将本网站内容向未满18岁人士出示、播放或放映。',
    '本站内容收录於世界各地，如果您发现本站的某些影片内容不合适，或者某些影片侵犯了您的的版权，请联系我们。',
  ];
  return (
    <div className={styles.footer}>
      <div
        style={{
          maxWidth: `${MAX_WIDTH}px`,
          margin: '0 auto',
        }}
      >
        <div className={styles.entrances}>
          <Link to="/">{PAGE_TITLE}</Link>
          <Link to="/terms">条款</Link>
          <Link to="/group">官方群</Link>
          <Link to="/business">商务合作</Link>
        </div>
        <p className={styles.warning}>{WarningList.join('')}</p>
        <p className={styles.copyright}>
          © 2025-2025 {PAGE_TITLE} 保留所有权利
        </p>
      </div>
    </div>
  );
}

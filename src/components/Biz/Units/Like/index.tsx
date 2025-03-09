import { useState } from 'react';

import { videoActionLike } from '@/api';

import styles from './index.module.css';

export function Like({
  //
  scene,
  detail,
}: {
  scene: 'card' | 'detail';
  detail: TTypeBlockListItem;
}) {
  const { id, likeCount } = detail;
  const [latestLikeCount, setLatestLikeCount] = useState(likeCount);

  const doLikeVideo = async () => {
    if (latestLikeCount === likeCount) {
      const { code } = await videoActionLike(id);

      if (code === 'SUCCESS') {
        setLatestLikeCount(latestLikeCount + 1);
      }
    }
  };

  const likeVideoEvt = (e) => {
    e.stopPropagation();

    doLikeVideo();
  };

  return (
    <div className={styles[`${scene}Like`]} onClick={likeVideoEvt}>
      <i className={`iconfont icon-vws-good ${styles[`${scene}LikeIcon`]}`} />
      <span className={styles[`${scene}LikeCount`]}>{latestLikeCount}</span>
    </div>
  );
}

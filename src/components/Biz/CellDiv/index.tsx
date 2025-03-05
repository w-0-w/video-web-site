import { useState } from 'react';
import { useNavigate } from 'ice';

import { videoActionLike } from '@/api';
import { getRelativeTime } from '@/utils';

import {
  //
  CardRatioWidth,
  CardRatioHeight,
  CardTextSingleHeight,
  CardTextInfoHeight,
} from './config';

import styles from './index.module.css';

export default function CellDiv({
  //
  detail,
}: {
  detail: TTypeBlockListItem;
}) {
  const { id, name, coverImageUrl, createAt, likeCount, playCount } = detail;
  const navigate = useNavigate();

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
    <div
      className={styles.videoCardHover}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        // height: '180px',
        aspectRatio: `${CardRatioWidth} / ${CardRatioHeight}`, // 直接设置宽高比
        backgroundColor: '#000',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      onClick={() => {
        navigate(`/detail?slug=${encodeURIComponent(id)}`);
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: `calc(100% - ${CardTextInfoHeight}px)`,
          backgroundColor: '#333',
          // borderRadius: '4px',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
      >
        <img
          src={coverImageUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          width: '100%',
          height: `${CardTextInfoHeight}px`,
          padding: '0 10px',
          userSelect: 'none',
          // backgroundColor: 'tomato',
        }}
      >
        <div
          className="t-over-1"
          style={{
            fontSize: '14px',
            height: `${CardTextSingleHeight}px`,
            lineHeight: `${CardTextSingleHeight + 8}px`,
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: '12px',
            lineHeight: `${CardTextSingleHeight - 4}px`,
            opacity: '.7',
          }}
        >
          {getRelativeTime(createAt)}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: `${CardTextSingleHeight - 6}px`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              opacity: '.6',
            }}
          >
            <i className="iconfont icon-vws-view" />
            <span>{playCount}</span>
          </div>
          <div
            className={styles.likeHover}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: '#209bfa',
              opacity: '.7',
              cursor: 'pointer',
            }}
            onClick={likeVideoEvt}
          >
            <i className="iconfont icon-vws-good" />
            <span>{latestLikeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

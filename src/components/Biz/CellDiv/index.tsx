import { useNavigate } from 'ice';

import { Like } from '@/components/Biz/Units';
import { getRelativeTime, getHMSFromSeconds } from '@/utils';

import {
  //
  CardVideoRatioWidth,
  CardVideoRatioHeight,
  CardTextSingleHeight,
  CardTextSingleLineHeight,
  CardTextInfoHeight,
} from './config';

import styles from './index.module.css';

export default function CellDiv({
  //
  detail,
}: {
  detail: TTypeBlockListItem;
}) {
  const {
    //
    id,
    name,
    coverImageUrl,
    duration,
    createAt,
    // likeCount,
    // playCount,
    viewCount,
  } = detail;

  const navigate = useNavigate();

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
        height: 'auto',
        // height: '180px',
        backgroundColor: '#000',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      onClick={() => {
        navigate(`/detail/${encodeURIComponent(id)}`);
      }}
    >
      {/* cover */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          aspectRatio: `${CardVideoRatioWidth} / ${CardVideoRatioHeight}`, // 16:9
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
      {/* infos */}
      <div
        style={{
          width: '100%',
          height: `${CardTextInfoHeight}px`,
          padding: '0 10px',
          userSelect: 'none',
          // backgroundColor: 'tomato',
        }}
      >
        {/* name */}
        <div
          className="t-over-2"
          style={{
            fontSize: '14px',
            height: `${CardTextSingleHeight + CardTextSingleLineHeight}px`,
            paddingTop: `${
              (CardTextSingleHeight - CardTextSingleLineHeight) * 2
            }px`,
            lineHeight: `${CardTextSingleLineHeight}px`,
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {name}
        </div>
        {/* duration + date */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: `${CardTextSingleHeight}px`,
          }}
        >
          <div
            style={{
              fontSize: '12px',
              lineHeight: `${CardTextSingleHeight - 4}px`,
              opacity: '.7',
            }}
          >
            {getHMSFromSeconds(duration)}
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
        </div>
        {/* viewCount + Like */}
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
            <span>{viewCount}</span>
          </div>
          <Like scene="card" detail={detail} />
        </div>
      </div>
    </div>
  );
}

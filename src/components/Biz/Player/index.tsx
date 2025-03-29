import { useState, useEffect, useRef } from 'react';
import DPlayer from 'dplayer';

import { videoActionPlay } from '@/api';
import NormalPageBlockWrapper from '@/components/NormalPageBlockWrapper';

import DetailInfo from './DetailInfo';

const VideoDomId = 'j-xgplayer-dom-id';

export default function Player({
  //
  videoInfo,
}: {
  videoInfo: TTypeBlockListItem;
}) {
  const dPlayerIns = useRef<null | DPlayer>(null);

  const [videoAdOpened, setVideoAdOpened] = useState(true);

  const bindSomeEvents = () => {
    if (dPlayerIns.current) {
      dPlayerIns.current.on('play' as any, () => {
        setVideoAdOpened(false);
        videoActionPlay(videoInfo.id);
      });
      dPlayerIns.current.on('pause' as any, () => {
        setVideoAdOpened(true);
      });
    }
  };

  useEffect(() => {
    if (videoInfo.url) {
      dPlayerIns.current = new DPlayer({
        container: document.getElementById(VideoDomId),
        video: {
          url: videoInfo.url,
          pic: videoInfo.coverImageUrl,
          // url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
          // pic: 'https://srv.carbonads.net/static/30242/4f7f59796c5dda8f5dfc63a40583dfde7cebb050',
        },
        theme: '#f00',
        // logo: '/icon.png',
        // contextmenu: [{ text: '关于', link: '' }],
      });

      bindSomeEvents();
    }
  }, [videoInfo]);
  return (
    <NormalPageBlockWrapper
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      {/* name */}
      <div
        style={{
          margin: '22px 0 16px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        {videoInfo.name}
      </div>
      {/* Player */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
        }}
      >
        {/* pause ad */}
        {videoAdOpened ? (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '0',
              left: '0',
              backgroundColor: 'transparent',
              zIndex: '1',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '50%',
                height: '50%',
                top: '25%',
                left: '25%',
                backgroundColor: 'tomato',
                userSelect: 'none',
                cursor: 'wait',
              }}
              onClick={(evt) => {
                evt.stopPropagation();
                alert('Ad alert!');
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '32px',
                  height: '32px',
                  top: '0',
                  right: '0',
                  // backgroundColor: 'rgba(0, 0, 0, .3)',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  lineHeight: '32px',
                  userSelect: 'none',
                  cursor: 'pointer',
                }}
                onClick={(evt) => {
                  evt.stopPropagation();
                  setVideoAdOpened(false);
                }}
              >
                <i
                  className="iconfont icon-vws-close"
                  style={{
                    fontSize: '24px',
                  }}
                />
              </div>
            </div>
          </div>
        ) : null}
        {/* player */}
        <div
          id={VideoDomId}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      {/* detail */}
      <DetailInfo detail={videoInfo} />
    </NormalPageBlockWrapper>
  );
}

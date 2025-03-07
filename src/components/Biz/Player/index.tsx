import { useState, useEffect, useRef } from 'react';
import DPlayer from 'dplayer';

import { MAX_WIDTH } from '@/config/video';
import { videoActionPlay } from '@/api';

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
        logo: '/icon.png',
        contextmenu: [{ text: '关于 5ma', link: '' }],
      });

      bindSomeEvents();
    }
  }, [videoInfo]);
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: `${MAX_WIDTH}px`,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          margin: '22px 0 16px',
          fontSize: '24px',
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
        {videoAdOpened ? (
          <div
            style={{
              position: 'absolute',
              width: '50%',
              height: '50%',
              top: '25%',
              left: '25%',
              backgroundColor: 'tomato',
              zIndex: '1',
            }}
          />
        ) : null}
        <div
          id={VideoDomId}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
}

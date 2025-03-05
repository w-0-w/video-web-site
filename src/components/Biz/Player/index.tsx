import { useEffect, useRef } from 'react';
import DPlayer from 'dplayer';

import { videoActionPlay } from '@/api';

const VideoDomId = 'j-xgplayer-dom-id';

export default function Player({
  //
  id,
  url,
}: {
  id: string;
  url: string;
}) {
  const dPlayerIns = useRef<null | DPlayer>(null);

  const bindSomeEvents = () => {
    if (dPlayerIns.current) {
      dPlayerIns.current.on('play' as any, () => {
        videoActionPlay(id);
      });
    }
  };

  useEffect(() => {
    if (url) {
      dPlayerIns.current = new DPlayer({
        container: document.getElementById(VideoDomId),
        video: {
          url,
          // url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
        },
        theme: '#f00',
        logo: '/icon.png',
      });

      bindSomeEvents();
    }
  }, [url]);
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1050px',
        aspectRatio: '16 / 9',
        margin: '0 auto',
      }}
    >
      <div
        id={VideoDomId}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

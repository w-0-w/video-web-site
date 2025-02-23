import { useEffect } from 'react';
import DPlayer from 'dplayer';

const VideoDomId = 'j-xgplayer-dom-id';

export default function Player({
  //
  slug,
}: {
  slug: string;
}) {
  useEffect(() => {
    // const dp =
    new DPlayer({
      container: document.getElementById(VideoDomId),
      video: {
        url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
      },
      theme: '#f00',
      logo: '/favicon.png',
    });
  }, []);
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

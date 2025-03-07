import { AD_MAX_WIDTH } from '@/config/video';

import { ads } from './config';

export default function AdsBanner() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: `${AD_MAX_WIDTH}px`,
        margin: '0 auto',
      }}
    >
      {ads.map(({ href, img, ratio }) => {
        return (
          <a
            key={href}
            href={href}
            style={{
              display: 'block',
              marginBottom: '4px',
              width: '100%',
              aspectRatio: ratio,
              backgroundColor: '#333',
            }}
            rel="nofollow"
            target="_blank"
          >
            <img
              src={img}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </a>
        );
      })}
    </div>
  );
}

// export default function AdsBanner() {
//   return <></>;
// }

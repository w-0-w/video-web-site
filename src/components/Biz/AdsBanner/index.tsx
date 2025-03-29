import NormalPageBlockWrapper from '@/components/NormalPageBlockWrapper';

import { ads } from './config';

export default function AdsBanner() {
  return (
    <NormalPageBlockWrapper
      style={{
        display: 'flex',
        flexDirection: 'column',
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
    </NormalPageBlockWrapper>
  );
}

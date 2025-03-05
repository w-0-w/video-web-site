import { CSSProperties } from 'react';

import LoadingGif from '@/assets/loading.gif';

export function Loading({
  //
  style,
}: {
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        borderRadius: '4px',
        ...style,
      }}
    >
      <img
        src={LoadingGif}
        style={{
          width: '30px',
          height: '30px',
        }}
      />
    </div>
  );
}

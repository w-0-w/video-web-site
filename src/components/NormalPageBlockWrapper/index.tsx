import { CSSProperties, PropsWithChildren } from 'react';

import { MAX_WIDTH } from '@/config/video';

type NormalPageBlockWrapperProps = {
  style?: CSSProperties;
};

export default function NormalPageBlockWrapper({
  children,
  style = {},
}: PropsWithChildren<NormalPageBlockWrapperProps>) {
  return (
    <div
      style={{
        maxWidth: `${MAX_WIDTH}px`,
        margin: '0 auto',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

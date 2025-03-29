import { definePageConfig } from 'ice';

import NormalPageBlockWrapper from '@/components/NormalPageBlockWrapper';
import AdsBanner from '@/components/Biz/AdsBanner';

export default function Success() {
  return (
    <NormalPageBlockWrapper>
      <AdsBanner />
      <div>
        <div
          style={{
            margin: '1.5rem 0',
            fontSize: '1.6rem',
            fontWeight: 'bold',
          }}
        >
          商务合作
        </div>
      </div>
    </NormalPageBlockWrapper>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: '商务合作',
  };
});

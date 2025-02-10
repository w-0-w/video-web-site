import { definePageConfig, useSearchParams } from 'ice';

import AdsBanner from '@/components/Biz/AdsBanner';
import Player from '@/components/Biz/Player';

export default function Detail() {
  const [searchParams] = useSearchParams();

  return (
    <>
      <AdsBanner />
      <Player slug={searchParams.get('slug') || ''} />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: 'Video',
  };
});

import { useEffect } from 'react';
import { definePageConfig, useSearchParams } from 'ice';

import AdsBanner from '@/components/Biz/AdsBanner';
import Player from '@/components/Biz/Player';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

export default function Detail() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdsBanner />
      <Player slug={searchParams.get('slug') || ''} />
      <BlockList scene="detail" />
      <TagList />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: 'Video',
  };
});

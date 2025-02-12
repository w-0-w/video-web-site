import { useEffect } from 'react';
import { definePageConfig, useSearchParams } from 'ice';

import AdsBanner from '@/components/Biz/AdsBanner';
import BlockList from '@/components/Biz/BlockList';

import { DataBlockList } from '../index/data';

export default function Tag() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdsBanner />
      <BlockList
        title={`与 ${searchParams.get('tag') || ''} 相关的视频`}
        list={DataBlockList}
      />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: 'Tag',
  };
});

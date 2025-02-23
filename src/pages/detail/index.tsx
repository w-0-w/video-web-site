import { definePageConfig, useSearchParams } from 'ice';

import AdsBanner from '@/components/Biz/AdsBanner';
import Player from '@/components/Biz/Player';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

import { DataBlockList, DataTagList } from '../index/data';

export default function Detail() {
  const [searchParams] = useSearchParams();

  return (
    <>
      <AdsBanner />
      <Player slug={searchParams.get('slug') || ''} />
      <BlockList
        title="相关推荐"
        list={DataBlockList}
      />
      <TagList list={DataTagList} />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: 'Video',
  };
});

import { definePageConfig } from 'ice';

import AdsBanner from '@/components/Biz/AdsBanner';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

import { DataBlockList, DataTagList } from './data';

export default function Home() {
  return (
    <>
      <AdsBanner />
      <BlockList
        title="推荐"
        list={DataBlockList}
      />
      <TagList list={DataTagList} />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
    title: 'Home',
  };
});

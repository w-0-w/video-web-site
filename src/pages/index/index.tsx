import { definePageConfig } from 'ice';

import AdsBanner from '@/components/Biz/AdsBanner';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

export default function Index() {
  return (
    <>
      <AdsBanner />
      <BlockList scene="home" />
      <TagList />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
    title: 'Home',
  };
});

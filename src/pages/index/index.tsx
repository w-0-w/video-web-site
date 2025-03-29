import { useEffect } from 'react';
import { definePageConfig } from 'ice';

import { PAGE_TITLE } from '@/config/video';
import AdsBanner from '@/components/Biz/AdsBanner';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdsBanner />
      <TagList />
      <BlockList scene="home" />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
    title: PAGE_TITLE,
  };
});

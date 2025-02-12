import { useEffect } from 'react';
import { definePageConfig } from 'ice';

import AdsBanner from '@/components/Biz/AdsBanner';
import TagList from '@/components/Biz/TagList';

import { DataTagList } from '../index/data';

export default function Tags() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdsBanner />
      <TagList list={DataTagList} />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: 'Tags',
  };
});

import { useEffect } from 'react';
import { definePageConfig, useSearchParams } from 'ice';

import { PAGE_TITLE } from '@/config/video';
import AdsBanner from '@/components/Biz/AdsBanner';
import BlockList from '@/components/Biz/BlockList';

export default function Tag() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdsBanner />
      {/* TODO */}
      <BlockList
        scene="tag-item"
        tagTitle={searchParams.get('tag') || ''}
        tagId={searchParams.get('id') || '0'}
      />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: PAGE_TITLE,
  };
});

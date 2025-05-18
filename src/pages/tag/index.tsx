import { useSearchParams } from 'ice';

import { useEnsurePageToTop } from '@/hooks';
import AdsBanner from '@/components/Biz/AdsBanner';
import BlockList from '@/components/Biz/BlockList';

export default function Tag() {
  const [searchParams] = useSearchParams();

  useEnsurePageToTop();

  return (
    <>
      <AdsBanner />
      <BlockList
        scene="tag-item"
        tag={searchParams.get('tag') || ''}
        // tagId={searchParams.get('id') || '0'}
      />
    </>
  );
}
import { useEnsurePageToTop } from '@/hooks';
import AdsBanner from '@/components/Biz/AdsBanner';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

export default function Index() {
  useEnsurePageToTop();

  return (
    <>
      <AdsBanner />
      <TagList />
      <BlockList scene="home" />
    </>
  );
}

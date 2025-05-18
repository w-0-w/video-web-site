import { useEnsurePageToTop } from '@/hooks';
import AdsBanner from '@/components/Biz/AdsBanner';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

export default function Xyz() {
  useEnsurePageToTop();

  return (
    <>
      <AdsBanner />
      <TagList />
      <BlockList scene="home" />
    </>
  );
}


// import { definePageConfig } from 'ice';

// import { PAGE_TITLE } from '@/config/video';
// import AdsBanner from '@/components/Biz/AdsBanner';
// import BlockList from '@/components/Biz/BlockList';
// import TagList from '@/components/Biz/TagList';
// import NotFound from '@/components/Biz/NotFound';

// export default function Index() {
//   return (
//     <>
//       <AdsBanner />
//       <NotFound />
//       <BlockList scene="home" />
//       <TagList />
//     </>
//   );
// }

// export const pageConfig = definePageConfig(() => {
//   return {
//     auth: ['admin', 'user'],
//     title: `${PAGE_TITLE} - 找不到网页`,
//   };
// });

import { definePageConfig } from 'ice';

import AdsBanner from '@/components/Biz/AdsBanner';
import HomeList from '@/components/Biz/HomeList';

export default function Home() {
  return (
    <>
      <AdsBanner />
      <HomeList />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
    title: 'Home',
  };
});

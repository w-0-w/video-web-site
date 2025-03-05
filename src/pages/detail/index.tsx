import { useState, useEffect } from 'react';
import { definePageConfig, useSearchParams } from 'ice';

import { queryVideoDetail } from '@/api';
import AdsBanner from '@/components/Biz/AdsBanner';
import Player from '@/components/Biz/Player';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

export default function Detail() {
  const [searchParams] = useSearchParams();

  const [videoUrl, setVideoUrl] = useState('');

  const fetchData = async () => {
    try {
      const { code, data } = await queryVideoDetail(
        decodeURIComponent(searchParams.get('slug') || ''),
      );
      if (code === 'SUCCESS') {
        const { url } = data || {};

        setVideoUrl(url);
      }
    } catch (_e) {
      //
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdsBanner />
      {videoUrl ? <Player url={videoUrl} /> : null}
      <BlockList scene="detail" />
      <TagList />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: 'Video',
  };
});

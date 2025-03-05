import { useState, useEffect, useRef } from 'react';
import { definePageConfig, useSearchParams } from 'ice';

import { queryVideoDetail, videoActionView } from '@/api';
import AdsBanner from '@/components/Biz/AdsBanner';
import Player from '@/components/Biz/Player';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

export default function Detail() {
  const idRef = useRef('');
  const [searchParams] = useSearchParams();

  const [videoUrl, setVideoUrl] = useState('');

  const fetchData = async () => {
    try {
      const { code, data } = await queryVideoDetail(
        decodeURIComponent(searchParams.get('slug') || ''),
      );
      if (code === 'SUCCESS') {
        const { id, url } = data || {};

        idRef.current = id;
        setVideoUrl(url);
        videoActionView(id);
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
      {videoUrl ? <Player id={idRef.current} url={videoUrl} /> : null}
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

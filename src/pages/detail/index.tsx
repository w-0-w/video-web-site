import { useState, useEffect, useRef } from 'react';
import { definePageConfig, useSearchParams } from 'ice';

import { PAGE_TITLE } from '@/config/video';
import { queryVideoDetail, videoActionView } from '@/api';
import AdsBanner from '@/components/Biz/AdsBanner';
import Player from '@/components/Biz/Player';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

export default function Detail() {
  const idRef = useRef('');
  const [searchParams] = useSearchParams();

  const [videoInfo, setVideoInfo] = useState<null | TTypeBlockListItem>(null);

  const fetchData = async () => {
    try {
      const { code, data } = await queryVideoDetail(
        decodeURIComponent(searchParams.get('slug') || ''),
      );
      if (code === 'SUCCESS') {
        const { id, name } = data || {};

        if (name) {
          document.title = name;
        }
        idRef.current = id;
        setVideoInfo(data);
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
      {videoInfo ? <Player videoInfo={videoInfo} /> : null}
      <BlockList scene="detail" />
      <TagList />
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: PAGE_TITLE,
  };
});

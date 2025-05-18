import { useState, useEffect, useRef } from 'react';
import { useParams } from 'ice';

import { queryVideoDetail, videoActionView } from '@/api';
import { useEnsurePageToTop } from '@/hooks';
import AdsBanner from '@/components/Biz/AdsBanner';
import Player from '@/components/Biz/Player';
import BlockList from '@/components/Biz/BlockList';
import TagList from '@/components/Biz/TagList';

export default function Detail() {
  const idRef = useRef('');
  const params = useParams();

  const [videoInfo, setVideoInfo] = useState<null | TTypeBlockListItem>(null);

  const fetchData = async (pId: string) => {
    try {
      const { code, data } = await queryVideoDetail(decodeURIComponent(pId));
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
    if (params.id) {
      fetchData(params.id);
    }
  }, [params.id]);

  useEnsurePageToTop();

  return (
    <>
      <AdsBanner />
      {videoInfo ? <Player videoInfo={videoInfo} /> : null}
      <BlockList scene="detail" />
      <TagList />
    </>
  );
}
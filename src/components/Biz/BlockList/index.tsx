import { useState, useEffect } from 'react';
import { ResponsiveGrid, Pagination } from '@alifd/next';

import { queryVideoList } from '@/api';
import { MAX_WIDTH, PAGE_SIZE } from '@/config/video';
import {
  //
  queryColumnSpans,
  // sleep,
} from '@/utils';
import { Loading } from '@/components/Biz/Loading';

import CellDiv from '../CellDiv';

import { TScene, SceneMap } from './config';

const { Cell } = ResponsiveGrid;

export default function BlockList({
  //
  scene,
  tagTitle,
  // tagId,
}: {
  scene: TScene;
  tagTitle?: string;
  tagId?: string;
}) {
  const columnSpans = queryColumnSpans();
  const sceneItem = SceneMap[scene];

  const [pageTurning, setPageTurning] = useState(false);
  const [current, setCurrent] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [listUpdating, setListUpdating] = useState(false);
  const [blockList, setBlockList] = useState<TTypeBlockList>([]);

  const fetchData = async () => {
    try {
      setListUpdating(true);
      setPageTurning(true);

      // await sleep(2000);

      const { code, data } = await queryVideoList({
        pageSize: PAGE_SIZE,
        pageNo: current,
        lastVideoId: 0,
        type: sceneItem.type,
      });
      if (code === 'SUCCESS') {
        const { totalCount, pageData } = data || {};

        setTotalRecord(totalCount);
        setBlockList(pageData);
      }
    } catch (_e) {
      //
    } finally {
      setListUpdating(false);
      setPageTurning(false);
    }
  };

  const onChangeEvt = (targetPageIndex) => {
    setCurrent(targetPageIndex);
  };

  useEffect(() => {
    fetchData();
  }, [current]);

  return (
    <div
      style={{
        maxWidth: `${MAX_WIDTH}px`,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          margin: '20px 0 6px',
        }}
      >
        {tagTitle || sceneItem.title}
      </div>
      <div
        style={{
          position: 'relative',
          minHeight: '400px',
        }}
      >
        {listUpdating ? (
          <Loading
            style={{
              position: 'absolute',
              inset: '0',
              zIndex: '1',
            }}
          />
        ) : null}
        <ResponsiveGrid device="desktop" columns={12} gap={10}>
          {(blockList || []).map((item) => {
            return (
              <Cell colSpan={columnSpans}>
                <CellDiv detail={item} />
              </Cell>
            );
          })}
        </ResponsiveGrid>
      </div>
      <div
        //
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '28px',
        }}
      >
        <div
          style={{
            display: pageTurning ? 'block' : 'none',
            position: 'absolute',
            inset: '0',
            // background: 'rgba(255,255,255,.3)',
            zIndex: '1',
            cursor: 'wait',
          }}
        />
        <Pagination
          //
          showJump={false}
          shape="arrow-only"
          total={totalRecord}
          pageSize={PAGE_SIZE}
          current={current}
          onChange={onChangeEvt}
        />
      </div>
    </div>
  );
}

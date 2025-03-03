import { useState, useEffect } from 'react';
import { ResponsiveGrid, Pagination } from '@alifd/next';

import { queryVideoListLatest } from '@/api';
import { queryColumnSpans } from '@/utils';

import CellDiv from '../CellDiv';

import { T_Scene, SceneMap } from './config';

const { Cell } = ResponsiveGrid;

export default function BlockList({ scene }: { scene: T_Scene }) {
  const columnSpans = queryColumnSpans();
  const sceneItem = SceneMap[scene];

  const [pageLoading, setPageLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [blockList, setBlockList] = useState<TTypeBlockList>([]);

  const fetchData = async () => {
    try {
      // @ts-ignore
      const { code, data } = await queryVideoListLatest({
        pageSize: 20,
        pageNo: 1,
        lastVideoId: 0,
      });
      if (code === 'SUCCESS') {
        setBlockList(data?.pageData);
      }
    } catch (_e) {
      //
    }
  };

  const onChangeEvt = (targetPageIndex) => {
    console.log('xxxx: ', targetPageIndex);
    setPageLoading(true);
    setTimeout(() => {
      setCurrent(targetPageIndex);
      setPageLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        maxWidth: '1250px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '20px 0 6px',
        }}
      >
        {sceneItem.title}
      </div>
      <ResponsiveGrid device="desktop" columns={12} gap={10}>
        {(blockList || []).map((item) => {
          return (
            <Cell colSpan={columnSpans}>
              <CellDiv detail={item} />
            </Cell>
          );
        })}
      </ResponsiveGrid>
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
            display: pageLoading ? 'block' : 'none',
            position: 'absolute',
            inset: '0',
            // background: 'rgba(255,255,255,.3)',
            zIndex: '1',
            cursor: 'wait',
          }}
        />
        <Pagination
          //
          shape="arrow-only"
          total={21}
          current={current}
          onChange={onChangeEvt}
        />
      </div>
    </div>
  );
}

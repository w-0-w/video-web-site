import { ResponsiveGrid } from '@alifd/next';

import { queryColumnSpans } from '@/utils';

import CellDiv from '../CellDiv';

const { Cell } = ResponsiveGrid;

export default function BlockList({
  title,
  list,
}: {
  title: string;
  list: TTypeBlockList;
}) {
  const columnSpans = queryColumnSpans();

  return (
    <div
      style={{
        maxWidth: '1250px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '20px 0 6px',
        }}
      >
        {title}
      </div>
      <ResponsiveGrid
        device="desktop"
        columns={12}
        gap={10}
      >
        {(list || []).map((item) => {
          return (
            <Cell colSpan={columnSpans}>
              <CellDiv detail={item} />
            </Cell>
          );
        })}
      </ResponsiveGrid>
    </div>
  );
}

import { ResponsiveGrid } from '@alifd/next';

import { queryColumnSpans } from '@/utils';

import CellDiv from '../CellDiv';

const { Cell } = ResponsiveGrid;

export default function HomeList() {
  const columnSpans = queryColumnSpans();

  return (
    <ResponsiveGrid
      device="desktop"
      columns={12}
      style={{
        maxWidth: '1250px',
        margin: '0 auto',
      }}
      gap={10}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
        return (
          <Cell colSpan={columnSpans}>
            <CellDiv slug={`${item}`} />
          </Cell>
        );
      })}
    </ResponsiveGrid>
  );
}

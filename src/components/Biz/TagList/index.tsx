import { Tag } from '@alifd/next';

import NormalPageBlockWrapper from '@/components/NormalPageBlockWrapper';
import { useTagList } from '@/hooks';

export default function TagList() {
  const tagList = useTagList();

  return (
    <NormalPageBlockWrapper
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        margin: '32px auto 0',
      }}
    >
      {(tagList || []).map(({ tagId, tagName }) => {
        return (
          <Tag
            key={tagId}
            type="secondary"
            shape="link"
            onClick={() => {
              window.location.href = `/tag?tag=${tagName}`;
            }}
          >
            {tagName}
          </Tag>
        );
      })}
    </NormalPageBlockWrapper>
  );
}

import { useNavigate } from 'ice';
import { Tag } from '@alifd/next';

import { useTagList } from '@/hooks';

export default function TagList() {
  const navigate = useNavigate();
  const tagList = useTagList();

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        maxWidth: '1250px',
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
              navigate(`/tag?id=${tagId}&tag=${tagName}`);
            }}
          >
            {tagName}
          </Tag>
        );
      })}
    </div>
  );
}

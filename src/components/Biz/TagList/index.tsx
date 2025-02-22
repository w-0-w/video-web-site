import { useNavigate } from 'ice';
import { Tag } from '@alifd/next';

export default function TagList({
  //
  list,
}: {
  list: TTypeTagList;
}) {
  const navigate = useNavigate();
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
      {(list || []).map(({ tagId, tagLabel }) => {
        return (
          <Tag
            key={tagId}
            type="secondary"
            shape="link"
            onClick={() => {
              navigate(`/tag?id=${tagId}&tag=${tagLabel}`);
            }}
          >
            {tagLabel}
          </Tag>
        );
      })}
    </div>
  );
}

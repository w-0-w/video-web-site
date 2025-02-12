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
      {(list || []).map(({ tagId, tagLabel, flagAll }) => {
        return (
          <Tag
            key={tagId}
            type={flagAll ? 'secondary' : 'normal'}
            shape="link"
            onClick={() => {
              if (flagAll) {
                navigate('/tags');
              } else {
                navigate(`/tag?id=${tagId}&tag=${tagLabel}`);
              }
            }}
          >
            {tagLabel}
          </Tag>
        );
      })}
    </div>
  );
}

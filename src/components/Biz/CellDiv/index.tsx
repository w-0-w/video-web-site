import { useNavigate } from 'ice';

export default function CellDiv({
  //
  slug,
}: {
  slug: string;
}) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        // height: '180px',
        aspectRatio: '1.2 / 1', // 直接设置宽高比
        backgroundColor: 'gray',
        cursor: 'pointer',
      }}
      onClick={() => {
        navigate(`/detail?slug=${slug}`);
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          // height: '180px',
          aspectRatio: '1.78 / 1', // 直接设置宽高比
          backgroundColor: 'tomato',
        }}
      />
    </div>
  );
}

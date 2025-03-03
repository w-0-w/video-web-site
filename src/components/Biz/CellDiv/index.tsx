import { useNavigate } from 'ice';

export default function CellDiv({
  //
  detail,
}: {
  detail: TTypeBlockListItem;
}) {
  const { name, coverImageUrl } = detail;
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        // height: '180px',
        aspectRatio: '1.6 / 1', // 直接设置宽高比
        // backgroundColor: 'gray',
        cursor: 'pointer',
      }}
      onClick={() => {
        navigate(`/detail?slug=${Math.floor(Math.random() * 1000)}`);
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: 'calc(100% - 26px)',
          backgroundColor: '#333',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <img
          src={coverImageUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        className="t-over-1"
        style={{
          marginTop: '4px',
          fontSize: '14px',
          lineHeight: '22px',
          fontWeight: 'bold',
        }}
      >
        {name}
      </div>
    </div>
  );
}

import { Like } from '@/components/Biz/Units';
import { getRelativeTime, getHMSFromSeconds } from '@/utils';

export default function DetailInfo({
  //
  detail,
}: {
  detail: TTypeBlockListItem;
}) {
  const {
    // id,
    // name,
    // coverImageUrl,
    duration,
    createAt,
    // likeCount,
    playCount,
    // viewCount,
  } = detail;
  // const navigate = useNavigate();

  const basicInfos: {
    key: 'duration' | 'date' | 'play';
    label: string;
    value: string;
  }[] = [
    {
      key: 'duration',
      label: '时长',
      value: getHMSFromSeconds(duration),
    },
    // {
    //   key: 'view',
    //   label: '浏览',
    //   value: `${viewCount}`,
    // },
    {
      key: 'date',
      label: '日期',
      value: getRelativeTime(createAt),
    },
    {
      key: 'play',
      label: '播放',
      value: `${playCount}`,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: '12px 0 24px',
        // height: '180px',
        // backgroundColor: '#f00',
        borderBottom: '1px solid #333',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '24px',
        }}
      >
        <Like scene="detail" detail={detail} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '24px',
        }}
      >
        {basicInfos.map(({ key, label, value }) => {
          return (
            <div key={key}>
              <span
                style={{
                  color: '#777',
                }}
              >
                {label}:
              </span>{' '}
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

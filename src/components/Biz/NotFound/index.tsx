import { AD_MAX_WIDTH } from '@/config/video';

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: `${AD_MAX_WIDTH}px`,
        margin: '16px auto',
        padding: '84px 16px',
        backgroundColor: '#000',
        border: '1px solid #222',
        borderRadius: '4px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#f00',
        textAlign: 'center',
      }}
    >
      找不到页面
    </div>
  );
}

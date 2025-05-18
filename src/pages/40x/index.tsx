import NormalPageBlockWrapper from '@/components/NormalPageBlockWrapper';

export default function Success() {
  return (
    <NormalPageBlockWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 270px)',
        }}
      >
        <div
          style={{
            margin: '1.5rem 0',
            fontSize: '1.6rem',
            fontWeight: 'bold',
          }}
        >
          40X
        </div>
      </div>
    </NormalPageBlockWrapper>
  );
}

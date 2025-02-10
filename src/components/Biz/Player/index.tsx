export default function Player({
  //
  slug,
}: {
  slug: string;
}) {
  return (
    <div
      style={{
        maxWidth: '1250px',
        margin: '0 auto',
      }}
    >
      <video
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
        }}
        src="https://www.runoob.com/try/demo_source/movie.mp4"
        controls
      />
    </div>
  );
}

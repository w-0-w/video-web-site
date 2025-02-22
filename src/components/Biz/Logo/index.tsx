import { CSSProperties } from 'react';

const LeftLogoStyles: CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  fontSize: '48px',
  lineHeight: '48px',
  // fontWeight: 'bold',
  color: '#fff',
};
const RedPointStyles: CSSProperties = {
  position: 'absolute',
  top: '5.5px',
  right: '1px',
  width: '7px',
  height: '7px',
  background: 'red',
  borderRadius: '50%',
};

export function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        <div style={LeftLogoStyles}>
          <div style={RedPointStyles} />5
        </div>
        <div style={LeftLogoStyles}>MA</div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '24px',
          border: '1.5px solid red',
          borderRadius: '12px',
          marginLeft: '8px',
          padding: '0 18px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '16px',
            fontSize: '14px',
          }}
        >
          <span>5</span>
          <span>
            <span style={{ color: 'red' }}>ma</span>.com
          </span>
        </div>
      </div>
    </div>
  );
}

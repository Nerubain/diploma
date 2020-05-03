import React from 'react';

export default function NotSelected() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <div style={{ background: 'rgba(0,0,0,0.55)', borderRadius: '10px', padding: '5px 15px' }}>
        Выберите чат чтобы начать переписываться
      </div>
    </div>
  );
}

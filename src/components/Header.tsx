import React, { useState, useEffect } from 'react';

interface HeaderProps {
  starlinkBars?: number;
}

const Header: React.FC<HeaderProps> = ({ starlinkBars = 3 }) => {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, '0');
      const m = String(now.getUTCMinutes()).padStart(2, '0');
      const s = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`${h}:${m}:${s} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'linear-gradient(90deg,rgba(0,0,20,0.97),rgba(0,0,80,0.93),rgba(0,0,20,0.97))',
      borderBottom: '1px solid rgba(255,255,255,0.09)',
      backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px', height: 60, gap: 16,
    }}>
      {/* LOGO */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 34, height: 34, border: '1.5px solid #FF8C00', borderRadius: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg,rgba(255,140,0,0.15),rgba(0,0,128,0.3))',
          fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700,
          color: '#FF8C00', letterSpacing: '-0.5px',
        }}>VG</div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.05em', color: '#fff' }}>
            VALKYRON GROUP
          </span>
          <span style={{ fontSize: 9, fontWeight: 400, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
            SANT ERP · Sistema de Gestión Unificado
          </span>
        </div>
      </div>

      {/* MIA BADGE */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,140,0,0.08)', border: '1px solid rgba(255,140,0,0.25)',
          borderRadius: 20, padding: '5px 14px',
        }}>
          <span style={{ position: 'relative', display: 'inline-block', width: 8, height: 8 }}>
            <span style={{
              display: 'block', width: 8, height: 8, borderRadius: '50%', background: '#FF8C00',
            }} />
            <span style={{
              position: 'absolute', top: '50%', left: '50%',
              width: 8, height: 8, borderRadius: '50%', background: '#FF8C00',
              animation: 'pulse-ring 2s ease-out infinite',
            }} />
          </span>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em',
            color: '#FF8C00', fontWeight: 500,
          }}>MIA: ACTIVE</span>
        </div>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
          SYS_STATUS: NOMINAL
        </span>
      </div>

      {/* CLOCK + STARLINK */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Starlink */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
            STARLINK
          </span>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 14 }}>
            {[4, 7, 10, 13].map((h, i) => (
              <span key={i} style={{
                width: 3, height: h, borderRadius: 1,
                background: i < starlinkBars ? '#FF8C00' : 'rgba(255,140,0,0.22)',
                display: 'block',
              }} />
            ))}
          </div>
        </div>
        {/* UTC Clock */}
        <span style={{
          fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500,
          color: '#fff', letterSpacing: '0.05em',
        }}>{utcTime}</span>
      </div>
    </header>
  );
};

export default Header;

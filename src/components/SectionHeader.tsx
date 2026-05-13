import React from 'react';

interface SectionHeaderProps {
  zone: string;
  title: string;
  right?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ zone, title, right }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2 }}>
    <span style={{
      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em',
      color: '#FF8C00', textTransform: 'uppercase',
    }}>{zone}</span>
    <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
      {title}
    </span>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(255,140,0,0.3),transparent)' }} />
    {right && (
      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.28)', whiteSpace: 'nowrap' }}>
        {right}
      </span>
    )}
  </div>
);

export default SectionHeader;

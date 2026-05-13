import React from 'react';
import { KPIData } from '../types';

/* ── Lucide-style inline SVG icons ── */
const IconClipboard = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#FF8C00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="2"/>
    <path d="M9 12h6m-6 4h4"/>
  </svg>
);
const IconLayers = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#FF8C00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#FF8C00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);
const IconAlert = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#FF4444" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

interface KPICardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  sub: string;
  trend: string;
  trendType: 'up' | 'alert';
  isAlert?: boolean;
  blink?: boolean;
}

const KPICard: React.FC<KPICardProps> = ({ icon, value, label, sub, trend, trendType, isAlert, blink }) => (
  <div
    className={blink ? 'active-blink' : undefined}
    style={{
      background: 'linear-gradient(135deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 50%,rgba(0,0,128,0.08) 100%)',
      border: '1px solid rgba(255,255,255,0.09)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderRadius: 12, padding: 20, position: 'relative', overflow: 'hidden',
      transition: 'border-color 0.3s, transform 0.2s', cursor: 'default',
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,140,0,0.42)'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = blink ? '' : 'rgba(255,255,255,0.09)'; }}
  >
    {/* top shine line */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)', pointerEvents: 'none' }} />

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: isAlert ? 'rgba(255,60,60,0.15)' : 'rgba(255,140,0,0.13)',
        border: `1px solid ${isAlert ? 'rgba(255,60,60,0.25)' : 'rgba(255,140,0,0.2)'}`,
      }}>{icon}</div>
      <span style={{
        fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.08em',
        padding: '3px 8px', borderRadius: 10,
        color: trendType === 'up' ? '#00FF88' : '#FF8C00',
        background: trendType === 'up' ? 'rgba(0,255,136,0.1)' : 'rgba(255,140,0,0.13)',
        border: `1px solid ${trendType === 'up' ? 'rgba(0,255,136,0.22)' : 'rgba(255,140,0,0.25)'}`,
      }}>{trend}</span>
    </div>

    <div style={{
      fontFamily: 'var(--mono)', fontSize: 38, fontWeight: 700, lineHeight: 1,
      letterSpacing: -1, marginBottom: 6,
      background: isAlert
        ? 'linear-gradient(135deg,#FF4444,#FF8800)'
        : 'linear-gradient(135deg,#FFFFFF,rgba(255,255,255,0.7))',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
    }}>{value}</div>

    <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
      {label}
    </div>
    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', marginTop: 4, fontFamily: 'var(--mono)' }}>
      {sub}
    </div>
  </div>
);

interface KPIGridProps {
  data: KPIData;
}

const KPIGrid: React.FC<KPIGridProps> = ({ data }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
    <KPICard
      icon={<IconClipboard />}
      value={data.ordersToday.toLocaleString()}
      label="Pedidos Hoy"
      sub="último: hace 4 min"
      trend="▲ 18%"
      trendType="up"
      blink
    />
    <KPICard
      icon={<IconLayers />}
      value={data.gallonsProduced.toLocaleString()}
      label="Galones Producidos"
      sub="meta: 20,000 gal/día"
      trend="▲ 7%"
      trendType="up"
    />
    <KPICard
      icon={<IconClock />}
      value={`${data.systemEfficiency}%`}
      label="Eficiencia del Sistema"
      sub="uptime: 99.8%"
      trend="▲ 2.1%"
      trendType="up"
    />
    <KPICard
      icon={<IconAlert />}
      value={String(data.activeAlerts)}
      label="Alertas Activas"
      sub="revisar: zona sur"
      trend="▼ ACTIVAS"
      trendType="alert"
      isAlert
    />
  </div>
);

export default KPIGrid;

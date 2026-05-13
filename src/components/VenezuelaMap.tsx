import React, { useState } from 'react';
import { MapHotspot } from '../types';
import { MAP_HOTSPOTS } from '../data';

interface TooltipState {
  visible: boolean;
  city: string;
  orders: number;
  x: number;
  y: number;
}

interface VenezuelaMapProps {
  activeOrders: number;
  activeZones: number;
}

const VenezuelaMap: React.FC<VenezuelaMapProps> = ({ activeOrders, activeZones }) => {
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, city: '', orders: 0, x: 0, y: 0 });
  const [pulsingId, setPulsingId] = useState<string | null>(null);

  const handleHotspotClick = (spot: MapHotspot) => {
    setPulsingId(spot.id);
    setTooltip({ visible: true, city: spot.city, orders: spot.orders, x: spot.cx, y: spot.cy });
    setTimeout(() => setTooltip(prev => ({ ...prev, visible: false })), 3000);
    setTimeout(() => setPulsingId(null), 2000);
  };

  const getRadius = (intensity: MapHotspot['intensity']) =>
    intensity === 'high' ? 9 : intensity === 'medium' ? 7 : 5.5;

  const getGlowColor = (intensity: MapHotspot['intensity']) =>
    intensity === 'high' ? 'rgba(255,140,0,0.7)' : intensity === 'medium' ? 'rgba(255,100,0,0.5)' : 'rgba(255,140,0,0.35)';

  return (
    <div style={{
      background: 'linear-gradient(135deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 50%,rgba(0,0,128,0.08) 100%)',
      border: '1px solid rgba(255,255,255,0.09)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderRadius: 12, padding: 16,
      display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', overflow: 'hidden',
    }}>
      {/* Top shine */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)', pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
            Inteligencia Geoespacial
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>Mapa de Calor Nacional</div>
        </div>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em',
          padding: '3px 8px', borderRadius: 4,
          color: '#FF8C00', background: 'rgba(255,140,0,0.13)',
          border: '1px solid rgba(255,140,0,0.22)',
        }}>LIVE</span>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[
          { v: activeOrders, l: 'Pedidos activos' },
          { v: activeZones, l: 'Zonas activas' },
        ].map(({ v, l }) => (
          <div key={l} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 6, padding: '8px 10px', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 16, fontWeight: 700, color: '#fff' }}>{v}</div>
            <div style={{ fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Map */}
      <div style={{ position: 'relative', background: 'rgba(0,0,30,0.6)', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,0,128,0.3)', minHeight: 240 }}>
        <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', minHeight: 240 }}>
          <defs>
            <radialGradient id="hg-high" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hg-medium" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF5500" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FF5500" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hg-low" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
            </radialGradient>
            <filter id="spot-glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Venezuela territory */}
          <path
            d="M30,80 L45,60 L60,52 L80,48 L100,44 L120,42 L140,40 L160,38 L180,36 L200,38 L220,44 L240,50 L255,58 L268,68 L275,80 L280,95 L278,110 L272,125 L265,140 L258,155 L250,165 L240,170 L228,168 L215,170 L210,180 L215,192 L218,205 L212,215 L200,220 L188,218 L178,210 L168,205 L155,200 L142,198 L130,200 L118,205 L108,212 L98,215 L85,210 L75,200 L68,185 L62,170 L55,158 L46,145 L38,130 L32,115 L28,100 Z"
            fill="rgba(0,0,128,0.22)"
            stroke="rgba(0,80,200,0.38)"
            strokeWidth={1.5}
          />
          {/* Lago Maracaibo */}
          <ellipse cx={82} cy={115} rx={14} ry={20} fill="rgba(0,60,180,0.38)" stroke="rgba(0,100,220,0.28)" strokeWidth={0.8} />
          {/* Río Orinoco */}
          <path d="M108,175 Q140,165 168,155 Q195,148 225,158" fill="none" stroke="rgba(0,80,200,0.28)" strokeWidth={1.5} />

          {/* Heat glow rings */}
          {MAP_HOTSPOTS.filter(s => s.intensity !== 'low').map(spot => (
            <circle
              key={`glow-${spot.id}`}
              cx={spot.cx} cy={spot.cy}
              r={spot.intensity === 'high' ? 30 : 22}
              fill={`url(#hg-${spot.intensity})`}
              opacity={0.8}
            />
          ))}

          {/* Hotspots */}
          {MAP_HOTSPOTS.map((spot, i) => {
            const r = getRadius(spot.intensity);
            const glowColor = getGlowColor(spot.intensity);
            const isPulsing = pulsingId === spot.id;
            const labelX = spot.cx + r + 5;
            const labelY = spot.cy - 2;

            return (
              <g
                key={spot.id}
                style={{ cursor: 'pointer' }}
                onClick={() => handleHotspotClick(spot)}
              >
                {/* Pulse ring */}
                <circle
                  cx={spot.cx} cy={spot.cy} r={r}
                  fill={`rgba(255,${spot.intensity === 'high' ? '140' : '90'},0,0.18)`}
                  stroke={glowColor}
                  strokeWidth={1.5}
                  filter="url(#spot-glow)"
                  style={{
                    animation: isPulsing
                      ? 'hotpulse 0.6s ease-in-out 2'
                      : `hotpulse ${2 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
                {/* Core dot */}
                <circle
                  cx={spot.cx} cy={spot.cy}
                  r={spot.intensity === 'high' ? 4 : spot.intensity === 'medium' ? 3.5 : 3}
                  fill={spot.intensity === 'high' ? '#FF8C00' : spot.intensity === 'medium' ? '#FF5500' : '#FF7700'}
                  opacity={spot.intensity === 'low' ? 0.65 : 1}
                />
                {/* Label (only for high/medium) */}
                {spot.intensity !== 'low' && (
                  <>
                    <text
                      x={labelX} y={labelY}
                      fill="rgba(255,255,255,0.9)"
                      fontSize={spot.intensity === 'high' ? 9 : 8}
                      fontFamily="JetBrains Mono, monospace"
                      fontWeight="700"
                    >{spot.city.toUpperCase()}</text>
                    <text
                      x={labelX} y={labelY + 11}
                      fill="rgba(255,140,0,0.85)"
                      fontSize={spot.intensity === 'high' ? 8 : 7.5}
                      fontFamily="JetBrains Mono, monospace"
                    >{spot.orders} ped</text>
                  </>
                )}
              </g>
            );
          })}

          {/* Tooltip */}
          {tooltip.visible && (
            <g>
              <rect
                x={Math.min(tooltip.x + 10, 200)} y={tooltip.y - 24}
                width={115} height={38}
                rx={5}
                fill="rgba(0,0,0,0.88)"
                stroke="rgba(255,140,0,0.42)"
                strokeWidth={1}
              />
              <text
                x={Math.min(tooltip.x + 10, 200) + 57.5}
                y={tooltip.y - 9}
                fill="#FFFFFF"
                fontSize={9} fontWeight="700"
                fontFamily="JetBrains Mono, monospace"
                textAnchor="middle"
              >{tooltip.city.toUpperCase()}</text>
              <text
                x={Math.min(tooltip.x + 10, 200) + 57.5}
                y={tooltip.y + 5}
                fill="#FF8C00"
                fontSize={8}
                fontFamily="JetBrains Mono, monospace"
                textAnchor="middle"
              >{tooltip.orders} pedidos activos</text>
            </g>
          )}
        </svg>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {[
          { color: '#FF8C00', glow: true, label: 'Muy alta demanda' },
          { color: '#FF5500', glow: false, label: 'Alta demanda' },
          { color: '#884400', glow: false, label: 'Media', opacity: 0.7 },
        ].map(({ color, glow, label, opacity }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, opacity, ...(glow ? { boxShadow: `0 0 6px ${color}` } : {}) }} />
            {label}
          </div>
        ))}
      </div>

      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em', fontFamily: 'var(--mono)', textAlign: 'center' }}>
        ↑ Clic en un punto para telemetría detallada
      </div>
    </div>
  );
};

export default VenezuelaMap;

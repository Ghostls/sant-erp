import React, { useState } from 'react';
import { Order, OrderStatus } from '../types';

type FilterType = 'ALL' | OrderStatus;

interface LogisticsTableProps {
  orders: Order[];
}

const StatusBadge: React.FC<{ status: OrderStatus }> = ({ status }) => {
  const config: Record<OrderStatus, { label: string; color: string; bg: string; border: string }> = {
    PENDING:  { label: 'Pendiente',  color: '#FF8C00', bg: 'rgba(255,140,0,0.1)',    border: 'rgba(255,140,0,0.22)' },
    MIXING:   { label: 'En Mezcla',  color: '#4488FF', bg: 'rgba(0,0,128,0.3)',      border: 'rgba(68,136,255,0.3)' },
    DEPLOYED: { label: 'Desplegado', color: '#00FF88', bg: 'rgba(0,255,136,0.08)',   border: 'rgba(0,255,136,0.22)' },
  };
  const c = config[status];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '4px 10px', borderRadius: 4,
      fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: c.color, background: c.bg, border: `1px solid ${c.border}`,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: c.color, flexShrink: 0, display: 'block' }} />
      {c.label}
    </span>
  );
};

const FILTER_BUTTONS: { key: FilterType; label: string }[] = [
  { key: 'ALL',      label: 'TODO' },
  { key: 'PENDING',  label: 'PENDIENTE' },
  { key: 'MIXING',   label: 'EN MEZCLA' },
  { key: 'DEPLOYED', label: 'DESPLEGADO' },
];

const LogisticsTable: React.FC<LogisticsTableProps> = ({ orders }) => {
  const [filter, setFilter] = useState<FilterType>('ALL');
  const visible = filter === 'ALL' ? orders : orders.filter(o => o.status === filter);

  return (
    <div style={{
      background: 'linear-gradient(135deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 50%,rgba(0,0,128,0.08) 100%)',
      border: '1px solid rgba(255,255,255,0.09)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderRadius: 12, padding: 24, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)', pointerEvents: 'none' }} />

      {/* Panel header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
            Base de Datos Táctica
          </div>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>Órdenes de Producción en Curso</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {FILTER_BUTTONS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                padding: '8px 14px',
                background: filter === key ? 'rgba(255,140,0,0.12)' : 'transparent',
                border: `1px solid ${filter === key ? 'rgba(255,140,0,0.4)' : 'rgba(255,255,255,0.09)'}`,
                borderRadius: 8, fontSize: 11, fontWeight: filter === key ? 600 : 400,
                color: filter === key ? '#FF8C00' : 'rgba(255,255,255,0.55)',
                cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.08em', fontFamily: 'var(--sans)',
              }}
            >{label}</button>
          ))}
        </div>
      </div>

      {/* Record count */}
      <div style={{ fontSize: 10, fontFamily: 'var(--mono)', color: 'rgba(255,255,255,0.28)', marginBottom: 12, letterSpacing: '0.1em' }}>
        {visible.length} registro{visible.length !== 1 ? 's' : ''} activo{visible.length !== 1 ? 's' : ''}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['ID ORDEN', 'CLIENTE', 'PRODUCTO / REF.', 'VOLUMEN', 'ZONA', 'ETA', 'ESTADO'].map(col => (
                <th key={col} style={{
                  fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.28)', padding: '10px 16px', textAlign: 'left',
                  borderBottom: '1px solid rgba(255,255,255,0.09)',
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((order, idx) => (
              <tr
                key={order.id}
                style={{ transition: 'background 0.15s', background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}
                onMouseEnter={e => (e.currentTarget as HTMLTableRowElement).style.background = 'rgba(255,140,0,0.03)'}
                onMouseLeave={e => (e.currentTarget as HTMLTableRowElement).style.background = idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)'}
              >
                <td style={{ padding: '14px 16px', fontFamily: 'var(--mono)', fontSize: 13, color: '#FF8C00', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  {order.id}
                </td>
                <td style={{ padding: '14px 16px', fontFamily: 'var(--mono)', fontSize: 12, color: 'rgba(255,255,255,0.85)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  {order.clientName}
                </td>
                <td style={{ padding: '14px 16px', fontFamily: 'var(--sans)', fontSize: 12, color: 'rgba(255,255,255,0.75)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ color: '#FF8C00', fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, marginRight: 6 }}>{order.product}</span>
                  {order.colorRef}
                </td>
                <td style={{ padding: '14px 16px', fontFamily: 'var(--mono)', fontSize: 13, color: '#fff', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.04)', whiteSpace: 'nowrap' }}>
                  {order.volume.toLocaleString()} <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>gal</span>
                </td>
                <td style={{ padding: '14px 16px', fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.45)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  {order.zone}
                </td>
                <td style={{ padding: '14px 16px', fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.5)', borderBottom: '1px solid rgba(255,255,255,0.04)', whiteSpace: 'nowrap' }}>
                  {order.eta}
                </td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogisticsTable;

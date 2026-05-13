import React, { useState, useCallback } from 'react';
import { OrderFormData, TelemetryFeedItem } from '../types';
import { PAINT_CATEGORIES, DISPATCH_ZONES, PRIORITY_OPTIONS, generateOrderId } from '../data';

/* ── Shared glass input style ── */
const inputStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,0.4)',
  border: '1px solid rgba(255,255,255,0.09)',
  borderRadius: 8, padding: '11px 14px',
  fontFamily: 'var(--sans)', fontSize: 14, color: '#fff',
  outline: 'none', width: '100%',
  backdropFilter: 'blur(10px)',
  transition: 'border-color 0.2s, background 0.2s',
  WebkitAppearance: 'none',
};
const labelStyle: React.CSSProperties = {
  fontSize: 10, fontWeight: 600, letterSpacing: '0.15em',
  textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
  marginBottom: 6, display: 'block',
};

interface OrderFormProps {
  onOrderSubmit: (data: OrderFormData, id: string) => void;
  feedItems: TelemetryFeedItem[];
}

const EMPTY_FORM: OrderFormData = {
  clientId: '', clientName: '', zone: '', category: '',
  colorRef: '', priority: 'NORMAL', volume: 200, notes: '',
};

const OrderForm: React.FC<OrderFormProps> = ({ onOrderSubmit, feedItems }) => {
  const [form, setForm] = useState<OrderFormData>(EMPTY_FORM);

  const set = useCallback(<K extends keyof OrderFormData>(key: K, val: OrderFormData[K]) => {
    setForm(prev => ({ ...prev, [key]: val }));
  }, []);

  const pct = ((form.volume - 10) / (1000 - 10)) * 100;

  const handleSubmit = () => {
    if (!form.clientId.trim() || !form.clientName.trim()) {
      alert('⚠ Por favor completa ID Cliente y Nombre.');
      return;
    }
    onOrderSubmit(form, generateOrderId());
    setForm(EMPTY_FORM);
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 50%,rgba(0,0,128,0.08) 100%)',
      border: '1px solid rgba(255,255,255,0.09)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderRadius: 12, padding: 24, position: 'relative', overflow: 'hidden',
    }}>
      {/* Top shine */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)', pointerEvents: 'none' }} />

      {/* Panel header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
            Módulo Táctico
          </div>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>Entrada de Pedido Digital</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['VENDEDOR', 'EN LÍNEA'] as const).map((t, i) => (
            <span key={t} style={{
              fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em',
              padding: '3px 8px', borderRadius: 4,
              color: i === 0 ? '#FF8C00' : '#00FF88',
              background: i === 0 ? 'rgba(255,140,0,0.13)' : 'rgba(0,255,136,0.08)',
              border: `1px solid ${i === 0 ? 'rgba(255,140,0,0.22)' : 'rgba(0,255,136,0.2)'}`,
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Form Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* ID Cliente */}
        <div>
          <label style={labelStyle}>ID Cliente / RIF</label>
          <input
            style={inputStyle} type="text" placeholder="J-12345678-9"
            value={form.clientId}
            onChange={e => set('clientId', e.target.value)}
            onFocus={e => { e.target.style.borderColor = 'rgba(255,140,0,0.5)'; e.target.style.background = 'rgba(255,140,0,0.04)'; }}
            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; e.target.style.background = 'rgba(0,0,0,0.4)'; }}
          />
        </div>
        {/* Nombre */}
        <div>
          <label style={labelStyle}>Nombre del Cliente</label>
          <input
            style={inputStyle} type="text" placeholder="Empresa o persona"
            value={form.clientName}
            onChange={e => set('clientName', e.target.value)}
            onFocus={e => { e.target.style.borderColor = 'rgba(255,140,0,0.5)'; e.target.style.background = 'rgba(255,140,0,0.04)'; }}
            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; e.target.style.background = 'rgba(0,0,0,0.4)'; }}
          />
        </div>
        {/* Zona */}
        <div>
          <label style={labelStyle}>Zona de Despacho</label>
          <select
            style={{ ...inputStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 36 }}
            value={form.zone}
            onChange={e => set('zone', e.target.value)}
          >
            <option value="" disabled>Seleccionar zona</option>
            {DISPATCH_ZONES.map(z => <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
        {/* Categoría */}
        <div>
          <label style={labelStyle}>Categoría de Pintura</label>
          <select
            style={{ ...inputStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 36 }}
            value={form.category}
            onChange={e => set('category', e.target.value)}
          >
            <option value="" disabled>Seleccionar categoría</option>
            {PAINT_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {/* Color */}
        <div>
          <label style={labelStyle}>Referencia / Color</label>
          <input
            style={inputStyle} type="text" placeholder="Ej: ST-0042 Blanco Humo"
            value={form.colorRef}
            onChange={e => set('colorRef', e.target.value)}
            onFocus={e => { e.target.style.borderColor = 'rgba(255,140,0,0.5)'; e.target.style.background = 'rgba(255,140,0,0.04)'; }}
            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; e.target.style.background = 'rgba(0,0,0,0.4)'; }}
          />
        </div>
        {/* Prioridad */}
        <div>
          <label style={labelStyle}>Prioridad de Despacho</label>
          <select
            style={{ ...inputStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 36 }}
            value={form.priority}
            onChange={e => set('priority', e.target.value)}
          >
            {PRIORITY_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        {/* Notes full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Observaciones Tácticas</label>
          <input
            style={inputStyle} type="text" placeholder="Instrucciones especiales de mezcla o entrega…"
            value={form.notes}
            onChange={e => set('notes', e.target.value)}
            onFocus={e => { e.target.style.borderColor = 'rgba(255,140,0,0.5)'; e.target.style.background = 'rgba(255,140,0,0.04)'; }}
            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; e.target.style.background = 'rgba(0,0,0,0.4)'; }}
          />
        </div>
        {/* Volume Slider full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ ...labelStyle, marginBottom: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span>Volumen del Pedido</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 20, fontWeight: 700, color: '#FF8C00' }}>
                {form.volume.toLocaleString()}
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginLeft: 4 }}>gal</span>
              </span>
            </div>
          </label>
          {/* Custom range track */}
          <div style={{ position: 'relative', height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'visible' }}>
            <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#000080,#FF8C00)', borderRadius: 3, transition: 'width 0.05s' }} />
            <div style={{
              position: 'absolute', top: '50%', transform: 'translateY(-50%)',
              left: `calc(${pct}% - 8px)`,
              width: 16, height: 16, borderRadius: '50%',
              background: '#FF8C00', border: '2px solid rgba(0,0,0,0.5)',
              boxShadow: '0 0 8px rgba(255,140,0,0.5)',
              transition: 'left 0.05s', pointerEvents: 'none',
            }} />
            <input
              type="range" min={10} max={1000} step={1} value={form.volume}
              onChange={e => set('volume', Number(e.target.value))}
              style={{
                position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                left: 0, width: '100%', opacity: 0, cursor: 'pointer',
                WebkitAppearance: 'none',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.28)', marginTop: 6 }}>
            <span>10 gal</span><span>500 gal</span><span>1000 gal</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 12, marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.09)' }}>
        <button
          onClick={() => setForm(EMPTY_FORM)}
          style={{
            padding: '12px 20px', background: 'transparent',
            border: '1px solid rgba(255,255,255,0.09)', borderRadius: 8,
            fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.55)', cursor: 'pointer',
            transition: 'all 0.2s', letterSpacing: '0.05em',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.22)'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.55)'; }}
        >⌫ LIMPIAR</button>
        <button
          onClick={handleSubmit}
          style={{
            flex: 1, padding: '12px 20px',
            background: 'linear-gradient(135deg,rgba(255,140,0,0.9),rgba(255,100,0,0.8))',
            border: '1px solid rgba(255,140,0,0.6)', borderRadius: 8,
            fontSize: 13, fontWeight: 600, letterSpacing: '0.05em',
            color: '#000', cursor: 'pointer', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(255,140,0,0.35)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
        >▶ DESPACHAR PEDIDO</button>
      </div>

      {/* Live feed */}
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.09)' }}>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', marginBottom: 10 }}>
          Telemetría en vivo · Últimos pedidos
        </div>
        <div style={{ maxHeight: 180, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {feedItems.slice(0, 6).map(item => (
            <div key={item.id} className="feed-item-enter" style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 12px',
              background: item.isNew ? 'rgba(255,140,0,0.07)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${item.isNew ? 'rgba(255,140,0,0.18)' : 'rgba(255,255,255,0.06)'}`,
              borderRadius: 6, fontSize: 11,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF8C00', flexShrink: 0, boxShadow: '0 0 6px #FF8C00', display: 'block' }} />
              <span style={{ fontWeight: 600, color: '#fff', letterSpacing: '0.05em' }}>{item.city}</span>
              <span style={{ color: 'rgba(255,255,255,0.45)', margin: '0 2px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--mono)', fontSize: 10 }}>{item.product}</span>
              <span style={{ color: '#FF8C00', fontFamily: 'var(--mono)', fontWeight: 700, marginLeft: 4 }}>{item.volume} gal</span>
              <span style={{ color: 'rgba(255,255,255,0.28)', fontFamily: 'var(--mono)', marginLeft: 'auto', fontSize: 10 }}>ahora</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;

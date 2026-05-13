import React, { useState, useEffect, useCallback } from 'react';
import { Order, KPIData, TelemetryFeedItem, OrderFormData } from './types';
import { INITIAL_ORDERS, generateFeedItem } from './data';
import Header from './components/Header';
import KPIGrid from './components/KPIGrid';
import OrderForm from './components/OrderForm';
import VenezuelaMap from './components/VenezuelaMap';
import LogisticsTable from './components/LogisticsTable';
import SectionHeader from './components/SectionHeader';
import { GLOBAL_STYLES } from './styles';

const SantERPDashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [feedItems, setFeedItems] = useState<TelemetryFeedItem[]>([]);
  const [kpi, setKpi] = useState<KPIData>({
    ordersToday: 247,
    gallonsProduced: 18450,
    systemEfficiency: 92.3,
    activeAlerts: 3,
  });

  // Inject global styles once
  useEffect(() => {
    const id = 'sant-erp-global-styles';
    if (!document.getElementById(id)) {
      const el = document.createElement('style');
      el.id = id;
      el.textContent = GLOBAL_STYLES;
      document.head.appendChild(el);
    }
    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  // Seed initial feed
  useEffect(() => {
    setFeedItems([generateFeedItem(), generateFeedItem(), generateFeedItem()]);
  }, []);

  // Live telemetry feed
  useEffect(() => {
    const id = setInterval(() => {
      const item = generateFeedItem();
      setFeedItems(prev => [item, ...prev].slice(0, 10));
      setKpi(prev => ({ ...prev, ordersToday: prev.ordersToday + 1 }));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Gallon counter
  useEffect(() => {
    const id = setInterval(() => {
      setKpi(prev => ({
        ...prev,
        gallonsProduced: prev.gallonsProduced + Math.floor(Math.random() * 15 + 5),
      }));
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const handleOrderSubmit = useCallback((data: OrderFormData, id: string) => {
    const newOrder: Order = {
      id,
      clientId: data.clientId,
      clientName: data.clientName,
      product: data.category.split('·')[0].trim(),
      colorRef: data.colorRef || '—',
      volume: data.volume,
      zone: data.zone.split('-')[0].trim(),
      priority: data.priority as Order['priority'],
      eta: 'PROGRAMANDO...',
      status: 'PENDING',
      notes: data.notes,
      timestamp: new Date(),
    };
    setOrders(prev => [newOrder, ...prev]);
    setKpi(prev => ({ ...prev, ordersToday: prev.ordersToday + 1 }));
    const feedEntry: TelemetryFeedItem = {
      id: `new-${Date.now()}`,
      city: data.zone.split('-')[0].trim(),
      product: data.category.split('·')[0].trim(),
      volume: data.volume,
      timestamp: new Date(),
      isNew: true,
    };
    setFeedItems(prev => [feedEntry, ...prev].slice(0, 10));
  }, []);

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Space Grotesk', sans-serif" }}>
      <Header starlinkBars={3} />

      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1600, margin: '0 auto' }}>

        {/* ── ZONA 02: KPI ── */}
        <SectionHeader zone="ZONA 02" title="KPI de Alta Luminosidad" />
        <KPIGrid data={kpi} />

        {/* ── ZONA 03: NÚCLEO ESTRATÉGICO ── */}
        <SectionHeader zone="ZONA 03" title="Núcleo Estratégico" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>
          <OrderForm onOrderSubmit={handleOrderSubmit} feedItems={feedItems} />
          <VenezuelaMap activeOrders={kpi.ordersToday} activeZones={9} />
        </div>

        {/* ── ZONA 04: LOGÍSTICA ── */}
        <SectionHeader
          zone="ZONA 04"
          title="Monitor de Logística de Producción"
          right={`${orders.length} registros activos`}
        />
        <LogisticsTable orders={orders} />

      </div>
    </div>
  );
};

export default SantERPDashboard;

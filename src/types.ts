export type OrderStatus = 'PENDING' | 'MIXING' | 'DEPLOYED';
export type OrderPriority = 'NORMAL' | 'URGENT' | 'CRITICAL';

export interface Order {
  id: string;
  clientId: string;
  clientName: string;
  product: string;
  colorRef: string;
  volume: number;
  zone: string;
  priority: OrderPriority;
  eta: string;
  status: OrderStatus;
  notes?: string;
  timestamp: Date;
}

export interface TelemetryFeedItem {
  id: string;
  city: string;
  product: string;
  volume: number;
  timestamp: Date;
  isNew?: boolean;
}

export interface KPIData {
  ordersToday: number;
  gallonsProduced: number;
  systemEfficiency: number;
  activeAlerts: number;
}

export interface MapHotspot {
  id: string;
  city: string;
  orders: number;
  cx: number;
  cy: number;
  intensity: 'high' | 'medium' | 'low';
}

export interface SystemStatus {
  miaActive: boolean;
  starlinkBars: number;
  uptimePercent: number;
}

export interface OrderFormData {
  clientId: string;
  clientName: string;
  zone: string;
  category: string;
  colorRef: string;
  priority: string;
  volume: number;
  notes: string;
}

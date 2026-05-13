import { Order, MapHotspot, TelemetryFeedItem } from './types';

export const PAINT_CATEGORIES = [
  'SANT-PRO · Interior Premium',
  'SANT-EXT · Exterior 100% Acrílico',
  'SANT-IND · Industrial Epóxica',
  'SANT-ANTI · Anticorrosivo',
  'SANT-BASE · Base Selladora',
  'SANT-ESML · Esmalte Alquídico',
  'SANT-TEX · Texturizado',
];

export const DISPATCH_ZONES = [
  'Caracas - Distrito Capital',
  'Miranda - Los Valles del Tuy',
  'Carabobo - Valencia',
  'Aragua - Maracay',
  'Zulia - Maracaibo',
  'Bolívar - Puerto Ordaz',
  'Lara - Barquisimeto',
  'Anzoátegui - Barcelona',
  'Táchira - San Cristóbal',
];

export const PRIORITY_OPTIONS = [
  { value: 'NORMAL', label: 'NORMAL — 48–72 h' },
  { value: 'URGENT', label: 'URGENTE — 24 h' },
  { value: 'CRITICAL', label: 'CRÍTICO — Mismo día' },
];

export const INITIAL_ORDERS: Order[] = [
  { id: 'ORD-2847', clientId: 'J-30456789-0', clientName: 'Constructora Venezolana', product: 'SANT-EXT', colorRef: 'Blanco Puro', volume: 500, zone: 'Caracas', priority: 'URGENT', eta: 'HOY 18:30', status: 'MIXING', timestamp: new Date() },
  { id: 'ORD-2846', clientId: 'J-12345678-9', clientName: 'Ferretería El Constructor', product: 'SANT-PRO', colorRef: 'Crema ST-012', volume: 120, zone: 'Valencia', priority: 'NORMAL', eta: 'MAÑANA 09:00', status: 'PENDING', timestamp: new Date() },
  { id: 'ORD-2845', clientId: 'J-40678901-2', clientName: 'Hotel Eurobuilding', product: 'SANT-IND', colorRef: 'Gris Acero', volume: 850, zone: 'Caracas', priority: 'URGENT', eta: 'HOY 20:00', status: 'MIXING', timestamp: new Date() },
  { id: 'ORD-2844', clientId: 'G-20000001-0', clientName: 'Alcaldía de Maracaibo', product: 'SANT-ANTI', colorRef: 'Rojo Minio', volume: 1200, zone: 'Maracaibo', priority: 'NORMAL', eta: 'DOC 08:00', status: 'DEPLOYED', timestamp: new Date() },
  { id: 'ORD-2843', clientId: 'J-29876543-1', clientName: 'Inversiones Kraft C.A.', product: 'SANT-BASE', colorRef: 'Selladora', volume: 280, zone: 'Barquisimeto', priority: 'NORMAL', eta: 'DOC 14:00', status: 'PENDING', timestamp: new Date() },
  { id: 'ORD-2842', clientId: 'J-10234567-8', clientName: 'Pinturas & Más S.R.L.', product: 'SANT-ESML', colorRef: 'Negro Grafito', volume: 95, zone: 'Maracay', priority: 'NORMAL', eta: 'HOY 17:00', status: 'DEPLOYED', timestamp: new Date() },
  { id: 'ORD-2841', clientId: 'G-20000002-0', clientName: 'Corp. CVG Ferrominera', product: 'SANT-IND', colorRef: 'Amarillo Seguridad', volume: 2000, zone: 'Pto. Ordaz', priority: 'CRITICAL', eta: 'DOC 10:00', status: 'MIXING', timestamp: new Date() },
  { id: 'ORD-2840', clientId: 'J-30987654-3', clientName: 'Urbanización Los Altos', product: 'SANT-TEX', colorRef: 'Tierra Ocre', volume: 340, zone: 'Miranda', priority: 'NORMAL', eta: 'MAÑANA 11:00', status: 'PENDING', timestamp: new Date() },
  { id: 'ORD-2839', clientId: 'J-20543219-5', clientName: 'Centro Comercial Sambil', product: 'SANT-PRO', colorRef: 'Blanco Ártico', volume: 600, zone: 'Caracas', priority: 'URGENT', eta: 'HOY 19:00', status: 'DEPLOYED', timestamp: new Date() },
  { id: 'ORD-2838', clientId: 'G-20000003-0', clientName: 'Pdvsa Refinería CRP', product: 'SANT-IND', colorRef: 'Alta Temp.', volume: 3500, zone: 'Anzoátegui', priority: 'CRITICAL', eta: 'MAÑANA 06:00', status: 'MIXING', timestamp: new Date() },
];

export const MAP_HOTSPOTS: MapHotspot[] = [
  { id: 'caracas', city: 'Caracas', orders: 89, cx: 195, cy: 90, intensity: 'high' },
  { id: 'valencia', city: 'Valencia', orders: 62, cx: 155, cy: 115, intensity: 'high' },
  { id: 'maracaibo', city: 'Maracaibo', orders: 41, cx: 82, cy: 90, intensity: 'medium' },
  { id: 'barquisimeto', city: 'Barquisimeto', orders: 28, cx: 120, cy: 108, intensity: 'medium' },
  { id: 'ptoordaz', city: 'Puerto Ordaz', orders: 22, cx: 238, cy: 152, intensity: 'low' },
  { id: 'barcelona', city: 'Barcelona', orders: 19, cx: 228, cy: 105, intensity: 'low' },
  { id: 'maracay', city: 'Maracay', orders: 18, cx: 175, cy: 100, intensity: 'low' },
];

export const FEED_CITIES = ['Caracas', 'Valencia', 'Maracaibo', 'Barquisimeto', 'Maracay', 'Puerto Ordaz', 'Barcelona', 'San Cristóbal'];
export const FEED_PRODUCTS = ['SANT-PRO', 'SANT-EXT', 'SANT-IND', 'SANT-ANTI', 'SANT-BASE', 'SANT-ESML'];

export function generateFeedItem(): TelemetryFeedItem {
  return {
    id: `feed-${Date.now()}-${Math.random()}`,
    city: FEED_CITIES[Math.floor(Math.random() * FEED_CITIES.length)],
    product: FEED_PRODUCTS[Math.floor(Math.random() * FEED_PRODUCTS.length)],
    volume: Math.floor(Math.random() * 480 + 20),
    timestamp: new Date(),
    isNew: true,
  };
}

export function generateOrderId(): string {
  return `ORD-${Math.floor(Math.random() * 1000 + 2900)}`;
}

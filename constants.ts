import { Shipment, InventoryItem, BlockchainTransaction, AnalyticsMetric } from './types';

export const SHIPMENTS: Shipment[] = [
  {
    id: 'SHP-9821',
    origin: 'Singapore Port',
    destination: 'Jakarta Logistics Hub',
    status: 'In Transit',
    lastLocation: { lat: 1.3521, lng: 103.8198, name: 'Malacca Strait' },
    eta: '2024-05-12T14:00:00Z',
    loadType: 'Cooling/Medical',
    temp: 4.2,
    priority: 'High',
  },
  {
    id: 'SHP-3342',
    origin: 'Shanghai Terminal',
    destination: 'Ho Chi Minh City Depot',
    status: 'Delayed',
    lastLocation: { lat: 31.2304, lng: 121.4737, name: 'East China Sea' },
    eta: '2024-05-15T08:00:00Z',
    loadType: 'Electronics',
    priority: 'Medium',
  },
  {
    id: 'SHP-1209',
    origin: 'Bangkok Air Cargo',
    destination: 'Tokyo Distribution',
    status: 'In Transit',
    lastLocation: { lat: 13.7563, lng: 100.5018, name: 'South China Sea' },
    eta: '2024-05-11T22:00:00Z',
    loadType: 'High-Value/Semiconductors',
    priority: 'High',
  },
];

export const INVENTORY: InventoryItem[] = [
  {
    id: 'INV-001',
    name: 'Lithium ION Cells',
    sku: 'LI-X9-22',
    stockLevel: 1250,
    reorderPoint: 500,
    predictedDemand: 1800,
    status: 'Healthy',
  },
  {
    id: 'INV-002',
    name: 'Circuit Boards A2',
    sku: 'PCB-A2-S',
    stockLevel: 320,
    reorderPoint: 400,
    predictedDemand: 600,
    status: 'Low',
  },
  {
    id: 'INV-003',
    name: 'Thermal Paste',
    sku: 'THM-GRP-X',
    stockLevel: 45,
    reorderPoint: 100,
    predictedDemand: 250,
    status: 'Critical',
  },
];

export const TRANSACTIONS: BlockchainTransaction[] = [
  {
    id: 'TX-f82a...',
    hash: '0x8f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o',
    timestamp: '2024-05-10T09:45:12Z',
    action: 'TRANSFER_OF_CUSTODY',
    actor: 'SG_CUSTOMS_SEC_A',
    details: 'Shipment SHP-9821 verified and released for maritime transit.',
  },
  {
    id: 'TX-c91d...',
    hash: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
    timestamp: '2024-05-10T11:20:33Z',
    action: 'TEMP_THRESHOLD_ALERT',
    actor: 'IOT_SENSOR_9821_4',
    details: 'Temperature fluctuation recorded: +0.4°C. Automated cooling adjustment triggered.',
  },
];

export const METRICS: AnalyticsMetric[] = [
  { date: 'May 04', efficiency: 88, cost: 42000, deliveries: 145 },
  { date: 'May 05', efficiency: 92, cost: 38000, deliveries: 160 },
  { date: 'May 06', efficiency: 85, cost: 45000, deliveries: 130 },
  { date: 'May 07', efficiency: 94, cost: 35000, deliveries: 180 },
  { date: 'May 08', efficiency: 91, cost: 39000, deliveries: 172 },
  { date: 'May 09', efficiency: 95, cost: 34000, deliveries: 195 },
  { date: 'May 10', efficiency: 96, cost: 32000, deliveries: 210 },
];

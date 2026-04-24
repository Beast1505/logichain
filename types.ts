export interface Shipment {
  id: string;
  origin: string;
  destination: string;
  status: 'In Transit' | 'Delayed' | 'Delivered' | 'Pending';
  lastLocation: {
    lat: number;
    lng: number;
    name: string;
  };
  eta: string;
  loadType: string;
  temp?: number;
  priority: 'High' | 'Medium' | 'Low';
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stockLevel: number;
  reorderPoint: number;
  predictedDemand: number;
  status: 'Healthy' | 'Low' | 'Critical';
}

export interface BlockchainTransaction {
  id: string;
  hash: string;
  timestamp: string;
  action: string;
  actor: string;
  details: string;
}

export interface AnalyticsMetric {
  date: string;
  efficiency: number;
  cost: number;
  deliveries: number;
}

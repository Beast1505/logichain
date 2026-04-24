import { TrendingUp, Package, Truck, ShieldAlert } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SHIPMENTS, INVENTORY, TRANSACTIONS, METRICS } from '../constants';
import { formatCurrency, formatNumber, cn } from '../lib/utils';

function StatCard({ icon: Icon, label, value, trend, color }: any) {
  return (
    <div className="glass-panel p-6 group hover:border-brand-primary/30 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-2 rounded-lg bg-white/5", color)}>
          <Icon size={24} />
        </div>
        <span className={cn("text-xs font-mono px-2 py-1 rounded bg-white/5", trend > 0 ? "text-brand-primary" : "text-red-400")}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      </div>
      <p className="text-zinc-500 text-sm font-medium mb-1 uppercase tracking-wider">{label}</p>
      <h3 className="text-3xl font-display font-bold">{value}</h3>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-display font-bold tracking-tight">System Overview</h1>
        <p className="text-zinc-500">Autonomous supply chain monitoring in real-time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Truck} 
          label="Active Shipments" 
          value={SHIPMENTS.length.toString()} 
          trend={12} 
          color="text-brand-primary" 
        />
        <StatCard 
          icon={Package} 
          label="Inventory Value" 
          value={formatCurrency(1243000)} 
          trend={-2.4} 
          color="text-blue-400" 
        />
        <StatCard 
          icon={TrendingUp} 
          label="Forecast Accuracy" 
          value="98.2%" 
          trend={0.5} 
          color="text-amber-400" 
        />
        <StatCard 
          icon={ShieldAlert} 
          label="Security Events" 
          value="0" 
          trend={0} 
          color="text-purple-400" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-display font-bold">Logistics Efficiency</h3>
            <div className="flex gap-4 text-xs font-mono uppercase">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-primary rounded-sm" />
                <span>Efficiency Index</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={METRICS}>
                <defs>
                  <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00FF41" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00FF41" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="#555" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#555" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(val) => `${val}%`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121212', borderRadius: '8px', border: '1px solid #222' }}
                  itemStyle={{ color: '#00FF41' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="efficiency" 
                  stroke="#00FF41" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorEff)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 flex flex-col">
          <h3 className="text-lg font-display font-bold mb-6">Recent Chain Events</h3>
          <div className="space-y-4 flex-1">
            {TRANSACTIONS.map((tx) => (
              <div key={tx.id} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-brand-primary/20 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-brand-primary uppercase tracking-tighter">
                    {tx.action.replace(/_/g, ' ')}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {new Date(tx.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-snug truncate">{tx.details}</p>
                <div className="mt-2 text-[10px] font-mono text-zinc-600 truncate uppercase tracking-widest">
                  Block: {tx.hash}
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-2 border border-border rounded-lg text-xs font-mono uppercase tracking-widest hover:bg-white/5 transition-colors text-zinc-400">
            View Full Ledger
          </button>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between bg-white/5">
          <h3 className="text-lg font-display font-bold">Critical Shipment Status</h3>
          <button className="text-xs font-mono text-brand-primary uppercase tracking-widest hover:underline">
            View Regional Map
          </button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-black/20 text-xs font-mono text-zinc-500 uppercase">
            <tr>
              <th className="px-6 py-4 font-normal">ID</th>
              <th className="px-6 py-4 font-normal">Route</th>
              <th className="px-6 py-4 font-normal">Status</th>
              <th className="px-6 py-4 font-normal">ETA</th>
              <th className="px-6 py-4 font-normal">Priority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {SHIPMENTS.map((shp) => (
              <tr key={shp.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4 font-mono text-sm text-brand-primary">{shp.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-zinc-400">{shp.origin}</span>
                    <Truck size={14} className="text-zinc-600" />
                    <span className="text-zinc-300">{shp.destination}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "text-[10px] font-mono px-2 py-1 rounded-full uppercase tracking-widest border",
                    shp.status === 'In Transit' ? "bg-brand-primary/10 text-brand-primary border-brand-primary/20" :
                    shp.status === 'Delayed' ? "bg-red-500/10 text-red-400 border-red-500/20" :
                    "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                  )}>
                    {shp.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-400">
                  {new Date(shp.eta).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-xs font-mono">
                  {shp.priority}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { AlertTriangle, CheckCircle2, TrendingDown, RefreshCcw, BarChart3 } from 'lucide-react';
import { INVENTORY } from '../constants';
import { cn, formatNumber } from '../lib/utils';

export default function InventoryManager() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-display font-bold tracking-tight">Inventory Optimization</h1>
          <p className="text-zinc-500">Predictive stock management and multi-node balancing.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-brand-primary text-black rounded-lg text-sm font-bold uppercase hover:bg-opacity-80 transition-all shadow-[0_0_20px_rgba(0,255,65,0.2)]">
          <RefreshCcw size={18} />
          Run Rebalance AI
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 bg-red-500/5 border-red-500/20">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-red-500" />
            <h3 className="font-display font-bold">Critical Shortage</h3>
          </div>
          <p className="text-4xl font-display font-bold mb-2">2 <span className="text-sm font-mono text-zinc-500 italic uppercase">SKUs</span></p>
          <p className="text-xs text-zinc-400">Immediate action required for Singapore Depot.</p>
        </div>
        <div className="glass-panel p-6 bg-brand-primary/5 border-brand-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="text-brand-primary" />
            <h3 className="font-display font-bold">Health Index</h3>
          </div>
          <p className="text-4xl font-display font-bold mb-2">94%</p>
          <p className="text-xs text-zinc-400">Inventory flow remains within optimal parameters.</p>
        </div>
        <div className="glass-panel p-6 bg-blue-500/5 border-blue-500/20">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-blue-500" />
            <h3 className="font-display font-bold">Holding Costs</h3>
          </div>
          <p className="text-4xl font-display font-bold mb-2">-12%</p>
          <p className="text-xs text-zinc-400">Reduced excess stock via predictive modeling.</p>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="p-6 border-b border-border bg-white/5 flex items-center justify-between">
          <h3 className="text-lg font-display font-bold uppercase tracking-wide">Stock Matrix</h3>
          <div className="flex gap-2">
             <input 
              type="text" 
              placeholder="Filter by SKU or Node..." 
              className="bg-brand-secondary border border-border px-4 py-1 rounded text-sm font-mono focus:outline-none focus:border-brand-primary text-zinc-300 w-64"
             />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-black/20 text-xs font-mono text-zinc-500 uppercase">
              <tr>
                <th className="px-6 py-4 font-normal">Component Item</th>
                <th className="px-6 py-4 font-normal">SKU</th>
                <th className="px-6 py-4 font-normal">Level</th>
                <th className="px-6 py-4 font-normal">Predicted Demand</th>
                <th className="px-6 py-4 font-normal">Status</th>
                <th className="px-6 py-4 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {INVENTORY.map((item) => (
                <tr key={item.id} className="hover:bg-brand-primary/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase">Automated Node 1A</p>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-zinc-400">{item.sku}</td>
                  <td className="px-6 py-4">
                    <div className="space-y-2 w-32">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                         <span className="text-zinc-500">{formatNumber(item.stockLevel)} Units</span>
                         <span className={cn(
                           item.stockLevel < item.reorderPoint ? "text-red-400" : "text-brand-primary"
                         )}>{Math.round((item.stockLevel/2000)*100)}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full transition-all duration-1000 ease-out",
                            item.status === 'Healthy' ? "bg-brand-primary" :
                            item.status === 'Low' ? "bg-amber-500" :
                            "bg-red-500"
                          )}
                          style={{ width: `${Math.min(100, (item.stockLevel/2000)*100)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <TrendingDown size={14} className="text-red-400" />
                       <span className="text-sm font-mono text-zinc-300">
                        {formatNumber(item.predictedDemand)} / Mon
                       </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-tighter border",
                      item.status === 'Healthy' ? "border-brand-primary/20 text-brand-primary bg-brand-primary/5" :
                      item.status === 'Low' ? "border-amber-500/20 text-amber-500 bg-amber-500/5" :
                      "border-red-500/20 text-red-500 bg-red-500/5"
                    )}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[10px] font-mono uppercase text-zinc-500 hover:text-brand-primary transition-colors tracking-widest border border-border px-3 py-1 rounded hover:border-brand-primary/30">
                      Restock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

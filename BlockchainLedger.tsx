import { ShieldCheck, History, Database, ArrowRight, ExternalLink } from 'lucide-react';
import { TRANSACTIONS } from '../constants';

export default function BlockchainLedger() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-display font-bold tracking-tight">Immutable Ledger</h1>
        <p className="text-zinc-500">Blockchain-backed transparency across multi-party supply chain nodes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="glass-panel p-6">
             <div className="flex items-center gap-3 mb-6">
                <Database className="text-brand-primary" size={24} />
                <h3 className="font-display font-bold">Node Status</h3>
             </div>
             <div className="space-y-4">
                {[
                  { name: 'SG-VAL-1', status: 'Online' },
                  { name: 'HK-HUB-9', status: 'Online' },
                  { name: 'TH-AIR-2', status: 'Syncing' },
                  { name: 'JP-DIST-C', status: 'Online' },
                ].map(node => (
                  <div key={node.name} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                    <span className="text-xs font-mono text-zinc-400 capitalize">{node.name}</span>
                    <div className="flex items-center gap-2">
                       <div className={`w-1.5 h-1.5 rounded-full ${node.status === 'Online' ? 'bg-brand-primary' : 'bg-amber-400'} animate-pulse`} />
                       <span className="text-[10px] font-mono uppercase text-zinc-500">{node.status}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="glass-panel p-6 border-l-4 border-l-brand-primary">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Network Hashrate</h4>
            <p className="text-2xl font-display font-bold tracking-tight">142.8 <span className="text-sm font-mono text-zinc-600">PH/s</span></p>
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="glass-panel overflow-hidden">
            <div className="p-6 border-b border-border bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <History className="text-brand-primary" />
                <h3 className="text-lg font-display font-bold uppercase tracking-wide">Audit Trail</h3>
              </div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Block Height: #412,982
              </div>
            </div>
            <div className="divide-y divide-border">
              {TRANSACTIONS.map((tx) => (
                <div key={tx.id} className="p-6 hover:bg-white/5 transition-all group relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="text-brand-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide group-hover:text-brand-primary transition-colors">
                          {tx.action.replace(/_/g, ' ')}
                        </h4>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Verified by {tx.actor}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600">
                      {new Date(tx.timestamp).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="pl-16">
                     <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                       {tx.details}
                     </p>
                     <div className="flex items-center justify-between bg-black/40 p-3 rounded-lg border border-white/5">
                        <div className="flex items-center gap-4 text-[10px] font-mono">
                           <span className="text-zinc-600 uppercase tracking-widest">Transaction Hash</span>
                           <span className="text-zinc-400 truncate w-64 uppercase">{tx.hash}</span>
                        </div>
                        <button className="text-brand-primary hover:text-white transition-colors">
                           <ExternalLink size={14} />
                        </button>
                     </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-black/20 text-center border-t border-border">
               <button className="text-[10px] font-mono uppercase text-zinc-500 hover:text-white transition-colors tracking-widest">
                 Load 50 More Transactions
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

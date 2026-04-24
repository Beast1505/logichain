import { Map as MapIcon, Navigation, Navigation2, Info, Wind, Thermometer } from 'lucide-react';
import { SHIPMENTS } from '../constants';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function ShipmentTracker() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-display font-bold tracking-tight">Active Tracking</h1>
          <p className="text-zinc-500">Live GPS telemetry from all fleet assets.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-mono uppercase bg-white/5 hover:bg-white/10 transition-colors">
            <Wind size={16} className="text-blue-400" />
            Weather Overlay
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 h-[600px] glass-panel relative overflow-hidden group">
          {/* Mock Map UI */}
          <div className="absolute inset-0 bg-[#1a1a1a] opacity-50 technical-grid scale-150 rotate-12" />
          
          {SHIPMENTS.map((shp, i) => (
            <motion.div
              key={shp.id}
              className="absolute"
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                left: `${30 + (i * 20)}%`,
                top: `${40 + (i * 10)}%`
              }}
              transition={{ delay: i * 0.2, type: 'spring' }}
            >
              <div className="group/marker relative cursor-pointer">
                <div className="w-4 h-4 bg-brand-primary rounded-full animate-ping absolute opacity-70" />
                <div className="w-4 h-4 bg-brand-primary rounded-full relative shadow-[0_0_10px_#00FF41]" />
                
                <div className="absolute top-1/2 left-full translate-x-4 -translate-y-1/2 w-48 opacity-0 group-hover/marker:opacity-100 transition-all pointer-events-none">
                  <div className="glass-panel p-3 bg-black/80 backdrop-blur-xl border-brand-primary/30">
                    <p className="text-[10px] font-mono text-brand-primary uppercase mb-1">{shp.id}</p>
                    <p className="text-xs font-bold mb-2">{shp.lastLocation.name}</p>
                    <div className="flex gap-4 text-[10px] font-mono text-zinc-400">
                      <div className="flex items-center gap-1">
                        <Navigation size={10} />
                        Ships: 12kn
                      </div>
                      {shp.temp && (
                        <div className="flex items-center gap-1">
                          <Thermometer size={10} />
                          {shp.temp}°C
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <div className="p-4 glass-panel bg-black/60 shadow-2xl space-y-4 min-w-[200px]">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-border pb-2">Map Legend</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_8px_#00FF41]" />
                  <span className="text-[10px] uppercase font-mono tracking-wider">In Transit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]" />
                  <span className="text-[10px] uppercase font-mono tracking-wider">Delayed / Alert</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
                  <span className="text-[10px] uppercase font-mono tracking-wider">Logistics Hub</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-6 left-6 p-4 glass-panel bg-black/60 shadow-2xl flex items-center gap-4">
             <div className="p-2 rounded bg-brand-primary/10">
                <Navigation2 size={24} className="text-brand-primary" />
             </div>
             <div>
               <p className="text-[10px] font-mono text-zinc-500 uppercase">Current Fleet Center</p>
               <p className="font-display font-medium text-sm">Malacca Strait / SEA-SEC-1</p>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-display font-bold">In-Transit Logs</h3>
          <div className="space-y-4 max-h-[520px] overflow-auto custom-scrollbar pr-2">
            {SHIPMENTS.map((shp) => (
              <div key={shp.id} className="glass-panel p-4 border-l-4 border-l-brand-primary hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-brand-primary">{shp.id}</span>
                  <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-white/5 uppercase">
                    {shp.loadType.split('/')[0]}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-2 h-2 rounded-full border border-zinc-500" />
                      <div className="w-[1px] h-4 bg-zinc-700" />
                      <div className="w-2 h-2 rounded-full bg-brand-primary" />
                    </div>
                    <div className="flex flex-col justify-between h-10 py-1">
                      <span className="text-xs text-zinc-500 truncate w-32">{shp.origin}</span>
                      <span className="text-xs font-medium truncate w-32">{shp.destination}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border mt-2 flex items-center justify-between text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors uppercase">
                    <span>ETA: {new Date(shp.eta).toLocaleTimeString()}</span>
                    <Info size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

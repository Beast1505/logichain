import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { BrainCircuit, TrendingUp, Compass, Target, Info } from 'lucide-react';
import { METRICS } from '../constants';
import { formatCurrency } from '../lib/utils';

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-display font-bold tracking-tight text-white flex items-center gap-3">
             <BrainCircuit className="text-brand-primary" />
             Predictive Analytics & TMS
          </h1>
          <p className="text-zinc-500">ML-driven route optimization and cost reduction strategies.</p>
        </div>
        <div className="p-1 bg-white/5 rounded-lg border border-border flex gap-1">
           <button className="px-4 py-1 text-xs font-mono uppercase bg-brand-primary text-black rounded font-bold transition-all">Historical</button>
           <button className="px-4 py-1 text-xs font-mono uppercase text-zinc-500 hover:text-white transition-all">AI Forecast</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel p-6 min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <div>
               <h3 className="text-lg font-display font-bold">Delivery Cost Projection</h3>
               <p className="text-xs text-zinc-500 mt-1">Operational expenditure across major shipping lanes.</p>
            </div>
            <TrendingUp size={24} className="text-zinc-700" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={METRICS}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="date" stroke="#555" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="#555" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#121212', borderRadius: '8px', border: '1px solid #222' }}
                />
                <Bar dataKey="cost" fill="#00FF41" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <div>
               <h3 className="text-lg font-display font-bold">Volume vs. Efficiency</h3>
               <p className="text-xs text-zinc-500 mt-1">AI-correlated throughput analysis.</p>
            </div>
            <Target size={24} className="text-zinc-700" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={METRICS}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="date" stroke="#555" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" stroke="#00FF41" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121212', borderRadius: '8px', border: '1px solid #222' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontFamily: 'JetBrains Mono' }} />
                <Line yAxisId="left" type="monotone" dataKey="efficiency" stroke="#00FF41" strokeWidth={3} dot={{ r: 4 }} />
                <Line yAxisId="right" type="monotone" dataKey="deliveries" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-3 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
                <Compass className="text-brand-primary" />
             </div>
             <h3 className="font-display font-bold">Route Optimization</h3>
           </div>
           <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
                 <span className="text-xs text-zinc-400">Average Fuel Saved</span>
                 <span className="text-sm font-mono text-brand-primary">18.4%</span>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
                 <span className="text-xs text-zinc-400">Route Deviations</span>
                 <span className="text-sm font-mono text-zinc-300">0.02%</span>
              </div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase leading-relaxed pt-2">
                 * TMS uses genetic algorithms to calculate shortest global delivery paths.
              </p>
           </div>
        </div>

        <div className="md:col-span-2 glass-panel p-6">
          <h3 className="text-lg font-display font-bold mb-6 flex items-center gap-2">
             AI Recommendations 
             <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-4 bg-brand-primary/5 border border-brand-primary/10 rounded-xl group hover:bg-brand-primary/10 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                   <Info size={14} className="text-brand-primary" />
                   <h4 className="text-xs font-bold uppercase tracking-wide">Congestion Alert</h4>
                </div>
                <p className="text-sm text-zinc-300 leading-snug">Redirect SHP-3342 to alternative route B-12 to avoid Malacca Strait maritime pile-up. ETA impact: -24m.</p>
                <button className="mt-4 text-[10px] font-mono uppercase bg-brand-primary text-black px-3 py-1.5 rounded font-bold">Apply Optimization</button>
             </div>
             <div className="p-4 bg-white/5 border border-white/5 rounded-xl group hover:border-white/10 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                   <TrendingUp size={14} className="text-blue-400" />
                   <h4 className="text-xs font-bold uppercase tracking-wide">Pre-emptive Stocking</h4>
                </div>
                <p className="text-sm text-zinc-300 leading-snug">High demand detected for SKU LI-X9-22 in Tokyo node. Suggested transfer: 400 units from Jakarta depot.</p>
                <button className="mt-4 text-[10px] font-mono uppercase border border-border text-zinc-400 px-3 py-1.5 rounded hover:white transition-colors hover:bg-white/5">Analyze Strategy</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

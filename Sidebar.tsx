import React from 'react';
import { LayoutDashboard, Truck, Package, ShieldCheck, BarChart3, Settings, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-all duration-200 group relative",
        active 
          ? "bg-brand-primary/10 text-brand-primary" 
          : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
      )}
    >
      <Icon size={20} className={cn(active ? "animate-pulse" : "group-hover:scale-110 transition-transform")} />
      <span className="font-medium text-sm">{label}</span>
      {active && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-primary rounded-l-full shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
      )}
    </button>
  );
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 h-screen border-right border-border flex flex-col p-4 bg-brand-secondary">
      <div className="flex items-center gap-3 px-4 py-6 mb-8 group">
        <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(0,255,65,0.2)]">
          <Truck className="text-black" size={24} />
        </div>
        <h1 className="text-xl font-display font-bold tracking-tight">
          LOGI<span className="text-brand-primary">CHAIN</span>
        </h1>
      </div>

      <div className="flex-1 space-y-2">
        <NavItem 
          icon={LayoutDashboard} 
          label="Dashboard" 
          active={activeTab === 'dashboard'} 
          onClick={() => setActiveTab('dashboard')}
        />
        <NavItem 
          icon={Truck} 
          label="Live Tracking" 
          active={activeTab === 'tracking'} 
          onClick={() => setActiveTab('tracking')}
        />
        <NavItem 
          icon={Package} 
          label="Inventory" 
          active={activeTab === 'inventory'} 
          onClick={() => setActiveTab('inventory')}
        />
        <NavItem 
          icon={ShieldCheck} 
          label="Blockchain Ledger" 
          active={activeTab === 'blockchain'} 
          onClick={() => setActiveTab('blockchain')}
        />
        <NavItem 
          icon={BarChart3} 
          label="Predictive AI" 
          active={activeTab === 'analytics'} 
          onClick={() => setActiveTab('analytics')}
        />
      </div>

      <div className="pt-8 border-t border-border space-y-2">
        <NavItem icon={Settings} label="Settings" onClick={() => {}} />
        <NavItem icon={LogOut} label="Emergency Shutdown" onClick={() => {}} />
      </div>
    </div>
  );
}

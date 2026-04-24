/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ShipmentTracker from './components/ShipmentTracker';
import InventoryManager from './components/InventoryManager';
import BlockchainLedger from './components/BlockchainLedger';
import Analytics from './components/Analytics';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'tracking': return <ShipmentTracker />;
      case 'inventory': return <InventoryManager />;
      case 'blockchain': return <BlockchainLedger />;
      case 'analytics': return <Analytics />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-brand-secondary text-white overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 relative overflow-auto custom-scrollbar technical-grid">
        <header className="sticky top-0 z-20 h-16 border-b border-border bg-brand-secondary/80 backdrop-blur-md flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
              Security Clearance: <span className="text-brand-primary">ADMIN-L9</span>
            </h2>
            <div className="h-4 w-[1px] bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_#00FF41]" />
              <span className="text-xs font-mono text-brand-primary uppercase">Network Stable</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span>Uptime: 2,412 Hours</span>
            <span>Region: ASIA-PAC-1</span>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}


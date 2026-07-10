import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PHONE_NUMBER } from '../data';

interface NavbarProps {
  activeTab: 'home' | 'paket' | 'alur' | 'garansi';
  onChangeTab: (tab: 'home' | 'paket' | 'alur' | 'garansi') => void;
}

export default function Navbar({ activeTab, onChangeTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: 'home' | 'paket' | 'alur' | 'garansi'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'paket', label: 'Paket Jasa' },
    { id: 'alur', label: 'Alur Kerja' },
    { id: 'garansi', label: 'Garansi & Komitmen' },
  ];

  const handleTabChange = (tabId: 'home' | 'paket' | 'alur' | 'garansi') => {
    onChangeTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      id="navbar"
      className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand Logo - Digihan */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleTabChange('home')}
            id="nav-logo"
          >
            <img src="/logo.png" alt="Logo Digihan" width="80" height="80" className="h-8 w-auto mr-2" />
            <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
              Digi<span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">han</span>
            </span>
          </div>

          {/* Nav Links Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                id={`nav-item-${item.id}`}
                className={`font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer pb-1 border-b-2 ${
                  activeTab === item.id 
                    ? "text-emerald-700 border-emerald-500 font-extrabold" 
                    : "text-slate-700 hover:text-slate-900 border-transparent hover:border-slate-350"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu utama"
              aria-expanded={mobileMenuOpen}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-2 shadow-inner"
          id="mobile-menu-panel"
        >
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg font-sans text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === item.id 
                  ? "bg-emerald-50 text-emerald-700" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

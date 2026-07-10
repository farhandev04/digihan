import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Workflow from './components/Workflow';
import Guarantees from './components/Guarantees';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import { ProjectPackage } from './types';
import { PHONE_NUMBER } from './data';

type ActiveTab = 'home' | 'paket' | 'alur' | 'garansi';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedPkg, setSelectedPkg] = useState<ProjectPackage | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenDemo = (pkg: ProjectPackage) => {
    if (pkg.demoUrl) {
      window.open(pkg.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCloseDemo = () => {
    setIsDemoOpen(false);
    setSelectedPkg(null);
  };

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500/10 selection:text-emerald-800 antialiased overflow-x-hidden flex flex-col justify-between">
      
      <div>
        {/* 1. Sticky Light Mode Navbar */}
        <Navbar activeTab={activeTab} onChangeTab={setActiveTab} />

        {/* 2. Interactive DOM-based Multi-Page Content Switching with smooth transitions */}
        <main className="flex-1 w-full relative">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div
                key="home-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Hero onChangeTab={setActiveTab} />
                <BentoGrid onOpenDemo={handleOpenDemo} />
                <Workflow />
                <Guarantees />
              </motion.div>
            )}

            {activeTab === 'paket' && (
              <motion.div
                key="paket-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <BentoGrid onOpenDemo={handleOpenDemo} />
              </motion.div>
            )}

            {activeTab === 'alur' && (
              <motion.div
                key="alur-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Workflow />
              </motion.div>
            )}

            {activeTab === 'garansi' && (
              <motion.div
                key="garansi-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Guarantees />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* 3. Professional Persistent Footer */}
      <Footer onChangeTab={setActiveTab} />

      {/* 4. High Fidelity Interactive Simulated Demo Modal */}
      <DemoModal 
        pkg={selectedPkg}
        isOpen={isDemoOpen}
        onClose={handleCloseDemo}
      />

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${PHONE_NUMBER}?text=Halo%20Digihan,%20saya%20mau%20konsultasi%20mengenai%20pembuatan%20website`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp"
        aria-label="Hubungi kami di WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-600/40 hover:bg-emerald-500 hover:shadow-emerald-600/60 active:scale-95 transition-all cursor-pointer border border-emerald-500/30"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

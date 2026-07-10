import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Laptop, Smartphone, Lock, RotateCw, CheckCircle, 
  ShoppingCart, Calendar, ChevronRight, FileDown, Mail, Phone, MapPin
} from 'lucide-react';
import { ProjectPackage } from '../types';
import { PHONE_NUMBER } from '../data';

interface DemoModalProps {
  pkg: ProjectPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ pkg, isOpen, onClose }: DemoModalProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [bookingName, setBookingName] = useState('');
  const [bookingService, setBookingService] = useState('Pembersihan Karang Gigi (Scaling)');

  useEffect(() => {
    // Reset state on package change
    setFormSubmitted(false);
    setSelectedProduct(null);
    setBookingName('');
  }, [pkg]);

  if (!pkg) return null;

  const content = pkg.demoContent;

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  const handleProductSelect = (productName: string) => {
    setSelectedProduct(productName);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 3500);
  };

  // Build WA direct message for the specific layout package
  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  const encodedText = encodeURIComponent(
    `Halo Digihan, saya baru saja mencoba live demo untuk *${pkg.name}* (${pkg.demoUrl}) dan ingin menanyakan kelanjutan paket seharga *${formatRupiah(pkg.pricePromo)}* ini.`
  );
  const waLink = `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;

  // Get Theme Accent Classes
  const getThemeClasses = () => {
    switch (content.colorTheme) {
      case 'amber':
        return {
          bg: 'bg-amber-500',
          hoverBg: 'hover:bg-amber-600',
          text: 'text-amber-600',
          border: 'border-amber-200',
          accent: 'amber',
          gradient: 'from-amber-400 to-amber-600',
          glow: 'shadow-amber-500/10'
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-500',
          hoverBg: 'hover:bg-emerald-600',
          text: 'text-emerald-600',
          border: 'border-emerald-200',
          accent: 'emerald',
          gradient: 'from-emerald-400 to-emerald-600',
          glow: 'shadow-emerald-500/10'
        };
      case 'cyan':
      default:
        return {
          bg: 'bg-cyan-500',
          hoverBg: 'hover:bg-cyan-600',
          text: 'text-cyan-600',
          border: 'border-cyan-200',
          accent: 'cyan',
          gradient: 'from-cyan-400 to-cyan-600',
          glow: 'shadow-cyan-500/10'
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          
          {/* Main Modal container - styled as a modern light-themed desktop browser mock */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="w-full max-w-6xl h-[90vh] bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* 1. Modal / Browser Header Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200/80 gap-4">
              {/* macOS Dots & Demo Info */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-1.5 shrink-0">
                  <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" title="Close" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80 cursor-not-allowed" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80 cursor-not-allowed" />
                </div>
                
                <div className="h-4 w-[1px] bg-slate-200 shrink-0" />
                
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 tracking-wide">
                    Live Demo Simulator
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono font-medium">
                    Template: {pkg.name}
                  </span>
                </div>
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-md w-full">
                <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-500 font-mono w-full justify-center">
                  <Lock className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate select-none font-medium">{pkg.demoUrl}</span>
                  <RotateCw className="h-3 w-3 text-slate-400 shrink-0 ml-auto hover:text-slate-600 cursor-pointer" />
                </div>
              </div>

              {/* Size Toggles & Close Action */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                {/* Resolution switch buttons */}
                <div className="flex items-center rounded-lg bg-slate-100 p-0.5 border border-slate-200 shadow-inner">
                  <button 
                    onClick={() => setViewMode('desktop')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      viewMode === 'desktop' 
                        ? 'bg-white text-emerald-600 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Laptop className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Desktop</span>
                  </button>
                  <button 
                    onClick={() => setViewMode('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      viewMode === 'mobile' 
                        ? 'bg-white text-emerald-600 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Mobile</span>
                  </button>
                </div>

                <div className="h-4 w-[1px] bg-slate-200 hidden sm:block" />

                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* 2. Simulator Body Canvas (Interactive Website Simulation) */}
            <div className="flex-1 bg-slate-100 overflow-hidden flex justify-center items-stretch relative">
              
              {/* Floating Top Warning inside canvas */}
              <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center gap-4 rounded-xl bg-white/90 border border-slate-200 px-4 py-2.5 backdrop-blur-md shadow-sm">
                <p className="text-[11px] sm:text-xs text-slate-500 leading-tight font-medium">
                  💡 <span className="text-slate-800 font-bold">Interaktif!</span> Ini adalah simulasi visual. Klik tombol-tombol di dalam web untuk mencoba respon responsifnya.
                </p>
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all"
                >
                  Pesan Web Seperti Ini
                  <ChevronRight className="h-3 w-3" />
                </a>
              </div>

              {/* The Inner simulated webpage frame wrapper */}
              <div className="flex-1 flex justify-center overflow-y-auto pt-16 pb-12 px-4">
                <motion.div 
                  layout
                  transition={{ type: 'spring', damping: 25, stiffness: 150 }}
                  className={`bg-white rounded-2xl border border-slate-200 text-slate-800 flex flex-col h-fit shadow-md ${
                    viewMode === 'desktop' ? 'w-full max-w-5xl' : 'w-full max-w-[375px]'
                  }`}
                >
                  {/* SIMULATED WEB: Navbar */}
                  <div className="border-b border-slate-100 bg-white/95 px-6 py-4 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm">
                    <span className="text-base font-bold font-display tracking-tight text-slate-900 flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${theme.bg}`} />
                      {content.title.split(" ")[0]} <span className={theme.text}>{content.title.split(" ").slice(1).join(" ")}</span>
                    </span>
                    <div className="hidden md:flex items-center gap-5 text-xs text-slate-500 font-bold">
                      <span>Beranda</span>
                      <span>Layanan</span>
                      <span>Katalog</span>
                      <span>Kontak</span>
                    </div>
                  </div>

                  {/* SIMULATED WEB: Hero Section */}
                  <div className="px-6 py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 text-center relative overflow-hidden">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full ${theme.bg}/5 blur-[65px]`} />
                    <div className="max-w-2xl mx-auto relative z-10">
                      <h1 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-slate-900 mb-4">
                        {content.title}
                      </h1>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6 max-w-lg mx-auto">
                        {content.subtitle}
                      </p>
                      
                      {/* Responsive Action based on package */}
                      {pkg.id === 'umkm' && (
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                          <button 
                            onClick={() => handleProductSelect('Hubungi Pemilik (WhatsApp)')}
                            className={`px-4 py-2 rounded-lg ${theme.bg} ${theme.hoverBg} text-xs font-bold text-white transition-colors`}
                          >
                            Hubungi Pemilik (WA)
                          </button>
                        </div>
                      )}
                      
                      {pkg.id === 'bisnis' && (
                        <div className="flex items-center justify-center">
                          <a 
                            href="#sim-booking"
                            className={`px-4 py-2 rounded-lg ${theme.bg} ${theme.hoverBg} text-xs font-bold text-white transition-colors`}
                          >
                            Daftar Reservasi Online
                          </a>
                        </div>
                      )}

                      {pkg.id === 'company' && (
                        <div className="flex items-center justify-center gap-3">
                          <button 
                            onClick={() => handleProductSelect('Download PDF Brochure')}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-700 transition-colors"
                          >
                            <FileDown className="h-3.5 w-3.5" />
                            Unduh Dokumen Profil
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SIMULATED WEB: Stats / Counters */}
                  {content.mockStats && (
                    <div className="grid grid-cols-3 gap-2 px-6 py-6 bg-slate-50 border-b border-slate-100 text-center">
                      {content.mockStats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className={`text-base sm:text-lg font-extrabold ${theme.text}`}>{stat.value}</span>
                          <span className="text-[10px] text-slate-400 font-bold tracking-wide uppercase">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* SIMULATED WEB: Package Features / Product Cards Grid */}
                  <div className="px-6 py-10 bg-white">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center mb-6 font-mono">
                      {pkg.id === 'umkm' ? '🛒 Menu Katalog Produk Terlaris' : pkg.id === 'bisnis' ? '🩺 Layanan Medis Unggulan' : '💼 Solusi & Jasa Korporasi'}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {content.features.map((item, iIdx) => (
                        <div 
                          key={iIdx} 
                          className="p-4 rounded-xl bg-slate-50 border border-slate-150 flex justify-between items-center hover:border-slate-300 transition-colors group/item"
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-800">{item.split(" - ")[0]}</span>
                            {item.includes(" - ") && (
                              <span className={`text-[11px] font-mono font-bold mt-1 ${theme.text}`}>{item.split(" - ")[1]}</span>
                            )}
                          </div>
                          
                          {/* Simulated CTA actions per item */}
                          {pkg.id === 'umkm' && (
                            <button 
                              onClick={() => handleProductSelect(item.split(" - ")[0])}
                              className={`p-1.5 rounded-lg bg-slate-200/60 text-slate-600 hover:text-white hover:${theme.bg} transition-all`}
                            >
                              <ShoppingCart className="h-3.5 w-3.5" />
                            </button>
                          )}

                          {pkg.id === 'bisnis' && (
                            <span className="text-[10px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-150 px-2 py-0.5 rounded-full shrink-0">
                              Dokter Ahli
                            </span>
                          )}

                          {pkg.id === 'company' && (
                            <ChevronRight className={`h-4 w-4 text-slate-400 transition-transform group-hover/item:translate-x-0.5 ${theme.text}`} />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Notification trigger indicator */}
                    {selectedProduct && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center flex items-center justify-center gap-1.5 font-medium shadow-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-600 animate-bounce" />
                        <span>Simulasi: Menghubungi pemilik untuk memesan <strong>{selectedProduct}</strong> via WhatsApp!</span>
                      </motion.div>
                    )}
                  </div>

                  {/* SIMULATED WEB: Interactive Form Booking (Special for Paket Bisnis) */}
                  {pkg.id === 'bisnis' && (
                    <div id="sim-booking" className="px-6 py-10 bg-slate-50 border-t border-slate-100">
                      <div className="max-w-md mx-auto">
                        <div className="text-center mb-6">
                          <h4 className="text-sm font-bold text-slate-900 flex items-center justify-center gap-1.5">
                            <Calendar className="h-4 w-4 text-cyan-600" />
                            Formulir Booking Online Terintegrasi
                          </h4>
                          <p className="text-[11px] text-slate-400 font-medium mt-1">Uji coba isi form di bawah ini:</p>
                        </div>

                        <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                          <div>
                            <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Nama Pasien</label>
                            <input 
                              type="text" 
                              required
                              value={bookingName}
                              onChange={(e) => setBookingName(e.target.value)}
                              placeholder="Masukkan nama Anda..."
                              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-cyan-500 font-medium shadow-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Layanan Medis</label>
                            <select 
                              value={bookingService}
                              onChange={(e) => setBookingService(e.target.value)}
                              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-cyan-500 font-medium shadow-sm"
                            >
                              <option>Pembersihan Karang Gigi (Scaling)</option>
                              <option>Tambal Gigi Komposit Estetik</option>
                              <option>Bleaching Pemutihan Gigi</option>
                              <option>Konsultasi Gigi Umum</option>
                            </select>
                          </div>

                          <button 
                            type="submit"
                            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs py-2 rounded-lg transition-colors cursor-pointer shadow-md shadow-cyan-500/10"
                          >
                            Kirim Reservasi Sekarang
                          </button>
                        </form>

                        {formSubmitted && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center flex flex-col items-center gap-1 shadow-sm"
                          >
                            <CheckCircle className="h-5 w-5 text-emerald-600 animate-bounce" />
                            <span className="font-bold">Booking Terkirim!</span>
                            <span className="text-[10px] text-slate-500 leading-relaxed font-medium">Notifikasi detail berisi nama <strong className="text-slate-900">{bookingName}</strong> dan layanan <strong className="text-slate-900">{bookingService}</strong> otomatis akan diarahkan ke admin WhatsApp Anda.</span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* SIMULATED WEB: Footer Contact details */}
                  <div className="px-6 py-8 bg-slate-50 border-t border-slate-100 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
                      <div className="flex flex-col gap-1 items-center sm:items-start">
                        <span className="font-bold text-slate-500">{content.title} © 2026</span>
                        <span>Desain Premium & Handal didukung Digihan</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-end">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Jakarta, Indonesia</span>
                        <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> support@client.id</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>
            </div>

            {/* 3. Modal Controls: Footer summary with CTA */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">Menyukai contoh fungsionalitas di atas?</span>
                <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                  Dapatkan website serupa, disesuaikan penuh dengan merk bisnis Anda sendiri!
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-center">
                <button 
                  onClick={onClose}
                  className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  Kembali ke Portfolio
                </button>
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Pesan Paket Ini Sekarang
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

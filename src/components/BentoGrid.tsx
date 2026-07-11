import { motion } from 'motion/react';
import { Check, ArrowUpRight, MessageCircle, Sparkles, AlertCircle } from 'lucide-react';
import { ProjectPackage } from '../types';
import { PROJECT_PACKAGES, PHONE_NUMBER } from '../data';

interface BentoGridProps {
  onOpenDemo: (pkg: ProjectPackage) => void;
}

export default function BentoGrid({ onOpenDemo }: BentoGridProps) {
  
  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="paket-jasa" className="relative bg-white px-4 py-24 sm:px-6 lg:px-8">
      
      {/* Background glowing decorations for Light Mode */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-emerald-100/50 blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-100/50 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-700 mb-4"
          >
            <Sparkles className="h-3 w-3 text-emerald-600 animate-pulse" />
            <span>Pilihan Paket & Transparansi Harga</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
          >
            Investasi Website Terbaik
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed"
          >
            Pilih paket pembuatan website yang paling cocok untuk mempercepat pertumbuhan bisnis Anda. Tanpa tambahan biaya tersembunyi.
          </motion.p>
        </div>

        {/* Bento Grid Containers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {PROJECT_PACKAGES.map((pkg, idx) => {
            const isPopular = pkg.isPopular;
            
            // Build direct WhatsApp message
            let rawText = "";
            if (pkg.id === "umkm") {
              rawText = "Halo Digihan, saya tertarik pesan Paket Website UMKM yang harga 750rb";
            } else if (pkg.id === "bisnis") {
              rawText = "Halo Digihan, saya tertarik pesan Paket Website Bisnis yang harga 1,000Jt";
            } else if (pkg.id === "company") {
              rawText = "Halo Digihan, saya tertarik pesan Paket Company Profile yang harga 2,500jt";
            } else {
              rawText = `Halo Digihan, saya tertarik memesan *${pkg.name}* seharga *${formatRupiah(pkg.pricePromo)}*. Bagaimanakah alur pengerjaan dan data apa saja yang perlu saya siapkan?`;
            }
            const encodedText = encodeURIComponent(rawText);
            const waLink = `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isPopular 
                    ? "border-emerald-500 bg-slate-100 shadow-md shadow-emerald-500/5" 
                    : "border-slate-200 bg-slate-100/70 hover:border-cyan-500/50 hover:shadow-md"
                }`}
              >
                {/* Popular Premium Ribbon Indicator */}
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 z-20" />
                )}

                {/* Top Image Container with zoom-in scale-105 effect on hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 border-b border-slate-200">
                  <img 
                    src={pkg.imageUrl} 
                    alt={pkg.name} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle vignette/overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent" />
                  
                  {/* Target client badge */}
                  <div className="absolute bottom-3 left-4 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/80 px-3 py-1 text-[10px] font-bold text-emerald-700 tracking-wider uppercase font-mono shadow-sm">
                    {pkg.target}
                  </div>
                </div>

                {/* Card Main Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Title and Discount Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {pkg.name}
                      </h3>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase border ${
                        isPopular 
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                          : "bg-slate-200 text-slate-600 border-slate-300"
                      }`}>
                        {pkg.discountBadge}
                      </span>
                    </div>

                     {/* Pricing */}
                    <div className="mt-4 mb-6 flex flex-col">
                      {pkg.priceOriginal && (
                        <span className="font-sans text-xs text-slate-600 line-through">
                          Harga Asli: {formatRupiah(pkg.priceOriginal)}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="font-display text-3xl font-extrabold text-slate-900">
                          {formatRupiah(pkg.pricePromo)}
                        </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-slate-200 mb-6" />

                    {/* Checklist features */}
                    <p className="font-mono text-[10px] font-extrabold text-slate-600 uppercase tracking-widest mb-4">
                      Fitur Unggulan Paket:
                    </p>

                    <ul className="space-y-3">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-slate-600 text-xs sm:text-sm">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 p-0.5 text-emerald-600 border border-emerald-100">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="leading-tight font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons (Footer) */}
                <div className="p-6 bg-slate-200/50 border-t border-slate-200/80 flex flex-col gap-3">
                  
                  {/* Live Demo Trigger */}
                  <button
                    onClick={() => onOpenDemo(pkg)}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-cyan-200 bg-white py-2.5 font-sans text-xs font-bold text-cyan-700 shadow-sm transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 active:scale-98 group-hover:scale-[1.01] cursor-pointer"
                  >
                    <span>Lihat Live Demo</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  {/* Order WhatsApp Button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-2.5 font-sans text-xs font-extrabold text-white shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 active:scale-98 hover:scale-[1.01] cursor-pointer"
                  >
                    <MessageCircle className="h-3.5 w-3.5 animate-bounce" style={{ animationDuration: '2.5s' }} />
                    <span>Pesan Sekarang</span>
                  </a>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

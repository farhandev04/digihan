import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Shield, Sparkles, Globe, Cpu } from 'lucide-react';
import { PHONE_NUMBER } from '../data';

interface HeroProps {
  onChangeTab: (tab: 'home' | 'paket' | 'alur' | 'garansi') => void;
}

export default function Hero({ onChangeTab }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative flex min-h-[82vh] flex-col items-center justify-center overflow-hidden px-4 pt-10 pb-20 sm:py-20 text-center sm:px-6 lg:px-8 bg-slate-50"
    >
      
      {/* Background floating abstract elements */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[240px] w-[240px] md:h-[300px] md:w-[300px] rounded-full bg-emerald-200/40 blur-[70px] md:blur-[90px] md:animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-cyan-200/30 blur-[80px] md:blur-[100px] md:animate-float-delay" />
      <div className="absolute top-1/3 right-12 -z-10 h-[140px] w-[140px] md:h-[180px] md:w-[180px] rounded-full bg-indigo-100/40 blur-[50px] md:blur-[60px] md:animate-float-slow" />

      {/* Decorative floating dots with border - shifted to edges and lower z-index */}
      <div className="absolute top-16 left-3 sm:left-10 md:left-24 -z-10 h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-emerald-200/60 bg-white/50 shadow-sm flex items-center justify-center md:animate-float-slow">
        <Sparkles className="h-5 w-5 text-emerald-500" />
      </div>
      <div className="absolute bottom-16 right-3 sm:right-10 md:right-32 -z-10 h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-cyan-200/60 bg-white/50 shadow-sm flex items-center justify-center md:animate-float-delay">
        <Cpu className="h-6 w-6 text-cyan-500 animate-pulse" />
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Sparkle Intro Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm mb-5 sm:mb-8"
          id="hero-badge"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse text-emerald-600" />
          <span>Jasa Web Dev Jujur, Terbuka & Profesional</span>
        </motion.div>

        {/* Catchy Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          id="hero-headline"
          className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
        >
          Bikin Bisnis & UMKM Kamu <span className="whitespace-nowrap">Go-Digital</span> Bersama{" "}
          <span className="relative inline-block mt-2 sm:mt-0">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Digihan
            </span>
            <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-40 blur-[1px]" />
          </span>
        </motion.h1>

        {/* Explanatory Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          id="hero-subheadline"
          className="mx-auto mt-8 max-w-2xl font-sans text-base text-slate-600 sm:text-lg md:text-xl leading-relaxed"
        >
          Jasa pembuatan website profesional, transparan, jujur, dan ramah kantong. 
          <span className="text-slate-900 font-bold block sm:inline"> Tanpa biaya tersembunyi</span> dan lunas langsung serah terima penuh.
        </motion.p>

        {/* CTA Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          {/* Action to switch to Packages */}
          <button 
            onClick={() => onChangeTab('paket')}
            id="hero-btn-packages"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-8 py-4 font-sans text-sm font-bold text-white shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95 duration-250 cursor-pointer"
          >
            <span>Lihat Paket Harga</span>
            <ArrowRight className="h-4 w-4 text-emerald-100 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* WhatsApp Direct Action Button */}
          <a 
            href={`https://wa.me/${PHONE_NUMBER}?text=Halo%20Digihan,%20saya%20mau%20konsultasi%20mengenai%20pembuatan%20website`}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-btn-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-8 py-4 font-sans text-sm font-bold text-slate-700 transition-all active:scale-95 duration-250 cursor-pointer shadow-sm"
          >
            <MessageSquare className="h-4.5 w-4.5 text-emerald-500" />
            <span>Konsultasi Gratis via WhatsApp</span>
          </a>
        </motion.div>

        {/* Micro Credibility Ribbons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-y-4 gap-x-8 md:flex md:items-center md:justify-center md:gap-12 border-t border-slate-200 pt-8 text-slate-500 text-xs font-semibold uppercase tracking-wider"
        >
          <div className="flex items-center justify-center gap-2">
            <Globe className="h-4 w-4 text-emerald-600 animate-spin" style={{ animationDuration: '8s' }} />
            <span>100% Responsif Mobile</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-4 w-4 text-cyan-600" />
            <span>Garansi 1 Bulan Pasca-Online</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

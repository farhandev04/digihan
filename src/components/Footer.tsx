import { Sparkles, ArrowUp, Send, Heart, Mail, MessageCircle, MapPin } from 'lucide-react';

interface FooterProps {
  onChangeTab: (tab: 'home' | 'paket' | 'alur' | 'garansi') => void;
}

export default function Footer({ onChangeTab }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 items-start">
          
          {/* Brand/Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center cursor-pointer group" onClick={() => { onChangeTab('home'); handleScrollToTop(); }}>
              <img src="/logo.png" alt="Logo Digihan" width="32" height="32" loading="lazy" className="h-8 w-auto mr-2" />
              <span className="font-display text-lg font-bold tracking-tight text-slate-900">
                Digi<span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">han</span>
              </span>
            </div>
            <p className="text-xs text-slate-700 max-w-sm leading-relaxed font-medium">
              Mitra digital terpercaya untuk mewujudkan website premium, handal, berkecepatan tinggi, dan 100% responsif demi kemajuan UMKM dan bisnis Anda di Indonesia.
            </p>
          </div>

          {/* Sitemaps / Navigation */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-extrabold text-slate-900 tracking-wider uppercase font-mono text-[10px]">Navigasi Utama</h4>
            <div className="flex flex-col gap-2.5 text-slate-600 font-medium">
              <button onClick={() => { onChangeTab('home'); handleScrollToTop(); }} className="text-left hover:text-emerald-600 transition-colors cursor-pointer">Beranda</button>
              <button onClick={() => { onChangeTab('paket'); handleScrollToTop(); }} className="text-left hover:text-emerald-600 transition-colors cursor-pointer">Pilihan Paket</button>
              <button onClick={() => { onChangeTab('alur'); handleScrollToTop(); }} className="text-left hover:text-emerald-600 transition-colors cursor-pointer">Alur Kerja</button>
              <button onClick={() => { onChangeTab('garansi'); handleScrollToTop(); }} className="text-left hover:text-emerald-600 transition-colors cursor-pointer">Komitmen & Garansi</button>
            </div>
          </div>

          {/* Socials & Contacts */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-extrabold text-slate-900 tracking-wider uppercase font-mono text-[10px]">Hubungi Kami</h4>
            <div className="flex flex-col gap-3 text-slate-600 font-medium">
              <a href="mailto:farhandev04@gmail.com" className="flex items-center gap-2 hover:text-emerald-600 transition-colors"><Mail className="h-4 w-4 text-emerald-600" /> farhandev04@gmail.com</a>
              <a href="https://wa.me/6282318736775?text=Halo%20Digihan,%20saya%20mau%20tanya-tanya%20mengenai%20jasa%20pembuatan%20website" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-600 transition-colors"><MessageCircle className="h-4 w-4 text-emerald-600" /> +62 823-1873-6775 (WhatsApp)</a>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-600" /> Jakarta, Indonesia</span>
            </div>

            {/* Newsletter input visual */}
            <div className="pt-2 flex max-w-xs rounded-xl bg-white border border-slate-200 p-1 shadow-sm">
              <input 
                type="email" 
                placeholder="Berlangganan update..."
                className="w-full bg-transparent px-3 py-1.5 text-xs text-slate-800 focus:outline-none placeholder-slate-400 font-medium"
              />
              <button 
                type="button"
                aria-label="Kirim berlangganan newsletter"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Base Copy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-700 flex items-center gap-1.5 font-medium">
            <span>Digihan © 2026. Made with</span>
            <span>in Jakarta, Indonesia.</span>
          </p>

          {/* Scroll to Top Circle Button */}
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll ke atas"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 hover:border-emerald-500/40 hover:text-emerald-600 text-slate-600 transition-all cursor-pointer shadow-sm active:scale-90"
            title="Scroll ke Atas"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

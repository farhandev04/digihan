import { motion } from 'motion/react';
import { ShieldCheck, Key, Star } from 'lucide-react';
import { GUARANTEES } from '../data';

export default function Guarantees() {
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-emerald-600 animate-pulse" />;
      case 'Key':
      default:
        return <Key className="h-6 w-6 text-cyan-600" />;
    }
  };

  return (
    <section id="garansi-komitmen" className="relative bg-emerald-50 px-4 py-24 sm:px-6 lg:px-8">
      
      {/* Dynamic glowing spot for Light Mode */}
      <div className="absolute top-1/2 left-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-100/40 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs font-extrabold text-emerald-900 mb-4 animate-pulse">
            <Star className="h-3.5 w-3.5 text-emerald-700" />
            <span>Komitmen & Layanan Purnajual</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Layanan Terbaik, Tanpa Rasa Khawatir
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Digihan menjamin kenyamanan Anda dengan memberikan garansi fungsionalitas serta hak kepemilikan mutlak atas proyek website Anda.
          </p>
        </div>

        {/* Guarantees Box Row - Balanced 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {GUARANTEES.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-emerald-100 bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Badge row */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full uppercase shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display text-lg font-extrabold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="h-1.5 w-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-8 animate-pulse" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { HelpCircle, Cpu, Eye, Rocket, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data';

export default function Workflow() {
  
  // Dynamic icon selector helper
  const getIcon = (name: string) => {
    switch (name) {
      case 'HelpCircle':
        return <HelpCircle className="h-6 w-6 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="h-6 w-6 text-cyan-600 animate-pulse" />;
      case 'Eye':
        return <Eye className="h-6 w-6 text-amber-600" />;
      case 'Rocket':
      default:
        return <Rocket className="h-6 w-6 text-indigo-650 animate-bounce" style={{ animationDuration: '3s' }} />;
    }
  };

  return (
    <section id="alur-kerja" className="relative bg-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
      
      {/* Glow ambient background spot */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/40 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 border border-indigo-200 px-3.5 py-1 text-xs font-extrabold text-indigo-900 mb-4 animate-pulse">
            <span>Alur Kerja Digihan</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            4 Langkah Mudah Kerja Sama
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Kami menjunjung tinggi kejujuran dan keterbukaan. Berikut adalah tahapan pengerjaan proyek dari awal diskusi hingga website Anda resmi online.
          </p>
        </div>

        {/* Workflow Timeline Cards with clean white backgrounds for premium light mode */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch relative">
          {WORKFLOW_STEPS.map((step, idx) => {
            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl border border-indigo-100 bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step indicator tag */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-200/80">
                    {getIcon(step.iconName)}
                  </div>
                  <span className="font-mono text-[10px] font-bold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-150">
                    LANGKAH 0{step.stepNumber}
                  </span>
                </div>

                {/* Info Text */}
                <div className="flex-1">
                  <h3 className="font-display text-base font-extrabold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Visual Connector Line for Desktop */}
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="h-4 w-4 animate-pulse" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

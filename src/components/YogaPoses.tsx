import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { YOGA_POSES } from '../constants';

export default function YogaPoses() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-orange-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">{t('poses.title')}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('poses.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(t('poses.items', { returnObjects: true }) as any[]).map((pose, i) => {
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-900/5 border border-orange-100 group transition-all duration-500"
              >
                <div className="h-72 relative overflow-hidden">
                  <img 
                    src={YOGA_POSES[i].image} 
                    alt={pose.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-500" />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-primary shadow-lg uppercase tracking-widest border border-orange-100">
                    {YOGA_POSES[i].sanskritName}
                  </div>
                </div>
                
                <div className="p-10">
                  <h3 className="text-3xl font-serif mb-6 group-hover:text-primary transition-colors">{pose.name}</h3>
                  <div className="space-y-4 mb-8">
                    {(pose.benefits as string[]).map((benefit, j) => (
                      <motion.div 
                        key={j} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (i * 0.1) + (j * 0.1) }}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center">
                          <CheckCircle2 size={12} className="text-primary" />
                        </div>
                        <span className="leading-tight">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="pt-8 border-t border-orange-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Healing Path</span>
                    </div>
                    <a 
                      href={YOGA_POSES[i].videoUrl || `https://www.youtube.com/results?search_query=${pose.name}+yoga+pose`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-secondary transition-colors flex items-center gap-2 text-sm font-bold group/btn"
                    >
                      Watch Tutorial
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

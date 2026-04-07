import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Info } from 'lucide-react';
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
            const Icon = YOGA_POSES[i].icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100 group"
              >
                <div className="h-64 relative overflow-hidden flex items-center justify-center bg-orange-100/50">
                  <Icon size={80} className="text-primary opacity-80 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {YOGA_POSES[i].sanskritName}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-4">{pose.name}</h3>
                  <div className="space-y-3 mb-6">
                    {(pose.benefits as string[]).map((benefit, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-orange-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Therapeutic</span>
                    <a href={YOGA_POSES[i].videoUrl || `https://www.youtube.com/results?search_query=${pose.name}+yoga+pose`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors flex items-center gap-1 text-sm font-bold">
                      Watch Video
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

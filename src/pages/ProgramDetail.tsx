import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Calendar, Users, GraduationCap, ArrowLeft, Clock, MapPin, Star } from 'lucide-react';
import { IMAGES, CONTACT } from '../constants';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

const programsData: Record<string, any> = {
  'yoga-therapy': {
    title: "Integrated Yoga Therapy Training",
    subtitle: "A comprehensive 11-day program combining Yoga, Ayurveda, and Healing Science.",
    image: IMAGES.yoga1,
    duration: "11 Days",
    price: "₹38,000",
    earlyBird: "₹34,000",
    overview: "This program is designed to bridge the gap between ancient healing wisdom and modern therapeutic needs. You will learn to diagnose the root cause of ailments and apply integrated healing methods.",
    highlights: ["Yoga + Ayurveda", "Healing Science", "Root Cause Diagnosis", "Practical Therapy"],
    curriculum: [
      { day: "Day 1-2", title: "Foundations of Yoga Therapy", content: "Introduction to healing science, history of yoga therapy, and basic anatomical principles." },
      { day: "Day 3-4", title: "Ayurvedic Diagnosis", content: "Learning Dosha analysis, face reading, and root cause identification through ancient methods." },
      { day: "Day 5-6", title: "Marma & Acupressure", content: "Practical training in energy points, pressure techniques, and immediate relief methods." },
      { day: "Day 7-8", title: "Disease-Specific Protocols", content: "Designing therapy plans for diabetes, hypertension, and chronic pain management." },
      { day: "Day 9-10", title: "Practical Application", content: "Live case studies, student-led therapy sessions, and refinement of techniques." },
      { day: "Day 11", title: "Certification & Closing", content: "Final assessment, certification ceremony, and integration of learning into professional practice." }
    ],
    testimonials: [
      { name: "Dr. Anjali R.", role: "Medical Practitioner", text: "The integrated approach is truly scientific. I learned how to diagnose root causes rather than just treating symptoms.", img: "https://picsum.photos/seed/anjali/100/100" },
      { name: "Mark T.", role: "Yoga Teacher", text: "Life-changing 11 days. Dr. Shakti's depth of knowledge in both Yoga and Ayurveda is incredible.", img: "https://picsum.photos/seed/mark/100/100" }
    ]
  },
  'ayurveda': {
    title: "Ayurveda & Marma Science",
    subtitle: "Master the ancient art of Ayurvedic healing and vital energy points.",
    image: IMAGES.yoga2,
    duration: "7 Days",
    price: "₹29,000",
    earlyBird: "₹26,000",
    overview: "Deep dive into the world of Ayurveda. Learn how to balance the three Doshas and use Marma points to trigger the body's natural healing mechanisms.",
    highlights: ["Dosha Balancing", "Panchakarma Basics", "Marma Point Therapy", "Diet & Lifestyle"],
    curriculum: [
      { day: "Day 1", title: "Introduction to Ayurveda", content: "History, philosophy, and the concept of five elements." },
      { day: "Day 2-3", title: "The Three Doshas", content: "Understanding Vata, Pitta, and Kapha in detail." },
      { day: "Day 4-5", title: "Marma Science", content: "Locating and activating the 107 vital energy points." },
      { day: "Day 6", title: "Ayurvedic Nutrition", content: "Food as medicine and seasonal lifestyle regimes." },
      { day: "Day 7", title: "Integration", content: "Combining Ayurveda with daily life and professional practice." }
    ],
    testimonials: [
      { name: "Priya S.", role: "Wellness Coach", text: "The Marma science module was a revelation. I can now help my clients with immediate pain relief techniques.", img: "https://picsum.photos/seed/priya/100/100" },
      { name: "David L.", role: "Massage Therapist", text: "Authentic Ayurveda taught in its purest form. Highly recommended for anyone seeking deep healing knowledge.", img: "https://picsum.photos/seed/david/100/100" }
    ]
  },
  'detox': {
    title: "Detox & Holistic Healing",
    subtitle: "Purify your body and mind with traditional Himalayan detox methods.",
    image: IMAGES.retreat1,
    duration: "5 Days",
    price: "₹23,000",
    earlyBird: "₹20,500",
    overview: "A specialized program focused on internal purification. Using Shatkarma, herbal detox, and meditation to remove toxins (Ama) from the system.",
    highlights: ["Shatkarma Practice", "Herbal Cleansing", "Mind Detox", "Vitality Boost"],
    curriculum: [
      { day: "Day 1", title: "System Preparation", content: "Light diet and introduction to internal cleansing." },
      { day: "Day 2-3", title: "Physical Detox", content: "Shatkarma techniques and Ayurvedic herbal support." },
      { day: "Day 4", title: "Emotional Release", content: "Guided meditation and sound healing for mental clarity." },
      { day: "Day 5", title: "Rejuvenation", content: "Building a post-detox lifestyle plan." }
    ],
    testimonials: [
      { name: "Sarah K.", role: "Retreat Participant", text: "I felt 10 years younger after the 5-day detox. The Shatkarma practices were intense but extremely effective.", img: "https://picsum.photos/seed/sarahk/100/100" },
      { name: "Robert M.", role: "Corporate Professional", text: "A complete mental and physical reset. The Himalayan environment adds a special energy to the healing.", img: "https://picsum.photos/seed/robert/100/100" }
    ]
  },
  'pain-management': {
    title: "Therapeutic Pain Management",
    subtitle: "Scientific yoga protocols for chronic pain and structural alignment.",
    image: IMAGES.yoga4,
    duration: "10 Days",
    price: "₹35,000",
    earlyBird: "₹31,500",
    overview: "Focus on structural issues like back pain, cervical issues, and joint problems. Learn how to use props and specific asanas for rehabilitation.",
    highlights: ["Spine Health", "Joint Mobility", "Alignment Correction", "Rehab Protocols"],
    curriculum: [
      { day: "Day 1-3", title: "Anatomy of Pain", content: "Understanding musculoskeletal issues and nervous system response." },
      { day: "Day 4-6", title: "Corrective Asanas", content: "Modified postures for specific physical limitations." },
      { day: "Day 7-9", title: "Therapy Design", content: "Creating long-term recovery plans for patients." },
      { day: "Day 10", title: "Final Review", content: "Assessment and professional guidance." }
    ],
    testimonials: [
      { name: "James W.", role: "Physiotherapist", text: "As a physiotherapist, I found the structural alignment protocols very useful for my practice.", img: "https://picsum.photos/seed/james/100/100" },
      { name: "Meera G.", role: "Chronic Pain Patient", text: "My chronic lower back pain is finally under control. The modified asanas made all the difference.", img: "https://picsum.photos/seed/meera/100/100" }
    ]
  },
  '100hr-ttc': {
    title: "100 Hour Yoga Teacher Training",
    subtitle: "Foundational training in traditional Hatha and Ashtanga Vinyasa yoga.",
    image: IMAGES.gallery2,
    duration: "14 Days",
    price: "₹45000",
    earlyBird: "₹40000",
    overview: "This 100-hour course is the first half of the 200-hour TTC. It is perfect for beginners who want to deepen their practice or those who cannot commit to a full 28-day course at once.",
    highlights: ["Hatha Yoga", "Ashtanga Vinyasa", "Pranayama", "Meditation"],
    curriculum: [
      { day: "Week 1", title: "Foundations", content: "Introduction to Hatha Yoga, basic asanas, and alignment principles." },
      { day: "Week 2", title: "Deepening Practice", content: "Introduction to Ashtanga Vinyasa, pranayama techniques, and basic philosophy." }
    ],
    testimonials: [
      { name: "Anna S.", role: "Yoga Student", text: "A perfect introduction to authentic yoga. The teachers are incredibly knowledgeable.", img: "https://picsum.photos/seed/anna/100/100" }
    ]
  },
  '200hr-ttc': {
    title: "200 Hour Yoga Teacher Training",
    subtitle: "Comprehensive certification course covering asana, philosophy, anatomy, and teaching methodology.",
    image: IMAGES.gallery3,
    duration: "28 Days",
    price: "₹85000",
    earlyBird: "₹75000",
    overview: "A complete immersion into the yogic lifestyle. This Yoga Alliance certified course prepares you to teach yoga globally with confidence and deep understanding.",
    highlights: ["Yoga Alliance Certified", "Anatomy & Physiology", "Teaching Methodology", "Yogic Philosophy"],
    curriculum: [
      { day: "Week 1", title: "Foundations & Alignment", content: "Deep dive into Hatha Yoga asanas, alignment, and adjustments." },
      { day: "Week 2", title: "Ashtanga & Anatomy", content: "Primary series of Ashtanga Vinyasa, functional anatomy, and physiology." },
      { day: "Week 3", title: "Philosophy & Pranayama", content: "Patanjali Yoga Sutras, advanced pranayama, and meditation techniques." },
      { day: "Week 4", title: "Teaching Methodology", content: "Practicum, class sequencing, and business of yoga." }
    ],
    testimonials: [
      { name: "Michael B.", role: "Certified Yoga Teacher", text: "This course completely transformed my life. I feel fully prepared to teach and share this ancient wisdom.", img: "https://picsum.photos/seed/michael/100/100" }
    ]
  }
};

export default function ProgramDetail() {
  const { t } = useTranslation();
  const { type } = useParams();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const program = programsData[type || 'yoga-therapy'] || programsData['yoga-therapy'];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link to="/programs" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors group">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">{t('common.backToPrograms')}</span>
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-primary px-4 py-1 rounded-full text-sm font-bold mb-6">
              <Star size={14} fill="currentColor" />
              <span>{t('common.certified')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{program.title}</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed italic border-l-4 border-primary/20 pl-6">
              "{program.subtitle}"
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                <Clock size={18} className="text-primary" />
                <span className="font-bold">{program.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                <MapPin size={18} className="text-primary" />
                <span className="font-bold">Rishikesh / Online</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/reserve" className="btn-primary px-10 py-4 text-lg shadow-xl shadow-orange-200">
                {t('common.register')}
              </Link>
              <a 
                href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-10 py-4 text-lg border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                {t('common.whatsapp')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] -z-10 rotate-3" />
            <img 
              src={program.image} 
              alt={program.title} 
              className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Details Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif mb-6">{t('programs.overview')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {program.overview}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {program.highlights.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-orange-50/50 rounded-2xl border border-orange-100">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif mb-8">{t('programs.structure')}</h2>
              <div className="space-y-4">
                {program.curriculum.map((item: any, i: number) => (
                  <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <button 
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg text-sm">{item.day}</span>
                        <span className="font-bold text-slate-800 text-lg">{item.title}</span>
                      </div>
                      <ChevronDown className={cn("transition-transform duration-300 text-slate-400", openIndex === i && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-slate-600 border-t border-slate-50 leading-relaxed">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl sticky top-28">
              <h3 className="text-2xl font-serif mb-6">{t('programs.investment')}</h3>
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-slate-400">{t('programs.fullPrice')}</span>
                  <span className="text-3xl font-bold">{program.price}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-primary font-bold">{t('programs.earlyBird')}</span>
                  <span className="text-3xl font-bold text-primary">{program.earlyBird}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">{t('programs.bookingFee')}</span>
                  <span className="text-xl font-bold">₹9,000</span>
                </div>
              </div>
              
              <Link to="/reserve" className="btn-primary w-full py-4 text-center block text-lg mb-6">
                {t('common.register')}
              </Link>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Users size={16} className="text-primary" />
                  <span>Small groups for personalized attention</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <GraduationCap size={16} className="text-primary" />
                  <span>International Certification upon completion</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Testimonials Section */}
        <section className="py-20 border-t border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">{t('programs.experiences')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto italic">
              "Hear from those who have walked this path of healing before you."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {program.testimonials.map((testimonial: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-orange-50/30 p-8 rounded-[2.5rem] border border-orange-100 relative"
              >
                <div className="text-primary/20 text-7xl absolute top-4 right-8 font-serif">"</div>
                <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed text-lg">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

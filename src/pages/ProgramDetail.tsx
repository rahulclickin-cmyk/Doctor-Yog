import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Calendar, Users, GraduationCap, ArrowLeft, Clock, MapPin, Star, Download } from 'lucide-react';
import { IMAGES, CONTACT } from '../constants';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';
import { generateBrochure, BrochureData } from '../lib/pdf';
import { YOGA_THERAPY_DATA } from '../data/programs';

const programsData: Record<string, any> = {
  'yoga-therapy': YOGA_THERAPY_DATA,
  'ayurveda': {
    title: "7 Days Ayurveda & Marma Therapy",
    subtitle: "A complete practical training in body constitution, Tridosha harmony, and vital life energy channels.",
    image: IMAGES.yoga2,
    duration: "7 Days",
    price: "280 Euro (₹25,200)",
    earlyBird: "Study manuals & material included",
    overview: "Deeply explore the timeless foundations of Ayurveda: ‘The Science of Life.’ Identify Tridosha regulations, imbalances, and cure principles. This course covers traditional Ayurvedic nutrition, restorative cooking, and lifestyle dynamics to remain vibrant, healthy, and ageless. Additionally, you will master Marma Therapy: the ancient science of stimulating 107 vital energy key-centers where natural life-forces (Prana) converge, clearing severe metabolic blockages, promoting cell regeneration, relieving chronic body tension, and boosting immunity.",
    highlights: ["Tridosha Balancing", "Ayurvedic Lifestyle & Care", "107 Marma Energy Points", "Hands-on Ayurvedic Cooking"],
    curriculum: [
      { day: "Day 1", title: "History & Introduction of Ayurveda", content: "Learn its history, root philosophies, the concept of the five great elements (Panch Mahabhutas), and daily wellness." },
      { day: "Day 2-3", title: "Understanding of Tridosha", content: "Master Vata, Pitta, and Kapha characteristics. Understand how imbalanced Tridosha causes physical/mental disease conditions and symptoms." },
      { day: "Day 4", title: "Food for Balancing Tridosha", content: "Learn to identify corresponding diets, metabolic parameters, using foods, therapeutic spices, and herbs as immediate medicine." },
      { day: "Day 5", title: "Ayurveda Cooking", content: "Hands-on preparations for restorative, easily digestible Sattvic foods, herbal decoctions, and healing recipes." },
      { day: "Day 6", title: "Ayurveda Lifestyle & Longevity", content: "Establishing a daily alignment routine (Dinacharya) and seasonal wisdom (Ritucharya) to stay healthy, clean, active, and young." },
      { day: "Day 7", title: "Marma Point Stimulation & Healing", content: "Detailed anatomical layout of vital points. Stimulating energy pathways to trigger deep organic recovery, alleviate muscular stress, and stabilize nervous structures." }
    ],
    testimonials: [
      { name: "Priya S.", role: "Wellness Coach", text: "The Marma science module was a revelation. I can now help my clients with immediate pain relief techniques.", img: "https://picsum.photos/seed/priya/100/100" },
      { name: "David L.", role: "Massage Therapist", text: "Authentic Ayurveda taught in its purest form. Highly recommended for anyone seeking deep healing knowledge.", img: "https://picsum.photos/seed/david/100/100" }
    ]
  },
  'detox': {
    title: "Detox & Holistic Healing",
    subtitle: "Purify your body and mind with our sacred 5, 10, or 14-day ancient purification methods.",
    image: IMAGES.retreat1,
    duration: "5 / 10 / 14 Days",
    price: "5 Days: 200€ (₹18,000) | 10 Days: 400€ (₹36,000)",
    earlyBird: "14 Days: 520€ (₹46,800)",
    overview: "This intensive purification retreat focuses entirely on internal chemical and mental detoxification. Using ancient systems of Shatkarma, we safely guide you through physical alignments, acupressure diagnostics to cleanly purify your nervous and lymphatic channels, Marma Therapy, structural therapeutic yoga asana, targeted pranayama, daily calming meditation, and custom Ayurveda Herbs. The process concludes with traditional Indian Havan Therapy (sacred fire ceremony) for profound mental clarity and spiritual restart. This holistic system will bring immense rejuvenation into your body and mind, giving you longevity, strength, and vibrant lifeness.",
    highlights: ["Shatkarma Purification", "Havan Therapy (Fire Ceremony)", "Acupressure & Nervous Cleansing", "5, 10, and 14 Days Plans Available"],
    curriculum: [
      { day: "Part 1", title: "Ancient Shatkarma & Nerve Purification", content: "Yogic body cleansing to eject deep-seated cellular toxins (Ama) and prepare vital systems." },
      { day: "Part 2", title: "Body Alignment & Acupressure", content: "Therapeutic physical alignments and manual pressure points to immediately open blocked nerve channels." },
      { day: "Part 3", title: "Marma stimulation & Herbol-nutrition", content: "Recharging vital energy junctions, consuming customized daily Ayurvedic Herbs, and restorative detox fasting." },
      { day: "Part 4", title: "Havan Therapy & Mind Longevity", content: "Participate in classical Vedic Havan fire ceremonies. Healing breathing practices, deep meditation, and longevity lifestyle designs." }
    ],
    testimonials: [
      { name: "Sarah K.", role: "Retreat Participant", text: "I felt 10 years younger after the 5-day detox. The Shatkarma practices were intense but extremely effective.", img: "https://picsum.photos/seed/sarahk/100/100" },
      { name: "Robert M.", role: "Corporate Professional", text: "A complete mental and physical reset. The Himalayan environment adds a special energy to the healing.", img: "https://picsum.photos/seed/robert/100/100" }
    ]
  },
  'pain-management': {
    title: "Therapeutic Pain Management",
    subtitle: "Naturally and scientifically cure chronic physical pains in a structured 10-day training.",
    image: IMAGES.yoga4,
    duration: "10 Days",
    price: "Offline: 480 Euro (₹43,200)",
    earlyBird: "Includes manual alignment guidance",
    overview: "Eliminate stubborn joint, neck, back, and spinal pain without surgeries or pharmaceutical dependencies. We use an exceptionally powerful combination of structural body alignment diagnostics, targeted acupressure pressure maps, and Marma Therapy integrated with specialized Ayurvedic techniques to heal the body naturally. This course teaches how to release deep stress, re-educate poor postures, and restore fluid musculoskeletal mobility.",
    highlights: ["Spine & Joint Realignment", "Nerve Acupressure Relief", "Marma Energy Reset", "10 Days Professional Therapy"],
    curriculum: [
      { day: "Day 1-3", title: "Anatomy of Musculoskeletal Pain", content: "Recognize structural deviations, nerve compressions, and spinal imbalances." },
      { day: "Day 4-6", title: "Diagnostic Posture Alignment", content: "Modified restorative poses and alignment tools to reset pelvic and spinal balances." },
      { day: "Day 7-9", title: "Acupressure & Marma Treatment Protocols", content: "Practical hands-on stimulation sequences to bring immediate organic pain relief and fluid joint recovery." },
      { day: "Day 10", title: "Sustaining a Pain-Free Life", content: "Ayurvedic routines, self-therapy skills, and healthy postural habits for long-term health." }
    ],
    testimonials: [
      { name: "James W.", role: "Physiotherapist", text: "As a physiotherapist, I found the structural alignment protocols very useful for my practice.", img: "https://picsum.photos/seed/james/100/100" },
      { name: "Meera G.", role: "Chronic Pain Patient", text: "My chronic lower back pain is finally under control. The modified asanas made all the difference.", img: "https://picsum.photos/seed/meera/100/100" }
    ]
  },
  '100hr-ttc': {
    title: "100 Hour Yoga Teacher Training Course",
    subtitle: "Foundational international training certificate in Hatha and Ashtanga Vinyasa yoga.",
    image: IMAGES.gallery2,
    duration: "11 Days",
    price: "Offline: ₹55,000",
    earlyBird: "Online: ₹37,000",
    overview: "This foundational 100-hour professional course covers core Hatha Yoga alignments, sequencing mechanics, traditional Ashtanga Vinyasa, pranayama, and fundamental Vedic philosophies. Now perfectly compressed into an intensive 11-day curriculum, it is perfect for those beginning their teaching journey or practitioners who want to build a safe, robust daily practice.",
    highlights: ["International Certification", "Traditional Hatha Alignments", "Ashtanga Vinyasa Flow", "11 Days Intensive Immersion"],
    curriculum: [
      { day: "Days 1-5", title: "Hatha & Pose Geometry", content: "Deconstruct asana alignments, study skeletal posture safety, and practice foundational kriyas." },
      { day: "Days 6-11", title: "Ashtanga Flow & Teaching Foundations", content: "Explore Ashtanga Vinyasa Primary Series sequencing, breathing techniques, and professional class instructions." }
    ],
    testimonials: [
      { name: "Anna S.", role: "Yoga Student", text: "A perfect introduction to authentic yoga. The teachers are incredibly knowledgeable.", img: "https://picsum.photos/seed/anna/100/100" }
    ]
  },
  '200hr-ttc': {
    title: "200 Hour Yoga Teacher Training Course",
    subtitle: "Highly comprehensive professional global certification over 22 intensive days.",
    image: IMAGES.gallery3,
    duration: "22 Days",
    price: "Offline: ₹85,000",
    earlyBird: "Online: ₹50,000",
    overview: "Our primary flagship professional teacher certification is a deep physical, mental, and spiritual lifestyle immersion now optimized for 22 days. This comprehensive course prepares you to teach worldwide with complete authenticity, covering advanced postural alignment, therapeutic body anatomy, ancient scriptures (Patanjali’s Yoga Sutras & Hatha Yoga Pradipika), advanced pranayama systems, and expert adjustments.",
    highlights: ["Yoga Alliance Global Registry", "Anatomy & Physiology Masterclass", "Asana Corrections & Adjustments", "Vedic Scriptural Readings"],
    curriculum: [
      { day: "Week 1", title: "Asana Alignment & Anatomy Blueprint", content: "Break down biomechanics, posture adjustment keys, and skeletal system safety." },
      { day: "Week 2", title: "Ashtanga Vinyasa & Prana Dynamics", content: "Advanced Primary Series, pranayama ratios, and energetic bandha stimulation." },
      { day: "Week 3", title: "Yogic Philosophy & Scripture", content: "In-depth Patanjali Yoga Sutras, Hatha Yoga Pradipika, and Ayurvedic integrations." },
      { day: "Week 4", title: "Teaching Practicums & Class Mechanics", content: "Student teaching trials, voice modulation, smart sequencing guides, and business of yoga." }
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

  const handleDownload = () => {
    const brochureData: BrochureData = {
      title: program.title,
      subtitle: program.subtitle,
      doctorName: program.doctorName || "Dr. Shakti Vidyalankar",
      date: program.date || "Multiple Dates",
      description: program.overview,
      highlights: program.highlights,
      idealFor: program.idealFor || [],
      curriculum: program.curriculum.map((c: any) => ({ title: c.title, topics: c.topics || [c.content] })),
      schedule: program.schedule || [],
      dailyProgram: program.dailyProgram || [],
      outcomes: program.outcomes || [],
      fee: {
        full: program.price,
        earlyBird: program.earlyBird,
        registration: program.registrationFee || "N/A"
      }
    };
    generateBrochure(brochureData);
  };

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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{program.title}</h1>
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
              <Link to="/reserve" className="btn-primary px-8 py-4 text-lg shadow-xl shadow-orange-200">
                {t('common.register')}
              </Link>
              <button 
                onClick={handleDownload}
                className="btn-outline px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center gap-2"
              >
                <Download size={20} />
                <span>Download Brochure</span>
              </button>
              <a 
                href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-4 text-lg border-slate-200 text-slate-700 hover:bg-slate-50"
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
              
              {program.idealFor && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">This program is ideal for:</h3>
                  <div className="flex flex-wrap gap-3">
                    {program.idealFor.map((item: string, i: number) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 uppercase tracking-tighter">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {program.highlights.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-orange-50/50 rounded-2xl border border-orange-100">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {program.outcomes && (
              <section className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-2xl font-serif mb-6 text-slate-800">Training Outcomes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.outcomes.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-3xl font-serif mb-8">{t('programs.structure')}</h2>
              
              {program.schedule && program.schedule.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <Clock size={20} className="text-primary" />
                    Daily Time Schedule
                  </h3>
                  <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                    {program.schedule.map((item: any, i: number) => (
                      <div key={i} className={cn("flex items-center p-4 border-b border-slate-50 last:border-0", i % 2 === 0 ? "bg-slate-50/30" : "bg-white")}>
                        <span className="w-32 font-bold text-primary text-sm">{item.time}</span>
                        <span className="text-slate-600 text-sm">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-slate-800">11-Day Training Journey</h3>
                {program.dailyProgram && program.dailyProgram.length > 0 ? (
                  program.dailyProgram.map((item: any, i: number) => (
                    <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg text-sm">{item.day}</span>
                          <span className="font-bold text-slate-800 text-lg">
                            {program.curriculum[i]?.title || "Focus Area"}
                          </span>
                        </div>
                        <ul className="space-y-1 ml-4 mt-4">
                          {item.topics.map((topic: string, tid: number) => (
                            <li key={tid} className="text-slate-600 text-sm flex items-start gap-2">
                              <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  program.curriculum.map((item: any, i: number) => (
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
                  ))
                )}
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
                  <span className="text-xl font-bold">{program.registrationFee || "₹9,000"}</span>
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

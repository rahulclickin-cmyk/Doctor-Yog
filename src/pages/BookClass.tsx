import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import PageHero from '../components/PageHero';

export default function BookClass() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    whatsapp: '',
    email: '',
    gender: '',
    country: '',
    retreatDays: '',
    retreatType: '',
    accommodation: '',
    arrivalDate: '',
    healthComments: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Save in Firestore for backup/security
      const path = 'bookings';
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp()
      });

      // Submit to Google Sheets via API route
      try {
        await fetch('/api/reserve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            formType: 'Detailed Booking'
          })
        });
      } catch (sheetErr) {
        console.error('Error forwarding to Google Sheets:', sheetErr);
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        whatsapp: '',
        email: '',
        gender: '',
        country: '',
        retreatDays: '',
        retreatType: '',
        accommodation: '',
        arrivalDate: '',
        healthComments: ''
      });
    } catch (error) {
      console.error('Booking submission error:', error);
      setStatus('error');
      handleFirestoreError(error, OperationType.CREATE, 'bookings');
    }
  };

  return (
    <div className="pb-20">
      <PageHero 
        title="Book a Class" 
        subtitle="Reserve your spot for our transformative sessions and retreats."
      />
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Service Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
              <h2 className="text-3xl font-serif mb-6 text-primary">Service Information</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Join our specialized yoga therapy and healing sessions. Whether you're a beginner or an advanced practitioner, we have a space for you.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Phone className="text-primary" />, title: "Contact", info: "+91 1234567890" },
                  { icon: <Mail className="text-primary" />, title: "Email", info: "info@doctoryog.com" },
                  { icon: <MapPin className="text-primary" />, title: "Location", info: "Rishikesh, Uttarakhand, India" },
                  { icon: <Clock className="text-primary" />, title: "Hours", info: "Mon - Sat: 6:00 AM - 8:00 PM" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl">{item.icon}</div>
                    <div>
                      <div className="font-bold text-slate-800">{item.title}</div>
                      <div className="text-slate-600">{item.info}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar UI Mockup */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-serif flex items-center gap-2">
                  <CalendarIcon className="text-primary" /> April 2026
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-orange-50 rounded-full transition-colors"><ChevronLeft size={20} /></button>
                  <button className="p-2 hover:bg-orange-50 rounded-full transition-colors"><ChevronRight size={20} /></button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center text-sm font-bold text-slate-400 py-2">{day}</div>
                ))}
                {daysInMonth.map(day => (
                  <button 
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={cn(
                      "h-10 w-10 mx-auto flex items-center justify-center rounded-full text-sm transition-all",
                      selectedDate === day ? "bg-primary text-white font-bold shadow-lg shadow-primary/30" : "hover:bg-orange-50 text-slate-600"
                    )}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <p className="text-sm text-slate-400 italic text-center mt-4">Select a date to see available slots</p>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-orange-100 min-h-[500px] flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-serif mb-4 text-slate-800">Registration Successful!</h2>
                <p className="text-slate-600 mb-8 leading-relaxed max-w-md mx-auto">
                  Thank you for your registration. Your details have been securely saved and our team will contact you soon on WhatsApp or email!
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-primary px-8"
                >
                  Register Another Student
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle size={40} />
                </div>
                <h2 className="text-3xl font-serif mb-4 text-slate-800">Submission Failed</h2>
                <p className="text-slate-600 mb-8 leading-relaxed max-w-md mx-auto">
                  There was an error saving your registration details. Please check your connection and try again.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-primary px-8"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-serif mb-8 text-center text-slate-800">Registration Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                      <input 
                        type="text" required 
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                      <input 
                        type="text" required 
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={e => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">WhatsApp Number</label>
                      <input 
                        type="tel" required 
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+91 ..."
                        value={formData.whatsapp}
                        onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input 
                        type="email" required 
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Gender</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        value={formData.gender}
                        onChange={e => setFormData({...formData, gender: e.target.value})}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Country</label>
                      <input 
                        type="text" required 
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your Country"
                        value={formData.country}
                        onChange={e => setFormData({...formData, country: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Retreat Days</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        value={formData.retreatDays}
                        onChange={e => setFormData({...formData, retreatDays: e.target.value})}
                      >
                        <option value="">Select Days</option>
                        <option value="7">7 Days</option>
                        <option value="14">14 Days</option>
                        <option value="21">21 Days</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Retreat Type</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        value={formData.retreatType}
                        onChange={e => setFormData({...formData, retreatType: e.target.value})}
                      >
                        <option value="">Select Type</option>
                        <option value="detox">Detox Retreat</option>
                        <option value="panchakarma">Panchakarma</option>
                        <option value="stress">Stress Healing</option>
                        <option value="diabetes">Diabetes Healing</option>
                        <option value="pain">Pain Management</option>
                        <option value="100hr-ttc">100 Hour TTC</option>
                        <option value="200hr-ttc">200 Hour TTC</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Accommodation</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        value={formData.accommodation}
                        onChange={e => setFormData({...formData, accommodation: e.target.value})}
                      >
                        <option value="">Select Option</option>
                        <option value="private">Private Room</option>
                        <option value="shared">Shared Room</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Arrival Date</label>
                      <input 
                        type="date" required 
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        value={formData.arrivalDate}
                        onChange={e => setFormData({...formData, arrivalDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Health Comments</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Any health issues or special requirements?"
                      value={formData.healthComments}
                      onChange={e => setFormData({...formData, healthComments: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="btn-primary w-full py-4 text-xl flex items-center justify-center gap-2 relative disabled:opacity-75 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Registering Student...
                      </>
                    ) : (
                      <>
                        <Send size={20} /> Register Now
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

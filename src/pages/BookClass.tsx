import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { cn } from '../lib/utils';

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

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your registration! We will contact you soon.');
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Book a Class</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Reserve your spot for our transformative sessions and retreats.
          </p>
        </div>

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
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-orange-100">
            <h2 className="text-3xl font-serif mb-8 text-center">Registration Form</h2>
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

              <button type="submit" className="btn-primary w-full py-4 text-xl flex items-center justify-center gap-2">
                <Send size={20} /> Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

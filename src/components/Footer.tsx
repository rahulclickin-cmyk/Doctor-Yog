import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, SOCIAL } from '../constants';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { Icon: Facebook, url: SOCIAL.facebook },
    { Icon: Instagram, url: SOCIAL.instagram },
    { Icon: Youtube, url: SOCIAL.youtube },
  ];

  return (
    <footer className="bg-tertiary text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={IMAGES.logo} alt="Doctor Yog" className="h-12 w-auto brightness-0 invert" referrerPolicy="no-referrer" />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Holistic Wellness Foundation rooted in the Himalayas. Ancient healing wisdom for modern life transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-6 border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/retreats" className="hover:text-primary transition-colors">Retreats</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/reserve" className="hover:text-primary transition-colors">Register Now</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-serif mb-6 border-b border-white/10 pb-2">Programs</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/programs/classes" className="hover:text-primary transition-colors">Yoga Classes</Link></li>
              <li><Link to="/programs/groups" className="hover:text-primary transition-colors">Group Healing</Link></li>
              <li><Link to="/programs/members" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link to="/programs/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-6 border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>Rishikesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span>+91 85328 18447</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <span>shaktidoctoryog7@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* New Redesigned Newsletter Section */}
        <div className="mb-16 p-8 md:p-10 bg-[#F5E1C8] rounded-2xl text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Subscribe to get exclusive updates</h2>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
            <div className="flex flex-col md:flex-row items-end gap-6">
              <div className="flex-grow space-y-2">
                <label className="text-sm font-medium block">Email *</label>
                <input 
                  type="email" 
                  placeholder="e.g., email@example.com" 
                  required
                  className="w-full px-6 py-4 rounded-full bg-[#FDF5EB] text-slate-900 border-none focus:ring-2 focus:ring-orange-300 outline-none"
                />
              </div>
              <button type="submit" className="bg-white text-black px-8 py-4 rounded-lg font-medium text-lg leading-tight hover:bg-white/90 transition-colors shadow-sm border border-black/5 min-w-[200px]">
                Join Our Mailing<br />List
              </button>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="subscribe-check" className="w-5 h-5 rounded border-black/20 text-primary focus:ring-primary" required />
              <label htmlFor="subscribe-check" className="text-sm md:text-base">I want to subscribe to your mailing list.</label>
            </div>
          </form>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} DoctorYog Holistic Wellness Foundation. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

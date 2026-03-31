import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
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
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
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
              <li><Link to="/contact#register" className="hover:text-primary transition-colors">Register Now</Link></li>
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

        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} DoctorYog Holistic Wellness Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

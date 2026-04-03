import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, MessageCircle, User, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import { CONTACT } from '../constants';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Programs', path: '/programs', icon: BookOpen },
  { name: 'About', path: '/about', icon: User },
  { name: 'Contact', path: '/contact', icon: Phone },
  { name: 'WhatsApp', path: `https://wa.me/${CONTACT.whatsapp.replace('+', '')}`, icon: MessageCircle, external: true },
];

export default function MobileBottomNav() {
  const location = useLocation();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-orange-100 px-2 py-2 z-50 flex items-center justify-around shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        if (item.external) {
          return (
            <a
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all active:scale-95"
            >
              <div className="p-1.5 rounded-lg bg-green-50 text-green-600">
                <Icon size={20} />
              </div>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">{item.name}</span>
            </a>
          );
        }

        return (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all active:scale-95",
              isActive ? "text-primary" : "text-slate-400"
            )}
          >
            <div className={cn(
              "p-1.5 rounded-lg transition-colors",
              isActive ? "bg-primary/10" : "bg-transparent"
            )}>
              <Icon size={20} />
            </div>
            <span className={cn(
              "text-[10px] font-medium uppercase tracking-tighter",
              isActive ? "text-primary" : "text-slate-500"
            )}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

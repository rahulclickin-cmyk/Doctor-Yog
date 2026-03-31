import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../constants';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert"
        referrerPolicy="no-referrer"
      />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-medium whitespace-nowrap text-sm md:text-base">
        Chat on WhatsApp
      </span>
    </a>
  );
}

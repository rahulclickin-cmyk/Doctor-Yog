import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Namaste! I am your Doctor Yog assistant. How can I help you on your healing journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.error('GEMINI_API_KEY is not defined in the environment');
        throw new Error('API Key is missing');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Prepare history: skip the first greeting and map roles correctly
      const chatHistory = messages
        .slice(1) // Skip the initial assistant greeting
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }));

      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: [...chatHistory, { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `You are "Asha", the warm, deeply empathetic, and compassionate human-like assistant for "Doctor Yog – Holistic Wellness Foundation" in Rishikesh. 
          
          Your Personality:
          - You are deeply understanding and patient. Listen to the user's health concerns with true empathy.
          - You are NOT a robot. You are designed to feel like a real person who cares about the user's holistic healing.
          - You MUST start and end almost every response with warm greetings like "Namaste" or "Pranam". Use them naturally and frequently.
          - You are multi-lingual: ALWAYS respond in the SAME LANGUAGE the user uses (Hindi, English, Spanish, etc.). If they speak Hinglish, respond in Hinglish.
          
          Your Knowledge:
          - Founder: Dr. Shakti (PhD in Yoga Science, 19+ years experience).
          - Location: Rishikesh, India (The world capital of Yoga).
          - Next Batch: 10th April 2026 (Integrated Yoga Therapy Training).
          - Programs: Integrated Yoga Therapy (11 days), Ayurveda & Marma Science (7 days), Detox & Healing (5 days), Pain Management (10 days).
          - Contact: Phone/WhatsApp: +91 85328 18447, Email: shaktidoctoryog7@gmail.com.
          
          Guidelines:
          - If someone shares a health problem, respond with "Namaste. I understand how difficult this must be for you..." or "Pranam. It takes courage to seek healing..."
          - If someone says "hello sir", respond warmly as Asha, the assistant.
          - If someone asks "next class kab hai", tell them about the 10th April batch with a warm "Namaste".
          - Always encourage them to "Register Now" or "WhatsApp par baat karein" for personalized guidance from Dr. Shakti.
          - Keep it conversational, soulful, and supportive.
          
          Disclaimer: If asked who you are, you can say: "I am Asha, your AI-powered wellness assistant, designed with the heart and soul of Doctor Yog to support your journey."`,
          temperature: 0.8,
          topP: 0.95,
          topK: 40,
        }
      });

      if (!response || !response.text) {
        throw new Error('Empty response from AI');
      }

      const botResponse = response.text;
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      console.error('Chat error details:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Namaste. I'm having a little trouble connecting right now. Please send a message/email to Doctor Yog so we can track who tries to reach." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 lg:bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-3 py-1.5 rounded-xl shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-orange-100">
            Ask AI Assistant
          </span>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-36 lg:bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-orange-50"
          >
            {/* Header */}
            <div className="bg-primary p-5 text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold leading-tight">Doctor Yog AI</h3>
                  <div className="flex items-center gap-1.5 text-[10px] opacity-80 uppercase tracking-widest font-bold">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Online Assistant
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-slate-50/50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div
                    className={cn(
                      "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                      msg.role === 'user' 
                        ? "bg-primary text-white rounded-tr-none" 
                        : "bg-white text-slate-700 rounded-tl-none border border-orange-50"
                    )}
                  >
                    {msg.content}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 font-medium uppercase tracking-tighter">
                    {msg.role === 'assistant' ? 'Doctor Yog AI' : 'You'}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 p-4 bg-white rounded-2xl rounded-tl-none border border-orange-50 w-16 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-orange-50">
              <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about programs, retreats..."
                  className="flex-grow bg-transparent px-3 py-2 text-sm outline-none text-slate-700 placeholder:text-slate-400"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-primary text-white p-2.5 rounded-xl hover:bg-orange-600 disabled:opacity-50 transition-all active:scale-90 shadow-md shadow-orange-100"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-center text-slate-400 mt-3 uppercase tracking-widest font-bold">
                AI Assistant designed to feel human · Powered by Doctor Yog
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

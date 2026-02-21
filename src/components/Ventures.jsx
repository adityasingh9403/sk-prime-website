import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Trophy, Calendar, Home, Briefcase, Star, ChevronRight, Crown } from 'lucide-react';

const BusinessCard = ({ title, desc, icon: Icon, bgImage, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative group h-[550px] overflow-hidden rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700"
  >
    {/* Image Container */}
    <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </div>

    {/* Content Section */}
    <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
      <div className="mb-6">
        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500 shadow-xl shadow-slate-200">
          <Icon size={28} strokeWidth={1.5} />
        </div>
      </div>

      <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
        {title.split(' ')[0]} <br />
        <span className="italic font-serif font-light lowercase">
          {title.split(' ').slice(1).join(' ')}
        </span>
      </h3>

      <p className="text-slate-500 text-xs leading-relaxed mb-8 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        {desc}
      </p>

      <div className="pt-6 border-t border-slate-100">
        <button className="text-slate-900 font-black uppercase tracking-[0.3em] text-[9px] flex items-center gap-3 group/btn hover:text-[#D4AF37] transition-colors">
          View Portfolio <ChevronRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>

    <div className="absolute top-0 right-0 w-1 h-0 bg-[#D4AF37] transition-all duration-700 group-hover:h-full"></div>
  </motion.div>
);

const Ventures = () => {
  const data = [
    {
      title: "SK PRIME INFOTECH",
      // Modern Software Development & POS focus
      desc: "Revolutionizing industries with specialized software like Restaurant POS systems and Agri-Tech web solutions.",
      icon: Laptop,
      // Nayi Image: Focused on clean code and modern workspace
      bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "SK PRIME SPORTS",
      desc: "Formalizing regional talent through elite management and flagship leagues like KCPL Season 1.",
      icon: Trophy,
      bgImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2073"
    },
    {
      title: "SK PRIME EVENTS",
      desc: "Executing grand-scale corporate launches and inauguration ceremonies with surgical precision.",
      icon: Calendar,
      bgImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
    },
    {
      title: "VERMA CONSTRUCTION & PRIME PROPERTY BROKER",
      // Sustainable urban infrastructure focus
      desc: "Architecting sustainable urban infrastructure and premium modern developments across the region.",
      icon: Home,
      // Nayi Image: Luxury modern architectural glass building
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "SUPER KING CRICKET",
      desc: "Managing the powerhouse Super King tennis ball team and orchestrating competitive tournaments.",
      icon: Star,
      bgImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067"
    },
  ];

  return (
    <section id="ventures" className="py-30 bg-[#FDFDFD] px-6 relative overflow-hidden font-sans">

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-50/50 blur-[120px] rounded-full pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-center mb-40 text-center lg:text-left gap-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <Crown size={16} className="text-[#D4AF37]" />
              <span className="text-slate-400 font-black tracking-[0.5em] uppercase text-[10px]">Strategic Portfolios</span>
            </motion.div>

            <motion.h3 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              PRIME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A6E2F] via-[#D4AF37] to-[#8A6E2F] italic font-serif">
                VENTURES.
              </span>
            </motion.h3>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-10 rounded-[3rem] bg-white border border-slate-100 max-w-sm shadow-xl shadow-slate-200/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D4AF37]" />
            <p className="text-slate-800 font-black uppercase tracking-[0.2em] text-[10px] mb-3">Core Philosophy</p>
            <p className="text-slate-500 font-medium text-xs leading-relaxed italic">
              "Architecting a legacy of trust by modernizing unorganized markets across global horizons."
            </p>
          </motion.div>
        </div>

        {/* --- SYMMETRICAL 6-CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <BusinessCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ExternalLink, Trophy, Cpu, Briefcase, ChevronRight, Crown } from 'lucide-react';

const Gallery = () => {
  const portfolio = [
    {
      type: 'Events',
      url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067',
      title: 'KCPL Season 1',
      desc: 'Mega Sports Event: Organized & Managed 8 Professional Teams in Indore',
      icon: <Trophy size={14} />
    },
    {
      type: 'IT Solutions',
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072',
      title: 'Restaurant POS',
      desc: 'Dynamic Cloud-based Management System for SK Prime Infotech',
      icon: <Cpu size={14} />
    },
    {
      type: 'Events',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069',
      title: 'SK Prime Grand Launch',
      desc: 'Inauguration Ceremony at SR Empire, Rau (Feb 15, 2026)',
      icon: <Camera size={14} />
    },
    {
      type: 'IT Solutions',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      title: 'Smart Ag Web App',
      desc: 'Next-Gen Agricultural Tech Platform for Modern Farming',
      icon: <Cpu size={14} />
    },
    {
      type: 'Construction',
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      title: 'Aarav Build Con Project',
      desc: 'Live Dynamic Website & Infrastructure for Indore Construction',
      icon: <Briefcase size={14} />
    },
    {
      type: 'Sports',
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2073',
      title: 'Super King Cricket',
      desc: 'Digital Network & Talent Management for Tennis Ball Cricket',
      icon: <Trophy size={14} />
    },
  ];

  return (
    <section className="bg-[#fcfcfd] relative overflow-hidden font-sans 
      /* Navbar Offset: Ensures content starts below the fixed navbar */
      pt-24 md:pt-32 lg:pt-40 
      pb-20 md:pb-32 
      px-4 sm:px-6 md:px-12">

      {/* --- AMBIENT BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-amber-50/40 blur-[80px] md:blur-[120px] rounded-full pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-50/30 blur-[80px] md:blur-[100px] rounded-full pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- DYNAMIC HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-28 gap-10 border-b border-slate-100 pb-12">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-8"
            >
              <div className="p-2 md:p-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <Crown size={18} className="text-[#D4AF37]" />
              </div>
              <h2 className="text-slate-400 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[8px] md:text-[10px]">Project Portfolio 2026</h2>
            </motion.div>

            <h3 className="text-4xl md:text-7xl lg:text-[8.5rem] font-black text-slate-900 uppercase tracking-tighter leading-[1.1] md:leading-[0.8]">
              REAL <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A6E2F] via-[#D4AF37] to-[#8A6E2F] italic font-serif font-light">IMPACT.</span>
            </h3>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 w-full lg:w-auto">
            {[
              { label: 'Live Projects', val: '15+' },
              { label: 'Active Sectors', val: '05' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm text-center group hover:bg-slate-900 transition-all duration-500">
                <p className="text-3xl md:text-5xl font-black text-slate-900 group-hover:text-[#D4AF37] tracking-tighter transition-colors">{stat.val}</p>
                <p className="text-slate-400 group-hover:text-slate-500 text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-bold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- DYNAMIC PORTFOLIO GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-[450px] md:h-[580px] group overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white shadow-sm hover:shadow-2xl transition-all duration-500 bg-white"
            >
              {/* Image Layer with Grayscale Hover */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.url}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] grayscale-[20%] group-hover:grayscale-0"
                  alt={item.title}
                />
                {/* Modern Fade Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent md:via-white/20 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Top Category Badge */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <div className="flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-md border border-slate-100 text-slate-900 px-4 md:px-5 py-2 rounded-full text-[7px] md:text-[9px] font-black uppercase tracking-widest shadow-xl group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                  {item.icon} {item.type}
                </div>
              </div>

              {/* Bottom Content Panel */}
              <div className="absolute bottom-8 left-6 right-6 md:bottom-10 md:left-8 md:right-8 z-20">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight group-hover:text-[#D4AF37] transition-colors duration-500 mb-2 md:mb-4">
                  {item.title}
                </h4>

                <div className="max-h-0 group-hover:max-h-32 md:group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  <p className="text-slate-600 md:text-slate-500 font-medium text-[10px] md:text-xs leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Interactive Corner Icon */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-[-100px] group-hover:translate-y-0 transition-transform duration-500">
                <ExternalLink className="text-slate-900" size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- REFINED CTA SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-40 relative py-20 md:py-32 px-6 md:px-12 rounded-[3rem] md:rounded-[5rem] bg-slate-900 overflow-hidden text-center shadow-2xl group"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -top-10 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]" />
          
          <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6">Indore • Dubai • Global Roadmap</h4>

          <h2 className="text-3xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-10 md:mb-12 leading-[1.1] md:leading-none">
            START YOUR <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-200 italic font-serif">LEGACY TODAY.</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 relative z-10">
            <button className="w-full sm:w-auto bg-[#D4AF37] text-white px-10 py-4 md:py-5 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95">
              Partner with us <ChevronRight size={16} />
            </button>
            <button className="w-full sm:w-auto bg-transparent text-white/60 border border-white/10 px-10 py-4 md:py-5 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 transition-all active:scale-95">
              Download Profile
            </button>
          </div>
        </motion.div>
      </div>

      {/* Symmetric Page Divider */}
      <div className="w-full h-px bg-slate-100 mt-20" />
    </section>
  );
};

export default Gallery;
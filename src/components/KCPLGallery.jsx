import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const media = [
    { type: 'image', url: '/kcpl1.jpg', title: 'Grand Finale', desc: 'Indore, 2026' },
    { type: 'image', url: '/kcpl2.jpg', title: 'The Crowd', desc: '5000+ Engagement' },
    { type: 'image', url: '/kcpl3.jpg', title: 'Trophy Reveal', desc: 'Super King Brand' },
    { type: 'image', url: '/kcpl4.jpg', title: 'Digital Coverage', desc: 'Symmetry in Action' },
  ];

  return (
    <section className="bg-[#0A192F] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4">Real Impact</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
              KCPL <span className="text-gray-500 italic">TRACTION</span>
            </h3>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
            <p className="text-3xl font-black text-[#D4AF37]">8 TEAMS</p>
            <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Organized & Managed</p>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {media.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-[400px] group overflow-hidden rounded-[2rem] border border-white/10"
            >
              <img 
                src={item.url} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent opacity-80" />
              <div className="absolute bottom-8 left-8">
                <h4 className="text-2xl font-black text-white uppercase tracking-tight">{item.title}</h4>
                <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
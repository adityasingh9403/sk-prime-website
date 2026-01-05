import React from 'react';
import { motion } from 'framer-motion';

const BusinessCard = ({ title, desc, icon, bgImage, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative group h-[400px] overflow-hidden rounded-3xl bg-[#0A192F] cursor-pointer shadow-2xl"
  >
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
    
    {/* Content */}
    <div className="relative h-full p-10 flex flex-col justify-end z-10">
      <div className="mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-5xl">{icon}</span>
      </div>
      
      <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-[50ms]">
        {title.split(' ')[1]} <span className="text-[#D4AF37]">{title.split(' ')[2] || ''}</span>
      </h3>
      
      <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        {desc}
      </p>
      
      <div className="mt-6 overflow-hidden">
        <button className="text-[#D4AF37] font-black uppercase tracking-widest text-xs flex items-center gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-150">
          Explore Venture <span className="text-xl">→</span>
        </button>
      </div>
    </div>

    {/* Top Border Line */}
    <div className="absolute top-0 left-0 w-0 h-1.5 bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></div>
  </motion.div>
);

const Ventures = () => {
  const data = [
    { 
      title: "SK IT SOLUTIONS", 
      desc: "Architecting high-performance software, cloud systems, and digital ecosystems for global enterprises.", 
      icon: "⚡",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070" 
    },
    { 
      title: "SK SPORTS SHOP", 
      desc: "The ultimate destination for premium professional sports gear, catering to world-class athletes.", 
      icon: "🎾",
      bgImage: "https://images.unsplash.com/photo-1541534741688-6078c64b5ea5?q=80&w=2069" 
    },
    { 
      title: "SK EVENT MANAGEMENT", 
      desc: "Producing grand-scale corporate events and luxury private experiences with surgical precision.", 
      icon: "💎",
      bgImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069" 
    },
    { 
      title: "SK CONSTRUCTION", 
      desc: "Building the foundations of tomorrow with sustainable engineering and architectural brilliance.", 
      icon: "🏗️",
      bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062" 
    },
    { 
      title: "SK SUPERKING TEAM", 
      desc: "Exclusive sports talent management and strategic representation for elite professional teams.", 
      icon: "👑",
      bgImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070" 
    },
  ];

  return (
    <section id="ventures" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Symmetric Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4">Our Diverse Portfolio</h2>
            <h3 className="text-5xl md:text-7xl font-black text-[#0A192F] uppercase tracking-tighter leading-none">
              SK PRIME <br/> <span className="text-gray-300 italic">VENTURES</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-xs font-medium border-l-2 border-[#D4AF37] pl-6 py-2">
            Each venture under SK Prime Group operates with a singular focus: Global Excellence.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <BusinessCard key={index} {...item} index={index} />
          ))}
          
          {/* Inquiry CTA Card */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border-4 border-dashed border-gray-100 rounded-3xl flex flex-col items-center justify-center p-10 text-center hover:border-[#D4AF37]/30 transition-colors"
          >
            <h4 className="text-xl font-bold text-gray-300 uppercase tracking-widest mb-4">New Opportunity?</h4>
            <p className="text-gray-400 text-sm mb-6">We are always looking for strategic partnerships and new ventures.</p>
            <button className="bg-[#0A192F] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all">
              Partner With Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

const About = () => {
  const missionPoints = [
    {
      title: "Empowering Digital Transformation",
      desc: "Providing world-class IT services to businesses while fostering a 'Learning-by-Doing' culture for the next generation of tech professionals.",
      icon: <Lightbulb className="text-[#D4AF37]" size={32} />
    },
    {
      title: "Revolutionizing Sports Consumption",
      desc: "Bringing high-quality, professional sports content to the masses and formalizing the unorganized tennis-ball cricket market.",
      icon: <TrendingUp className="text-[#D4AF37]" size={32} />
    },
    {
      title: "Seamless Resource Management",
      desc: "Bridging the gap between sports enthusiasts and infrastructure through a centralized booking and event management platform.",
      icon: <ShieldCheck className="text-[#D4AF37]" size={32} />
    }
  ];

  return (
    <div className="bg-[#0A192F] min-h-screen text-white pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/path-to-your-damask.png')] bg-repeat"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center mb-24">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4"
          >
            Building Excellence. Defining Legacy.
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-tight"
          >
            SK <span className="text-[#D4AF37]">PRIME</span> GROUP
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg md:text-xl font-medium"
          >
            A Diversified Global Conglomerate Bridging Innovation, Sports, and Infrastructure.
          </motion.p>
        </div>

        {/* --- VISION SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-12 mb-20 text-center relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37] blur-[100px] opacity-10"></div>
          <Target className="mx-auto mb-6 text-[#D4AF37]" size={48} />
          <h2 className="text-3xl font-black uppercase tracking-widest mb-6">The Vision</h2>
          <p className="text-xl md:text-2xl text-gray-300 italic max-w-4xl mx-auto leading-relaxed">
            "To build a global ecosystem where technology empowers talent, and sports transcend boundaries through innovation and structured management".
          </p>
        </motion.div>

        {/* --- MISSION SECTION (Grid) --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-[#D4AF37] transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
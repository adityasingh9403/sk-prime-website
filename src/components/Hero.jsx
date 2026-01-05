import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Counter Logic Component
const Counter = ({ value, title }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const target = parseInt(value);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2; // seconds
      const increment = target / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="border-r last:border-0 border-gray-100 px-4">
      <p className="text-4xl md:text-5xl font-black text-[#0A192F] mb-2">
        {count}+
      </p>
      <p className="text-gray-500 uppercase text-xs tracking-[0.2em] font-bold">{title}</p>
    </div>
  );
};

const Hero = () => {
  const contributions = [
    { 
      field: "IT & Digital Solutions", 
      impact: "Revolutionizing industries by digitalizing 10+ startups with cutting-edge software and scalable tech architectures." 
    },
    { 
      field: "Sports Ecosystem", 
      impact: "Providing a global platform for athletes via superking.blog, enhancing talent visibility and sports journalism." 
    },
    { 
      field: "Infrastructure & Impact", 
      impact: "Driving economic growth through strategic construction projects and professional event management services." 
    }
  ];

  return (
    <div id="home" className="overflow-x-hidden">
      {/* --- ANIMATED HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center text-center bg-[#0A192F] text-white overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center"
        ></motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/50 to-[#0A192F]"></div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 px-4"
        >
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase mb-4 block">A Legacy of Excellence</span>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tight uppercase leading-none">
            SK PRIME <span className="text-[#D4AF37]">GROUP</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
            A diversified global conglomerate pioneering advancements in Technology, Professional Sports, and Urban Infrastructure.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/ventures" className="bg-[#D4AF37] text-[#0A192F] px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl">
              Explore Our Ventures
            </Link>
            <a href="https://superking.blog" target="_blank" rel="noreferrer" className="border-2 border-white/20 backdrop-blur-md px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0A192F] transition-all duration-300">
              Sports Network
            </a>
          </div>
        </motion.div>
      </header>

      {/* --- ANIMATED STATS SECTION --- */}
      <section className="bg-white py-20 px-6 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Counter value="05" title="Years of Excellence" />
          <Counter value="100" title="Projects Delivered" />
          <Counter value="20" title="Global Partners" />
          <Counter value="50" title="Athletes Managed" />
        </div>
      </section>

      {/* --- CONTRIBUTION SECTION (Professional English) --- */}
      <section className="bg-gray-50 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase mb-4">Our Footprint</h2>
              <h3 className="text-5xl font-black text-[#0A192F] leading-tight">
                Driving Meaningful Impact Across Diverse Industries
              </h3>
            </motion.div>
            <motion.p 
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.6 }}
               className="text-gray-500 max-w-sm text-lg italic"
            >
              "Under the visionary leadership of Harsh Verma, we translate complex challenges into sustainable growth opportunities."
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {contributions.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group"
              >
                <div className="w-16 h-1.5 bg-[#D4AF37] mb-8 group-hover:w-full transition-all duration-500"></div>
                <h4 className="text-2xl font-black text-[#0A192F] mb-6 uppercase tracking-tight">{item.field}</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
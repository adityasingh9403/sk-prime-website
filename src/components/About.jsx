import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, Lightbulb, TrendingUp, ShieldCheck, Award, 
  Users, Globe, Rocket, Crown, ArrowRight, Linkedin, Mail, Cpu, Briefcase 
} from 'lucide-react';

// --- SUB-COMPONENT: EXECUTIVE SECTION ---
const ExecutiveSection = ({ name, role, vision, quote, image, isReversed, icon: Icon }) => (
  /* Yaha mb-20 md:mb-40 ko kam karke mb-12 md:mb-20 kiya gaya hai */
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-12 md:mb-20">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`lg:col-span-5 ${isReversed ? 'lg:order-last' : 'lg:order-first'}`}
    >
      {/* Image container ki max-width thodi aur optimize ki hai */}
      <div className="relative max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto group">
        <div className="absolute -inset-2 border border-slate-100 rounded-[2rem] rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
        <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-xl relative z-10 border-2 border-white bg-slate-50">
          <img src={image} alt={name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className={`absolute -bottom-3 ${isReversed ? '-left-3' : '-right-3'} bg-slate-900 p-3 rounded-lg shadow-lg z-20 group-hover:scale-110 transition-transform`}>
          <Icon size={18} className="text-[#D4AF37]" />
        </div>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      /* space-y-6 ko space-y-4 kiya hai vertical gap kam karne ke liye */
      className={`lg:col-span-7 space-y-4 text-center lg:text-left ${isReversed ? 'lg:order-first' : 'lg:order-last'}`}
    >
      <div className="space-y-1">
        <span className="text-[#D4AF37] font-black text-[9px] uppercase tracking-[0.3em] border-b-2 border-[#D4AF37]/10 pb-1 inline-block">
          {role}
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-[1.1] italic font-serif">
          {name.split(' ')[0]} <br/><span className="text-[#D4AF37]">{name.split(' ').slice(1).join(' ')}</span>
        </h3>
      </div>
      
      <p className="text-sm md:text-lg text-slate-500 font-light italic border-l-4 border-slate-100 pl-4 leading-snug max-w-2xl mx-auto lg:mx-0">
        "{vision}"
      </p>

      {/* Padding p-8 ko p-5 kiya hai taaki box compact ho jaye */}
      <div className="bg-white p-5 md:p-6 rounded-[1.5rem] shadow-sm border border-slate-50 relative overflow-hidden text-left">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]" />
        <p className="text-slate-900 text-base md:text-xl font-black italic uppercase leading-tight tracking-tighter">
          "{quote}"
        </p>
      </div>

      <div className="flex justify-center lg:justify-start gap-3 pt-2">
        <button className="p-2.5 bg-slate-900 text-white rounded-lg hover:bg-[#D4AF37] transition-all shadow-md group">
          <Linkedin size={16} className="group-hover:rotate-12 transition-transform" />
        </button>
        <button className="p-2.5 bg-white text-slate-900 border border-slate-100 rounded-lg hover:border-[#D4AF37] transition-all shadow-sm group">
          <Mail size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  const missionPoints = [
    { title: "SK Prime Infotech", desc: "Architecting high-performance software and specialized tools like Restaurant POS and Smart Agriculture web apps.", icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "SK Prime Sports", desc: "Formalizing regional sports talent through elite management and flagship leagues like KCPL Season 1.", icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "SK Prime Events", desc: "Executing grand-scale corporate launches and sports events like the Shri Gaud Premier League 2026.", icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Verma Construction", desc: "Building sustainable urban infrastructure and premium property solutions across Indore.", icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" /> }
  ];

  const coreValues = [
    { title: "Excellence", desc: "Building a Legacy of Trust.", icon: <Award size={20} /> },
    { title: "Innovation", desc: "Modernizing Unorganized Markets.", icon: <Target size={20} /> },
    { title: "Empowerment", desc: "Learning-by-Doing Culture.", icon: <Users size={20} /> },
    { title: "Legacy", desc: "Building Excellence, Defining Legacy.", icon: <Globe size={20} /> }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen text-slate-900 selection:bg-[#D4AF37] selection:text-white font-sans overflow-x-hidden pt-20 md:pt-22">
      
      {/* Background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[60%] bg-amber-50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-10%] w-[50%] h-[50%] bg-blue-50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 py-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[50vh] flex flex-col justify-center items-center text-center mb-16 md:mb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md mb-8 shadow-sm">
            <Crown size={14} className="text-[#D4AF37]" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">Established 2026 Vision</span>
          </motion.div>

          <motion.h1 style={{ scale }} className="text-[14vw] lg:text-[8rem] font-black leading-[0.9] tracking-tighter mb-8 uppercase text-slate-900">
            THE GLOBAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A6E2F] via-[#D4AF37] to-[#8A6E2F] italic font-serif">CONGLOMERATE</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-2xl text-base md:text-xl text-slate-500 font-light leading-relaxed italic px-4">
            "Building Excellence. Defining Legacy." <br className="hidden sm:block"/>
            Modernizing unorganized markets through innovation, sports, and infrastructure.
          </motion.p>
        </section>

        {/* EXECUTIVE BOARD */}
        <section className="py-2 border-t border-slate-100">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Strategic Minds</h2>
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic font-serif">The <span className="text-[#D4AF37]">Executive</span> Board.</h3>
          </div>

          <ExecutiveSection 
            name="Sarika Rakesh Verma" role="The Chairman" 
            vision="Integrity and Excellence aren't just words; they are the bedrock of every brick we lay."
            quote="Building a legacy of trust and quality for the future."
            image="/sarika.jpg" icon={ShieldCheck} isReversed={false}
          />

          <ExecutiveSection 
            name="Harsh Verma" role="Founder & CEO" 
            vision="Driving a Learning-by-Doing culture to bridge the gap between regional talent and global infrastructure."
            quote="Innovation is our currency; Excellence is our standard."
            image="/harsh.webp" icon={Award} isReversed={true}
          />

          {/* CONSULTANTS GRID */}
          <div className="mt-20 border-t border-slate-50 pt-20">
            <div className="text-center mb-16">
              <h4 className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">Technical & Business Council</h4>
            </div>
            
            <ExecutiveSection name="Swapnil Porwal" role="Senior Business Consultant" vision="Strategizing market penetration and sustainable business models." quote="Strategy is about making choices." image="/swapnil.jpg" icon={Briefcase} isReversed={false} />
            <ExecutiveSection name="Avinash Kumar" role="Senior IT Consultant" vision="Defining the technological roadmap and cloud infrastructure." quote="Code is the brush, cloud is the canvas." image="/avinash.webp" icon={Cpu} isReversed={true} />
            <ExecutiveSection name="Aditya Singh" role="Technical Lead" vision="Engineering robust architectures and fostering technical innovation." quote="We don't just build apps; we build experiences." image="/myphoto.jpg" icon={ShieldCheck} isReversed={false} />
          </div>
        </section>

        {/* FOOTPRINT CARDS */}
        <section className="py-20 md:py-32">
          <div className="mb-16 text-center">
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter">Core <span className="text-[#D4AF37] italic font-serif">Impact.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {missionPoints.map((point, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="group bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-500 relative">
                <div className="relative z-10">
                   <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#B8860B] flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] group-hover:text-white transition-all">{point.icon}</div>
                   <h3 className="text-lg font-bold uppercase mb-4 text-slate-900 tracking-tight">{point.title}</h3>
                   <p className="text-slate-500 text-[13px] leading-relaxed">{point.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                   Discover <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="mb-20 md:mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 bg-slate-900 p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-white flex flex-col justify-center text-center lg:text-left shadow-xl">
                 <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic font-serif">Our <span className="text-[#D4AF37]">DNA.</span></h3>
                 <p className="text-slate-400 text-sm italic font-light">Fundamental principles driving SK Prime Group's expansion.</p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                 {coreValues.map((val, i) => (
                   <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-white border border-slate-100 flex items-center gap-5 group hover:shadow-md transition-all">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-900 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all">{val.icon}</div>
                      <div>
                         <h4 className="font-bold uppercase text-sm text-slate-800 tracking-tight">{val.title}</h4>
                         <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{val.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA SECTION */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-900 p-10 md:p-24 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]" />
          <h2 className="relative z-10 text-3xl md:text-7xl font-black uppercase tracking-tighter mb-10 text-white leading-tight">
            BUILDING THE <br className="hidden md:block" /> FUTURE <span className="text-[#D4AF37] italic font-serif">LEGACY.</span>
          </h2>
          <button className="relative z-10 bg-[#D4AF37] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-900 transition-all shadow-xl active:scale-95">
            Partner with us
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
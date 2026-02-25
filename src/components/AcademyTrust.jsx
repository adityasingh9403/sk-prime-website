import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Rocket, Globe, ChevronRight, Crown, Laptop, Database, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyTrust = () => {
  const steps = [
    {
      title: "Mastery Phase",
      desc: "Deep dive into React, Vite, and Tailwind CSS to build production-ready UIs.",
      icon: <Code2 size={28} strokeWidth={1.5} />
    },
    {
      title: "Live Product Lab",
      desc: "Direct involvement in SK Prime's active projects like Restaurant POS and Ag-Tech solutions.",
      icon: <Terminal size={28} strokeWidth={1.5} />
    },
    {
      title: "Core Placement",
      desc: "Absorption into the SK Core Team or our strategic global partners upon completion.",
      icon: <Rocket size={28} strokeWidth={1.5} />
    }
  ];

  const liveProjects = [
    { name: "RESTAURANT POS (SK PRIME)", status: "In Deployment", progress: 85 },
    { name: "SMART AG WEB APP", status: "Active Scaling", progress: 60 },
    { name: "KCPL PLAYER PORTAL", status: "System Architecture", progress: 40 }
  ];

  return (
    <section className="bg-[#fcfcfd] py-35 px-6 relative overflow-hidden selection:bg-[#D4AF37] selection:text-white font-sans">

      {/* --- AMBIENT TECH BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-50/50 blur-[120px] rounded-full"></div>

        {/* Subtle Dot Grid (Dev Feel) */}
        <div className="absolute inset-0"
          style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* --- SECTION HEADER --- */}
        <div className="mb-10 flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-slate-100 pb-3 text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-6 py-2 px-5 rounded-full border border-slate-200 bg-white shadow-sm"
            >
              <Crown size={14} className="text-[#D4AF37]" />
              <span className="text-slate-500 font-black tracking-[0.4em] uppercase text-[9px]">Talent Incubation Center</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none"
            >
              THE TECH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A6E2F] via-[#D4AF37] to-[#8A6E2F] italic font-serif">
                ACADEMY.
              </span>
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 max-w-sm shadow-xl shadow-slate-200/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-900 group-hover:bg-[#D4AF37] transition-colors" />
            <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-3">Core Philosophy</p>
            <p className="text-slate-600 font-medium text-xs leading-relaxed italic">
              Fostering a 'Learning-by-Doing' culture for the next generation of global tech leaders.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Roadmap Grid (Left) */}
          <div className="lg:col-span-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white border border-slate-100 rounded-[2.5rem] group transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-2xl"
                >
                  <div className="absolute -top-5 -right-5 text-8xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
                    0{i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-[#D4AF37] transition-all">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4">{step.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium transition-colors">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Horizontal Panel */}
            <motion.div
              className="p-12 bg-white border border-slate-100 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative group shadow-sm"
            >
              <div className="relative z-10 text-center md:text-left">
                <h5 className="text-[#D4AF37] font-black uppercase text-[10px] tracking-[0.4em] mb-2">Global Curriculum</h5>
                <p className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">Industry-Standard <br /> Technology Stack</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 relative z-10 max-w-md">
                {['React.js', 'Vite', 'Tailwind', 'Framer', 'Cloud', 'Node.js'].map((tech, i) => (
                  <span key={i} className="px-5 py-2.5 bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-default rounded-xl">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Live Status Panel (Right) */}
          <motion.div
            className="lg:col-span-4 bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group h-full flex flex-col justify-between"
          >
            {/* Dynamic Globe Ornament */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3">
              <Globe size={400} className="text-[#D4AF37] animate-[spin_60s_linear_infinite]" />
            </div>

            <div className="relative z-10">
              <h4 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.5em] mb-16 flex items-center gap-4">
                <span className="w-10 h-0.5 bg-[#D4AF37]"></span> SYSTEM PULSE
              </h4>

              <div className="space-y-12">
                {liveProjects.map((project, i) => (
                  <div key={i} className="relative group/line">
                    <div className="flex justify-between mb-4 items-end">
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider italic">{project.name}</span>
                      <span className="text-[#D4AF37] text-sm font-black">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white/5 h-[4px] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-amber-200 to-[#D4AF37] relative"
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse shadow-[0_0_8px_#D4AF37]"></div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black">{project.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-16">
              <Link to="/careers" className="block w-full">
                <button className="w-full py-5 bg-[#D4AF37] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                  Apply for Entry <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademyTrust;
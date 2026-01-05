import React from 'react';
import { motion } from 'framer-motion';

const AcademyTrust = () => {
  const steps = [
    { title: "Skill Phase", desc: "React, Tailwind & UI/UX Mastery.", icon: "💻" },
    { title: "Live Build", desc: "Working on SK Sports E-comm & CRM.", icon: "🛠️" },
    { title: "Placement", desc: "Hire in SK Core Team or Partners.", icon: "🚀" }
  ];

  const liveProjects = [
    { name: "SK Ground Aggregator", status: "In Development", progress: 75 },
    { name: "KCPL Season 2 Portal", status: "Planning Phase", progress: 30 }
  ];

  return (
    <section className="bg-white py-24 px-6 text-[#0A192F]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-4">SK IT Academy</h2>
          <h3 className="text-5xl font-black uppercase tracking-tighter">Not Just Coaching.<br/><span className="text-gray-400">A Career Factory.</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Roadmap */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all">
                <div className="text-4xl mb-6">{step.icon}</div>
                <h4 className="text-xl font-black uppercase mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Live Project Tracker */}
          <div className="bg-[#0A192F] p-10 rounded-[2.5rem] text-white">
            <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-8">Live Lab Status</h4>
            <div className="space-y-8">
              {liveProjects.map((project, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-bold uppercase">{project.name}</span>
                    <span className="text-[#D4AF37] text-xs font-mono">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      className="h-full bg-[#D4AF37]"
                    />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">{project.status}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 bg-[#D4AF37] text-[#0A192F] font-black text-xs uppercase tracking-[0.2em] rounded-xl">
              Apply for Internship
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyTrust;
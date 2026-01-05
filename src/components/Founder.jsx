import React from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ name, role, image, isSmall = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center group"
  >
    <div className={`overflow-hidden rounded-2xl border-2 border-white/10 group-hover:border-[#D4AF37] transition-all duration-500 shadow-xl ${isSmall ? 'w-48 h-48' : 'w-full aspect-[4/5]'}`}>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
      />
    </div>
    <div className="mt-6 text-center">
      <h4 className={`font-black text-[#0A192F] uppercase tracking-tighter ${isSmall ? 'text-lg' : 'text-2xl'}`}>{name}</h4>
      <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mt-1">{role}</p>
    </div>
  </motion.div>
);

const Founder = () => {
  const coFounders = [
    { name: "Avinash Kumar", role: "Co-Founder & COO", image: "/avinash.webp" },
    { name: "Aditya Singh", role: "Co-Founder & CTO", image: "/myphoto.jpg" },
  ];

  const boardMembers = [
    { name: "Member Name", role: "Head of IT", image: "https://via.placeholder.com/300x300?text=IT+Head" },
    { name: "Member Name", role: "Event Director", image: "https://via.placeholder.com/300x300?text=Events" },
    { name: "Member Name", role: "Const. Lead", image: "https://via.placeholder.com/300x300?text=Construction" },
  ];

  return (
    <section className="bg-white pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. MAIN FOUNDER SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-b-8 border-[#D4AF37]">
              <img 
                src="/harsh.webp" 
                alt="Harsh Verma" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#0A192F] text-white p-10 rounded-3xl hidden lg:block shadow-2xl">
              <p className="text-[#D4AF37] font-black text-3xl tracking-tighter uppercase">Harsh Verma</p>
              <p className="text-sm opacity-60 uppercase tracking-[0.3em] mt-2 font-bold">Founder & Chairman</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-[#D4AF37] font-black tracking-[0.3em] uppercase text-sm italic">The Visionary Leader</h2>
            <h3 className="text-5xl md:text-7xl font-black text-[#0A192F] leading-none uppercase italic underline decoration-[#D4AF37] decoration-8">
              Leading the <br/> Future.
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mt-4">
              SK Prime Group was established under the leadership of Harsh Verma with a core philosophy of "Excellence through Integrity." From digital landscapes to physical infrastructures, Harsh’s vision drives our diverse global operations.
            </p>
            <div className="mt-6 p-8 bg-gray-50 border-l-4 border-[#D4AF37] italic text-gray-500 text-xl font-light">
              "We are not just building businesses; we are architecting a legacy of trust and innovation for generations to come."
            </div>
          </motion.div>
        </div>

        {/* 2. CO-FOUNDERS SECTION (Symmetric 2-Column Grid) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-[#0A192F] text-3xl font-black uppercase tracking-tighter">The Board of Partners</h3>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {coFounders.map((cf, i) => (
              <TeamCard key={i} {...cf} />
            ))}
          </div>
        </div>

        {/* 3. KEY MEMBERS SECTION (3-Column Smaller Cards) */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-[#0A192F] text-2xl font-black uppercase tracking-tighter opacity-50 underline underline-offset-8 decoration-[#D4AF37]">Executive Team</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {boardMembers.map((bm, i) => (
              <TeamCard key={i} {...bm} isSmall={true} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Activity, Cpu, Building2, Trophy, Globe, Crown, ShieldCheck,Target, Globe2, Rocket } from 'lucide-react';

// --- SUB-COMPONENT: COUNTER ---
const Counter = ({ value, title, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const target = parseInt(value);
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 30);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="group p-8 md:p-10 border-b border-slate-100 last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0 flex flex-col items-center justify-center transition-all hover:bg-slate-50/50">
      <div className="mb-4 text-[#B8860B] group-hover:scale-110 transition-transform duration-500">
        <Icon size={32} strokeWidth={1.2} />
      </div>
      <p className="text-4xl md:text-5xl font-light text-slate-800 mb-2 tracking-tighter">
        {count}<span className="text-[#D4AF37] font-normal">+</span>
      </p>
      <p className="text-slate-500 uppercase text-[9px] md:text-[10px] tracking-[0.3em] font-black text-center leading-relaxed">
        {title}
      </p>
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  // Cinematic Parallax Effects
  const bgY = useTransform(scrollY, [0, 1000], [0, 250]);
  const textY = useTransform(scrollY, [0, 500], [0, 80]);

  const verticals = [
    {
      name: "SK Prime Infotech",
      desc: "Architecting the digital future with high-performance software, cloud architectures, and specialized POS systems.",
      icon: <Cpu size={28} />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "SK Prime Sports",
      desc: "Elevating regional talent through elite management, professional leagues, and the iconic KCPL network.",
      icon: <Trophy size={28} />,
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop"
    },
    {
      name: "SK Prime Events",
      desc: "Crafting legendary experiences through precision planning and grand-scale corporate and social execution.",
      icon: <Crown size={28} />,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Verma Properties and Construction",
      desc: "Defining cityscapes with premium infrastructure, sustainable development, and transparent urban brokerage.",
      icon: <Building2 size={28} />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div id="home" className="bg-[#FDFDFD] selection:bg-[#D4AF37] selection:text-white overflow-x-hidden font-sans">

      {/* --- CINEMATIC HERO SECTION --- */}
      {/* pt-[80px] added to prevent content from hiding behind the fixed Navbar */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001233] pt-[80px]">

        {/* Parallax Background */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="SK Prime Corporate"
            className="w-full h-full object-cover opacity-40 grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001233]/80 via-transparent to-[#FDFDFD]"></div>
        </motion.div>

        {/* Hero Content Wrapper */}
        <motion.div style={{ y: textY }} className="relative z-20 text-center px-4 md:px-6 max-w-7xl pt-12 md:pt-0">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 md:gap-3 mb-8 py-2 px-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            <Crown size={14} className="text-[#D4AF37]" />
            <span className="text-white text-[8px] md:text-[10px] font-black tracking-[0.4em] uppercase">
              The 2026 Visionary Legacy
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] md:text-[7.5rem] font-black leading-[1] md:leading-[0.85] tracking-tighter uppercase mb-8"
          >
            <span className="text-white drop-shadow-2xl">BUILDING EXCELLENCE</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F9E29C] via-[#D4AF37] to-[#8A6E2F] italic font-serif">
              DEFINING LEGACY
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-base md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed italic px-4"
          >
            A global powerhouse transforming unorganized markets into
            <span className="text-[#D4AF37] font-bold"> structured legacies </span>
            through disruptive innovation and integrity.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link to="/ventures" className="w-full sm:w-auto bg-[#D4AF37] text-[#001233] px-10 py-5 font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-2xl">
              Explore Our World
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-black text-[11px] uppercase tracking-[0.2em] backdrop-blur-md hover:bg-white hover:text-[#001233] transition-all duration-500">
              Initiate Inquiry
            </Link>
          </div>
        </motion.div>

        {/* Animated Scroll Line */}
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent z-20"
        />
      </header>

      <section className="relative py-10 bg-white overflow-hidden">
        {/* Background Subtle Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Side: What We Do (The Core Vision) */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20"
              >
                <Target size={14} className="text-[#D4AF37]" />
                <span className="text-[#8A6E2F] text-[10px] font-black uppercase tracking-[0.3em]">Our Identity</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-black text-[#001233] leading-[1.1] tracking-tighter uppercase italic"
              >
                Architecting <span className="text-[#D4AF37]">Structured</span> <br />
                Legacies From Scratch.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl italic"
              >
                "SK Prime Group isn't just a business; it's a bridge. We take unorganized regional sectors and transform them into global-standard corporate powerhouses through disruptive innovation and absolute integrity."
              </motion.p>
            </div>

            {/* Right Side: Who We Help (Target Audience Cards) */}
            <div className="lg:col-span-5 grid gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#001233] text-white border-l-4 border-[#D4AF37] shadow-2xl"
              >
                <Globe2 size={32} className="text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Regional Talent</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Empowering local athletes and creators (like KCPL) by providing professional platforms to showcase their skills to the world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-white border border-slate-100 shadow-xl"
              >
                <Rocket size={32} className="text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-bold text-[#001233] mb-3 uppercase tracking-tight">Visionary Businesses</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Helping local enterprises digitize and scale with high-end tech (Hisaab Kitaab) and strategic infrastructure.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      {/* --- FLOATING STATS SECTION --- */}
      <section className="relative z-30 px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-3xl border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Counter value="15" title="Projects Delivered" icon={Activity} />
            <Counter value="04" title="Strategic Sectors" icon={Globe} />
            <Counter value="25" title="Core Leadership" icon={ShieldCheck} />
            <Counter value="50" title="Global Talent" icon={Trophy} />
          </div>
        </div>
      </section>

      {/* --- VERTICALS GRID SECTION --- */}
      <section className="py-10 md:py-15 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-[#D4AF37] font-black tracking-[0.5em] uppercase text-[10px] mb-6">Our Ecosystem</h2>
            <h3 className="text-5xl md:text-8xl font-black text-[#001233] tracking-tighter uppercase italic leading-none">
              Core Impact <span className="text-slate-200 block lg:inline">Areas</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verticals.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="group relative bg-white border border-slate-100 overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                {/* Hover Image Background */}
                <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-700">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500 grayscale" />
                </div>

                <div className="relative p-10 z-10 h-full flex flex-col min-h-[420px]">
                  {/* Icon & Index */}
                  <div className="relative mb-12">
                    <div className="w-16 h-16 bg-[#001233] flex items-center justify-center text-[#D4AF37] shadow-xl group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="absolute -top-6 -right-2 text-5xl font-black text-slate-50 group-hover:text-[#D4AF37]/5 transition-colors pointer-events-none">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-[#001233] mb-5 tracking-tighter uppercase italic">
                    {item.name}
                  </h4>

                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">
                    {item.desc}
                  </p>

                  <Link
                    to="/ventures"
                    className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-[#001233] uppercase group-hover:text-[#D4AF37] transition-colors"
                  >
                    View Venture <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#D4AF37] group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
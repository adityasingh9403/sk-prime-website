import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin, Youtube, Twitter, ArrowUpRight, Crown } from 'lucide-react';

const Logo = "/skprimegrouplogo.png";

const Footer = () => {
  // Social Links Data - Ek hi jagah maintain karne ke liye
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/skprimegroup' },
    { name: 'Linkedin', icon: Linkedin, url: 'https://www.linkedin.com/company/sk-prime-group-private-limited' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/skprimegroup' },
    { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@skprimegroup' }
  ];

  return (
    <footer className="bg-[#001233] text-white pt-10 pb-12 px-6 md:px-12 relative overflow-hidden">

      {/* --- DESIGNER BORDERS --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      <div className="absolute top-[4px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-4">

          {/* Section 1: The Legacy Identity */}
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">

            <Link
              to="/"
              className="flex flex-col items-center lg:items-start gap-4 group"
            >
              {/* Logo Container - Margin auto handles mobile centering */}
              <div className="relative w-24 h-24 mb-2 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-[#D4AF37]/40 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                {/* Agar Logo import kiya hai toh src={Logo} use karein, varna path "/verma_logo.png" */}
                <img
                  src={Logo}
                  alt="SK Prime Group"
                  className="relative h-14 w-14 object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-serif font-bold tracking-tight text-white uppercase leading-none">
                  SK <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F9E29C] to-[#D4AF37]">PRIME</span>
                </span>
                <span className="text-[9px] tracking-[0.5em] font-bold text-[#D4AF37] uppercase mt-2 italic">
                  Building Excellence
                </span>
              </div>
            </Link>

            {/* Description Text */}
            <p className="text-slate-400 text-sm leading-relaxed font-light italic max-w-xs md:max-w-sm lg:max-w-none">
              A global conglomerate architecting the future through innovation, integrity, and a commitment to defining legacy.
            </p>

          </div>

          {/* Section 2: Navigation Links */}
          <div className="lg:pl-10 flex flex-col items-center lg:items-start w-full">

            {/* Header - Centered on mobile/tablet, Left on Laptop */}
            <h4 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-10 border-b border-[#D4AF37]/20 pb-4 flex items-center justify-center lg:justify-start gap-2 w-full max-w-[200px] lg:max-w-none">
              <Crown size={12} /> Navigation
            </h4>

            {/* List - Center aligned items on mobile */}
            <ul className="grid grid-cols-1 gap-4 w-full">
              {['Home', 'About Us', 'Ventures', 'Gallery', 'Academy', 'Contact'].map((item) => (
                <li key={item} className="flex justify-center lg:justify-start">
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-slate-300 hover:text-[#D4AF37] text-xs font-bold transition-all duration-300 flex items-center group gap-3 uppercase tracking-widest"
                  >
                    {/* Dot - Hidden on mobile if you want perfect center, or kept for style */}
                    <div className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>

                    {item}

                    {/* Optional: Dot on the other side for symmetry in mobile center */}
                    <div className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-all lg:hidden"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Headquarters */}
          <div className="flex flex-col items-center lg:items-start w-full">
            {/* Header - Centered on mobile/tablet, Left on Laptop */}
            <h4 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-10 border-b border-[#D4AF37]/20 pb-4 w-full text-center lg:text-left">
              Headquarters
            </h4>

            <div className="space-y-8 text-xs text-slate-300 tracking-wide font-medium w-full flex flex-col items-center lg:items-start">

              {/* Address Item */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group text-center lg:text-left">
                <MapPin size={18} className="text-[#D4AF37] shrink-0" />
                <p className="leading-relaxed group-hover:text-white transition-colors uppercase italic">
                  Office No. 1, SR Empire, Silver Star City, <br /> Rau, Indore, MP - 452012
                </p>
              </div>

              {/* Phone Link - Mobile pe border niche (Bottom) laptop pe side mein (Left) */}
              <a
                href="tel:+918878740101"
                className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group border-b-2 lg:border-b-0 lg:border-l-2 border-[#D4AF37]/20 pb-2 lg:pb-0 lg:pl-4 hover:border-[#D4AF37] transition-all text-center lg:text-left w-fit"
              >
                <div className="flex flex-col">
                  <span className="text-[8px] text-[#D4AF37] mb-1">CALL OFFICIAL</span>
                  <span className="group-hover:text-white transition-colors tracking-widest">+91 88787 40101</span>
                </div>
              </a>

              {/* Email Link */}
              <a
                href="mailto:contact@skprimegroup.in"
                className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group border-b-2 lg:border-b-0 lg:border-l-2 border-[#D4AF37]/20 pb-2 lg:pb-0 lg:pl-4 hover:border-[#D4AF37] transition-all text-center lg:text-left w-fit"
              >
                <div className="flex flex-col">
                  <span className="text-[8px] text-[#D4AF37] mb-1">EMAIL INQUIRY</span>
                  <span className="group-hover:text-white transition-colors lowercase">contact@skprimegroup.in</span>
                </div>
              </a>

            </div>
          </div>

          {/* Section 4: Social Identity - Fully Responsive */}
          <div className="flex flex-col items-center lg:items-end w-full">
            {/* Header - Center on mobile, Right on Laptop */}
            <h4 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-10 border-b border-[#D4AF37]/20 pb-4 w-full text-center lg:text-right">
              Social Connect
            </h4>

            {/* Icons Grid - Center on mobile, End on Laptop */}
            <div className="flex justify-center lg:justify-end gap-3 mb-10 w-full">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#0f172a] text-[#D4AF37] transition-all duration-500 rounded-sm bg-[#D4AF37]/5"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>

            {/* Global Presence Box - Centered text on mobile */}
            <div className="inline-block p-6 border border-[#D4AF37]/10 bg-[#D4AF37]/5 text-center lg:text-right w-full lg:w-auto">
              <p className="text-[9px] text-[#D4AF37] font-black tracking-[0.3em] uppercase mb-2">
                Global Presence
              </p>
              <p className="text-white text-sm font-serif italic tracking-widest font-bold uppercase">
                Indore
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section - Fully Responsive */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">

          {/* Copyright Info - Centered on Mobile */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="hidden sm:block h-[1px] w-8 bg-[#D4AF37]/40"></div>
            <p className="text-[9px] font-bold tracking-[0.3em] text-slate-500 uppercase text-center">
              © 2026 SK PRIME GROUP PRIVATE LIMITED.
            </p>
          </div>

          {/* Legal Links - Center on mobile, Right on Desktop */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase px-4">
            {['Privacy Policy', 'Terms of Service', 'Legal'].map((legal) => (
              <span
                key={legal}
                className="hover:text-[#D4AF37] cursor-pointer transition-colors relative group whitespace-nowrap"
              >
                {legal}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
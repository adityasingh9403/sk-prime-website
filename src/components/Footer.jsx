import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin, Youtube, Twitter, ArrowUpRight, Crown } from 'lucide-react';

const Logo = "/skprimegrouplogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001233] text-white pt-10 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* --- DESIGNER BORDERS (Image Inspired) --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      <div className="absolute top-[4px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-4">

          {/* Section 1: The Legacy Identity */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col gap-4 group">
              <div className="relative w-20 h-20 mb-2">
                <div className="absolute inset-0 border-2 border-[#D4AF37]/40 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                <img src={Logo} alt="SK Prime Group" className="absolute inset-0 m-auto h-12 w-12" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold tracking-tight text-white uppercase leading-none">
                  SK <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F9E29C] to-[#D4AF37]">PRIME</span>
                </span>
                <span className="text-[9px] tracking-[0.5em] font-bold text-[#D4AF37] uppercase mt-2 italic">Building Excellence</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light italic">
              "A global conglomerate architecting the future through innovation, integrity, and a commitment to defining legacy."
            </p>
          </div>

          {/* Section 2: Navigation Links */}
          <div className="lg:pl-10">
            <h4 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-10 border-b border-[#D4AF37]/20 pb-4 flex items-center gap-2">
              <Crown size={12} /> Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {['Home', 'About Us', 'Ventures', 'Gallery', 'Academy', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-slate-300 hover:text-[#D4AF37] text-xs font-bold transition-all duration-300 flex items-center group gap-3 uppercase tracking-widest"
                  >
                    <div className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Headquarters */}
          <div>
            <h4 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-10 border-b border-[#D4AF37]/20 pb-4">
              Headquarters
            </h4>
            <div className="space-y-8 text-xs text-slate-300 tracking-wide font-medium">
              <div className="flex gap-4 group">
                <MapPin size={18} className="text-[#D4AF37] shrink-0" />
                <p className="leading-relaxed group-hover:text-white transition-colors uppercase italic">
                  G1, SR Empire, Silver Star City, <br/> Rau, Indore, MP - 452012
                </p>
              </div>
              <a href="tel:+918878740101" className="flex gap-4 group items-center border-l-2 border-[#D4AF37]/20 pl-4 hover:border-[#D4AF37] transition-all">
                <div className="flex flex-col">
                  <span className="text-[8px] text-[#D4AF37] mb-1">CALL OFFICIAL</span>
                  <span className="group-hover:text-white transition-colors">+91 88787 40101</span>
                </div>
              </a>
              <a href="mailto:contact@skprimegroup.in" className="flex gap-4 group items-center border-l-2 border-[#D4AF37]/20 pl-4 hover:border-[#D4AF37] transition-all">
                <div className="flex flex-col">
                  <span className="text-[8px] text-[#D4AF37] mb-1">EMAIL INQUIRY</span>
                  <span className="group-hover:text-white transition-colors lowercase">contact@skprimegroup.in</span>
                </div>
              </a>
            </div>
          </div>

          {/* Section 4: Social Identity */}
          <div className="lg:text-right">
            <h4 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-10 border-b border-[#D4AF37]/20 pb-4 lg:text-right">
              Social Connect
            </h4>

            <div className="flex justify-start lg:justify-end gap-3 mb-10">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#001233] text-[#D4AF37] transition-all duration-500 rounded-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="inline-block p-6 border border-[#D4AF37]/10 bg-[#D4AF37]/5 text-left lg:text-right">
              <p className="text-[9px] text-[#D4AF37] font-black tracking-[0.3em] uppercase mb-2">Global Presence</p>
              <p className="text-white text-sm font-serif italic tracking-widest font-bold uppercase">Indore</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-8 bg-[#D4AF37]/40"></div>
            <p className="text-[9px] font-bold tracking-[0.3em] text-slate-500 uppercase">
              © 2026 SK PRIME GROUP PRIVATE LIMITED.
            </p>
          </div>
          
          <div className="flex gap-10 text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
            {['Privacy Policy', 'Terms of Service', 'Legal'].map((legal) => (
              <span key={legal} className="hover:text-[#D4AF37] cursor-pointer transition-colors relative group">
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
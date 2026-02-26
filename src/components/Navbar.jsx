import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Crown, User, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Departments & Sections
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Ventures', path: '/ventures' },
    { name: 'Academy', path: '/academy' },
    { name: 'Careers', path: '/careers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Global Branding Styles
  const activeLinkStyle = "text-[#D4AF37] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4AF37]";
  const normalLinkStyle = "text-white/80 hover:text-white transition-all duration-300";

  return (
    <nav
      className="fixed top-0 w-full z-[100] bg-[#001233] border-b border-[#D4AF37]/20 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center">

          {/* --- LOGO SECTION --- */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src="/skprimegrouplogo.png"
                  alt="SK Prime Logo"
                  className="h-10 w-10 md:h-12 md:w-12 relative z-10 border border-[#D4AF37]/30 rounded-full bg-[#001233]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white leading-none tracking-tighter uppercase">
                  SK <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F9E29C] to-[#D4AF37]">PRIME GROUP</span>
                </span>
                <span className="text-[9px] tracking-[0.4em] font-black text-[#D4AF37] uppercase mt-1">
                  PRIVATE LIMITED
                </span>
              </div>
            </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center">
            {/* Left Part: Navigation Links */}
            <div className="flex items-center space-x-8 border-r border-gray-200 pr-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${isActive ? activeLinkStyle : normalLinkStyle
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right Part: Actions (Admin + Call) */}
            <div className="flex items-center pl-8 gap-6">
              {/* Admin Portal Link */}
              <Link
                to="/login"
                className="flex items-center gap-2 group transition-all"
                title="Admin Portal"
              >
                <div className="p-2 rounded-full border border-gray-200 text-[#0f172a] group-hover:border-[#f59e0b] group-hover:text-[#f59e0b] transition-all duration-300">
                  <User size={16} strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-black text-[#0f172a] uppercase tracking-widest group-hover:text-[#f59e0b] transition-colors">
                  Admin
                </span>
              </Link>

              {/* Call Action Button */}
              <a
                href="tel:+918878740101"
                className="group relative overflow-hidden bg-[#0f172a] text-white px-6 py-3 rounded-md font-black flex items-center gap-3 hover:bg-[#f59e0b] hover:text-[#0f172a] transition-all shadow-md"
              >
                <Phone size={14} fill="currentColor" />
                <span className="text-[10px] uppercase tracking-[0.15em] leading-none">Connect Now</span>

                {/* Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 group-hover:animate-shine" />
              </a>
            </div>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="lg:hidden flex items-center gap-4">
            <Link to="/login" className="text-[#D4AF37] p-2">
              <User size={24} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#D4AF37] p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE SIDEBAR --- */}
      <div className={`lg:hidden fixed inset-0 top-[80px] w-full h-[calc(100vh-80px)] bg-[#001233] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-start items-center pt-10 px-10 space-y-7">

          {/* Mobile Admin Link */}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-8 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] mb-4"
          >
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Staff Portal Access</span>
          </Link>

          {navLinks.map((link, idx) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-bold uppercase tracking-tighter transition-all ${isActive ? 'text-[#D4AF37] italic' : 'text-white/40'
                }`
              }
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-[#D4AF37]/40 font-sans tracking-[0.5em]">0{idx + 1}</span>
                {link.name}
              </div>
            </NavLink>
          ))}

          <div className="pt-10 w-full">
            <a
              href="tel:+918878740101"
              className="w-full bg-[#D4AF37] text-[#001233] text-center py-5 rounded-sm font-black uppercase tracking-[0.3em] text-xs shadow-2xl block"
              onClick={() => setIsOpen(false)}
            >
              Initiate Inquiry
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 0.8s;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
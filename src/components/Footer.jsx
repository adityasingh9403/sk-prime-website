import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050C16] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-3xl font-black tracking-tighter uppercase mb-4">
              SK <span className="text-[#D4AF37]">PRIME</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left max-w-xs">
              A diversified global conglomerate leading innovation in Tech, Sports, and Infrastructure. 
              <span className="block mt-2 font-bold text-[#D4AF37]/80">A Harsh Verma Initiative.</span>
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6">
              Navigation
            </h4>
            <div className="flex flex-col items-center gap-3">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/founder" className="footer-link">Founder</Link>
              <Link to="/ventures" className="footer-link">Ventures</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Column 3: Social & Contact */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6">
              Connect
            </h4>

            <a
              href="mailto:info@superking.blog"
              className="flex items-center gap-2 text-[#D4AF37] mb-6 hover:underline"
            >
              <Mail size={16} />
              info@superking.blog
            </a>

            <div className="flex gap-6">
              <a href="#" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-bold tracking-[0.2em] uppercase">
          <p>© 2026 SK PRIME GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

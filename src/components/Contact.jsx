import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Instagram, Linkedin, Twitter, MapPin, Globe, ArrowUpRight, Navigation, Crown,Clock } from 'lucide-react';

const ContactCard = ({ title, value, link, icon: Icon }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -8 }}
    className="bg-white border border-slate-100 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-center gap-4 md:gap-6 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden"
  >
    {/* Decorative Background Element */}
    <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-slate-50 rounded-bl-[2.5rem] md:rounded-bl-[3rem] -z-10 group-hover:bg-amber-50 transition-colors" />

    <div className="p-3 md:p-4 bg-slate-900 text-[#D4AF37] rounded-xl md:rounded-2xl group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500 shadow-lg shrink-0">
      <Icon size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
    </div>

    <div className="text-left overflow-hidden">
      <p className="text-slate-400 group-hover:text-[#D4AF37] text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-1 transition-colors">
        {title}
      </p>
      <p className="text-slate-900 font-bold text-xs md:text-sm tracking-tight truncate">
        {value}
      </p>
    </div>
    <ArrowUpRight className="ml-auto text-slate-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" size={16} />
  </motion.a>
);

const Contact = () => {
  const contacts = [
    { title: "Direct Line", value: "+91 88787 40101", link: "tel:+918878740101", icon: Phone },
    { title: "Global Inquiries", value: "info@skprimegroup.com", link: "mailto:info@skprimegroup.com", icon: Mail },
    { title: "WhatsApp", value: "+91 88787 40101", link: "https://wa.me/918878740101", icon: MessageCircle },
    { title: "Instagram", value: "@skprimegroup", link: "https://www.instagram.com/skprimegroup/", icon: Instagram },
    { title: "LinkedIn", value: "SK Prime Group", link: "https://www.linkedin.com/company/sk-prime-group-private-limited", icon: Linkedin },
    { title: "Twitter / X", value: "@skprimegroup", link: "https://x.com/skprimegroup", icon: Twitter },
  ];

  return (
    <section id="contact" className="min-h-screen pt-24 md:pt-40 pb-16 px-4 md:px-6 relative overflow-hidden selection:bg-[#D4AF37] selection:text-white font-sans bg-[#fcfcfd]">

      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-blue-50/50 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-amber-50/40 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-10 md:mb-20 lg:mb-32 px-4 w-full">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md mb-6 md:mb-8 shadow-sm"
          >
            <Crown size={14} className="text-[#D4AF37] shrink-0" />
            <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-500 whitespace-nowrap">
              Global Connectivity Center
            </span>
          </motion.div>

          {/* Main Title - Responsive Sizing */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[12vw] sm:text-6xl md:text-7xl lg:text-[8.5rem] font-black uppercase tracking-tighter mb-6 md:mb-8 leading-[1] md:leading-[0.85] text-slate-900"
          >
            <span className="block">INITIATE</span>
            {/* Tablet/Desktop line break hidden on small mobile if needed, but 'block' handles it best */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A6E2F] via-[#D4AF37] to-[#8A6E2F] italic font-serif font-light block mt-1 md:mt-2">
              COMMUNICATION.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-sm md:text-xl lg:text-2xl text-slate-500 font-light leading-relaxed italic px-2 md:px-6">
              <span className="text-slate-900 font-medium md:block mb-1">Your vision deserves a legacy.</span>
              Connect with our central command for strategic <br className="hidden md:block" /> global partnerships.
            </p>
          </motion.div>
        </div>

        {/* --- CONTACT GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-40">
          {contacts.map((c, i) => (
            <ContactCard key={i} {...c} />
          ))}
        </div>
        <section className="py-12 md:py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left Side: Content & Details */}
              <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 group hover:bg-slate-900 transition-all duration-500 shadow-sm">
                    <MapPin className="text-slate-900 group-hover:text-[#D4AF37]" size={24} />
                  </div>

                  <h3 className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Corporate Headquarters</h3>

                  <h4 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none text-slate-900">
                    INDORE <span className="italic font-serif font-light text-slate-300 text-3xl md:text-5xl">HUB</span>
                  </h4>

                  <div className="space-y-6 mb-10">
                    <p className="text-slate-600 text-lg md:text-xl font-light leading-snug italic">
                      Shop No. G1, SR Empire, <br />
                      <span className="text-slate-900 font-black not-italic">Silver Star City, Rau, Indore</span>
                    </p>

                    {/* Status / Hours Badge */}
                    <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
                      <Clock size={14} className="text-[#D4AF37]" />
                      <span>Mon - Fri: 10:30 AM - 07:00 PM</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.google.com/maps/place/SK+Prime+Group+Private+Limited/@22.6433865,75.8387294,17z/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-slate-900 text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
                    >
                      <Navigation size={16} /> Get Directions
                    </a>
                    <a
                      href="https://skprimegroup.com/"
                      className="group border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                    >
                      <Globe size={16} className="group-hover:rotate-12 transition-transform" /> Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: Interactive Map */}
              <div className="h-[400px] lg:h-auto min-h-[400px] relative grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.65884949141!2d75.8361544759654!3d22.64338649449838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fb0f11556ead%3A0xbf410c7ca4a4529b!2sSK%20Prime%20Group%20Private%20Limited!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SK Prime Group Office Location"
                  className="absolute inset-0"
                ></iframe>
              </div>

            </div>
          </motion.div>
        </section>
        {/* --- FOOTER TAG --- */}
        <div className="mt-20 md:mt-32 text-center">
          <div className="w-full h-px bg-slate-100 mb-8 md:mb-10" />
          <p className="text-slate-300 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] px-4">
            SK PRIME GROUP PRIVATE LIMITED • © 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
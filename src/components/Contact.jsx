import React from 'react';
import { motion } from 'framer-motion';

const ContactCard = ({ title, value, link, icon, color }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -5 }}
    className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-all group"
  >
    <div className={`text-3xl p-3 rounded-xl bg-opacity-10 ${color}`}>
      {icon}
    </div>
    <div className="text-left">
      <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold">{title}</p>
      <p className="text-white font-medium text-sm md:text-base group-hover:text-[#D4AF37] transition-colors">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const contacts = [
    { title: "Direct Call", value: "+91 98765 43210", link: "tel:+919876543210", icon: "📞", color: "bg-blue-500 text-blue-500" },
    { title: "Official Email", value: "info@superking.blog", link: "mailto:info@superking.blog", icon: "📧", color: "bg-[#D4AF37] text-[#D4AF37]" },
    { title: "WhatsApp Us", value: "Chat with Support", link: "https://wa.me/919876543210", icon: "💬", color: "bg-green-500 text-green-500" },
    { title: "Instagram", value: "@skprimegroup", link: "https://instagram.com", icon: "📸", color: "bg-pink-500 text-pink-500" },
    { title: "LinkedIn", value: "SK Prime Group Official", link: "https://linkedin.com", icon: "💼", color: "bg-blue-700 text-blue-700" },
    { title: "Facebook", value: "SK Prime Group", link: "https://facebook.com", icon: "🔵", color: "bg-blue-600 text-blue-600" },
  ];

  return (
    <section id="contact" className="min-h-screen pt-32 pb-20 bg-[#0A192F] text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
          >
            Get In <span className="text-[#D4AF37]">Touch</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Connect with the leadership team of SK Prime Group for business inquiries, 
            partnerships, or professional consultations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {contacts.map((c, i) => (
            <ContactCard key={i} {...c} />
          ))}
        </div>

        {/* Global HQ Map/Office Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#0A192F] to-[#162a4a] border border-white/10 rounded-[3rem] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] blur-[120px] opacity-10 pointer-events-none"></div>
          
          <h3 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-xs mb-4">Corporate Head Office</h3>
          <p className="text-3xl font-black mb-6 uppercase tracking-tight">Visit SK Prime Tower</p>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Floor 12, Business Hub District, <br/>
            Global Corporate Park, India.
          </p>
          
          <button className="bg-white text-[#0A192F] px-12 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all">
            Get Directions
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
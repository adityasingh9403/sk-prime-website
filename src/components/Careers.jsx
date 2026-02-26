import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Send, Upload, User, Mail, Phone, MessageSquare,
    Crown, CheckCircle2, FileText, AlertCircle, Clock, Briefcase
} from 'lucide-react';

const Careers = () => {
    const [formStep, setFormStep] = useState('idle'); // idle, sending, success, error
    const [hiringStatus, setHiringStatus] = useState('ON');
    const [openRoles, setOpenRoles] = useState([]);
    const [isLoadingStatus, setIsLoadingStatus] = useState(true);
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        portfolio_url: '',
        message: ''
    });
    const [file, setFile] = useState(null);

    // --- FETCH RECRUITMENT SETTINGS (Status & Roles) ---
    useEffect(() => {
        const checkStatus = async () => {
            try {
                const response = await fetch('http://localhost/sk-prime-api/get_hiring_status.php');
                const result = await response.json();

                console.log("Backend Response:", result); // Isse error pakda jayega

                if (result.status === "success") {
                    setHiringStatus(result.hiring);

                    // Ensure karein ki result.positions exist karta hai
                    const rolesString = result.positions || "";
                    const rolesArray = rolesString.split(',').map(r => r.trim()).filter(r => r !== "");

                    setOpenRoles(rolesArray);
                }
            } catch (error) {
                console.error("Portal status error:", error);
            } finally {
                setIsLoadingStatus(false);
            }
        };
        checkStatus();
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStep('sending');

        const data = new FormData();
        data.append('full_name', formData.full_name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('portfolio_url', formData.portfolio_url);
        data.append('message', formData.message);
        data.append('resume', file);

        try {
            const response = await fetch('http://localhost/sk-prime-api/apply.php', {
                method: 'POST',
                body: data,
            });
            const result = await response.json();
            if (result.status === "success") {
                setFormStep('success');
            } else {
                setFormStep('error');
            }
        } catch (error) {
            setFormStep('error');
        }
    };

    const labelStyle = "text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3 block italic ml-1";
    const inputStyle = "w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-[#D4AF37] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-sm shadow-sm";

    return (
        <div className="bg-[#fcfcfd] min-h-screen pt-40 pb-24 px-6 relative overflow-hidden font-sans">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] bg-amber-50/50 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-50/40 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- HEADER --- */}
                <div className="text-center mb-24">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-10">
                        <Crown size={14} className="text-[#D4AF37]" />
                        <span className="text-slate-500 text-[9px] font-black uppercase tracking-[0.4em]">Career Portal</span>
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-6xl md:text-[7.5rem] font-black text-slate-900 uppercase tracking-tighter leading-[0.9] mb-8">
                        JOIN THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A6E2F] via-[#D4AF37] to-[#8A6E2F] italic font-serif font-light">EMPIRE.</span>
                    </motion.h2>
                </div>

                {/* --- DYNAMIC CONTENT --- */}
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto bg-white border border-slate-100 p-8 md:p-16 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">

                    {hiringStatus === 'OFF' ? (
                        /* --- STATUS: PAUSED --- */
                        <div className="text-center py-20">
                            <Clock size={48} className="text-[#D4AF37] mx-auto mb-8 animate-pulse" />
                            <h3 className="text-4xl font-black text-[#001233] uppercase tracking-tighter mb-6 italic">HIRING CLOSED</h3>
                            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10 font-medium">
                                We're currently optimizing our internal team. Drop your CV at <b>info@skprimegroup.com</b> for upcoming opportunities.
                            </p>
                        </div>
                    ) : formStep === 'success' ? (
                        /* --- STATUS: SUCCESS --- */
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-20">
                            <CheckCircle2 size={64} className="text-[#D4AF37] mx-auto mb-8" />
                            <h3 className="text-4xl font-black text-[#001233] uppercase tracking-tighter mb-4 italic">Sent Successfully</h3>
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">The SK Prime Board will contact you shortly.</p>
                        </motion.div>
                    ) : (
                        /* --- STATUS: ACTIVE FORM --- */
                        <>
                            {/* --- DYNAMIC ROLES DISPLAY --- */}
                            <div className="mb-16 text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 italic">We Are Hiring For:</p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {openRoles.length > 0 ? openRoles.map((role, idx) => (
                                        <span key={idx} className="px-5 py-2.5 bg-slate-900 text-[#D4AF37] rounded-full text-[10px] font-black uppercase tracking-widest italic shadow-lg">
                                            {role.trim()}
                                        </span>
                                    )) : <span className="text-slate-300 italic text-sm">General Applications Only</span>}
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <label className={labelStyle}>Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                                            <input type="text" name="full_name" required onChange={handleInputChange} placeholder="Aditya Singh" className={`${inputStyle} pl-16`} />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label className={labelStyle}>Email Address</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                                            <input type="email" name="email" required onChange={handleInputChange} placeholder="aditya@skprimegroup.com" className={`${inputStyle} pl-16`} />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label className={labelStyle}>Contact Number</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                                            <input type="tel" name="phone" required onChange={handleInputChange} placeholder="+91 88787 40101" className={`${inputStyle} pl-16`} />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label className={labelStyle}>Portfolio Link</label>
                                        <input type="url" name="portfolio_url" onChange={handleInputChange} placeholder="https://linkedin.com/in/aditya" className={inputStyle} />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className={labelStyle}>Upload CV (PDF)</label>
                                    <div
                                        onClick={() => fileInputRef.current.click()}
                                        className="border-2 border-dashed border-slate-100 rounded-[2rem] p-12 text-center hover:border-[#D4AF37] transition-all cursor-pointer bg-slate-50 group"
                                    >
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                            {fileName ? <FileText className="text-green-500" size={28} /> : <Upload className="text-[#D4AF37]" size={28} />}
                                        </div>
                                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                            {fileName ? fileName : "Drag & Drop or Click to Upload"}
                                        </p>
                                        <input type="file" required ref={fileInputRef} onChange={handleFileChange} accept=".pdf" className="hidden" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className={labelStyle}>Your Ambition</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-6 top-6 text-slate-300 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                                        <textarea name="message" onChange={handleInputChange} rows="4" placeholder="How will you add value to SK Prime?" className={`${inputStyle} pl-16 pt-5`}></textarea>
                                    </div>
                                </div>

                                <button disabled={formStep === 'sending'} className="w-full bg-[#001233] text-[#D4AF37] py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:bg-[#D4AF37] hover:text-[#001233] transition-all flex items-center justify-center gap-4 disabled:opacity-50">
                                    {formStep === 'sending' ? <span className="animate-pulse italic tracking-[0.1em]">Processing...</span> : <>Confirm Application <Send size={14} /></>}
                                </button>
                            </form>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Careers;
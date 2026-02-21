import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Eye, EyeOff, ShieldCheck, Crown, ChevronLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost/sk-prime-api/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) throw new Error("Server communication failed.");

            const result = await response.json();

            if (result.status === "success") {
                localStorage.setItem('adminToken', result.token);
                navigate('/admin-dashboard');
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError("Network error. Check if XAMPP/MySQL is running.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center px-4 md:px-6 relative overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">
            
            {/* --- AMBIENT BACKGROUND (Matching Home Theme) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <div className="absolute top-[-10%] right-[-10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-amber-50/50 blur-[100px] md:blur-[140px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-50/40 blur-[100px] md:blur-[120px] rounded-full"></div>
                
                {/* Subtle Dot Grid */}
                <div className="absolute inset-0 opacity-[0.4]" 
                     style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
                </div>
            </div>

            {/* --- BACK TO HOME --- */}
            <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-colors group">
                <div className="p-2 rounded-full bg-white border border-slate-100 shadow-sm group-hover:border-[#D4AF37]/30">
                    <ChevronLeft size={16} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Exit Portal</span>
            </Link>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-[440px] bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] relative z-10"
            >
                {/* --- HEADER --- */}
                <div className="text-center mb-10">
                    <motion.div 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl rotate-3"
                    >
                        <ShieldCheck size={30} className="text-[#D4AF37]" />
                    </motion.div>
                    
                    <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50">
                        <Crown size={12} className="text-[#D4AF37]" />
                        <span className="text-slate-400 font-black tracking-[0.3em] uppercase text-[8px]">Security Clearance Required</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter italic">
                        Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A6E2F] to-[#D4AF37]">Portal</span>
                    </h2>
                </div>

                {/* --- LOGIN FORM --- */}
                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-red-50 border border-red-100 text-red-500 text-[10px] py-4 px-4 rounded-2xl text-center font-bold uppercase tracking-widest shadow-sm"
                        >
                            {error}
                        </motion.div>
                    )}

                    <div className="space-y-2">
                        <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Command Identity</label>
                        <div className="relative group">
                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D4AF37] transition-all" size={18} />
                            <input 
                                type="text" 
                                name="username"
                                required
                                value={credentials.username}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-14 py-4 text-slate-900 focus:border-[#D4AF37] focus:bg-white outline-none transition-all placeholder:text-slate-300 text-sm shadow-sm"
                                placeholder="sk_admin"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Security Key</label>
                        <div className="relative group">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D4AF37] transition-all" size={18} />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password"
                                required
                                value={credentials.password}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-14 py-4 text-slate-900 focus:border-[#D4AF37] focus:bg-white outline-none transition-all placeholder:text-slate-300 text-sm shadow-sm"
                                placeholder="••••••••"
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-[#D4AF37] transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button 
                        disabled={loading}
                        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] shadow-xl hover:bg-[#D4AF37] transition-all disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                    >
                        {loading ? (
                            <span className="animate-pulse italic">Verifying Clearance...</span>
                        ) : (
                            <>Authorize Access <ShieldCheck size={16} className="group-hover:rotate-12 transition-transform" /></>
                        )}
                    </button>
                </form>

                {/* --- FOOTER --- */}
                <div className="mt-12 text-center">
                    <p className="text-slate-300 text-[8px] font-black uppercase tracking-[0.6em]">
                        SK PRIME GROUP • SECURE TERMINAL • © 2026
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
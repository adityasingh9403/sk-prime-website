import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Layers, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();

    const closeMenu = () => setIsOpen(false);

    /* 🔒 BODY SCROLL LOCK */
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    /* CLASSES */
    const commonClasses =
        "px-3 py-2 rounded-md text-xs lg:text-sm font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap";
    const activeClass = "bg-[#D4AF37] text-[#0A192F]";
    const inactiveClass = "text-white hover:bg-white/10 hover:text-[#D4AF37]";
    const getLinkClass = ({ isActive }) =>
        `${commonClasses} ${isActive ? activeClass : inactiveClass}`;

    const mobileLinkClass =
        "block px-4 py-3 rounded-lg text-lg font-black uppercase tracking-tight transition";

    /* ANIMATION */
    const mobileMenuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 260, damping: 25 }
        },
        closed: {
            x: "100%",
            opacity: 0,
            transition: { duration: 0.25 }
        }
    };

    return (
        <>
            {/* NAVBAR */}
            <nav className="bg-[#0A192F] sticky top-0 z-50 border-b border-[#D4AF37]/30 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-20">

                        {/* LOGO */}
                        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-[#D4AF37] rounded-full flex items-center justify-center font-black text-[#0A192F]">
                                SK
                            </div>
                            <span className="text-xl font-black text-white">
                                SK <span className="text-[#D4AF37]">PRIME</span>
                            </span>
                        </Link>

                        {/* DESKTOP MENU */}
                        <div className="hidden md:flex items-center gap-2">
                            <NavLink to="/" end className={getLinkClass}>Home</NavLink>
                            <NavLink to="/about" className={getLinkClass}>About</NavLink>
                            <NavLink to="/founder" className={getLinkClass}>Founder</NavLink>
                            <NavLink to="/ventures" className={getLinkClass}>
                                <div className="flex items-center gap-1"><Layers size={14} /> Ventures</div>
                            </NavLink>
                            <NavLink to="/gallery" className={getLinkClass}>
                                <div className="flex items-center gap-1"><ImageIcon size={14} /> Gallery</div>
                            </NavLink>
                            <NavLink to="/academy" className={getLinkClass}>
                                <div className="flex items-center gap-1"><BookOpen size={14} /> Academy</div>
                            </NavLink>
                            <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
                        </div>

                        {/* MOBILE BURGER */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-[#D4AF37]"
                        >
                            <motion.div
                                animate={isOpen ? "open" : "closed"}
                                className="w-6 h-6 flex flex-col justify-around"
                            >
                                <motion.span
                                    className="h-0.5 w-6 bg-current"
                                    variants={{ closed: { rotate: 0 }, open: { rotate: 45, y: 8 } }}
                                />
                                <motion.span
                                    className="h-0.5 w-6 bg-current"
                                    variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                                />
                                <motion.span
                                    className="h-0.5 w-6 bg-current"
                                    variants={{ closed: { rotate: 0 }, open: { rotate: -45, y: -8 } }}
                                />
                            </motion.div>
                        </button>

                    </div>
                </div>
            </nav>

            {/* MOBILE FULLSCREEN MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-[#0A192F] z-[9999] md:hidden"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <button
                            onClick={closeMenu}
                            className="text-[#D4AF37] text-3xl font-bold hover:rotate-90 transition-transform"
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                        <div className="pt-24 px-6 space-y-5">
                            {['Home', 'About', 'Founder', 'Ventures', 'Gallery', 'Academy', 'Contact'].map(item => (
                                <NavLink
                                    key={item}
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `${mobileLinkClass} ${isActive
                                            ? 'bg-[#D4AF37] text-[#0A192F]'
                                            : 'text-white hover:bg-white/10'}`
                                    }
                                >
                                    {item}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

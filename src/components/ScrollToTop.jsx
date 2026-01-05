import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll position monitor karne ke liye
  useEffect(() => {
    const toggleVisibility = () => {
      // Jab 400px se zyada scroll ho tabhi button dikhe
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={handleScroll}
          // Z-INDEX 9999 sabse upar rakhega aur pointer-events auto click enable karega
          className="fixed bottom-10 right-10 z-[9999] p-4 bg-[#D4AF37] text-[#0A192F] rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer border-2 border-[#0A192F]"
          style={{ pointerEvents: 'auto' }} 
        >
          <ArrowUp size={24} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
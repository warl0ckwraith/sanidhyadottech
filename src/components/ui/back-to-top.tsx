
'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 p-2 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#f5f1e8]/50 text-[#f5f1e8] hover:bg-black/80 hover:border-[#f5f1e8]/70 transition-all z-50 w-10 h-10 flex items-center justify-center shadow-[0_0_8px_2px_rgba(245,241,232,0.6)] hover:shadow-[0_0_12px_4px_rgba(245,241,232,0.8)]"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          style={{
            fontSize: 0, // visually hidden since we only show the icon
          }}
        >
          <ChevronUp className="h-5 w-5" color="#f5f1e8" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

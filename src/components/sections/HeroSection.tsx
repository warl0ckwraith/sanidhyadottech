
import { useState, useEffect, memo } from "react";
import { ArrowDownCircle, MessageSquare, FileText } from "lucide-react";
import { motion } from "framer-motion";

// Memoized matrix rain component for performance
const MatrixRain = memo(function MatrixRain() {
  // Generate static random values once to prevent re-renders
  const columns = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${(i / 12) * 100 + Math.random() * 5}%`,
    delay: Math.random() * 1.8,
    duration: 8 + Math.random() * 7,
    chars: Array.from({ length: 15 }, () => 
      String.fromCharCode(33 + Math.floor(Math.random() * 94))
    ).join("\n")
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {columns.map((col) => (
        <div
          key={col.id}
          className="absolute text-cyber-neon font-mono text-sm whitespace-pre leading-loose animate-matrix-fall"
          style={{
            left: col.left,
            top: "-100%",
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`,
          }}
        >
          {col.chars}
        </div>
      ))}
    </div>
  );
});

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black bg-cyber-grid bg-cyber-grid-size z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-cyber-purple/20"></div>
        
        {/* Matrix-like falling characters (decorative) */}
        <MatrixRain />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className={`max-w-4xl transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-300 text-sm font-mono mb-2">Hi, my name is</p>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Sanidhya <span className="text-cyber-purple">Soni.</span>
          </motion.h1>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I am into Security & CTFs.
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Security engineer who specializes in Red Teaming, CTF development and currently exploring adversarial emulation
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-purple text-white font-medium rounded hover:bg-cyber-purple/80 transition-all duration-300 shadow-[0_0_10px_rgba(90,45,130,0.5)] hover:shadow-[0_0_15px_rgba(90,45,130,0.8)] hover:-translate-y-1"
            >
              <MessageSquare className="h-5 w-5" />
              Get in Touch
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyber-purple text-cyber-neon font-medium rounded hover:bg-cyber-purple/10 transition-all duration-300 hover:-translate-y-1"
            >
              <FileText className="h-5 w-5" />
              Resume
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="h-10 w-10 text-cyber-purple opacity-75 hover:text-cyber-neon hover:opacity-100 transition-colors duration-300" />
        </a>
      </motion.div>
    </section>
  );
}

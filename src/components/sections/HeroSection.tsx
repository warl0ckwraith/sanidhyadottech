
import { useState, useEffect } from "react";
import { ArrowDownCircle, FileText, MessageSquare } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

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
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute text-cyber-neon font-mono text-sm animate-matrix-fall"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `-${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="my-3">
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </div>
              ))}
            </div>
          ))}
        </div>
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
            A learning security engineer who does pentesting, CTF challenges, and research on adversary emulation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="/resume-sanidhya-soni.pdf" 
              download="Resume-SanidhyaSoni.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-purple text-white font-medium rounded hover:bg-cyber-purple/80 transition-all duration-300 shadow-[0_0_10px_rgba(90,45,130,0.5)] hover:shadow-[0_0_15px_rgba(90,45,130,0.8)] hover:-translate-y-1"
            >
              <FileText className="h-5 w-5" />
              Download Resume
            </a>
            
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-cyber-purple text-cyber-purple font-medium rounded hover:bg-cyber-purple hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(90,45,130,0.8)] hover:-translate-y-1"
            >
              <MessageSquare className="h-5 w-5" />
              Say Hello
            </button>
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

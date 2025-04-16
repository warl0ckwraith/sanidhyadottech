
import { useState, useEffect } from "react";
import { ArrowDownCircle } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    setLoaded(true);
    
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 4000); // Match with typewriter animation duration
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
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
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-4 inline-block">
            <span className="text-gray-300 text-sm uppercase tracking-wider font-mono">
              OSCP Certified
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            John <span className="text-cyber-purple">Doe</span>
          </h1>
          
          <div className="h-8 mb-6 overflow-hidden">
            <div className={`font-mono text-xl inline-block ${isTyping ? 'animate-typewriter border-r-2 border-cyber-neon animate-blink' : ''}`}>
              <span className="text-cyber-neon">
                Cyber Security Researcher & Penetration Testing Expert
              </span>
            </div>
          </div>
          
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            With 3+ years of experience in network pentesting, red teaming, CTF development, 
            and digital forensics. Specializing in security research and vulnerability assessment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-cyber-purple text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_10px_rgba(90,45,130,0.5)] hover:shadow-[0_0_15px_rgba(90,45,130,0.8)]"
            >
              Explore My Work
            </a>
            <a 
              href="#resume" 
              className="px-8 py-3 border border-cyber-purple text-white font-medium rounded hover:border-cyber-neon hover:text-cyber-neon transition-all duration-300"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="h-10 w-10 text-cyber-purple opacity-75 hover:text-cyber-neon hover:opacity-100 transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
}

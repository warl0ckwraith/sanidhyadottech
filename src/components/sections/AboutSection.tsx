import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">About</span>
            <span className="text-cyber-purple"> Me</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          <motion.div 
            className="max-w-3xl mx-auto text-left bg-gray-900/50 rounded-lg p-8 border border-gray-800 hover:border-cyber-purple transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-bold">
              I got into security by messing around with tools I barely understood until something clicked. Now I do red team work, security research, and sometimes design CTF challenges.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I've led penetration testing and social engineering ops for clients globally, worked as a security engineer with the Indian Army, and currently run the OWASP chapter at VIT Bhopal. Picked up OSCP and OSWP along the way, found some bugs through bounty programs, built some exploitation & automation tools.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Right now I'm splitting time between consulting, finishing my degree, and staying sharp through CTFs and security research.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start mt-8">
              <div>
                <a 
                  href="https://linkedin.com/in/sanidhyasonii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-cyber-purple text-cyber-neon bg-cyber-purple/10 hover:bg-cyber-purple/30 rounded-lg transition-all"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

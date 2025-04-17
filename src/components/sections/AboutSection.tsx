
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
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hello! My name is Sanidhya Soni and I love diving into the hidden corners of the internet. 
              My obsession with cybersecurity started when I first cracked open Wireshark during a university lab—turns out 
              packet sniffing taught me more about networks than any textbook ever could!
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Since then, I've interned with military cyber units, did some pentesting & red teaming, and created many CTF challenges. 
              I've spent countless hours in both offensive and defensive positions, learning to think like adversaries do.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Now, I spend my days designing security frameworks, building educational tools for future security professionals, 
              and occasionally participating in CTF competitions to keep my skills sharp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between mt-8">
              <div>
                <h4 className="text-cyber-purple font-medium mb-2">Location</h4>
                <p className="text-white">Jaipur, India</p>
              </div>
              
              <div>
                <h4 className="text-cyber-purple font-medium mb-2">Email</h4>
                <p className="text-white">sanidhyasonii@proton.me</p>
              </div>
              
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

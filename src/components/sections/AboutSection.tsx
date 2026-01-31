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
            <p className="text-gray-200 text-lg leading-relaxed mb-6 font-bold">
              I am a Security Engineer specializing in offensive operations and infrastructure development.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My core focus is on <strong>adversary emulation</strong> and <strong>CTF architecture</strong>. I don't just find vulnerabilities; I build the environments that train defense teams to detect them. 
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My experience includes working with the <strong>Indian Army</strong> and <strong>NCIIPC</strong> (Govt. of India) to design realistic Red Teaming scenarios and digital forensics challenges. I bridge the gap between theoretical security concepts and operational reality.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              When I'm not auditing systems, I am developing next-generation CTF challenges for conferences like <strong>Vulncon</strong> and <strong>BSides</strong>, helping the community sharpen their tradecraft.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between mt-8 border-t border-gray-800 pt-8">
              <div>
                <h4 className="text-cyber-purple font-medium mb-1 uppercase text-xs tracking-wider">Location</h4>
                <p className="text-white">Jaipur, India</p>
              </div>
              
              <div>
                <h4 className="text-cyber-purple font-medium mb-1 uppercase text-xs tracking-wider">Contact</h4>
                <p className="text-white">sanidhyasonii@proton.me</p>
              </div>
              
              <div>
                <a 
                  href="https://linkedin.com/in/sanidhyasonii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 border border-cyber-purple text-cyber-neon bg-cyber-purple/10 hover:bg-cyber-purple/20 rounded-lg transition-all font-medium"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

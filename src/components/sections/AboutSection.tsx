
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
          
          <div className="max-w-4xl mx-auto text-center bg-gray-900/50 rounded-lg p-8 border border-gray-800 hover:border-cyber-purple transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
              Cybersecurity Researcher <span className="text-cyber-purple">&</span> 
              <br />Penetration Testing Expert
            </h3>
            
            <p className="text-gray-300 mb-6 text-lg">
              I am Sanidhya Soni, an OSCP Certified Cyber Security Researcher with 3+ years of hands-on 
              experience in network pentesting, vulnerability assessments, red teaming, web/wireless 
              pentesting, and security training. Passionate about developing advanced security solutions 
              and engaging in CTF competitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-center mt-8">
              <div>
                <h4 className="text-cyber-purple font-medium mb-2">Location</h4>
                <p className="text-white">Jaipur, India</p>
              </div>
              
              <div>
                <h4 className="text-cyber-purple font-medium mb-2">Email</h4>
                <p className="text-white">sanidhyasonii@proton.me</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <a 
                href="https://linkedin.com/in/sanidhyasonii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyber-purple/20 text-cyber-neon hover:bg-cyber-purple/30 rounded-lg transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

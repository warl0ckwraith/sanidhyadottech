
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image/Profile Section */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-cyber-purple opacity-20 rounded-lg transform -rotate-3"></div>
                <div className="absolute inset-0 border-2 border-cyber-purple/50 rounded-lg transform rotate-3"></div>
                <div className="relative h-full rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-cyber-purple/30">
                  {/* Replace with actual image when available */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl text-cyber-purple/30 font-bold">SS</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-black px-6 py-3 rounded-full border border-cyber-purple">
                  <span className="font-mono text-cyber-neon text-sm">OSCP & OWSP Certified</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                Cybersecurity Researcher <span className="text-cyber-purple">&</span> 
                <br />Penetration Testing Expert
              </h3>
              
              <p className="text-gray-300 mb-6">
                I am an OSCP Certified Security Researcher with 3+ years of hands-on experience in network 
                pentesting, vulnerability assessments, red teaming, web and wireless pentesting, and Active 
                Directory (AD) exploitation.
              </p>
              
              <p className="text-gray-300 mb-8">
                I develop comprehensive security training solutions and actively participate in Capture the 
                Flag (CTF) competitions to hone my technical, teamwork, and problem-solving skills. My journey 
                in security began with a passion for understanding system vulnerabilities and developing effective 
                protection strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div>
                  <h4 className="text-cyber-purple font-medium mb-2">Experience</h4>
                  <p className="text-white">3+ Years</p>
                </div>
                
                <div>
                  <h4 className="text-cyber-purple font-medium mb-2">Education</h4>
                  <p className="text-white">B.Tech Computer Science Engineering</p>
                  <p className="text-sm text-gray-400">Specialization in Cyber Security & Digital Forensics</p>
                </div>
                
                <div>
                  <h4 className="text-cyber-purple font-medium mb-2">Location</h4>
                  <p className="text-white">Jaipur, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

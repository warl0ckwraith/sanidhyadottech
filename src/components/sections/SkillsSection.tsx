
export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Skills</span>
            <span className="text-cyber-purple"> & Tools</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white flex items-center">
                  <span className="inline-block w-3 h-3 bg-cyber-purple rounded-full mr-2"></span>
                  Languages
                </h3>
                <p className="text-gray-300 pl-5">Python, PHP, MySQL, Bash, C++, Java, Kotlin</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white flex items-center">
                  <span className="inline-block w-3 h-3 bg-cyber-purple rounded-full mr-2"></span>
                  Specializations
                </h3>
                <p className="text-gray-300 pl-5">Network & Active Directory Pentesting, Web/Wireless Pentesting, Source Code Review</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white flex items-center">
                  <span className="inline-block w-3 h-3 bg-cyber-purple rounded-full mr-2"></span>
                  Tools
                </h3>
                <p className="text-gray-300 pl-5">Git, Unix, Docker, Bloodhound, Burpsuite, Nessus, Wireshark, Metasploit, Aircrack-ng</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white flex items-center">
                  <span className="inline-block w-3 h-3 bg-cyber-purple rounded-full mr-2"></span>
                  Professional Competence
                </h3>
                <div className="text-gray-300 pl-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-cyber-purple text-sm mb-1">Security Research</h4>
                    <p className="text-sm">Specializing in vulnerability assessment, exploit development, and security auditing</p>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-purple text-sm mb-1">Red Team Operations</h4>
                    <p className="text-sm">Expertise in planning and executing red team exercises including social engineering campaigns</p>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-purple text-sm mb-1">CTF Development</h4>
                    <p className="text-sm">Created numerous CTF challenges for security conferences and events</p>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-purple text-sm mb-1">Digital Forensics</h4>
                    <p className="text-sm">Specialized in evidence collection, disk imaging, and malware behavior analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

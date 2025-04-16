
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "PHP", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Bash", level: 85 },
      { name: "C++", level: 70 },
      { name: "Java", level: 65 },
      { name: "Kotlin", level: 60 },
    ]
  },
  {
    category: "Security Skills",
    items: [
      { name: "Network Pentesting", level: 95 },
      { name: "Active Directory Pentesting", level: 90 },
      { name: "Web Pentesting", level: 85 },
      { name: "Wireless Pentesting", level: 85 },
      { name: "Source Code Review", level: 80 },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Docker", level: 85 },
      { name: "Bloodhound", level: 90 },
      { name: "Burpsuite", level: 95 },
      { name: "Crackmapexec/NetExec", level: 85 },
      { name: "Impacket", level: 80 },
      { name: "Nessus", level: 75 },
      { name: "Wireshark", level: 85 },
    ]
  }
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Programming Languages");
  
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
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skills.map((skillGroup) => (
              <button
                key={skillGroup.category}
                onClick={() => setActiveTab(skillGroup.category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeTab === skillGroup.category 
                    ? "bg-cyber-purple text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                )}
              >
                {skillGroup.category}
              </button>
            ))}
          </div>
          
          {/* Skills Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column - Progress bars */}
            <div>
              {skills.map((skillGroup) => (
                <div 
                  key={skillGroup.category}
                  className={cn(
                    "space-y-6 transform transition-all duration-500",
                    activeTab === skillGroup.category ? "opacity-100" : "hidden opacity-0"
                  )}
                >
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-medium">{skill.name}</h4>
                        <span className="text-cyber-purple text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyber-purple to-cyber-neon rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Right column - Visual representation */}
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">Professional Competence</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-cyber-purple font-medium mb-2">Security Research</h4>
                  <p className="text-gray-300 text-sm">
                    Specializing in vulnerability assessment, exploit development, and security auditing.
                    Experienced in identifying and documenting complex security issues across various platforms.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-cyber-purple font-medium mb-2">CTF Development</h4>
                  <p className="text-gray-300 text-sm">
                    Created numerous CTF challenges for competitions including Vulncon Security Conference, BSides Mumbai, and BSides Indore.
                    Skilled in designing engaging scenarios that test real-world security skills.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-cyber-purple font-medium mb-2">Red Team Operations</h4>
                  <p className="text-gray-300 text-sm">
                    Experienced in planning and executing red team exercises, including social engineering
                    campaigns and infrastructure penetration simulations, with expertise in Active Directory environments.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-cyber-purple font-medium mb-2">Digital Forensics</h4>
                  <p className="text-gray-300 text-sm">
                    Specialized in evidence collection, disk imaging, and malware behavior analysis.
                    Created forensic challenges for security competitions and training programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Skills */}
          <div className="mt-16 p-6 bg-gradient-to-r from-black to-cyber-purple/10 rounded-lg border border-cyber-purple/20">
            <h3 className="text-xl font-bold mb-6 text-white">Additional Expertise</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Incident Response",
                "GoPhish/EvilGinx",
                "IoT Exploitation",
                "MITRE ATT&CK",
                "Cobalt Strike",
                "Metasploit",
                "Aircrack-ng",
                "Git/Unix"
              ].map((skill) => (
                <div 
                  key={skill} 
                  className="bg-black/50 border border-gray-800 rounded-lg px-4 py-3 flex items-center justify-center text-center hover:border-cyber-purple transition-colors duration-300"
                >
                  <span className="text-sm text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

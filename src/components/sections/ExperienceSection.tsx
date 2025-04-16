
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: 1,
    title: "Cyber Security Engineer Intern",
    company: "DGTA, Indian Army",
    period: "Nov 2024 - Jan 2025",
    description: "Designed and implemented a practical framework to educate learners about red teaming and exploitation processes, and provided research support for military cyber security operations.",
    achievements: [
      "Created educational framework for red teaming processes used by defense personnel",
      "Provided research support for military cyber security operations",
      "Developed practical exploitation scenarios for training exercises"
    ]
  },
  {
    id: 2,
    title: "Security Engineer Intern",
    company: "CyberWarFare Labs",
    period: "Jan 2024 - Jul 2024",
    description: "Designed Android pentesting frameworks and engineered security challenges. Collaborated on testing on-premise security labs across Red Team, Blue Team, and Purple Team engagements.",
    achievements: [
      "Created Android pentesting and exploitation course framework with practical and theoretical components",
      "Engineered security challenges covering privilege escalation, web security, OSINT, and forensics",
      "Collaborated on Active Directory enumeration, MITRE ATT&CK framework, and endpoint security testing"
    ]
  },
  {
    id: 3,
    title: "Independent Contractor / Freelancer",
    company: "Security Testing & CTF Development",
    period: "Ongoing",
    description: "Engaged in developing scalable CTF infrastructure, security assessments, and digital forensics challenges for various organizations and security events.",
    achievements: [
      "Developed scalable CTF infrastructure for security competitions",
      "Conducted comprehensive security assessments for clients",
      "Created digital forensics challenges for security conferences"
    ]
  },
  {
    id: 4,
    title: "CTF Development Intern",
    company: "TheCyberDelta",
    period: "Jul 2022 - Sep 2022",
    description: "Led the design, development, and scaling of 50+ CTF challenges, setting benchmarks using Docker and YAML.",
    achievements: [
      "Designed and developed over 50 CTF challenges across various security domains",
      "Set benchmarks using Docker and YAML for challenge deployment",
      "Implemented scalable infrastructure for CTF competitions"
    ]
  },
  {
    id: 5,
    title: "Cyber Security Intern",
    company: "CyberSecuredIndia",
    period: "Jan 2022 - May 2022",
    description: "Conducted thorough penetration testing across web, mobile, and network environments. Performed source code reviews and utilized the MITRE ATT&CK framework for enhanced threat detection.",
    achievements: [
      "Achieved 1st place in the final internship assessment",
      "Conducted penetration testing across web, mobile, and network environments",
      "Performed source code reviews and utilized the MITRE ATT&CK framework"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Professional</span>
            <span className="text-cyber-purple"> Experience</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-800"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={cn(
                  "relative mb-16 last:mb-0",
                  "md:flex md:justify-between md:even:flex-row-reverse"
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-cyber-purple border-4 border-black z-10"></div>
                
                {/* Content */}
                <div className={cn(
                  "ml-10 md:ml-0 md:w-5/12",
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                )}>
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyber-purple transition-all duration-300 shadow-lg hover:shadow-cyber-purple/20">
                    <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center mb-3">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple text-xs rounded-full mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-cyber-neon font-mono text-sm mb-4">{exp.company}</h4>
                    
                    <p className="text-gray-300 mb-5">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="text-white font-medium text-sm">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyber-purple mr-2 font-mono">→</span>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Education */}
          <div className="mt-20 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                <h4 className="text-lg font-bold text-white">Bachelor of Technology (B.Tech)</h4>
                <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple text-xs rounded-full mt-2 md:mt-0">
                  2022 - Present
                </span>
              </div>
              
              <p className="text-cyber-neon font-mono text-sm mb-2">Computer Science Engineering</p>
              <p className="text-white text-sm mb-1">Specialization in Cyber Security & Digital Forensics</p>
              <p className="text-gray-400 text-sm mb-4">VIT Bhopal University, Bhopal, MP</p>
              
              <p className="text-gray-300 text-sm">
                <span className="text-cyber-purple font-medium">Relevant Coursework:</span> Networking, Operating Systems, Security Frameworks, 
                Web and Software Security, Network Security, Cyber Security, Python programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

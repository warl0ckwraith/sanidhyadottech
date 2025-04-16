
import { cn } from "@/lib/utils";
import { FlipCard } from "../ui/flip-card";

const experiences = [
  {
    id: 1,
    title: "Cyber Security Engineer Intern",
    company: "DGTA, Indian Army",
    location: "Delhi",
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
    location: "Remote",
    period: "Jan 2024 - Jul 2024",
    description: "Designed Android pentesting frameworks and engineered security challenges. Collaborated on testing on-premise security labs across Red Team, Blue Team, and Purple Team engagements.",
    achievements: [
      "Developed an Android pentesting & exploitation framework",
      "Created security challenges in privilege escalation, web security, and forensics using Docker",
      "Collaborated in red/blue/purple team exercises focusing on AD enumeration and threat detection"
    ]
  },
  {
    id: 3,
    title: "Independent Contractor / Freelancer",
    company: "Security Testing & CTF Development",
    location: "Remote",
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
    location: "Remote",
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
    location: "Remote",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="h-full">
                <FlipCard 
                  frontContent={
                    <>
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-cyber-neon font-mono text-sm mb-1">{exp.company}</h4>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-400 text-sm">{exp.location}</span>
                        <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple text-xs rounded-full">
                          {exp.period}
                        </span>
                      </div>
                    </>
                  }
                  backContent={
                    <>
                      <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
                      <h4 className="text-cyber-neon font-mono text-sm mb-4">{exp.company}</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyber-purple mr-2 font-mono">→</span>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  }
                />
              </div>
            ))}
          </div>
          
          {/* Education */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Education</h3>
            
            <div className="max-w-2xl mx-auto">
              <FlipCard 
                frontContent={
                  <>
                    <h4 className="text-lg font-bold text-white mb-2">
                      B.Tech in Computer Science Engineering (Cyber Security & Digital Forensics)
                    </h4>
                    <p className="text-cyber-neon font-mono text-sm mb-1">
                      VIT Bhopal University, Bhopal, MP
                    </p>
                    <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple text-xs rounded-full mt-3 inline-block">
                      2022 - Present
                    </span>
                  </>
                }
                backContent={
                  <>
                    <h4 className="text-lg font-bold text-white mb-3">
                      B.Tech in Computer Science Engineering
                    </h4>
                    <p className="text-cyber-neon font-mono text-sm mb-4">
                      Specialization in Cyber Security & Digital Forensics
                    </p>
                    <p className="text-gray-300 mb-4">
                      <span className="text-cyber-purple font-medium">Relevant Coursework:</span>
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {[
                        "Networking", 
                        "Operating Systems", 
                        "Security Frameworks", 
                        "Web Security",
                        "Software Security", 
                        "Network Security", 
                        "Cyber Security",
                        "Python Programming"
                      ].map((course, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-cyber-purple mr-2 font-mono text-xs">→</span>
                          <span className="text-gray-300 text-sm">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { cn } from "@/lib/utils";

const experiences = [
  {
    id: 1,
    title: "Security Engineer Intern",
    company: "SecureTech Labs",
    period: "Jan 2023 - Present",
    description: "Designed Android pentesting frameworks and assisted in security audits. Developed and deployed automated security testing scripts and collaborated with the red team on vulnerability assessments.",
    achievements: [
      "Created a course framework for Android pentesting used by 200+ students",
      "Participated in 10+ client security assessments",
      "Developed custom security scripts that reduced testing time by 30%"
    ]
  },
  {
    id: 2,
    title: "Cyber Security Intern",
    company: "InfoGuard Systems",
    period: "May 2022 - Dec 2022",
    description: "Designed and executed security challenges for internal training. Participated in blue team exercises and contributed to threat intelligence research and documentation.",
    achievements: [
      "Designed 15+ CTF challenges for company-wide security awareness",
      "Improved detection time for security incidents by 25%",
      "Documented 30+ security procedures used for SOC operations"
    ]
  },
  {
    id: 3,
    title: "Cyber Security Engineer Intern",
    company: "DefensePro Corp",
    period: "Jan 2022 - Apr 2022",
    description: "Collaborated in red/blue/purple team exercises. Assisted in social engineering campaigns and CTF infrastructure design. Conducted security research on emerging threats.",
    achievements: [
      "Participated in 5 major security exercises with multinational teams",
      "Discovered and documented 3 critical zero-day vulnerabilities",
      "Built CTF infrastructure used by 500+ participants"
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
          
          {/* Additional Experience */}
          <div className="mt-20 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Additional Experience</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I've also contributed to numerous open-source security projects and volunteered as a security
              researcher for non-profit organizations. My work includes vulnerability disclosure coordination 
              and providing security workshops for community events.
            </p>
            
            <a href="#contact" className="inline-flex items-center text-cyber-purple hover:text-cyber-neon transition-colors duration-300">
              <span className="mr-2">Contact me for full employment history</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

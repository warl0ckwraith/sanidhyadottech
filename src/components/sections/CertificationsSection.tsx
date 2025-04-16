
import { CheckCircle, Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "OSCP - Offensive Security Certified Professional",
    organization: "Offensive Security",
    date: "2023",
    logo: "oscp" // Will be replaced with actual logo
  },
  {
    id: 2,
    name: "OWASP - Web Application Security Specialist",
    organization: "OWASP Foundation",
    date: "2022",
    logo: "owasp" // Will be replaced with actual logo
  },
  {
    id: 3,
    name: "CNSP - Certified Network Security Professional",
    organization: "Network Security Institute",
    date: "2022",
    logo: "cnsp" // Will be replaced with actual logo
  },
  {
    id: 4,
    name: "Fortinet NSE Level 3 Certification",
    organization: "Fortinet",
    date: "2021",
    logo: "fortinet" // Will be replaced with actual logo
  }
];

const achievements = [
  {
    id: 1,
    title: "1st Place - National Cybersecurity Championship",
    organization: "InfoSec Association",
    year: "2023",
    description: "Won first place in the nation's premier cybersecurity competition, competing against 200+ security professionals."
  },
  {
    id: 2,
    title: "2nd Place - International CTF Challenge",
    organization: "SecureCode Foundation",
    year: "2022",
    description: "Secured second position in an international CTF competition with over 500 teams from 30 countries."
  },
  {
    id: 3,
    title: "Top National Finalist - Security Hackathon",
    organization: "CyberDefense Initiative",
    year: "2022",
    description: "Selected as one of the top 10 finalists in the national security hackathon focused on critical infrastructure protection."
  },
  {
    id: 4,
    title: "Research Grant Recipient",
    organization: "Advanced Security Research Foundation",
    year: "2021",
    description: "Awarded a competitive research grant for innovative work on automated vulnerability discovery in IoT systems."
  }
];

export default function CertificationsSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/5 to-transparent"></div>
      
      {/* Certifications */}
      <div id="certifications" className="container mx-auto px-4 relative z-10 mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Professional</span>
            <span className="text-cyber-purple"> Certifications</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyber-purple transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Cert Logo Placeholder */}
                <div className="w-20 h-20 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-4 group-hover:animate-pulse-neon">
                  <span className="text-xl font-bold text-cyber-purple">{cert.logo}</span>
                </div>
                
                <h3 className="text-white font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{cert.organization}</p>
                <p className="text-cyber-purple text-sm font-mono">{cert.date}</p>
                
                <CheckCircle className="text-cyber-neon h-5 w-5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Achievements */}
      <div id="achievements" className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Awards &</span>
            <span className="text-cyber-purple"> Achievements</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyber-purple transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Award className="h-6 w-6 text-cyber-purple group-hover:text-cyber-neon transition-colors duration-300" />
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                      <span className="px-3 py-1 bg-cyber-purple/10 text-cyber-purple text-xs rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3">{achievement.organization}</p>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

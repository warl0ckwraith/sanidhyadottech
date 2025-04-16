
import { CheckCircle, Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "OffSec Certified Professional (OSCP)",
    organization: "OffSec",
    date: "2023",
    logo: "oscp" // Will be replaced with actual logo
  },
  {
    id: 2,
    name: "OffSec Wireless Professional (OWSP)",
    organization: "OffSec",
    date: "2023",
    logo: "owsp" // Will be replaced with actual logo
  },
  {
    id: 3,
    name: "Certified Network Security Practitioner (CNSP)",
    organization: "Network Security Institute",
    date: "2022",
    logo: "cnsp" // Will be replaced with actual logo
  },
  {
    id: 4,
    name: "Fortinet Network Security Expert Level 2",
    organization: "Fortinet",
    date: "2022",
    logo: "fortinet" // Will be replaced with actual logo
  }
];

const achievements = [
  {
    id: 1,
    title: "1st Place - CTF by Indian Territorial Army (TCQ)",
    organization: "Indian Territorial Army",
    year: "2024",
    description: "Won first place in the Capture The Flag competition organized by Indian Territorial Army, demonstrating advanced offensive security skills."
  },
  {
    id: 2,
    title: "1st Place - CTF by IIT Bhubneshwar",
    organization: "IIT Bhubneshwar",
    year: "2022",
    description: "Secured first position in the CTF competition organized by IIT Bhubneshwar, showcasing expertise in various security domains."
  },
  {
    id: 3,
    title: "2nd Place - CTF by IIT Madras",
    organization: "IIT Madras",
    year: "2023",
    description: "Achieved second place in the competitive CTF event hosted by IIT Madras, solving complex security challenges."
  },
  {
    id: 4,
    title: "2nd Place - CTF by BITS Hyderabad",
    organization: "BITS Hyderabad",
    year: "2023",
    description: "Won second place in the national-level security competition organized by BITS Hyderabad."
  },
  {
    id: 5,
    title: "3rd Place - CTF by Data Security Council of India",
    organization: "DSCI",
    year: "2023",
    description: "Secured third place in the CTF competition organized by the Data Security Council of India, competing against security professionals nationwide."
  },
  {
    id: 6,
    title: "3rd Place - CTF by IIT Roorkee",
    organization: "IIT Roorkee",
    year: "2023",
    description: "Achieved third position in the security challenge competition hosted by IIT Roorkee."
  },
  {
    id: 7,
    title: "Top National Finalist - CTF by IIT Patna",
    organization: "IIT Patna",
    year: "2023",
    description: "Selected as one of the top national finalists in the CTF organized by IIT Patna, demonstrating exceptional security skills."
  },
  {
    id: 8,
    title: "Top National Finalist - National CTF by TrustLab, IIT Bombay",
    organization: "TrustLab, IIT Bombay",
    year: "2022",
    description: "Recognized as a top national finalist in the prestigious CTF hosted by TrustLab at IIT Bombay."
  },
  {
    id: 9,
    title: "Top National Finalist - Embedded Security CTF",
    organization: "IIT Madras & DSCI",
    year: "2022",
    description: "Selected as a top finalist in the specialized Embedded Security CTF organized by IIT Madras and DSCI."
  },
  {
    id: 10,
    title: "Bounty & Certificate of Appreciation",
    organization: "PhysicsWallah and Talent.com",
    year: "2022",
    description: "Received bounty and certificate of appreciation for identifying and responsibly disclosing security vulnerabilities."
  },
  {
    id: 11,
    title: "Hall of Fame Award",
    organization: "airtame.com",
    year: "2022",
    description: "Listed in the Hall of Fame for significant security contributions and responsible vulnerability disclosure."
  },
  {
    id: 12,
    title: "Certificate of Appreciation",
    organization: "IndiaMart and NCIIPC (Government of India)",
    year: "2022",
    description: "Received appreciation from IndiaMart and the National Critical Information Infrastructure Protection Centre for security contributions."
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
            {achievements.slice(0, 8).map((achievement) => (
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
          
          {/* Additional achievements - collapsed section */}
          <div className="mt-12 text-center">
            <details className="group">
              <summary className="list-none cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyber-purple transition-all duration-300 text-white font-medium">
                <span>View More Achievements</span>
                <span className="group-open:rotate-180 text-cyber-purple transition-transform duration-300">▼</span>
              </summary>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {achievements.slice(8).map((achievement) => (
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
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

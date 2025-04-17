
import { FlipCard } from "../ui/flip-card";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "CTF Winner - Indian Territorial Army",
    event: "TCQ 2024",
    details: "1st Place (Winner) at the CTF Organized by Indian Territorial Army (TCQ) in 2024"
  },
  {
    id: 2,
    title: "Top National Finalist - IIT Patna",
    event: "CTF 2023",
    details: "Top National Finalist at the CTF organized by IIT Patna in 2023"
  },
  {
    id: 3,
    title: "CTF Winner - IIT Bhubneshwar",
    event: "CTF 2022",
    details: "1st Place (Winner) at the CTF Organized by IIT Bhubneshwar in 2022"
  },
  {
    id: 4,
    title: "2nd Place - IIT Madras & BITS Hyderabad",
    event: "CTF 2023",
    details: "2nd Place at the CTF Organized by IIT Madras and 2nd Place at the CTF Organized by BITS, Hyderabad in 2023"
  },
  {
    id: 5,
    title: "3rd Place - Multiple Events",
    event: "DSCI & IIT Roorkee 2023",
    details: "3rd Place at the CTF Organized by Data Security Council of India (DSCI) and 3rd Place at the CTF Organized by IIT Roorkee in 2023"
  },
  {
    id: 6,
    title: "Top National Finalist - Multiple Events",
    event: "IIT Bombay & IIT Madras",
    details: "Top National Finalist at the National CTF by TrustLab, IIT Bombay and Top National Finalist at the Embedded Security CTF by IIT Madras & DSCI in 2022"
  }
];

const recognitions = [
  {
    id: 1,
    title: "Bounty & Certificate of Appreciation",
    organization: "PhysicsWallah & Talent.com",
    year: "2022",
    details: "Received bounty and certificate of appreciation for identifying and reporting security vulnerabilities"
  },
  {
    id: 2,
    title: "Hall of Fame",
    organization: "airtame.com",
    year: "2022",
    details: "Listed in the Hall of Fame for responsible disclosure of security vulnerabilities"
  },
  {
    id: 3,
    title: "Appreciation",
    organization: "IndiaMart & NCIIPC (Government of India)",
    year: "2022",
    details: "Received appreciation for security contributions and vulnerability reporting"
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Awards &</span>
            <span className="text-cyber-purple"> Achievements</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          <div className="space-y-16">
            {/* CTF Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">CTF Competitions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement) => (
                  <motion.div 
                    key={achievement.id}
                    className="h-full"
                    whileHover={{ y: -5 }}
                  >
                    <FlipCard 
                      frontContent={
                        <>
                          <h4 className="text-lg font-bold text-white mb-3">{achievement.title}</h4>
                          <Badge variant="purple-solid">
                            {achievement.event}
                          </Badge>
                        </>
                      }
                      backContent={
                        <>
                          <p className="text-gray-300">{achievement.details}</p>
                        </>
                      }
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Other Recognitions */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Recognitions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recognitions.map((recognition) => (
                  <motion.div 
                    key={recognition.id}
                    className="h-full"
                    whileHover={{ y: -5 }}
                  >
                    <FlipCard 
                      frontContent={
                        <>
                          <h4 className="text-lg font-bold text-white mb-3">{recognition.title}</h4>
                          <Badge variant="purple-solid">
                            {recognition.organization}
                          </Badge>
                          <div className="mt-3">
                            <Badge variant="purple-light" className="text-white">
                              {recognition.year}
                            </Badge>
                          </div>
                        </>
                      }
                      backContent={
                        <>
                          <p className="text-gray-300">{recognition.details}</p>
                        </>
                      }
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

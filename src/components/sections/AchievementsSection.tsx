import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// CTF achievements data
const ctfAchievements = [
  "1st Place (Winner) at the CTF Organized by Indian Territorial Army (TCQ) in 2024",
  "Top National Finalist at the CTF organized by IIT Patna in 2023",
  "1st Place (Winner) at the CTF Organized by IIT Bhubneshwar in 2022",
  "2nd Place at the CTF Organized by IIT Madras and 2nd Place at the CTF Organized by BITS, Hyderabad in 2023",
  "3rd Place at the CTF Organized by Data Security Council of India (DSCI) and 3rd Place at the CTF Organized by IIT Roorkee in 2023",
  "Top National Finalist at the National CTF by TrustLab, IIT Bombay and Top National Finalist at the Embedded Security CTF by IIT Madras & DSCI in 2022"
];

// Bug bounty/Hall of Fame data
const bugBountyAchievements = [
  "Received bounty and certificate of appreciation for identifying and reporting security vulnerabilities in PhysicsWallah & Talent.com (2022)",
  "Listed in the Hall of Fame for responsible disclosure of security vulnerabilities in airtame.com (2022)",
  "Received appreciation for security contributions and vulnerability reporting from IndiaMart & NCIIPC (Government of India) (2022)"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CTF Achievements Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full bg-gradient-to-b from-[#111] to-[#1a1a1a] border-gray-800 shadow-lg hover:shadow-[0_0_15px_rgba(162,89,255,0.7)] hover:border-cyber-purple/70 transition-all duration-300"
                role="region" 
                aria-label="CTF Competitions"
              >
                <CardHeader>
                  <CardTitle className="text-[#e0dfff] uppercase tracking-[0.05em]">CTF Competitions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {ctfAchievements.map((achievement, index) => (
                      <li key={index} className="text-[#c0bfe0] leading-[1.6] flex gap-2">
                        <span className="text-cyber-purple">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bug Bounty / Hall of Fame Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full bg-gradient-to-b from-[#111] to-[#1a1a1a] border-gray-800 shadow-lg hover:shadow-[0_0_15px_rgba(162,89,255,0.7)] hover:border-cyber-purple/70 transition-all duration-300"
                role="region" 
                aria-label="Bug Bounty & Hall of Fame"
              >
                <CardHeader>
                  <CardTitle className="text-[#e0dfff] uppercase tracking-[0.05em]">Bug Bounty & Hall of Fame</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {bugBountyAchievements.map((achievement, index) => (
                      <li key={index} className="text-[#c0bfe0] leading-[1.6] flex gap-2">
                        <span className="text-cyber-purple">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Other Card - Placeholder */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full bg-gradient-to-b from-[#111] to-[#1a1a1a] border-gray-800 border-dashed shadow-lg hover:shadow-[0_0_15px_rgba(162,89,255,0.7)] hover:border-cyber-purple/70 transition-all duration-300"
                role="region" 
                aria-label="Other Achievements"
              >
                <CardHeader>
                  <CardTitle className="text-[#e0dfff] uppercase tracking-[0.05em]">Other Achievements</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-full">
                  <p className="text-[#c0bfe0] text-center italic opacity-70">Coming Soon</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import AchievementsModal from "./AchievementsModal";

// Data for achievements categories
const ctfAchievements = [
  "1st Place (Winner) at the CTF Organized by Indian Territorial Army (TCQ) in 2024",
  "Top National Finalist at the CTF organized by IIT Patna in 2023",
  "1st Place (Winner) at the CTF Organized by IIT Bhubneshwar in 2022",
  "2nd Place at the CTF Organized by IIT Madras and 2nd Place at the CTF Organized by BITS, Hyderabad in 2023",
  "3rd Place at the CTF Organized by Data Security Council of India (DSCI) and 3rd Place at the CTF Organized by IIT Roorkee in 2023",
  "Top National Finalist at the National CTF by TrustLab, IIT Bombay and Top National Finalist at the Embedded Security CTF by IIT Madras & DSCI in 2022"
];

const bugBountyAchievements = [
  "Received bounty and certificate of appreciation for identifying and reporting security vulnerabilities in PhysicsWallah & Talent.com (2022)",
  "Listed in the Hall of Fame for responsible disclosure of security vulnerabilities in airtame.com (2022)",
  "Received appreciation for security contributions and vulnerability reporting from IndiaMart & NCIIPC (Government of India) (2022)"
];

const otherAchievements = []; // Placeholder for future

const cards = [
  {
    title: "CTFs",
    icon: <Award className="h-8 w-8 text-cyber-purple" />,
    items: ctfAchievements,
    ariaLabel: "CTFs Achievements"
  },
  {
    title: "Bug Bounty / HOF",
    icon: <BadgeCheck className="h-8 w-8 text-cyber-purple" />,
    items: bugBountyAchievements,
    ariaLabel: "Bug Bounty & Hall of Fame Achievements"
  },
  {
    title: "Other",
    icon: null,
    items: otherAchievements,
    ariaLabel: "Other Achievements"
  }
];

export default function AchievementsSection() {
  const [openModal, setOpenModal] = useState(null as null | number);

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
          {/* Three Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                role="region"
                aria-label={card.ariaLabel}
                className="select-none"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(90, 45, 130, 0.3)" }}
              >
                <button
                  type="button"
                  className={`group w-full h-full bg-gradient-to-b from-[#111] to-[#1a1a1a] border-gray-800 rounded-lg shadow-lg border hover:shadow-[0_0_15px_rgba(162,89,255,0.7)] hover:border-cyber-purple/70 transition-all duration-300 outline-none focus:ring-2 focus:ring-cyber-purple/80 flex flex-col justify-between items-center py-12 px-4 ${idx === 2 ? "border-dashed" : ""}`}
                  onClick={() => idx !== 2 ? setOpenModal(idx) : null}
                  tabIndex={0}
                  aria-label={card.title + " details"}
                  disabled={idx === 2}
                >
                  <div className="flex flex-col items-center gap-4">
                    {card.icon}
                    <span className="uppercase tracking-[0.05em] text-[#e0dfff] font-bold text-lg md:text-xl text-center">{card.title}</span>
                  </div>
                  {idx === 2 && (
                    <span className="text-[#c0bfe0] text-center italic opacity-70 mt-6">Coming Soon</span>
                  )}
                </button>
                {/* MODAL for category */}
                {openModal === idx && (
                  <AchievementsModal
                    title={card.title}
                    items={card.items}
                    open={openModal === idx}
                    onClose={() => setOpenModal(null)}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { useState } from "react";
import { Award, BadgeCheck } from "lucide-react";
import { AchievementDrawerPanel } from "./AchievementDrawerPanel";

// Awards data: concise, bulleted format for clarity/readability
const ctfAchievements = [
  "1st Place (Winner), Territorial Army (TCQ CTF), 2024",
  "Top National Finalist, IIT Patna CTF, 2023",
  "1st Place (Winner), IIT Bhubneshwar CTF, 2022",
  "2nd Place, IIT Madras CTF, 2023",
  "2nd Place, BITS Hyderabad CTF, 2023",
  "3rd Place, DSCI CTF, 2023",
  "3rd Place, IIT Roorkee CTF, 2023",
  "Top National Finalist, TrustLab CTF (IIT Bombay), 2022",
  "Top National Finalist, Embedded Security CTF (IIT Madras & DSCI), 2022"
];

const bugBountyAchievements = [
  "Bounty & Certificate, vulnerabilities in PhysicsWallah & Talent.com (2022)",
  "Hall of Fame, airtame.com (2022)",
  "Appreciation, IndiaMart & NCIIPC (Govt. of India) (2022)"
];

const otherAchievements: string[] = [];

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
  const [openPanelIdx, setOpenPanelIdx] = useState<null | number>(null);

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <div
                key={card.title}
                role="region"
                aria-label={card.ariaLabel}
                className={`group transition-all`}
              >
                <button
                  type="button"
                  className={`w-full h-full bg-gradient-to-b from-[#111] to-[#1a1a1a] border-gray-800 rounded-lg shadow-lg border hover:shadow-[0_4px_24px_rgba(162,89,255,0.24)] hover:border-cyber-purple/70 transition-all duration-300 outline-none focus:ring-2 focus:ring-cyber-purple flex flex-col justify-between items-center py-12 px-4 ${idx === 2 ? "border-dashed" : ""}`}
                  onClick={() => idx !== 2 ? setOpenPanelIdx(idx) : null}
                  aria-label={card.title + " details"}
                  tabIndex={0}
                  disabled={idx === 2}
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                    fontFamily: "inherit",
                  }}
                >
                  <div className="flex flex-col items-center gap-4">
                    {card.icon}
                    <span className="uppercase tracking-[0.05em] text-[#e0dfff] font-bold text-lg md:text-xl text-center">{card.title}</span>
                  </div>
                  {idx === 2 && (
                    <span className="text-[#c0bfe0] text-center italic opacity-70 mt-6">Coming Soon</span>
                  )}
                </button>
                {/* Drawer Panel for this category */}
                {openPanelIdx === idx && (
                  <AchievementDrawerPanel
                    title={card.title}
                    items={card.items}
                    open={openPanelIdx === idx}
                    onClose={() => setOpenPanelIdx(null)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

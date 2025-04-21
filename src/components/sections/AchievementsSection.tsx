
import { useRef, useCallback, useEffect, useState } from "react";
import { Award, BadgeCheck } from "lucide-react";
import AwardsModal from "./AwardsModal";

const ctfAchievements = [
  "1st Place (Winner), IIT Bhubneshwar CTF, 2022",
  "2nd Place, IIT Madras CTF, 2023",
  "2nd Place, BITS Hyderabad CTF, 2023",
  "3rd Place, DSCI CTF, 2023",
  "3rd Place, IIT Roorkee CTF, 2023",
  "Top National Finalist, TCQ CTF (Indian Army), 2024",
  "Top National Finalist, IIT Patna CTF, 2023",
  "Top National Finalist, TrustLab CTF (IIT Bombay), 2022",
  "Top National Finalist, Embedded Security CTF (IIT Madras & DSCI), 2022"
];
const bugBountyAchievements = [
  "Bounty & Certificate, PhysicsWallah & Talent.com (2022)",
  "Hall of Fame, airtame.com (2022)",
  "Appreciation, IndiaMart & NCIIPC (Govt. of India) (2022)"
];
const otherAchievements: string[] = [];

const cards = [
  {
    title: "CTFs",
    icon: <Award className="h-9 w-9 text-cyber-purple" />,
    items: ctfAchievements,
    ariaLabel: "CTFs Achievements"
  },
  {
    title: "Bug Bounty / HOF",
    icon: <BadgeCheck className="h-9 w-9 text-cyber-purple" />,
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

// Debounce helper
const useDebouncedFunction = (fn: (...args: any[]) => void, delay = 250) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const isLocked = useRef(false);
  return useCallback((...args: any[]) => {
    if (isLocked.current) return;
    isLocked.current = true;
    fn(...args);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      isLocked.current = false;
    }, delay);
  }, [fn, delay]);
};

export default function AchievementsSection() {
  // Single modal state: {title, items} or null if closed
  const [modalData, setModalData] = useState<{ title: string; items: string[] } | null>(null);

  // Trap focus when modal is open, allow Esc to close
  useEffect(() => {
    if (!modalData) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalData(null);
    };

    document.body.style.overflow = "hidden"; // Prevent background scroll
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = ""; // Restore scroll
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalData]);

  // Debounced modal opener
  const handleOpenModal = useDebouncedFunction((cardIdx: number) => {
    const card = cards[cardIdx];
    if (!card || !card.items) return;
    setModalData({ title: card.title, items: card.items });
  }, 250);

  // Close modal precisely
  const handleCloseModal = () => setModalData(null);

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
              <button
                key={card.title}
                type="button"
                role="region"
                aria-label={card.ariaLabel}
                className={`
                  group transition-all
                  min-h-[190px] relative
                  rounded-[8px]
                  shadow-lg
                  border
                  border-gray-800
                  bg-gradient-to-b from-[#111] to-[#1a1a1a]
                  hover:-translate-y-0.5
                  hover:shadow-[0_4px_24px_rgba(162,89,255,0.18)]
                  hover:border-cyber-purple/70
                  focus-visible:ring-2 focus-visible:ring-cyber-purple
                  cursor-pointer
                  w-full
                  flex flex-col items-center justify-center
                  ${idx === 2 ? "border-dashed border-2" : ""}
                `}
                disabled={card.items.length === 0}
                tabIndex={card.items.length === 0 ? -1 : 0}
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  fontFamily: "inherit"
                }}
                onClick={() => card.items.length !== 0 && handleOpenModal(idx)}
                onKeyDown={e => {
                  if ((e.key === "Enter" || e.key === " ") && card.items.length !== 0) {
                    handleOpenModal(idx);
                  }
                }}
              >
                <div className="flex flex-col items-center gap-5 py-10 px-4 select-none w-full">
                  {card.icon}
                  <span className="uppercase tracking-[0.05em] text-[#e0dfff] font-bold text-lg md:text-xl text-center">{card.title}</span>
                  {idx === 2 && (
                    <span className="text-[#c0bfe0] text-center italic opacity-60 mt-5"></span>
                    //                    <span className="text-[#c0bfe0] text-center italic opacity-60 mt-5">Coming Soon</span>

                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Unified Modal (single instance) */}
      {modalData && (
        <AwardsModal
          title={modalData.title}
          items={modalData.items}
          isOpen={!!modalData}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

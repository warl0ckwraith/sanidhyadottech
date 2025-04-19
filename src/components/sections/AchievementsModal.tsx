
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AchievementsModalProps {
  title: string;
  items: string[];
  open: boolean;
  onClose: () => void;
}

export default function AchievementsModal({ title, items, open, onClose }: AchievementsModalProps) {
  if (!open) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          className="relative w-full max-w-xl mx-auto bg-[#141022] rounded-xl p-8 shadow-2xl"
          onClick={e => e.stopPropagation()}
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/70 hover:bg-gray-700/80 transition-colors outline-none focus:ring-2 focus:ring-cyber-purple/80"
            aria-label="Close"
            tabIndex={0}
            type="button"
          >
            <X className="h-5 w-5 text-gray-300" />
          </button>
          <h3 className="text-2xl font-bold text-cyber-purple mb-6 text-center">{title}</h3>
          <ul className="space-y-4 px-2">
            {items.map((item, idx) => (
              <li 
                key={idx}
                className="flex gap-3 text-[#c0bfe0] leading-relaxed items-baseline"
              >
                <span className="text-cyber-purple font-bold">→</span>
                <span>{item}</span>
              </li>
            ))}
            {items.length === 0 && (
              <li className="text-[#c0bfe0] text-center italic opacity-75 py-10">No achievements available yet.</li>
            )}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

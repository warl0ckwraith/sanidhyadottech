
import { Drawer, DrawerContent, DrawerOverlay } from "@/components/ui/drawer";
import { X, ArrowRight } from "lucide-react";
import React from "react";

interface AchievementDrawerPanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  items: string[];
}

export const AchievementDrawerPanel: React.FC<AchievementDrawerPanelProps> = ({
  open,
  onClose,
  title,
  items,
}) => {
  // Trap focus, allow ESC to close, close when overlay clicked (Drawer covers these)
  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerOverlay onClick={onClose} aria-label="Close achievements panel" />
      <DrawerContent
        className="fixed right-0 top-0 h-full w-full max-w-2xl md:max-w-[70vw] bg-[#141022] z-[99] shadow-2xl border-l border-cyber-purple/30 outline-none p-0 animate-slide-in-right data-[state=closed]:animate-slide-out-right rounded-none"
        role="dialog"
        aria-label={title + " awards and achievements"}
        tabIndex={-1}
      >
        <div className="relative h-full flex flex-col">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/90 focus:outline-none focus:ring-2 focus:ring-cyber-purple transition-colors z-10"
            aria-label="Close panel"
            tabIndex={0}
            type="button"
          >
            <X className="h-7 w-7 text-cyber-purple" />
          </button>
          {/* Title */}
          <h2 className="text-2xl font-bold text-cyber-purple text-center mt-14 mb-8 select-none">{title}</h2>
          {/* Bullet List */}
          <ul className="flex-1 overflow-y-auto px-8 pb-10 pt-0">
            {items.length > 0 ? (
              items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#e0dfff] mb-5 text-base leading-relaxed pl-2"
                  style={{ lineHeight: 1.7 }}
                >
                  <ArrowRight
                    className="flex-shrink-0 mt-0.5 text-cyber-purple"
                    size={18}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <span className="text-[#c0bfe0]">{item}</span>
                </li>
              ))
            ) : (
              <li className="text-[#c0bfe0] text-lg text-center italic opacity-70 py-16">
                No achievements yet in this category.
              </li>
            )}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

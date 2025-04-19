
import React, { useEffect, useRef } from "react";
import { X, ArrowRight } from "lucide-react";

interface AchievementDrawerPanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  items: string[];
  side?: "right" | "left";
}

export const AchievementDrawerPanel: React.FC<AchievementDrawerPanelProps> = ({
  open,
  onClose,
  title,
  items,
  side = "right",
}) => {
  // Trap focus inside the panel and allow ESC to close
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    // Focus trap: move focus inside on open
    const previouslyFocused = document.activeElement as HTMLElement | null;
    if (panelRef.current) panelRef.current.focus();

    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Focus trapping
    const handleTab = (e: KeyboardEvent) => {
      if (!panelRef.current) return;
      const focusableEls = panelRef.current.querySelectorAll<HTMLElement>(
        'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];
      if (!first || !last) return;
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", escHandler);
    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", escHandler);
      document.removeEventListener("keydown", handleTab);
      if (previouslyFocused) previouslyFocused.focus();
    };
  }, [open, onClose]);

  // Animate in/out - always mounted, use pointer-events/opacity to fade
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-black/70 transition-opacity duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden="true"
        onClick={onClose}
        tabIndex={-1}
        style={{ transitionProperty: "opacity" }}
      />
      {/* Side Panel */}
      <aside
        role="dialog"
        aria-label={`${title} awards and achievements`}
        tabIndex={-1}
        ref={panelRef}
        className={`
          fixed top-0 ${side === "right" ? "right-0" : "left-0"}
          h-full w-full sm:max-w-[70vw] max-w-[560px]
          bg-[#141022] z-[100] shadow-2xl border-l border-cyber-purple/30
          outline-none p-0
          transition-transform duration-300 ease-in-out
          ${open
            ? "translate-x-0 opacity-100"
            : side === "right"
            ? "translate-x-full opacity-0"
            : "-translate-x-full opacity-0"
          }
          rounded-none flex flex-col
        `}
        style={{ transitionProperty: "transform,opacity" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/90 focus:outline-none focus:ring-2 focus:ring-cyber-purple transition-colors z-10"
          aria-label="Close panel"
          type="button"
          tabIndex={0}
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
      </aside>
    </>
  );
};

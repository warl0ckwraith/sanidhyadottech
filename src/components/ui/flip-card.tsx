
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
}

export function FlipCard({ frontContent, backContent, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={cn(
        "relative w-full h-full min-h-[200px] cursor-pointer perspective-1000 group", 
        className
      )}
      onClick={toggleFlip}
    >
      <motion.div 
        className={cn(
          "relative w-full h-full transition-all duration-500 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front side */}
        <motion.div 
          className={cn(
            "absolute inset-0 bg-gray-900/50 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyber-purple transition-all duration-300 shadow-lg backface-hidden flex flex-col",
            !isFlipped ? "z-10" : "z-0"
          )}
          whileHover={{ boxShadow: "0 0 15px rgba(90,45,130,0.5)" }}
        >
          <div className="flex-grow">
            {frontContent}
          </div>
        </motion.div>
        
        {/* Back side */}
        <motion.div 
          className={cn(
            "absolute inset-0 bg-gray-900/80 dark:bg-gray-900/80 rounded-lg p-6 border border-cyber-purple transition-all duration-300 shadow-lg backface-hidden rotate-y-180 flex flex-col",
            isFlipped ? "z-10" : "z-0"
          )}
          whileHover={{ boxShadow: "0 0 15px rgba(90,45,130,0.5)" }}
        >
          <div className="flex-grow overflow-auto pb-2">
            {backContent}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

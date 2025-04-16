
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

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
      <div 
        className={cn(
          "relative w-full h-full transition-all duration-500 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front side */}
        <div 
          className={cn(
            "absolute inset-0 bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyber-purple transition-all duration-300 shadow-lg backface-hidden flex flex-col",
            !isFlipped ? "z-10" : "z-0"
          )}
        >
          <div className="flex-grow">
            {frontContent}
          </div>
          <div className="flex justify-end items-center mt-2 text-cyber-purple text-sm">
            <Info className="h-4 w-4 mr-1" />
            <span>Click for details</span>
          </div>
        </div>
        
        {/* Back side */}
        <div 
          className={cn(
            "absolute inset-0 bg-gray-900/80 rounded-lg p-6 border border-cyber-purple transition-all duration-300 shadow-lg backface-hidden rotate-y-180 flex flex-col",
            isFlipped ? "z-10" : "z-0"
          )}
        >
          <div className="flex-grow overflow-auto pb-4">
            {backContent}
          </div>
          <div className="flex justify-end items-center mt-2 text-cyber-purple text-sm">
            <span>Click to go back</span>
          </div>
        </div>
      </div>
    </div>
  );
}

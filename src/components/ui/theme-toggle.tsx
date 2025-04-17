
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure this component only renders after mounted to prevent hydration issues
  useEffect(() => {
    setMounted(true);

    // Check system preference
    if (!localStorage.getItem("sanidhya-portfolio-theme")) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full bg-background/10 backdrop-blur-sm border border-border/30 hover:bg-background/20 transition-all"
        aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-foreground" />
        )}
      </Button>
    </motion.div>
  );
}

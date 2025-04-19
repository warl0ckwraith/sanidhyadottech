
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Persist key for user theme
const themeStorageKey = "themePreference";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // On mount: if localStorage empty, detect system preference and set
    if (!localStorage.getItem(themeStorageKey)) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      // Save system default under our key
      localStorage.setItem(themeStorageKey, prefersDark ? "dark" : "light");
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
        onClick={() => {
          const nextTheme = theme === "light" ? "dark" : "light";
          setTheme(nextTheme);
          localStorage.setItem(themeStorageKey, nextTheme);
          // Immediately update class for instant effect
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(nextTheme);
        }}
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

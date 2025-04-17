
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ui/theme-provider";
import { BackToTop } from "./components/ui/back-to-top";
import { useEffect } from "react";

const queryClient = new QueryClient();

// This component adds an inline script to handle theme before CSS loads
const ThemeScript = () => {
  useEffect(() => {
    // This effect runs only on client side
    const script = document.createElement("script");
    script.innerHTML = `
      (function() {
        try {
          const storedTheme = localStorage.getItem('sanidhya-portfolio-theme');
          if (storedTheme) {
            document.documentElement.classList.add(storedTheme);
          } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
          }
        } catch (e) {}
      })();
    `;
    script.async = false;
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="sanidhya-portfolio-theme">
      <ThemeScript />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <BackToTop />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Menu, X, User, Briefcase, BookOpen, MessageSquare,
  Book
} from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about', icon: <User className="h-4 w-4" />, shortLabel: '👤' },
  { name: 'Experience', href: '#experience', icon: <Briefcase className="h-4 w-4" />, shortLabel: '🕒' },
  { name: 'Work', href: '#projects', icon: <BookOpen className="h-4 w-4" />, shortLabel: '📁' },
  { name: 'Contact', href: '#contact', icon: <MessageSquare className="h-4 w-4" />, shortLabel: '✉️' },
  { name: 'Blog', href: '#blog', icon: <BookOpen className="h-4 w-4" />, shortLabel: '📚' },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const id = section.getAttribute('id');
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight && id) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-[10px]",
        scrolled 
          ? "bg-black/80 dark:bg-black/80 border-b border-cyber-purple/30 shadow-lg"
          : "bg-transparent"
      )}
      style={{ height: '60px' }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#about"
          className="font-mono font-bold text-lg tracking-tight text-white relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="About"
        >
          <span className="relative z-10 group-hover:text-cyber-neon transition-colors duration-200">
            SS
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-neon group-hover:w-full transition-all duration-300"></span>
        </motion.a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium relative group",
                activeSection === item.href.substring(1) 
                  ? "text-cyber-neon" 
                  : "text-[#c0bfe0] hover:text-white transition-colors duration-200"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.name}
            >
              <span className="flex items-center gap-1.5">
                <span>{item.shortLabel}</span>
                <span>{item.name}</span>
              </span>
              <span 
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-cyber-neon transition-all duration-300",
                  activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                )}
              ></span>
            </motion.a>
          ))}
        </nav>
        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.button 
            className="md:hidden text-[#c0bfe0] hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 w-full bg-black/95 dark:bg-black/95 backdrop-blur-lg border-b border-cyber-purple/20",
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium p-2 flex items-center gap-3 rounded-md",
                  activeSection === item.href.substring(1)
                    ? "bg-cyber-purple/20 text-cyber-neon" 
                    : "text-[#c0bfe0] hover:bg-cyber-purple/10 hover:text-white transition-colors duration-200"
                )}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label={item.name}
              >
                {item.icon}
                {item.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

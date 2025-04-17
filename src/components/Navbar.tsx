
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Menu, X, Home, User, Code, Briefcase, Award, 
  FileText, MessageSquare, BookOpen, GraduationCap 
} from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home', icon: <Home className="h-4 w-4" /> },
  { name: 'About', href: '#about', icon: <User className="h-4 w-4" /> },
  { name: 'Skills', href: '#skills', icon: <Code className="h-4 w-4" /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase className="h-4 w-4" /> },
  { name: 'Projects', href: '#projects', icon: <BookOpen className="h-4 w-4" /> },
  { name: 'Certifications', href: '#certifications', icon: <GraduationCap className="h-4 w-4" /> },
  { name: 'Achievements', href: '#achievements', icon: <Award className="h-4 w-4" /> },
  { name: 'Resume', href: '#resume', icon: <FileText className="h-4 w-4" /> },
  { name: 'Contact', href: '#contact', icon: <MessageSquare className="h-4 w-4" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Find active section based on scroll position
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-cyber-purple/30 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="font-bold text-xl tracking-tight text-white relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 group-hover:text-cyber-neon transition-colors duration-200">
            S<span className="text-cyber-purple">S</span>
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
                  : "text-gray-300 hover:text-white transition-colors duration-200"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-1.5">
                {item.icon}
                {item.name}
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
        
        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
                    : "text-gray-300 hover:bg-cyber-purple/10 hover:text-white transition-colors duration-200"
                )}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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

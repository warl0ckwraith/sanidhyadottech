
import { Github, Linkedin, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyber-purple/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">
              Sanidhya <span className="text-cyber-purple">Soni</span>
            </h2>
            <p className="text-gray-400 mt-1">Cybersecurity Expert & Researcher</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/sanidhyasonii" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-cyber-neon transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://sanidhya.tech" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-cyber-neon transition-colors duration-300">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </a>
            <a href="mailto:sanidhyasonii@proton.me" 
               className="text-gray-400 hover:text-cyber-neon transition-colors duration-300">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sanidhya Soni. All rights reserved.
          </p>
          
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

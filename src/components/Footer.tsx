import { Github, Linkedin, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-3 pb-8">

        
        <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Sanidhya Soni. All rights reserved.
          </p>
          
          <nav className="flex space-x-4 mt-2 md:mt-0">
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

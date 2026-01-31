import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sanidhya Soni. Engineered for resilience.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/sanidhyasonii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sanidhyasonii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:sanidhyasonii@proton.me" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <nav className="flex space-x-6">
            <a href="#home" className="text-gray-500 hover:text-cyber-purple text-sm transition-colors">Home</a>
            <a href="#about" className="text-gray-500 hover:text-cyber-purple text-sm transition-colors">About</a>
            <a href="#projects" className="text-gray-500 hover:text-cyber-purple text-sm transition-colors">Work</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}


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
            {/* Upwork logo as SVG */}
            <a href="https://www.upwork.com/freelancers/~01b5f2bdbe5d3eb58e" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-cyber-neon transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <g><path d="M20.534 15.026c-.055-.068-2.33-2.945-3.805-5.607-.327.67-.68 1.336-1.052 1.985-.707 1.206-1.37 2.258-1.993 3.16v4.267c0 .557-.454 1.03-1.013 1.03h-.002c-.557 0-1.011-.454-1.011-1.03V13.78c-1.734 2.25-3.143 3.59-4.228 3.984-.382.136-.8.05-1.098-.223-.297-.272-.401-.714-.256-1.102.2-.513.73-.787 1.234-.62.362.119.582.279.943.179.673-.191 2.266-2.186 3.571-3.853V8.337c0-.556.455-1.009 1.013-1.009.56 0 1.013.453 1.013 1.009v3.181a46.36 46.36 0 001.539-2.642C15.094 7.312 15.9 6 16.21 6c.146 0 .292.031.49.205.047.041 1.206 2.18 2.41 4.071.571-.29 1.182-.515 1.82-.653.336-.073.684-.111 1.03-.111 2.376 0 4.314 2.057 4.314 4.581 0 2.523-1.938 4.58-4.314 4.58a4.077 4.077 0 01-2.978-1.281zm2.342-3.425c-.247 0-.489.026-.728.076-.097.019-.187.059-.283.085a30.94 30.94 0 01-.664.258 41.014 41.014 0 012.222 3.027c.065.087.13.172.197.256.299-.456.472-.979.472-1.544-.001-1.404-1.096-2.572-2.423-2.572zm0 5.141c.398 0 .779-.067 1.136-.191-.057-.074-.114-.149-.174-.229a39.46 39.46 0 00-2.303-3.131c-.649 1.25-1.27 2.386-1.27 2.386a2.597 2.597 0 002.611 1.165zm-14.545 2.112c.259.0.469.219.469.487a.475.475 0 01-.469.484.474.474 0 01-.47-.484c0-.269.211-.487.47-.487z"/></g>
              </svg>
              <span className="sr-only">Upwork</span>
            </a>
            <a href="mailto:sanidhyasonii@proton.me" 
               className="text-gray-400 hover:text-cyber-neon transition-colors duration-300">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

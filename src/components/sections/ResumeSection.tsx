
import { Download } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">My</span>
            <span className="text-cyber-purple"> Resume</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Download My Complete Resume
            </h3>
            
            <p className="text-gray-300 mb-8">
              For a comprehensive overview of my skills, experiences, certifications, and achievements, 
              please download my complete resume using the button below.
            </p>
            
            <a 
              href="/resume-sanidhya-soni.pdf" 
              download="Resume-SanidhyaSoni.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-purple text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_10px_rgba(90,45,130,0.5)] hover:shadow-[0_0_15px_rgba(90,45,130,0.8)]"
            >
              <Download className="h-5 w-5" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

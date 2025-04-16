
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "CTF Challenge Suite",
    category: "Security Challenges",
    description: "Designed 50+ CTF challenges across various security domains including web exploitation, reverse engineering, cryptography, and forensics for high-profile competitions.",
    technologies: ["Docker", "Python", "JavaScript", "Linux"],
    image: "ctf-challenges", // Will be replaced with actual image
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 2,
    title: "Android Security Framework",
    category: "Mobile Security",
    description: "Developed a comprehensive Android pentesting framework for automated vulnerability scanning, application analysis, and security hardening recommendations.",
    technologies: ["Kotlin", "Java", "Smali", "AndroidSDK"],
    image: "android-security", // Will be replaced with actual image
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 3,
    title: "Digital Forensics Toolkit",
    category: "Forensics",
    description: "Created specialized forensic analysis tools for digital evidence extraction, file carving, and metadata examination with detailed reporting features.",
    technologies: ["Python", "C++", "ElectronJS"],
    image: "forensics-toolkit", // Will be replaced with actual image
    links: {
      github: "#"
    }
  },
  {
    id: 4,
    title: "Network Traffic Analyzer",
    category: "Network Security",
    description: "Built an advanced traffic analysis tool with anomaly detection, protocol inspection, and visualization features for security operations centers.",
    technologies: ["Python", "Wireshark API", "ElasticSearch", "D3.js"],
    image: "traffic-analyzer", // Will be replaced with actual image
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 5,
    title: "Security Training Platform",
    category: "Education",
    description: "Developed an interactive security training platform with hands-on labs, custom vulnerabilities, and progressive learning paths for cybersecurity students.",
    technologies: ["React", "Node.js", "Docker", "MongoDB"],
    image: "training-platform", // Will be replaced with actual image
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 6,
    title: "IoT Security Scanner",
    category: "IoT Security",
    description: "Created an automated scanner for IoT devices that identifies vulnerabilities, weak configurations, and outdated firmware with remediation recommendations.",
    technologies: ["Python", "Rustscan", "MQTT", "ZigBee"],
    image: "iot-scanner", // Will be replaced with actual image
    links: {
      github: "#"
    }
  }
];

const categories = ["All", ...new Set(projects.map(project => project.category))];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Projects</span>
            <span className="text-cyber-purple"> & CTF Challenges</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category 
                    ? "bg-cyber-purple text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-cyber-purple transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyber-purple/20 to-black">
                    <span className="text-4xl text-cyber-purple/30 font-bold">{project.image}</span>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          className="p-3 bg-black/80 rounded-full text-white hover:text-cyber-neon transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          className="p-3 bg-black/80 rounded-full text-white hover:text-cyber-neon transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <span className="px-2 py-1 bg-cyber-purple/10 text-cyber-purple text-xs rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-5">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Projects */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6">
              These projects represent a portion of my professional work. 
              I've built many more security tools and participated in numerous CTF events.
            </p>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 border border-cyber-purple text-white hover:bg-cyber-purple/10 transition-all duration-300 rounded"
            >
              Discuss a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

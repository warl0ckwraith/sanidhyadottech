
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "CTF Challenges - Vulncon",
    category: "Security Challenges",
    description: "Developed digital forensics based CTF challenges for Vulncon Security Conference in Bengaluru, focusing on real-world security scenarios and practical exploitation techniques.",
    technologies: ["Docker", "Python", "Digital Forensics", "Linux"],
    image: "vulncon-ctf", // Will be replaced with actual image
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 2,
    title: "BSides Mumbai Challenges",
    category: "CTF Development",
    description: "Created diverse CTF challenges for BSides Mumbai 2024, covering areas such as web exploitation, reverse engineering, cryptography, and network security.",
    technologies: ["Docker", "YAML", "JavaScript", "Python"],
    image: "bsides-mumbai", // Will be replaced with actual image
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 3,
    title: "BSides Indore Challenges",
    category: "Forensics",
    description: "Designed and implemented digital forensics based CTF challenges for the BSides Indore onsite event, enhancing participant engagement and learning.",
    technologies: ["Python", "Memory Forensics", "Disk Forensics"],
    image: "bsides-indore", // Will be replaced with actual image
    links: {
      github: "#"
    }
  },
  {
    id: 4,
    title: "IoT Scanning & Exploitation Framework - AISE",
    category: "Security Tools",
    description: "Developed an IoT scanner and exploitation tool using Docker, Python, Rustscan, Nmap, with integration for Shodan, Censys, and Zoomeye APIs for comprehensive device discovery.",
    technologies: ["Python", "Docker", "Rustscan", "Nmap", "SQLite3"],
    image: "aise-framework", // Will be replaced with actual image
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 5,
    title: "Security Workshop - JECRC University",
    category: "Education",
    description: "Conducted training sessions as a Workshop Speaker in Cyber Security at JECRC University, Jaipur in collaboration with CyberSecuredIndia, Aspire For Her, and Infosys.",
    technologies: ["Security Training", "Workshops", "Cybersecurity"],
    image: "security-workshop", // Will be replaced with actual image
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 6,
    title: "Android Pentesting Framework",
    category: "Mobile Security",
    description: "Designed and implemented an Android pentesting and exploitation course framework with both practical and theoretical components for security training.",
    technologies: ["Android", "Kotlin", "Java", "Docker"],
    image: "android-framework", // Will be replaced with actual image
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
              I've built many more security tools and participated in numerous CTF events,
              winning multiple competitions at national level.
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

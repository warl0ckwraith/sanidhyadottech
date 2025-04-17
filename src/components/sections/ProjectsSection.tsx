
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FlipCard } from "../ui/flip-card";
import { Badge } from "../ui/badge";

const projects = [
  {
    id: 1,
    title: "CTF Challenges - Vulncon",
    category: "Security Challenges",
    description: "Developed digital forensics based CTF challenges for Vulncon Security Conference in Bengaluru, focusing on real-world security scenarios and practical exploitation techniques.",
    technologies: ["Docker", "Python", "Digital Forensics", "Linux"],
  },
  {
    id: 2,
    title: "BSides Mumbai Challenges",
    category: "CTF Development",
    description: "Created diverse CTF challenges for BSides Mumbai 2024, covering areas such as web exploitation, reverse engineering, cryptography, and network security.",
    technologies: ["Docker", "YAML", "JavaScript", "Python"],
  },
  {
    id: 3,
    title: "BSides Indore Challenges",
    category: "Forensics",
    description: "Designed and implemented digital forensics based CTF challenges for the BSides Indore onsite event, enhancing participant engagement and learning.",
    technologies: ["Python", "Memory Forensics", "Disk Forensics"],
  },
  {
    id: 4,
    title: "IoT Scanning & Exploitation Framework - AISE",
    category: "Security Tools",
    description: "Developed an IoT scanner and exploitation tool using Docker, Python, Rustscan, Nmap, with integration for Shodan, Censys, and Zoomeye APIs for comprehensive device discovery.",
    technologies: ["Python", "Docker", "Rustscan", "Nmap", "SQLite3", "Shodan API", "Censys API"],
  },
  {
    id: 5,
    title: "Security Workshop - JECRC University",
    category: "Education",
    description: "Conducted training sessions as a Workshop Speaker in Cyber Security at JECRC University, Jaipur in collaboration with CyberSecuredIndia, Aspire For Her, and Infosys.",
    technologies: ["Security Training", "Workshops", "Cybersecurity"],
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
              <div key={project.id} className="h-full">
                <FlipCard 
                  frontContent={
                    <>
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <Badge variant="purple-light" className="font-medium">
                        {project.category}
                      </Badge>
                    </>
                  }
                  backContent={
                    <>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      
                      <div className="mt-auto">
                        <h4 className="text-cyber-purple text-xs mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="purple-light" className="text-white">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

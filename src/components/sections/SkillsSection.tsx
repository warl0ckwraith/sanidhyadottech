import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Code2, Terminal, Shield, Bug, 
  Network, Wifi, Database, GitBranch,
  // Dock is not available in lucide-react
  // Using alternative icons for Docker and other tools
  Box,
  Cloud,
  Globe2,
  LucideNetwork, // For Docker instead of Dock
  // Removed Python, Java, Cpp, Php, Mysql, Bash, Kotlin, Burpsuite, Wireshark, Metasploit, Aircrack
  // as they don't exist in lucide-react
} from "lucide-react";

const skills = {
  technologies: [
    { name: "Python", icon: <Code2 className="h-5 w-5" />, level: "core" },
    { name: "PHP", icon: <Code2 className="h-5 w-5" />, level: "secondary" },
    { name: "MySQL", icon: <Database className="h-5 w-5" />, level: "secondary" },
    { name: "Bash", icon: <Terminal className="h-5 w-5" />, level: "core" },
    { name: "C++", icon: <Code2 className="h-5 w-5" />, level: "secondary" },
    { name: "Java", icon: <Code2 className="h-5 w-5" />, level: "secondary" },
    { name: "Kotlin", icon: <Code2 className="h-5 w-5" />, level: "secondary" },
    { name: "Docker", icon: <Box className="h-5 w-5" />, level: "core" },
    { name: "AWS", icon: <Cloud className="h-5 w-5" />, level: "secondary" },

  ],
  tools: [
    { name: "Git", icon: <GitBranch className="h-5 w-5" />, level: "core" },
    { name: "Burpsuite", icon: <Globe2 className="h-5 w-5" />, level: "core" },
    { name: "Wireshark", icon: <LucideNetwork className="h-5 w-5" />, level: "core" },
    { name: "Metasploit", icon: <Code2 className="h-5 w-5" />, level: "core" },
    { name: "Crackmapexec", icon: <Code2 className="h-5 w-5" />, level: "secondary" },
    { name: "Bloodhound", icon: <Code2 className="h-5 w-5" />, level: "secondary" },

  ],
  specializations: [
    { name: "Network Pentesting", icon: <Network className="h-5 w-5" />, level: "core" },
    { name: "Active Directory", icon: <Database className="h-5 w-5" />, level: "core" },
    { name: "Web Security", icon: <Code2 className="h-5 w-5" />, level: "core" },
    { name: "Wireless Security", icon: <Wifi className="h-5 w-5" />, level: "secondary" },
    { name: "Source Code Review", icon: <Terminal className="h-5 w-5" />, level: "secondary" },
    { name: "Red Team Operations", icon: <Terminal className="h-5 w-5" />, level: "core" },
    { name: "CTF Development", icon: <Code2 className="h-5 w-5" />, level: "core" },
    { name: "Digital Forensics", icon: <Box className="h-5 w-5" />, level: "secondary" },  
 
  ]
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Skills</span>
            <span className="text-cyber-purple"> & Tools</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["all", "technologies", "tools", "specializations"].map((category) => (
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
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 max-w-4xl mx-auto hover:border-cyber-purple transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Languages */}
                <div className={cn("space-y-4", activeCategory !== "all" && activeCategory !== "technologies" && "hidden")}>
                  <h3 className="text-lg font-medium text-white flex items-center">
                    <Code2 className="h-5 w-5 text-cyber-purple mr-2" />
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technologies.map((skill) => (
                      <div
                        key={skill.name}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300",
                          skill.level === "core" 
                            ? "bg-cyber-purple/20 text-white" 
                            : "bg-gray-800/50 text-gray-300"
                        )}
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tools */}
                <div className={cn("space-y-4", activeCategory !== "all" && activeCategory !== "tools" && "hidden")}>
                  <h3 className="text-lg font-medium text-white flex items-center">
                    <Terminal className="h-5 w-5 text-cyber-purple mr-2" />
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300",
                          tool.level === "core" 
                            ? "bg-cyber-purple/20 text-white" 
                            : "bg-gray-800/50 text-gray-300"
                        )}
                      >
                        {tool.icon}
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-8">
                {/* Specializations */}
                <div className={cn("space-y-4", activeCategory !== "all" && activeCategory !== "specializations" && "hidden")}>
                  <h3 className="text-lg font-medium text-white flex items-center">
                    <Shield className="h-5 w-5 text-cyber-purple mr-2" />
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.specializations.map((spec) => (
                      <div
                        key={spec.name}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300",
                          spec.level === "core" 
                            ? "bg-cyber-purple/20 text-white" 
                            : "bg-gray-800/50 text-gray-300"
                        )}
                      >
                        {spec.icon}
                        <span>{spec.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Professional Competence */}
                {/* <div className={cn("space-y-4", activeCategory !== "all" && activeCategory !== "professional" && "hidden")}>
                  <h3 className="text-lg font-medium text-white flex items-center">
                    <Bug className="h-5 w-5 text-cyber-purple mr-2" /> */}
                    {/* Professional Competence */}
                  {/* </h3> */}
                  {/* <div className="space-y-3">
                    {skills.professional.map((skill) => (
                      <div
                        key={skill.title}
                        className={cn(
                          "bg-gray-800/50 rounded-lg p-4 transition-all duration-300",
                          expandedSkill === skill.title ? "bg-cyber-purple/20" : "hover:bg-gray-700/50"
                        )}
                        onClick={() => setExpandedSkill(expandedSkill === skill.title ? null : skill.title)}
                      >
                        <div className="flex items-center gap-2 cursor-pointer">
                          {skill.icon}
                          <h4 className="text-cyber-purple font-medium">{skill.title}</h4>
                        </div>
                        {expandedSkill === skill.title && (
                          <p className="text-gray-300 mt-2 text-sm">{skill.description}</p>
                        )}
                      </div>
                    ))}
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

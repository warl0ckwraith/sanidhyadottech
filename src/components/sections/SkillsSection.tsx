import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Code2, Terminal, Shield, 
  Network, Wifi, Database, GitBranch,
  Box,
  Cloud,
  Globe2,
} from "lucide-react";

const skills = {
  technologies: [
    { name: "Python", icon: <Code2 className="h-5 w-5" /> },
    { name: "Bash", icon: <Terminal className="h-5 w-5" /> },
    { name: "Docker", icon: <Box className="h-5 w-5" /> },
    { name: "MySQL", icon: <Database className="h-5 w-5" /> },
    { name: "PHP", icon: <Code2 className="h-5 w-5" /> },
    { name: "C++", icon: <Code2 className="h-5 w-5" /> },
    { name: "Java", icon: <Code2 className="h-5 w-5" /> },
    { name: "Kotlin", icon: <Code2 className="h-5 w-5" /> },
    { name: "AWS", icon: <Cloud className="h-5 w-5" /> },
  ],
  tools: [
    { name: "Burpsuite", icon: <Globe2 className="h-5 w-5" /> },
    { name: "Wireshark", icon: <Network className="h-5 w-5" /> },
    { name: "Metasploit", icon: <Code2 className="h-5 w-5" /> },
    { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
    { name: "Bloodhound", icon: <Code2 className="h-5 w-5" /> },
    { name: "Crackmapexec", icon: <Code2 className="h-5 w-5" /> },
  ],
  specializations: [
    { name: "Network Pentesting", icon: <Network className="h-5 w-5" /> },
    { name: "Red Team Operations", icon: <Terminal className="h-5 w-5" /> },
    { name: "Active Directory", icon: <Database className="h-5 w-5" /> },
    { name: "Web Security", icon: <Code2 className="h-5 w-5" /> },
    { name: "CTF Development", icon: <Code2 className="h-5 w-5" /> },
    { name: "Digital Forensics", icon: <Box className="h-5 w-5" /> },
    { name: "Wireless Security", icon: <Wifi className="h-5 w-5" /> },
    { name: "Source Code Review", icon: <Terminal className="h-5 w-5" /> },
  ]
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Technical</span>
            <span className="text-cyber-purple"> Arsenal</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["all", "specializations", "tools", "technologies"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-label={`Filter by ${category}`}
                aria-pressed={activeCategory === category}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 uppercase tracking-wide",
                  activeCategory === category 
                    ? "bg-cyber-purple text-white shadow-[0_0_15px_rgba(90,45,130,0.4)]" 
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent hover:border-gray-700"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-900/30 rounded-lg p-8 border border-gray-800 max-w-5xl mx-auto hover:border-cyber-purple/50 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              
              {/* Specializations (Priority) */}
              <div className={cn("space-y-6", activeCategory !== "all" && activeCategory !== "specializations" && "hidden")}>
                <h3 className="text-lg font-bold text-white flex items-center border-b border-gray-800 pb-2">
                  <Shield className="h-5 w-5 text-cyber-purple mr-2" />
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.specializations.map((spec) => (
                    <div
                      key={spec.name}
                      className="flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-300 bg-cyber-purple/10 border border-cyber-purple/20 text-white hover:bg-cyber-purple/20"
                    >
                      {spec.icon}
                      <span className="font-medium">{spec.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className={cn("space-y-6", activeCategory !== "all" && activeCategory !== "tools" && "hidden")}>
                <h3 className="text-lg font-bold text-white flex items-center border-b border-gray-800 pb-2">
                  <Terminal className="h-5 w-5 text-cyber-purple mr-2" />
                  Security Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-md transition-all duration-300 bg-gray-800/50 text-gray-200 hover:bg-gray-700/50 border border-gray-700/50"
                    >
                      {tool.icon}
                      <span className="text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className={cn("space-y-6", activeCategory !== "all" && activeCategory !== "technologies" && "hidden")}>
                <h3 className="text-lg font-bold text-white flex items-center border-b border-gray-800 pb-2">
                  <Code2 className="h-5 w-5 text-cyber-purple mr-2" />
                  Languages & Infra
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.technologies.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-md transition-all duration-300 bg-gray-800/50 text-gray-200 hover:bg-gray-700/50 border border-gray-700/50"
                    >
                      {skill.icon}
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

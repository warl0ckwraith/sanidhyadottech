import { useState } from "react";
import { cn } from "@/lib/utils";
import { FlipCard } from "../ui/flip-card";
import { GraduationCap, BookOpen, Shield, Network, Code2, Terminal, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Cyber Security Engineer Intern",
    company: "DGTA, Indian Army",
    location: "Delhi",
    period: "Nov 2024 - Jan 2025",
    description: "Designed and implemented a practical framework to educate learners about red teaming and exploitation processes, and provided research support for military cyber security operations.",
    achievements: [
      "Created educational framework for red teaming processes used by defense personnel",
      "Provided research support for military cyber security operations",
      "Developed practical exploitation scenarios for training exercises"
    ]
  },
  {
    id: 2,
    title: "Security Engineer Intern",
    company: "CyberWarFare Labs",
    location: "Remote",
    period: "Jan 2024 - Jul 2024",
    description: "Designed Android pentesting frameworks and engineered security challenges. Collaborated on testing on-premise security labs across Red Team, Blue Team, and Purple Team engagements.",
    achievements: [
      "Developed an Android pentesting & exploitation framework",
      "Created security challenges in privilege escalation, web security, and forensics using Docker",
      "Collaborated in red/blue/purple team exercises focusing on AD enumeration and threat detection"
    ]
  },
  {
    id: 3,
    title: "Independent Contractor / Freelancer",
    company: "Security Testing & CTF Development",
    location: "Remote",
    period: "Ongoing",
    description: "Engaged in developing scalable CTF infrastructure, security assessments, and digital forensics challenges for various organizations and security events.",
    achievements: [
      "Developed scalable CTF infrastructure for security competitions",
      "Conducted comprehensive security assessments for clients",
      "Created digital forensics challenges for security conferences"
    ]
  },
  {
    id: 4,
    title: "CTF Development Intern",
    company: "TheCyberDelta",
    location: "Remote",
    period: "Jul 2022 - Sep 2022",
    description: "Led the design, development, and scaling of 50+ CTF challenges, setting benchmarks using Docker and YAML.",
    achievements: [
      "Designed and developed over 50 CTF challenges across various security domains",
      "Set benchmarks using Docker and YAML for challenge deployment",
      "Implemented scalable infrastructure for CTF competitions"
    ]
  },
  {
    id: 5,
    title: "Cyber Security Intern",
    company: "CyberSecuredIndia",
    location: "Remote",
    period: "Jan 2022 - May 2022",
    description: "Conducted thorough penetration testing across web, mobile, and network environments. Performed source code reviews and utilized the MITRE ATT&CK framework for enhanced threat detection.",
    achievements: [
      "Achieved 1st place in the final internship assessment",
      "Conducted penetration testing across web, mobile, and network environments",
      "Performed source code reviews and utilized the MITRE ATT&CK framework"
    ]
  }
];

const education = {
  degree: "B.Tech in Computer Science Engineering (Cyber Security & Digital Forensics)",
  university: "VIT Bhopal University, Bhopal, MP",
  duration: "2022 - Present",
  highlights: [
    {
      title: "Core Cybersecurity",
      courses: [
        "Network Security",
        "Web Security",
        "Software Security",
        "Digital Forensics"
      ],
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Technical Skills",
      courses: [
        "Python Programming",
        "Operating Systems",
        "Computer Networks",
        "Database Security"
      ],
      icon: <Code2 className="h-5 w-5" />
    },
    {
      title: "Advanced Topics",
      courses: [
        "Penetration Testing",
        "Malware Analysis",
        "Incident Response",
        "Security Frameworks"
      ],
      icon: <Terminal className="h-5 w-5" />
    }
  ],
  achievements: [
    "Dean's List - Fall 2023",
    "Top 5% in Cybersecurity Projects",
    "Research Assistant - Network Security Lab"
  ]
};

const EducationCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <div 
        className={cn(
          "bg-gray-900/50 rounded-lg p-6 border border-gray-800 transition-all duration-300",
          "hover:border-cyber-purple hover:shadow-[0_0_15px_rgba(90,45,130,0.3)]",
          "cursor-pointer"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Front Content */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="h-8 w-8 text-cyber-purple" />
          </div>
          
          <div className="flex-1">
            <h4 className="text-lg font-bold text-white mb-2">
              {education.degree}
            </h4>
            <p className="text-cyber-neon font-mono text-sm mb-3">
              {education.university}
            </p>
            <span className="px-3 py-1 bg-cyber-purple/30 text-cyber-purple text-sm font-semibold rounded-full">
              {education.duration}
            </span>
          </div>
        </div>

        {/* Back Content - Animated Expansion */}
        <div 
          className={cn(
            "mt-6 overflow-hidden transition-all duration-300",
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-6">
            {/* Course Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {education.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {highlight.icon}
                    <h5 className="text-cyber-purple font-medium">
                      {highlight.title}
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    {highlight.courses.map((course, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-cyber-purple text-xs">→</span>
                        <span className="text-gray-300 text-sm">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-cyber-purple" />
                <h5 className="text-cyber-purple font-medium">Academic Achievements</h5>
              </div>
              <ul className="space-y-2">
                {education.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-cyber-purple text-xs">→</span>
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Expand/Collapse Indicator */}
        <div className="mt-4 flex justify-center">
          <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center">
            <BookOpen className={cn(
              "h-4 w-4 text-cyber-purple transition-transform duration-300",
              isExpanded ? "rotate-180" : ""
            )} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Professional</span>
            <span className="text-cyber-purple"> Experience</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="h-full">
                <FlipCard 
                  frontContent={
                    <>
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-cyber-neon font-mono text-sm mb-1">{exp.company}</h4>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-400 text-sm">{exp.location}</span>
                        <span className="px-3 py-1 bg-cyber-purple/30 text-cyber-purple text-sm font-semibold rounded-full">
                          {exp.period}
                        </span>
                      </div>
                    </>
                  }
                  backContent={
                    <>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyber-purple mr-2 font-mono">→</span>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  }
                />
              </div>
            ))}
          </div>
          
          {/* Education */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="text-white">Academic</span>
              <span className="text-cyber-purple"> Education</span>
            </h3>
            <EducationCard />
          </div>
        </div>
      </div>
    </section>
  );
}

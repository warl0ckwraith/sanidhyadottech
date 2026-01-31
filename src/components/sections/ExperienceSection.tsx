
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Network } from "lucide-react";
import { Badge } from "../ui/badge";

const experiences = [
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
    ],
    highlight: true
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
  degree: "B.Tech in Computer Science (Cyber Security & Forensics)",
  university: "VIT Bhopal University",
  duration: "2022 - Present",
  highlights: [
    {
      title: "Core Subjects",
      courses: [
        "Digital Forensics",
        "Network Security",
        "Operating Systems",
        "Cryptography"
      ],
      icon: <Network className="h-5 w-5" />
    }
  ],
  achievements: [
    "President of OWASP VIT Bhopal Chapter",
    "Led multiple technical workshops and CTF events"
  ]
};

// Timeline node component
const TimelineNode = ({ experience, index, isLast }: { 
  experience: typeof experiences[0], 
  index: number, 
  isLast: boolean 
}) => {
  // Always expanded for better skimmability
  const isExpanded = true;
  
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-8 w-0.5 h-full bg-gradient-to-b from-cyber-purple/50 to-gray-800 z-0"></div>
      )}
      
      {/* Timeline node */}
      <div className="flex items-start gap-6 relative z-10">
        {/* Date badge */}
        <div className={cn(
          "flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2 z-10 bg-black",
          experience.highlight ? "border-cyber-purple shadow-[0_0_15px_rgba(90,45,130,0.4)]" : "border-gray-700"
        )}>
          <span className={cn(
            "text-xs font-bold whitespace-nowrap",
            experience.highlight ? "text-cyber-neon" : "text-gray-400"
          )}>
            {experience.period.split(' ')[0]} {/* Show just the year/month start */}
          </span>
        </div>
        
        {/* Content */}
        <div 
          className={cn(
            "flex-1 bg-gray-900/40 rounded-lg p-6 border transition-all duration-300",
            experience.highlight 
              ? "border-cyber-purple/50 bg-cyber-purple/5" 
              : "border-gray-800 hover:border-gray-700"
          )}
        >
          <div className="mb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <h4 className="text-xl font-bold text-white flex flex-wrap items-center gap-2">
                {experience.title} 
                <span className="text-cyber-purple">@</span> 
                <span className="font-normal text-cyber-neon">{experience.company}</span>
              </h4>
              <Badge variant="purple-light" className="w-fit text-xs font-medium">
                {experience.period}
              </Badge>
            </div>
            
            <p className="text-gray-400 text-sm mb-4">{experience.description}</p>
          </div>
          
          {/* Achievements - Always Visible */}
          <div className="mt-2">
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Key Impact</h5>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-cyber-purple mr-2 mt-1">▹</span>
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EducationCard = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-cyber-purple/10 flex items-center justify-center flex-shrink-0 border border-cyber-purple/20">
          <GraduationCap className="h-8 w-8 text-cyber-purple" />
        </div>
        
        <div className="flex-1 w-full text-center md:text-left">
          <h4 className="text-xl font-bold text-white mb-1">
            {education.degree}
          </h4>
          <p className="text-cyber-neon font-medium text-sm mb-4">
            {education.university} • {education.duration}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-left">
             <div className="bg-black/40 rounded p-3 border border-gray-800">
               <h5 className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-bold">Focus Areas</h5>
               <div className="flex flex-wrap gap-2">
                 {education.highlights[0].courses.map((c, i) => (
                   <span key={i} className="text-xs px-2 py-1 bg-cyber-purple/10 text-cyber-purple rounded">{c}</span>
                 ))}
               </div>
             </div>
             
             <div className="bg-black/40 rounded p-3 border border-gray-800">
               <h5 className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-bold">Leadership</h5>
                <ul className="space-y-1">
                 {education.achievements.map((a, i) => (
                   <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                     <span className="w-1 h-1 bg-cyber-neon rounded-full"></span>
                     {a}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
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
          
          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto space-y-8 pl-0 sm:pl-6 mb-24">
            {experiences.map((exp, index) => (
              <TimelineNode 
                key={exp.id} 
                experience={exp} 
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="text-white">Education</span>
            </h3>
            <EducationCard />
          </div>
        </div>
      </div>
    </section>
  );
}


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
      "Conducted OWASP Top 10 penetration testing for web & mobile endpoints",
      "Performed source code reviews and utilized the MITRE ATT&CK framework"
    ]
  }
];

const education = {
  degree: "B.Tech in Computer Science Engineering (Cyber Security & Digital Forensics)",
  university: "VIT Bhopal University, India",
  duration: "2022 - Present",
  highlights: [
    {
      title: "Core Subjects",
      courses: [
        "Computer Networks",
        "Database Systems",
        "Operating Systems",
        "Digital Forensics"
      ],
      icon: <Network className="h-5 w-5" />
    },
    {
      title: "Advanced Courses",
      courses: [
        "Ethical Hacking",
        "Software Vulnerability Testing",
        "Data Privacy",
        "Security Frameworks"
      ]
    }
  ],
  achievements: [
    "President of OWASP VIT Bhopal Chapter",
  ]
};

// Timeline node component
const TimelineNode = ({ experience, index, isLast }: { 
  experience: typeof experiences[0], 
  index: number, 
  isLast: boolean 
}) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-8 w-0.5 h-full bg-gradient-to-b from-cyber-purple/70 to-cyber-purple/10 z-0"></div>
      )}
      
      {/* Timeline node */}
      <div className="flex items-start gap-6 relative z-10">
        {/* Date badge */}
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0 border border-cyber-purple/30">
          <Badge variant="purple-light" className="text-xs px-2 py-1 whitespace-nowrap">
            {experience.period.split(' - ')[0]}
          </Badge>
        </div>
        
        {/* Content */}
        <div 
          className="flex-1 bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyber-purple transition-all duration-300 hover:shadow-[0_0_15px_rgba(90,45,130,0.3)]"
        >
          <div className="mb-3">
            <h4 className="text-lg font-bold text-white flex flex-wrap items-center gap-2">
              {experience.title} 
              <span className="text-cyber-purple">@</span> 
              <span className="font-normal text-cyber-neon">{experience.company}</span>
            </h4>
            
            <div className="flex flex-wrap justify-between items-center mt-2">
              <span className="text-gray-400 text-sm">{experience.location}</span>
              <Badge variant="purple-light" className="text-xs font-medium">
                {experience.period}
              </Badge>
            </div>
          </div>
          
          {/* Always visible achievements */}
          <div className="mt-4">
            <ul className="space-y-3 pt-2 border-t border-gray-700">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-cyber-purple mr-2 font-mono">→</span>
                  <span className="text-gray-300">{achievement}</span>
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
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
            <Badge variant="purple-light" className="text-xs font-medium">
              {education.duration}
            </Badge>
          </div>
        </div>

        {/* Expandable Content */}
        <div 
          className={cn(
            "mt-6 overflow-hidden transition-all duration-300",
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-6">
            {/* Course Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {highlight.icon || <BookOpen className="h-5 w-5 text-cyber-purple" />}
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
        <div className="mt-4 text-center">
          <span className="text-xs text-gray-400">
            {isExpanded ? "Click to collapse" : "Click to expand"}
          </span>
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
          <div className="max-w-4xl mx-auto space-y-12 pl-0 sm:pl-6">
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

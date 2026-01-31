
import { useState } from "react";
import { ExternalLink, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  logo: string;
  verifyLink: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "OffSec Certified Professional (OSCP)",
    organization: "OffSec",
    date: "2023",
    logo: "oscp",
    verifyLink: "https://www.credential.net/ea6beae4-9282-4c1d-9bbc-13efaa15b832",
  },
  {
    id: 2,
    name: "OffSec Wireless Professional (OWSP)",
    organization: "OffSec",
    date: "2023",
    logo: "owsp",
    verifyLink: "https://www.credential.net/e1677b26-b944-4aae-99c0-ac34bb1ebb8f",
  },
  {
    id: 3,
    name: "Certified Network Security Practitioner (CNSP)",
    organization: "SecOps Group",
    date: "2022",
    logo: "cnsp",
    verifyLink: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXTHb++lDiZvEBDD0QEpKsbUFhClttZdVAknN3CoXNvVkebndg2pYVHS6ev+q5Blht5sIxrULNGWX/SmqRAu1TLk=",
  },
  {
    id: 4,
    name: "Fortinet Network Security Expert Level 2",
    organization: "Fortinet",
    date: "2022",
    logo: "fortinet",
    verifyLink: "https://www.fortinet.com/training/certification/verification",
  }
];

const CertificateCard = ({ cert }: { cert: Certification }) => {
  return (
    <motion.div 
      className="group bg-gray-900/40 rounded-lg p-6 border border-gray-800 hover:border-cyber-purple/60 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-start h-full">
        <div className="flex items-center gap-4 mb-4 w-full">
          <div className="w-12 h-12 rounded-full bg-cyber-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyber-purple/20 transition-colors">
            <Award className="h-6 w-6 text-cyber-purple" />
          </div>
          <div>
            <Badge variant="purple-solid" className="mb-1 text-[10px]">{cert.date}</Badge>
            <p className="text-gray-400 text-xs">{cert.organization}</p>
          </div>
        </div>
        
        <h3 className="text-white font-bold mb-6 leading-snug">{cert.name}</h3>
        
        <div className="mt-auto w-full pt-4 border-t border-gray-800/50">
          <a
            href={cert.verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-sm text-gray-400 hover:text-cyber-neon transition-colors w-full group-hover:translate-x-1 duration-300"
          >
            <span>Verify Credential</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Professional</span>
            <span className="text-cyber-purple"> Certifications</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { ExternalLink, Award } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  logo?: string;
  logoType?: 'image' | 'background' | 'none';
  backgroundImage?: string;
  verifyLink: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "OffSec Certified Professional (OSCP)",
    organization: "OffSec",
    date: "2023",
    logo: "oscp",
    logoType: 'image',
    verifyLink: "https://www.credential.net/ea6beae4-9282-4c1d-9bbc-13efaa15b832",
  },
  {
    id: 2,
    name: "OffSec Wireless Professional (OSWP)",
    organization: "OffSec",
    date: "2023",
    logo: "oswp",
    logoType: 'image',
    verifyLink: "https://www.credential.net/e1677b26-b944-4aae-99c0-ac34bb1ebb8f",
  },
  {
    id: 3,
    name: "Fortinet Network Security Expert Level 2",
    organization: "Fortinet",
    date: "2022",
    logoType: 'none',
    verifyLink: "https://www.fortinet.com/training/certification/verification",
  },
  {
    id: 4,
    name: "Certified Network Security Practitioner (CNSP)",
    organization: "SecOps Group",
    date: "2022",
    logoType: 'none',
    verifyLink: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXTHb++lDiZvEBDD0QEpKsbUFhClttZdVAknN3CoXNvVkebndg2pYVHS6ev+q5Blht5sIxrULNGWX/SmqRAu1TLk=",
  }
];

interface CertificateCardProps {
  cert: Certification;
}

const CertificateCard = ({ cert }: CertificateCardProps) => {
  return (
    <motion.div 
      className="group bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyber-purple transition-all duration-300"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(90, 45, 130, 0.3)" }}
    >
      <div className="flex flex-col items-center h-full">
        {/* Logo/Badge Display */}
        <div className="w-32 h-32 flex items-center justify-center mb-4">
          {cert.logoType === 'image' && cert.logo && (
            <img 
              src={`/images/certs/${cert.logo}.png`} 
              alt={`${cert.name} badge`}
              className="w-full h-full object-contain"
            />
          )}
          {cert.logoType === 'background' && cert.backgroundImage && (
            <div 
              className="w-full h-full rounded-lg"
              style={{
                backgroundImage: `url("${cert.backgroundImage}")`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: '#f2f2f4',
                backgroundRepeat: 'no-repeat'
              }}
            />
          )}
          {cert.logoType === 'none' && (
            <div className="w-20 h-20 rounded-full bg-cyber-purple/20 flex items-center justify-center">
              <Award className="h-8 w-8 text-cyber-purple" />
            </div>
          )}
        </div>
        
        <h3 className="text-white font-bold mb-2 text-center">{cert.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{cert.organization}</p>
        <Badge variant="purple-solid" className="mb-4">{cert.date}</Badge>
        
        <motion.a
          href={cert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-cyber-purple/80 text-white text-sm font-medium rounded-md hover:bg-cyber-purple transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Verify Certificate
          <ExternalLink className="h-4 w-4" />
        </motion.a>
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

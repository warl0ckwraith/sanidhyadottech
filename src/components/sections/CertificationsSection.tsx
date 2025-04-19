
import { useState } from "react";
import { X, ExternalLink, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

const certifications = [
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
    organization: "Network Security Institute",
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

const CertificateModal = ({ cert, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-5 w-5 text-gray-300" />
        </motion.button>


        {/* Certificate Info */}
        <div className="p-6 bg-gray-800/50">
          <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
          <p className="text-gray-300 mb-4">
            Issued by {cert.organization} in {cert.date}
          </p>
          <motion.a
            href={cert.verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-cyber-purple/80 px-3 py-1.5 rounded-md hover:bg-cyber-purple transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Verify Certificate <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificateCard = ({ cert, onClick }) => {
  return (
    <motion.div 
      className="group bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyber-purple transition-all duration-300 cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(90, 45, 130, 0.3)" }}
    >
      <div className="flex flex-col items-center h-full">
        <div className="w-20 h-20 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-4 group-hover:animate-pulse-neon">
          <Award className="h-8 w-8 text-cyber-purple" />
        </div>
        
        <h3 className="text-white font-bold mb-2 text-center">{cert.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{cert.organization}</p>
        <Badge variant="purple-solid" className="mb-3">{cert.date}</Badge>
        
        <div className="mt-4 flex items-center gap-2">
          <span className="text-white text-sm">View Certificate</span>
          <ExternalLink className="h-4 w-4 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

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
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}

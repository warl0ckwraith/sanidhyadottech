
import { useState } from "react";
import { CheckCircle, Award, ExternalLink, XCircle } from "lucide-react";
import { FlipCard } from "../ui/flip-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const certifications = [
  {
    id: 1,
    name: "OffSec Certified Professional (OSCP)",
    organization: "OffSec",
    date: "2023",
    logo: "oscp",
    verifyLink: "https://www.credential.net/verify",
    certificateImage: "/oscp-certificate.png" // This is a placeholder path
  },
  {
    id: 2,
    name: "OffSec Wireless Professional (OWSP)",
    organization: "OffSec",
    date: "2023",
    logo: "owsp",
    verifyLink: "https://www.credential.net/verify",
    certificateImage: "/owsp-certificate.png" // This is a placeholder path
  },
  {
    id: 3,
    name: "Certified Network Security Practitioner (CNSP)",
    organization: "Network Security Institute",
    date: "2022",
    logo: "cnsp",
    verifyLink: "https://www.example.com/verify",
    certificateImage: "/cnsp-certificate.png" // This is a placeholder path
  },
  {
    id: 4,
    name: "Fortinet Network Security Expert Level 2",
    organization: "Fortinet",
    date: "2022",
    logo: "fortinet",
    verifyLink: "https://www.fortinet.com/training/certification/verification",
    certificateImage: "/fortinet-certificate.png" // This is a placeholder path
  }
];

const CertificateCard = ({ cert }) => {
  return (
    <FlipCard
      frontContent={
        <div className="flex flex-col items-center h-full">
          <div className="w-20 h-20 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-4 group-hover:animate-pulse-neon">
            <span className="text-xl font-bold text-cyber-purple">{cert.logo}</span>
          </div>
          
          <h3 className="text-white font-bold mb-2 text-center">{cert.name}</h3>
          <p className="text-gray-400 text-sm mb-2">{cert.organization}</p>
          <p className="text-cyber-purple text-sm font-mono">{cert.date}</p>
          
          <a 
            href={cert.verifyLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-cyber-neon text-sm hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Verify <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      }
      backContent={
        <div className="flex flex-col items-center justify-center h-full">
          <Dialog>
            <DialogTrigger asChild>
              <div className="w-full h-40 overflow-hidden rounded-lg border border-cyber-purple/30 cursor-pointer">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <p className="text-cyber-neon text-sm">Click to view certificate</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
              <div className="p-1">
                <img 
                  src={cert.certificateImage} 
                  alt={`${cert.name} Certificate`} 
                  className="w-full h-auto rounded"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    e.currentTarget.alt = "Certificate image not available";
                  }}
                />
              </div>
            </DialogContent>
          </Dialog>

          <div className="mt-4 text-center">
            <h4 className="text-cyber-purple font-medium mb-1">Certificate Details</h4>
            <p className="text-gray-300 text-sm">
              {cert.name} issued by {cert.organization} in {cert.date}
            </p>
          </div>
        </div>
      }
    />
  );
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/5 to-transparent"></div>
      
      {/* Certifications */}
      <div className="container mx-auto px-4 relative z-10 mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Professional</span>
            <span className="text-cyber-purple"> Certifications</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id}>
                <CertificateCard cert={cert} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

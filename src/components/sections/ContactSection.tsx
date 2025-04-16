
import { useState } from "react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in a real implementation)
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-white">Contact</span>
            <span className="text-cyber-purple"> Me</span>
            <span className="block h-1 w-20 bg-cyber-purple mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
                <p className="text-gray-300 mb-6">
                  I'm interested in freelance opportunities, security research collaborations, and CTF events.
                  If you have questions or just want to say hello, don't hesitate to reach out.
                </p>
              </div>
              
              {/* Contact Items */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <Mail className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a href="mailto:sanidhyasonii@proton.me" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      sanidhyasonii@proton.me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <Linkedin className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <a href="https://linkedin.com/in/sanidhyasonii" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      linkedin.com/in/sanidhyasonii
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <Globe className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Website</h4>
                    <a href="https://sanidhya.tech" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      sanidhya.tech
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-purple">
                      <path d="M11 5.1a5 5 0 0 1 8.9 3v.1a5 5 0 0 1-1.7 3.8l-8.3 7.2-8.2-7.2A5 5 0 0 1 0 8v-.1a5 5 0 0 1 5-5c1.5 0 3 .7 4 1.9l1 1.3 1-1.3a5 5 0 0 1 4-1.9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Upwork</h4>
                    <a href="https://www.upwork.com/freelancers/sanidhya" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      upwork.com/freelancers/sanidhya
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-purple">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <a href="tel:+919024095926" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      +91-9024095926
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-purple">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-300">
                      Jaipur, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm text-gray-300 mb-2 block">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm text-gray-300 mb-2 block">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-sm text-gray-300 mb-2 block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm text-gray-300 mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-3 bg-cyber-purple text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_10px_rgba(90,45,130,0.5)] hover:shadow-[0_0_15px_rgba(90,45,130,0.8)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { useState } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

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
                    <a href="mailto:contact@johndoe.com" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      contact@johndoe.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <Linkedin className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      linkedin.com/in/johndoe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <Github className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">GitHub</h4>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      github.com/johndoe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <Twitter className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Twitter</h4>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      @johndoe
                    </a>
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

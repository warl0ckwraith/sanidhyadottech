
import { useState } from "react";
import { Mail, Linkedin, MapPin, Send, Loader2, CheckCircle } from "lucide-react";

// Formspree endpoint - Replace with your actual Formspree form endpoint
// Get yours at: https://formspree.io/register
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjvedoq";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: new FormData(e.currentTarget as HTMLFormElement)
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      if (error instanceof TypeError && error.message.includes("NetworkError")) {
        setErrorMessage("Network error. This usually means: (1) The form ID doesn't exist in Formspree, (2) Your domain isn't whitelisted in Formspree settings, or (3) You're testing from a local file. Please email directly: sanidhyasonii@proton.me");
      } else {
        setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again or email directly at sanidhyasonii@proton.me");
      }
    } finally {
      setIsSubmitting(false);
    }
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
                    <MapPin className="h-5 w-5 text-cyber-purple" />
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
              
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <span className="text-red-400">{errorMessage || "Failed to send message. Please try again."}</span>
                </div>
              )}

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
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors disabled:opacity-50"
                      required
                      disabled={isSubmitting}
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
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors disabled:opacity-50"
                      required
                      disabled={isSubmitting}
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
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors disabled:opacity-50"
                    required
                    disabled={isSubmitting}
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
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors disabled:opacity-50 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Formspree hidden fields - must be static, not React bindings */}
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-cyber-purple text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_10px_rgba(90,45,130,0.5)] hover:shadow-[0_0_15px_rgba(90,45,130,0.8)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "@formspree/react";

function LinkedinLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.45 20.45H17v-5.4c0-1.3-.03-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88v5.49H9.64V9h3.3v1.56h.05c.46-.86 1.58-1.76 3.25-1.76 3.47 0 4.2 2.28 4.2 5.24v6.41ZM5.56 7.43a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06Zm-1.73 13.02h3.45V9H3.83v11.45Z" />
    </svg>
  );
}

function GithubLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 .6a11.4 11.4 0 0 0-3.6 22.2c.57.1.78-.25.78-.55v-2.1c-3.18.69-3.85-1.38-3.85-1.38-.52-1.32-1.26-1.67-1.26-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.2 1.76 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.54-.29-5.21-1.27-5.21-5.64 0-1.25.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.12 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.64 1.62.24 2.82.12 3.12.75.8 1.2 1.83 1.2 3.08 0 4.38-2.68 5.35-5.23 5.63.41.36.78 1.07.78 2.17v3.22c0 .3.2.66.8.55A11.4 11.4 0 0 0 12 .6Z" />
    </svg>
  );
}

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xnjvedoq");
  
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
                    <LinkedinLogo className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <a href="https://linkedin.com/in/sanidhyasonii" target="_blank" rel="me noopener noreferrer" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      linkedin.com/in/sanidhyasonii
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-full">
                    <GithubLogo className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">GitHub</h4>
                    <a href="https://github.com/warl0ckwraith" target="_blank" rel="me noopener noreferrer" className="text-gray-300 hover:text-cyber-neon transition-colors">
                      github.com/warl0ckwraith
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
              
              {/* Success Message */}
              {state.succeeded && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {/* Error Message */}
              {state.errors && state.errors.length > 0 && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="text-red-400">
                    {state.errors.map((error, i) => (
                      <p key={i}>{error.message}</p>
                    ))}
                  </div>
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
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors disabled:opacity-50"
                      required
                      disabled={state.submitting}
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
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors disabled:opacity-50"
                      required
                      disabled={state.submitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm text-gray-300 mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-purple transition-colors disabled:opacity-50 resize-none"
                    required
                    disabled={state.submitting}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-8 py-3 bg-cyber-purple text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_10px_rgba(90,45,130,0.5)] hover:shadow-[0_0_15px_rgba(90,45,130,0.8)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {state.submitting ? (
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

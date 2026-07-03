import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BsTwitterX, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaPinterestP, FaTripadvisor } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Thank you! We'll be in touch soon.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section - More organic feel */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Images/contactbg.jpg.avif')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Connect With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Let's Talk
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Whether it's a special occasion, a question about our menu, 
            or just to say hello — we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-serif text-white mb-8">Reach Out</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Visit Us</h3>
                      <a 
                        href="#" 
                        className="text-white hover:text-amber-400 transition-colors duration-300 leading-relaxed"
                      >
                        Addess<br />
                       Adress<br />
                        
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Call Us</h3>
                      <a 
                        href="tel:01224500030" 
                        className="text-white hover:text-amber-400 transition-colors duration-300 text-lg"
                      >
                        01200000000
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Mon-Sun: 12pm - 11pm</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Email</h3>
                      <a 
                        href="mailto:info@magpie.bd" 
                        className="text-white hover:text-amber-400 transition-colors duration-300"
                      >
                        info@magpie.bd
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">Follow Our Journey</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <BsInstagram className="text-gray-400 group-hover:text-white text-xl" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <BsFacebook className="text-gray-400 group-hover:text-white text-xl" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <BsTwitterX className="text-gray-400 group-hover:text-white text-xl" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <FaPinterestP className="text-gray-400 group-hover:text-white text-xl" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <FaTripadvisor className="text-gray-400 group-hover:text-white text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3">
            <div className="bg-[#111] rounded-2xl p-8 md:p-10 border border-white/5">
              <h2 className="text-2xl font-serif text-white mb-2">Send a Message</h2>
              <p className="text-gray-400 mb-8">We'll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2 font-light">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2 font-light">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-light">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-light">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300"
                    placeholder="+44 1234 567890"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-light">Your message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about your event, dietary requirements, or anything else..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default Contact;
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    // ✅ FIX: Using the EXACT background image from your Home Page
    <main className="min-h-screen text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300
      bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')]
      bg-no-repeat bg-cover bg-top"
    >
      
      <Navbar />

      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Get in <span className="text-purple-600 dark:text-purple-400">Touch</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We are here to help you build the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: The List Style */}
          <div className="space-y-8 pl-4">
            
            {/* Call Us */}
            <div className="flex items-start gap-5 group">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">+91 62961 03605</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-5 group">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">info@kreonex.com</p>
                <p className="text-gray-600 dark:text-gray-400">kreonextech@gmail.com</p>
              </div>
            </div>

            {/* Head Office */}
            <div className="flex items-start gap-5 group">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Head Office</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1 max-w-xs">
                  Loknath Nagar, Bagdogra,<br/>
                  Siliguri, Dist: Darjeeling,<br/>
                  West Bengal - 734014
                </p>
              </div>
            </div>

            {/* Operational Areas */}
            <div className="flex items-start gap-5 group">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Operational Areas</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1 font-medium">West Bengal & Sikkim</p>
                <p className="text-sm text-gray-500 mt-1 max-w-xs">
                  Bagdogra, Naxalbari, Siliguri, Darjeeling, Kalimpong, Fulbari, Jalpaiguri.
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-5 group">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Working Hours</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl transition-colors">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white dark:bg-black/50 border border-gray-300 dark:border-white/10 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white dark:bg-black/50 border border-gray-300 dark:border-white/10 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white dark:bg-black/50 border border-gray-300 dark:border-white/10 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white dark:bg-black/50 border border-gray-300 dark:border-white/10 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 shadow-lg shadow-purple-600/30"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 mt-4 text-center">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 mt-4 text-center">Something went wrong.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
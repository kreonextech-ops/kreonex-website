"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // ✅ Added Phone Number
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
      // ✅ CORRECTED URL: Points to api/contact/route.js
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
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your business with AI? Have a question about our courses? 
            We are here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE: Contact Info & Service Areas */}
          <div className="space-y-12">
            
            {/* Contact Details */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/20 p-3 rounded-lg text-red-500">📍</div>
                  <div>
                    <h4 className="font-semibold">Head Office</h4>
                    <p className="text-gray-400">Loknath Nagar, Bagdogra, West Bengal</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/20 p-3 rounded-lg text-red-500">📞</div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-400">+91 62961 03605</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600/20 p-3 rounded-lg text-red-500">✉️</div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-400">info@kreonex.com</p>
                    <p className="text-gray-400">kreonextech@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ SERVICE AREAS (Restored) */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Service Areas</h3>
              <p className="text-gray-400 mb-4">
                We provide physical workshops and AI solutions across North Bengal, and online services globally.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-gray-300">
                <li className="flex items-center gap-2">✅ Bagdogra</li>
                <li className="flex items-center gap-2">✅ Siliguri</li>
                <li className="flex items-center gap-2">✅ Darjeeling</li>
                <li className="flex items-center gap-2">✅ Jalpaiguri</li>
                <li className="flex items-center gap-2">✅ Online (Global)</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Number (✅ NEW) */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
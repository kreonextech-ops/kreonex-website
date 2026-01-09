"use client";

import SectionTitle from "@/components/SectionTitle";
import { Mail, MapPin, Phone, Send, Clock, Map, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("idle"); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // 🔴 THIS LOG PROVES THE NEW CODE IS RUNNING
        console.log("🟢 BUTTON CLICKED! Starting fetch..."); 
        
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            console.log("🟠 Response Status:", response.status); 

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                // Note: No alert() here!
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("🔴 Browser Error:", error);
            setStatus("error");
        }
    };

    return (
        <main className="pt-32 pb-20 bg-white dark:bg-slate-950 min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <SectionTitle text1="CONTACT US" text2="Let's Build the Future" text3="Reach out for a free consultation." />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
                    {/* INFO COLUMN */}
                    <div className="space-y-6">
                        <ContactItem icon={<Phone />} title="Call Us" content="+91 62961 03605" link="tel:+916296103605" />
                        <ContactItem icon={<Mail />} title="Email Us" content="info@kreonex.com" link="mailto:info@kreonex.com" />
                         <ContactItem icon={<MapPin />} title="Head Office" content="Loknath Nagar, Bagdogra" subContent="Siliguri, Dist: Darjeeling, West Bengal - 734014" />
                    </div>

                    {/* FORM COLUMN */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="Your Name" name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" required />
                                <InputGroup label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" required />
                            </div>
                            <InputGroup label="Subject" name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Project Inquiry" required />
                            
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" disabled={status === "submitting"} className="w-full py-4 rounded-xl bg-purple-600 text-white font-bold text-lg hover:bg-purple-700 transition flex items-center justify-center gap-2">
                                {status === "submitting" ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Send Message</>}
                            </button>

                            {status === "error" && <p className="text-red-500 text-center mt-2">Failed to send. Check console.</p>}
                            {status === "success" && <p className="text-green-500 text-center mt-2">Message Sent Successfully!</p>}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

function ContactItem({ icon, title, content, subContent, link }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-purple-600">{icon}</div>
            <div>
                <h4 className="font-bold text-slate-900 dark:text-white">{title}</h4>
                {link ? <a href={link} className="text-slate-600 dark:text-slate-300 hover:text-purple-600">{content}</a> : <p className="text-slate-600 dark:text-slate-300">{content}</p>}
                {subContent && <p className="text-xs text-slate-500">{subContent}</p>}
            </div>
        </div>
    );
}

function InputGroup({ label, name, value, onChange, type, placeholder, required }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{label}</label>
            <input name={name} value={value} onChange={onChange} type={type} required={required} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder={placeholder} />
        </div>
    );
}
"use client";

import SectionTitle from "@/components/SectionTitle";
import { useThemeContext } from "@/context/ThemeContext";
import { faqsData } from "@/data/faqsData";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const FaqSection = () => {
    const { theme } = useThemeContext();
    const [openIndex, setOpenIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Scroll Fade-in Animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className={`relative py-20 bg-white dark:bg-slate-950 overflow-hidden
                transition-all duration-1000 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10 pointer-events-none" />

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-50">
                 <Image 
                    className="absolute -left-40 top-0" 
                    src={theme === "dark" ? "/assets/color-splash.svg" : "/assets/color-splash-light.svg"} 
                    alt="color-splash" 
                    width={1000} 
                    height={1000} 
                 />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-0">
                <SectionTitle 
                    text1="FAQ'S" 
                    text2="Common Questions" 
                    text3="Everything you need to know about our services, timelines, and development process." 
                />

                <div className="mt-12 flex flex-col gap-4">
                    {faqsData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        
                        return (
                            <div 
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`cursor-pointer rounded-2xl border transition-all duration-300 ease-in-out
                                    ${isOpen 
                                        ? "bg-slate-50 dark:bg-slate-900 border-purple-200 dark:border-purple-900 shadow-lg scale-[1.02]" 
                                        : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50"
                                    }`}
                            >
                                <div className="p-5 md:p-6">
                                    {/* Question Header */}
                                    <div className="flex items-center justify-between">
                                        <h3 className={`text-base md:text-lg font-medium transition-colors duration-300
                                            ${isOpen 
                                                ? "text-purple-700 dark:text-purple-400 font-semibold" 
                                                : "text-slate-800 dark:text-slate-200"}`}
                                        >
                                            {faq.question}
                                        </h3>
                                        
                                        <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 
                                            ${isOpen ? "bg-purple-200 dark:bg-purple-900/50 rotate-180 text-purple-700 dark:text-purple-400" : "text-slate-400"}`}>
                                            <ChevronDown size={20} />
                                        </span>
                                    </div>

                                    {/* Smooth Accordion Animation */}
                                    <div 
                                        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out
                                            ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                    >
                                        <div className="min-h-0">
                                            {/* UPDATED: Answer text is now pure white in dark mode */}
                                            <p className="pt-4 text-sm md:text-base text-slate-600 dark:text-white leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
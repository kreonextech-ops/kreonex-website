"use client";

import SectionTitle from "@/components/SectionTitle";
import { featuresData } from "@/data/featuresData";
import { useEffect, useRef, useState } from "react";

export default function OurExpertise() {
    return (
        <section className="relative pt-20 pb-20 bg-white dark:bg-slate-950 overflow-hidden">
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10 pointer-events-none" />

            {/* Section Title */}
            <SectionTitle
                text1="OUR EXPERTISE"
                text2="Innovation for Industries & Institutes"
                text3="From end-to-end software development for startups to advanced robotics training for schools, we deliver impact through technology."
            />

            {/* Grid Content */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10
                px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
                {featuresData.map((feature, index) => (
                    <ExpertiseCard key={index} feature={feature} index={index} />
                ))}
            </div>
        </section>
    );
}

/* --- Sub-Component for Animation & Styling --- */
function ExpertiseCard({ feature, index }) {
    const Icon = feature.icon;
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`p-8 rounded-2xl border transition-all duration-500 ease-out
            bg-slate-50 border-slate-200
            dark:bg-slate-900 dark:border-slate-800
            hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500/50
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Icon Box */}
            <div className="flex items-center justify-center w-14 h-14
                rounded-xl shadow-sm mb-6
                bg-white text-purple-900
                dark:bg-slate-800 dark:text-purple-400">
                <Icon className="w-8 h-8" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-4">
                <span className="
                    bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-900 
                    bg-clip-text text-transparent
                    dark:bg-none dark:text-white
                    border-b-2 border-purple-500/30 pb-1">
                    {feature.title}
                </span>
            </h3>

            {/* Description - UPDATED TO PURE WHITE IN DARK MODE */}
            <p className="text-slate-700 dark:text-white leading-relaxed font-medium">
                {feature.description}
            </p>
        </div>
    );
}
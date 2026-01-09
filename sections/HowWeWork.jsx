"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/SectionTitle"; // Importing your new title component for consistency

const steps = [
    {
        number: "01",
        title: "Consultation & Strategy",
        description: "We start by defining your technical requirements—whether you need an Agentic AI system, a custom AI Agent, Workflow Automation, a SaaS product, or a high-performance Website. We map out the architecture to fit your business goals.",
        image: "/assets/process/step-1.jpg", 
        imageAlt: "Step 1 - Tech Consultation",
    },
    {
        number: "02",
        title: "Development & Engineering",
        description: "Our developers and AI engineers build your solution. From training AI models and setting up automation logic to coding scalable SaaS backends, we execute the plan with precision and modern best practices.",
        image: "/assets/process/step-2.jpg", 
        imageAlt: "Step 2 - Development",
    },
    {
        number: "03",
        title: "Delivery & Launch",
        description: "We deploy your fully functional product within 1 week to 2 months, depending on complexity. We ensure your AI agents are active, your automations are running, or your website is live and ready for traffic.",
        image: "/assets/process/step-3.jpg", 
        imageAlt: "Step 3 - Launch",
    },
];

export default function HowWeWork() {
    return (
        <section className="relative py-20 overflow-hidden bg-white dark:bg-slate-950" id="process">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10" />
            
            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
                
                {/* Using your standard SectionTitle component for consistency */}
                <SectionTitle 
                    text1="OUR PROCESS"
                    text2="From Concept to Reality"
                    text3="We handle the complexity of engineering so you can focus on scaling your business."
                />

                {/* Steps */}
                <div className="space-y-32 mt-20">
                    {steps.map((step, index) => (
                        <ProcessStep 
                            key={index} 
                            step={step} 
                            index={index} 
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProcessStep({ step, index, isReversed }) {
    const [isVisible, setIsVisible] = useState(false);
    const stepRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (stepRef.current) {
            observer.observe(stepRef.current);
        }

        return () => {
            if (stepRef.current) {
                observer.unobserve(stepRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={stepRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
                ${isReversed ? "lg:flex-row-reverse" : ""}
                transition-all duration-1000 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
            {/* Image Side */}
            <div
                className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}
                    transition-all duration-1000 delay-200 ease-out
                    ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isReversed ? "translate-x-20" : "-translate-x-20"}`}`}
            >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl
                    transform transition-transform duration-500 hover:scale-[1.02]
                    border border-slate-200 dark:border-slate-800">
                    
                    <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="relative rounded-3xl w-full h-auto object-cover"
                    />
                </div>

                {/* Decorative Blob */}
                <div className={`absolute -z-10 w-72 h-72 rounded-full blur-3xl opacity-20
                    bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400
                    dark:from-purple-600 dark:via-pink-600 dark:to-indigo-600
                    ${isReversed ? "-right-20 -bottom-20" : "-left-20 -top-20"}`} />
            </div>

            {/* Text Side */}
            <div
                className={`${isReversed ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"}
                    transition-all duration-1000 delay-400 ease-out
                    ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isReversed ? "-translate-x-20" : "translate-x-20"}`}`}
            >
                {/* Step Number */}
                <div className="flex items-center mb-6">
                    <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                        {step.number}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                    {step.title}
                </h3>

                {/* Description - UPDATED TO PURE WHITE IN DARK MODE */}
                <p className="text-lg text-slate-600 dark:text-white leading-relaxed mb-8">
                    {step.description}
                </p>
            </div>
        </div>
    );
}
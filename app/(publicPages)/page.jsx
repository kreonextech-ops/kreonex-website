"use client";

import { FaqSection } from "@/sections/FaqSection";
import HowWeWork from "@/sections/HowWeWork";
import OurExpertise from "@/sections/OurExpertise";
import { useEffect, useState } from "react";
import Link from "next/link"; 

export default function Page() {
    /* Rotating Hero Text */
    const rotatingTexts = [
        "BY BUILDING CUSTOM AI AGENTS",
        "BY AUTOMATING BUSINESS WORKFLOWS",
        "BY ENGINEERING SCALABLE APPS",
        "BY EMPOWERING THE NEXT GENERATION",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <div
                className="relative flex flex-col items-center justify-center text-center px-4
                bg-[url('/assets/light-hero-gradient.svg')]
                dark:bg-[url('/assets/dark-hero-gradient.svg')]
                bg-no-repeat bg-cover bg-center
                pb-0"
            >
                {/* Audience Strip */}
                <div className="mt-36 px-6 py-2 rounded-full
                    bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600
                    shadow-md shadow-purple-600/30">
                    <span className="text-xs md:text-sm font-semibold tracking-wide text-white">
                        FOR STARTUPS, ENTERPRISES & EDUCATIONAL INSTITUTES
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="mt-6 text-5xl md:text-[64px] font-semibold leading-tight max-w-4xl">
                    We build the future with <br />
                    <span className="bg-gradient-to-r from-[#923FEF] to-[#E1C9FF]
                        bg-clip-text text-transparent">
                        AI & Technology
                    </span>
                </h1>

                {/* Rotating Highlight Text */}
                <p className="mt-6 text-2xl md:text-4xl font-bold tracking-wide min-h-[48px]">
                    <span
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500
                        bg-clip-text text-transparent"
                    >
                        {rotatingTexts[index]}
                    </span>
                </p>

                {/* CTA Button */}
                <div className="flex items-center mt-10 mb-8 relative z-20">
                    <Link
                        href="/contact"
                        className="relative inline-flex items-center justify-center
                        px-10 h-14 rounded-lg font-semibold text-white
                        bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600
                        shadow-lg shadow-purple-600/30
                        transition-all duration-300
                        hover:scale-[1.04]
                        hover:shadow-xl hover:shadow-purple-600/50
                        active:scale-[0.97]"
                    >
                        Get a Free Consultation
                    </Link>
                </div>

                {/* DIVIDER LINE */}
                <div className="relative z-20 flex justify-center mb-0">
                    <span className="w-24 h-[2px] rounded-full bg-slate-800 dark:bg-white/30" />
                </div>

                {/* BLENDING FADE */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-20
                    bg-gradient-to-b from-transparent to-white dark:to-[#020617] z-10"
                />
            </div>

            {/* ================= CORE OFFERINGS ================= */}
            <OurExpertise />

            {/* ================= HOW WE WORK SECTION ================= */}
            <HowWeWork />

            {/* ================= FAQ SECTION ================= */}
            <FaqSection />
            
            {/* 🛑 NO FOOTER HERE! It is handled by layout.js 🛑 */}
        </>
    );
}
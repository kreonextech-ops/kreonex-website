"use client";

import SectionTitle from "@/components/SectionTitle";
import {
    GraduationCap, Bot, Code2, BookOpen, ArrowRight,
    School, Users, Cpu, Layers, Trophy, Lightbulb,
    Puzzle, Rocket, Briefcase, Cloud, BrainCircuit, ShieldCheck, Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EducationPage() {
    return (
        <main className="pt-32 pb-20 bg-white dark:bg-slate-950 min-h-screen relative overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

                {/* --- HERO SECTION --- */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 mb-6">
                            <span className="text-sm font-bold text-orange-600 dark:text-orange-400 tracking-wider">
                                ED-TECH REVOLUTION
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            Shaping the Minds of <br />
                            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Tomorrow.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            We partner with schools to integrate **AI, Robotics, IoT, and STEM** directly into the curriculum. We don't just provide the syllabus; we deploy **expert trainers** to your campus to ensure consistent, high-quality education.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <span className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                <School size={16} className="text-purple-500" /> School Partnerships
                            </span>
                            <span className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                <Trophy size={16} className="text-orange-500" /> Nex Gen Academy
                            </span>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform shadow-lg"
                        >
                            Partner With Us <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Hero Image */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-square md:aspect-video flex items-center justify-center group bg-slate-100 dark:bg-slate-900">
                            <Image
                                src="/assets/education-hero.png"
                                alt="Students learning Robotics and AI"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-transparent mix-blend-overlay" />
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-20 -z-10" />
                    </div>
                </div>

                {/* --- OUR MODELS --- */}
                <SectionTitle
                    text1="OUR OFFERINGS"
                    text2="Two Paths to Excellence"
                    text3="We bridge the gap between traditional education and modern technology."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-24">
                    {/* Model 1: School Partnership */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-slate-800 flex items-center justify-center text-purple-600 mb-6">
                            <School size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            School Collaboration Program
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            We transform your school into a tech hub. We set up the labs, provide the curriculum, and station our own trainers on your campus.
                        </p>
                        <ul className="space-y-3">
                            <ListItem text="We provide the Syllabus (AI4K12, AICTE, CBSE, ICSE aligned)." />
                            <ListItem text="We deploy qualified Teachers to your school." />
                            <ListItem text="Hands-on Robotics & IoT Kits provided." />
                            <ListItem text="Regular assessments & Certification." />
                        </ul>
                    </div>

                    {/* Model 2: Nex Gen Academy */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-slate-800 flex items-center justify-center text-orange-600 mb-6">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Nex Gen Academy
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Our specialized institute for advanced learners and college students. We prepare you for high-paying jobs in the tech industry.
                        </p>
                        <ul className="space-y-3">
                            <ListItem text="College Training: Cloud Computing, Full Stack, AI & ML." />
                            <ListItem text="After-school Advanced Programs for K-12." />
                            <ListItem text="Competition Preparation (Olympiads, Hackathons)." />
                            <ListItem text="Job-Oriented Projects & Portfolio Building." />
                        </ul>
                    </div>
                </div>

                {/* --- FRAMEWORKS & STANDARDS --- */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Global Standards & Frameworks
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            Our curriculum is rigorously designed to meet national and international educational standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FrameworkCard
                            name="AI4K12"
                            desc="The national guideline for AI education in K-12, focusing on Perception, Representation, Learning, Interaction, and Societal Impact."
                        />
                        <FrameworkCard
                            name="AICTE"
                            desc="Aligned with the All India Council for Technical Education's latest model curriculum for emerging technologies like AI & Robotics."
                        />
                        <FrameworkCard
                            name="NEP 2020"
                            desc="Fully compliant with the National Education Policy 2020, emphasizing experiential learning, coding, and critical thinking from a young age."
                        />
                        <FrameworkCard
                            name="CBSE / ICSE"
                            desc="Tailored to fit seamlessly into standard board curriculums (Subject Codes 417, 843, etc.) for skill subjects."
                        />
                    </div>
                </div>

                {/* --- K-12 CURRICULUM LEVELS --- */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            K-12 Curriculum Roadmap
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            A structured journey from Class 3 to Class 12 for school students.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <LevelCard
                            icon={<Puzzle />}
                            level="Beginner (Class 3-5)"
                            focus="Logic & Fun"
                            topics={["Block Coding (Scratch)", "Basic Robotics (Lego)", "Introduction to AI", "Fun with Sensors"]}
                            color="blue"
                        />
                        <LevelCard
                            icon={<Bot />}
                            level="Intermediate (Class 6-8)"
                            focus="Building & Electronics"
                            topics={["Arduino & IoT Basics", "Python Programming", "3D Printing & Design", "App Development"]}
                            color="purple"
                        />
                        <LevelCard
                            icon={<Cpu />}
                            level="Advanced (Class 9-12)"
                            focus="Innovation & Engineering"
                            topics={["Advanced IoT & Raspberry Pi", "AI & Machine Learning Models", "PCB Design", "Real-world Capstone Projects"]}
                            color="orange"
                        />
                    </div>
                </div>

                {/* --- COLLEGE & CAREER (UPDATED: ICONS & THINNER LAYOUT) --- */}
                <div className="mb-24 bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* LEFT: Topics List (Now with Icons) */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                Nex Gen for College Students
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                                We bridge the gap between college theory and industry reality. Our advanced bootcamps are designed to get you hired in high-demand tech roles.
                            </p>
                            <div className="flex flex-col gap-4">
                                <CareerItem icon={<Cloud />} text="Cloud Architecture (AWS, Azure, Google Cloud)" />
                                <CareerItem icon={<BrainCircuit />} text="Deep Learning & Neural Networks" />
                                <CareerItem icon={<Globe />} text="Full Stack Web Development (MERN/Next.js)" />
                                <CareerItem icon={<ShieldCheck />} text="Cybersecurity & Ethical Hacking" />
                                <CareerItem icon={<Briefcase />} text="Placement Assistance & Interview Prep" />
                            </div>
                        </div>

                        {/* RIGHT: Feature Image (Requires 'college-hero.png' in public/assets) */}
                        <div className="lg:w-1/2 relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                            <Image
                                src="/assets/college-hero.png"
                                alt="College Students Learning Tech"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>


                {/* --- TOOLS & TECH --- */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            What They Learn
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-4">
                            Industry-standard tools adapted for young minds.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        <TechCard icon={<Code2 />} name="Python" label="Coding" />
                        <TechCard icon={<Bot />} name="Robotics" label="Hardware" />
                        <TechCard icon={<Cpu />} name="IoT / Arduino" label="Electronics" />
                        <TechCard icon={<Layers />} name="3D Printing" label="Design" />
                        <TechCard icon={<Lightbulb />} name="AI / ML" label="Intelligence" />
                        <TechCard icon={<Rocket />} name="Drones" label="Aviation" />
                    </div>
                </div>

                {/* --- FINAL CTA --- */}
                <div className="relative rounded-3xl overflow-hidden
                    bg-slate-50 border border-slate-200
                    dark:bg-slate-900 dark:border-slate-800
                    p-12 text-center transition-colors duration-300">

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full
                        bg-gradient-to-b from-orange-500/5 to-transparent
                        dark:from-orange-900/20 dark:to-transparent
                        pointer-events-none" />

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
                        Bring the Future to Your School.
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 text-lg relative z-10">
                        Don't just teach history—teach the future. Contact us to set up a demo lab or discuss syllabus integration.
                    </p>

                    <Link
                        href="/contact"
                        className="relative z-10 inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all"
                    >
                        Schedule a School Meeting
                    </Link>
                </div>

            </div>
        </main>
    );
}

/* --- Components --- */

function ListItem({ text }) {
    return (
        <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <span>{text}</span>
        </li>
    );
}

// Updated to use ICONS instead of Images, and reduced padding (p-3) for thinner look
function CareerItem({ icon, text }) {
    return (
        <div className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500/30 transition-colors">
            <div className="text-purple-600 dark:text-purple-400">
                {/* Clone element to ensure consistent size if needed, or just render */}
                <div className="w-6 h-6">{icon}</div>
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200 text-sm md:text-base">{text}</span>
        </div>
    );
}

function FrameworkCard({ name, desc }) {
    return (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center hover:border-blue-500/50 transition-colors">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{name}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function LevelCard({ icon, level, focus, topics, color }) {
    const colorClasses = {
        blue: "text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800",
        purple: "text-purple-600 bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400 border-purple-200 dark:border-purple-800",
        orange: "text-orange-600 bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    };

    return (
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorClasses[color]} border`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{level}</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-6">{focus}</p>

            <div className="space-y-3">
                {topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        {topic}
                    </div>
                ))}
            </div>
        </div>
    );
}

function TechCard({ icon, name, label }) {
    return (
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="text-slate-400 group-hover:text-purple-500 transition-colors mb-3">{icon}</div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{name}</h4>
            <span className="text-xs text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-wider">{label}</span>
        </div>
    );
}
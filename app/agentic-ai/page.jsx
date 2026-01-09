"use client";

import SectionTitle from "@/components/SectionTitle";
import { 
    Network, ShieldCheck, Zap, ArrowRight, 
    Cpu, Workflow, Database, Code2, Container, Layers, 
    Building, HardHat, Briefcase, TrendingUp, BrainCircuit 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AgenticAiPage() {
    return (
        <main className="pt-32 pb-20 bg-white dark:bg-slate-950 min-h-screen relative overflow-hidden">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                
                {/* --- HERO SECTION --- */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 mb-6">
                            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wider">
                                THE NEXT EVOLUTION
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            Beyond Automation. <br />
                            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
                                Autonomous Reasoning.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            Most AI waits for a prompt. <strong>Agentic AI</strong> pursues goals. We build systems that can plan, execute, use software tools, and self-correct—handling complex workflows without human hand-holding.
                        </p>

                        {/* --- NEW: FEATURE HIGHLIGHT BLOCK (Similar to AI Agents Page) --- */}
                        <div className="mb-8 p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4 shadow-sm">
                            <div className="shrink-0 p-2 rounded-lg bg-purple-100 dark:bg-slate-800 text-purple-600">
                                <BrainCircuit size={24} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                                    Self-Healing Workflows
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    The "Best Part": If a tool fails (e.g., API down), Agentic AI doesn't crash. It <span className="text-purple-600 dark:text-purple-400 font-semibold">re-thinks</span>, finds an alternative path, and completes the job autonomously.
                                </p>
                            </div>
                        </div>

                        {/* Updated Button Text & Link */}
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform shadow-lg"
                        >
                            Deploy Autonomous Agents <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-square md:aspect-video flex items-center justify-center group bg-slate-100 dark:bg-slate-900">
                            <Image 
                                src="/assets/agentic-hero.png" 
                                alt="Autonomous Agentic AI System" 
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent mix-blend-overlay" />
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 -z-10" />
                    </div>
                </div>

                {/* --- CAPABILITIES GRID --- */}
                <SectionTitle 
                    text1="CAPABILITIES"
                    text2="What Can Agentic AI Do?"
                    text3="These are not chatbots. These are digital workers capable of multi-step execution."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-24">
                    <FeatureCard 
                        icon={<Network />}
                        title="Multi-Step Reasoning"
                        desc="Breaks down complex goals (e.g., 'Plan a marketing campaign') into actionable steps and executes them sequentially."
                    />
                    <FeatureCard 
                        icon={<Zap />}
                        title="Tool Usage"
                        desc="Grants the AI ability to browse the web, access APIs, read databases, and use software interfaces just like a human."
                    />
                    <FeatureCard 
                        icon={<ShieldCheck />}
                        title="Self-Correction"
                        desc="If a step fails (e.g., a website is down), the agent analyzes the error and tries an alternative path to achieve the goal."
                    />
                </div>

                {/* --- USE CASES SECTION --- */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Business Use Cases
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            How different industries are using Agentic AI to replace manual operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <UseCaseCard 
                            icon={<Building />}
                            industry="Real Estate & Realtors"
                            problem="Lost leads due to delayed responses and manual scheduling chaos."
                            solution="An Autonomous Agent that engages leads 24/7 via WhatsApp/SMS, qualifies them based on budget/location, checks your calendar, and books site visits directly—without you lifting a finger."
                        />
                        <UseCaseCard 
                            icon={<HardHat />}
                            industry="Construction & Builders"
                            problem="Supply chain delays and vendor miscommunication causing project overruns."
                            solution="A Procurement Agent that monitors inventory levels, automatically requests quotes from multiple vendors when stock is low, compares prices, and drafts purchase orders for approval."
                        />
                        <UseCaseCard 
                            icon={<Briefcase />}
                            industry="HR & Recruitment"
                            problem="Spending hours screening thousands of irrelevant resumes."
                            solution="A Recruiter Agent that scans resumes, matches them against job descriptions, conducts initial screening interviews via chat, and schedules the top 5% of candidates for human review."
                        />
                         <UseCaseCard 
                            icon={<TrendingUp />}
                            industry="Finance & Trading"
                            problem="Missing market opportunities due to human latency."
                            solution="A Trading Agent that analyzes live market data news sentiment, and executes trades or alerts analysts based on complex, pre-defined risk strategies in milliseconds."
                        />
                    </div>

                    {/* --- EXTRA INDUSTRIES LINE --- */}
                    <div className="mt-16 text-center border-t border-slate-200 dark:border-slate-800 pt-10">
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                            Empowering many more enterprises including <span className="text-purple-600 dark:text-purple-400 font-bold">Manufacturing, Hospitals, Retail, and Logistics.</span>
                        </p>
                        <p className="mt-3 text-slate-500 dark:text-slate-400 text-base md:text-lg">
                            Our agents assist with <span className="text-slate-800 dark:text-slate-200 font-semibold">Sales Automation, Real-time Tracking, Email Responding, and 24/7 Support.</span>
                        </p>
                    </div>
                </div>

                {/* --- TECH STACK --- */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Powered by Modern Intelligence
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-4">
                            We architect robust systems using the world's most advanced AI libraries and tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        <TechCard icon={<Layers />} name="LangChain" label="Orchestration" />
                        <TechCard icon={<Workflow />} name="n8n" label="Workflows" />
                        <TechCard icon={<Cpu />} name="OpenAI / LLMs" label="Intelligence" />
                        <TechCard icon={<Database />} name="Pinecone" label="Vector Memory" />
                        <TechCard icon={<Code2 />} name="Python" label="Core Logic" />
                        <TechCard icon={<Container />} name="Docker" label="Deployment" />
                    </div>
                </div>

                {/* --- FINAL CTA (THEME ADAPTIVE) --- */}
                <div className="relative rounded-3xl overflow-hidden 
                    bg-slate-50 border border-slate-200             
                    dark:bg-slate-900 dark:border-slate-800         
                    p-12 text-center transition-colors duration-300">
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full 
                        bg-gradient-to-b from-purple-500/5 to-transparent          
                        dark:from-purple-900/20 dark:to-transparent                
                        pointer-events-none" />
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
                        Ready to automate your enterprise?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 text-lg relative z-10">
                        Stop wasting time on manual workflows. Let's build an autonomous workforce that scales with you.
                    </p>
                    
                    {/* ✅ LINK FIXED: Connects to /contact */}
                    <Link 
                        href="/contact" 
                        className="relative z-10 inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 transition-all"
                    >
                        Schedule a Consultation
                    </Link>
                </div>

            </div>
        </main>
    );
}

/* --- Components --- */

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 
            hover:shadow-xl hover:border-purple-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-purple-600 
                group-hover:bg-purple-600 group-hover:text-white transition-colors mb-6 shadow-sm border border-slate-100 dark:border-slate-700">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function UseCaseCard({ icon, industry, problem, solution }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/30 transition-all duration-300">
            <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-purple-600 shadow-sm border border-slate-100 dark:border-slate-700">
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{industry}</h3>
                <div className="mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500">The Problem:</span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{problem}</p>
                </div>
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">Our Agentic Solution:</span>
                    <p className="text-slate-800 dark:text-slate-200 text-sm mt-1 leading-relaxed font-medium">{solution}</p>
                </div>
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
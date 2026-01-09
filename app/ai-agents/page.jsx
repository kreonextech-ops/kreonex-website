"use client";

import SectionTitle from "@/components/SectionTitle";
import { 
    MessageSquare, Users, BarChart3, Bot, ArrowRight, 
    Cpu, Workflow, Database, Code2, Container, Layers, 
    Headphones, CalendarCheck, FileText, ShoppingCart 
} from "lucide-react";
import Link from "next/link"; // ✅ Imported Link correctly
import Image from "next/image";

export default function AiAgentsPage() {
    return (
        <main className="pt-32 pb-20 bg-white dark:bg-slate-950 min-h-screen relative overflow-hidden">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                
                {/* --- HERO SECTION --- */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                                TASK-SPECIFIC INTELLIGENCE
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            Digital Workers for <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                Specific Tasks.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            Unlike complex Agentic Systems that "think" and plan, **AI Agents** are specialized bots designed to master one job perfectly—whether it's answering support tickets, booking appointments, or qualifying leads.
                        </p>
                        
                        {/* Cost Comparison Note */}
                        <div className="mb-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                            <span className="text-green-500 font-bold text-xl">$</span>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                <strong className="text-slate-900 dark:text-white block mb-1">More Cost-Effective than Agentic AI</strong>
                                Since these agents follow defined rules and don't require complex autonomous reasoning loops, they use fewer resources and are faster to build and deploy.
                            </p>
                        </div>

                        {/* ✅ LINK FIXED: Connects to /contact */}
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform shadow-lg"
                        >
                            Hire Your AI Agent <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Visual (IMAGE) */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-square md:aspect-video flex items-center justify-center group bg-slate-100 dark:bg-slate-900">
                            {/* Ensure 'ai-agents-hero.png' is in public/assets/ */}
                            <Image 
                                src="/assets/ai-agents-hero.png" 
                                alt="AI Customer Support Agent" 
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-overlay" />
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 -z-10" />
                    </div>
                </div>

                {/* --- CAPABILITIES GRID --- */}
                <SectionTitle 
                    text1="CAPABILITIES"
                    text2="Why Choose AI Agents?"
                    text3="Perfect for high-volume, repetitive tasks that burn out human employees."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-24">
                    <FeatureCard 
                        icon={<MessageSquare />}
                        title="Instant Response"
                        desc="Zero wait times. Agents respond to thousands of customers simultaneously, 24/7, without ever getting tired."
                    />
                    <FeatureCard 
                        icon={<Users />}
                        title="Human Handoff"
                        desc="Smart enough to handle 80% of queries, and humble enough to instantly transfer complex issues to a human manager."
                    />
                    <FeatureCard 
                        icon={<Database />}
                        title="CRM Integration"
                        desc="Automatically updates your CRM (HubSpot, Salesforce) with every conversation detail, lead status, and contact info."
                    />
                </div>

                {/* --- USE CASES SECTION --- */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Common Applications
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            Where businesses are seeing the highest ROI with specialized agents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <UseCaseCard 
                            icon={<Headphones />}
                            industry="Customer Support"
                            problem="High support costs and slow response times causing customer churn."
                            solution="A Support Agent trained on your entire knowledge base that resolves FAQs, tracks order status, and handles returns instantly on your website or WhatsApp."
                        />
                        <UseCaseCard 
                            icon={<CalendarCheck />}
                            industry="Sales & Appointments"
                            problem="Sales teams wasting time chasing leads to book meetings."
                            solution="An Appointment Setter Agent that engages website visitors, qualifies them with key questions, and books a slot directly on your Google Calendar."
                        />
                        <UseCaseCard 
                            icon={<ShoppingCart />}
                            industry="E-Commerce & Retail"
                            problem="Cart abandonment and questions about product availability."
                            solution="A Shopping Assistant that recommends products based on user preferences, answers sizing questions, and nudges users to complete checkout."
                        />
                         <UseCaseCard 
                            icon={<FileText />}
                            industry="Data Entry & Processing"
                            problem="Manual data entry is slow, expensive, and error-prone."
                            solution="A Document Processing Agent that reads invoices, receipts, or forms (PDF/Image) and automatically types the data into your Excel sheets or ERP system."
                        />
                    </div>

                    {/* --- EXTRA INDUSTRIES LINE --- */}
                    <div className="mt-16 text-center border-t border-slate-200 dark:border-slate-800 pt-10">
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                            Also highly effective for <span className="text-blue-600 dark:text-blue-400 font-bold">Hotels (Concierge), Clinics (Patient Intake), and Education (Student Queries).</span>
                        </p>
                        <p className="mt-3 text-slate-500 dark:text-slate-400 text-base md:text-lg">
                            Deploy them on <span className="text-slate-800 dark:text-slate-200 font-semibold">WhatsApp, Instagram, Web Chat, Slack, or Email.</span>
                        </p>
                    </div>
                </div>

                {/* --- TECH STACK --- */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Our Toolset
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-4">
                            Lightweight, fast, and reliable technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        <TechCard icon={<Layers />} name="LangChain" label="Orchestration" />
                        <TechCard icon={<Workflow />} name="Voiceflow" label="Chat Logic" />
                        <TechCard icon={<Cpu />} name="OpenAI / Claude" label="LLM Core" />
                        <TechCard icon={<Database />} name="Supabase" label="Database" />
                        <TechCard icon={<Code2 />} name="JavaScript" label="Functions" />
                        <TechCard icon={<Container />} name="Vercel" label="Hosting" />
                    </div>
                </div>

                {/* --- FINAL CTA (THEME ADAPTIVE) --- */}
                <div className="relative rounded-3xl overflow-hidden 
                    bg-slate-50 border border-slate-200             
                    dark:bg-slate-900 dark:border-slate-800         
                    p-12 text-center transition-colors duration-300">
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full 
                        bg-gradient-to-b from-blue-500/5 to-transparent          
                        dark:from-blue-900/20 dark:to-transparent                
                        pointer-events-none" />
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
                        Start small, scale fast.
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 text-lg relative z-10">
                        Automate your first task today. See results in less than a week.
                    </p>
                    
                    {/* ✅ LINK FIXED: Connects to /contact */}
                    <Link 
                        href="/contact" 
                        className="relative z-10 inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transition-all"
                    >
                        Get a Free Demo
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
            hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 
                group-hover:bg-blue-600 group-hover:text-white transition-colors mb-6 shadow-sm border border-slate-100 dark:border-slate-700">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function UseCaseCard({ icon, industry, problem, solution }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300">
            <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 dark:border-slate-700">
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
                    <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">The Solution:</span>
                    <p className="text-slate-800 dark:text-slate-200 text-sm mt-1 leading-relaxed font-medium">{solution}</p>
                </div>
            </div>
        </div>
    );
}

function TechCard({ icon, name, label }) {
    return (
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 group">
            <div className="text-slate-400 group-hover:text-blue-500 transition-colors mb-3">{icon}</div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{name}</h4>
            <span className="text-xs text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-wider">{label}</span>
        </div>
    );
}
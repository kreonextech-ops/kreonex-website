"use client";

import SectionTitle from "@/components/SectionTitle";
import { 
    Globe, Smartphone, Rocket, Zap, ArrowRight, 
    Layout, Server, Database, Code2, Lock, 
    Monitor, ShoppingBag, BarChart 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SaasPage() {
    return (
        <main className="pt-32 pb-20 bg-white dark:bg-slate-950 min-h-screen relative overflow-hidden">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                
                {/* --- HERO SECTION --- */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-6">
                            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
                                WEB & SAAS ENGINEERING
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            Websites that <br />
                            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                Drive Business Growth.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            We don't just "make websites." We build high-performance digital platforms using modern frameworks like <strong>Next.js</strong>. Fast, secure, and designed to convert visitors into paying customers.
                        </p>
                        
                        {/* Speed/Performance Note */}
                        <div className="mb-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                            <Zap className="text-yellow-500 shrink-0" size={24} />
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                <strong className="text-slate-900 dark:text-white block mb-1">Why Modern Tech Matters?</strong>
                                Old Wordpress sites are slow and vulnerable. Our Next.js sites load instantly, rank higher on Google (SEO), and handle millions of users without crashing.
                            </p>
                        </div>

                        <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform shadow-lg"
                        >
                            Build Your Platform <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Visual (IMAGE) */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-square md:aspect-video flex items-center justify-center group bg-slate-100 dark:bg-slate-900">
                            {/* Make sure 'saas-hero.png' is in public/assets/ */}
                            <Image 
                                src="/assets/saas-hero.png" 
                                alt="Modern SaaS Dashboard Interface" 
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent mix-blend-overlay" />
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 -z-10" />
                    </div>
                </div>

                {/* --- CAPABILITIES GRID --- */}
                <SectionTitle 
                    text1="EXPERTISE"
                    text2="More Than Just Code"
                    text3="We engineer digital experiences that are beautiful, functional, and scalable."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-24">
                    <FeatureCard 
                        icon={<Rocket />}
                        title="Blazing Fast Performance"
                        desc="We use Server-Side Rendering (SSR) to ensure your pages load in milliseconds, keeping users engaged and reducing bounce rates."
                    />
                    <FeatureCard 
                        icon={<Smartphone />}
                        title="Mobile-First Design"
                        desc="Your site will look and function perfectly on every device—from massive desktop monitors to the smallest smartphones."
                    />
                    <FeatureCard 
                        icon={<Lock />}
                        title="Enterprise Security"
                        desc="Built-in protection against DDoS attacks and data breaches. We implement banking-grade authentication and secure database connections."
                    />
                </div>

                {/* --- USE CASES SECTION --- */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            What We Build
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            Tailored solutions for every stage of your business journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <UseCaseCard 
                            icon={<Rocket />}
                            title="Startup MVPs"
                            desc="Got a SaaS idea? We build Minimum Viable Products (MVPs) in weeks, not months. Includes user login, payments (Stripe), and core features so you can launch and get funding fast."
                        />
                        <UseCaseCard 
                            icon={<Monitor />}
                            title="Corporate Websites"
                            desc="Premium, high-authority websites for established companies. Features advanced animations, case study portfolios, and integrations with your CRM to capture high-value leads."
                        />
                        <UseCaseCard 
                            icon={<ShoppingBag />}
                            title="E-Commerce Platforms"
                            desc="Custom online stores that go beyond Shopify limits. Personalized product recommendations, fast checkout flows, and inventory management systems built for scale."
                        />
                        <UseCaseCard 
                            icon={<BarChart />}
                            title="Internal Dashboards"
                            desc="Tools to manage your business operations. Admin panels, data visualization, employee portals, and inventory tracking systems that streamline your workflow."
                        />
                    </div>

                    {/* --- EXTRA INDUSTRIES LINE --- */}
                    <div className="mt-16 text-center border-t border-slate-200 dark:border-slate-800 pt-10">
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                            Serving industries like <span className="text-indigo-600 dark:text-indigo-400 font-bold">FinTech, Healthcare, EdTech, and Logistics.</span>
                        </p>
                        <p className="mt-3 text-slate-500 dark:text-slate-400 text-base md:text-lg">
                            We handle everything: <span className="text-slate-800 dark:text-slate-200 font-semibold">UI/UX Design, Frontend, Backend API, Database, and Cloud Deployment.</span>
                        </p>
                    </div>
                </div>

                {/* --- TECH STACK --- */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Modern Tech Stack
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-4">
                            We use the same tools as Netflix, Uber, and Twitch to build your software.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        <TechCard icon={<Globe />} name="Next.js 14" label="Framework" />
                        <TechCard icon={<Layout />} name="React" label="Frontend" />
                        <TechCard icon={<Code2 />} name="Tailwind CSS" label="Styling" />
                        <TechCard icon={<Database />} name="Supabase" label="Database" />
                        <TechCard icon={<Server />} name="Node.js" label="Backend" />
                        <TechCard icon={<Rocket />} name="Vercel" label="Hosting" />
                    </div>
                </div>

                {/* --- FINAL CTA (THEME ADAPTIVE) --- */}
                <div className="relative rounded-3xl overflow-hidden 
                    bg-slate-50 border border-slate-200             
                    dark:bg-slate-900 dark:border-slate-800         
                    p-12 text-center transition-colors duration-300">
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full 
                        bg-gradient-to-b from-indigo-500/5 to-transparent          
                        dark:from-indigo-900/20 dark:to-transparent                
                        pointer-events-none" />
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
                        Need a website that actually sells?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 text-lg relative z-10">
                        Stop losing customers to slow, outdated websites. Let's build a modern platform that reflects your brand's quality.
                    </p>
                    
                    <Link 
                        href="/contact" 
                        className="relative z-10 inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all"
                    >
                        Get a Free Quote
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
            hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-600 
                group-hover:bg-indigo-600 group-hover:text-white transition-colors mb-6 shadow-sm border border-slate-100 dark:border-slate-700">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function UseCaseCard({ icon, title, desc }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
            <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100 dark:border-slate-700">
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function TechCard({ icon, name, label }) {
    return (
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all duration-300 group">
            <div className="text-slate-400 group-hover:text-indigo-500 transition-colors mb-3">{icon}</div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{name}</h4>
            <span className="text-xs text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-wider">{label}</span>
        </div>
    );
}
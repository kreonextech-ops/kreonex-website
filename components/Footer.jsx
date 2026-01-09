import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            KREONEX
                        </Link>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                            Empowering enterprises and schools with Agentic AI, Automation, and Next-Gen Education.
                        </p>
                        
                        {/* SOCIAL ICONS (UPDATED LINKS) */}
                        <div className="flex gap-4 mt-6">
                            <SocialIcon 
                                icon={<Facebook size={20} />} 
                                href="https://www.facebook.com/share/1DNtkTvSDR/" 
                                label="Facebook"
                            />
                            <SocialIcon 
                                icon={<Instagram size={20} />} 
                                href="https://www.instagram.com/kreonex/" 
                                label="Instagram"
                            />
                            <SocialIcon 
                                icon={<WhatsAppIcon />} 
                                href="https://wa.me/916296103605" 
                                label="WhatsApp"
                            />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Company</h4>
                        <ul className="space-y-3">
                            <FooterLink href="/" text="Home" />
                            <FooterLink href="/agentic-ai" text="Agentic AI" />
                            <FooterLink href="/ai-agents" text="AI Agents" />
                            <FooterLink href="/saas" text="SaaS & Web" />
                            <FooterLink href="/education" text="Education" />
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li className="text-slate-600 dark:text-slate-400">Custom AI Agents</li>
                            <li className="text-slate-600 dark:text-slate-400">Workflow Automation</li>
                            <li className="text-slate-600 dark:text-slate-400">School Lab Setup</li>
                            <li className="text-slate-600 dark:text-slate-400">College Bootcamps</li>
                            <li className="text-slate-600 dark:text-slate-400">Web Development</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                <MapPin className="shrink-0 text-purple-600 mt-1" size={20} />
                                <span>
                                    Loknath Nagar, Bagdogra,<br />
                                    Siliguri, Dist: Darjeeling,<br />
                                    West Bengal - 734014
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <Phone className="shrink-0 text-purple-600" size={20} />
                                <a href="tel:+916296103605" className="hover:text-purple-600 transition-colors">
                                    +91 62961 03605
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <Mail className="shrink-0 text-purple-600" size={20} />
                                <a href="mailto:info@kreonex.com" className="hover:text-purple-600 transition-colors">
                                    info@kreonex.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        © {new Date().getFullYear()} Kreonex Technologies. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
                        <Link href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-purple-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, text }) {
    return (
        <li>
            <Link href={href} className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {text}
            </Link>
        </li>
    );
}

function SocialIcon({ icon, href, label }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-purple-600 hover:text-white transition-all"
        >
            {icon}
        </a>
    );
}

function WhatsAppIcon() {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 1h4a.5.5 0 0 0 1-1v-1" />
        </svg>
    );
}
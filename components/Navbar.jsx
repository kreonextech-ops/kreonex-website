"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useThemeContext } from "@/context/ThemeContext";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const { theme } = useThemeContext();

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <nav
            className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 ${
                openMobileMenu ? "" : "backdrop-blur"
            }`}
        >
            {/* LOGO + BRAND NAME */}
            <Link href="/" className="flex items-center gap-3">
                <Image
                    src={
                        theme === "dark"
                            ? "/assets/kreonex-logo-light.png"
                            : "/assets/kreonex-logo-dark.png"
                    }
                    alt="Kreonex Technologies Logo"
                    width={140}
                    height={40}
                    priority
                    className="h-9 w-auto"
                />
                <span className="font-bold tracking-wide text-slate-900 dark:text-white text-sm md:text-base">
                    KREONEX TECHNOLOGIES
                </span>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-8 lg:gap-9 lg:pl-20">
                <Link href="/" className="hover:text-slate-600 dark:hover:text-slate-300">
                    Home
                </Link>
                <Link href="/agentic-ai" className="hover:text-slate-600 dark:hover:text-slate-300">
                    Agentic AI
                </Link>
                <Link href="/ai-agents" className="hover:text-slate-600 dark:hover:text-slate-300">
                    AI Agents
                </Link>
                <Link href="/saas" className="hover:text-slate-600 dark:hover:text-slate-300">
                    SaaS
                </Link>
                <Link href="/education" className="hover:text-slate-600 dark:hover:text-slate-300">
                    Education
                </Link>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium
                bg-white/60 dark:bg-black/40 backdrop-blur-md md:hidden transition duration-300
                ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}
            >
                <Link href="/" onClick={() => setOpenMobileMenu(false)}>Home</Link>
                <Link href="/agentic-ai" onClick={() => setOpenMobileMenu(false)}>Agentic AI</Link>
                <Link href="/ai-agents" onClick={() => setOpenMobileMenu(false)}>AI Agents</Link>
                <Link href="/saas" onClick={() => setOpenMobileMenu(false)}>SaaS</Link>
                <Link href="/education" onClick={() => setOpenMobileMenu(false)}>Education</Link>

                <Link
                    href="/contact"
                    onClick={() => setOpenMobileMenu(false)}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-md"
                >
                    Contact Us
                </Link>

                <button
                    className="aspect-square size-10 p-1 bg-purple-600 hover:bg-purple-700 transition text-white rounded-md flex items-center justify-center"
                    onClick={() => setOpenMobileMenu(false)}
                >
                    <XIcon />
                </button>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">
                <ThemeToggle />

                <Link
                    href="/contact"
                    className="hidden md:flex px-4 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-md"
                >
                    Contact Us
                </Link>

                <button
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    className="md:hidden"
                >
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}

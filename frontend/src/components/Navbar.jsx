import React, { useState } from "react";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navLinks = [
        { label: "Services", href: "#services" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Workspace", href: "#flagship" },
        { label: "Leadership", href: "#leadership" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <>
            {/* ================= NAVBAR ================= */}

            <header className="fixed top-0 left-0 right-0 z-40 glass-nav">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-space-md">
                        <div className="flex items-center gap-space-md group">

                            <img
                                src="/mexacrio-logo.svg"
                                alt="Mexacrio Technologies logo"
                                className="h-9 w-9 rounded-lg object-cover ring-1 ring-primary/40 shadow-[0_0_15px_rgba(160,120,255,0.4)] transition-transform group-hover:scale-105"
                            />

                            <span className="font-headline-sm text-sm text-on-surface tracking-tight font-semibold">
                                MEXACRIO TECHNOLOGIES
                            </span>

                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-space-lg">

                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all duration-200 relative group py-1"
                            >
                                {link.label}

                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                            </a>
                        ))}

                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">

                        {/* Contact */}
                        <a
                            href="#contact"
                            className="hidden sm:inline-flex items-center justify-center px-5 py-2 font-label-md text-label-md rounded-full bg-primary text-on-primary font-semibold hover:bg-primary-fixed-dim transition-all shadow-[0_0_20px_rgba(160,120,255,0.35)] hover:shadow-[0_0_30px_rgba(160,120,255,0.55)] hover:scale-105 active:scale-95"
                        >
                            Contact Us
                        </a>

                        {/* Menu */}
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden p-2 rounded-xl glass-panel-subtle text-on-surface hover:text-primary hover:border-primary/40 focus:outline-none transition-all flex items-center gap-1.5 border border-white/10 hover:scale-105 active:scale-95"
                            aria-label="Open Sidebar Menu"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                menu
                            </span>
                        </button>

                    </div>
                </div>
            </header>


            {/* ================= BACKDROP ================= */}

            <div
                className={` fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] transition-opacity duration-500 ease-in-out

                    ${sidebarOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }
                `}
                onClick={() => setSidebarOpen(false)}
            />


            {/* ================= SIDEBAR ================= */}

            <aside
                className={` fixed top-0 right-0 h-screen w-[300px] sm:w-[360px] z-[1000]
                    bg-[#11101a] border-l border-white/10 shadow-[-20px_0_60px_rgba(0,0,0,0.45)]
                    p-6 flex flex-col transform transition-transform duration-500 ease-in-out

                    ${sidebarOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >

                {/* ================= SIDEBAR HEADER ================= */}

                <div className="flex items-center justify-between pb-6 border-b border-white/10">

                    <div className="flex items-center gap-4">

                        <img
                            src="/mexacrio-logo.svg"
                            alt="Mexacrio Technologies"
                            className="h-8 w-8 rounded-lg object-cover ring-1 ring-primary/40 shadow-[0_0_12px_rgba(160,120,255,0.4)]"
                        />

                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                            MENU
                        </span>

                    </div>


                    {/* CLOSE */}

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(false)}
                        className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                        aria-label="Close Sidebar"
                    >
                        <span className="material-symbols-outlined text-xl">
                            close
                        </span>
                    </button>

                </div>


                {/* ================= LINKS ================= */}

                <div className="py-6 space-y-2">

                    {navLinks.map((link) => (

                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setSidebarOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-all text-white  group"
                        >

                            <span className="text-base">
                                {link.label}
                            </span>

                            <span className="material-symbols-outlined text-gray-400 text-sm ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                arrow_forward
                            </span>

                        </a>

                    ))}
                    {/* ================= FOOTER ================= */}

                    <div className="mt-auto pt-6 border-t border-white/10">

                        <a
                            href="#contact"
                            onClick={() => setSidebarOpen(false)}
                            className="w-full inline-flex items-center justify-center py-3.5 rounded-lg bg-primary text-black/95 font-bold shadow-lg shadow-primary/30 hover:bg-primary-fixed-dim transition-all hover:scale-[1.02] active:scale-95"
                        >
                            Contact Us
                        </a>

                    </div>
                </div>
            </aside>
        </>
    );
}
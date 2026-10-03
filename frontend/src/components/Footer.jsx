import React from 'react';

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="w-full glass-panel border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-space-xl relative z-10">
                <div>
                    {/* Brand Info */}
                    <div className="md:col-span-5 space-y-space-sm">
                        <div className="flex items-center gap-space-sm">
                            <img
                                alt="Mexacrio Technologies logo"
                                className="h-8 w-8 rounded-lg object-cover ring-1 ring-primary/40 shadow-[0_0_12px_rgba(160,120,255,0.4)]"
                                src="/mexacrio-logo.svg"
                            />
                            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold">
                                MEXACRIO TECHNOLOGIES
                            </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
                            We build intelligence systems that never fail.
                        </p>
                        <div className="pt-space-xs">
                            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-space-xs font-semibold">
                                Global Inquiries
                            </span>
                            <a
                                className="font-body-sm text-body-sm text-tertiary hover:underline"
                                href="mailto:mexacrio.contact@gmail.com"
                            >
                                mexacrio.contact@gmail.com
                            </a>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                                India • Global Operations
                            </p>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-space-md">
                        <div className="space-y-space-sm">
                            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block font-semibold">
                                OVERVIEW
                            </span>
                            <ul className="space-y-space-xs font-body-sm text-body-sm">
                                <li className="text-on-surface-variant hover:text-primary transition-colors">
                                    <a href="#services">Services</a>
                                </li>
                                <li className="text-on-surface-variant hover:text-primary transition-colors">
                                    <a href="#capabilities">Capabilities</a>
                                </li>
                                <li className="text-on-surface-variant hover:text-primary transition-colors">
                                    <a href="#flagship">Workspace</a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-space-sm">
                            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block font-semibold">
                                COMPANY
                            </span>
                            <ul className="space-y-space-xs font-body-sm text-body-sm">
                                <li className="text-on-surface-variant hover:text-primary transition-colors">
                                    <a href="#leadership">Leadership</a>
                                </li>
                                <li className="text-on-surface-variant hover:text-primary transition-colors">
                                    <a href="#faq">FAQ</a>
                                </li>
                                <li className="text-on-surface-variant hover:text-primary transition-colors">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-space-sm col-span-2 sm:col-span-1">
                            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block font-semibold">
                                Engagement
                            </span>
                            <div className="pt-space-xs">
                                <a
                                    className="inline-block px-5 py-2 font-label-md text-label-md text-on-surface glass-panel-subtle hover:bg-white/10 transition-all rounded-full border border-white/10 text-center hover:scale-105 active:scale-95 shadow-md"
                                    href="#contact"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-space-lg border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                    <div>© {currentYear} Mexacrio Technologies. All rights reserved.</div>
                    <div className="flex items-center gap-space-md font-label-md text-label-md">
                        <span className="inline-flex items-center gap-1.5 text-on-surface-variant">
                            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                            Global Mesh: Active
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

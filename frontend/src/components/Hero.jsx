import React from 'react';
import Business from "../assets/managersbusiness.jpg"

export default function Hero() {
    return (
        <section className="relative w-full pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-transparent">
            {/* Dynamic Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-1/3 right-10 w-96 h-96 bg-tertiary/15 rounded-full blur-[70px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left: Copy & Actions (Slides in from LEFT with Transparency) */}
                    <div className="lg:col-span-7 flex flex-col space-y-6">
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel-subtle w-fit border border-primary/30 shadow-[0_0_15px_rgba(160,120,255,0.2)]">
                            <img src="/mexacrio.jpeg" alt="Mexacrio Technologies logo" className="w-5 h-5 rounded-full object-cover ring-1 ring-primary/40 shadow-sm" />
                            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
                                AI • Software • Automation
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl text-gray-200 tracking-tight leading-tight">
                            mexacrio technologies: AI Automation, RAG Systems &amp; Custom Software
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-tertiary">
                                for Growing Businesses
                            </span>
                        </h1>

                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                            We engineer production-grade AI systems, private RAG knowledge retrieval, and custom high-throughput software architectures tailored to eliminate operational latency and solve complex enterprise demands.
                        </p>

                        {/* Twin Actions */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-fixed-dim transition-all shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:scale-105 active:scale-95"
                                href="#contact"
                            >
                                Contact Us
                            </a>
                            <a
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-panel text-on-surface hover:bg-white/10 transition-all font-label-md text-label-md hover:border-white/20 hover:scale-105 active:scale-95"
                                href="#services"
                            >
                                Explore Solutions{' '}
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap items-center gap-2.5 pt-4">
                            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel-subtle text-on-surface-variant font-label-sm text-label-sm border border-white/5 hover:border-primary/40 transition-colors">
                                <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    verified
                                </span>
                                Tailored AI Architecture
                            </div>
                            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel-subtle text-on-surface-variant font-label-sm text-label-sm border border-white/5 hover:border-tertiary/40 transition-colors">
                                <span className="material-symbols-outlined text-xs text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    verified
                                </span>
                                Business-Focused Automation
                            </div>
                            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel-subtle text-on-surface-variant font-label-sm text-label-sm border border-white/5 hover:border-secondary/40 transition-colors">
                                <span className="material-symbols-outlined text-xs text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    verified
                                </span>
                                Reliable Engineering Partnership
                            </div>
                        </div>
                    </div>



                    <div className="lg:w-[520px] max-w-[520px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] flex items-center justify-center p-3 sm:p-4 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                        <img
                            src={Business}
                            alt="Mexacrio Technologies business and engineering"
                            fetchPriority="high"
                            className="w-full h-full object-contain rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );  
}

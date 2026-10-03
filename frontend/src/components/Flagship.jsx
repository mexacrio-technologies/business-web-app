import React from 'react';


export default function Flagship() {
    return (
        <section className="w-full py-24 bg-transparent relative overflow-hidden" id="flagship">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="relative rounded-3xl glass-panel p-8 md:p-12 overflow-hidden shadow-2xl border border-white/10 hover:border-primary/30 transition-all duration-500">
                    {/* Accent Glow */}
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content (Slides in from LEFT) */}
                        <div className="min-w-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle text-primary font-label-sm text-label-sm uppercase tracking-wider border border-primary/20">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Flagship Innovation • In Active Development
                            </div>

                            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                                Mexacrio AI Workspace
                            </h2>

                            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                                An AI-powered knowledge workspace enabling cross-functional enterprise teams to search, summarize, and synthesize internal proprietary documents with verifiable citation trails and zero hallucinations.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                <div className="p-4 rounded-xl glass-panel-subtle border border-white/5">
                                    <span className="font-label-sm text-label-sm text-tertiary block mb-1">
                                        CAPABILITY
                                    </span>
                                    <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                                        Multi-format Document Upload
                                    </span>
                                    <p className="font-body-sm text-body-sm text-outline mt-0.5">
                                        PDF, DOCX, JSON, &amp; Notion APIs
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl glass-panel-subtle border border-white/5">
                                    <span className="font-label-sm text-label-sm text-tertiary block mb-1">
                                        SECURITY
                                    </span>
                                    <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                                        RBAC &amp; Air-Gapped Model Mode
                                    </span>
                                    <p className="font-body-sm text-body-sm text-outline mt-0.5">
                                        Zero model retention guarantees
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <a
                                    className="px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-fixed-dim transition-all shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:scale-105 active:scale-95"
                                    href="#contact"
                                >
                                    Request Early Access
                                </a>
                                <span className="font-label-sm text-label-sm text-outline">
                                    Q2 2026 Private Alpha Rollout
                                </span>
                            </div>
                        </div>

                        {/* Product Wireframe Mockup (Slides in from RIGHT) */}
                        <div className="min-w-0">
                            <div className="rounded-2xl glass-panel p-5 space-y-4 shadow-xl border border-white/10">
                                <div className="flex items-center justify-between pb-3 glass-panel-subtle p-3 rounded-xl border border-white/5">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-xl">
                                            auto_awesome
                                        </span>
                                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                                            Mexacrio Workspace Search
                                        </span>
                                    </div>
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm font-semibold">
                                        v0.9.1
                                    </span>
                                </div>

                                {/* Simulated Prompt Box */}
                                <div className="p-3.5 rounded-xl glass-panel-subtle border border-white/5">
                                    <p className="font-label-sm text-label-sm text-outline mb-1 font-mono">PROMPT</p>
                                    <p className="font-body-sm text-body-sm text-on-surface">
                                        "Summarize the GDPR clauses in our latest European cloud vendor agreements."
                                    </p>
                                </div>

                                {/* Simulated Answer */}
                                <div className="p-4 rounded-xl glass-panel-subtle space-y-2 border border-white/5">
                                    <div className="flex items-center justify-between font-label-sm text-label-sm">
                                        <span className="text-tertiary font-semibold flex items-center gap-1">
                                            <span className="material-symbols-outlined text-xs">verified</span> Grounded Synthesis
                                        </span>
                                        <span className="text-outline font-mono">3 ms</span>
                                    </div>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                        Clause 4.2 establishes standard contractual clauses (SCCs) for cross-border transfers. Data is encrypted in transit and at rest with customer-held keys...
                                    </p>
                                    <div className="pt-2 flex flex-wrap items-center gap-2">
                                        <span className="px-2.5 py-0.5 rounded-full glass-panel-subtle text-primary font-label-sm text-label-sm border border-primary/20">
                                            [Doc #284 • Page 12]
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full glass-panel-subtle text-primary font-label-sm text-label-sm border border-primary/20">
                                            [Vendor_MSA_2025.pdf]
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

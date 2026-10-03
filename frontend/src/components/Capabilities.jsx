import React from 'react';

export default function Capabilities() {
    const targetAudiences = [
        {
            title: 'Startups & Growth-stage Companies',
            desc: 'requiring rapid, high-assurance AI MVP builds and scalable seed-to-Series A architecture.'
        },
        {
            title: 'Enterprise Organizations',
            desc: 'deploying private RAG across massive distributed document repositories without data leakage.'
        },
        {
            title: 'Operations & Support Divisions',
            desc: 'seeking automated, multi-step agent pipelines to resolve customer requests autonomously.'
        },
        {
            title: 'Modern Software Teams',
            desc: 'upgrading legacy monoliths into lightning-fast, reactive web applications and cloud services.'
        }
    ];

    const workflowSteps = [
        {
            step: '01 Discover',
            title: 'Assess & Scope',
            desc: 'We audit data readiness, security boundaries, query complexity, and baseline latency targets to define absolute architectural clarity.',
            dotBg: 'bg-primary shadow-[0_0_12px_rgba(208,188,255,0.7)]',
            textColor: 'text-primary'
        },
        {
            step: '02 Architect & Build',
            title: 'Sprint-Driven Engineering',
            desc: 'We fine-tune retrieval algorithms, structure vector indices, write clean backend contracts, and sculpt responsive user frontends.',
            dotBg: 'bg-tertiary shadow-[0_0_12px_rgba(123,208,255,0.7)]',
            textColor: 'text-tertiary'
        },
        {
            step: '03 Deliver & Scale',
            title: 'Production Rollout',
            desc: 'Deploy with end-to-end telemetry, deterministic evaluation suites, and continuous feedback loop optimizations.',
            dotBg: 'bg-secondary shadow-[0_0_12px_rgba(192,193,255,0.7)]',
            textColor: 'text-secondary'
        }
    ];

    return (
        <section className="w-full py-24 bg-surface-container-lowest/30 relative overflow-hidden" id="capabilities">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-14">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-2">
                        INDUSTRIES &amp; CAPABILITIES
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3 tracking-tight">
                        Built for teams that need high-grade technical execution.
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                        Mexacrio Technologies helps organizations transition from fragmented prototype attempts to robust, production-ready AI software ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left: Where We Fit (Slides from LEFT with Transparency) */}
                    <div
                        className="lg:col-span-6 p-8 rounded-2xl glass-panel flex flex-col justify-between h-full border border-white/10 hover:border-primary/30 transition-all duration-300"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl glass-panel-subtle flex items-center justify-center text-primary border border-primary/20">
                                    <span className="material-symbols-outlined text-2xl">target</span>
                                </div>
                                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                                    Where We Fit
                                </h3>
                            </div>
                            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                                {targetAudiences.map((item) => (
                                    <li key={item.title} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-base mt-1 shrink-0">
                                            check_circle
                                        </span>
                                        <span>
                                            <strong className="text-on-surface font-medium">{item.title}</strong>{' '}
                                            {item.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8 p-4 rounded-xl glass-panel-subtle flex items-center justify-between border border-white/5">
                            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                                Infrastructure Readiness
                            </span>
                            <span className="font-label-sm text-label-sm text-tertiary font-semibold">
                                SOC2 &amp; HIPAA Compliant Layouts
                            </span>
                        </div>
                    </div>

                    {/* Right: How We Work (Slides from RIGHT with Transparency) */}
                    <div
                        className="lg:col-span-6 p-8 rounded-2xl glass-panel flex flex-col h-full border border-white/10 hover:border-tertiary/30 transition-all duration-300"
                        id="process"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl glass-panel-subtle flex items-center justify-center text-tertiary border border-tertiary/20">
                                <span className="material-symbols-outlined text-2xl">account_tree</span>
                            </div>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                                How We Work
                            </h3>
                        </div>
                        <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10 my-auto">
                            {workflowSteps.map((step) => (
                                <div key={step.step} className="relative">
                                    <span className={`absolute -left-6 top-1.5 w-4 h-4 rounded-full flex items-center justify-center ${step.dotBg}`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-background" />
                                    </span>
                                    <span className={`font-label-sm text-label-sm uppercase font-bold tracking-wider ${step.textColor}`}>
                                        {step.step}
                                    </span>
                                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                                        {step.title}
                                    </h4>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from 'react';

const pillars = [
    {
        icon: 'neurology',
        title: 'AI Engineering & LLM Ops',
        description:
            'Build intelligent systems using LLMs, fine-tuned RAG pipelines, vector semantic indexing, and customized embeddings tailored directly to your company data context.',
        colorClass: 'text-primary group-hover:bg-primary group-hover:text-on-primary',
        tags: ['RAG Pipelines', 'Vector Indexing', 'Fine-tuning'],
    },
    {
        icon: 'developer_board',
        title: 'Full-Stack Software Architecture',
        description:
            'End-to-end web applications, modern reactive frontends, resilient distributed microservices, and scalable cloud SaaS products built with rock-solid reliability.',
        colorClass: 'text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary',
        tags: ['React / Next.js', 'High-Scale APIs', 'Cloud Native'],
    },
    {
        icon: 'alt_route',
        title: 'Intelligent Automation',
        description:
            'Practical automation workflows that interconnect business platforms, extract structured context from complex data feeds, and eliminate costly manual operational bottlenecks.',
        colorClass: 'text-secondary group-hover:bg-secondary group-hover:text-on-secondary',
        tags: ['Agent Workflows', 'ETL Synthesis', 'Process Automation'],
    }
];

export default function Services() {
    return (
        <section className="w-full py-24 bg-surface-container-lowest/40 relative overflow-hidden" id="services">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header (Slides in from Left) */}
                <div
                    className="max-w-3xl mb-14"
                >
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-2">
                        SERVICES
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3 tracking-tight">
                        Three core service pillars for business growth.
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Mexacrio Technologies combines AI engineering, software development, and automation so teams can scale with clarity and speed.
                    </p>
                </div>

                {/* 3 Pillars Grid with Glass UI & Left/Right Entrance */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="rounded-2xl glass-panel p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300 shadow-xl group border border-white/10 hover:border-primary/40 hover:-translate-y-1.5"
                        >
                            <div>
                                <div
                                    className={`w-14 h-14 rounded-xl glass-panel-subtle flex items-center justify-center mb-6 transition-all duration-300 border border-white/10 ${pillar.colorClass}`}
                                >
                                    <span className="material-symbols-outlined text-3xl">
                                        {pillar.icon}
                                    </span>
                                </div>
                                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 font-semibold">
                                    {pillar.title}
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>

                            <div className="pt-4 flex flex-wrap gap-2">
                                {pillar.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full glass-panel-subtle text-outline font-label-sm text-label-sm border border-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

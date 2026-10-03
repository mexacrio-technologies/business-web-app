import React from 'react';

const reasons = [
    {
        num: '01',
        icon: 'speed',
        title: 'Responsive Engagement',
        description:
            'Direct founder access, rapid technical scoping, and proactive communication cadence that keeps engineering velocity steady and predictable.',
    },
    {
        num: '02',
        icon: 'shield',
        title: 'Tailored Architecture Model',
        description:
            'AI and software solutions shaped to your exact enterprise security postures, internal VPC infrastructure, and preferred operating rhythm.',
    },
    {
        num: '03',
        icon: 'precision_manufacturing',
        title: 'Practical Execution',
        description:
            'Zero vaporware or empty hype. Grounded codebases, deterministic RAG retrieval, and accountable ownership built strictly around real-world metrics.',
    },
    {
        num: '04',
        icon: 'handshake',
        title: 'Partnership Mindset',
        description:
            'A collaborative, long-term engineering commitment with complete code repository transparency and aligned technical milestones.',
    }
];

export default function WhyMexacrio() {
    return (
        <section className="w-full py-24 bg-transparent relative overflow-hidden" id="why-mexacrio">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div
                    className="max-w-3xl mb-14"
                >
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-2">
                        WHY MEXACRIO
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3 tracking-tight">
                        Dependable by design, practical in execution.
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        A disciplined engineering approach that helps organizations move from requirement to production deployment with clarity and confidence.
                    </p>
                </div>

                {/* 4-Card Bento Grid with Left/Right Entrance & Glassmorphic Transparency */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reasons.map((item) => (
                        <div
                            key={item.num}
                            className="p-8 rounded-2xl glass-panel flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300 border border-white/10 hover:border-primary/40 group hover:-translate-y-1 shadow-lg"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-label-md text-label-md text-primary font-bold px-3 py-1 rounded-full glass-panel-subtle border border-primary/20">
                                    {item.num}
                                </span>
                                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-2xl">
                                    {item.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">
                                    {item.title}
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

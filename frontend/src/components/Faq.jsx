import React, { useState } from 'react';


const faqs = [
    {
        question: 'What services can we engage Mexacrio Technologies for?',
        answer:
            'We specialize in custom AI engineering, enterprise RAG workspaces, proprietary data embeddings, automated multi-step agent workflows, full-stack Next.js/React web platforms, and scalable MVP development for growth companies.',
    },
    {
        question: 'How do you handle data privacy and proprietary enterprise documents?',
        answer:
            'Security is paramount. We build on private cloud VPCs with air-gapped retrieval layers, zero data retention on foundation model APIs, and strict role-based access control (RBAC). Your proprietary company documents are never used for public model training.',
    },
    {
        question: 'How flexible are your engagement and development models?',
        answer:
            'We adapt to your needs: from focused architectural consulting sprints and rapid 4-week prototype deliveries to long-term retained AI engineering teams that function as an extension of your in-house core developers.',
    },
    {
        question: 'What does collaboration look like once we begin?',
        answer:
            'You get direct access to key engineers via dedicated Slack or Discord channels, weekly demo syncs, full transparent ownership of GitHub code repositories, and continuous automated staging environments.',
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-24 bg-surface-container-lowest/30 relative overflow-hidden" id="faq">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-14">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-2">
                        FAQ
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3 tracking-tight font-bold">
                        Answers before you start the conversation
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                        Practical details on how Mexacrio Technologies structures AI engineering, scoping, and deployment.
                    </p>
                </div>

                {/* Accordion Items with Left/Right Entrance & Glassmorphic Transparency */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div onClick={() => toggleFaq(index)}
                                key={index}
                                className={`rounded-2xl glass-panel p-6 cursor-pointer select-none transition-all duration-300 border border-white/10 hover:border-primary/40 ${isOpen ? 'bg-white/[0.07] border-primary/40 shadow-lg shadow-primary/5' : 'hover:bg-white/[0.04]'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="font-headline-sm text-headline-sm text-on-surface text-base font-medium">
                                        {faq.question}
                                    </h3>
                                    <span
                                        className={`material-symbols-outlined text-outline transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''
                                            }`}
                                    >
                                        expand_more
                                    </span>
                                </div>
                                
                                    {isOpen && (
                                        <div>
                                            <div className="mt-4 pt-3 border-t border-white/10 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    )}
                
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

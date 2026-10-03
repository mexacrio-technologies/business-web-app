import React from 'react';
import Gautam from "../assets/gautam.jpeg"
import Gaurav from "../assets/gaurav.jpeg"
import Sumit from "../assets/sumit.jpeg"
import Business from "../assets/managersbusiness.jpg"
const teamMembers = [
    {
        name: 'Gautam Sagar',
        role: 'Founder & CEO',
        roleColor: 'text-primary border-primary/30',
        image: Gautam,
        bio: 'Leads product vision, AI engineering, technology strategy, and full-stack development across all Mexacrio Technologies deployments. Deep focus on production-grade RAG and reliable automation systems.',
        socials: [
            { type: 'in', label: 'LinkedIn', href: '#' },
            { type: 'icon', icon: 'code', label: 'GitHub', href: '#' }
        ],
    },
    {
        name: 'Gaurav Gautam',
        role: 'Co-Founder & CTO',
        roleColor: 'text-tertiary border-tertiary/30',
        image: Gaurav,
        bio: 'Architects high-concurrency vector infrastructure, low-latency microservices, and distributed cloud computing environments to guarantee mission-critical reliability at enterprise scale.',
        socials: [
            { type: 'in', label: 'LinkedIn', href: '#' },
            { type: 'icon', icon: 'code', label: 'GitHub', href: '#' }
        ],
    },
    {
        name: 'Sumit Mathur',
        role: 'Co-Founder & COO',
        roleColor: 'text-secondary border-secondary/30',
        image: Sumit,
        bio: 'Oversees sprint operations, strategic enterprise client engagements, legal compliance, and reliable operational cadence to ensure projects transition seamlessly from concept to delivery.',
        socials: [
            { type: 'in', label: 'LinkedIn', href: '#' },
            { type: 'icon', icon: 'mail', label: 'Contact', href: 'mailto:mexacrio.contact@gmail.com' }
        ],
    }
];

export default function Leadership() {
    return (
        <section className="w-full py-24 bg-transparent relative overflow-hidden" id="leadership">
            <div className="max-w-8xl mx-auto px-6 relative z-10">
                <div className="relative w-full overflow-hidden rounded-2xl">

                    {/* Background Image */}
                    <img
                        src={Business}
                        alt=""
                        className="absolute inset-0 w-full h-[500px] object-cover opacity-15 opacity-reduced saturate-150  contrast-125 brightness-75"
                    />


                    <div className="max-w-3xl mb-14 lg:m-14 m-4">
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-2">
                            LEADERSHIP
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3 tracking-tight font-bold">
                            The Leadership Team Behind Mexacrio Technologies
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Our founders and executive leadership bring hands-on expertise in artificial intelligence, full-stack systems, and business execution to help organizations scale with confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-3 gap-3">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="rounded-2xl glass-panel p-4 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300 shadow-xl group border border-white/10 hover:border-primary/40 hover:-translate-y-1.5"
                            >
                                <div>
                                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-5 glass-panel-subtle relative border border-white/5">
                                        <img
                                            alt={`${member.name} - ${member.role}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            src={member.image}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                                        {member.name}
                                    </h3>
                                    <span className={`inline-block font-label-sm text-label-sm px-2.5 py-0.5 rounded-full glass-panel-subtle mt-1.5 mb-3 font-semibold uppercase tracking-wider border ${member.roleColor}`}>
                                        {member.role}
                                    </span>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>

                                <div className="pt-5 flex items-center gap-3">
                                    {member.socials.map((soc, idx) => (
                                        <a
                                            key={idx}
                                            className="w-9 h-9 rounded-lg glass-panel-subtle flex items-center justify-center text-outline hover:text-primary hover:border-primary/40 transition-all border border-white/5 hover:scale-110 active:scale-95"
                                            href={soc.href}
                                            title={soc.label}
                                        >
                                            {soc.type === 'in' ? (
                                                <span className="font-label-sm text-label-sm font-bold">in</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-base">{soc.icon}</span>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

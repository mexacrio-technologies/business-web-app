import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        serviceInterest: '',
        goalsAndScope: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [serviceOpen, setServiceOpen] = useState(false);

    const serviceOptions = [
        { value: "rag", label: "AI Assistant & Private RAG" },
        { value: "fullstack", label: "Full-Stack Web App / SaaS" },
        { value: "automation", label: "Intelligent Automation Pipeline" },
        { value: "custom", label: "Custom AI & Model Integration" },
        { value: "consulting", label: "High-Level Engineering Advisory" },
    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrorMsg('');
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        if (!formData.serviceInterest) {
            setErrorMsg('Please select a service area.');
            setLoading(false);
            return;
        }

        try {
            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
                || (import.meta.env.PROD ? 'https://business-web-app-kmcp.onrender.com' : '');
            const response = await fetch(`${apiBaseUrl}/api/v1/consultations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const resData = await response.json().catch(() => null);
                throw new Error(resData?.message || 'Server error occurred');
            }

            setSubmitted(true);
        } catch (err) {
            setErrorMsg(err instanceof Error ? err.message : 'Unable to submit your request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full py-24 bg-transparent relative overflow-hidden" id="contact">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-tertiary/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Value Prop & Contact Details (Slides in from LEFT with Transparency) */}
                    <div className="lg:col-span-5 space-y-6"
                    >
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block font-semibold">
                            CONSULTATION
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                            Let’s schedule the right consultation for your business.
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Share your AI, software, or automation goals and our team will recommend a practical roadmap tailored directly to your scale.
                        </p>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">task_alt</span>
                                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                                    Accelerate your AI roadmap with role-ready engineering.
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">task_alt</span>
                                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                                    Stabilize workflows through reliable automation systems.
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">task_alt</span>
                                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                                    Get focused architectural consultation for your software needs.
                                </span>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl glass-panel space-y-3 mt-6 border border-white/10">
                            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block font-semibold">
                                Direct Contact
                            </span>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-tertiary">mail</span>
                                <a
                                    className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors font-medium"
                                    href="mailto:mexacrio.contact@gmail.com"
                                >
                                    mexacrio.contact@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">public</span>
                                <span className="font-body-sm text-body-sm text-on-surface-variant">
                                    Founded in India • Global Operations
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Inquiry Form Card (Slides in from RIGHT with Transparency & Glass UI) */}
                    <div className="lg:col-span-7">
                        <div className="p-8 md:p-10 rounded-3xl glass-panel shadow-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">
                                Consultation Request Form
                            </h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                                Tell us about your requirement and we’ll schedule a technical consultation with the right architect.
                            </p>

                            {submitted ? (
                                <div className="p-8 rounded-2xl glass-panel text-tertiary font-body-sm text-center border border-tertiary/30 animate-fadeIn">
                                    <span className="material-symbols-outlined text-4xl block mb-2 text-primary">
                                        check_circle
                                    </span>
                                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">
                                        Request Received
                                    </h4>
                                    <p className="text-on-surface-variant max-w-md mx-auto leading-relaxed">
                                        Consultation request sent successfully. We will follow up with you within one business day.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({
                                                fullName: '',
                                                email: '',
                                                company: '',
                                                serviceInterest: '',
                                                goalsAndScope: ''
                                            });
                                        }}
                                        className="mt-6 px-6 py-2.5 text-xs font-semibold rounded-full glass-panel-subtle text-on-surface hover:bg-white/10 transition-colors border border-white/10 hover:scale-105 active:scale-95 cursor-pointer"
                                    >
                                        Submit Another Request
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleFormSubmit}>
                                    {errorMsg && (
                                        <div role="alert" className="p-3.5 rounded-xl bg-error/20 border border-error/30 text-on-surface text-xs">
                                            {errorMsg}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                                                Full Name
                                            </label>
                                            <input
                                                className="w-full px-4 py-3 rounded-xl bg-black/90 opacity-60  font-body-sm text-body-sm placeholder-outline focus:outline-none focus:ring-2  transition-all border-2 border-white/60 focus:border-primary/60"
                                                placeholder="Gautam Sagar"
                                                required
                                                maxLength={120}
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                                                Business Email
                                            </label>
                                            <input
                                                className="w-full px-4 py-3 rounded-xl bg-black/90 opacity-60  font-body-sm text-body-sm placeholder-outline focus:outline-none focus:ring-2  transition-all border-2 border-white/60 focus:border-primary/60"
                                                placeholder="name@company.com"
                                                required
                                                maxLength={254}
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                                                Company / Organization
                                            </label>
                                            <input
                                                className="w-full px-4 py-3 rounded-xl bg-black/90 opacity-60  font-body-sm text-body-sm placeholder-outline focus:outline-none focus:ring-2  transition-all border-2 border-white/60 focus:border-primary/60"
                                                placeholder="Acme Technologies"
                                                required
                                                maxLength={160}
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="space-y-1.5 relative">

                                            <label className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                                                Service Interest
                                            </label>

                                            {/* Dropdown */}
                                            <div className="relative">

                                                {/* Selected Button */}
                                                <button
                                                    type="button"
                                                    onClick={() => setServiceOpen((prev) => !prev)}
                                                    aria-haspopup="listbox"
                                                    aria-expanded={serviceOpen}
                                                    className={`w-full px-4 py-3 rounded-xl bg-black/90 text-left font-body-sm border-2 border-white/60 flex items-center justify-between gap-3 transition-all duration-300 ease-out hover:border-primary/50 focus:outline-none
                                                        ${serviceOpen
                                                            ? "border-primary/70 ring-2 ring-primary/20"
                                                            : ""
                                                        }
            `}
                                                >

                                                    <span
                                                        className={
                                                            formData.serviceInterest
                                                                ? "text-white text-sm"
                                                                : "text-white/50 text-sm"
                                                        }
                                                    >
                                                        {
                                                            formData.serviceInterest ? serviceOptions.find((option) => option.value === formData.serviceInterest)?.label : "Select an area"
                                                        }
                                                    </span>

                                                    {/* Arrow */}
                                                    <span
                                                        className={`material-symbols-outlined text-white/60 text-sm transition-transform duration-300 
                                                            ${serviceOpen ? "rotate-180 text-primary" : "rotate-0"
                                                            }
                `}
                                                    >
                                                        expand_more
                                                    </span>

                                                </button>


                                                {/* Dropdown Options */}
                                                <div
                                                    className={` absolute left-0 right-0 top-full mt-2 z-50 rounded-xl overflow-hidden bg-[#0d0d12]/95 backdrop-blur-xl border border-white/10 transition-all duration-300 ease-out
                                                    ${serviceOpen
                                                            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                                                            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                                                        }
            `}
                                                >

                                                    <div className="p-1.5" role="listbox" aria-label="Service interest">

                                                        {serviceOptions.map((option) => {

                                                            const isSelected =
                                                                formData.serviceInterest === option.value;

                                                            return (
                                                                <button
                                                                    key={option.value}
                                                                    type="button"
                                                                    role="option"
                                                                    aria-selected={isSelected}
                                                                    onClick={() => {
                                                                        handleChange({
                                                                            target: {
                                                                                name: "serviceInterest",
                                                                                value: option.value,
                                                                            },
                                                                        });

                                                                        setServiceOpen(false);
                                                                    }}
                                                                    className={`w-full px-4 py-3 rounded-lg flex items-center justify-between text-left text-[12px] transition-all duration-200
                                                                    ${isSelected
                                                                            ? "bg-primary/15 text-primary"
                                                                            : "text-white/80 hover:bg-white/10 hover:text-white"
                                                                        }
                                                                    `}
                                                                >

                                                                    <span>
                                                                        {option.label}
                                                                    </span>

                                                                    {isSelected && (
                                                                        <span className="material-symbols-outlined text-primary text-lg">
                                                                            check
                                                                        </span>
                                                                    )}

                                                                </button>
                                                            );
                                                        })}

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                                            Consultation Goals &amp; Scope
                                        </label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-xl bg-black/90 opacity-60  font-body-sm text-body-sm placeholder-outline focus:outline-none focus:ring-2  transition-all border-2 border-white/60 focus:border-primary/60"
                                            placeholder="Briefly describe what you want to achieve through this engineering consultation..."
                                            required
                                            maxLength={5000}
                                            rows={4}
                                            name="goalsAndScope"
                                            value={formData.goalsAndScope}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Button with exact requested text 'Contact Us' */}
                                    <button
                                        disabled={loading}
                                        className="w-full py-4 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-fixed-dim transition-all shadow-lg shadow-primary/25 hover:shadow-primary/45 mt-2 disabled:opacity-60 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                                        type="submit"
                                    >
                                        {loading ? 'Transmitting Scope...' : 'Contact Us'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

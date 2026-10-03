import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyMexacrio from './components/WhyMexacrio';
import Capabilities from './components/Capabilities';
import Flagship from './components/Flagship';
import Leadership from './components/Leadership';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    useEffect(() => {
        if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const sections = document.querySelectorAll('main section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        sections.forEach((section) => {
            section.classList.add('scroll-reveal');
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative bg-[#0c0d12] text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
            {/* Navigation Header with Services, Leadership, FAQ, Contact */}
            <Navbar />

            <main className="w-full pt-16 flex-1 relative z-10">
                <div className="flex flex-col w-full">
                    <Hero />
                    <Services />
                    <WhyMexacrio />
                    <Capabilities />
                    <Flagship />
                    <Leadership />
                    <Faq />
                    <Contact />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

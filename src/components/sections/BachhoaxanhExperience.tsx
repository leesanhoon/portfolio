import React from "react";

export const BachhoaxanhExperience = () => {
    return (
        <div className="relative mb-8 group">
            {/* Marker */}
            <div className="absolute -left-[27px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-slate-700 flex items-center justify-center group-hover:border-cyan-500 transition-colors z-10">
                <div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-white rounded-full transition-colors"></div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <span className="text-xs font-black text-slate-500/60 tracking-[0.3em] bg-slate-500/5 px-4 py-2 rounded-xl mb-4 md:mb-0 group-hover:text-cyan-400/60 group-hover:bg-cyan-500/5 transition-all">
                    05/2020 - 09/2025
                </span>
            </div>

            <div className="bg-[#1E293B]/50 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/5 shadow-2xl group-hover:border-cyan-500/30 transition-all duration-500">
                <div className="mb-10 text-left">
                    <h3 className="text-xl md:text-3xl font-black text-[#42A5F5] tracking-tight mb-2 uppercase">
                        Bachhoaxanh (E-Commerce)
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm font-bold mb-6">
                        Software Engineer / .Net Developer
                    </p>
                </div>

                <div className="space-y-12 text-left">
                    <div className="grid grid-cols-1 gap-y-12">
                        <section>
                            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                <span className="text-xl">🛠️</span> Key
                                Responsibilities & Achievements
                            </h4>
                            <ul className="space-y-8">
                                <li className="space-y-4">
                                    <span className="block text-sm font-black text-slate-200 uppercase tracking-wide border-l-2 border-cyan-500 pl-3">
                                        Website System Migration and
                                        Optimization:
                                    </span>
                                    <ul className="space-y-3 pl-4">
                                        {[
                                            "Led the seamless migration of the Bachhoaxanh website from .NET Framework to .NET Core, ensuring robust, stable operations for a high-traffic e-commerce platform.",
                                            "Optimized key business modules; reduced shopping cart response time from over 2 seconds to under 200ms, and ensured all other site requests executed in under 200ms, significantly improving system performance and user experience.",
                                        ].map((bullet, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 text-xs md:text-sm font-bold text-slate-400"
                                            >
                                                <span className="text-cyan-500/50">
                                                    •
                                                </span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <li className="space-y-4">
                                    <span className="block text-sm font-black text-slate-200 uppercase tracking-wide border-l-2 border-cyan-500 pl-3">
                                        System Architecture Design and Code
                                        Refactoring:
                                    </span>
                                    <ul className="space-y-3 pl-4">
                                        {[
                                            "Redesigned and restructured legacy code into modern, clean, multi-layered service architecture.",
                                            "Separated business logic into distinct service layers, greatly enhancing code manageability, scalability, and maintainability for future feature development.",
                                            "Refactored and improved existing codebase to comply with best coding practices while meticulously maintaining all core business rules and business flows.",
                                        ].map((bullet, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 text-xs md:text-sm font-bold text-slate-400"
                                            >
                                                <span className="text-cyan-500/50">
                                                    •
                                                </span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <li className="space-y-4">
                                    <span className="block text-sm font-black text-slate-200 uppercase tracking-wide border-l-2 border-cyan-500 pl-3">
                                        Mobile Application Development:
                                    </span>
                                    <ul className="space-y-3 pl-4">
                                        {[
                                            "Concurrently took on the additional responsibility of developing and maintaining the Bachhoaxanh mobile app using React Native for approximately 3 years.",
                                            "Delivered new features, optimized performance, and ensured cross-platform compatibility, expanding the reach and engagement of Bachhoaxanh on mobile devices.",
                                        ].map((bullet, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 text-xs md:text-sm font-bold text-slate-400"
                                            >
                                                <span className="text-cyan-500/50">
                                                    •
                                                </span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <li className="space-y-4">
                                    <span className="block text-sm font-black text-slate-200 uppercase tracking-wide border-l-2 border-cyan-500 pl-3">
                                        Collaboration & Continuous Improvement:
                                    </span>
                                    <ul className="space-y-3 pl-4">
                                        {[
                                            "Worked closely with cross-functional product, UI/UX, and QA teams during all stages of the SDLC to ensure rapid, high-quality deliverables.",
                                            "Proactively identified bottlenecks and implemented innovative solutions for both backend and mobile platforms.",
                                            "Contributed in documentation, onboarding, and knowledge transfer initiatives for new team members.",
                                        ].map((bullet, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 text-xs md:text-sm font-bold text-slate-400"
                                            >
                                                <span className="text-cyan-500/50">
                                                    •
                                                </span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                <span className="text-xl">🏆</span> Key Results
                            </h4>
                            <div className="space-y-4">
                                {[
                                    "Achieved faster and more reliable shopping experiences, supporting millions of daily users.",
                                    "Ensured business operations continued flawlessly during and after major technology transitions.",
                                    "Bolstered platform scalability and streamlined future development cycles via a modular, maintainable architecture.",
                                    "Played a pivotal role in strengthening Bachhoaxanh’s mobile offering and digital transformation roadmap.",
                                ].map((text, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-3 items-start p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/10"
                                    >
                                        <span className="text-emerald-400 font-bold">
                                            ✓
                                        </span>
                                        <p className="text-xs md:text-sm font-bold text-slate-300">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

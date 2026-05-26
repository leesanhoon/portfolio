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

                    <div className="flex flex-wrap gap-4 mb-8 md:mb-10">
                        <a
                            href="https://apps.apple.com/vn/app/bách-hóa-xanh/id1207511445"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none px-6 py-2.5 bg-black rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-3 hover:bg-zinc-900 transition-all border border-white/10 shadow-xl"
                        >
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 384 512"
                                fill="currentColor"
                            >
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-22.1-82.6-21.4-41.4.6-79.5 24.1-100.8 61.1-42.9 74.4-11 183.8 30.6 243.9 20.4 29.4 45 61.9 76.8 60.7 30.4-1.2 41.9-19.6 78.4-19.6 36.4 0 47 19.6 78.4 18.9 32.4-.6 53.7-29.4 73.8-58.8 23.3-34 32.8-67 33.1-68.7-.7-.3-64.2-24.6-64.5-98.4zM233 104.9c15.8-19.1 26.5-45.6 23.6-72.2-22.9 1-50.7 15.3-67.1 34.5-14.7 17.1-27.5 44.4-23.9 70.3 25.5 2 51.6-13.5 67.4-32.6z" />
                            </svg>
                            App Store
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.bachhoaxanh&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none px-6 py-2.5 bg-white rounded-2xl text-sm font-bold text-slate-900 flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-xl"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="#00E676"
                                    d="M17.523 15.341l-3.327-3.341 3.327-3.341 4.159 2.408c.594.344.918.84.918 1.333s-.324.989-.918 1.333l-4.159 2.408z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="M14.196 12l-11.41-11.455c.162-.036.331-.045.503-.045.541 0 1.054.218 1.459.452l12.771 7.391-3.323 3.657z"
                                />
                                <path
                                    fill="#FFC400"
                                    d="M14.196 12l3.327 3.341-12.771 7.391c-.405.234-.918.452-1.459.452-.172 0-.341-.009-.503-.045l11.406-11.139z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M2.786 23.455c-.482-.369-.786-.989-.786-1.742v-19.426c0-.753.304-1.373.786-1.742l11.41 11.455-11.41 11.455z"
                                />
                            </svg>
                            Google Play
                        </a>
                    </div>
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

import React from "react";

export const HighlightProject = () => {
    return (
        <div className="mt-24">
            <div className="flex items-center gap-6 mb-16">
                <h2 className="text-4xl font-black text-rose-500 tracking-tighter uppercase flex items-center gap-4">
                    HIGHLIGHT PROJECT
                    <div className="w-12 h-1 bg-rose-500 rounded-full"></div>
                </h2>
            </div>

            <div className="relative group">
                <div className="bg-[#1E293B]/50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl group-hover:border-rose-500/30 transition-all duration-500 overflow-hidden relative">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl group-hover:bg-rose-500/10 transition-colors"></div>

                    <div className="relative z-10 text-left">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <div>
                                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
                                    Bachhoaxanh Website Project
                                </h3>
                                <div className="flex items-center gap-4">
                                    <span className="text-rose-500 text-sm font-black tracking-widest uppercase">
                                        E-Commerce Specialist
                                    </span>
                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                        09/2022 - 09/2025
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-12 font-medium max-w-4xl">
                            Bachhoaxanh is one of the leading e-commerce
                            platforms in Vietnam specializing in retailing food
                            and fast-moving consumer goods. The website handles
                            millions of visits and transactions daily, requiring
                            a highly stable, fast, and scalable technical
                            foundation.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-rose-500"></span>
                                    Role & Contributions
                                </h4>
                                <ul className="space-y-6">
                                    {[
                                        "Migrated the website architecture from the legacy .NET Framework to the modern .NET Core platform, leveraging the superior performance and scalability of .NET Core.",
                                        "Redesigned the software architecture into a multi-layered model by separating the system into distinct service layers, enhancing manageability, development flexibility, and maintainability.",
                                        "Optimized processing workflows, especially reducing the shopping cart response time from over 2 seconds to under 200ms, significantly improving user experience.",
                                        "Ensured that all other website requests are processed swiftly with a maximum response time under 200ms, contributing to the overall system performance boost.",
                                        "Preserved all existing business rules accurately, ensuring that all current business operations continue to run smoothly after refactoring and optimization.",
                                        "Improved the system's logic structure and rewrote code following clean coding standards, enhancing system stability, readability, and minimizing operational risks during maintenance and future upgrades.",
                                    ].map((text, i) => (
                                        <li
                                            key={i}
                                            className="flex gap-4 group/item"
                                        >
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500/50 group-hover/item:bg-rose-500 transition-colors shrink-0"></span>
                                            <span className="text-sm font-bold text-slate-400 leading-relaxed">
                                                {text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <div className="p-8 bg-rose-500/5 rounded-3xl border border-rose-500/10 backdrop-blur-sm relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <svg
                                            className="w-24 h-24 text-rose-500"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0 0 7,22H17A2,2 0 0 0 19,20V4C19,2.89 18.1,2 17,2M17,19H7V5H17V19Z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                        📱 Mobile Expansion
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed font-medium relative z-10">
                                        Additionally, during the migration from
                                        .NET Framework to .NET Core APIs, took
                                        on the role of developing the
                                        Bachhoaxanh mobile app using{" "}
                                        <span className="text-rose-400 font-bold underline decoration-rose-400/30 underline-offset-4">
                                            React Native
                                        </span>{" "}
                                        for approximately 3 years, contributing
                                        to the expansion of the platform's
                                        mobile presence and user engagement.
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {[
                                            ".NET Core",
                                            "RESTful APIs",
                                            "React Native",
                                        ].map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-black uppercase text-slate-500"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from "react";

export const AwardsSection = () => {
    return (
        <div className="mt-24">
            <div className="flex items-center gap-6 mb-16">
                <h2 className="text-4xl font-black text-amber-400 tracking-tighter uppercase flex items-center gap-4">
                    AWARDS & MILESTONES
                    <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
                </h2>
            </div>

            <div className="relative pl-8 md:pl-16">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-amber-500/30 rounded-full"></div>

                {/* Award 1 */}
                <div className="relative mb-16 group">
                    <div className="absolute -left-[35px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-amber-500 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)] z-10">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <span className="text-xs font-black text-amber-400/60 tracking-[0.3em] bg-amber-500/5 px-4 py-2 rounded-xl mb-4 md:mb-0">
                            02/2026
                        </span>
                    </div>

                    <div className="bg-[#1E293B]/50 rounded-3xl p-8 md:p-10 border border-white/5 group-hover:border-amber-500/30 transition-all duration-500">
                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
                            System Integration & API Migration
                        </h3>
                        <p className="text-amber-500 text-sm font-bold mb-6 uppercase tracking-widest">
                            Easybook.com
                        </p>

                        <div className="space-y-4">
                            <p className="text-slate-300 text-sm leading-relaxed font-medium">
                                Migration of the BRF booking platform from
                                legacy, heavy SOAP services to modern,
                                lightweight RESTful APIs. Actively refactored
                                complex backend logic.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10 backdrop-blur-sm">
                                    <p className="text-xs font-bold text-slate-400 leading-relaxed">
                                        Streamlined third-party integrations and
                                        minimized system overhead.
                                    </p>
                                </div>
                                <div className="p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10 backdrop-blur-sm">
                                    <p className="text-xs font-bold text-slate-400 leading-relaxed">
                                        Drastically improved overall API
                                        response times and connectivity with
                                        global partners.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Award 2 */}
                <div className="relative group">
                    <div className="absolute -left-[35px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-amber-500 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)] z-10">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <span className="text-xs font-black text-amber-400/60 tracking-[0.3em] bg-amber-500/5 px-4 py-2 rounded-xl mb-4 md:mb-0">
                            01/2022
                        </span>
                    </div>

                    <div className="bg-[#1E293B]/50 rounded-3xl p-8 md:p-10 border border-white/5 group-hover:border-amber-500/30 transition-all duration-500">
                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
                            .NET Framework to .NET Core Migration
                        </h3>
                        <p className="text-amber-500 text-sm font-bold mb-6 uppercase tracking-widest">
                            Bachhoaxanh.com
                        </p>

                        <div className="space-y-6">
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    "Successfully migrated the Bachhoaxanh website from .NET Framework to .NET Core, ensuring stable operation of the entire system.",
                                    "Optimized system performance: reduced shopping cart response time from over 2 seconds to under 200ms, significantly enhancing user experience.",
                                    "Maintained maximum response time for other website requests at no more than 200ms, enabling smooth and fast website performance.",
                                    "Redesigned the system architecture by separating the code into distinct service layers, making management, development, and maintenance easier and more scalable for the future.",
                                    "Refactored and reorganized the system's logic structure to ensure clean, maintainable code while preserving all existing business rules as per current requirements.",
                                    "Delivered overall performance improvements, strengthening the technical foundation for long-term development and contributing to increased revenue and customer satisfaction.",
                                ].map((bullet, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-3 text-sm font-bold text-slate-300"
                                    >
                                        <span className="text-amber-500 font-bold">
                                            ✓
                                        </span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

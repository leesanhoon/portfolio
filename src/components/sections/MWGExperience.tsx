import React from "react";

export const MWGExperience = () => {
    return (
        <div className="relative mb-16 lg:mb-20 group">
            {/* Marker */}
            <div className="absolute -left-[27px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-slate-700 flex items-center justify-center group-hover:border-cyan-500 transition-colors z-10">
                <div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-white rounded-full transition-colors"></div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <span className="text-xs font-black text-slate-500/60 tracking-[0.3em] bg-slate-500/5 px-4 py-2 rounded-xl mb-4 md:mb-0 group-hover:text-cyan-400/60 group-hover:bg-cyan-500/5 transition-all">
                    01/2024 - 09/2025
                </span>
            </div>

            <div className="bg-[#1E293B]/50 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/5 shadow-2xl group-hover:border-cyan-500/30 transition-all duration-500">
                <div className="mb-10 text-left">
                    <h3 className="text-xl md:text-3xl font-black text-[#42A5F5] tracking-tight mb-2 uppercase">
                        MWG Group E-Commerce Platform (MWG Shop)
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm font-bold mb-6">
                        Software Engineer / .Net Developer
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed max-w-4xl font-medium">
                        MWG Shop is a unified e-commerce platform serving all
                        major retail brands under MWG Group, including
                        Thegioididong, Dienmayxanh, Bachhoaxanh, Avakid, and
                        more. The platform is built to handle high volumes of
                        online traffic and transactions, supporting millions of
                        customers nationwide. Its advanced infrastructure is
                        designed for growth, flexibility, and rapid adaptation
                        to evolving business needs, helping MWG Group maintain
                        its position as one of Vietnam’s leading retail
                        conglomerates.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-12 text-left">
                    <div className="space-y-8">
                        <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                            <span className="text-xl">🚀</span> Key
                            Responsibilities & Achievements
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Designed and developed a scalable shopping cart API serving all MWG Group's e-commerce websites, including Thegioididong, Dienmayxanh, Bachhoaxanh, Avakid, and others.",
                                "Architected the cart service to meet complex purchasing requirements and ensure smooth user experiences across multiple platforms.",
                                "Ensured rapid response times, reliability, and flexibility of the API, enabling seamless integration and consistent functionality across MWG Group sites.",
                                "Collaborated across product and development teams to align on feature requirements and deliver high-quality API services supporting millions of users daily.",
                                "Contributed to building a modular and maintainable API architecture facilitating future expansions and enhancements.",
                            ].map((text, i) => (
                                <li
                                    key={i}
                                    className="flex gap-3 text-sm font-bold text-slate-400"
                                >
                                    <span className="text-cyan-500/50 text-lg leading-none">
                                        •
                                    </span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

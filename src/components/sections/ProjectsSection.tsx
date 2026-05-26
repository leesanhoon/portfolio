import React from "react";

export const ProjectsSection = () => {
    return (
        <div className="mt-24">
            <div className="flex items-center gap-6 mb-16 underline-offset-8 decoration-emerald-500/30">
                <h2 className="text-4xl font-black text-emerald-400 tracking-tighter uppercase flex items-center gap-4">
                    SIDE PROJECTS
                    <div className="w-12 h-1 bg-emerald-400 rounded-full"></div>
                </h2>
            </div>

            <div className="relative pl-8 md:pl-16">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500/30 rounded-full"></div>

                {/* Project Item */}
                <div className="relative group">
                    <div className="absolute -left-[35px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-[#1E293B] rounded-3xl p-8 md:p-10 border border-white/5 group-hover:border-emerald-500/30 transition-all duration-500">
                        <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">
                            E-Commerce Portfolio API
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                            Open-source boilerplate for scalable e-commerce
                            backends using ASP.NET Core, Redis, and PostgreSQL.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-slate-800 text-slate-500 text-[10px] font-black uppercase rounded-lg">
                                # .NET 8
                            </span>
                            <span className="px-3 py-1 bg-slate-800 text-slate-500 text-[10px] font-black uppercase rounded-lg">
                                # Docker
                            </span>
                            <span className="px-3 py-1 bg-slate-800 text-slate-500 text-[10px] font-black uppercase rounded-lg">
                                # Redis
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

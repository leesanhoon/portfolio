import React from "react";

const aiTools = [
    "GitHub Copilot",
    "Codex",
    "Claude Code",
    "Claude Sonnet",
    "NotebookLM",
    "ChatGPT",
    "AI-assisted Planning",
];

const aiUseCases = [
    {
        title: "AI-assisted Project Planning",
        desc: "Use Codex and Claude Code to turn requirements, bug reports, and migration goals into implementation plans, technical checklists, and smaller development tasks before coding.",
    },
    {
        title: "Easybook: BRF & Kymtrans Documentation",
        desc: "Use NotebookLM to read and understand BRF and Kymtrans project documents, summarize partner integration rules, and clarify booking, seat mapping, and API behavior before implementation.",
    },
    {
        title: "Easybook: Task Breakdown & Delivery",
        desc: "Apply Codex and Claude Code to break complex integration work into backend tasks, identify affected modules, draft implementation steps, and support faster bug fixing during delivery.",
    },
    {
        title: "Bachhoaxanh: Migration Planning",
        desc: "Use Claude Sonnet and AI coding assistants to read project context, analyze legacy .NET Framework modules, and prepare migration plans for moving functionality safely to .NET Core.",
    },
    {
        title: "Legacy Analysis & Refactoring",
        desc: "Leverage AI to understand business rules faster, map dependencies, compare old and new flows, and propose refactoring directions while keeping final technical decisions under developer control.",
    },
    {
        title: "Documentation & Knowledge Transfer",
        desc: "Create concise summaries, migration notes, investigation findings, and implementation guidance from technical documents and source-code context to improve team handover quality.",
    },
];

export const AIExperience = () => {
    return (
        <section className="mt-24">
            <div className="flex items-center gap-6 mb-12 lg:mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-violet-400 tracking-tighter uppercase flex items-center gap-4">
                    AI-DRIVEN ENGINEERING
                    <div className="w-12 h-1 bg-violet-400 rounded-full"></div>
                </h2>
            </div>

            <div className="bg-[#1E293B]/60 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-2xl hover:border-violet-400/30 transition-all duration-500 overflow-hidden relative text-left">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
                        <div className="max-w-2xl">
                            <p className="text-violet-300 text-sm font-black uppercase tracking-[0.25em] mb-4">
                                Documentation, Planning & Delivery
                            </p>
                            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                                Applying AI to understand documents, plan migrations, and ship safer changes
                            </h3>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                                Practical experience using NotebookLM, Codex, Claude Code, Claude Sonnet, ChatGPT, and GitHub Copilot in real projects to read technical documents, understand legacy systems, break down large work items, support bug fixing, and prepare safer migration plans.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 min-w-full lg:min-w-[280px]">
                            {aiTools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-3 py-2 bg-violet-500/10 border border-violet-400/20 text-violet-100 text-[11px] font-black uppercase rounded-xl text-center flex items-center justify-center"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {aiUseCases.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl bg-[#0B1120]/55 border border-white/5 p-6 hover:border-violet-400/20 transition-colors"
                            >
                                <h4 className="text-white text-sm font-black uppercase tracking-wide mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

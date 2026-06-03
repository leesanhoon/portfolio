import React from "react";

const projects = [
    {
        title: "PUBG Mortar Training Tool",
        type: "Personal project",
        href: "/pubg/train/mortar",
        summary:
            "A small interactive tool for practicing mortar distance estimation on a PUBG map.",
        result: "Built with Next.js and React, including coordinate display, random target generation, and distance checking.",
        tags: ["Next.js", "React", "TypeScript"],
    },
    {
        title: "E-commerce Cart API Modernization",
        type: "Work project",
        href: "https://www.bachhoaxanh.com",
        summary:
            "Migration and optimization work for selected Bachhoaxanh e-commerce backend flows.",
        result: "Improved cart API response time from more than 2 seconds to under 200ms while preserving business rules.",
        tags: [".NET Core", "C#", "REST APIs"],
    },
    {
        title: "SOAP to REST Travel Integrations",
        type: "Work project",
        href: "https://www.easybook.com",
        summary:
            "Modernization work for selected Easybook partner integrations and booking modules.",
        result: "Moved assigned integration flows toward REST APIs and improved maintainability for related backend logic.",
        tags: [".NET Core", "SQL Server", "Integration"],
    },
];

export const ProjectsSection = () => {
    return (
        <section className="mt-16">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-3">
                    Selected Projects
                    <div className="w-10 h-px bg-emerald-400/60"></div>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.href}
                        target={project.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                            project.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                        className="group bg-[#111827] rounded-xl p-5 border border-slate-800 hover:border-emerald-400/40 transition-colors flex flex-col min-h-[280px]"
                    >
                        <p className="text-emerald-300 text-xs font-medium mb-3">
                            {project.type}
                        </p>
                        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-6 mb-4">
                            {project.summary}
                        </p>
                        <p className="text-slate-300 text-sm leading-6 mb-5">
                            {project.result}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 bg-[#1B2535] text-slate-400 text-xs rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

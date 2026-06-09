
import {
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    Gamepad2,
    ServerCog,
} from "lucide-react";

const projects = [
    {
        title: "PUBG Mortar Training Tool",
        type: "Personal project",
        href: "/pubg/train/mortar",
        icon: Gamepad2,
        summary:
            "A small interactive tool for practicing mortar distance estimation on a PUBG map.",
        result: "Built with Astro and a React island, including coordinate display, random target generation, and distance checking.",
        tags: ["Astro", "React", "TypeScript"],
    },
    {
        title: "E-commerce Backend Case Study",
        type: "Work experience",
        href: "https://www.bachhoaxanh.com",
        icon: ServerCog,
        summary:
            "Migration and optimization work for selected Bachhoaxanh e-commerce backend flows.",
        result: "Improved cart API response time from more than 2 seconds to under 200ms while preserving business rules.",
        tags: [".NET Core", "C#", "REST APIs", "Performance"],
    },
    {
        title: "SOAP to REST Travel Integrations",
        type: "Work project",
        href: "https://www.easybook.com",
        icon: BriefcaseBusiness,
        summary:
            "Modernization work for selected Easybook partner integrations and booking modules.",
        result: "Moved assigned integration flows toward REST APIs and improved maintainability for related backend logic.",
        tags: [".NET Core", "SQL Server", "Integration"],
    },
];

export const ProjectsSection = () => {
    return (
        <section className="mt-10 md:mt-16">
            <div className="flex items-center gap-4 mb-5 md:mb-8">
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
                        className="group bg-[#111827] rounded-xl p-4 md:p-5 border border-slate-800 hover:border-emerald-400/40 transition-colors flex flex-col min-h-0 lg:min-h-[280px]"
                    >
                        <div className="mb-4 flex items-start justify-between gap-4">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                                <project.icon className="h-4 w-4" />
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-300 transition-colors" />
                        </div>
                        <p className="text-emerald-300 text-xs font-medium mb-3 flex items-center gap-1.5">
                            <Code2 className="h-3.5 w-3.5" />
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

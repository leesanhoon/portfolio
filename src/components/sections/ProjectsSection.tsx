
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
                <h2 className="text-2xl md:text-3xl font-bold text-[#111] flex items-center gap-3">
                    Selected Projects
                    <div className="w-10 h-3 bg-[#7FE07F] border-2 border-[#111]"></div>
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
                        className="group bg-white shadow-[4px_4px_0_#111] rounded-md p-4 md:p-5 border-2 border-[#111] hover:shadow-[7px_7px_0_#111] transition-colors flex flex-col min-h-0 lg:min-h-[280px]"
                    >
                        <div className="mb-4 flex items-start justify-between gap-4">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#7FE07F] border-2 border-[#111] text-[#111]">
                                <project.icon className="h-4 w-4" />
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-[#555] group-hover:underline transition-colors" />
                        </div>
                        <p className="text-[#111] text-xs font-medium mb-3 flex items-center gap-1.5">
                            <Code2 className="h-3.5 w-3.5" />
                            {project.type}
                        </p>
                        <h3 className="text-lg font-bold text-[#111] mb-3 group-hover:underline transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-[#333] text-sm leading-6 mb-4">
                            {project.summary}
                        </p>
                        <p className="text-[#111] text-sm leading-6 mb-5">
                            {project.result}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 bg-[#FFDC58] border-2 border-[#111] text-[#111] font-bold text-xs rounded-md"
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

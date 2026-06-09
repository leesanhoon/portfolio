
import { CollapsibleSection } from "../ui/CollapsibleSection";

const skillGroups = [
    {
        title: "Backend",
        skills: [".NET", "C#", "ASP.NET Core Web API", "REST APIs"],
    },
    {
        title: "Database",
        skills: ["SQL Server", "Stored Procedures", "Dapper", "EF Core"],
    },
    {
        title: "Frontend / Mobile",
        skills: ["React", "Next.js", "React Native", "TailwindCSS"],
    },
    {
        title: "Tools",
        skills: ["Git", "Docker", "CI/CD", "AI coding assistants"],
    },
];

const focusAreas = [
    "Backend API development and maintenance",
    "Legacy .NET migration to .NET Core",
    "SQL query and API performance improvement",
    "Documentation and task breakdown with AI tools",
];

const favorites = [
    { label: "PUBG", href: "/pubg/train/mortar", external: false },
    { label: "Traveling", href: "/", external: false },
    { label: "Swimming", href: "/", external: false },
];

export const SidebarInfo = () => {
    return (
        <div className="space-y-4 lg:space-y-8 px-1 mt-2 text-left">
            <section>
                <h3 className="text-base font-semibold text-white mb-3">
                    About
                </h3>
                <p className="text-slate-400 text-sm leading-7">
                    .NET developer with 6 years of experience building and
                    maintaining backend services for e-commerce and travel
                    booking systems. I have worked on .NET Core migration, REST
                    APIs, SQL Server, and React Native mobile features.
                </p>
            </section>

            <CollapsibleSection title="Focus Areas">
                <ul className="space-y-2.5">
                    {focusAreas.map((item) => (
                        <li
                            key={item}
                            className="text-sm text-slate-400 leading-relaxed border-l border-slate-700 pl-3"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Skills">
                <div className="space-y-4">
                    {skillGroups.map((group) => (
                        <div key={group.title}>
                            <p className="text-slate-500 text-xs font-medium mb-2">
                                {group.title}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 bg-[#1B2535] border border-slate-800 text-xs text-slate-300 rounded-md"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Education">
                <div className="rounded-xl border border-slate-800 bg-[#111827] p-4">
                    <p className="text-slate-200 text-sm font-medium leading-6">
                        Bachelor of Software Engineering
                    </p>
                    <p className="mt-1 text-cyan-300 text-xs font-medium">
                        CMU-based Program
                    </p>
                    <p className="mt-3 text-slate-500 text-sm">
                        Van Lang University
                    </p>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Favorites">
                <div className="flex flex-wrap gap-2">
                    {favorites.map((favorite) => {
                        const chipClassName =
                            "inline-block px-2.5 py-1 bg-[#1B2535] border border-slate-800 text-xs text-slate-400 rounded-md transition-colors hover:text-cyan-300";

                        if (favorite.external) {
                            return (
                                <a
                                    key={favorite.label}
                                    href={favorite.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={chipClassName}
                                >
                                    {favorite.label}
                                </a>
                            );
                        }

                        return (
                            <a
                                key={favorite.label}
                                href={favorite.href}
                                className={chipClassName}
                            >
                                {favorite.label}
                            </a>
                        );
                    })}
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Contact" className="pb-4 lg:pb-10">
                <div className="space-y-3 text-sm">
                    <p className="text-slate-400">
                        <span className="text-slate-500">Phone: </span>
                        +84 966622483
                    </p>
                    <p className="text-cyan-300 break-all">
                        <span className="text-slate-500">Email: </span>
                        nguyentanninh123@gmail.com
                    </p>
                    <p className="text-slate-400">
                        <span className="text-slate-500">Location: </span>
                        Ho Chi Minh City
                    </p>
                </div>
            </CollapsibleSection>
        </div>
    );
};

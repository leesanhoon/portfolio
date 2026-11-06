
import { CollapsibleSection } from "../ui/CollapsibleSection";

const skillGroups = [
    {
        title: "Backend",
        skills: [".NET", "C#", "ASP.NET Core Web API", "ABP Framework", "Microservices", "REST APIs"],
    },
    {
        title: "Database",
        skills: ["SQL Server", "Stored Procedures", "Dapper", "EF Core"],
    },
    {
        title: "Frontend / Mobile",
        skills: ["Angular", "React", "Next.js", "React Native", "TailwindCSS"],
    },
    {
        title: "Tools",
        skills: ["Git", "Docker", "Azure DevOps CI/CD", "Microsoft Entra ID", "AI coding agents"],
    },
];

const focusAreas = [
    "Enterprise CRM: role-based access, approvals, reporting",
    "Backend API development and maintenance",
    "Legacy .NET migration to .NET Core",
    "SQL query and API performance improvement",
    "Orchestrating AI coding agents with human review gates",
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
                <h3 className="text-base font-bold text-white mb-3">
                    About
                </h3>
                <p className="text-neutral-300 text-sm leading-7">
                    Senior .NET developer with 6+ years building backend
                    services for banking, e-commerce and travel booking
                    systems. I have worked on .NET Core migration, REST APIs,
                    SQL Server, enterprise CRM access control and AI-assisted
                    delivery with coding agents.
                </p>
            </section>

            <CollapsibleSection title="Focus Areas">
                <ul className="space-y-2.5">
                    {focusAreas.map((item) => (
                        <li
                            key={item}
                            className="text-sm text-neutral-300 leading-relaxed border-l-4 border-[#FFDC58] pl-3"
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
                            <p className="text-[#FFDC58] text-xs font-medium mb-2">
                                {group.title}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 bg-[#FFDC58] border-2 border-[#111] text-xs font-bold text-[#111] rounded-md"
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
                <div className="rounded-md border-2 border-white bg-[#1c1c1c] p-4">
                    <p className="text-white text-sm font-medium leading-6">
                        Bachelor of Software Engineering
                    </p>
                    <p className="mt-1 text-[#FFDC58] text-xs font-medium">
                        CMU-based Program
                    </p>
                    <p className="mt-3 text-[#FFDC58] text-sm">
                        Van Lang University
                    </p>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Favorites">
                <div className="flex flex-wrap gap-2">
                    {favorites.map((favorite) => {
                        const chipClassName =
                            "inline-block px-2.5 py-1 bg-[#C4A1FF] border-2 border-[#111] text-xs font-bold text-[#111] rounded-md transition-transform hover:-translate-y-0.5";

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
                    <p className="text-neutral-300">
                        <span className="text-[#FFDC58]">Phone: </span>
                        +84 966622483
                    </p>
                    <p className="text-[#FFDC58] break-all">
                        <span className="text-[#FFDC58]">Email: </span>
                        nguyentanninh123@gmail.com
                    </p>
                    <p className="text-neutral-300">
                        <span className="text-[#FFDC58]">Location: </span>
                        Ho Chi Minh City
                    </p>
                </div>
            </CollapsibleSection>
        </div>
    );
};

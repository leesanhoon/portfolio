import React from "react";
import Link from "next/link";

export const SidebarInfo = () => {
    const favorites = [
        { label: "PUBG", href: "/pubg/train/mortar", external: false },
        {
            label: "Traveling",
            href: "/",
            external: false,
        },
        {
            label: "Swimming",
            href: "/",
            external: false,
        },
    ];

    return (
        <div className="space-y-10 px-2 mt-4 text-left">
            {/* About Me */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    <strong className="text-white">.NET Developer</strong> with{" "}
                    <strong className="text-cyan-400">
                        6 years of experience
                    </strong>{" "}
                    specializing in{" "}
                    <strong className="text-white">backend architecture</strong>{" "}
                    and{" "}
                    <strong className="text-white">
                        enterprise application development
                    </strong>
                    . Proven capability in executing{" "}
                    <strong className="text-white">legacy migrations</strong>{" "}
                    from .NET Framework to{" "}
                    <strong className="text-cyan-400">.NET Core</strong> and
                    optimizing{" "}
                    <strong className="text-white">API performance</strong>.
                    Experienced in designing{" "}
                    <strong className="text-white">
                        scalable RESTful services
                    </strong>{" "}
                    (Cart, Order, Promotion). Focused on writing{" "}
                    <strong className="text-cyan-400">
                        clean, maintainable code
                    </strong>{" "}
                    and collaborating effectively with cross-functional teams to
                    deliver stable products
                </p>
            </section>

            {/* Skills */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {[
                        ".NET / .NET Core",
                        "C#",
                        "ASP.NET Core Web API",
                        "Entity Framework Core / Dapper",
                        "SQL Server",
                        "Microservices Architecture",
                        "RESTful APIs",
                        "Docker / CI/CD",
                        "Git",
                        "ReactJS / Next.js / Nest.js",
                        "HTML / CSS / TailwindCSS",
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1.5 bg-[#1E293B] border border-white/5 text-xs text-slate-300 font-bold rounded-lg"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">
                    Key Highlights
                </h3>
                <ul className="space-y-4">
                    {[
                        {
                            icon: "🚀",
                            title: "High-scale Cart/Order APIs (MWG)",
                        },
                        { icon: "🌍", title: "Multi-national Travel Systems" },
                        { icon: "🔄", title: "SOAP to REST Modernization" },
                        { icon: "⚡", title: "Query & API Performance Tuning" },
                    ].map((item, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-3 text-slate-300 text-sm font-bold"
                        >
                            <span className="text-lg opacity-80">
                                {item.icon}
                            </span>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Education */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <p className="text-slate-200 text-sm font-bold leading-snug">
                            Software Engineering
                        </p>
                        <p className="text-slate-400 text-[13px] font-medium leading-relaxed">
                            <strong className="text-cyan-400">
                                Carnegie Mellon University (CMU)
                            </strong>{" "}
                            – the No.1 university in the U.S. for Computer
                            Science and Software Engineering (U.S. News & World
                            Report 2015-2017).
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-slate-200 text-sm font-bold">
                            Bachelor of Information Technology
                        </p>
                        <p className="text-slate-400 text-sm font-medium">
                            Van Lang University (VLU)
                        </p>
                    </div>
                </div>
            </section>

            {/* Favorites */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">Favorites</h3>
                <div className="flex flex-wrap gap-2">
                    {favorites.map((favorite) => {
                        const chipClassName =
                            "inline-block px-3 py-1.5 bg-[#1E293B] border border-white/5 text-xs text-slate-300 font-bold rounded-lg transition-colors hover:text-cyan-400 hover:border-cyan-400/30";

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
                            <Link
                                key={favorite.label}
                                href={favorite.href}
                                className={chipClassName}
                            >
                                {favorite.label}
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Contact */}
            <section className="pb-12 text-left">
                <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                <div className="space-y-4 text-[13px] font-bold">
                    <div className="flex items-center gap-2">
                        <span className="text-slate-300 min-w-[70px]">
                            Phone:
                        </span>
                        <span className="text-slate-400 font-medium">
                            +84 966622483
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-slate-300 min-w-[70px]">
                            Email:
                        </span>
                        <span className="text-cyan-400 font-medium break-all md:break-normal">
                            nguyentanninh123@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-slate-300 min-w-[70px]">
                            Location:
                        </span>
                        <span className="text-slate-400 font-medium whitespace-nowrap">
                            Ho Chi Minh City
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};


import { CollapsibleSection } from "../ui/CollapsibleSection";

export const EasybookExperience = () => {
    return (
        <div className="relative mb-8 lg:mb-20 group">
            <div className="absolute -left-[22px] md:-left-[46px] top-3 w-3 h-3 rounded-full bg-[#FFDC58] border-2 border-[#111] z-10">
                <div className="sr-only">Current role</div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider text-[#fff] bg-[#111] border-2 border-[#111] px-3 py-1.5 rounded-md mb-4 md:mb-0">
                    09/2025 - PRESENT
                </span>
            </div>

            <div className="bg-white shadow-[4px_4px_0_#111] rounded-md p-4 md:p-7 border-2 border-[#111] group-hover:shadow-[7px_7px_0_#111] transition-colors">
                <div className="mb-5 md:mb-10 text-left">
                    <a
                        href="https://www.easybook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-block"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-[#111] mb-2 flex items-center gap-3 group-hover/link:underline transition-colors">
                            Easybook.com (Travel Booking System)
                            <svg
                                className="w-6 h-6 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </h3>
                    </a>
                    <p className="text-[#333] text-xs md:text-sm font-bold mb-4 md:mb-6">
                        .NET Developer | 09/2025 - Present
                    </p>

                    <div className="mb-5 md:mb-8 p-4 md:p-5 bg-[#FFF3B0] border-2 border-l-8 border-[#111] rounded-md">
                        <p className="text-[#111] text-sm italic leading-relaxed">
                            Easybook is a leading land and sea travel booking
                            platform in Southeast Asia, providing ticketing
                            solutions for buses, ferries, trains, and car
                            rentals across multiple countries.
                        </p>
                    </div>

                    <div className="flex gap-2 sm:gap-4 mb-5 md:mb-10">
                        <a
                            href="https://apps.apple.com/sg/app/easybook-bus-train-ferry-tour/id668514565"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 sm:w-auto sm:h-auto sm:px-4 sm:py-2 bg-[#111] rounded-md shadow-[4px_4px_0_#111] text-sm font-bold text-[#fff] flex items-center justify-center gap-3 hover:-translate-y-0.5 transition-transform border-2 border-[#111]"
                        >
                            <svg
                                className="w-5 h-5 shrink-0"
                                viewBox="0 0 384 512"
                                fill="currentColor"
                            >
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-22.1-82.6-21.4-41.4.6-79.5 24.1-100.8 61.1-42.9 74.4-11 183.8 30.6 243.9 20.4 29.4 45 61.9 76.8 60.7 30.4-1.2 41.9-19.6 78.4-19.6 36.4 0 47 19.6 78.4 18.9 32.4-.6 53.7-29.4 73.8-58.8 23.3-34 32.8-67 33.1-68.7-.7-.3-64.2-24.6-64.5-98.4zM233 104.9c15.8-19.1 26.5-45.6 23.6-72.2-22.9 1-50.7 15.3-67.1 34.5-14.7 17.1-27.5 44.4-23.9 70.3 25.5 2 51.6-13.5 67.4-32.6z" />
                            </svg>
                            <span className="hidden sm:inline">App Store</span>
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=easiphone.easibookbustickets&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 sm:w-auto sm:h-auto sm:px-4 sm:py-2 bg-white rounded-md border-2 border-[#111] shadow-[4px_4px_0_#111] text-sm font-bold text-[#111] flex items-center justify-center gap-3 hover:-translate-y-0.5 transition-transform"
                        >
                            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                                <path
                                    fill="#00E676"
                                    d="M17.523 15.341l-3.327-3.341 3.327-3.341 4.159 2.408c.594.344.918.84.918 1.333s-.324.989-.918 1.333l-4.159 2.408z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="M14.196 12l-11.41-11.455c.162-.036.331-.045.503-.045.541 0 1.054.218 1.459.452l12.771 7.391-3.323 3.657z"
                                />
                                <path
                                    fill="#FFC400"
                                    d="M14.196 12l3.327 3.341-12.771 7.391c-.405.234-.918.452-1.459.452-.172 0-.341-.009-.503-.045l11.406-11.139z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M2.786 23.455c-.482-.369-.786-.989-.786-1.742v-19.426c0-.753.304-1.373.786-1.742l11.41 11.455-11.41 11.455z"
                                />
                            </svg>
                            <span className="hidden sm:inline">Google Play</span>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-16 mb-8 md:mb-16 text-left">
                    <div className="space-y-8 md:space-y-12">
                        <section>
                            <h4 className="text-base font-bold text-[#111] mb-4 md:mb-5 flex items-center gap-3">
                                <span className="text-xl">🛠️</span> Core
                                Responsibilities
                            </h4>
                            <ul className="space-y-3 md:space-y-5">
                                {[
                                    {
                                        title: "System Development",
                                        desc: "Participated in developing and optimizing web applications and RESTful APIs using .NET Core and C#.",
                                    },
                                    {
                                        title: "Database Operations",
                                        desc: "Worked with SQL Server; wrote stored procedures and views; assisted in query tuning",
                                    },
                                    {
                                        title: "System Integration",
                                        desc: "Contributed to migrating legacy services from SOAP to lightweight RESTful APIs for better response times.",
                                    },
                                ].map((item, i) => (
                                    <li key={i} className="space-y-1">
                                        <span className="block text-sm font-bold text-[#111]">
                                            {item.title}
                                        </span>
                                        <span className="block text-xs text-[#333] font-medium leading-relaxed">
                                            {item.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        <section>
                            <h4 className="text-base font-bold text-[#111] mb-4 md:mb-5 flex items-center gap-3">
                                <span className="text-xl">🏆</span> Key
                                Achievements
                            </h4>
                            <div className="space-y-3 md:space-y-4">
                                {[
                                    "Successfully migrated communication layer from legacy SOAP to REST APIs for assigned modules.",
                                    "Optimized SQL Server queries for the booking module, improving stability during high-traffic hours.",
                                    "Resolved production bugs and ensured compliance with business logic requirements.",
                                ].map((text, i) => (
                                    <div
                                        key={i}
                                        className="p-3 md:p-4 bg-[#D7F5D7] rounded-md border-2 border-[#111] shadow-[4px_4px_0_#111] flex gap-3 items-start"
                                    >
                                        <span className="text-[#111] text-lg font-bold">
                                            ✓
                                        </span>
                                        <p className="text-sm font-bold text-[#111] leading-snug">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                <CollapsibleSection title="🚀 Featured Projects" className="text-left">
                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                        {[
                            {
                                id: 1,
                                title: "Kymtrans API Integration",
                                desc: "Support real-time seat searching, mapping, and automated booking with a background sync pipeline.",
                                tags: [
                                    ".NET Core",
                                    "SQL Server",
                                    "Web API",
                                    "Scheduler",
                                ],
                                bullets: [
                                    "Developed automated Scheduler service for ticketing data sync.",
                                    "Built backend logic for dynamic interactive seat layout rendering.",
                                    "Implemented booking constraints ensuring zero seat allocation discrepancies.",
                                ],
                            },
                            {
                                id: 2,
                                title: "BRF System Modernization",
                                desc: "Transitioning legacy integration for Britain Resort Ferry (BRF) to a modern REST platform.",
                                tags: [
                                    ".NET Core",
                                    "C#",
                                    "RESTful APIs",
                                    "SOAP Migration",
                                ],
                                bullets: [
                                    "Executed communication layer migration from legacy SOAP APIs.",
                                    "Refactored data models and eliminated slow-running code segments.",
                                    "Improved API response times for a more stable ferry booking experience.",
                                ],
                            },
                            {
                                id: 3,
                                title: "RedBus Intelligence Location Mapping",
                                desc: "Map and analyze location data between competitors to identify missing routes and gaps.",
                                tags: [
                                    "Advanced SQL",
                                    "Indexing",
                                    "Data Comparison",
                                ],
                                bullets: [
                                    "Developed data ingestion module to align location datasets with RedBus.",
                                    "Built processing logic to filter potential trip gaps and unlinked partners.",
                                    "Generated automated reports to support data-driven expansion decisions.",
                                ],
                            },
                        ].map((project) => (
                            <div
                                key={project.id}
                                className="p-4 md:p-6 bg-[#F5F1EA] rounded-md border-2 border-[#111] hover:shadow-[7px_7px_0_#111] transition-colors"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                    <div>
                                        <h5 className="text-lg font-bold text-[#111] mb-1">
                                            {project.id}. {project.title}
                                        </h5>
                                        <p className="text-[#333] text-xs font-medium">
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 bg-[#C4A1FF] border-2 border-[#111] text-xs font-bold text-[#111] rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <ul className="space-y-2 md:space-y-3">
                                    {project.bullets.map((bullet, i) => (
                                        <li
                                            key={i}
                                            className="flex gap-3 text-xs md:text-sm font-bold text-[#333] group/bullet"
                                        >
                                            <span className="text-[#111] opacity-50">
                                                ●
                                            </span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </CollapsibleSection>
            </div>
        </div>
    );
};

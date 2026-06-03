
const caseStudy = [
    {
        title: "Context",
        text: "Bachhoaxanh is an e-commerce platform for grocery and FMCG retail in Vietnam.",
    },
    {
        title: "Problem",
        text: "Some core website flows were still on legacy .NET Framework code, and the cart flow had noticeable response-time issues.",
    },
    {
        title: "Action",
        text: "Worked on migration to .NET Core, separated service logic, refactored related code, and optimized slow paths while keeping existing business rules.",
    },
    {
        title: "Result",
        text: "Improved cart API response time from more than 2 seconds to under 200ms and made the related code easier to maintain.",
    },
];

const contributions = [
    "Migrated selected website functionality from .NET Framework to .NET Core.",
    "Separated backend logic into clearer service layers.",
    "Optimized cart and request-processing workflows.",
    "Kept existing business rules during refactoring.",
    "Worked on React Native mobile app features and maintenance.",
    "Coordinated with product, QA, and UI/UX teams during delivery.",
];

export const HighlightProject = () => {
    return (
        <section className="mt-16">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-3">
                    Representative Work
                    <div className="w-10 h-px bg-rose-400/60"></div>
                </h2>
            </div>

            <div className="bg-[#111827] rounded-xl p-6 md:p-8 border border-slate-800 text-left">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                    <div className="max-w-3xl">
                        <a
                            href="https://www.bachhoaxanh.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-block"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover/link:text-rose-300 transition-colors">
                                Bachhoaxanh Website Modernization
                            </h3>
                        </a>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="text-rose-300 text-sm font-medium">
                                E-commerce
                            </span>
                            <span className="text-slate-500 text-sm">
                                09/2022 - 09/2025
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm md:text-base leading-7">
                            A migration and optimization project focused on
                            backend stability, response time, and maintainable
                            service structure.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full lg:w-[300px]">
                        {[
                            { value: ">2s", label: "Before cart API" },
                            { value: "<200ms", label: "After optimization" },
                            { value: ".NET Core", label: "Migration target" },
                            { value: "React Native", label: "Mobile app work" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="bg-[#1B2535] border border-slate-800 rounded-lg p-3"
                            >
                                <p className="text-slate-100 text-base font-semibold mb-1">
                                    {item.value}
                                </p>
                                <p className="text-slate-500 text-xs">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mb-8">
                    {caseStudy.map((item) => (
                        <div
                            key={item.title}
                            className="bg-[#0B1120]/55 border border-slate-800 rounded-lg p-4"
                        >
                            <h4 className="text-rose-300 text-sm font-medium mb-2">
                                {item.title}
                            </h4>
                            <p className="text-slate-400 text-sm leading-6">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6">
                    <div>
                        <h4 className="text-base font-semibold text-white mb-4">
                            Role and contributions
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {contributions.map((text) => (
                                <li
                                    key={text}
                                    className="flex gap-3 text-sm text-slate-400 bg-[#0B1120]/55 border border-slate-800 rounded-lg p-3"
                                >
                                    <span className="text-rose-300">-</span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#0B1120]/55 border border-slate-800 rounded-lg p-5">
                        <h4 className="text-base font-semibold text-white mb-4">
                            Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {[
                                ".NET Core",
                                "C#",
                                "REST APIs",
                                "React Native",
                                "Service layers",
                                "Performance tuning",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 bg-[#1B2535] border border-slate-800 rounded-md text-xs text-slate-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

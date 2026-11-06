
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
        <section className="mt-10 md:mt-16">
            <div className="flex items-center gap-4 mb-5 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111] flex items-center gap-3">
                    Representative Work
                    <div className="w-10 h-3 bg-[#FFB2EF] border-2 border-[#111]"></div>
                </h2>
            </div>

            <div className="bg-white shadow-[4px_4px_0_#111] rounded-md p-4 md:p-8 border-2 border-[#111] text-left">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                    <div className="max-w-3xl">
                        <a
                            href="https://www.bachhoaxanh.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-block"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-[#111] mb-2 group-hover/link:underline transition-colors">
                                Bachhoaxanh Website Modernization
                            </h3>
                        </a>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="text-[#111] text-sm font-medium">
                                E-commerce
                            </span>
                            <span className="text-[#555] text-sm">
                                09/2022 - 09/2025
                            </span>
                        </div>
                        <p className="text-[#333] text-sm md:text-base leading-7">
                            A migration and optimization project focused on
                            backend stability, response time, and maintainable
                            service structure.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:gap-3 w-full lg:w-[300px] lg:shrink-0">
                        {[
                            { value: ">2s", label: "Before cart API" },
                            { value: "<200ms", label: "After optimization" },
                            { value: ".NET Core", label: "Migration target" },
                            { value: "React Native", label: "Mobile app work" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="bg-[#FFDC58] border-2 border-[#111] rounded-md p-3"
                            >
                                <p className="text-[#111] text-base font-bold mb-1">
                                    {item.value}
                                </p>
                                <p className="text-[#555] text-xs">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8">
                    {caseStudy.map((item) => (
                        <div
                            key={item.title}
                            className="bg-[#F5F1EA] border-2 border-[#111] rounded-md p-4"
                        >
                            <h4 className="text-[#111] text-sm font-medium mb-2">
                                {item.title}
                            </h4>
                            <p className="text-[#333] text-sm leading-6">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6">
                    <div>
                        <h4 className="text-base font-bold text-[#111] mb-4">
                            Role and contributions
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                            {contributions.map((text) => (
                                <li
                                    key={text}
                                    className="flex gap-3 text-sm text-[#333] bg-[#F5F1EA] border-2 border-[#111] rounded-md p-3"
                                >
                                    <span className="text-[#111]">-</span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#F5F1EA] border-2 border-[#111] rounded-md p-5">
                        <h4 className="text-base font-bold text-[#111] mb-4">
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
                                    className="px-2.5 py-1 bg-[#FFDC58] border-2 border-[#111] rounded-md text-xs text-[#333]"
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

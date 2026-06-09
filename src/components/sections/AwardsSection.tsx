
const milestones = [
    {
        date: "02/2026",
        title: "System Integration and API Migration",
        company: "Easybook.com",
        description:
            "Worked on BRF booking platform migration from SOAP-based services to REST APIs and refactored related backend logic.",
        notes: [
            "Improved maintainability of assigned integration flows.",
            "Reduced overhead in selected third-party communication paths.",
        ],
    },
    {
        date: "01/2022",
        title: ".NET Framework to .NET Core Migration",
        company: "Bachhoaxanh.com",
        description:
            "Contributed to website migration and performance improvement work for core e-commerce flows.",
        notes: [
            "Improved cart response time from more than 2 seconds to under 200ms.",
            "Separated service logic and preserved existing business rules.",
        ],
    },
];

export const AwardsSection = () => {
    return (
        <section className="mt-10 md:mt-16">
            <div className="flex items-center gap-4 mb-5 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-3">
                    Milestones
                    <div className="w-10 h-px bg-amber-400/60"></div>
                </h2>
            </div>

            <div className="relative pl-4 md:pl-10">
                <div className="absolute left-0 top-1 bottom-0 w-px bg-slate-700"></div>

                {milestones.map((item, index) => (
                    <div
                        key={item.title}
                        className={index === milestones.length - 1 ? "relative" : "relative mb-6 md:mb-8"}
                    >
                        <div className="absolute -left-[22px] md:-left-[47px] top-2 w-3 h-3 rounded-full bg-[#0B1120] border border-amber-400 z-10"></div>

                        <div className="mb-3">
                            <span className="text-xs text-slate-500">
                                {item.date}
                            </span>
                        </div>

                        <div className="bg-[#111827] rounded-xl p-4 md:p-6 border border-slate-800">
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                                {item.title}
                            </h3>
                            <p className="text-amber-300 text-sm font-medium mb-4">
                                {item.company}
                            </p>
                            <p className="text-slate-400 text-sm leading-6 mb-4">
                                {item.description}
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                {item.notes.map((note) => (
                                    <li
                                        key={note}
                                        className="text-sm text-slate-400 leading-6 bg-[#0B1120]/55 border border-slate-800 rounded-lg p-3"
                                    >
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


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
                <h2 className="text-2xl md:text-3xl font-bold text-[#111] flex items-center gap-3">
                    Milestones
                    <div className="w-10 h-3 bg-[#FFDC58] border-2 border-[#111]"></div>
                </h2>
            </div>

            <div className="relative pl-4 md:pl-10">
                <div className="absolute left-0 top-1 bottom-0 w-[3px] bg-[#111]"></div>

                {milestones.map((item, index) => (
                    <div
                        key={item.title}
                        className={index === milestones.length - 1 ? "relative" : "relative mb-6 md:mb-8"}
                    >
                        <div className="absolute -left-[22px] md:-left-[47px] top-2 w-3 h-3 rounded-full bg-[#FFDC58] border-2 border-[#111] z-10"></div>

                        <div className="mb-3">
                            <span className="text-xs text-[#555]">
                                {item.date}
                            </span>
                        </div>

                        <div className="bg-white shadow-[4px_4px_0_#111] rounded-md p-4 md:p-6 border-2 border-[#111]">
                            <h3 className="text-lg md:text-xl font-bold text-[#111] mb-1">
                                {item.title}
                            </h3>
                            <p className="text-[#111] text-sm font-medium mb-4">
                                {item.company}
                            </p>
                            <p className="text-[#333] text-sm leading-6 mb-4">
                                {item.description}
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                {item.notes.map((note) => (
                                    <li
                                        key={note}
                                        className="text-sm text-[#333] leading-6 bg-[#F5F1EA] border-2 border-[#111] rounded-md p-3"
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

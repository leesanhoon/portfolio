const metrics = [
    {
        label: ".NET development",
        value: "6+ years",
    },
    {
        label: "Enterprise banking CRM",
        value: ".NET 10 · ABP · Angular",
    },
    {
        label: "AI agent delivery team",
        value: "1,000+ tasks shipped",
    },
    {
        label: "Cart API improvement",
        value: "Before 2s+ / After 200ms",
    },
    {
        label: "Migration experience",
        value: "Legacy to Core",
    },
    {
        label: "Integration modernization",
        value: "SOAP to REST",
    },
];

export const ImpactMetrics = () => {
    return (
        <section className="mb-8 lg:mb-14">
            <div className="mb-4 md:mb-6 max-w-3xl">
                <p className="text-[#111] text-sm font-medium mb-3">
                    Full-stack .NET Developer
                </p>
                <h2 className="text-2xl md:text-4xl font-bold text-[#111] leading-tight mb-3 md:mb-4">
                    Full-stack developer focused on .NET APIs, Angular
                    and React front ends, and AI-assisted delivery.
                </h2>
                <p className="text-[#333] text-sm md:text-base leading-7">
                    I work mainly with .NET Core, SQL Server, REST APIs, and
                    production systems in banking, e-commerce and travel
                    booking domains.
                </p>
            </div>

            <div className="space-y-2 md:space-y-3 border-l-4 border-[#111] pl-4 md:pl-5">
                {metrics.map((metric) => (
                    <div
                        key={metric.label}
                        className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3"
                    >
                        <span className="text-sm font-bold text-[#111]">
                            {metric.value}
                        </span>
                        <span className="hidden sm:block text-[#555]">
                            |
                        </span>
                        <span className="text-sm text-[#555]">
                            {metric.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

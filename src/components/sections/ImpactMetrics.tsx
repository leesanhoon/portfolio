const metrics = [
    {
        label: ".NET development",
        value: "6+ years",
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
                <p className="text-cyan-300 text-sm font-medium mb-3">
                    .NET Developer
                </p>
                <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight mb-3 md:mb-4">
                    Backend developer focused on .NET APIs, system migration,
                    and practical performance improvement.
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-7">
                    I work mainly with .NET Core, SQL Server, REST APIs, and
                    production systems in e-commerce and travel booking domains.
                </p>
            </div>

            <div className="space-y-2 md:space-y-3 border-l border-slate-800/80 pl-4 md:pl-5">
                {metrics.map((metric) => (
                    <div
                        key={metric.label}
                        className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3"
                    >
                        <span className="text-sm text-cyan-300/90">
                            {metric.value}
                        </span>
                        <span className="hidden sm:block text-slate-700">
                            |
                        </span>
                        <span className="text-sm text-slate-500">
                            {metric.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

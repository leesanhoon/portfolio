import React from "react";

const metrics = [
    { value: "6+ years", label: ".NET development" },
    { value: ">2s -> <200ms", label: "Cart API improvement" },
    { value: ".NET Framework -> .NET Core", label: "Migration experience" },
    { value: "SOAP -> REST", label: "Integration modernization" },
];

export const ImpactMetrics = () => {
    return (
        <section className="mb-12 lg:mb-14">
            <div className="mb-6 max-w-3xl">
                <p className="text-cyan-300 text-sm font-medium mb-3">
                    .NET Developer
                </p>
                <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight mb-4">
                    Backend developer focused on .NET APIs, system migration,
                    and practical performance improvement.
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-7">
                    I work mainly with .NET Core, SQL Server, REST APIs, and
                    production systems in e-commerce and travel booking domains.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {metrics.map((metric) => (
                    <div
                        key={metric.label}
                        className="bg-[#111827] border border-slate-800 rounded-xl p-4"
                    >
                        <p className="text-base font-semibold text-slate-100 mb-1">
                            {metric.value}
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            {metric.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

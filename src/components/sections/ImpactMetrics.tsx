import {
    FiActivity,
    FiCode,
    FiGitBranch,
    FiRefreshCw,
} from "react-icons/fi";

const metrics = [
    {
        icon: FiCode,
        label: ".NET development",
        content: <span>6+ years</span>,
    },
    {
        icon: FiActivity,
        label: "Cart API improvement",
        content: (
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <span className="rounded-md bg-slate-900/80 px-2 py-1 text-center text-sm text-slate-300">
                    Before 2s+
                </span>
                <span className="text-cyan-300">→</span>
                <span className="rounded-md bg-cyan-400/10 px-2 py-1 text-center text-sm text-cyan-200">
                    After 200ms
                </span>
            </div>
        ),
    },
    {
        icon: FiGitBranch,
        label: "Migration experience",
        content: (
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <span className="rounded-md bg-slate-900/80 px-2 py-1 text-center text-sm text-slate-300">
                    Framework
                </span>
                <span className="text-cyan-300">→</span>
                <span className="rounded-md bg-cyan-400/10 px-2 py-1 text-center text-sm text-cyan-200">
                    Core
                </span>
            </div>
        ),
    },
    {
        icon: FiRefreshCw,
        label: "Integration modernization",
        content: (
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <span className="rounded-md bg-slate-900/80 px-2 py-1 text-center text-sm text-slate-300">
                    SOAP
                </span>
                <span className="text-cyan-300">→</span>
                <span className="rounded-md bg-cyan-400/10 px-2 py-1 text-center text-sm text-cyan-200">
                    REST
                </span>
            </div>
        ),
    },
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
                        <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                            <metric.icon className="h-4 w-4" />
                        </div>
                        <div className="text-base font-semibold text-slate-100 mb-2">
                            {metric.content}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            {metric.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

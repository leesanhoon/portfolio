
import { CollapsibleSection } from "../ui/CollapsibleSection";

const achievements = [
    "Build backend services and Angular modules for a multi-tenant enterprise CRM on .NET 10, ABP Framework microservices and Angular 21, deployed through Azure DevOps CI/CD to QA and UAT.",
    "Own the security and permissions module: three-tier role hierarchy, record sharing rules, shared groups, maker-checker approval flows and Microsoft Entra ID single sign-on.",
    "Deliver dynamic reporting and KPI dashboards that match the bank's design system exactly, backed by tuned SQL Server queries.",
    "Integrate CRM data with the bank's upstream systems through SQL Server data pipelines, with versioned data scripts that ship with dry-run, verification and rollback steps.",
    "Merged around 365 pull requests in the first ten weeks on the project.",
];

const agentFleet = [
    "Designed and run a self-coordinating team of AI coding agents (orchestrator, backend, frontend, reviewer) on a Kanban board.",
    "Agents pull bugs from Azure DevOps, implement fixes, open pull requests, run QA acceptance against the design and attach screenshot evidence to the ticket.",
    "Human approval gates stay in place for business rules, permission decisions and any data change on shared environments.",
    "1,000+ tasks completed through the agent workflow.",
];

const Bullets = ({ items }: { items: string[] }) => (
    <ul className="space-y-3 md:space-y-4">
        {items.map((text, i) => (
            <li key={i} className="flex gap-3 text-sm font-bold text-[#333]">
                <span className="text-[#111] text-lg leading-none">•</span>
                {text}
            </li>
        ))}
    </ul>
);

export const UtopExperience = () => {
    return (
        <div className="relative mb-8 lg:mb-20 group">
            <div className="absolute -left-[22px] md:-left-[46px] top-3 w-3 h-3 rounded-full bg-[#FFDC58] border-2 border-[#111] z-10">
                <div className="sr-only">Current role</div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider text-[#fff] bg-[#111] border-2 border-[#111] px-3 py-1.5 rounded-md mb-4 md:mb-0">
                    09/2026 - PRESENT
                </span>
            </div>

            <div className="bg-white shadow-[4px_4px_0_#111] rounded-md p-4 md:p-7 border-2 border-[#111] group-hover:shadow-[7px_7px_0_#111] transition-colors">
                <div className="mb-6 md:mb-10 text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-[#111] mb-2">
                        Enterprise CRM for a Vietnamese Commercial Bank
                    </h3>
                    <p className="text-[#333] text-xs md:text-sm font-bold mb-4 md:mb-6">
                        Senior .NET Developer · Utop
                    </p>

                    <CollapsibleSection title="About the project" defaultOpen={false}>
                        <p className="text-[#111] text-sm leading-relaxed max-w-4xl font-medium">
                            A sales and customer-relationship platform for a
                            Vietnamese commercial bank: customer 360, leads and
                            opportunities, approvals, KPI tracking and reporting
                            for branch and head-office staff, with strict data
                            access rules per organisational unit.
                        </p>
                    </CollapsibleSection>
                </div>

                <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 text-left">
                    <div>
                        <h4 className="text-base font-bold text-[#111] mb-4 md:mb-5 flex items-center gap-3">
                            <span className="text-xl">🏦</span> Key
                            Responsibilities & Achievements
                        </h4>
                        <Bullets items={achievements} />
                    </div>

                    <div className="p-4 md:p-5 bg-[#FFF3B0] border-2 border-l-8 border-[#111] rounded-md">
                        <h4 className="text-base font-bold text-[#111] mb-4 flex items-center gap-3">
                            <span className="text-xl">🤖</span> Highlight: AI
                            Agent Delivery Team
                        </h4>
                        <Bullets items={agentFleet} />
                    </div>
                </div>
            </div>
        </div>
    );
};

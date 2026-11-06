
const aiTools = [
    "GitHub Copilot",
    "Codex",
    "Claude Code",
    "NotebookLM",
    "Multi-agent Kanban",
    "ChatGPT",
];

const aiUseCases = [
    {
        title: "Agent delivery team",
        desc: "Run a team of coding agents that take Azure DevOps bugs, fix them, open pull requests and check the result on QA, with a human approving business and data decisions.",
    },
    {
        title: "Planning",
        desc: "Break down requirements, migration work, and bug reports into smaller implementation steps.",
    },
    {
        title: "Documentation",
        desc: "Summarize technical documents, project notes, and integration behavior for easier handover.",
    },
    {
        title: "Legacy analysis",
        desc: "Use AI assistants to read context faster, compare old and new flows, and prepare refactoring notes.",
    },
];

export const AIExperience = () => {
    return (
        <section className="mt-10 md:mt-16">
            <div className="flex items-center gap-4 mb-5 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111] flex items-center gap-3">
                    AI-assisted Workflow
                    <div className="w-10 h-3 bg-[#C4A1FF] border-2 border-[#111]"></div>
                </h2>
            </div>

            <div className="bg-white shadow-[4px_4px_0_#111] rounded-md p-4 md:p-8 border-2 border-[#111] text-left">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="max-w-2xl">
                        <p className="text-[#333] text-sm md:text-base leading-7">
                            I use AI tools for reading documents, planning
                            implementation work, understanding legacy code and,
                            on my current project, running a team of AI coding
                            agents under my review.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:max-w-[360px]">
                        {aiTools.map((tool) => (
                            <span
                                key={tool}
                                className="px-2.5 py-1 bg-[#FFDC58] border-2 border-[#111] text-[#333] text-xs rounded-md"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {aiUseCases.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-md bg-[#F5F1EA] border-2 border-[#111] p-4"
                        >
                            <h4 className="text-[#111] text-sm font-medium mb-2">
                                {item.title}
                            </h4>
                            <p className="text-[#333] text-sm leading-6">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

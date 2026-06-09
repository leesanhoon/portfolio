import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
    title: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
    className?: string;
}

export const CollapsibleSection = ({
    title,
    defaultOpen = false,
    children,
    className = "",
}: CollapsibleSectionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <section className={className}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left lg:hidden"
            >
                <h3 className="text-base font-semibold text-white">
                    {title}
                </h3>
                <ChevronDown
                    className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <h3 className="hidden lg:block text-base font-semibold text-white mb-3">
                {title}
            </h3>
            <div
                className={`${isOpen ? "mt-3" : "hidden"} lg:!block lg:mt-0`}
            >
                {children}
            </div>
        </section>
    );
};

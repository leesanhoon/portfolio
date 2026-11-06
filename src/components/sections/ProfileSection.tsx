
import {
    Download,
    Eye,
    ExternalLink,
    Globe,
    Mail,
    Phone,
    Send,
} from "lucide-react";

export const ProfileSection = () => {
    const socialLinks = [
        { label: "Phone", href: "tel:0966622483", icon: Phone },
        {
            label: "Email",
            href: "mailto:nguyentanninh123@gmail.com",
            icon: Mail,
        },
        {
            label: "LinkedIn",
            href: "https://linkedin.com/in/nguyentanninh",
            icon: ExternalLink,
        },
        {
            label: "Facebook",
            href: "https://www.facebook.com/leesanhoonn",
            icon: Globe,
        },
    ];

    return (
        <div className="mb-4 lg:mb-8">
            <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-center lg:text-center mb-4 lg:mb-5">
                <div className="shrink-0">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-4 border-[#FFDC58] overflow-hidden relative">
                        <img
                            src="/1758714776206.jpg"
                            alt="Nguyen Tan Ninh"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://ui-avatars.com/api/?name=Nguyen+Tan+Ninh&background=0B1120&color=42A5F5&size=512&bold=true";
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:items-center">
                    <h1 className="text-lg lg:text-xl font-bold text-white mb-0.5">
                        Nguyen Tan Ninh
                    </h1>
                    <p className="text-neutral-300 text-sm">Senior .NET Developer</p>
                </div>
            </div>

            <div className="flex gap-2 mb-4 lg:mb-6 lg:justify-center">
                {socialLinks.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                            item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#FFDC58] border-2 border-white text-[#111] shadow-[3px_3px_0_#fff] hover:-translate-y-0.5 transition-transform"
                        title={item.label}
                        aria-label={item.label}
                    >
                        <item.icon className="h-4 w-4" />
                    </a>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-1.5 lg:gap-2 w-full">
                <a
                    href="mailto:nguyentanninh123@gmail.com"
                    className="flex items-center justify-center gap-1.5 py-2 bg-[#FFB2EF] text-[#111] border-2 border-white shadow-[3px_3px_0_#fff] rounded-md text-xs font-bold hover:-translate-y-0.5 transition-transform px-2"
                >
                    <Send className="h-3.5 w-3.5" />
                    Contact
                </a>
                <a
                    href="/Nguyen_Tan_Ninh_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 bg-white border-2 border-white shadow-[3px_3px_0_#FFDC58] rounded-md text-xs font-bold text-[#111] hover:-translate-y-0.5 transition-transform px-2"
                >
                    <Eye className="h-3.5 w-3.5" />
                    View CV
                </a>
                <a
                    href="/Nguyen_Tan_Ninh_cv.pdf"
                    download
                    className="flex items-center justify-center gap-1.5 py-2 bg-white border-2 border-white shadow-[3px_3px_0_#FFDC58] rounded-md text-xs font-bold text-[#111] hover:-translate-y-0.5 transition-transform px-2"
                >
                    <Download className="h-3.5 w-3.5" />
                    Download
                </a>
            </div>
        </div>
    );
};

import React from "react";
import Image from "next/image";

export const ProfileSection = () => {
    return (
        <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-5">
                <div className="w-24 h-24 rounded-full border border-slate-700 overflow-hidden relative">
                    <Image
                        src="/1758714776206.jpg"
                        alt="Nguyen Tan Ninh"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://ui-avatars.com/api/?name=Nguyen+Tan+Ninh&background=0B1120&color=42A5F5&size=512&bold=true";
                        }}
                    />
                </div>
            </div>

            <h1 className="text-xl font-semibold text-white mb-1">
                Nguyen Tan Ninh
            </h1>
            <p className="text-slate-400 text-sm mb-5">.NET Developer</p>

            <div className="flex gap-2 mb-6">
                {[
                    { label: "Tel", href: "tel:0966622483" },
                    {
                        label: "Email",
                        href: "mailto:nguyentanninh123@gmail.com",
                    },
                    {
                        label: "LinkedIn",
                        href: "https://linkedin.com/in/nguyentanninh",
                    },
                    {
                        label: "Facebook",
                        href: "https://www.facebook.com/leesanhoonn",
                    },
                ].map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                            item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                        className="px-2.5 py-1.5 rounded-md bg-[#1B2535] border border-slate-800 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
                        title={item.label}
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-2 w-full">
                <a
                    href="mailto:nguyentanninh123@gmail.com"
                    className="flex items-center justify-center py-2 bg-cyan-500/90 text-slate-950 rounded-md text-xs font-medium hover:bg-cyan-400 transition-colors px-2"
                >
                    Contact
                </a>
                <a
                    href="/Nguyen_Tan_Ninh_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 bg-[#1B2535] border border-slate-800 rounded-md text-xs text-slate-200 hover:text-white transition-colors px-2"
                >
                    View CV
                </a>
                <a
                    href="/Nguyen_Tan_Ninh_cv.pdf"
                    download
                    className="flex items-center justify-center py-2 bg-[#1B2535] border border-slate-800 rounded-md text-xs text-slate-200 hover:text-white transition-colors px-2"
                >
                    Download
                </a>
            </div>
        </div>
    );
};

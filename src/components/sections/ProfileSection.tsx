import React from "react";

export const ProfileSection = () => {
    return (
        <div className="flex flex-col items-center text-center mb-10">
            <div className="mb-6">
                <div className="w-28 h-28 rounded-full border-[3px] border-white/10 overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 font-bold uppercase text-[10px]">
                        Photo
                    </div>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-white mb-1">
                Nguyễn Tấn Ninh
            </h1>
            <p className="text-slate-400 text-sm font-medium mb-6">
                .NET Developer
            </p>

            {/* Social Icons Row */}
            <div className="flex gap-4 mb-8">
                <a
                    href="tel:0966622483"
                    className="w-11 h-11 rounded-lg bg-[#00C853] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <span className="text-white text-xl">📞</span>
                </a>
                <a
                    href="mailto:nguyentanninh123@gmail.com"
                    className="w-11 h-11 rounded-lg bg-[#EA4335] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <span className="text-white text-xl">✉️</span>
                </a>
                <a
                    href="https://linkedin.com/in/leesanhoon/"
                    className="w-11 h-11 rounded-lg bg-[#007AC1] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <span className="text-white text-xl">in</span>
                </a>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 w-full justify-center">
                <a
                    href="/Nguyen_Tan_Ninh_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-1.5 bg-[#1E293B] border border-white/10 rounded-full text-[10px] font-bold text-white hover:bg-slate-700 transition-colors min-w-0 px-2"
                >
                    <span className="text-sm">👁️</span>
                    <span className="text-left leading-tight">View CV</span>
                </a>
                <a
                    href="/Nguyen_Tan_Ninh_cv.pdf"
                    download
                    className="flex-1 flex items-center justify-center gap-2 py-1.5 bg-[#1E293B] border border-white/10 rounded-full text-[10px] font-bold text-white hover:bg-slate-700 transition-colors min-w-0 px-2"
                >
                    <span className="text-sm">📥</span>
                    <span className="leading-tight">Download</span>
                </a>
            </div>
        </div>
    );
};

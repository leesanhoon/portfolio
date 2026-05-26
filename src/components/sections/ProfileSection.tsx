import React from "react";

export const ProfileSection = () => {
    return (
        <div className="flex flex-col items-center text-center mb-10">
            <div className="mb-6">
                <div className="w-28 h-28 rounded-full border-[3px] border-white/10 overflow-hidden shadow-2xl relative group/avatar">
                    <img
                        src="/1758714776206.jpg"
                        alt="Nguyễn Tấn Ninh"
                        className="w-full h-full object-cover transition-all duration-500 scale-110 group-hover/avatar:scale-100"
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://ui-avatars.com/api/?name=Nguyen+Tan+Ninh&background=0B1120&color=42A5F5&size=512&bold=true";
                        }}
                    />
                    <div className="absolute inset-0 bg-cyan-500/5 group-hover/avatar:bg-transparent transition-colors"></div>
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
                    className="w-11 h-11 rounded-xl bg-[#00C853] flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(0,200,83,0.3)] transition-all duration-300"
                    title="Call Me"
                >
                    <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </a>
                <a
                    href="mailto:nguyentanninh123@gmail.com"
                    className="w-11 h-11 rounded-xl bg-[#EA4335] flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(234,67,53,0.3)] transition-all duration-300"
                    title="Email Me"
                >
                    <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </a>
                <a
                    href="https://linkedin.com/in/nguyentanninh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#007AC1] flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(0,122,193,0.3)] transition-all duration-300"
                    title="LinkedIn Profile"
                >
                    <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a
                    href="https://www.facebook.com/leesanhoonn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#1877F2] flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(24,119,242,0.3)] transition-all duration-300"
                    title="Facebook Profile"
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
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

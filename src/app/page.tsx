"use client";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-300 flex font-sans selection:bg-cyan-500/30">
            {/* Left Sidebar */}
            <div className="w-[340px] bg-[#111827] border-r border-slate-800/50 h-screen overflow-y-auto sticky top-0 scrollbar-hide p-10 flex flex-col">
                {/* Profile Section */}
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
                            <span className="text-left leading-tight">
                                View CV
                            </span>
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

                <div className="space-y-10 px-2 mt-4 text-left">
                    {/* About Me */}
                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">
                            About Me
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed font-medium">
                            <strong className="text-white">
                                .NET Developer
                            </strong>{" "}
                            with{" "}
                            <strong className="text-cyan-400">
                                6 years of experience
                            </strong>{" "}
                            specializing in{" "}
                            <strong className="text-white">
                                backend architecture
                            </strong>{" "}
                            and{" "}
                            <strong className="text-white">
                                enterprise application development
                            </strong>
                            . Proven capability in executing{" "}
                            <strong className="text-white">
                                legacy migrations
                            </strong>{" "}
                            from .NET Framework to{" "}
                            <strong className="text-cyan-400">.NET Core</strong>{" "}
                            and optimizing{" "}
                            <strong className="text-white">
                                API performance
                            </strong>
                            . Experienced in designing{" "}
                            <strong className="text-white">
                                scalable RESTful services
                            </strong>{" "}
                            (Cart, Order, Promotion). Focused on writing{" "}
                            <strong className="text-cyan-400">
                                clean, maintainable code
                            </strong>{" "}
                            and collaborating effectively with cross-functional
                            teams to deliver stable products
                        </p>
                    </section>

                    {/* Skills */}
                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">
                            Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                ".NET / .NET Core",
                                "C#",
                                "ASP.NET Core Web API",
                                "Entity Framework Core / Dapper",
                                "SQL Server",
                                "Microservices Architecture",
                                "RESTful APIs",
                                "Docker / CI/CD",
                                "Git",
                                "ReactJS / Next.js / Nest.js",
                                "HTML / CSS / TailwindCSS",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-[#1E293B] border border-white/5 text-xs text-slate-300 font-bold rounded-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Achievements */}
                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">
                            Achievements
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { icon: "🎁", title: "6+ years experience" },
                                { icon: "📄", title: "10+ production apps" },
                                { icon: "🛒", title: "2 POS systems built" },
                                { icon: "🏢", title: "3 F&B system built" },
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-slate-300 text-sm font-bold"
                                >
                                    <span className="text-lg opacity-80">
                                        {item.icon}
                                    </span>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Education */}
                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">
                            Education
                        </h3>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <p className="text-slate-200 text-sm font-bold leading-snug">
                                    Software Engineering
                                </p>
                                <p className="text-slate-400 text-[13px] font-medium leading-relaxed">
                                    <strong className="text-cyan-400">
                                        Carnegie Mellon University (CMU)
                                    </strong>{" "}
                                    – the No.1 university in the U.S. for
                                    Computer Science and Software Engineering
                                    (U.S. News & World Report 2015-2017).
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-slate-200 text-sm font-bold">
                                    Bachelor of Information Technology
                                </p>
                                <p className="text-slate-400 text-sm font-medium">
                                    Van Lang University (VLU)
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="pb-12 text-left">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Contact
                        </h3>
                        <div className="space-y-4 text-[13px] font-bold">
                            <div className="flex items-center gap-2">
                                <span className="text-slate-300 min-w-[70px]">
                                    Phone:
                                </span>
                                <span className="text-slate-400 font-medium">
                                    +84 966622483
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-300 min-w-[70px]">
                                    Email:
                                </span>
                                <span className="text-cyan-400 font-medium break-all md:break-normal">
                                    nguyentanninh123@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-300 min-w-[70px]">
                                    Location:
                                </span>
                                <span className="text-slate-400 font-medium whitespace-nowrap">
                                    Ho Chi Minh City
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 p-16 overflow-y-auto scroll-smooth">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section */}
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-4xl font-black text-cyan-400 tracking-tighter uppercase flex items-center gap-4">
                            EXPERIENCES
                            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                        </h2>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative pl-8 md:pl-16">
                        {/* Main Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500/30 rounded-full"></div>

                        {/* Experience Card 1: Easybook */}
                        <div className="relative mb-20 group">
                            {/* Marker */}
                            <div className="absolute -left-[35px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] z-10">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <span className="text-xs font-black text-cyan-400/60 tracking-[0.3em] bg-cyan-500/5 px-4 py-2 rounded-xl mb-4 md:mb-0">
                                    09/2025 - PRESENT
                                </span>
                            </div>

                            {/* Card Body */}
                            <div className="bg-[#1E293B]/50 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl group-hover:border-cyan-500/30 transition-all duration-500">
                                <div className="mb-10">
                                    <h3 className="text-2xl md:text-3xl font-black text-[#42A5F5] tracking-tight mb-2 uppercase">
                                        Easybook (Travel Booking System)
                                    </h3>
                                    <p className="text-slate-400 text-sm font-bold mb-6">
                                        09/2025 - Present
                                    </p>

                                    <div className="flex gap-3 mb-10">
                                        <button className="px-6 py-2.5 bg-black rounded-lg text-xs font-black text-white uppercase flex items-center gap-2 hover:bg-black/80 transition-colors border border-white/10">
                                            <span className="text-lg">🍎</span>{" "}
                                            App Store
                                        </button>
                                        <button className="px-6 py-2.5 bg-white rounded-lg text-xs font-black text-slate-900 uppercase flex items-center gap-2 hover:bg-slate-100 transition-colors shadow-lg">
                                            <span className="text-lg">▶️</span>{" "}
                                            Google Play
                                        </button>
                                    </div>

                                    {/* Screenshots Row */}
                                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide mb-12">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-48 h-32 md:w-64 md:h-44 rounded-2xl bg-slate-800/80 border border-white/10 flex-shrink-0 flex items-center justify-center relative group/img overflow-hidden shadow-2xl"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
                                                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                                                    Screenshot {i}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                                    <div className="space-y-12">
                                        {/* Applications */}
                                        <section>
                                            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                                <span className="text-xl">
                                                    🗳️
                                                </span>{" "}
                                                Applications
                                            </h4>
                                            <ul className="space-y-3">
                                                {[
                                                    "POS System (Tablet / Counter)",
                                                    "Server App (Waiter Ordering)",
                                                    "Kitchen Display System (KDS)",
                                                    "Admin Dashboard",
                                                ].map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center gap-3 text-sm font-bold text-slate-300"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-[#42A5F5] rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>

                                        {/* What I Built */}
                                        <section>
                                            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                                <span className="text-xl">
                                                    🚀
                                                </span>{" "}
                                                What I Built
                                            </h4>
                                            <ul className="space-y-4">
                                                {[
                                                    "Built code base for POS, Server, and Kitchen systems.",
                                                    "Designed modular printing service supporting: Epson, Sunmi, Zebra.",
                                                    "Built multi-kitchen routing logic.",
                                                    "Implemented real-time order sync using socket.io.",
                                                    "Integrated payment gateways: Sunmi & Dejavoo.",
                                                ].map((task, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex gap-3 text-sm leading-relaxed font-bold text-slate-400"
                                                    >
                                                        <span className="text-[#E91E63] text-lg leading-none">
                                                            •
                                                        </span>
                                                        {task}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>

                                    <div className="space-y-12">
                                        {/* Users */}
                                        <section>
                                            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                                <span className="text-xl">
                                                    👥
                                                </span>{" "}
                                                Users
                                            </h4>
                                            <ul className="space-y-3 text-sm font-bold text-slate-300">
                                                {[
                                                    "F&B restaurant owners",
                                                    "Cashiers (POS)",
                                                    "Waiters (Server app)",
                                                    "Kitchen staff (KDS)",
                                                    "Multi-branch restaurant chains",
                                                ].map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-[#42A5F5] rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>

                                        {/* Status */}
                                        <section>
                                            <div className="p-8 bg-[#E3F2FD]/5 rounded-2xl border border-white/5 space-y-3">
                                                {[
                                                    "In active development",
                                                    "Internal QA testing",
                                                    "Production deployment planned",
                                                ].map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-3 text-sm font-bold text-cyan-400/50"
                                                    >
                                                        <span className="text-cyan-400">
                                                            ✓
                                                        </span>
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        {/* Team */}
                                        <section>
                                            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                                <span className="text-xl">
                                                    👨‍💼
                                                </span>{" "}
                                                Team
                                            </h4>
                                            <ul className="space-y-3 text-sm font-bold text-slate-300">
                                                {[
                                                    "3 Mobile Developer",
                                                    "2 Web Developers",
                                                    "4 Backend Developer",
                                                    "3 QA",
                                                    "1 Designer",
                                                    "1 BA",
                                                ].map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-[#42A5F5] rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience Card 2: MWG */}
                        <div className="relative mb-20 group">
                            <div className="absolute -left-[35px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-slate-700 flex items-center justify-center group-hover:border-cyan-500 transition-colors z-10">
                                <div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-white rounded-full transition-colors"></div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <span className="text-xs font-black text-slate-500/60 tracking-[0.3em] bg-slate-500/5 px-4 py-2 rounded-xl mb-4 md:mb-0 group-hover:text-cyan-400/60 group-hover:bg-cyan-500/5 transition-all">
                                    01/2024 - 08/2025
                                </span>
                            </div>

                            <div className="bg-[#1E293B]/50 rounded-3xl p-8 md:p-12 border border-white/5 opacity-80 hover:opacity-100 transition-all duration-500 shadow-xl group-hover:border-cyan-500/20">
                                <div className="mb-10">
                                    <h3 className="text-2xl md:text-3xl font-black text-[#42A5F5] uppercase tracking-tight mb-2">
                                        MWG (E-Commerce)
                                    </h3>
                                    <p className="text-slate-400 text-sm font-bold">
                                        Software Engineer
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                                    <div className="space-y-6">
                                        <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                            <span className="text-xl">🚀</span>{" "}
                                            Main Contributions
                                        </h4>
                                        <ul className="space-y-4">
                                            {[
                                                "Unified shopping cart API development.",
                                                "Integrated multi-brand platforms.",
                                                "High-traffic platform optimization.",
                                            ].map((text, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-3 text-sm font-bold text-slate-400"
                                                >
                                                    <span className="text-[#E91E63] text-lg leading-none">
                                                        •
                                                    </span>
                                                    {text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-center p-8 bg-slate-900/50 rounded-2xl border border-white/5">
                                        <div className="text-center">
                                            <p className="text-4xl font-black text-white mb-1 tracking-tighter">
                                                1M+
                                            </p>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                Daily Sessions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience Card 3: Bachhoaxanh */}
                        <div className="relative group">
                            <div className="absolute -left-[35px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-slate-700 flex items-center justify-center group-hover:border-cyan-500 transition-colors z-10">
                                <div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-white rounded-full transition-colors"></div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <span className="text-xs font-black text-slate-500/60 tracking-[0.3em] bg-slate-500/5 px-4 py-2 rounded-xl mb-4 md:mb-0 group-hover:text-cyan-400/60 group-hover:bg-cyan-500/5 transition-all">
                                    05/2020 - 12/2023
                                </span>
                            </div>

                            <div className="bg-[#1E293B]/50 rounded-3xl p-8 md:p-12 border border-white/5 opacity-80 hover:opacity-100 transition-all duration-500 shadow-xl group-hover:border-cyan-500/20">
                                <div className="mb-10">
                                    <h3 className="text-2xl md:text-3xl font-black text-[#42A5F5] uppercase tracking-tight mb-2">
                                        Bachhoaxanh (.NET Migration)
                                    </h3>
                                    <p className="text-slate-400 text-sm font-bold">
                                        .NET Developer
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    <p className="text-slate-300 text-sm leading-relaxed max-w-2xl font-bold">
                                        Spearheaded the migration of
                                        multi-layered legacy systems to modern
                                        .NET Core, ensuring high availability
                                        and seamless data transition for retail
                                        operations.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            {
                                                label: "Performance",
                                                val: "400%",
                                            },
                                            {
                                                label: "Migrated Services",
                                                val: "15+",
                                            },
                                            {
                                                label: "Code Coverage",
                                                val: "85%",
                                            },
                                            { label: "Latency", val: "-60%" },
                                        ].map((stat, i) => (
                                            <div
                                                key={i}
                                                className="p-4 bg-slate-800/30 rounded-xl border border-white/5 text-center"
                                            >
                                                <p className="text-xl font-black text-white mb-1 tracking-tight">
                                                    {stat.val}
                                                </p>
                                                <p className="text-[10px] font-black text-slate-500 uppercase">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Projects Section */}
                    <div className="mt-24">
                        <div className="flex items-center gap-6 mb-16 underline-offset-8 decoration-emerald-500/30">
                            <h2 className="text-4xl font-black text-emerald-400 tracking-tighter uppercase flex items-center gap-4">
                                SIDE PROJECTS
                                <div className="w-12 h-1 bg-emerald-400 rounded-full"></div>
                            </h2>
                        </div>

                        <div className="relative pl-8 md:pl-16">
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500/30 rounded-full"></div>

                            {/* Project Item */}
                            <div className="relative group">
                                <div className="absolute -left-[35px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                                <div className="bg-[#1E293B] rounded-3xl p-8 md:p-10 border border-white/5 group-hover:border-emerald-500/30 transition-all duration-500">
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">
                                        E-Commerce Portfolio API
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                                        Open-source boilerplate for scalable
                                        e-commerce backends using ASP.NET Core,
                                        Redis, and PostgreSQL.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-slate-800 text-slate-500 text-[10px] font-black uppercase rounded-lg">
                                            # .NET 8
                                        </span>
                                        <span className="px-3 py-1 bg-slate-800 text-slate-500 text-[10px] font-black uppercase rounded-lg">
                                            # Docker
                                        </span>
                                        <span className="px-3 py-1 bg-slate-800 text-slate-500 text-[10px] font-black uppercase rounded-lg">
                                            # Redis
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

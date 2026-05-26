"use client";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-300 flex flex-col lg:flex-row font-sans selection:bg-cyan-500/30">
            {/* Left Sidebar */}
            <div className="w-full lg:w-[340px] bg-[#111827] border-b lg:border-b-0 lg:border-r border-slate-800/50 lg:h-screen overflow-y-auto lg:sticky lg:top-0 scrollbar-hide p-6 lg:p-10 flex flex-col">
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
            <div className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto scroll-smooth">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section */}
                    <div className="flex items-center gap-6 mb-12 lg:mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-cyan-400 tracking-tighter uppercase flex items-center gap-4">
                            EXPERIENCES
                            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                        </h2>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative pl-6 md:pl-16">
                        {/* Main Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500/30 rounded-full"></div>

                        {/* Experience Card 1: Easybook */}
                        <div className="relative mb-16 lg:mb-20 group">
                            {/* Marker */}
                            <div className="absolute -left-[27px] md:-left-[67px] top-6 w-6 h-6 rounded-full bg-[#0B1120] border-4 border-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] z-10">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <span className="text-xs font-black text-cyan-400/60 tracking-[0.3em] bg-cyan-500/5 px-4 py-2 rounded-xl mb-4 md:mb-0">
                                    09/2025 - PRESENT
                                </span>
                            </div>

                            {/* Card Body */}
                            <div className="bg-[#1E293B]/50 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/5 shadow-2xl group-hover:border-cyan-500/30 transition-all duration-500">
                                <div className="mb-8 md:mb-10 text-left">
                                    <h3 className="text-xl md:text-3xl font-black text-[#42A5F5] tracking-tight mb-2 uppercase">
                                        Easybook.com (Travel Booking System)
                                    </h3>
                                    <p className="text-slate-400 text-xs md:text-sm font-bold mb-6">
                                        .NET Developer | 09/2025 - Present
                                    </p>

                                    <div className="mb-8 p-5 bg-cyan-500/5 border-l-4 border-cyan-500 rounded-r-2xl">
                                        <p className="text-slate-300 text-sm italic leading-relaxed">
                                            "Easybook is a leading land and sea
                                            travel booking platform in Southeast
                                            Asia, providing ticketing solutions
                                            for buses, ferries, trains, and car
                                            rentals across multiple countries."
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-8 md:mb-10">
                                        <a
                                            href="#"
                                            className="flex-1 sm:flex-none px-6 py-2.5 bg-black rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-3 hover:bg-zinc-900 transition-all border border-white/10 shadow-xl"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 384 512"
                                                fill="currentColor"
                                            >
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-22.1-82.6-21.4-41.4.6-79.5 24.1-100.8 61.1-42.9 74.4-11 183.8 30.6 243.9 20.4 29.4 45 61.9 76.8 60.7 30.4-1.2 41.9-19.6 78.4-19.6 36.4 0 47 19.6 78.4 18.9 32.4-.6 53.7-29.4 73.8-58.8 23.3-34 32.8-67 33.1-68.7-.7-.3-64.2-24.6-64.5-98.4zM233 104.9c15.8-19.1 26.5-45.6 23.6-72.2-22.9 1-50.7 15.3-67.1 34.5-14.7 17.1-27.5 44.4-23.9 70.3 25.5 2 51.6-13.5 67.4-32.6z" />
                                            </svg>
                                            App Store
                                        </a>
                                        <a
                                            href="#"
                                            className="flex-1 sm:flex-none px-6 py-2.5 bg-white rounded-2xl text-sm font-bold text-slate-900 flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-xl"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#00E676"
                                                    d="M17.523 15.341l-3.327-3.341 3.327-3.341 4.159 2.408c.594.344.918.84.918 1.333s-.324.989-.918 1.333l-4.159 2.408z"
                                                />
                                                <path
                                                    fill="#FF3D00"
                                                    d="M14.196 12l-11.41-11.455c.162-.036.331-.045.503-.045.541 0 1.054.218 1.459.452l12.771 7.391-3.323 3.657z"
                                                />
                                                <path
                                                    fill="#FFC400"
                                                    d="M14.196 12l3.327 3.341-12.771 7.391c-.405.234-.918.452-1.459.452-.172 0-.341-.009-.503-.045l11.406-11.139z"
                                                />
                                                <path
                                                    fill="#1976D2"
                                                    d="M2.786 23.455c-.482-.369-.786-.989-.786-1.742v-19.426c0-.753.304-1.373.786-1.742l11.41 11.455-11.41 11.455z"
                                                />
                                            </svg>
                                            Google Play
                                        </a>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-16 text-left">
                                    <div className="space-y-12">
                                        {/* Core Responsibilities */}
                                        <section>
                                            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                                <span className="text-xl">
                                                    🛠️
                                                </span>{" "}
                                                Core Responsibilities
                                            </h4>
                                            <ul className="space-y-5">
                                                {[
                                                    {
                                                        title: "System Development",
                                                        desc: "Participated in developing and optimizing web applications and RESTful APIs using .NET Core and C#.",
                                                    },
                                                    {
                                                        title: "Database Operations",
                                                        desc: "Worked with SQL Server; wrote stored procedures and views; assisted in query tuning and index optimization.",
                                                    },
                                                    {
                                                        title: "System Integration",
                                                        desc: "Contributed to migrating legacy services from SOAP to lightweight RESTful APIs for better response times.",
                                                    },
                                                ].map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="space-y-1"
                                                    >
                                                        <span className="block text-sm font-bold text-slate-200">
                                                            {item.title}
                                                        </span>
                                                        <span className="block text-xs text-slate-400 font-medium leading-relaxed">
                                                            {item.desc}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>

                                    <div className="space-y-12">
                                        {/* Key Achievements */}
                                        <section>
                                            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                                <span className="text-xl">
                                                    🏆
                                                </span>{" "}
                                                Key Achievements
                                            </h4>
                                            <div className="space-y-4">
                                                {[
                                                    "Successfully migrated communication layer from legacy SOAP to REST APIs for assigned modules.",
                                                    "Optimized SQL Server queries for the booking module, improving stability during high-traffic hours.",
                                                    "Resolved production bugs and ensured compliance with business logic requirements.",
                                                ].map((text, i) => (
                                                    <div
                                                        key={i}
                                                        className="p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/10 flex gap-3 items-start"
                                                    >
                                                        <span className="text-cyan-400 text-lg font-bold">
                                                            ✓
                                                        </span>
                                                        <p className="text-sm font-bold text-slate-300 leading-snug">
                                                            {text}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>

                                {/* Detailed Projects */}
                                <section className="text-left">
                                    <h4 className="text-sm font-black text-white uppercase tracking-wider mb-8 flex items-center gap-3">
                                        <span className="text-xl">🚀</span>{" "}
                                        Featured Projects
                                    </h4>
                                    <div className="grid grid-cols-1 gap-6">
                                        {[
                                            {
                                                id: 1,
                                                title: "Kymtrans API Integration",
                                                desc: "Support real-time seat searching, mapping, and automated booking with a background sync pipeline.",
                                                tags: [
                                                    ".NET Core",
                                                    "SQL Server",
                                                    "Web API",
                                                    "Scheduler",
                                                ],
                                                bullets: [
                                                    "Developed automated Scheduler service for ticketing data sync.",
                                                    "Built backend logic for dynamic interactive seat layout rendering.",
                                                    "Implemented booking constraints ensuring zero seat allocation discrepancies.",
                                                ],
                                            },
                                            {
                                                id: 2,
                                                title: "BRF System Modernization",
                                                desc: "Transitioning legacy integration for Britain Resort Ferry (BRF) to a modern REST platform.",
                                                tags: [
                                                    ".NET Core",
                                                    "C#",
                                                    "RESTful APIs",
                                                    "SOAP Migration",
                                                ],
                                                bullets: [
                                                    "Executed communication layer migration from legacy SOAP APIs.",
                                                    "Refactored data models and eliminated slow-running code segments.",
                                                    "Improved API response times for a more stable ferry booking experience.",
                                                ],
                                            },
                                            {
                                                id: 3,
                                                title: "RedBus Intelligence Location Mapping",
                                                desc: "Map and analyze location data between competitors to identify missing routes and gaps.",
                                                tags: [
                                                    "Advanced SQL",
                                                    "Indexing",
                                                    "Data Comparison",
                                                ],
                                                bullets: [
                                                    "Developed data ingestion module to align location datasets with RedBus.",
                                                    "Built processing logic to filter potential trip gaps and unlinked partners.",
                                                    "Generated automated reports to support data-driven expansion decisions.",
                                                ],
                                            },
                                        ].map((project) => (
                                            <div
                                                key={project.id}
                                                className="p-6 md:p-8 bg-[#0B1120]/40 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300"
                                            >
                                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                                    <div>
                                                        <h5 className="text-lg font-black text-white mb-1">
                                                            {project.id}.{" "}
                                                            {project.title}
                                                        </h5>
                                                        <p className="text-slate-400 text-xs font-medium">
                                                            {project.desc}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map(
                                                            (tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="px-2.5 py-1 bg-slate-800 text-[10px] font-black text-slate-500 rounded-lg uppercase"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                                <ul className="space-y-3">
                                                    {project.bullets.map(
                                                        (bullet, i) => (
                                                            <li
                                                                key={i}
                                                                className="flex gap-3 text-xs md:text-sm font-bold text-slate-400 group/bullet"
                                                            >
                                                                <span className="text-cyan-500 opacity-50">
                                                                    ●
                                                                </span>
                                                                {bullet}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </section>
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
    );
}

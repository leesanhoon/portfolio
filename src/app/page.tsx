"use client";

import { ProfileSection } from "@/components/sections/ProfileSection";
import { SidebarInfo } from "@/components/sections/SidebarInfo";
import { EasybookExperience } from "@/components/sections/EasybookExperience";
import { MWGExperience } from "@/components/sections/MWGExperience";
import { BachhoaxanhExperience } from "@/components/sections/BachhoaxanhExperience";
import { AwardsSection } from "@/components/sections/AwardsSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-300 flex flex-col lg:flex-row font-sans selection:bg-cyan-500/30">
            {/* Left Sidebar */}
            <div className="w-full lg:w-[340px] bg-[#111827] border-b lg:border-b-0 lg:border-r border-slate-800/50 lg:h-screen overflow-y-auto lg:sticky lg:top-0 scrollbar-hide p-6 lg:p-10 flex flex-col">
                <ProfileSection />
                <SidebarInfo />
            </div>

            {/* Right Content Area */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto scroll-smooth">
                <div className="max-w-5xl mx-auto">
                    {/* Experiences Section */}
                    <div className="flex items-center gap-6 mb-12 lg:mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-cyan-400 tracking-tighter uppercase flex items-center gap-4">
                            EXPERIENCES
                            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                        </h2>
                    </div>

                    <div className="relative pl-6 md:pl-16">
                        {/* Main Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500/30 rounded-full"></div>

                        <EasybookExperience />
                        <MWGExperience />
                        <BachhoaxanhExperience />
                    </div>

                    {/* Awards Section */}
                    <AwardsSection />
                </div>
            </div>
        </div>
    );
}

"use client";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { SidebarInfo } from "@/components/sections/SidebarInfo";
import { EasybookExperience } from "@/components/sections/EasybookExperience";
import { MWGExperience } from "@/components/sections/MWGExperience";
import { BachhoaxanhExperience } from "@/components/sections/BachhoaxanhExperience";
import { HighlightProject } from "@/components/sections/HighlightProject";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { AIExperience } from "@/components/sections/AIExperience";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-300 flex flex-col lg:flex-row font-sans selection:bg-cyan-500/30">
            <div className="w-full lg:w-[340px] bg-[#101827] border-b lg:border-b-0 lg:border-r border-slate-800/70 lg:h-screen overflow-y-auto lg:sticky lg:top-0 scrollbar-hide p-6 lg:p-8 flex flex-col">
                <ProfileSection />
                <SidebarInfo />
            </div>

            <div className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto scroll-smooth">
                <div className="max-w-5xl mx-auto">
                    <ImpactMetrics />

                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-3">
                            Experience
                            <div className="w-10 h-px bg-cyan-400/60"></div>
                        </h2>
                    </div>

                    <div className="relative pl-5 md:pl-10">
                        <div className="absolute left-0 top-1 bottom-0 w-px bg-slate-700"></div>

                        <EasybookExperience />
                        <MWGExperience />
                        <BachhoaxanhExperience />
                    </div>

                    <AIExperience />

                    <HighlightProject />

                    <ProjectsSection />

                    <AwardsSection />
                </div>
            </div>
        </div>
    );
}

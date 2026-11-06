
import { CollapsibleSection } from "../ui/CollapsibleSection";

export const MWGExperience = () => {
    return (
        <div className="relative mb-8 lg:mb-20 group">
            <div className="absolute -left-[22px] md:-left-[46px] top-3 w-3 h-3 rounded-full bg-[#FFDC58] border-2 border-[#111] transition-colors z-10">
                <div className="sr-only">Role</div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider text-[#fff] bg-[#111] border-2 border-[#111] px-3 py-1.5 rounded-md mb-4 md:mb-0">
                    05/2020 - 09/2025
                </span>
            </div>

            <div className="bg-white shadow-[4px_4px_0_#111] rounded-md p-4 md:p-7 border-2 border-[#111] group-hover:shadow-[7px_7px_0_#111] transition-colors">
                <div className="mb-6 md:mb-10 text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-[#111] mb-2">
                        MWG Group E-Commerce Platform (MWG Shop)
                    </h3>
                    <p className="text-[#333] text-xs md:text-sm font-bold mb-4 md:mb-6">
                        Software Engineer / .Net Developer
                    </p>

                    <div className="flex gap-2 sm:gap-4 mb-5 md:mb-10">
                        <a
                            href="https://apps.apple.com/vn/app/quà-tặng-vip/id1589555369"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 sm:w-auto sm:h-auto sm:px-4 sm:py-2 bg-[#111] rounded-md shadow-[4px_4px_0_#111] text-sm font-bold text-[#fff] flex items-center justify-center gap-3 hover:-translate-y-0.5 transition-transform border-2 border-[#111]"
                        >
                            <svg
                                className="w-5 h-5 shrink-0"
                                viewBox="0 0 384 512"
                                fill="currentColor"
                            >
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-22.1-82.6-21.4-41.4.6-79.5 24.1-100.8 61.1-42.9 74.4-11 183.8 30.6 243.9 20.4 29.4 45 61.9 76.8 60.7 30.4-1.2 41.9-19.6 78.4-19.6 36.4 0 47 19.6 78.4 18.9 32.4-.6 53.7-29.4 73.8-58.8 23.3-34 32.8-67 33.1-68.7-.7-.3-64.2-24.6-64.5-98.4zM233 104.9c15.8-19.1 26.5-45.6 23.6-72.2-22.9 1-50.7 15.3-67.1 34.5-14.7 17.1-27.5 44.4-23.9 70.3 25.5 2 51.6-13.5 67.4-32.6z" />
                            </svg>
                            <span className="hidden sm:inline">App Store</span>
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=mwg.tgdd.loyalty&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 sm:w-auto sm:h-auto sm:px-4 sm:py-2 bg-white rounded-md border-2 border-[#111] shadow-[4px_4px_0_#111] text-sm font-bold text-[#111] flex items-center justify-center gap-3 hover:-translate-y-0.5 transition-transform"
                        >
                            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
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
                            <span className="hidden sm:inline">Google Play</span>
                        </a>
                    </div>

                    <CollapsibleSection title="About MWG Shop" defaultOpen={false}>
                        <p className="text-[#111] text-sm leading-relaxed max-w-4xl font-medium">
                            MWG Shop is a unified e-commerce platform serving all
                            major retail brands under MWG Group, including
                            Thegioididong, Dienmayxanh, Bachhoaxanh, Avakid, and
                            more. The platform is built to handle high volumes of
                            online traffic and transactions, supporting millions of
                            customers nationwide. Its advanced infrastructure is
                            designed for growth, flexibility, and rapid adaptation
                            to evolving business needs, helping MWG Group maintain
                            its position as one of Vietnam's leading retail
                            conglomerates.
                        </p>
                    </CollapsibleSection>
                </div>

                <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 text-left">
                    <div className="space-y-6 md:space-y-8">
                        <h4 className="text-base font-bold text-[#111] mb-4 md:mb-5 flex items-center gap-3">
                            <span className="text-xl">🚀</span> Key
                            Responsibilities & Achievements
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                            {[
                                "Designed and developed a scalable shopping cart API serving all MWG Group's e-commerce websites, including Thegioididong, Dienmayxanh, Bachhoaxanh, Avakid, and others.",
                                "Architected the cart service to meet complex purchasing requirements and ensure smooth user experiences across multiple platforms.",
                                "Ensured rapid response times, reliability, and flexibility of the API, enabling seamless integration and consistent functionality across MWG Group sites.",
                                "Collaborated across product and development teams to align on feature requirements and deliver high-quality API services supporting millions of users daily.",
                                "Contributed to building a modular and maintainable API architecture facilitating future expansions and enhancements.",
                            ].map((text, i) => (
                                <li
                                    key={i}
                                    className="flex gap-3 text-sm font-bold text-[#333]"
                                >
                                    <span className="text-[#111] text-lg leading-none">
                                        •
                                    </span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

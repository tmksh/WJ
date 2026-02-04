import { FanClubComparisonSection } from "./sections/FanClubComparisonSection";
import { FanClubOverviewSection } from "./sections/FanClubOverviewSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MembershipBenefitsSection } from "./sections/MembershipBenefitsSection";
import { MembershipPlansSection } from "./sections/MembershipPlansSection";
import { ShiroseFanClubSection } from "./sections/ShiroseFanClubSection";

export const Pc = (): JSX.Element => {
  return (
    <div
      className="bg-grey-1 overflow-x-hidden overflow-y-auto w-full min-w-0 min-h-screen lg:min-h-0 lg:max-h-none lg:min-w-[1024px] lg:w-full relative"
      data-model-id="42:2"
    >
      {/* SP時のみ表示（PC時はHeroSection内のロゴ1つのみ） */}
      <img
        className="absolute top-4 left-4 w-[60px] h-auto aspect-[1.19] object-cover lg:hidden"
        alt="White House Logo"
        src="https://c.animaapp.com/h73j2KJP/img/250529-white-house-logo@2x.png"
      />

      <main className="flex flex-col w-full max-w-full lg:w-full lg:max-w-[100vw] items-start relative">
        {/* PC時: ビューポート幅に合わせた %/vw ベースのレイアウト。SP時: 通常フロー */}
        <div className="w-full flex flex-col items-stretch">
          <div className="w-full max-h-[100dvh] lg:max-h-none lg:flex lg:justify-center lg:overflow-x-hidden">
            <HeroSection />
          </div>
          <div className="relative w-full flex flex-col items-start lg:overflow-hidden">
            <img
              src="/img/right-icon-sp.svg"
              alt=""
              className="lg:hidden absolute top-0 right-0 w-[58px] h-auto pointer-events-none"
              aria-hidden="true"
            />
            <img
              src="/img/right-icon-pc.svg"
              alt=""
              className="hidden lg:block absolute top-0 right-0 w-[81px] h-auto pointer-events-none"
              aria-hidden="true"
            />
            <MembershipBenefitsSection />
            <MembershipPlansSection />
            <ShiroseFanClubSection />
            <FanClubComparisonSection />
            <FanClubOverviewSection />
            <FooterSection />
          </div>
        </div>
      </main>
    </div>
  );
};

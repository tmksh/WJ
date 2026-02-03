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
      className="bg-grey-1 overflow-hidden w-full min-w-0 min-h-screen lg:min-w-[1024px] lg:min-h-[6182px] lg:w-full relative"
      data-model-id="42:2"
    >
      <img
        className="absolute top-4 left-4 lg:left-[92px] w-[60px] h-auto lg:w-[77px] lg:h-[65px] aspect-[1.19] object-cover"
        alt="White House Logo"
        src="https://c.animaapp.com/h73j2KJP/img/250529-white-house-logo@2x.png"
      />

      <main className="flex flex-col w-full max-w-full lg:w-full items-start relative lg:absolute lg:top-0 lg:left-0">
        {/* PC時(1024px〜): デザイン幅1440pxをそのまま縮小して表示。SP時: 通常フロー */}
        <div className="pc-layout-scaler-wrapper w-full">
          <div className="pc-layout-scaler w-full flex flex-col items-stretch">
            {/* PC時はヒーローを画面幅内で中央寄せ。SP時は縦を画面いっぱいに収める */}
            <div className="w-full max-h-[100dvh] lg:max-h-none lg:flex lg:justify-center lg:overflow-x-hidden">
              <HeroSection />
            </div>
            {/* FV下のセクション：右端にSVGアイコンを余白なしで配置（PC時のみ） */}
            <div className="relative w-full flex flex-col items-start">
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
        </div>
      </main>
    </div>
  );
};

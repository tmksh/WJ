import { useLanguage } from "../../../../contexts/LanguageContext";

export const FanClubOverviewSection = (): JSX.Element => {
  const { t } = useLanguage();

  const membershipButtons = [
    { labelKey: "benefits_iphone" as const, sublabelKey: "benefits_carrier" as const },
    { labelKey: "benefits_android" as const, sublabelKey: "benefits_carrier" as const },
    { labelKey: "benefits_card" as const, sublabelKey: null as const },
  ];

  return (
    <section className="flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-20 pb-0 px-4 lg:px-0 relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex flex-col w-full max-w-[547px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex self-stretch w-full flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[22px] lg:text-[36px] text-center tracking-[0] leading-[1.2] whitespace-nowrap" data-i18n="overview_title">
              {t("overview_title")}
            </h2>
          </div>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div
            className="inline-flex items-end relative flex-[0_0_auto]"
            aria-hidden="true"
          >
            <img
              src="/img/Frame5-decor.png"
              alt=""
              className="flex-shrink-0 h-[38px] w-auto lg:w-[46px] lg:h-auto object-contain -scale-x-100"
              width={33}
              height={38}
            />
          </div>

          <p className="w-fit mt-[-1.00px] font-black text-main text-[30px] lg:text-[50px] text-center leading-[30px] lg:leading-[50px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n="overview_accepting">
            {t("overview_accepting")}
          </p>

          <div
            className="inline-flex items-end relative flex-[0_0_auto]"
            aria-hidden="true"
          >
            <img
              src="/img/Frame5-decor.png"
              alt=""
              className="flex-shrink-0 h-[38px] w-auto lg:w-[46px] lg:h-auto object-contain"
              width={33}
              height={38}
            />
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-start gap-0 lg:gap-0 relative self-stretch w-[calc(100%+32px)] -mx-4 lg:mx-0 lg:w-full min-w-0 flex-[0_0_auto]">
        <article className="flex flex-col w-full max-w-none lg:max-w-none lg:w-1/2 lg:min-w-0 lg:flex-shrink-0 lg:h-[756px] items-center gap-6 lg:gap-8 px-4 lg:p-[max(1rem,2.8vw)] py-10 relative bg-main">
          <img
            className="relative w-[463px] h-[514.11px] -my-5 lg:my-0 object-contain"
            alt={t("overview_alt_app")}
            src="https://c.animaapp.com/h73j2KJP/img/frame-41.svg"
          />

          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <p className="w-fit mt-[-1.00px] font-extrabold text-white text-[18px] lg:text-[20px] text-center leading-[28.0px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n="overview_app_desc" style={{ whiteSpace: "pre-line" }}>
              {t("overview_app_desc")}
            </p>

            <nav
              className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-4 lg:min-w-0 relative self-stretch w-full flex-[0_0_auto]"
              aria-label="入会方法選択"
            >
              {membershipButtons.map((button, index) => (
                <button
                  key={index}
                  className="all-[unset] box-border w-full lg:min-w-[100px] lg:flex-1 lg:max-w-[168px] bg-white flex flex-col h-[58px] items-center justify-center gap-[5px] px-4 lg:px-2 py-2 relative rounded-[1000px] shadow-PC cursor-pointer hover:opacity-90 transition-opacity"
                  type="button"
                  aria-label={button.sublabelKey ? `${t(button.labelKey)} ${t(button.sublabelKey)}` : t(button.labelKey)}
                >
                  <span
                    className={`w-fit ${index === 0 ? "ml-[-48.00px] mr-[-48.00px] lg:ml-0 lg:mr-0" : index === 1 ? "ml-[-52.00px] mr-[-52.00px] lg:ml-0 lg:mr-0" : "ml-[-61.00px] mr-[-61.00px] lg:ml-0 lg:mr-0"} font-extrabold text-main text-lg text-center leading-[18px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]`}
                  >
                    {t(button.labelKey)}
                  </span>

                  {button.sublabelKey && (
                    <span className="relative w-fit ml-[-32.00px] mr-[-32.00px] lg:ml-0 lg:mr-0 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-main text-[10px] text-center tracking-[0] leading-[10px] whitespace-nowrap" data-i18n={button.sublabelKey}>
                      {t(button.sublabelKey)}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </article>

        <article className="flex flex-col w-full max-w-none lg:max-w-none lg:w-1/2 lg:min-w-0 lg:flex-shrink-0 min-h-[400px] lg:h-[756px] items-center gap-6 lg:gap-8 px-4 lg:p-[max(1rem,2.8vw)] py-10 relative bg-light-blue">
          <img
            className="relative w-full max-w-[463px] h-[514px] -my-5 lg:my-0 object-contain"
            alt={t("overview_alt_plus")}
            src="https://c.animaapp.com/h73j2KJP/img/frame-47.svg"
          />

          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <p className="self-stretch mt-[-1.00px] font-extrabold text-white text-[18px] lg:text-[20px] text-center leading-[28.0px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n="overview_plus_desc" style={{ whiteSpace: "pre-line" }}>
              {t("overview_plus_desc")}
            </p>

            <button
              className="all-[unset] box-border w-full lg:w-[168px] bg-white flex flex-col h-[58px] items-center justify-center gap-[5px] px-[82px] py-2 relative rounded-[1000px] shadow-[2px_4px_4px_#00000040] cursor-pointer hover:opacity-90 transition-opacity"
              type="button"
              aria-label={t("overview_aria_plus")}
            >
              <span className="w-fit ml-[-34.00px] mr-[-34.00px] font-extrabold text-light-blue text-lg text-center leading-[18px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n="overview_join">
                {t("overview_join")}
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
